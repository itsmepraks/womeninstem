import { fetchWithTimeout, buildResponse } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import { filterExpired } from '@/lib/api/filterExpired'
import type { Resource, ResourcesResponse } from '@/types/resource'
import type { DevpostResponse } from '@/types/external'
import { randomUUID } from 'crypto'

function makeDevpostFetcher(page: number): () => Promise<Resource[]> {
  const label = `Devpost:page${page}`
  const fn = async function (): Promise<Resource[]> {
    const url = `https://devpost.com/api/hackathons?status=open&page=${page}`
    const res = await fetchWithTimeout(url, {
      headers: { 'User-Agent': 'stemspark/1.0' },
    })
    const json: DevpostResponse = await res.json()
    const hackathons = json.hackathons ?? []
    return hackathons
      .map((h): Resource | null => {
        const title = String(h.title ?? '').trim()
        const hackUrl = String(h.url ?? '').trim()
        if (!title || !hackUrl) return null

        const location = String(h.displayed_location?.location ?? 'Online').trim()

        const timeLeft = String(h.time_left_to_submission ?? '').trim()
        const orgName = String(h.organization_name ?? '').trim()
        const regCount = h.registrations_count ?? 0
        const description = [timeLeft, orgName, `${regCount} registered`]
          .filter(Boolean)
          .join(' · ')

        const themes = Array.isArray(h.themes)
          ? h.themes.map((t) => t.name ?? '').filter((n): n is string => Boolean(n))
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
        }
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
  const filtered = filterExpired(deduped)
  return buildResponse(filtered, 'hackathons', {
    revalidateSeconds: 21600,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
