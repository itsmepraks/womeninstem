import { fetchWithTimeout, buildResponse } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import type { Resource, ResourcesResponse } from '@/types/resource'
import type { OpenLibrarySearchResponse } from '@/types/external'
import { randomUUID } from 'crypto'

const SEARCH_QUERIES = [
  'women in STEM',
  'women scientists',
  'women engineers',
  'women technology',
]

function makeBookFetcher(query: string): () => Promise<Resource[]> {
  const label = `OpenLibrary:${query}`
  const fn = async function (): Promise<Resource[]> {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=20`
    const res = await fetchWithTimeout(url, {
      headers: { 'User-Agent': 'stemspark/1.0', 'Accept': 'application/json' },
    })
    const text = await res.text()
    if (!text.startsWith('{')) throw new Error('Non-JSON response from Open Library')
    const json: OpenLibrarySearchResponse = JSON.parse(text)
    const docs = json.docs ?? []
    return docs
      .map((doc): Resource | null => {
        const title = String(doc.title ?? '').trim()
        const key = String(doc.key ?? '').trim()
        if (!title || !key) return null

        const authors = Array.isArray(doc.author_name)
          ? doc.author_name.join(', ')
          : ''
        const firstSentence = Array.isArray(doc.first_sentence)
          ? String(doc.first_sentence[0] ?? '')
          : typeof doc.first_sentence === 'string'
            ? doc.first_sentence
            : ''
        const subjects = Array.isArray(doc.subject)
          ? doc.subject.slice(0, 3)
          : []
        const publishYear = doc.first_publish_year
          ? String(doc.first_publish_year)
          : undefined

        return {
          id: randomUUID(),
          name: title,
          category: 'books' as const,
          url: `https://openlibrary.org${key}`,
          description: firstSentence.slice(0, 200),
          lat: 0,
          lng: 0,
          location: authors,
          tags: subjects,
          date: publishYear,
          sourceName: label,
        }
      })
      .filter((r): r is Resource => r !== null)
  }
  Object.defineProperty(fn, 'name', { value: label })
  return fn
}

const fetchers = SEARCH_QUERIES.map((q) => makeBookFetcher(q))

export async function fetchBooks(): Promise<ResourcesResponse> {
  const agg = await aggregateSources(fetchers)
  const deduped = deduplicateResources(agg.data)
  return buildResponse(deduped, 'books', {
    revalidateSeconds: 86400,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
