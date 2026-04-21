import { NextResponse } from 'next/server'
import { unstable_cache } from 'next/cache'
import { fetchPodcasts } from '@/lib/api/podcasts'
import { feedTag } from '@/lib/api/feeds'

export const revalidate = 86400

const getPodcasts = unstable_cache(
  () => fetchPodcasts(),
  ['resources:podcasts:v1'],
  { tags: [feedTag('podcasts')], revalidate: 86400 }
)

export async function GET() {
  try {
    const data = await getPodcasts()
    if (data.data.length === 0 && data.sourcesSucceeded === 0) {
      return NextResponse.json({ ...data, error: 'All sources failed' }, { status: 503 })
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error('[podcasts route]', error)
    return NextResponse.json({ error: 'Failed to fetch podcasts' }, { status: 500 })
  }
}
