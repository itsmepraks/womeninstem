import { fetchJobs } from '@/lib/api/jobs'
import { createFeedRoute } from '@/lib/api/createFeedRoute'

export const revalidate = 21600

export const { GET } = createFeedRoute('jobs', fetchJobs, revalidate)
