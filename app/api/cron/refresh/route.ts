import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { FEED_CONFIG, feedTag } from '@/lib/api/feeds'

export const dynamic = 'force-dynamic'
export const maxDuration = 300 // 5 min — fetchers can be slow

interface FeedResult {
  feed: string
  ok: boolean
  items: number
  durationMs: number
  sourcesAttempted?: number
  sourcesSucceeded?: number
  error?: string
}

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  const secret = process.env.CRON_SECRET
  if (!secret) {
    console.error('[cron] CRON_SECRET is not set.')
    return NextResponse.json({ error: 'CRON_SECRET not configured' }, { status: 500 })
  }
  if (authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const runStart = Date.now()
  const results: FeedResult[] = await Promise.all(
    FEED_CONFIG.map(async ({ name, fetch: fetchFeed }) => {
      const t0 = Date.now()
      try {
        const data = await fetchFeed()
        revalidateTag(feedTag(name))
        const result: FeedResult = {
          feed: name,
          ok: true,
          items: data.data.length,
          durationMs: Date.now() - t0,
          sourcesAttempted: data.sourcesAttempted,
          sourcesSucceeded: data.sourcesSucceeded,
        }
        console.log(`[cron] ${name} ok: ${result.items} items, ${result.sourcesSucceeded}/${result.sourcesAttempted} sources, ${result.durationMs}ms`)
        return result
      } catch (err) {
        const error = err instanceof Error ? err.message : String(err)
        console.error(`[cron] ${name} FAILED after ${Date.now() - t0}ms: ${error}`)
        return {
          feed: name,
          ok: false,
          items: 0,
          durationMs: Date.now() - t0,
          error,
        }
      }
    })
  )

  const totalItems = results.reduce((sum, r) => sum + r.items, 0)
  const failed = results.filter((r) => !r.ok).map((r) => r.feed)
  const totalMs = Date.now() - runStart

  console.log(`[cron] run complete in ${totalMs}ms — ${totalItems} items across ${results.length - failed.length}/${results.length} feeds`)

  return NextResponse.json({
    refreshedAt: new Date().toISOString(),
    totalItems,
    totalMs,
    failedFeeds: failed,
    results,
  })
}
