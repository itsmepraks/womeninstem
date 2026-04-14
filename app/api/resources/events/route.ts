import { NextResponse } from 'next/server'
import { fetchEvents } from '@/lib/api/events'

export const revalidate = 21600 // 6 hours

export async function GET() {
  try {
    const data = await fetchEvents()
    if (data.data.length === 0 && data.sourcesSucceeded === 0) {
      return NextResponse.json(
        { ...data, error: 'All sources failed' },
        { status: 503 }
      )
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error('[events route]', error)
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    )
  }
}
