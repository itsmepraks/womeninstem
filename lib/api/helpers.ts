import type { Resource, ResourceCategory, ResourcesResponse } from '@/types/resource'

/**
 * Extracts { title, url, description, date } from a single parsed RSS/Atom item.
 *
 * Handles the three upstream-quirk edge cases that RSS feeds hit in practice:
 *  - `title` arriving either as a plain string or as `{ __cdata: ... }`
 *    (thanks to `cdataPropName: '__cdata'` in the XMLParser config)
 *  - `description` arriving either as a plain string, a `{ __cdata: ... }`
 *    object, or an arbitrary nested object (some feeds publish MediaRSS
 *    content shapes under the description tag)
 *  - Atom feeds using `summary` + `updated` instead of `description` + `pubDate`
 *
 * Returns null when title or url are missing, so callers can drop invalid
 * entries with a single filter.
 */
export interface RssItemFields {
  title: string
  url: string
  description: string
  date: string
}

export function parseRssItem(item: unknown): RssItemFields | null {
  if (!item || typeof item !== 'object') return null
  const i = item as Record<string, unknown>

  const title = String(
    i.title ??
      (i['title'] as unknown as Record<string, unknown>)?.['__cdata'] ??
      ''
  ).trim()
  const url = String(i.link ?? i.guid ?? '').trim()
  if (!title || !url) return null

  const rawDesc = i.description ?? i.summary ?? ''
  const descStr =
    typeof rawDesc === 'object' && rawDesc !== null
      ? ((rawDesc as Record<string, unknown>)['__cdata'] ??
          JSON.stringify(rawDesc))
      : rawDesc
  const description = String(descStr).replace(/<[^>]+>/g, '').trim()

  const date = String(i.pubDate ?? i.updated ?? '').trim()

  return { title, url, description, date }
}

interface BuildResponseMeta {
  revalidateSeconds?: number
  sources?: string[]
  sourcesAttempted?: number
  sourcesSucceeded?: number
}

/**
 * Builds a standard ResourcesResponse envelope.
 * updatedAt is an ISO 8601 timestamp string.
 * Optionally accepts pipeline meta (revalidateSeconds, sources, counts).
 */
export function buildResponse(
  data: Resource[],
  category: ResourceCategory,
  meta?: BuildResponseMeta
): ResourcesResponse {
  return {
    data,
    category,
    updatedAt: new Date().toISOString(),
    revalidateSeconds: meta?.revalidateSeconds,
    sources: meta?.sources ?? [],
    sourcesAttempted: meta?.sourcesAttempted ?? 0,
    sourcesSucceeded: meta?.sourcesSucceeded ?? 0,
  }
}

/**
 * Wraps a fetch call with a timeout.
 * Rejects with Error('Request timed out') if fetch takes longer than timeoutMs.
 * Default timeout: 8000ms.
 */
export async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeoutMs = 8000
): Promise<Response> {
  const controller = new AbortController()
  const signal = controller.signal

  const timeoutId = setTimeout(() => {
    controller.abort()
  }, timeoutMs)

  try {
    const response = await fetch(url, {
      ...options,
      signal,
    })
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timed out')
    }
    throw error
  }
}
