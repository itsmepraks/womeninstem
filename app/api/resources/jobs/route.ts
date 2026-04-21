import { NextResponse } from 'next/server'
import { unstable_cache } from 'next/cache'
import { fetchJobs } from '@/lib/api/jobs'
import { feedTag } from '@/lib/api/feeds'

export const revalidate = 21600

const getJobs = unstable_cache(
  () => fetchJobs(),
  ['resources:jobs:v1'],
  { tags: [feedTag('jobs')], revalidate: 21600 }
)

export async function GET() {
  try {
    const data = await getJobs()
    if (data.data.length === 0 && data.sourcesSucceeded === 0) {
      return NextResponse.json({ ...data, error: 'All sources failed' }, { status: 503 })
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error('[jobs route]', error)
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 })
  }
}
