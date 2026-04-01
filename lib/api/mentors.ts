import { fetchWithTimeout, buildResponse } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import { geocodeAll } from '@/lib/geocoding'
import { filterExpired } from '@/lib/api/filterExpired'
import type { Resource, ResourcesResponse } from '@/types/resource'
import { randomUUID } from 'crypto'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const githubHeaders: Record<string, string> = {
  'User-Agent': 'stemspark/1.0',
  Accept: 'application/vnd.github+json',
  ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
}

const MENTOR_SIGNALS = [
  'mentor', 'mentoring', 'coach', 'coaching', 'advisory',
  'open to connect', 'dm me', 'happy to help', 'reach out',
]

function hasMentorSignal(bio: string): boolean {
  const lower = bio.toLowerCase()
  return MENTOR_SIGNALS.some((s) => lower.includes(s))
}

function makeGithubMentorFetcher(query: string, label: string): () => Promise<Resource[]> {
  const fn = async function () {
    const res = await fetchWithTimeout(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=50`,
      { headers: githubHeaders }
    )
    const json = await res.json()
    const users: Array<{ login: string }> = json.items ?? []
    const resources: Resource[] = []
    for (const user of users.slice(0, 20)) {
      try {
        const profileRes = await fetchWithTimeout(`https://api.github.com/users/${user.login}`, { headers: githubHeaders })
        const p = await profileRes.json()
        if (!p.html_url) continue
        if (!p.bio || !hasMentorSignal(p.bio)) continue
        resources.push({
          id: randomUUID(),
          name: p.name ?? p.login,
          category: 'mentors' as const,
          lat: 0, lng: 0,
          location: p.location ?? 'Global',
          url: p.blog ?? p.html_url,
          bio: (p.bio ?? '').slice(0, 200),
          tags: ['github', 'mentor'],
          sourceName: label,
        })
      } catch {
        // skip individual failures
      }
    }
    return resources
  }
  Object.defineProperty(fn, 'name', { value: label })
  return fn
}

async function fetchDevToMentors(): Promise<Resource[]> {
  const res = await fetchWithTimeout('https://dev.to/api/articles?tag=womenintech&per_page=50')
  const articles: Array<{ user: { username: string; name: string; bio_html: string } }> = await res.json()
  const seen = new Set<string>()
  const resources: Resource[] = []
  for (const article of articles) {
    const u = article.user
    if (!u?.username || seen.has(u.username)) continue
    seen.add(u.username)
    const bio = u.bio_html?.replace(/<[^>]+>/g, '') ?? ''
    if (!hasMentorSignal(bio)) continue
    resources.push({
      id: randomUUID(),
      name: u.name ?? u.username,
      category: 'mentors' as const,
      lat: 0, lng: 0,
      location: 'Global',
      url: `https://dev.to/${u.username}`,
      bio: bio.slice(0, 200),
      tags: ['devto', 'mentor', 'womenintech'],
      sourceName: 'Dev.to',
    })
  }
  return resources
}

async function fetchHashnodeMentors(): Promise<Resource[]> {
  const query = `{
    tagFeed(type: BEST, slug: "women-in-tech") {
      edges { node { author { name username bio { text } } } }
    }
  }`
  const res = await fetchWithTimeout('https://api.hashnode.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  })
  const json = await res.json()
  const edges: Array<{ node: { author: { name: string; username: string; bio: { text: string } } } }> =
    json.data?.tagFeed?.edges ?? []
  const seen = new Set<string>()
  const resources: Resource[] = []
  for (const { node } of edges) {
    const a = node.author
    if (!a?.username || seen.has(a.username)) continue
    seen.add(a.username)
    const bio = a.bio?.text ?? ''
    if (!hasMentorSignal(bio)) continue
    resources.push({
      id: randomUUID(),
      name: a.name ?? a.username,
      category: 'mentors' as const,
      lat: 0, lng: 0,
      location: 'Global',
      url: `https://hashnode.com/@${a.username}`,
      bio: bio.slice(0, 200),
      tags: ['hashnode', 'mentor', 'womenintech'],
      sourceName: 'Hashnode',
    })
  }
  return resources
}

async function fetchSpeakerinnen(): Promise<Resource[]> {
  const res = await fetchWithTimeout('https://speakerinnen.org/api/v1/profiles?locale=en')
  const json = await res.json()
  const profiles: Array<{
    fullname: string; city: string; country: string;
    abstract: string; website: string;
  }> = Array.isArray(json) ? json : json.profiles ?? []
  return profiles.slice(0, 50).map((p) => ({
    id: randomUUID(),
    name: p.fullname ?? 'Speaker',
    category: 'mentors' as const,
    lat: 0, lng: 0,
    location: [p.city, p.country].filter(Boolean).join(', ') || 'Global',
    url: p.website ?? 'https://speakerinnen.org/en/profiles',
    bio: (p.abstract ?? '').replace(/<[^>]+>/g, '').slice(0, 200),
    tags: ['speaker', 'mentor', 'speakerinnen'],
    sourceName: 'Speakerinnen',
  }))
}

const fetchGitHubMentors1 = makeGithubMentorFetcher('women mentor STEM in:bio', 'GitHub-STEM')
const fetchGitHubMentors2 = makeGithubMentorFetcher('"she/her" engineer mentor in:bio', 'GitHub-SheHer')
const fetchGitHubMentors3 = makeGithubMentorFetcher('"women in tech" mentor in:bio', 'GitHub-WIT')

export async function fetchMentors(): Promise<ResourcesResponse> {
  const agg = await aggregateSources([
    fetchGitHubMentors1,
    fetchGitHubMentors2,
    fetchGitHubMentors3,
    fetchDevToMentors,
    fetchHashnodeMentors,
    fetchSpeakerinnen,
  ])
  const deduped = deduplicateResources(agg.data)
  const geocoded = await geocodeAll(deduped)
  const filtered = filterExpired(geocoded)
  return buildResponse(filtered, 'mentors', {
    revalidateSeconds: 21600,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
