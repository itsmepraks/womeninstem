import { NextResponse } from 'next/server'
import { fetchJobs } from '@/lib/api/jobs'

export const revalidate = 21600

export async function GET() {
  try {
    const data = await fetchJobs()
    return NextResponse.json(data)
  } catch (error) {
    console.error('[jobs route]', error)
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 })
  }
}
