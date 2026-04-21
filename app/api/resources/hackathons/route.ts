import { NextResponse } from 'next/server'
import { unstable_cache } from 'next/cache'
import { fetchHackathons } from '@/lib/api/hackathons'
import { feedTag } from '@/lib/api/feeds'

export const revalidate = 21600

const getHackathons = unstable_cache(
  () => fetchHackathons(),
  ['resources:hackathons:v1'],
  { tags: [feedTag('hackathons')], revalidate: 21600 }
)

export async function GET() {
  try {
    const data = await getHackathons()
    if (data.data.length === 0 && data.sourcesSucceeded === 0) {
      return NextResponse.json({ ...data, error: 'All sources failed' }, { status: 503 })
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error('[hackathons route]', error)
    return NextResponse.json({ error: 'Failed to fetch hackathons' }, { status: 500 })
  }
}
