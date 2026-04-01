import { NextResponse } from 'next/server'
import { fetchEvents } from '@/lib/api/events'

export const revalidate = 21600 // 6 hours

export async function GET() {
  try {
    const data = await fetchEvents()
    return NextResponse.json(data)
  } catch (error) {
    console.error('[events route]', error)
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    )
  }
}
