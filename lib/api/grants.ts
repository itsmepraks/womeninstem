import { XMLParser } from 'fast-xml-parser'
import { fetchWithTimeout, buildResponse, parseRssItem } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import { filterExpired } from '@/lib/api/filterExpired'
import type { Resource, ResourcesResponse } from '@/types/resource'
import type {
  NSFResponse,
  GrantsGovResponse,
  NIHResponse,
} from '@/types/external'
import { randomUUID } from 'crypto'

const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: '__cdata' })

function makeGrantsRssFetcher(
  url: string,
  sourceName: string,
  filterKeywords?: string[]
): () => Promise<Resource[]> {
  const fn = async function (): Promise<Resource[]> {
    const res = await fetchWithTimeout(url, { headers: { 'User-Agent': 'stemspark/1.0' } })
    const xml = await res.text()
    const parsed = parser.parse(xml)
    const channel = parsed?.rss?.channel ?? parsed?.feed
    const items: unknown[] = channel?.item ?? channel?.entry ?? []
    const arr = Array.isArray(items) ? items : [items]
    return arr
      .map((item): Resource | null => {
        const fields = parseRssItem(item)
        if (!fields) return null
        if (filterKeywords) {
          const text = (fields.title + ' ' + fields.description).toLowerCase()
          if (!filterKeywords.some((kw) => text.includes(kw))) return null
        }
        return {
          id: randomUUID(),
          name: fields.title,
          category: 'grants' as const,
          lat: 0, lng: 0,
          location: 'Global',
          url: fields.url,
          description: fields.description.slice(0, 200),
          date: fields.date || undefined,
          tags: ['grant'],
          sourceName,
        }
      })
      .filter((r): r is Resource => r !== null)
  }
  Object.defineProperty(fn, 'name', { value: sourceName })
  return fn
}

async function fetchNSF(): Promise<Resource[]> {
  const url = 'https://api.nsf.gov/services/v1/awards.json?keyword=women+STEM&printFields=id,title,abstractText,startDate,expDate,awardeeName,fundProgramName'
  const res = await fetchWithTimeout(url)
  const json: NSFResponse = await res.json()
  const awards = json.response?.award ?? []
  return awards.map((a) => ({
    id: randomUUID(),
    name: a.title ?? 'NSF Award',
    category: 'grants' as const,
    lat: 37.09, lng: -95.71,
    location: a.awardeeName ? `${a.awardeeName}, USA` : 'USA',
    url: `https://www.nsf.gov/awardsearch/showAward?AWD_ID=${a.id ?? ''}`,
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
  const json: GrantsGovResponse = await res.json()
  const opps = json.opportunities ?? []
  return opps.map((o) => ({
    id: randomUUID(),
    name: o.opportunityTitle ?? 'Grants.gov Opportunity',
    category: 'grants' as const,
    lat: 37.09, lng: -95.71,
    location: 'USA',
    url: `https://www.grants.gov/web/grants/view-opportunity.html?oppId=${o.id ?? ''}`,
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
  const json: NIHResponse = await res.json()
  const projects = json.results ?? []
  return projects.map((p) => ({
    id: randomUUID(),
    name: p.project_title ?? 'NIH Project',
    category: 'grants' as const,
    lat: 39.00, lng: -77.10,
    location: 'Bethesda, USA',
    url: `https://reporter.nih.gov/project-details/${p.appl_id ?? ''}`,
    description: (p.abstract_text ?? '').slice(0, 200),
    date: p.project_end_date,
    sourceName: 'NIH',
  }))
}

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
    revalidateSeconds: 21600,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
