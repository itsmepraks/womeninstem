import { XMLParser } from 'fast-xml-parser'
import { fetchWithTimeout, buildResponse } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import { geocodeAll } from '@/lib/geocoding'
import { filterExpired } from '@/lib/api/filterExpired'
import type { Resource, ResourcesResponse } from '@/types/resource'
import { randomUUID } from 'crypto'

const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: '__cdata' })

async function fetchDevpost(): Promise<Resource[]> {
  const res = await fetchWithTimeout('https://devpost.com/hackathons.rss', {
    headers: { 'User-Agent': 'stemspark/1.0' }
  })
  const xml = await res.text()
  const parsed = parser.parse(xml)
  const items: unknown[] = parsed?.rss?.channel?.item ?? []
  const arr = Array.isArray(items) ? items : [items]
  return arr.filter(Boolean).map((item: unknown) => {
    const i = item as Record<string, unknown>
    return {
      id: randomUUID(),
      name: String(i.title ?? '').trim(),
      category: 'hackathons' as const,
      lat: 0, lng: 0,
      location: String(i['location'] ?? 'Online').trim(),
      url: String(i.link ?? '').trim(),
      description: String(i.description ?? '').replace(/<[^>]+>/g, '').trim().slice(0, 200),
      date: String(i.pubDate ?? '').trim(),
      sourceName: 'Devpost',
    }
  }).filter((r) => r.name && r.url)
}

async function fetchChallengeRocket(): Promise<Resource[]> {
  const res = await fetchWithTimeout('https://challengerocket.com/rss.xml', {
    headers: { 'User-Agent': 'stemspark/1.0' }
  })
  const xml = await res.text()
  const parsed = parser.parse(xml)
  const items: unknown[] = parsed?.rss?.channel?.item ?? []
  const arr = Array.isArray(items) ? items : [items]
  return arr.filter(Boolean).map((item: unknown) => {
    const i = item as Record<string, unknown>
    return {
      id: randomUUID(),
      name: String(i.title ?? '').trim(),
      category: 'hackathons' as const,
      lat: 0, lng: 0,
      location: 'Europe',
      url: String(i.link ?? '').trim(),
      description: String(i.description ?? '').replace(/<[^>]+>/g, '').trim().slice(0, 200),
      date: String(i.pubDate ?? '').trim(),
      sourceName: 'ChallengeRocket',
    }
  }).filter((r) => r.name && r.url)
}

async function fetchMLH(): Promise<Resource[]> {
  const year = new Date().getFullYear()
  let res: Response
  try {
    res = await fetchWithTimeout(`https://mlh.io/api/v2/events?season=${year}&format=json`)
    if (!res.ok) throw new Error(`MLH API returned ${res.status}`)
  } catch {
    console.warn('[hackathons] MLH API unavailable, skipping')
    return []
  }
  const json = await res.json()
  const events: unknown[] = Array.isArray(json) ? json : json.events ?? []
  return events.filter(Boolean).map((e: unknown) => {
    const ev = e as Record<string, unknown>
    return {
      id: randomUUID(),
      name: String(ev.name ?? '').trim(),
      category: 'hackathons' as const,
      lat: 0, lng: 0,
      location: (ev.location as string) ?? 'USA/Europe',
      url: String(ev.url ?? ev.website ?? '').trim(),
      description: String(ev.description ?? '').trim().slice(0, 200),
      date: String(ev.start_date ?? ev.startDate ?? '').trim(),
      sourceName: 'MLH',
    }
  }).filter((r) => r.name && r.url)
}

async function fetchDevfolio(): Promise<Resource[]> {
  const res = await fetchWithTimeout('https://devfolio.co/hackathons.rss', {
    headers: { 'User-Agent': 'stemspark/1.0' }
  })
  const xml = await res.text()
  const parsed = parser.parse(xml)
  const items: unknown[] = parsed?.rss?.channel?.item ?? []
  const arr = Array.isArray(items) ? items : [items]
  return arr.filter(Boolean).map((item: unknown) => {
    const i = item as Record<string, unknown>
    return {
      id: randomUUID(),
      name: String(i.title ?? '').trim(),
      category: 'hackathons' as const,
      lat: 0, lng: 0,
      location: 'India',
      url: String(i.link ?? '').trim(),
      description: String(i.description ?? '').replace(/<[^>]+>/g, '').trim().slice(0, 200),
      date: String(i.pubDate ?? '').trim(),
      sourceName: 'Devfolio',
    }
  }).filter((r) => r.name && r.url)
}

async function fetchUnstop(): Promise<Resource[]> {
  const res = await fetchWithTimeout('https://unstop.com/api/public/competition/listing?per_page=30')
  const json = await res.json()
  const items: unknown[] = json.data?.data ?? []
  return items.filter(Boolean).map((item: unknown) => {
    const c = item as Record<string, unknown>
    return {
      id: randomUUID(),
      name: String(c.title ?? '').trim(),
      category: 'hackathons' as const,
      lat: 0, lng: 0,
      location: String(c.city ?? c.country ?? 'India').trim(),
      url: `https://unstop.com/competitions/${c.slug ?? c.id}`,
      description: String(c.description ?? '').replace(/<[^>]+>/g, '').trim().slice(0, 200),
      date: String(c.end_date ?? c.deadline ?? '').trim(),
      sourceName: 'Unstop',
    }
  }).filter((r: Resource) => r.name && r.url)
}

export async function fetchHackathons(): Promise<ResourcesResponse> {
  const agg = await aggregateSources([fetchDevpost, fetchChallengeRocket, fetchMLH, fetchDevfolio, fetchUnstop])
  const deduped = deduplicateResources(agg.data)
  const geocoded = await geocodeAll(deduped)
  const filtered = filterExpired(geocoded)
  return buildResponse(filtered, 'hackathons', {
    revalidateSeconds: 300,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
