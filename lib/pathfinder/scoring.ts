import type { FreshnessStatus, ResourceTypeTag } from '@/types/freshness';
import type {
  PathfinderCostPreference,
  PathfinderField,
  PathfinderFilters,
  PathfinderGoal,
  PathfinderMatch,
  PathfinderOption,
  PathfinderRegion,
  PathfinderStage,
  PathfinderItem,
} from './types';

export const DEFAULT_PATHFINDER_FILTERS: PathfinderFilters = {
  stage: 'undergraduate',
  field: 'general-stem',
  region: 'all',
  goal: 'all',
  cost: 'free',
};

export const STAGE_OPTIONS: PathfinderOption<PathfinderStage>[] = [
  { value: 'all', label: 'Any stage' },
  { value: 'high-school', label: 'High school' },
  { value: 'undergraduate', label: 'Undergrad' },
  { value: 'graduate', label: 'Graduate' },
  { value: 'postdoctoral', label: 'Postdoc' },
  { value: 'professional', label: 'Professional' },
  { value: 'career-switcher', label: 'Career switcher' },
];

export const FIELD_OPTIONS: PathfinderOption<PathfinderField>[] = [
  { value: 'general-stem', label: 'General STEM' },
  { value: 'computer-science', label: 'Computer science' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'data-science', label: 'Data science' },
  { value: 'biology', label: 'Biology' },
  { value: 'mathematics', label: 'Mathematics' },
  { value: 'science', label: 'Science' },
];

export const REGION_OPTIONS: PathfinderOption<PathfinderRegion>[] = [
  { value: 'all', label: 'All regions' },
  { value: 'Global', label: 'Global' },
  { value: 'US', label: 'United States' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Oceania', label: 'Oceania' },
];

export const GOAL_OPTIONS: PathfinderOption<PathfinderGoal>[] = [
  { value: 'all', label: 'Explore everything' },
  { value: 'funding', label: 'Funding' },
  { value: 'learn', label: 'Learn skills' },
  { value: 'community', label: 'Community' },
  { value: 'mentorship', label: 'Mentorship' },
  { value: 'career', label: 'Career' },
  { value: 'events', label: 'Events' },
];

export const COST_OPTIONS: PathfinderOption<PathfinderCostPreference>[] = [
  { value: 'free', label: 'Free only' },
  { value: 'all', label: 'Include paid' },
];

export function labelForFilter<TValue extends string>(
  options: PathfinderOption<TValue>[],
  value: TValue
): string {
  return options.find((option) => option.value === value)?.label ?? value;
}

export const MATCH_GROUPS = [
  {
    id: 'best',
    title: 'Best next steps',
    types: [
      'scholarship',
      'course',
      'program',
      'community',
      'mentorship',
      'job-board',
      'conference',
      'organization',
    ] satisfies ResourceTypeTag[],
  },
  {
    id: 'funding',
    title: 'Scholarships & funding',
    types: ['scholarship'] satisfies ResourceTypeTag[],
  },
  {
    id: 'learning',
    title: 'Courses to build skill',
    types: ['course', 'program'] satisfies ResourceTypeTag[],
  },
  {
    id: 'community',
    title: 'Communities & mentorship',
    types: ['community', 'mentorship', 'organization'] satisfies ResourceTypeTag[],
  },
  {
    id: 'career',
    title: 'Career and events',
    types: ['job-board', 'conference'] satisfies ResourceTypeTag[],
  },
] satisfies {
  id: string;
  title: string;
  types: ResourceTypeTag[];
}[];

const GOAL_TYPE_WEIGHTS: Record<PathfinderGoal, Partial<Record<ResourceTypeTag, number>>> = {
  all: {},
  funding: { scholarship: 45, program: 12 },
  learn: { course: 45, program: 30 },
  community: { community: 45, organization: 30, mentorship: 20 },
  mentorship: { mentorship: 45, community: 18, organization: 16 },
  career: { 'job-board': 45, conference: 20, organization: 12 },
  events: { conference: 45, community: 15, organization: 12 },
};

function isHealthy(status: FreshnessStatus | undefined): boolean {
  return status === 'active' || status === 'redirected';
}

function isFree(item: PathfinderItem): boolean {
  return item.metadata.cost === 'free' || item.cost?.toLowerCase().includes('free') === true;
}

function stageFit(
  item: PathfinderItem,
  stage: PathfinderStage
): 'any' | 'exact' | 'open' | 'mismatch' {
  if (stage === 'all') return 'any';
  if (item.audience.includes(stage)) return 'exact';
  if (item.audience.includes('all')) return 'open';
  return 'mismatch';
}

function fieldFit(
  item: PathfinderItem,
  field: PathfinderField
): 'any' | 'exact' | 'related' | 'broad' | 'mismatch' {
  if (field === 'general-stem') return 'any';
  if (item.fields.includes(field)) return 'exact';
  if (item.fields.includes('general-stem')) return 'broad';
  if (field === 'data-science' && item.fields.includes('computer-science')) return 'related';
  if (field === 'biology' && item.fields.includes('science')) return 'related';
  if (field === 'science' && item.fields.some((value) => value === 'biology')) return 'related';
  return 'mismatch';
}

function regionFit(
  item: PathfinderItem,
  region: PathfinderRegion
): 'any' | 'exact' | 'global' | 'unknown' | 'mismatch' {
  if (region === 'all') return 'any';
  if (!item.region) return 'unknown';
  if (item.region === region) return 'exact';
  if (item.region === 'Global') return 'global';
  return 'mismatch';
}

function uniqueReasons(reasons: string[]): string[] {
  return Array.from(new Set(reasons)).slice(0, 3);
}

export function scorePathfinderItem(
  item: PathfinderItem,
  filters: PathfinderFilters
): PathfinderMatch {
  let score = 20;
  const reasons: string[] = [];

  const goalBoost =
    filters.goal === 'all' ? 8 : (GOAL_TYPE_WEIGHTS[filters.goal][item.type] ?? -10);
  score += goalBoost;
  if (goalBoost >= 30)
    reasons.push(
      `fits your ${GOAL_OPTIONS.find((g) => g.value === filters.goal)?.label.toLowerCase() ?? 'goal'} goal`
    );

  const stageMatch = stageFit(item, filters.stage);
  if (stageMatch === 'any') {
    score += 6;
  } else if (stageMatch === 'exact') {
    score += 28;
    reasons.push(
      `useful for ${STAGE_OPTIONS.find((s) => s.value === filters.stage)?.label.toLowerCase()}`
    );
  } else if (stageMatch === 'open') {
    score += 8;
    if (filters.goal === 'all')
      reasons.push(
        `open to ${STAGE_OPTIONS.find((s) => s.value === filters.stage)?.label.toLowerCase()}`
      );
  } else {
    score -= 30;
  }

  const fieldMatch = fieldFit(item, filters.field);
  if (fieldMatch === 'any') {
    score += 8;
  } else if (fieldMatch === 'exact') {
    score += 30;
    reasons.push(
      `connects to ${FIELD_OPTIONS.find((f) => f.value === filters.field)?.label.toLowerCase()}`
    );
  } else if (fieldMatch === 'related') {
    score += 16;
    reasons.push('related field fit');
  } else if (fieldMatch === 'broad') {
    score += 2;
  } else {
    score -= 22;
  }

  const regionMatch = regionFit(item, filters.region);
  if (regionMatch === 'any') {
    score += 5;
  } else if (regionMatch === 'exact') {
    score += 24;
    reasons.push('matches your region');
  } else if (regionMatch === 'global') {
    score += 10;
    reasons.push('available globally');
  } else if (regionMatch === 'unknown') {
    score += 1;
  } else {
    score -= 36;
  }

  if (filters.cost === 'free') {
    if (isFree(item)) {
      score += 18;
      reasons.push('free');
    } else {
      score -= 60;
    }
  } else if (isFree(item)) {
    score += 6;
  }

  if (isHealthy(item.freshness?.status)) {
    score += item.freshness?.status === 'redirected' ? 10 : 14;
    reasons.push('recently verified');
  } else if (item.freshness?.status === 'stale' || item.freshness?.status === 'error') {
    score -= 16;
  }

  if (item.quality.label === 'Highly reliable') score += 12;
  if (item.quality.label === 'Verified') score += 8;
  if (item.quality.label === 'Needs review') score -= 8;

  if (item.amount) {
    score += 5;
    reasons.push('funding amount listed');
  }

  return {
    ...item,
    score,
    reasons: uniqueReasons(reasons.length > 0 ? reasons : ['good starting point']),
  };
}

export function getPathfinderMatches(
  items: PathfinderItem[],
  filters: PathfinderFilters,
  limit = 60
): PathfinderMatch[] {
  return items
    .filter((item) => filters.cost !== 'free' || isFree(item))
    .map((item) => scorePathfinderItem(item, filters))
    .filter((match) => match.score > 15)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}

export function groupPathfinderMatches(matches: PathfinderMatch[]) {
  return MATCH_GROUPS.map((group) => {
    const groupMatches =
      group.id === 'best'
        ? matches.slice(0, 6)
        : matches.filter((match) => group.types.includes(match.type)).slice(0, 8);

    return {
      id: group.id,
      title: group.title,
      matches: groupMatches,
    };
  }).filter((group) => group.matches.length > 0);
}
