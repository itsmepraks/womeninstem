import { NextResponse } from 'next/server'
import { unstable_cache } from 'next/cache'
import { fetchMentors } from '@/lib/api/mentors'
import { feedTag } from '@/lib/api/feeds'

export const revalidate = 86400

const getMentors = unstable_cache(
  () => fetchMentors(),
  ['resources:mentors:v1'],
  { tags: [feedTag('mentors')], revalidate: 86400 }
)

export async function GET() {
  try {
    const data = await getMentors()
    if (data.data.length === 0 && data.sourcesSucceeded === 0) {
      return NextResponse.json({ ...data, error: 'All sources failed' }, { status: 503 })
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error('[mentors route]', error)
    return NextResponse.json({ error: 'Failed to fetch mentors' }, { status: 500 })
  }
}
