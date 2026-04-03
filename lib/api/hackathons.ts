import { fetchWithTimeout, buildResponse } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import { geocodeAll } from '@/lib/geocoding'
import { filterExpired } from '@/lib/api/filterExpired'
import type { Resource, ResourcesResponse } from '@/types/resource'
import { randomUUID } from 'crypto'

function makeDevpostFetcher(page: number): () => Promise<Resource[]> {
  const label = `Devpost:page${page}`
  const fn = async function (): Promise<Resource[]> {
    const url = `https://devpost.com/api/hackathons?status=open&page=${page}`
    const res = await fetchWithTimeout(url, {
      headers: { 'User-Agent': 'stemspark/1.0' },
    })
    const json = await res.json()
    const hackathons: Array<Record<string, unknown>> = json.hackathons ?? []
    return hackathons
      .map((h) => {
        const title = String(h.title ?? '').trim()
        const hackUrl = String(h.url ?? '').trim()
        if (!title || !hackUrl) return null

        const displayedLocation = h.displayed_location as Record<string, unknown> | undefined
        const location = String(displayedLocation?.location ?? 'Online').trim()

        const timeLeft = String(h.time_left_to_submission ?? '').trim()
        const orgName = String(h.organization_name ?? '').trim()
        const regCount = h.registrations_count ?? 0
        const description = [timeLeft, orgName, `${regCount} registered`]
          .filter(Boolean)
          .join(' \u00b7 ')

        const themes = Array.isArray(h.themes)
          ? (h.themes as Array<{ name?: string }>).map((t) => t.name ?? '').filter(Boolean)
          : []

        const prizeRaw = String(h.prize_amount ?? '').replace(/<[^>]+>/g, '').trim() || undefined

        return {
          id: randomUUID(),
          name: title,
          category: 'hackathons' as const,
          lat: 0,
          lng: 0,
          location,
          url: hackUrl,
          description: description.slice(0, 200),
          tags: themes,
          amount: prizeRaw,
          sourceName: label,
        } as Resource
      })
      .filter((r): r is Resource => r !== null)
  }
  Object.defineProperty(fn, 'name', { value: label })
  return fn
}

const fetchers = [makeDevpostFetcher(1), makeDevpostFetcher(2)]

export async function fetchHackathons(): Promise<ResourcesResponse> {
  const agg = await aggregateSources(fetchers)
  const deduped = deduplicateResources(agg.data)
  const geocoded = await geocodeAll(deduped)
  const filtered = filterExpired(geocoded)
  return buildResponse(filtered, 'hackathons', {
    revalidateSeconds: 21600,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
