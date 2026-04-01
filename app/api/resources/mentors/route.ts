import { NextResponse } from 'next/server'
import { fetchMentors } from '@/lib/api/mentors'

export const revalidate = 86400 // 24 hours (static seed)

export async function GET() {
  try {
    const data = await fetchMentors()
    return NextResponse.json(data)
  } catch (error) {
    console.error('[mentors route]', error)
    return NextResponse.json({ error: 'Failed to fetch mentors' }, { status: 500 })
  }
}
