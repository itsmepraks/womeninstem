import { NextResponse } from 'next/server'
import { fetchJobs } from '@/lib/api/jobs'

export const revalidate = 21600

export async function GET() {
  try {
    const data = await fetchJobs()
    if (data.data.length === 0 && data.sourcesSucceeded === 0) {
      return NextResponse.json(
        { ...data, error: 'All sources failed' },
        { status: 503 }
      )
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error('[jobs route]', error)
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 })
  }
}
