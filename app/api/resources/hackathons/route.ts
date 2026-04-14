import { NextResponse } from 'next/server'
import { fetchHackathons } from '@/lib/api/hackathons'

export const revalidate = 21600

export async function GET() {
  try {
    const data = await fetchHackathons()
    if (data.data.length === 0 && data.sourcesSucceeded === 0) {
      return NextResponse.json(
        { ...data, error: 'All sources failed' },
        { status: 503 }
      )
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error('[hackathons route]', error)
    return NextResponse.json({ error: 'Failed to fetch hackathons' }, { status: 500 })
  }
}
