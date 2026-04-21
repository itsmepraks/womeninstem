import { fetchPodcasts } from '@/lib/api/podcasts'
import { createFeedRoute } from '@/lib/api/createFeedRoute'

export const revalidate = 86400

export const { GET } = createFeedRoute('podcasts', fetchPodcasts, revalidate)
