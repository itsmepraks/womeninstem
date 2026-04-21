import { fetchEvents } from '@/lib/api/events'
import { createFeedRoute } from '@/lib/api/createFeedRoute'

export const revalidate = 21600

export const { GET } = createFeedRoute('events', fetchEvents, revalidate)
