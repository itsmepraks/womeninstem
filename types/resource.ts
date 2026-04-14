// types/resource.ts

export type ResourceCategory =
  | 'events'
  | 'orgs'
  | 'jobs'
  | 'mentors'
  | 'grants'
  | 'hackathons'
  | 'books'
  | 'podcasts'

export interface Resource {
  id: string
  name: string
  category: ResourceCategory
  lat: number
  lng: number
  location: string       // human-readable city/country
  url: string
  description?: string
  date?: string          // ISO string — for events, hackathons, grant deadlines
  tags?: string[]
  // jobs-specific
  company?: string
  // mentors-specific
  field?: string
  bio?: string
  // grants-specific
  amount?: string
  eligibility?: string
  // source tracking
  sourceName?: string
}

export interface ResourcesResponse {
  data: Resource[]
  updatedAt: string      // ISO timestamp of last fetch
  category: ResourceCategory
  revalidateSeconds?: number
  sources?: string[]
  sourcesAttempted?: number
  sourcesSucceeded?: number
}

export const CATEGORY_COLORS: Record<ResourceCategory, string> = {
  events:    '#7c3aed',
  orgs:      '#0d9488',
  jobs:      '#f59e0b',
  mentors:   '#e11d48',
  grants:    '#10b981',
  hackathons: '#0ea5e9',
  books:      '#8b5cf6',
  podcasts:   '#ec4899',
}

export const CATEGORY_LABELS: Record<ResourceCategory, string> = {
  events:     'Events',
  orgs:       'Organizations',
  jobs:       'Jobs & Internships',
  mentors:    'Mentors',
  grants:     'Grants & Scholarships',
  hackathons: 'Hackathons',
  books:      'Books',
  podcasts:   'Podcasts',
}

export function isResource(obj: unknown): obj is Resource {
  if (typeof obj !== 'object' || obj === null) return false
  const r = obj as Record<string, unknown>
  const validCategories: string[] = ['events', 'orgs', 'jobs', 'mentors', 'grants', 'hackathons', 'books', 'podcasts']
  return (
    typeof r.id === 'string' &&
    typeof r.name === 'string' &&
    typeof r.category === 'string' &&
    validCategories.includes(r.category) &&
    typeof r.lat === 'number' &&
    typeof r.lng === 'number' &&
    typeof r.location === 'string' &&
    typeof r.url === 'string'
  )
}
