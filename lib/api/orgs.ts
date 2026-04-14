import { fetchWithTimeout, buildResponse } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import { filterExpired } from '@/lib/api/filterExpired'
import type { Resource, ResourcesResponse } from '@/types/resource'
import { randomUUID } from 'crypto'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const githubHeaders: Record<string, string> = {
  'User-Agent': 'stemspark/1.0',
  Accept: 'application/vnd.github+json',
  ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
}

async function fetchWikipediaWomenSTEM(): Promise<Resource[]> {
  const url = 'https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Women_in_STEM&cmlimit=50&format=json&origin=*'
  const res = await fetchWithTimeout(url, { headers: { 'User-Agent': 'stemspark/1.0' } })
  const json = await res.json()
  const pages: Array<{ title: string }> = json.query?.categorymembers ?? []

  const resources: Resource[] = []
  for (const page of pages.slice(0, 20)) {
    try {
      const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(page.title)}`
      const summaryRes = await fetchWithTimeout(summaryUrl, { headers: { 'User-Agent': 'stemspark/1.0' } })
      const summary = await summaryRes.json()
      if (!summary.content_urls?.desktop?.page) continue
      resources.push({
        id: randomUUID(),
        name: summary.title ?? page.title,
        category: 'orgs' as const,
        lat: summary.coordinates?.lat ?? 0,
        lng: summary.coordinates?.lon ?? 0,
        location: summary.description ?? 'Global',
        url: summary.content_urls.desktop.page,
        description: (summary.extract ?? '').slice(0, 200),
        tags: ['organization', 'wikipedia'],
        sourceName: 'Wikipedia',
      })
    } catch {
      // skip individual page failures
    }
  }
  return resources
}

async function fetchWikipediaWomenOrgs(): Promise<Resource[]> {
  const url = 'https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Organizations_for_women_in_science&cmlimit=50&format=json&origin=*'
  const res = await fetchWithTimeout(url, { headers: { 'User-Agent': 'stemspark/1.0' } })
  const json = await res.json()
  const pages: Array<{ title: string }> = json.query?.categorymembers ?? []

  const resources: Resource[] = []
  for (const page of pages.slice(0, 20)) {
    try {
      const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(page.title)}`
      const summaryRes = await fetchWithTimeout(summaryUrl, { headers: { 'User-Agent': 'stemspark/1.0' } })
      const summary = await summaryRes.json()
      if (!summary.content_urls?.desktop?.page) continue
      resources.push({
        id: randomUUID(),
        name: summary.title ?? page.title,
        category: 'orgs' as const,
        lat: summary.coordinates?.lat ?? 0,
        lng: summary.coordinates?.lon ?? 0,
        location: summary.description ?? 'Global',
        url: summary.content_urls.desktop.page,
        description: (summary.extract ?? '').slice(0, 200),
        tags: ['organization', 'wikipedia'],
        sourceName: 'Wikipedia',
      })
    } catch {
      // skip
    }
  }
  return resources
}

async function fetchWikidata(): Promise<Resource[]> {
  const sparql = `
    SELECT ?org ?orgLabel ?description ?coords ?website WHERE {
      ?org wdt:P31 wd:Q43229.
      ?org wdt:P101 ?field.
      FILTER(?field IN (wd:Q21198, wd:Q11862829, wd:Q7185685, wd:Q3327774, wd:Q2374149)).
      OPTIONAL { ?org schema:description ?description. FILTER(LANG(?description) = "en") }
      OPTIONAL { ?org wdt:P625 ?coords }
      OPTIONAL { ?org wdt:P856 ?website }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    } LIMIT 50`
  const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(sparql)}&format=json`
  const res = await fetchWithTimeout(url, { headers: { 'User-Agent': 'stemspark/1.0', Accept: 'application/sparql-results+json' } })
  const json = await res.json()
  return (json.results?.bindings ?? []).map((b: Record<string, { value: string }>) => {
    const coords = b.coords?.value
    let lat = 0, lng = 0
    if (coords) {
      const m = coords.match(/Point\(([^ ]+) ([^ )]+)\)/)
      if (m) { lng = parseFloat(m[1]!); lat = parseFloat(m[2]!) }
    }
    return {
      id: randomUUID(),
      name: b.orgLabel?.value ?? 'Unknown Org',
      category: 'orgs' as const,
      lat, lng,
      location: 'Global',
      url: b.website?.value ?? b.org?.value ?? '',
      description: (b.description?.value ?? '').slice(0, 200),
      tags: ['organization', 'wikidata'],
      sourceName: 'Wikidata',
    }
  }).filter((r: Resource) => r.url)
}

async function fetchGitHubOrgs(): Promise<Resource[]> {
  const res = await fetchWithTimeout(
    'https://api.github.com/search/users?q=women+tech+type:org+in:bio&per_page=30',
    { headers: githubHeaders }
  )
  const json = await res.json()
  const orgs: Array<{ login: string; html_url: string; description: string }> = json.items ?? []
  const resources: Resource[] = []
  for (const org of orgs.slice(0, 15)) {
    try {
      const profileRes = await fetchWithTimeout(`https://api.github.com/orgs/${org.login}`, { headers: githubHeaders })
      const profile = await profileRes.json()
      if (!profile.html_url) continue
      resources.push({
        id: randomUUID(),
        name: profile.name ?? org.login,
        category: 'orgs' as const,
        lat: 0, lng: 0,
        location: profile.location ?? 'Global',
        url: profile.blog ?? profile.html_url,
        description: (profile.description ?? profile.bio ?? '').slice(0, 200),
        tags: ['tech', 'github', 'organization'],
        sourceName: 'GitHub',
      })
    } catch {
      // skip
    }
  }
  return resources
}

async function fetchGitHubRepos(): Promise<Resource[]> {
  const res = await fetchWithTimeout(
    'https://api.github.com/search/repositories?q=women+STEM+org:*&type=org&per_page=20',
    { headers: githubHeaders }
  )
  const json = await res.json()
  const repos: Array<{ full_name: string; html_url: string; description: string; owner: { login: string; html_url: string } }> = json.items ?? []
  return repos.filter((r) => r.description).map((r) => ({
    id: randomUUID(),
    name: r.full_name,
    category: 'orgs' as const,
    lat: 0, lng: 0,
    location: 'Global',
    url: r.owner?.html_url ?? r.html_url,
    description: (r.description ?? '').slice(0, 200),
    tags: ['tech', 'github', 'organization'],
    sourceName: 'GitHub-Repos',
  }))
}

export async function fetchOrgs(): Promise<ResourcesResponse> {
  const agg = await aggregateSources([
    fetchWikipediaWomenSTEM,
    fetchWikipediaWomenOrgs,
    fetchWikidata,
    fetchGitHubOrgs,
    fetchGitHubRepos,
  ])
  const deduped = deduplicateResources(agg.data)
  const filtered = filterExpired(deduped)
  return buildResponse(filtered, 'orgs', {
    revalidateSeconds: 86400,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
