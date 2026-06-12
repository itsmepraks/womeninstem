export type FreshnessStatus = 'active' | 'redirected' | 'stale' | 'error' | 'unchecked';

export interface FreshnessRecord {
  id: string;
  label: string;
  category: string;
  url: string;
  status: FreshnessStatus;
  statusCode?: number;
  checkedAt: string;
  lastActiveAt?: string;
  finalUrl?: string;
  consecutiveFailures: number;
  message?: string;
}

export type QualityLabel = 'Highly reliable' | 'Verified' | 'Limited info' | 'Needs review';

export interface QualityScore {
  score: number;
  label: QualityLabel;
  reason: string;
}

export type AudienceTag =
  | 'high-school'
  | 'undergraduate'
  | 'graduate'
  | 'postdoctoral'
  | 'professional'
  | 'career-switcher'
  | 'all';

export type FieldTag =
  | 'computer-science'
  | 'engineering'
  | 'science'
  | 'mathematics'
  | 'biology'
  | 'data-science'
  | 'general-stem';

export type ResourceTypeTag =
  | 'scholarship'
  | 'organization'
  | 'program'
  | 'conference'
  | 'mentorship'
  | 'job-board'
  | 'course'
  | 'community';

export type CostTag = 'free' | 'paid' | 'varies' | 'unknown';
export type DeadlineTypeTag = 'fixed' | 'annual' | 'rolling' | 'unknown';

export type IdentityFocusTag =
  | 'women-in-stem'
  | 'first-gen'
  | 'black'
  | 'latina'
  | 'indigenous'
  | 'lgbtq'
  | 'disability'
  | 'international'
  | 'low-income';

export interface ResourceMetadata {
  id: string;
  audience?: AudienceTag[];
  fields?: FieldTag[];
  regions?: string[];
  resourceTypes?: ResourceTypeTag[];
  cost?: CostTag;
  deadlineType?: DeadlineTypeTag;
  identityFocus?: IdentityFocusTag[];
}
