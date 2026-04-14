import { NextResponse } from 'next/server'
import { fetchMentors } from '@/lib/api/mentors'

export const revalidate = 86400 // 24 hours (static seed)

export async function GET() {
  try {
    const data = await fetchMentors()
    if (data.data.length === 0 && data.sourcesSucceeded === 0) {
      return NextResponse.json(
        { ...data, error: 'All sources failed' },
        { status: 503 }
      )
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error('[mentors route]', error)
    return NextResponse.json({ error: 'Failed to fetch mentors' }, { status: 500 })
  }
}
