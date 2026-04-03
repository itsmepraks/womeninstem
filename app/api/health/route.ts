import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const FEEDS = [
  { name: 'jobs', revalidate: 21600 },
  { name: 'events', revalidate: 21600 },
  { name: 'hackathons', revalidate: 21600 },
  { name: 'grants', revalidate: 21600 },
  { name: 'mentors', revalidate: 86400 },
  { name: 'orgs', revalidate: 86400 },
  { name: 'pioneers', revalidate: 86400 },
  { name: 'books', revalidate: 86400 },
  { name: 'podcasts', revalidate: 86400 },
]

export async function GET() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

  const results = await Promise.allSettled(
    FEEDS.map(async (feed) => {
      const start = Date.now()
      try {
        const res = await fetch(`${baseUrl}/api/resources/${feed.name}`, {
          signal: AbortSignal.timeout(15000),
        })
        const elapsed = Date.now() - start
        if (!res.ok) {
          return {
            feed: feed.name,
            status: 'down' as const,
            responseTime: elapsed,
            error: `HTTP ${res.status}`,
          }
        }
        const json = await res.json()
        const items = json.data?.length ?? 0
        const updatedAt = json.updatedAt ?? null
        const stale = updatedAt
          ? Date.now() - new Date(updatedAt).getTime() > feed.revalidate * 1000 * 2
          : false

        return {
          feed: feed.name,
          status: items > 0 ? (stale ? 'stale' as const : 'healthy' as const) : 'empty' as const,
          items,
          responseTime: elapsed,
          updatedAt,
          sources: `${json.sourcesSucceeded ?? '?'}/${json.sourcesAttempted ?? '?'}`,
        }
      } catch (err) {
        return {
          feed: feed.name,
          status: 'down' as const,
          responseTime: Date.now() - start,
          error: err instanceof Error ? err.message : 'Unknown',
        }
      }
    })
  )

  const feeds = results.map((r) => (r.status === 'fulfilled' ? r.value : { feed: '?', status: 'down' as const, error: 'Promise rejected' }))
  const healthy = feeds.filter((f) => f.status === 'healthy').length
  const empty = feeds.filter((f) => f.status === 'empty').length
  const stale = feeds.filter((f) => f.status === 'stale').length
  const down = feeds.filter((f) => f.status === 'down').length

  const overall = down > 2 ? 'degraded' : down > 0 ? 'partial' : 'ok'

  return NextResponse.json({
    status: overall,
    checkedAt: new Date().toISOString(),
    summary: { healthy, empty, stale, down, total: FEEDS.length },
    feeds,
  })
}
