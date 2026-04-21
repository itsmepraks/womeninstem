import { NextResponse } from 'next/server'
import { unstable_cache } from 'next/cache'
import { fetchGrants } from '@/lib/api/grants'
import { feedTag } from '@/lib/api/feeds'

export const revalidate = 21600

const getGrants = unstable_cache(
  () => fetchGrants(),
  ['resources:grants:v1'],
  { tags: [feedTag('grants')], revalidate: 21600 }
)

export async function GET() {
  try {
    const data = await getGrants()
    if (data.data.length === 0 && data.sourcesSucceeded === 0) {
      return NextResponse.json({ ...data, error: 'All sources failed' }, { status: 503 })
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error('[grants route]', error)
    return NextResponse.json({ error: 'Failed to fetch grants' }, { status: 500 })
  }
}
