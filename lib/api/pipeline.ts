import type { Resource } from '@/types/resource'

export interface AggregateResult<T> {
  data: T[]
  sourceNames: string[]
  sourcesAttempted: number
  sourcesSucceeded: number
}

export async function aggregateSources<T>(
  fetchers: Array<() => Promise<T[]>>,
  timeoutMs = 8000
): Promise<AggregateResult<T>> {
  const results = await Promise.allSettled(
    fetchers.map((fn) =>
      Promise.race([
        fn(),
        new Promise<T[]>((_, reject) =>
          setTimeout(() => reject(new Error(`Timeout: ${fn.name}`)), timeoutMs)
        ),
      ])
    )
  )

  const data: T[] = []
  const sourceNames: string[] = []
  let sourcesSucceeded = 0

  for (let i = 0; i < results.length; i++) {
    const result = results[i]!
    const name = fetchers[i]!.name || `source_${i}`
    if (result.status === 'fulfilled') {
      data.push(...result.value)
      sourceNames.push(name)
      sourcesSucceeded++
    } else {
      console.warn(`[pipeline] Source "${name}" failed:`, result.reason?.message ?? result.reason)
    }
  }

  return {
    data,
    sourceNames,
    sourcesAttempted: fetchers.length,
    sourcesSucceeded,
  }
}

export function fingerprintUrl(url: string): string {
  try {
    const u = new URL(url)
    // Strip tracking params
    const TRACKING_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref', 'source']
    TRACKING_PARAMS.forEach((p) => u.searchParams.delete(p))
    // Rebuild: strip www, strip trailing slash
    const host = u.hostname.replace(/^www\./, '')
    const path = (u.pathname + u.search).replace(/\/$/, '')
    return host + path
  } catch {
    return url
  }
}

export function mergeResources(a: Resource, b: Resource): Resource {
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
