import { communities } from '@/data/communities';
import { courses } from '@/data/courses';
import {
  conferences,
  jobBoards,
  mentorshipPlatforms,
  organizations,
  programs,
  scholarships,
} from '@/data/resources';
import { getFreshness } from '@/lib/freshness';
import { inferCostTag, scoreResourceQuality, slugifyResourceId } from '@/lib/resourceMetadata';
import type { AudienceTag, FieldTag, ResourceMetadata } from '@/types/freshness';
import type { PathfinderItem } from './types';

function idFor(prefix: PathfinderItem['type'], id: string): string {
  return `${prefix}:${id}`;
}

function metadataFor(input: {
  id: string;
  type: PathfinderItem['type'];
  cost?: string;
  region?: string;
  audience?: AudienceTag[];
  fields?: FieldTag[];
  deadlineType?: ResourceMetadata['deadlineType'];
}): ResourceMetadata {
  return {
    id: input.id,
    audience: input.audience ?? ['all'],
    fields: input.fields ?? ['general-stem'],
    regions: input.region ? [input.region] : undefined,
    resourceTypes: [input.type],
    cost: inferCostTag(input.cost),
    deadlineType: input.deadlineType ?? 'unknown',
    identityFocus: ['women-in-stem'],
  };
}

function itemFor(input: {
  id: string;
  type: PathfinderItem['type'];
  title: string;
  description: string;
  url?: string;
  cost?: string;
  amount?: string;
  region?: string;
  audience?: AudienceTag[];
  fields?: FieldTag[];
  deadline?: string;
  deadlineType?: ResourceMetadata['deadlineType'];
}): PathfinderItem | null {
  if (!input.url) return null;

  const metadata = metadataFor({
    id: input.id,
    type: input.type,
    cost: input.cost,
    region: input.region,
    audience: input.audience,
    fields: input.fields,
    deadlineType: input.deadlineType,
  });
  const freshness = getFreshness(input.id);

  return {
    id: input.id,
    type: input.type,
    title: input.title,
    description: input.description,
    url: input.url,
    cost: input.cost,
    amount: input.amount,
    region: input.region,
    audience: metadata.audience ?? ['all'],
    fields: metadata.fields ?? ['general-stem'],
    metadata,
    freshness,
    quality: scoreResourceQuality({
      id: input.id,
      url: input.url,
      description: input.description,
      amount: input.amount,
      cost: input.cost,
      region: input.region,
      deadline: input.deadline,
      freshness,
      metadata,
    }),
  };
}

function courseFields(field: string): FieldTag[] {
  const normalized = field.toLowerCase();
  if (normalized.includes('computer')) return ['computer-science'];
  if (normalized.includes('engineering')) return ['engineering'];
  if (normalized.includes('data') || normalized.includes('ai')) return ['data-science'];
  if (normalized.includes('bio')) return ['biology', 'science'];
  if (normalized.includes('math')) return ['mathematics'];
  if (normalized.includes('physics') || normalized.includes('environmental')) return ['science'];
  return ['general-stem'];
}

function inferredFields(...values: (string | undefined)[]): FieldTag[] {
  const text = values.filter(Boolean).join(' ').toLowerCase();
  const fields = new Set<FieldTag>();

  if (/\b(computer|computing|software|coding|programming|technology|tech|cyber|web)\b/.test(text)) {
    fields.add('computer-science');
  }
  if (/\b(data|machine learning|artificial intelligence|\bai\b|analytics)\b/.test(text)) {
    fields.add('data-science');
  }
  if (/\b(engineering|engineer|aerospace|robotics|mechanical|electrical)\b/.test(text)) {
    fields.add('engineering');
  }
  if (/\b(biology|bio|biotech|life sciences|genomic|biochemistry|medical)\b/.test(text)) {
    fields.add('biology');
    fields.add('science');
  }
  if (/\b(math|mathematics|calculus|algebra|statistics)\b/.test(text)) {
    fields.add('mathematics');
  }
  if (/\b(science|research|physics|environmental|climate|chemistry|astronomy)\b/.test(text)) {
    fields.add('science');
  }

  return fields.size > 0 ? Array.from(fields) : ['general-stem'];
}

function organizationFields(category: string): FieldTag[] {
  if (category === 'technology') return ['computer-science'];
  if (category === 'engineering') return ['engineering'];
  if (category === 'science') return ['science'];
  if (category === 'mathematics') return ['mathematics'];
  return ['general-stem'];
}

function programAudience(category: string, audience?: string): AudienceTag[] {
  const normalized = `${category} ${audience ?? ''}`.toLowerCase();
  if (normalized.includes('k12') || normalized.includes('high school')) return ['high-school'];
  if (normalized.includes('bootcamp')) return ['career-switcher', 'professional'];
  if (normalized.includes('student')) return ['undergraduate', 'graduate'];
  return ['all'];
}

export function getPathfinderCatalog(): PathfinderItem[] {
  const items = [
    ...scholarships.map((scholarship) =>
      itemFor({
        id: idFor('scholarship', scholarship.id),
        type: 'scholarship',
        title: scholarship.name,
        description: scholarship.description,
        url: scholarship.url,
        amount: scholarship.amount,
        cost: 'Free',
        region: scholarship.region,
        audience: [scholarship.level],
        fields: inferredFields(scholarship.name, scholarship.description),
        deadline: scholarship.nextDeadline,
        deadlineType: scholarship.nextDeadline ? 'fixed' : 'unknown',
      })
    ),
    ...courses.map((course) =>
      itemFor({
        id: idFor('course', slugifyResourceId(course.title)),
        type: 'course',
        title: course.title,
        description: `${course.field} course or learning resource.`,
        url: course.url,
        cost: course.cost,
        region: course.region,
        audience: ['all'],
        fields: courseFields(course.field),
        deadlineType: 'rolling',
      })
    ),
    ...programs.map((program) =>
      itemFor({
        id: idFor('program', program.id),
        type: 'program',
        title: program.name,
        description: program.description,
        url: program.url,
        cost: program.cost,
        region: program.region,
        audience: programAudience(program.category, program.audience),
        fields: inferredFields(program.name, program.description, program.category),
        deadlineType: 'rolling',
      })
    ),
    ...organizations.map((organization) =>
      itemFor({
        id: idFor('organization', organization.id),
        type: 'organization',
        title: organization.name,
        description: organization.description,
        url: organization.url,
        cost: organization.cost,
        region: organization.region,
        audience: ['all'],
        fields: organizationFields(organization.category),
      })
    ),
    ...conferences.map((conference) =>
      itemFor({
        id: idFor('conference', conference.id),
        type: 'conference',
        title: conference.name,
        description: conference.description,
        url: conference.url,
        cost: conference.cost,
        region: conference.region,
        audience: ['professional', 'graduate'],
        fields: inferredFields(conference.name, conference.description),
        deadline: conference.timing,
        deadlineType: conference.month ? 'annual' : 'unknown',
      })
    ),
    ...mentorshipPlatforms.map((platform) =>
      itemFor({
        id: idFor('mentorship', platform.id),
        type: 'mentorship',
        title: platform.name,
        description: platform.description,
        url: platform.url,
        cost: platform.cost,
        region: platform.region,
        audience: ['all'],
        fields: inferredFields(platform.name, platform.description),
      })
    ),
    ...jobBoards.map((board) =>
      itemFor({
        id: idFor('job-board', board.id),
        type: 'job-board',
        title: board.name,
        description: board.description,
        url: board.url,
        cost: board.cost,
        region: board.region,
        audience: ['professional', 'career-switcher', 'graduate'],
        fields: inferredFields(board.name, board.description),
      })
    ),
    ...communities.map((community) =>
      itemFor({
        id: idFor('community', community.id),
        type: 'community',
        title: community.name,
        description: community.description,
        url: community.url,
        cost: 'Free',
        region: community.region,
        audience: ['all'],
        fields: inferredFields(community.name, community.description),
      })
    ),
  ];

  return items.filter((item): item is PathfinderItem => item !== null);
}
