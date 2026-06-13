import type {
  AudienceTag,
  FieldTag,
  FreshnessRecord,
  QualityScore,
  ResourceMetadata,
  ResourceTypeTag,
} from '@/types/freshness';

export type PathfinderGoal =
  | 'all'
  | 'funding'
  | 'learn'
  | 'community'
  | 'mentorship'
  | 'career'
  | 'events';

export type PathfinderStage = AudienceTag;
export type PathfinderField = FieldTag;
export type PathfinderCostPreference = 'free' | 'all';
export type PathfinderRegion =
  | 'all'
  | 'Global'
  | 'US'
  | 'Europe'
  | 'Americas'
  | 'Asia'
  | 'Africa'
  | 'Oceania';

export interface PathfinderFilters {
  stage: PathfinderStage;
  field: PathfinderField;
  region: PathfinderRegion;
  goal: PathfinderGoal;
  cost: PathfinderCostPreference;
}

export interface PathfinderItem {
  id: string;
  type: ResourceTypeTag;
  title: string;
  description: string;
  url: string;
  cost?: string;
  amount?: string;
  region?: string;
  audience: AudienceTag[];
  fields: FieldTag[];
  metadata: ResourceMetadata;
  freshness?: FreshnessRecord;
  quality: QualityScore;
}

export interface PathfinderMatch extends PathfinderItem {
  score: number;
  reasons: string[];
}

export type RoadmapBucket = 'now' | 'month' | 'later';

export interface RoadmapItem {
  id: string;
  type: ResourceTypeTag;
  title: string;
  description: string;
  url: string;
  bucket: RoadmapBucket;
  addedAt: number;
}

export type RoadmapState = Record<RoadmapBucket, RoadmapItem[]>;

export type PathfinderOption<TValue extends string> = {
  value: TValue;
  label: string;
};
