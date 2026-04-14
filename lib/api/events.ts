import { XMLParser } from 'fast-xml-parser'
import { fetchWithTimeout, buildResponse } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import { filterExpired } from '@/lib/api/filterExpired'
import type { Resource, ResourcesResponse } from '@/types/resource'
import { randomUUID } from 'crypto'

const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: '__cdata' })

// RSS adapter factory
function makeRssFetcher(
  url: string,
  sourceName: string,
  defaultLocation: string,
  category: Resource['category'] = 'events'
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
        const title = String(
          i.title ?? (i['title'] as unknown as Record<string, unknown>)?.['__cdata'] ?? ''
        ).trim()
        const link = String(i.link ?? i.guid ?? '').trim()
        const description = String(i.description ?? i.summary ?? '')
          .replace(/<[^>]+>/g, '')
          .trim()
        const date = String(i.pubDate ?? i.updated ?? '').trim()
        if (!title || !link) return null
        return {
          id: randomUUID(),
          name: title,
          category,
          lat: 0,
          lng: 0,
          location: defaultLocation,
          url: link,
          description: description.slice(0, 200),
          date: date || undefined,
          sourceName,
        } as Resource
      })
      .filter((r): r is Resource => r !== null)
  }
  Object.defineProperty(fn, 'name', { value: sourceName })
  return fn
}

// 18 RSS event sources
const EVENT_SOURCES = [
  { url: 'https://www.womenwhocode.com/blog/feed',                                  name: 'WWCode',        location: 'Global' },
  { url: 'https://swe.org/feed/',                                                   name: 'SWE',           location: 'USA' },
  { url: 'https://www.ieee.org/feeds/wie-events.rss',                              name: 'IEEE-WIE',      location: 'Global' },
  { url: 'https://www.aauw.org/feed/',                                              name: 'AAUW',          location: 'USA' },
  { url: 'https://blog.girlswhocode.com/rss/',                                     name: 'GirlsWhoCode',  location: 'USA' },
  { url: 'https://www.ncwit.org/feed/',                                             name: 'NCWIT',         location: 'USA' },
  { url: 'https://medium.com/feed/women-in-technology',                             name: 'WomenInTech-M', location: 'Global' },
  { url: 'https://www.blackgirlscode.com/blog/feed',                                name: 'BlackGirlsCODE', location: 'USA' },
  { url: 'https://techwomen.org/feed/',                                             name: 'TechWomen',     location: 'Global' },
  { url: 'https://www.stemconnector.com/feed/',                                    name: 'STEMConnector', location: 'USA' },
  { url: 'https://www.witi.com/rss/feed.xml',                                      name: 'WITI',          location: 'USA' },
  { url: 'https://rewritingthecode.org/feed/',                                     name: 'RTC',           location: 'USA' },
  { url: 'https://society-of-women-engineers.blogspot.com/feeds/posts/default?alt=rss', name: 'SWE-Blog',  location: 'USA' },
  { url: 'https://rss.app/feeds/tXWxn2v4M6g1ZMVD.xml',                           name: 'WiMLDS',        location: 'Global' },
  { url: 'https://www.womentechmakers.com/blog/feed',                             name: 'WTM',           location: 'Global' },
  { url: 'https://lesbianswhotech.org/feed/',                                      name: 'LWT',           location: 'USA' },
  { url: 'https://www.latinaintech.org/feed/',                                     name: 'LatinaInTech',  location: 'USA' },
  { url: 'https://afrostem.com/feed/',                                              name: 'AfroSTEM',      location: 'USA' },
]

const fetchers = EVENT_SOURCES.map((s) => makeRssFetcher(s.url, s.name, s.location))

export async function fetchEvents(): Promise<ResourcesResponse> {
  const agg = await aggregateSources(fetchers)
  const deduped = deduplicateResources(agg.data)
  const filtered = filterExpired(deduped)
  return buildResponse(filtered, 'events', {
    revalidateSeconds: 21600,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
