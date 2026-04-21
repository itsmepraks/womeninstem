import { NextResponse } from 'next/server'
import { unstable_cache } from 'next/cache'
import { fetchOrgs } from '@/lib/api/orgs'
import { feedTag } from '@/lib/api/feeds'

export const revalidate = 86400

const getOrgs = unstable_cache(
  () => fetchOrgs(),
  ['resources:orgs:v1'],
  { tags: [feedTag('orgs')], revalidate: 86400 }
)

export async function GET() {
  try {
    const data = await getOrgs()
    if (data.data.length === 0 && data.sourcesSucceeded === 0) {
      return NextResponse.json({ ...data, error: 'All sources failed' }, { status: 503 })
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error('[orgs route]', error)
    return NextResponse.json({ error: 'Failed to fetch orgs' }, { status: 500 })
  }
}
