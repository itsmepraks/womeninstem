import { NextResponse } from 'next/server'
import { unstable_cache } from 'next/cache'
import { fetchEvents } from '@/lib/api/events'
import { feedTag } from '@/lib/api/feeds'

export const revalidate = 21600

const getEvents = unstable_cache(
  () => fetchEvents(),
  ['resources:events:v1'],
  { tags: [feedTag('events')], revalidate: 21600 }
)

export async function GET() {
  try {
    const data = await getEvents()
    if (data.data.length === 0 && data.sourcesSucceeded === 0) {
      return NextResponse.json({ ...data, error: 'All sources failed' }, { status: 503 })
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error('[events route]', error)
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}
