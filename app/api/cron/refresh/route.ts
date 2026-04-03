import { NextResponse } from 'next/server'
import { FEED_CONFIG } from '@/lib/api/feeds'

export const dynamic = 'force-dynamic'

const FEEDS = FEED_CONFIG.map((f) => f.name)

export async function GET(request: Request) {
  // Verify cron secret to prevent unauthorized calls
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

  const results: Record<string, { status: string; items?: number; error?: string }> = {}

  // Hit each feed endpoint to trigger ISR revalidation
  await Promise.allSettled(
    FEEDS.map(async (feed) => {
      try {
        const res = await fetch(`${baseUrl}/api/resources/${feed}`, {
          headers: { 'Cache-Control': 'no-cache' },
        })
        if (res.ok) {
          const json = await res.json()
          results[feed] = {
            status: 'ok',
            items: json.data?.length ?? 0,
          }
        } else {
          results[feed] = {
            status: 'error',
            error: `HTTP ${res.status}`,
          }
        }
      } catch (err) {
        results[feed] = {
          status: 'error',
          error: err instanceof Error ? err.message : 'Unknown error',
        }
      }
    })
  )

  const totalItems = Object.values(results).reduce(
    (sum, r) => sum + (r.items ?? 0),
    0
  )
  const failedFeeds = Object.entries(results)
    .filter(([, r]) => r.status === 'error')
    .map(([name]) => name)

  return NextResponse.json({
    refreshedAt: new Date().toISOString(),
    totalItems,
    feedCount: FEEDS.length,
    failedFeeds,
    feeds: results,
  })
}
