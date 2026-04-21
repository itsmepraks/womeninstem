import { fetchGrants } from '@/lib/api/grants'
import { createFeedRoute } from '@/lib/api/createFeedRoute'

export const revalidate = 21600

export const { GET } = createFeedRoute('grants', fetchGrants, revalidate)
