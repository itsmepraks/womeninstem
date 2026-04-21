import { fetchHackathons } from '@/lib/api/hackathons'
import { createFeedRoute } from '@/lib/api/createFeedRoute'

export const revalidate = 21600

export const { GET } = createFeedRoute('hackathons', fetchHackathons, revalidate)
