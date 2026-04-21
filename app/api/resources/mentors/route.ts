import { fetchMentors } from '@/lib/api/mentors'
import { createFeedRoute } from '@/lib/api/createFeedRoute'

export const revalidate = 86400

export const { GET } = createFeedRoute('mentors', fetchMentors, revalidate)
