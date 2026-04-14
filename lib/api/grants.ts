import { XMLParser } from 'fast-xml-parser'
import { fetchWithTimeout, buildResponse } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import { filterExpired } from '@/lib/api/filterExpired'
import type { Resource, ResourcesResponse } from '@/types/resource'
import { randomUUID } from 'crypto'

const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: '__cdata' })

// RSS adapter factory (reused across all RSS grant sources)
function makeGrantsRssFetcher(
  url: string,
  sourceName: string,
  filterKeywords?: string[]
): () => Promise<Resource[]> {
  const fn = async function () {
    const res = await fetchWithTimeout(url, { headers: { 'User-Agent': 'stemspark/1.0' } })
    const xml = await res.text()
    const parsed = parser.parse(xml)
    const channel = parsed?.rss?.channel ?? parsed?.feed
    const items: unknown[] = channel?.item ?? channel?.entry ?? []
    const arr = Array.isArray(items) ? items : [items]
    return arr
      .filter(Boolean)
      .map((item: unknown) => {
        const i = item as Record<string, unknown>
        const title = String(i.title ?? (i['title'] as unknown as Record<string, unknown>)?.['__cdata'] ?? '').trim()
        const url = String(i.link ?? i.guid ?? '').trim()
        const desc = String(i.description ?? i.summary ?? '').replace(/<[^>]+>/g, '').trim()
        const date = String(i.pubDate ?? i.updated ?? '').trim()
        if (!title || !url) return null
        if (filterKeywords) {
          const text = (title + ' ' + desc).toLowerCase()
          if (!filterKeywords.some((kw) => text.includes(kw))) return null
        }
        return {
          id: randomUUID(),
          name: title,
          category: 'grants' as const,
          lat: 0, lng: 0,
          location: 'Global',
          url,
          description: desc.slice(0, 200),
          date: date || undefined,
          tags: ['grant'],
          sourceName,
        } as Resource
      })
      .filter((r): r is Resource => r !== null)
  }
  Object.defineProperty(fn, 'name', { value: sourceName })
  return fn
}

async function fetchNSF(): Promise<Resource[]> {
  const url = 'https://api.nsf.gov/services/v1/awards.json?keyword=women+STEM&printFields=id,title,abstractText,startDate,expDate,awardeeName,fundProgramName'
  const res = await fetchWithTimeout(url)
  const json = await res.json()
  return (json.response?.award ?? []).map((a: Record<string, string>) => ({
    id: randomUUID(),
    name: a.title ?? 'NSF Award',
    category: 'grants' as const,
    lat: 37.09, lng: -95.71,
    location: a.awardeeName ? `${a.awardeeName}, USA` : 'USA',
    url: `https://www.nsf.gov/awardsearch/showAward?AWD_ID=${a.id}`,
    description: (a.abstractText ?? '').slice(0, 200),
    date: a.expDate,
    tags: ['NSF', 'federal'],
    sourceName: 'NSF',
  }))
}

async function fetchGrantsGov(): Promise<Resource[]> {
  const res = await fetchWithTimeout('https://api.grants.gov/v2/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ keyword: 'women STEM', oppStatuses: 'forecasted,posted' }),
  })
  const json = await res.json()
  return (json.opportunities ?? []).map((o: Record<string, string>) => ({
    id: randomUUID(),
    name: o.opportunityTitle ?? 'Grants.gov Opportunity',
    category: 'grants' as const,
    lat: 37.09, lng: -95.71,
    location: 'USA',
    url: `https://www.grants.gov/web/grants/view-opportunity.html?oppId=${o.id}`,
    description: (o.synopsis ?? '').slice(0, 200),
    date: o.closeDate,
    tags: ['federal', 'grants.gov'],
    sourceName: 'Grants.gov',
  }))
}

async function fetchNIH(): Promise<Resource[]> {
  const res = await fetchWithTimeout('https://api.reporter.nih.gov/v2/projects/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      criteria: {
        advanced_text_search: { operator: 'and', search_field: 'all', search_text: 'women STEM' },
      },
      limit: 25,
    }),
  })
  const json = await res.json()
  return (json.results ?? []).map((p: Record<string, string>) => ({
    id: randomUUID(),
    name: p.project_title ?? 'NIH Project',
    category: 'grants' as const,
    lat: 39.00, lng: -77.10,
    location: 'Bethesda, USA',
    url: `https://reporter.nih.gov/project-details/${p.appl_id}`,
    description: (p.abstract_text ?? '').slice(0, 200),
    date: p.project_end_date,
    sourceName: 'NIH',
  }))
}

// 13 RSS grant sources
const GRANTS_RSS_SOURCES = [
  { url: 'https://www.aauw.org/feed/',                                  name: 'AAUW',            filter: ['fellowship', 'grant', 'scholarship'] },
  { url: 'https://ec.europa.eu/research/mariecurieactions/feed',        name: 'Marie Curie',     filter: undefined },
  { url: 'https://erasmus-plus.ec.europa.eu/news-and-events/feed',      name: 'Erasmus+',        filter: ['scholarship', 'grant', 'fellowship'] },
  { url: 'https://cscuk.fcdo.gov.uk/feed/',                             name: 'Commonwealth',    filter: undefined },
  { url: 'https://www.gatesfoundation.org/feed/',                       name: 'Gates',           filter: ['scholarship', 'women', 'grant', 'award'] },
  { url: 'https://www.forwomeninscience.com/en/feed',                   name: "L'Oréal-UNESCO",  filter: undefined },
  { url: 'https://owsd.net/feed/',                                      name: 'OWSD',            filter: ['fellowship', 'grant', 'scholarship'] },
  { url: 'https://www.adb.org/news/rss',                                name: 'ADB',             filter: ['scholarship', 'fellowship', 'women'] },
  { url: 'https://www.iadb.org/en/news-and-events/rss.xml',            name: 'IDB',             filter: ['scholarship', 'fellowship', 'women'] },
  { url: 'https://www.oas.org/en/media_center/press_releases/rss.asp', name: 'OAS',             filter: ['scholarship', 'fellowship'] },
  { url: 'https://www.daad.de/en/feed/',                                name: 'DAAD',            filter: ['scholarship', 'women', 'grant', 'fellowship'] },
  { url: 'https://www.afdb.org/en/feed/',                               name: 'AfDB',            filter: ['scholarship', 'fellowship', 'women'] },
  { url: 'https://mastercardfdn.org/feed/',                             name: 'Mastercard Fdn',  filter: undefined },
]

export async function fetchGrants(): Promise<ResourcesResponse> {
  const rssFetchers = GRANTS_RSS_SOURCES.map((s) => makeGrantsRssFetcher(s.url, s.name, s.filter))
  const agg = await aggregateSources([fetchNSF, fetchGrantsGov, fetchNIH, ...rssFetchers])
  const deduped = deduplicateResources(agg.data)
  const filtered = filterExpired(deduped)
  return buildResponse(filtered, 'grants', {
    revalidateSeconds: 1800,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
