import { NextResponse } from 'next/server'
import { unstable_cache } from 'next/cache'
import { feedTag } from '@/lib/api/feeds'
import type { ResourcesResponse } from '@/types/resource'

/**
 * Build a GET handler for a `/api/resources/<feed>` route.
 *
 * Wraps the fetcher in `unstable_cache` (keyed on `resources:<name>:v1`, tagged
 * with `feedTag(name)`) and applies the standard envelope:
 *  - 503 when every upstream source failed and no data is returned
 *  - 500 on unexpected exceptions
 *
 * Usage in a route file:
 * ```ts
 * import { fetchJobs } from '@/lib/api/jobs'
 * import { createFeedRoute } from '@/lib/api/createFeedRoute'
 *
 * export const revalidate = 21600
 * export const { GET } = createFeedRoute('jobs', fetchJobs, revalidate)
 * ```
 */
export function createFeedRoute(
  name: string,
  fetcher: () => Promise<ResourcesResponse>,
  revalidateSeconds: number
) {
  const cached = unstable_cache(() => fetcher(), [`resources:${name}:v1`], {
    tags: [feedTag(name)],
    revalidate: revalidateSeconds,
  })

  async function GET() {
    try {
      const data = await cached()
      if (data.data.length === 0 && data.sourcesSucceeded === 0) {
        return NextResponse.json(
          { ...data, error: 'All sources failed' },
          { status: 503 }
        )
      }
      return NextResponse.json(data)
    } catch (error) {
      console.error(`[${name} route]`, error)
      return NextResponse.json(
        { error: `Failed to fetch ${name}` },
        { status: 500 }
      )
    }
  }

  return { GET }
}
