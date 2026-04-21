import { fetchJobs } from '@/lib/api/jobs'
import { fetchEvents } from '@/lib/api/events'
import { fetchHackathons } from '@/lib/api/hackathons'
import { fetchGrants } from '@/lib/api/grants'
import { fetchMentors } from '@/lib/api/mentors'
import { fetchOrgs } from '@/lib/api/orgs'
import { fetchBooks } from '@/lib/api/books'
import { fetchPodcasts } from '@/lib/api/podcasts'
import type { ResourcesResponse } from '@/types/resource'

export interface FeedConfig {
  name: string
  revalidateSeconds: number
  fetch: () => Promise<ResourcesResponse>
}

export const FEED_CONFIG: FeedConfig[] = [
  { name: 'jobs', revalidateSeconds: 21600, fetch: fetchJobs },
  { name: 'events', revalidateSeconds: 21600, fetch: fetchEvents },
  { name: 'hackathons', revalidateSeconds: 21600, fetch: fetchHackathons },
  { name: 'grants', revalidateSeconds: 21600, fetch: fetchGrants },
  { name: 'mentors', revalidateSeconds: 86400, fetch: fetchMentors },
  { name: 'orgs', revalidateSeconds: 86400, fetch: fetchOrgs },
  { name: 'books', revalidateSeconds: 86400, fetch: fetchBooks },
  { name: 'podcasts', revalidateSeconds: 86400, fetch: fetchPodcasts },
]

export function feedTag(name: string): string {
  return `resources:${name}`
}
