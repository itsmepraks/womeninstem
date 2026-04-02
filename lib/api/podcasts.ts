import { fetchWithTimeout, buildResponse } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import type { Resource, ResourcesResponse } from '@/types/resource'
import { randomUUID } from 'crypto'

const SEARCH_TERMS = [
  'women+in+STEM',
  'women+in+tech',
  'women+science',
  'girls+coding',
]

function makePodcastFetcher(term: string): () => Promise<Resource[]> {
  const fn = async function (): Promise<Resource[]> {
    const url = `https://itunes.apple.com/search?term=${term}&media=podcast&limit=25`
    const res = await fetchWithTimeout(url, {
      headers: { 'User-Agent': 'stemspark/1.0' },
    })
    const json = await res.json()
    const results: Array<Record<string, unknown>> = json.results ?? []
    return results
      .map((item) => {
        const trackName = String(item.trackName ?? '').trim()
        const trackUrl = String(
          item.trackViewUrl ?? item.collectionViewUrl ?? ''
        ).trim()
        if (!trackName || !trackUrl) return null

        const artistName = String(item.artistName ?? '').trim()
        const rawDescription = String(item.description ?? '')
          .replace(/<[^>]+>/g, '')
          .trim()
          .slice(0, 200)
        const genres = Array.isArray(item.genres)
          ? (item.genres as string[])
          : []

        return {
          id: randomUUID(),
          name: trackName,
          category: 'events' as const,
          url: trackUrl,
          description: rawDescription,
          lat: 0,
          lng: 0,
          location: artistName,
          tags: genres,
          sourceName: `iTunes:${term}`,
        } as Resource
      })
      .filter((r): r is Resource => r !== null)
  }
  Object.defineProperty(fn, 'name', { value: `iTunes:${term}` })
  return fn
}

const fetchers = SEARCH_TERMS.map((t) => makePodcastFetcher(t))

export async function fetchPodcasts(): Promise<ResourcesResponse> {
  const agg = await aggregateSources(fetchers)
  const deduped = deduplicateResources(agg.data)
  return buildResponse(deduped, 'events', {
    revalidateSeconds: 86400,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
