import type { Resource } from '@/types/resource'

export interface AggregateResult<T> {
  data: T[]
  sourceNames: string[]
  sourcesAttempted: number
  sourcesSucceeded: number
}

async function runWithRetry<T>(
  fn: () => Promise<T[]>,
  timeoutMs: number,
  retries = 1
): Promise<T[]> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await Promise.race([
        fn(),
        new Promise<T[]>((_, reject) =>
          setTimeout(() => reject(new Error(`Timeout: ${fn.name}`)), timeoutMs)
        ),
      ])
    } catch (err) {
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, 1000))
        continue
      }
      throw err
    }
  }
  throw new Error('Exhausted retries')
}

export async function aggregateSources<T>(
  fetchers: Array<() => Promise<T[]>>,
  timeoutMs = 10000
): Promise<AggregateResult<T>> {
  const results = await Promise.allSettled(
    fetchers.map((fn) => runWithRetry(fn, timeoutMs, 1))
  )

  const data: T[] = []
  const sourceNames: string[] = []
  const failedSources: string[] = []
  let sourcesSucceeded = 0

  for (let i = 0; i < results.length; i++) {
    const result = results[i]!
    const name = fetchers[i]!.name || `source_${i}`
    if (result.status === 'fulfilled') {
      data.push(...result.value)
      sourceNames.push(name)
      sourcesSucceeded++
    } else {
      const reason = result.reason?.message ?? String(result.reason)
      failedSources.push(`${name}: ${reason}`)
      console.warn(`[pipeline] Source "${name}" failed after retry:`, reason)
    }
  }

  if (sourcesSucceeded === 0 && fetchers.length > 0) {
    console.error(`[pipeline] ALL ${fetchers.length} sources failed:`, failedSources.join('; '))
  }

  return {
    data,
    sourceNames,
    sourcesAttempted: fetchers.length,
    sourcesSucceeded,
  }
}

function fingerprintUrl(url: string): string {
  try {
    const u = new URL(url)
    const TRACKING_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref', 'source']
    TRACKING_PARAMS.forEach((p) => u.searchParams.delete(p))
    const host = u.hostname.replace(/^www\./, '')
    const path = (u.pathname + u.search).replace(/\/$/, '').toLowerCase()
    return (host + path).toLowerCase()
  } catch {
    return url
  }
}

function mergeResources(a: Resource, b: Resource): Resource {
  return {
    ...a,
    description: a.description || b.description,
    lat: a.lat !== 0 ? a.lat : b.lat,
    lng: a.lng !== 0 ? a.lng : b.lng,
  }
}

export function deduplicateResources(resources: Resource[]): Resource[] {
  const seen = new Map<string, Resource>()
  for (const resource of resources) {
    const key = fingerprintUrl(resource.url)
    if (seen.has(key)) {
      seen.set(key, mergeResources(seen.get(key)!, resource))
    } else {
      seen.set(key, resource)
    }
  }
  return Array.from(seen.values())
}
