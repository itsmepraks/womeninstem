import type { PathfinderMatch, RoadmapBucket, RoadmapItem, RoadmapState } from './types';

const STORAGE_KEY = 'stemspark:pathfinder-roadmap:v1';

export function emptyRoadmap(): RoadmapState {
  return {
    now: [],
    month: [],
    later: [],
  };
}

function isBucket(value: unknown): value is RoadmapBucket {
  return value === 'now' || value === 'month' || value === 'later';
}

function isRoadmapItem(value: unknown): value is RoadmapItem {
  if (!value || typeof value !== 'object') return false;
  const item = value as Partial<RoadmapItem>;
  return (
    typeof item.id === 'string' &&
    typeof item.type === 'string' &&
    typeof item.title === 'string' &&
    typeof item.description === 'string' &&
    typeof item.url === 'string' &&
    isBucket(item.bucket) &&
    typeof item.addedAt === 'number'
  );
}

export function readRoadmap(): RoadmapState {
  if (typeof window === 'undefined') return emptyRoadmap();

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyRoadmap();

    const parsed = JSON.parse(raw) as Partial<Record<RoadmapBucket, unknown>>;
    const empty = emptyRoadmap();

    return {
      now: Array.isArray(parsed.now) ? parsed.now.filter(isRoadmapItem) : empty.now,
      month: Array.isArray(parsed.month) ? parsed.month.filter(isRoadmapItem) : empty.month,
      later: Array.isArray(parsed.later) ? parsed.later.filter(isRoadmapItem) : empty.later,
    };
  } catch {
    return emptyRoadmap();
  }
}

export function writeRoadmap(state: RoadmapState) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function toRoadmapItem(match: PathfinderMatch, bucket: RoadmapBucket): RoadmapItem {
  return {
    id: match.id,
    type: match.type,
    title: match.title,
    description: match.description,
    url: match.url,
    bucket,
    addedAt: Date.now(),
  };
}

export function addRoadmapItem(state: RoadmapState, item: RoadmapItem): RoadmapState {
  const withoutExisting = removeRoadmapItem(state, item.id);
  return {
    ...withoutExisting,
    [item.bucket]: [item, ...withoutExisting[item.bucket]],
  };
}

export function removeRoadmapItem(state: RoadmapState, id: string): RoadmapState {
  return {
    now: state.now.filter((item) => item.id !== id),
    month: state.month.filter((item) => item.id !== id),
    later: state.later.filter((item) => item.id !== id),
  };
}

export function moveRoadmapItem(
  state: RoadmapState,
  id: string,
  bucket: RoadmapBucket
): RoadmapState {
  const allItems = [...state.now, ...state.month, ...state.later];
  const item = allItems.find((roadmapItem) => roadmapItem.id === id);
  if (!item) return state;

  return addRoadmapItem(removeRoadmapItem(state, id), {
    ...item,
    bucket,
  });
}

export function hasRoadmapItem(state: RoadmapState, id: string): boolean {
  return [...state.now, ...state.month, ...state.later].some((item) => item.id === id);
}
