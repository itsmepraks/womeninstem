import { NextResponse } from 'next/server'
import { fetchPodcasts } from '@/lib/api/podcasts'

export const revalidate = 86400

export async function GET() {
  try {
    const data = await fetchPodcasts()
    if (data.data.length === 0 && data.sourcesSucceeded === 0) {
      return NextResponse.json(
        { ...data, error: 'All sources failed' },
        { status: 503 }
      )
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error('[podcasts route]', error)
    return NextResponse.json({ error: 'Failed to fetch podcasts' }, { status: 500 })
  }
}
