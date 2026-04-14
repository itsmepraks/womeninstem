import { fetchWithTimeout, buildResponse } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import { geocodeAll } from '@/lib/geocoding'
import { filterExpired } from '@/lib/api/filterExpired'
import type { Resource, ResourcesResponse } from '@/types/resource'
import { randomUUID } from 'crypto'

async function fetchArbeitnow(): Promise<Resource[]> {
  const res = await fetchWithTimeout(
    'https://www.arbeitnow.com/api/job-board-api',
    { headers: { 'User-Agent': 'stemspark/1.0' } }
  )
  const json = await res.json()
  const jobs: Array<Record<string, unknown>> = json.data ?? []
  return jobs.map((j) => ({
    id: randomUUID(),
    name: String(j.title ?? '').trim(),
    category: 'jobs' as const,
    lat: 0,
    lng: 0,
    location: String(j.location ?? 'Remote').trim(),
    url: String(j.url ?? '').trim(),
    description: String(j.description ?? '').replace(/<[^>]+>/g, '').trim().slice(0, 200),
    date: String(j.created_at ?? '').trim(),
    tags: Array.isArray(j.tags) ? (j.tags as string[]) : [],
    company: typeof j.company_name === 'string' ? j.company_name : undefined,
    sourceName: 'Arbeitnow',
  })).filter((r) => r.name && r.url)
}

async function fetchRemotive(): Promise<Resource[]> {
  const res = await fetchWithTimeout(
    'https://remotive.com/api/remote-jobs?category=software-dev&limit=50',
    { headers: { 'User-Agent': 'stemspark/1.0' } }
  )
  const json = await res.json()
  const jobs: Array<Record<string, unknown>> = json.jobs ?? []
  return jobs.map((j) => ({
    id: randomUUID(),
    name: String(j.title ?? '').trim(),
    category: 'jobs' as const,
    lat: 0,
    lng: 0,
    location: String(j.candidate_required_location ?? 'Remote').trim(),
    url: String(j.url ?? '').trim(),
    description: String(j.description ?? '').replace(/<[^>]+>/g, '').trim().slice(0, 200),
    date: String(j.publication_date ?? '').trim(),
    company: typeof j.company_name === 'string' ? j.company_name : undefined,
    sourceName: 'Remotive',
  })).filter((r) => r.name && r.url)
}

async function fetchJobicy(): Promise<Resource[]> {
  const res = await fetchWithTimeout(
    'https://jobicy.com/api/v2/remote-jobs?count=50&tag=developer',
    { headers: { 'User-Agent': 'stemspark/1.0' } }
  )
  const json = await res.json()
  const jobs: Array<Record<string, unknown>> = json.jobs ?? []
  return jobs.map((j) => ({
    id: randomUUID(),
    name: String(j.jobTitle ?? '').trim(),
    category: 'jobs' as const,
    lat: 0,
    lng: 0,
    location: String(j.jobGeo ?? 'Remote').trim(),
    url: String(j.url ?? '').trim(),
    description: String(j.jobExcerpt ?? '').replace(/<[^>]+>/g, '').trim().slice(0, 200),
    date: String(j.pubDate ?? '').trim(),
    company: typeof j.companyName === 'string' ? j.companyName : undefined,
    sourceName: 'Jobicy',
  })).filter((r) => r.name && r.url)
}

async function fetchHimalayas(): Promise<Resource[]> {
  const res = await fetchWithTimeout(
    'https://himalayas.app/jobs/api?limit=50',
    { headers: { 'User-Agent': 'stemspark/1.0' } }
  )
  const json = await res.json()
  const jobs: Array<Record<string, unknown>> = json.jobs ?? []
  return jobs.map((j) => ({
    id: randomUUID(),
    name: String(j.title ?? '').trim(),
    category: 'jobs' as const,
    lat: 0,
    lng: 0,
    location: String(j.location ?? 'Remote').trim(),
    url: String(j.applicationLink ?? j.url ?? '').trim(),
    description: String(j.description ?? '').replace(/<[^>]+>/g, '').trim().slice(0, 200),
    date: String(j.datePosted ?? '').trim(),
    company: typeof j.companyName === 'string' ? j.companyName : undefined,
    sourceName: 'Himalayas',
  })).filter((r) => r.name && r.url)
}

async function fetchWWR(): Promise<Resource[]> {
  const res = await fetchWithTimeout(
    'https://weworkremotely.com/remote-jobs.rss',
    { headers: { 'User-Agent': 'stemspark/1.0' } }
  )
  // WWR returns RSS — use basic text parsing since fast-xml-parser is available
  const { XMLParser } = await import('fast-xml-parser')
  const rssParser = new XMLParser({ ignoreAttributes: false, cdataPropName: '__cdata' })
  const xml = await res.text()
  const parsed = rssParser.parse(xml)
  const items: unknown[] = parsed?.rss?.channel?.item ?? []
  const arr = Array.isArray(items) ? items : [items]
  return arr.filter(Boolean).map((item: unknown) => {
    const i = item as Record<string, unknown>
    return {
      id: randomUUID(),
      name: String(i.title ?? '').trim(),
      category: 'jobs' as const,
      lat: 0,
      lng: 0,
      location: 'Remote',
      url: String(i.link ?? '').trim(),
      description: String(i.description ?? '').replace(/<[^>]+>/g, '').trim().slice(0, 200),
      date: String(i.pubDate ?? '').trim(),
      sourceName: 'WWR',
    }
  }).filter((r: Resource) => r.name && r.url)
}

export async function fetchJobs(): Promise<ResourcesResponse> {
  const agg = await aggregateSources([fetchArbeitnow, fetchRemotive, fetchJobicy, fetchHimalayas, fetchWWR])
  const deduped = deduplicateResources(agg.data)
  const geocoded = await geocodeAll(deduped)
  // Don't filterExpired for jobs — date is posting date, not expiry
  return buildResponse(geocoded, 'jobs', {
    revalidateSeconds: 300,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
