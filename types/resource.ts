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
  location: string
  url: string
  description?: string
  date?: string
  tags?: string[]
  company?: string
  field?: string
  bio?: string
  amount?: string
  eligibility?: string
  sourceName?: string
}

export interface ResourcesResponse {
  data: Resource[]
  updatedAt: string
  category: ResourceCategory
  revalidateSeconds?: number
  sources?: string[]
  sourcesAttempted?: number
  sourcesSucceeded?: number
}
