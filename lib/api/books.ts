import { fetchWithTimeout, buildResponse } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import type { Resource, ResourcesResponse } from '@/types/resource'
import { randomUUID } from 'crypto'

const SEARCH_QUERIES = [
  'women+STEM',
  'women+in+science',
  'women+in+technology',
  'girls+who+code',
]

function makeBookFetcher(query: string): () => Promise<Resource[]> {
  const fn = async function (): Promise<Resource[]> {
    const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${query}&maxResults=40&printType=books&langRestrict=en`
    const res = await fetchWithTimeout(url, {
      headers: { 'User-Agent': 'stemspark/1.0' },
    })
    const json = await res.json()
    const items: Array<Record<string, unknown>> = json.items ?? []
    return items
      .map((item) => {
        const vol = (item.volumeInfo ?? {}) as Record<string, unknown>
        const title = String(vol.title ?? '').trim()
        const infoLink = String(vol.infoLink ?? vol.canonicalVolumeLink ?? '').trim()
        if (!title || !infoLink) return null

        const authors = Array.isArray(vol.authors)
          ? (vol.authors as string[]).join(', ')
          : ''
        const description = String(vol.description ?? '')
          .replace(/<[^>]+>/g, '')
          .trim()
          .slice(0, 200)
        const categories = Array.isArray(vol.categories)
          ? (vol.categories as string[])
          : []
        const imageLinks = (vol.imageLinks ?? {}) as Record<string, unknown>
        const thumbnail = String(imageLinks.thumbnail ?? imageLinks.smallThumbnail ?? '').trim() || undefined
        const publishedDate = String(vol.publishedDate ?? '').trim() || undefined

        return {
          id: randomUUID(),
          name: title,
          category: 'grants' as const,
          url: infoLink,
          description,
          lat: 0,
          lng: 0,
          location: authors,
          tags: categories,
          date: publishedDate,
          sourceName: `GoogleBooks:${query}`,
          thumbnail,
        } as Resource
      })
      .filter((r): r is Resource => r !== null)
  }
  Object.defineProperty(fn, 'name', { value: `GoogleBooks:${query}` })
  return fn
}

const fetchers = SEARCH_QUERIES.map((q) => makeBookFetcher(q))

export async function fetchBooks(): Promise<ResourcesResponse> {
  const agg = await aggregateSources(fetchers)
  const deduped = deduplicateResources(agg.data)
  return buildResponse(deduped, 'grants', {
    revalidateSeconds: 86400,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
