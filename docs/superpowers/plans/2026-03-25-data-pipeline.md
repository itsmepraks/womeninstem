# Global Data Pipeline Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all hardcoded seed data with a fully automated, self-updating pipeline drawing from 50+ free global sources, with freshness UI and coverage disclaimer.

**Architecture:** Six category fetchers each run 5–19 sources in parallel via `Promise.allSettled`, deduplicate by URL fingerprint, geocode with a per-run cap, and return `ResourcesResponse` directly. Route files remove their `buildResponse` wrapper — fetchers now own the full response assembly.

**Tech Stack:** Next.js 14 App Router, TypeScript, `fast-xml-parser` (new), Jest, existing `fetchWithTimeout` + `filterExpired` helpers.

**Spec:** `docs/superpowers/specs/2026-03-25-data-pipeline-design.md`

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `package.json` | Modify | Add `fast-xml-parser` |
| `types/resource.ts` | Modify | Add `sourceName?` to `Resource`; add 4 new required fields to `ResourcesResponse` |
| `lib/api/helpers.ts` | Modify | Update `buildResponse` to accept `meta` object |
| `lib/api/pipeline.ts` | Create | `AggregateResult`, `aggregateSources`, `fingerprintUrl`, `deduplicateResources`, `mergeResources` |
| `lib/geocoding.ts` | Modify | Add `COUNTRY_CENTROIDS`, `geocodeAll` (rate-capped batch geocoder) |
| `lib/api/events.ts` | Rewrite | 18-source RSS aggregator |
| `lib/api/jobs.ts` | Rewrite | 5-source JSON/RSS aggregator |
| `lib/api/hackathons.ts` | Rewrite | 5-source aggregator |
| `lib/api/grants.ts` | Rewrite | 16-source RSS + REST aggregator, delete `GRANTS_SEED` |
| `lib/api/orgs.ts` | Rewrite | Wikipedia + Wikidata + GitHub aggregator, delete `ORG_SEED` |
| `lib/api/mentors.ts` | Rewrite | GitHub + Dev.to + Hashnode + Speakerinnen aggregator |
| `app/api/resources/events/route.ts` | Modify | `revalidate=300`, remove `buildResponse` wrapper |
| `app/api/resources/jobs/route.ts` | Modify | `revalidate=300`, remove wrapper |
| `app/api/resources/hackathons/route.ts` | Modify | `revalidate=300`, remove wrapper |
| `app/api/resources/grants/route.ts` | Modify | `revalidate=1800`, remove wrapper |
| `app/api/resources/orgs/route.ts` | Modify | `revalidate=21600`, remove wrapper |
| `app/api/resources/mentors/route.ts` | Modify | `revalidate=21600`, remove wrapper |
| `components/resources/LastUpdatedBadge.tsx` | Rewrite | Color-coded freshness dot, next refresh time, source count |
| `components/resources/CoverageDisclaimer.tsx` | Create | Collapsible global coverage disclaimer |
| `components/book/pages/CoverPage.tsx` | Modify | Add `CoverageDisclaimer` below category pills |
| `data/mentors-seed.json` | Delete | Replaced by live fetching |
| `__tests__/lib/api/helpers.test.ts` | Modify | Update `buildResponse` test to pass `meta` |
| `__tests__/lib/api/events.test.ts` | Modify | Update mocks to match new aggregator shape |
| `__tests__/lib/api/pipeline.test.ts` | Create | Tests for `aggregateSources`, `fingerprintUrl`, `deduplicateResources` |
| `__tests__/lib/geocoding.test.ts` | Modify | Add tests for `geocodeAll`, `COUNTRY_CENTROIDS` |

---

## Chunk 1: Foundation — types, pipeline, helpers, geocoding

### Task 1: Install fast-xml-parser and update types

**Files:**
- Modify: `package.json`
- Modify: `types/resource.ts`

- [ ] **Step 1: Install fast-xml-parser**

```bash
npm install fast-xml-parser
```

Expected: package added to `node_modules`, `package.json` updated with `"fast-xml-parser": "^4.x.x"`.

- [ ] **Step 2: Update `types/resource.ts`**

Add `sourceName` to `Resource` and four new required fields to `ResourcesResponse`:

```typescript
// types/resource.ts

export type ResourceCategory =
  | 'events'
  | 'orgs'
  | 'jobs'
  | 'mentors'
  | 'grants'
  | 'hackathons'

export interface Resource {
  id: string
  name: string
  category: ResourceCategory
  lat: number
  lng: number
  location: string
  url: string
  description?: string
  date?: string
  tags?: string[]
  // jobs-specific
  company?: string
  // mentors-specific
  field?: string
  bio?: string
  // grants-specific
  amount?: string
  eligibility?: string
  // pipeline metadata
  sourceName?: string        // NEW — which source this came from
}

export interface ResourcesResponse {
  data: Resource[]
  updatedAt: string
  category: ResourceCategory
  revalidateSeconds: number  // NEW required
  sources: string[]          // NEW required
  sourcesAttempted: number   // NEW required
  sourcesSucceeded: number   // NEW required
}

export const CATEGORY_COLORS: Record<ResourceCategory, string> = {
  events:    '#7c3aed',
  orgs:      '#0d9488',
  jobs:      '#f59e0b',
  mentors:   '#e11d48',
  grants:    '#10b981',
  hackathons: '#0ea5e9',
}

export const CATEGORY_LABELS: Record<ResourceCategory, string> = {
  events:     'Events',
  orgs:       'Organizations',
  jobs:       'Jobs & Internships',
  mentors:    'Mentors',
  grants:     'Grants & Scholarships',
  hackathons: 'Hackathons',
}

export function isResource(obj: unknown): obj is Resource {
  if (typeof obj !== 'object' || obj === null) return false
  const r = obj as Record<string, unknown>
  const validCategories: string[] = ['events', 'orgs', 'jobs', 'mentors', 'grants', 'hackathons']
  return (
    typeof r.id === 'string' &&
    typeof r.name === 'string' &&
    typeof r.category === 'string' &&
    validCategories.includes(r.category) &&
    typeof r.lat === 'number' &&
    typeof r.lng === 'number' &&
    typeof r.location === 'string' &&
    typeof r.url === 'string'
  )
}
```

- [ ] **Step 3: Verify TypeScript still compiles**

```bash
npx tsc --noEmit
```

Expected: type errors from `buildResponse` callers (the old 2-arg calls) — that's expected and will be fixed in Task 2. No other new errors.

---

### Task 2: Update buildResponse and its tests

**Files:**
- Modify: `lib/api/helpers.ts`
- Modify: `__tests__/lib/api/helpers.test.ts`

- [ ] **Step 1: Write the failing test first**

Replace `__tests__/lib/api/helpers.test.ts` with:

```typescript
import { buildResponse, fetchWithTimeout } from '@/lib/api/helpers'
import type { Resource } from '@/types/resource'

global.fetch = jest.fn()

const META = {
  revalidateSeconds: 300,
  sources: ['SWE', 'GHC'],
  sourcesAttempted: 2,
  sourcesSucceeded: 2,
}

describe('API Helpers', () => {
  beforeEach(() => { jest.clearAllMocks() })

  describe('buildResponse', () => {
    test('returns correct shape with all required fields', () => {
      const result = buildResponse([], 'events', META)
      expect(result.data).toEqual([])
      expect(result.category).toBe('events')
      expect(new Date(result.updatedAt).toISOString()).toBe(result.updatedAt)
      expect(result.revalidateSeconds).toBe(300)
      expect(result.sources).toEqual(['SWE', 'GHC'])
      expect(result.sourcesAttempted).toBe(2)
      expect(result.sourcesSucceeded).toBe(2)
    })

    test('includes data items', () => {
      const r: Resource = { id: '1', name: 'Test', category: 'events', lat: 0, lng: 0, location: 'NYC', url: 'https://example.com' }
      const result = buildResponse([r], 'events', META)
      expect(result.data).toHaveLength(1)
      expect(result.data[0]).toEqual(r)
    })
  })

  describe('fetchWithTimeout', () => {
    test('resolves with response on success', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true, status: 200 })
      const result = await fetchWithTimeout('https://example.com')
      expect(result.status).toBe(200)
    })

    test('rejects with timeout error', async () => {
      jest.useFakeTimers()
      ;(global.fetch as jest.Mock).mockImplementationOnce((_url: string, options: RequestInit = {}) => {
        return new Promise((_, reject) => {
          if (options.signal) {
            options.signal.addEventListener('abort', () => {
              reject(new DOMException('The operation was aborted', 'AbortError'))
            })
          }
        })
      })
      const promise = fetchWithTimeout('https://example.com', {}, 50)
      jest.advanceTimersByTime(100)
      await expect(promise).rejects.toThrow('Request timed out')
      jest.useRealTimers()
    })
  })
})
```

- [ ] **Step 2: Run test to see it fail**

```bash
npx jest __tests__/lib/api/helpers.test.ts --no-coverage
```

Expected: FAIL — `buildResponse` called with 3 args but accepts 2.

- [ ] **Step 3: Update `lib/api/helpers.ts`**

```typescript
import type { Resource, ResourceCategory, ResourcesResponse } from '@/types/resource'

export function buildResponse(
  data: Resource[],
  category: ResourceCategory,
  meta: {
    revalidateSeconds: number
    sources: string[]
    sourcesAttempted: number
    sourcesSucceeded: number
  }
): ResourcesResponse {
  return {
    data,
    category,
    updatedAt: new Date().toISOString(),
    revalidateSeconds: meta.revalidateSeconds,
    sources: meta.sources,
    sourcesAttempted: meta.sourcesAttempted,
    sourcesSucceeded: meta.sourcesSucceeded,
  }
}

export async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeoutMs = 8000
): Promise<Response> {
  const controller = new AbortController()
  const signal = controller.signal
  const timeoutId = setTimeout(() => { controller.abort() }, timeoutMs)
  try {
    const response = await fetch(url, { ...options, signal })
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timed out')
    }
    throw error
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npx jest __tests__/lib/api/helpers.test.ts --no-coverage
```

Expected: PASS (2 test suites).

- [ ] **Step 5: Commit**

```bash
git add types/resource.ts lib/api/helpers.ts __tests__/lib/api/helpers.test.ts package.json package-lock.json
git commit -m "feat: add pipeline metadata fields to types and buildResponse"
```

---

### Task 3: Create lib/api/pipeline.ts

**Files:**
- Create: `lib/api/pipeline.ts`
- Create: `__tests__/lib/api/pipeline.test.ts`

- [ ] **Step 1: Write tests**

Create `__tests__/lib/api/pipeline.test.ts`:

```typescript
import { aggregateSources, fingerprintUrl, deduplicateResources, mergeResources } from '@/lib/api/pipeline'
import type { Resource } from '@/types/resource'

const makeResource = (url: string, description = 'x'): Resource => ({
  id: Math.random().toString(),
  name: 'Test',
  category: 'events',
  lat: 0, lng: 0, location: 'NYC',
  url, description,
})

describe('aggregateSources', () => {
  test('collects results from all successful fetchers', async () => {
    async function fetcherA() { return [makeResource('https://a.com')] }
    async function fetcherB() { return [makeResource('https://b.com')] }
    const result = await aggregateSources([fetcherA, fetcherB])
    expect(result.data).toHaveLength(2)
    expect(result.sourcesAttempted).toBe(2)
    expect(result.sourcesSucceeded).toBe(2)
    expect(result.sourceNames).toEqual(['fetcherA', 'fetcherB'])
  })

  test('skips failed fetchers without throwing', async () => {
    async function goodFetcher() { return [makeResource('https://good.com')] }
    async function badFetcher() { throw new Error('network error') }
    const result = await aggregateSources([goodFetcher, badFetcher])
    expect(result.data).toHaveLength(1)
    expect(result.sourcesAttempted).toBe(2)
    expect(result.sourcesSucceeded).toBe(1)
  })

  test('returns empty data if all fetchers fail', async () => {
    async function failA() { throw new Error('fail') }
    async function failB() { throw new Error('fail') }
    const result = await aggregateSources([failA, failB])
    expect(result.data).toHaveLength(0)
    expect(result.sourcesSucceeded).toBe(0)
  })

  test('fetcher that returns empty array does not count as succeeded', async () => {
    async function emptyFetcher() { return [] as Resource[] }
    const result = await aggregateSources([emptyFetcher])
    expect(result.sourcesSucceeded).toBe(0)
    expect(result.sourcesAttempted).toBe(1)
  })
})

describe('fingerprintUrl', () => {
  test('strips www prefix', () => {
    expect(fingerprintUrl('https://www.example.com/path'))
      .toBe(fingerprintUrl('https://example.com/path'))
  })

  test('strips tracking params', () => {
    expect(fingerprintUrl('https://example.com/path?utm_source=foo'))
      .toBe(fingerprintUrl('https://example.com/path'))
  })

  test('strips trailing slash', () => {
    expect(fingerprintUrl('https://example.com/path/'))
      .toBe(fingerprintUrl('https://example.com/path'))
  })

  test('preserves meaningful query params', () => {
    const a = fingerprintUrl('https://example.com/page?id=123')
    const b = fingerprintUrl('https://example.com/page?id=456')
    expect(a).not.toBe(b)
  })
})

describe('deduplicateResources', () => {
  test('removes duplicate URLs', () => {
    const resources = [
      makeResource('https://example.com', 'short'),
      makeResource('https://example.com', 'longer description here'),
    ]
    const result = deduplicateResources(resources)
    expect(result).toHaveLength(1)
  })

  test('keeps the richer description on merge', () => {
    const resources = [
      makeResource('https://example.com', 'short'),
      makeResource('https://example.com', 'a much longer and more useful description'),
    ]
    const result = deduplicateResources(resources)
    expect(result[0].description).toBe('a much longer and more useful description')
  })

  test('treats www and non-www as duplicates', () => {
    const resources = [
      makeResource('https://www.example.com/page'),
      makeResource('https://example.com/page'),
    ]
    expect(deduplicateResources(resources)).toHaveLength(1)
  })
})

describe('mergeResources', () => {
  test('unions tags from both records', () => {
    const a = { ...makeResource('https://a.com'), tags: ['x', 'y'] }
    const b = { ...makeResource('https://a.com'), tags: ['y', 'z'] }
    const merged = mergeResources(a, b)
    expect(merged.tags).toEqual(expect.arrayContaining(['x', 'y', 'z']))
    expect(merged.tags).toHaveLength(3)
  })
})
```

- [ ] **Step 2: Run tests to see them fail**

```bash
npx jest __tests__/lib/api/pipeline.test.ts --no-coverage
```

Expected: FAIL — module not found.

- [ ] **Step 3: Create `lib/api/pipeline.ts`**

```typescript
import type { Resource } from '@/types/resource'

export interface AggregateResult<T> {
  data: T[]
  sourceNames: string[]
  sourcesAttempted: number
  sourcesSucceeded: number
}

/**
 * Fires all fetchers in parallel via Promise.allSettled.
 * Fetchers MUST be named functions (not arrows) — their .name is used as the source label.
 * Never throws. Failed fetchers are logged and skipped.
 */
export async function aggregateSources<T>(
  fetchers: Array<() => Promise<T[]>>,
  timeoutMs = 8000
): Promise<AggregateResult<T>> {
  const sourceNames = fetchers.map((f) => f.name || 'unknown')

  const results = await Promise.allSettled(
    fetchers.map((f) =>
      Promise.race([
        f(),
        new Promise<T[]>((_, reject) =>
          setTimeout(() => reject(new Error(`timeout after ${timeoutMs}ms`)), timeoutMs)
        ),
      ])
    )
  )

  const data: T[] = []
  let sourcesSucceeded = 0

  results.forEach((result, i) => {
    if (result.status === 'fulfilled') {
      if (result.value.length > 0) {
        data.push(...result.value)
        sourcesSucceeded++
      }
    } else {
      console.warn(`[pipeline] Source "${sourceNames[i]}" failed:`, result.reason?.message ?? result.reason)
    }
  })

  return { data, sourceNames, sourcesAttempted: fetchers.length, sourcesSucceeded }
}

/** Strips tracking params, www, and trailing slash. Used as dedup key. */
export function fingerprintUrl(url: string): string {
  try {
    const u = new URL(url)
    const TRACKING = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref', 'source', 'fbclid', 'gclid']
    TRACKING.forEach((p) => u.searchParams.delete(p))
    u.hostname = u.hostname.replace(/^www\./, '')
    u.pathname = u.pathname.replace(/\/+$/, '')
    return u.hostname + u.pathname + (u.search || '')
  } catch {
    return url.toLowerCase().trim()
  }
}

/** Merges two Resource records — keeps longer description, unions tags. */
export function mergeResources(a: Resource, b: Resource): Resource {
  const longerDesc =
    (b.description?.length ?? 0) > (a.description?.length ?? 0) ? b.description : a.description
  return {
    ...a,
    description: longerDesc,
    tags: [...new Set([...(a.tags ?? []), ...(b.tags ?? [])])],
  }
}

/** Deduplicates by URL fingerprint, keeping the richest record on collision. */
export function deduplicateResources(resources: Resource[]): Resource[] {
  const seen = new Map<string, Resource>()
  for (const r of resources) {
    const key = fingerprintUrl(r.url)
    const existing = seen.get(key)
    seen.set(key, existing ? mergeResources(existing, r) : r)
  }
  return Array.from(seen.values())
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npx jest __tests__/lib/api/pipeline.test.ts --no-coverage
```

Expected: PASS (all 10 tests).

- [ ] **Step 5: Commit**

```bash
git add lib/api/pipeline.ts __tests__/lib/api/pipeline.test.ts
git commit -m "feat: add pipeline utility (aggregateSources, deduplicateResources, fingerprintUrl)"
```

---

### Task 4: Update geocoding.ts — add geocodeAll with rate-cap and country centroids

**Files:**
- Modify: `lib/geocoding.ts`
- Modify: `__tests__/lib/geocoding.test.ts`

- [ ] **Step 1: Add new tests to `__tests__/lib/geocoding.test.ts`**

**Important:** Do NOT add a second `import` line. Update the existing import at the top of the file to add `geocodeAll` and `COUNTRY_CENTROIDS`:

```typescript
// Change existing import from:
import { geocodeAddress, clearGeocodingCache } from '@/lib/geocoding'
// To:
import { geocodeAddress, geocodeAll, clearGeocodingCache, COUNTRY_CENTROIDS } from '@/lib/geocoding'
import type { Resource } from '@/types/resource'
```

Then append these describe blocks to the existing test file (after all existing describes):

```typescript

// (keep existing mockFetch setup and tests for geocodeAddress)

const makeResource = (location: string): Resource => ({
  id: '1', name: 'Test', category: 'events', lat: 0, lng: 0,
  location, url: 'https://example.com',
})

describe('COUNTRY_CENTROIDS', () => {
  test('contains at least 60 entries', () => {
    expect(Object.keys(COUNTRY_CENTROIDS).length).toBeGreaterThanOrEqual(60)
  })

  test('Kenya centroid is near correct coordinates', () => {
    expect(COUNTRY_CENTROIDS['Kenya']).toBeDefined()
    expect(COUNTRY_CENTROIDS['Kenya'].lat).toBeCloseTo(-0.023, 0)
  })
})

describe('geocodeAll', () => {
  beforeEach(() => {
    clearGeocodingCache()
    mockFetch.mockClear()
  })

  test('fills in lat/lng for geocodeable resources', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true, json: async () => [{ lat: '51.5', lon: '-0.1', display_name: 'London' }]
    } as any)
    const resources = [makeResource('London, UK')]
    const result = await geocodeAll(resources, 1)
    expect(result[0].lat).toBeCloseTo(51.5, 1)
    expect(result[0].lng).toBeCloseTo(-0.1, 1)
  })

  test('uses country centroid when geocoding fails', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true, json: async () => []  // nominatim returns no results
    } as any)
    const resources = [makeResource('Some Unknown City, Kenya')]
    const result = await geocodeAll(resources, 1)
    expect(result[0].lat).toBeCloseTo(COUNTRY_CENTROIDS['Kenya'].lat, 0)
  })

  test('returns lat=0 lng=0 for resources beyond cap with unknown country', async () => {
    // cap=1, second resource location has no recognized country → lat=0
    mockFetch.mockResolvedValueOnce({
      ok: true, json: async () => [{ lat: '51.5', lon: '-0.1', display_name: 'London' }]
    } as any)
    // Use a location string with no country in COUNTRY_CENTROIDS so centroid fallback also gives 0
    const resources = [makeResource('London, UK'), makeResource('Some Unknown City XY')]
    const result = await geocodeAll(resources, 1)
    expect(result[0].lat).toBeCloseTo(51.5, 1)  // geocoded
    expect(result[1].lat).toBe(0)               // capped — no centroid match → 0,0
    expect(mockFetch).toHaveBeenCalledTimes(1)   // only 1 Nominatim call
  })

  test('Online resources get lat=0 lng=0 without geocoding', async () => {
    const resources = [makeResource('Online')]
    const result = await geocodeAll(resources, 5)
    expect(result[0].lat).toBe(0)
    expect(result[0].lng).toBe(0)
    expect(mockFetch).not.toHaveBeenCalled()
  })
})
```

- [ ] **Step 2: Run tests to see new ones fail**

```bash
npx jest __tests__/lib/geocoding.test.ts --no-coverage
```

Expected: existing tests PASS, new `geocodeAll` / `COUNTRY_CENTROIDS` tests FAIL.

- [ ] **Step 3: Rewrite `lib/geocoding.ts`**

```typescript
import type { Resource } from '@/types/resource'

export interface GeocodingResult {
  lat: number
  lng: number
  displayName: string
}

/** 60-country centroid fallback. Used when Nominatim fails or per-run cap is reached. */
export const COUNTRY_CENTROIDS: Record<string, { lat: number; lng: number }> = {
  'Afghanistan': { lat: 33.9391, lng: 67.7100 },
  'Algeria': { lat: 28.0339, lng: 1.6596 },
  'Argentina': { lat: -38.4161, lng: -63.6167 },
  'Australia': { lat: -25.2744, lng: 133.7751 },
  'Bangladesh': { lat: 23.6850, lng: 90.3563 },
  'Brazil': { lat: -14.2350, lng: -51.9253 },
  'Canada': { lat: 56.1304, lng: -106.3468 },
  'Chile': { lat: -35.6751, lng: -71.5430 },
  'China': { lat: 35.8617, lng: 104.1954 },
  'Colombia': { lat: 4.5709, lng: -74.2973 },
  'Congo': { lat: -4.0383, lng: 21.7587 },
  'Egypt': { lat: 26.8206, lng: 30.8025 },
  'Ethiopia': { lat: 9.1450, lng: 40.4897 },
  'France': { lat: 46.2276, lng: 2.2137 },
  'Germany': { lat: 51.1657, lng: 10.4515 },
  'Ghana': { lat: 7.9465, lng: -1.0232 },
  'India': { lat: 20.5937, lng: 78.9629 },
  'Indonesia': { lat: -0.7893, lng: 113.9213 },
  'Iran': { lat: 32.4279, lng: 53.6880 },
  'Iraq': { lat: 33.2232, lng: 43.6793 },
  'Ireland': { lat: 53.1424, lng: -7.6921 },
  'Israel': { lat: 31.0461, lng: 34.8516 },
  'Italy': { lat: 41.8719, lng: 12.5674 },
  'Japan': { lat: 36.2048, lng: 138.2529 },
  'Jordan': { lat: 30.5852, lng: 36.2384 },
  'Kenya': { lat: -0.0236, lng: 37.9062 },
  'Lebanon': { lat: 33.8547, lng: 35.8623 },
  'Malaysia': { lat: 4.2105, lng: 101.9758 },
  'Mexico': { lat: 23.6345, lng: -102.5528 },
  'Morocco': { lat: 31.7917, lng: -7.0926 },
  'Myanmar': { lat: 21.9162, lng: 95.9560 },
  'Netherlands': { lat: 52.1326, lng: 5.2913 },
  'New Zealand': { lat: -40.9006, lng: 174.8860 },
  'Nigeria': { lat: 9.0820, lng: 8.6753 },
  'Norway': { lat: 60.4720, lng: 8.4689 },
  'Pakistan': { lat: 30.3753, lng: 69.3451 },
  'Peru': { lat: -9.1900, lng: -75.0152 },
  'Philippines': { lat: 12.8797, lng: 121.7740 },
  'Poland': { lat: 51.9194, lng: 19.1451 },
  'Portugal': { lat: 39.3999, lng: -8.2245 },
  'Romania': { lat: 45.9432, lng: 24.9668 },
  'Russia': { lat: 61.5240, lng: 105.3188 },
  'Saudi Arabia': { lat: 23.8859, lng: 45.0792 },
  'Senegal': { lat: 14.4974, lng: -14.4524 },
  'South Africa': { lat: -30.5595, lng: 22.9375 },
  'South Korea': { lat: 35.9078, lng: 127.7669 },
  'Spain': { lat: 40.4637, lng: -3.7492 },
  'Sudan': { lat: 12.8628, lng: 30.2176 },
  'Sweden': { lat: 60.1282, lng: 18.6435 },
  'Switzerland': { lat: 46.8182, lng: 8.2275 },
  'Taiwan': { lat: 23.6978, lng: 120.9605 },
  'Tanzania': { lat: -6.3690, lng: 34.8888 },
  'Thailand': { lat: 15.8700, lng: 100.9925 },
  'Turkey': { lat: 38.9637, lng: 35.2433 },
  'Uganda': { lat: 1.3733, lng: 32.2903 },
  'Ukraine': { lat: 48.3794, lng: 31.1656 },
  'United Kingdom': { lat: 55.3781, lng: -3.4360 },
  'UK': { lat: 55.3781, lng: -3.4360 },
  'United States': { lat: 37.0902, lng: -95.7129 },
  'USA': { lat: 37.0902, lng: -95.7129 },
  'Vietnam': { lat: 14.0583, lng: 108.2772 },
  'Zimbabwe': { lat: -19.0154, lng: 29.1549 },
}

/** Extracts country name from a location string (looks for last comma-separated segment). */
function extractCountry(location: string): string | null {
  const parts = location.split(',').map((s) => s.trim())
  // Try 2-segment match first (e.g. "Nairobi, Kenya")
  for (let i = parts.length - 1; i >= 0; i--) {
    const candidate = parts[i]
    if (COUNTRY_CENTROIDS[candidate]) return candidate
  }
  return null
}

const cache = new Map<string, GeocodingResult>()

export function clearGeocodingCache(): void {
  cache.clear()
}

/**
 * Geocodes a single address via Nominatim.
 * Checks in-memory cache first. Enforces per-run cap via callCountRef.
 * NOT for direct use by pipeline adapters — use geocodeAll() instead.
 */
async function geocodeAddressInternal(
  address: string,
  callCountRef: { count: number; lastCallMs: number },
  maxPerRun: number
): Promise<GeocodingResult | null> {
  if (cache.has(address)) return cache.get(address)!

  if (callCountRef.count >= maxPerRun) return null

  // Enforce 1100ms gap measured from the END of the previous call (Nominatim 1 req/sec policy)
  if (callCountRef.lastCallMs > 0) {
    const elapsed = Date.now() - callCountRef.lastCallMs
    const remaining = 1100 - elapsed
    if (remaining > 0) await new Promise((resolve) => setTimeout(resolve, remaining))
  }

  callCountRef.count++

  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`
    const res = await fetch(url, { headers: { 'User-Agent': 'stemspark/1.0' } })
    callCountRef.lastCallMs = Date.now()  // record AFTER fetch completes
    const data = await res.json()
    if (!Array.isArray(data) || data.length === 0) return null
    const result: GeocodingResult = {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon),
      displayName: data[0].display_name,
    }
    cache.set(address, result)
    return result
  } catch {
    callCountRef.lastCallMs = Date.now()  // still update on error to space retries
    return null
  }
}

/**
 * Public single-address geocoder — used by CoverPage location search.
 * No rate-cap (single call, not batch pipeline use).
 */
export async function geocodeAddress(address: string): Promise<GeocodingResult | null> {
  if (cache.has(address)) return cache.get(address)!
  const ref = { count: 0, lastCallMs: 0 }
  return geocodeAddressInternal(address, ref, 1)
}

/**
 * Batch geocoder for pipeline use. Geocodes resources in sequence.
 * Cap: maxPerRun Nominatim calls per invocation.
 * Overflow: country centroid or lat=0/lng=0.
 * RULE: This is the only geocoding function pipeline adapters should use.
 */
export async function geocodeAll(
  resources: Resource[],
  maxPerRun = 15
): Promise<Resource[]> {
  const callCountRef = { count: 0, lastCallMs: 0 }
  const results: Resource[] = []

  for (const r of resources) {
    if (!r.location || r.location === 'Online' || r.location === 'Remote') {
      results.push({ ...r, lat: 0, lng: 0 })
      continue
    }

    const geocoded = await geocodeAddressInternal(r.location, callCountRef, maxPerRun)

    if (geocoded) {
      results.push({ ...r, lat: geocoded.lat, lng: geocoded.lng, location: geocoded.displayName || r.location })
      continue
    }

    // Fallback: country centroid
    const country = extractCountry(r.location)
    if (country && COUNTRY_CENTROIDS[country]) {
      results.push({ ...r, lat: COUNTRY_CENTROIDS[country].lat, lng: COUNTRY_CENTROIDS[country].lng })
    } else {
      results.push({ ...r, lat: 0, lng: 0 })
    }
  }

  return results
}
```

- [ ] **Step 4: Run geocoding tests**

```bash
npx jest __tests__/lib/geocoding.test.ts --no-coverage
```

Expected: PASS all tests. Existing `geocodeAddress` tests still pass because we preserved the public API.

- [ ] **Step 5: Commit**

```bash
git add lib/geocoding.ts __tests__/lib/geocoding.test.ts
git commit -m "feat: add geocodeAll with per-run cap and 60-country centroid fallback"
```

---

## Chunk 2: High-frequency fetchers — events, jobs, hackathons

### Task 5: Rewrite lib/api/events.ts (18 RSS sources)

**Files:**
- Rewrite: `lib/api/events.ts`
- Modify: `__tests__/lib/api/events.test.ts`

- [ ] **Step 1: Write updated tests**

Replace `__tests__/lib/api/events.test.ts`:

```typescript
import { fetchEvents } from '@/lib/api/events'

jest.mock('@/lib/api/pipeline', () => ({
  aggregateSources: jest.fn().mockResolvedValue({
    data: [
      {
        id: '1', name: 'GHC 2026', category: 'events',
        lat: 41.8781, lng: -87.6298, location: 'Chicago, IL',
        url: 'https://ghc.anitab.org/2026', date: '2026-09-30',
        sourceName: 'GHC',
      }
    ],
    sourceNames: ['fetchGHCEvents'],
    sourcesAttempted: 18,
    sourcesSucceeded: 12,
  }),
  deduplicateResources: jest.fn((r) => r),
}))

jest.mock('@/lib/geocoding', () => ({
  geocodeAll: jest.fn((r) => Promise.resolve(r)),
}))

jest.mock('@/lib/api/filterExpired', () => ({
  filterExpired: jest.fn((r) => r),
}))

describe('fetchEvents', () => {
  test('returns ResourcesResponse shape', async () => {
    const result = await fetchEvents()
    expect(result.data).toBeDefined()
    expect(result.category).toBe('events')
    expect(result.revalidateSeconds).toBe(300)
    expect(typeof result.sourcesAttempted).toBe('number')
    expect(typeof result.sourcesSucceeded).toBe('number')
    expect(Array.isArray(result.sources)).toBe(true)
  })

  test('data includes resources', async () => {
    const result = await fetchEvents()
    expect(result.data.length).toBeGreaterThan(0)
  })
})
```

- [ ] **Step 2: Run to see fail**

```bash
npx jest __tests__/lib/api/events.test.ts --no-coverage
```

Expected: FAIL — old `fetchEvents` returns `Resource[]`, test expects `ResourcesResponse`.

- [ ] **Step 3: Rewrite `lib/api/events.ts`**

```typescript
import { XMLParser } from 'fast-xml-parser'
import { fetchWithTimeout, buildResponse } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import { geocodeAll } from '@/lib/geocoding'
import { filterExpired } from '@/lib/api/filterExpired'
import type { Resource, ResourcesResponse } from '@/types/resource'
import { randomUUID } from 'crypto'

const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: '__cdata' })

/** Parses an RSS/Atom XML string and returns normalized Resource[] */
function parseRssFeed(xml: string, sourceName: string): Resource[] {
  try {
    const parsed = parser.parse(xml)
    const channel = parsed?.rss?.channel ?? parsed?.feed
    const items: unknown[] = channel?.item ?? channel?.entry ?? []
    const arr = Array.isArray(items) ? items : [items]

    return arr
      .filter(Boolean)
      .map((item: unknown) => {
        const i = item as Record<string, unknown>
        const title = String(i.title ?? i['title']?.['__cdata'] ?? '').trim()
        const url = String(i.link ?? i.guid ?? '').trim()
        const description = String(i.description ?? i.summary ?? i.content ?? '').replace(/<[^>]+>/g, '').trim().slice(0, 200)
        const date = String(i.pubDate ?? i.updated ?? i['dc:date'] ?? '').trim()
        const location = String(i.location ?? '').trim() || 'Online'

        if (!title || !url) return null

        return {
          id: randomUUID(),
          name: title,
          category: 'events' as const,
          lat: 0,
          lng: 0,
          location,
          url,
          description: description || undefined,
          date: date || undefined,
          tags: ['event'],
          sourceName,
        }
      })
      .filter((r): r is Resource => r !== null)
  } catch (err) {
    console.warn(`[events] Failed to parse RSS for ${sourceName}:`, err)
    return []
  }
}

/** Creates a named RSS fetcher for a given source. Must use function declaration for .name. */
function makeRssFetcher(url: string, sourceName: string): () => Promise<Resource[]> {
  // Named function so aggregateSources can read .name
  const fn = async function () {
    const res = await fetchWithTimeout(url, { headers: { 'User-Agent': 'stemspark/1.0' } })
    const xml = await res.text()
    return parseRssFeed(xml, sourceName)
  }
  Object.defineProperty(fn, 'name', { value: sourceName })
  return fn
}

// All 18 event sources from spec §2.1
const EVENT_SOURCES = [
  { url: 'https://swe.org/feed/',                                    name: 'SWE' },
  { url: 'https://ghc.anitab.org/feed/',                            name: 'GHC' },
  { url: 'https://anitab.org/feed/',                                 name: 'AnitaB' },
  { url: 'https://wie.ieee.org/feed/',                               name: 'IEEE WIE' },
  { url: 'https://ncwit.org/feed/',                                  name: 'NCWIT' },
  { url: 'https://women.acm.org/feed/',                              name: 'ACM-W' },
  { url: 'https://www.awis.org/feed/',                               name: 'AWIS' },
  { url: 'https://500womenscientists.org/feed/',                     name: '500WS' },
  { url: 'https://stemettes.org/feed/',                              name: 'Stemettes' },
  { url: 'https://girlswhocode.com/feed/',                           name: 'GWC' },
  { url: 'https://lesbianswhotech.org/feed/',                        name: 'LWT' },
  { url: 'https://www.womeninai.co/feed/',                           name: 'WomenInAI' },
  { url: 'https://djangogirls.org/en/feed/atom/',                    name: 'DjangoGirls' },
  { url: 'https://railsgirls.com/atom.xml',                          name: 'RailsGirls' },
  { url: 'https://pyladies.com/feed/',                               name: 'PyLadies' },
  { url: 'https://owsd.net/feed/',                                   name: 'OWSD' },
  { url: 'https://developers.google.com/community/experts/feed',     name: 'WTM' },
  { url: 'https://www.techwomen.org/feed/',                          name: 'TechWomen' },
]

export async function fetchEvents(): Promise<ResourcesResponse> {
  const fetchers = EVENT_SOURCES.map((s) => makeRssFetcher(s.url, s.name))
  const agg = await aggregateSources(fetchers)
  const deduped = deduplicateResources(agg.data)
  const geocoded = await geocodeAll(deduped)
  const filtered = filterExpired(geocoded)
  return buildResponse(filtered, 'events', {
    revalidateSeconds: 300,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
```

- [ ] **Step 4: Run tests**

```bash
npx jest __tests__/lib/api/events.test.ts --no-coverage
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add lib/api/events.ts __tests__/lib/api/events.test.ts
git commit -m "feat: rewrite events fetcher — 18 RSS sources via aggregateSources"
```

---

### Task 6: Rewrite lib/api/jobs.ts (5 sources)

**Files:**
- Rewrite: `lib/api/jobs.ts`
- Modify: `__tests__/lib/api/jobs.test.ts`

- [ ] **Step 1: Write updated tests**

Replace `__tests__/lib/api/jobs.test.ts`:

```typescript
import { fetchJobs } from '@/lib/api/jobs'

jest.mock('@/lib/api/pipeline', () => ({
  aggregateSources: jest.fn().mockResolvedValue({
    data: [{
      id: '1', name: 'Software Engineer', category: 'jobs',
      lat: 0, lng: 0, location: 'Remote', url: 'https://remotive.io/job/1',
      company: 'Acme', sourceName: 'Remotive',
    }],
    sourceNames: ['fetchRemotive'],
    sourcesAttempted: 5,
    sourcesSucceeded: 3,
  }),
  deduplicateResources: jest.fn((r) => r),
}))

jest.mock('@/lib/api/filterExpired', () => ({ filterExpired: jest.fn((r) => r) }))

describe('fetchJobs', () => {
  test('returns ResourcesResponse shape', async () => {
    const result = await fetchJobs()
    expect(result.category).toBe('jobs')
    expect(result.revalidateSeconds).toBe(300)
    expect(Array.isArray(result.data)).toBe(true)
  })
})
```

- [ ] **Step 2: Run to see fail**

```bash
npx jest __tests__/lib/api/jobs.test.ts --no-coverage
```

Expected: FAIL.

- [ ] **Step 3: Rewrite `lib/api/jobs.ts`**

```typescript
import { XMLParser } from 'fast-xml-parser'
import { fetchWithTimeout, buildResponse } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import { filterExpired } from '@/lib/api/filterExpired'
import type { Resource, ResourcesResponse } from '@/types/resource'
import { randomUUID } from 'crypto'

const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: '__cdata' })

const STEM_KEYWORDS = [
  'engineer', 'developer', 'scientist', 'researcher', 'data', 'analyst',
  'biotech', 'pharma', 'clinical', 'mathematician', 'physicist', 'chemist',
  'biologist', 'architect', 'product', 'ai ', ' ml ', 'robotics', 'software',
]

function isStemJob(title: string, description: string): boolean {
  const text = (title + ' ' + description).toLowerCase()
  return STEM_KEYWORDS.some((kw) => text.includes(kw))
}

async function fetchArbeitnow(): Promise<Resource[]> {
  const res = await fetchWithTimeout('https://www.arbeitnow.com/api/job-board-api')
  const json = await res.json()
  return (json.data ?? [])
    .filter((j: Record<string, string>) => isStemJob(j.title ?? '', j.description ?? ''))
    .map((j: Record<string, string>) => ({
      id: randomUUID(),
      name: j.title,
      category: 'jobs' as const,
      lat: 0, lng: 0,
      location: j.location ?? 'Europe',
      url: j.url,
      description: (j.description ?? '').replace(/<[^>]+>/g, '').trim().slice(0, 200),
      company: j.company_name,
      date: j.created_at,
      tags: j.tags ?? [],
      sourceName: 'Arbeitnow',
    }))
}

async function fetchRemotive(): Promise<Resource[]> {
  const res = await fetchWithTimeout('https://remotive.io/api/remote-jobs?limit=50')
  const json = await res.json()
  return (json.jobs ?? [])
    .filter((j: Record<string, string>) => isStemJob(j.title ?? '', j.description ?? ''))
    .map((j: Record<string, string | string[]>) => ({
      id: randomUUID(),
      name: j.title as string,
      category: 'jobs' as const,
      lat: 0, lng: 0,
      location: 'Remote',
      url: j.url as string,
      description: String(j.description ?? '').replace(/<[^>]+>/g, '').trim().slice(0, 200),
      company: j.company_name as string,
      date: j.publication_date as string,
      tags: Array.isArray(j.tags) ? j.tags : [],
      sourceName: 'Remotive',
    }))
}

async function fetchJobicy(): Promise<Resource[]> {
  const res = await fetchWithTimeout('https://jobicy.com/api/v2/remote-jobs?count=50')
  const json = await res.json()
  return (json.jobs ?? [])
    .filter((j: Record<string, string>) => isStemJob(j.jobTitle ?? '', j.jobDescription ?? ''))
    .map((j: Record<string, string>) => ({
      id: randomUUID(),
      name: j.jobTitle,
      category: 'jobs' as const,
      lat: 0, lng: 0,
      location: j.jobGeo ?? 'Remote',
      url: j.url,
      description: (j.jobDescription ?? '').replace(/<[^>]+>/g, '').trim().slice(0, 200),
      company: j.companyName,
      date: j.pubDate,
      sourceName: 'Jobicy',
    }))
}

async function fetchHimalayas(): Promise<Resource[]> {
  const res = await fetchWithTimeout('https://himalayas.app/jobs/api?limit=50')
  const json = await res.json()
  return (json.jobs ?? [])
    .filter((j: Record<string, string>) => isStemJob(j.title ?? '', j.description ?? ''))
    .map((j: Record<string, string>) => ({
      id: randomUUID(),
      name: j.title,
      category: 'jobs' as const,
      lat: 0, lng: 0,
      location: 'Remote',
      url: j.applicationLink ?? j.url ?? `https://himalayas.app/jobs/${j.slug}`,
      description: (j.description ?? '').replace(/<[^>]+>/g, '').trim().slice(0, 200),
      company: j.companyName,
      sourceName: 'Himalayas',
    }))
}

async function fetchWWR(): Promise<Resource[]> {
  const res = await fetchWithTimeout('https://weworkremotely.com/remote-jobs.rss', {
    headers: { 'User-Agent': 'stemspark/1.0' }
  })
  const xml = await res.text()
  const parsed = parser.parse(xml)
  const items: unknown[] = parsed?.rss?.channel?.item ?? []
  const arr = Array.isArray(items) ? items : [items]
  return arr
    .filter(Boolean)
    .map((item: unknown) => {
      const i = item as Record<string, unknown>
      const title = String(i.title ?? '').trim()
      const url = String(i.link ?? '').trim()
      const description = String(i.description ?? '').replace(/<[^>]+>/g, '').trim()
      if (!title || !url || !isStemJob(title, description)) return null
      return {
        id: randomUUID(),
        name: title,
        category: 'jobs' as const,
        lat: 0, lng: 0,
        location: 'Remote',
        url,
        description: description.slice(0, 200),
        date: String(i.pubDate ?? ''),
        sourceName: 'WWR',
      }
    })
    .filter((r): r is Resource => r !== null)
}

export async function fetchJobs(): Promise<ResourcesResponse> {
  const agg = await aggregateSources([fetchArbeitnow, fetchRemotive, fetchJobicy, fetchHimalayas, fetchWWR])
  const deduped = deduplicateResources(agg.data)
  const filtered = filterExpired(deduped) // jobs have no location to geocode — lat=0 is fine
  return buildResponse(filtered, 'jobs', {
    revalidateSeconds: 300,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
```

- [ ] **Step 4: Run tests**

```bash
npx jest __tests__/lib/api/jobs.test.ts --no-coverage
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add lib/api/jobs.ts __tests__/lib/api/jobs.test.ts
git commit -m "feat: rewrite jobs fetcher — 5 sources (Arbeitnow, Remotive, Jobicy, Himalayas, WWR)"
```

---

### Task 7: Rewrite lib/api/hackathons.ts (5 sources)

**Files:**
- Rewrite: `lib/api/hackathons.ts`
- Modify: `__tests__/lib/api/hackathons.test.ts`

- [ ] **Step 1: Write updated tests**

Replace `__tests__/lib/api/hackathons.test.ts`:

```typescript
import { fetchHackathons } from '@/lib/api/hackathons'

jest.mock('@/lib/api/pipeline', () => ({
  aggregateSources: jest.fn().mockResolvedValue({
    data: [{
      id: '1', name: 'Hackathon 2026', category: 'hackathons',
      lat: 0, lng: 0, location: 'Online', url: 'https://devpost.com/h/1',
      date: '2026-12-01', sourceName: 'Devpost',
    }],
    sourceNames: ['fetchDevpost'],
    sourcesAttempted: 5,
    sourcesSucceeded: 3,
  }),
  deduplicateResources: jest.fn((r) => r),
}))

jest.mock('@/lib/geocoding', () => ({ geocodeAll: jest.fn((r) => Promise.resolve(r)) }))
jest.mock('@/lib/api/filterExpired', () => ({ filterExpired: jest.fn((r) => r) }))

describe('fetchHackathons', () => {
  test('returns ResourcesResponse shape', async () => {
    const result = await fetchHackathons()
    expect(result.category).toBe('hackathons')
    expect(result.revalidateSeconds).toBe(300)
    expect(Array.isArray(result.data)).toBe(true)
  })
})
```

- [ ] **Step 2: Run to see fail**

```bash
npx jest __tests__/lib/api/hackathons.test.ts --no-coverage
```

Expected: FAIL.

- [ ] **Step 3: Rewrite `lib/api/hackathons.ts`**

```typescript
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
  }).filter((r) => r.name && r.url)
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
```

- [ ] **Step 4: Run tests**

```bash
npx jest __tests__/lib/api/hackathons.test.ts --no-coverage
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add lib/api/hackathons.ts __tests__/lib/api/hackathons.test.ts
git commit -m "feat: rewrite hackathons fetcher — 5 sources (Devpost, ChallengeRocket, MLH, Devfolio, Unstop)"
```

---

## Chunk 3: Grants, Orgs, Mentors

### Task 8: Rewrite lib/api/grants.ts (16 sources — RSS + REST APIs)

**Files:**
- Rewrite: `lib/api/grants.ts`
- Create: `__tests__/lib/api/grants.test.ts`

- [ ] **Step 1: Write test**

Create `__tests__/lib/api/grants.test.ts`:

```typescript
import { fetchGrants } from '@/lib/api/grants'

jest.mock('@/lib/api/pipeline', () => ({
  aggregateSources: jest.fn().mockResolvedValue({
    data: [{
      id: '1', name: 'NSF Fellowship', category: 'grants',
      lat: 38.9, lng: -77.0, location: 'Washington DC, USA',
      url: 'https://api.nsf.gov/award/1', date: '2026-10-16',
      amount: '$37,000', sourceName: 'NSF',
    }],
    sourceNames: ['fetchNSF'],
    sourcesAttempted: 16,
    sourcesSucceeded: 9,
  }),
  deduplicateResources: jest.fn((r) => r),
}))

jest.mock('@/lib/geocoding', () => ({ geocodeAll: jest.fn((r) => Promise.resolve(r)) }))
jest.mock('@/lib/api/filterExpired', () => ({ filterExpired: jest.fn((r) => r) }))

describe('fetchGrants', () => {
  test('returns ResourcesResponse shape', async () => {
    const result = await fetchGrants()
    expect(result.category).toBe('grants')
    expect(result.revalidateSeconds).toBe(1800)
    expect(Array.isArray(result.data)).toBe(true)
  })
})
```

- [ ] **Step 2: Run to see fail**

```bash
npx jest __tests__/lib/api/grants.test.ts --no-coverage
```

Expected: FAIL.

- [ ] **Step 3: Rewrite `lib/api/grants.ts`**

```typescript
import { XMLParser } from 'fast-xml-parser'
import { fetchWithTimeout, buildResponse } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import { geocodeAll } from '@/lib/geocoding'
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
        const title = String(i.title ?? i['title']?.['__cdata'] ?? '').trim()
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
    amount: 'Varies',
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
    amount: p.total_cost ? `$${Number(p.total_cost).toLocaleString()}` : undefined,
    sourceName: 'NIH',
  }))
}

// All 16 grant sources
const GRANTS_RSS_SOURCES = [
  { url: 'https://www.aauw.org/feed/',                                  name: 'AAUW',         filter: ['fellowship', 'grant', 'scholarship'] },
  { url: 'https://ec.europa.eu/research/mariecurieactions/feed',        name: 'Marie Curie',  filter: undefined },
  { url: 'https://erasmus-plus.ec.europa.eu/news-and-events/feed',      name: 'Erasmus+',     filter: ['scholarship', 'grant', 'fellowship'] },
  { url: 'https://cscuk.fcdo.gov.uk/feed/',                             name: 'Commonwealth', filter: undefined },
  { url: 'https://www.gatesfoundation.org/feed/',                       name: 'Gates',        filter: ['scholarship', 'women', 'grant', 'award'] },
  { url: 'https://www.forwomeninscience.com/en/feed',                   name: 'L\'Oréal-UNESCO', filter: undefined },
  { url: 'https://owsd.net/feed/',                                      name: 'OWSD',         filter: ['fellowship', 'grant', 'scholarship'] },
  { url: 'https://www.adb.org/news/rss',                                name: 'ADB',          filter: ['scholarship', 'fellowship', 'women'] },
  { url: 'https://www.iadb.org/en/news-and-events/rss.xml',            name: 'IDB',          filter: ['scholarship', 'fellowship', 'women'] },
  { url: 'https://www.oas.org/en/media_center/press_releases/rss.asp', name: 'OAS',          filter: ['scholarship', 'fellowship'] },
  { url: 'https://www.daad.de/en/feed/',                                name: 'DAAD',         filter: ['scholarship', 'women', 'grant', 'fellowship'] },
  { url: 'https://www.afdb.org/en/feed/',                               name: 'AfDB',         filter: ['scholarship', 'fellowship', 'women'] },
  { url: 'https://mastercardfdn.org/feed/',                             name: 'Mastercard Fdn', filter: undefined },
]

export async function fetchGrants(): Promise<ResourcesResponse> {
  const rssFetchers = GRANTS_RSS_SOURCES.map((s) => makeGrantsRssFetcher(s.url, s.name, s.filter))
  const agg = await aggregateSources([fetchNSF, fetchGrantsGov, fetchNIH, ...rssFetchers])
  const deduped = deduplicateResources(agg.data)
  const geocoded = await geocodeAll(deduped)
  const filtered = filterExpired(geocoded)
  return buildResponse(filtered, 'grants', {
    revalidateSeconds: 1800,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
```

- [ ] **Step 4: Run tests**

```bash
npx jest __tests__/lib/api/grants.test.ts --no-coverage
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add lib/api/grants.ts __tests__/lib/api/grants.test.ts
git commit -m "feat: rewrite grants fetcher — 16 sources, delete GRANTS_SEED"
```

---

### Task 9: Rewrite lib/api/orgs.ts (Wikipedia + Wikidata + GitHub)

**Files:**
- Rewrite: `lib/api/orgs.ts`

- [ ] **Step 1: Write test**

Create `__tests__/lib/api/orgs.test.ts`:

```typescript
import { fetchOrgs } from '@/lib/api/orgs'

jest.mock('@/lib/api/pipeline', () => ({
  aggregateSources: jest.fn().mockResolvedValue({
    data: [{
      id: '1', name: 'Society of Women Engineers', category: 'orgs',
      lat: 41.88, lng: -87.63, location: 'Chicago, USA',
      url: 'https://swe.org', sourceName: 'Wikipedia',
    }],
    sourceNames: ['fetchWikipediaWomenSTEM'],
    sourcesAttempted: 5,
    sourcesSucceeded: 3,
  }),
  deduplicateResources: jest.fn((r) => r),
}))

jest.mock('@/lib/geocoding', () => ({ geocodeAll: jest.fn((r) => Promise.resolve(r)) }))
jest.mock('@/lib/api/filterExpired', () => ({ filterExpired: jest.fn((r) => r) }))

describe('fetchOrgs', () => {
  test('returns ResourcesResponse shape', async () => {
    const result = await fetchOrgs()
    expect(result.category).toBe('orgs')
    expect(result.revalidateSeconds).toBe(21600)
    expect(Array.isArray(result.data)).toBe(true)
  })
})
```

- [ ] **Step 2: Run to see fail**

```bash
npx jest __tests__/lib/api/orgs.test.ts --no-coverage
```

Expected: FAIL.

- [ ] **Step 3: Rewrite `lib/api/orgs.ts`**

```typescript
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

async function fetchWikipediaWomenSTEM(): Promise<Resource[]> {
  const url = 'https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Women_in_STEM&cmlimit=50&format=json&origin=*'
  const res = await fetchWithTimeout(url, { headers: { 'User-Agent': 'stemspark/1.0' } })
  const json = await res.json()
  const pages: Array<{ title: string }> = json.query?.categorymembers ?? []

  const resources: Resource[] = []
  for (const page of pages.slice(0, 20)) {  // limit to avoid rate issues
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
    const coords = b.coords?.value // "Point(lng lat)"
    let lat = 0, lng = 0
    if (coords) {
      const m = coords.match(/Point\(([^ ]+) ([^ )]+)\)/)
      if (m) { lng = parseFloat(m[1]); lat = parseFloat(m[2]) }
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
  const geocoded = await geocodeAll(deduped)
  const filtered = filterExpired(geocoded)
  return buildResponse(filtered, 'orgs', {
    revalidateSeconds: 21600,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
```

- [ ] **Step 4: Run tests**

```bash
npx jest __tests__/lib/api/orgs.test.ts --no-coverage
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add lib/api/orgs.ts __tests__/lib/api/orgs.test.ts
git commit -m "feat: rewrite orgs fetcher — Wikipedia + Wikidata + GitHub, delete ORG_SEED"
```

---

### Task 10: Rewrite lib/api/mentors.ts

**Files:**
- Rewrite: `lib/api/mentors.ts`
- Modify: `__tests__/lib/api/mentors.test.ts`
- Delete: `data/mentors-seed.json`

- [ ] **Step 1: Write test**

Replace `__tests__/lib/api/mentors.test.ts`:

```typescript
import { fetchMentors } from '@/lib/api/mentors'

jest.mock('@/lib/api/pipeline', () => ({
  aggregateSources: jest.fn().mockResolvedValue({
    data: [{
      id: '1', name: 'Jane Doe', category: 'mentors',
      lat: 37.77, lng: -122.42, location: 'San Francisco, USA',
      url: 'https://github.com/janedoe', bio: 'mentor for women in STEM',
      sourceName: 'GitHub',
    }],
    sourceNames: ['fetchGitHubMentors1'],
    sourcesAttempted: 7,
    sourcesSucceeded: 4,
  }),
  deduplicateResources: jest.fn((r) => r),
}))

jest.mock('@/lib/geocoding', () => ({ geocodeAll: jest.fn((r) => Promise.resolve(r)) }))
jest.mock('@/lib/api/filterExpired', () => ({ filterExpired: jest.fn((r) => r) }))

describe('fetchMentors', () => {
  test('returns ResourcesResponse shape', async () => {
    const result = await fetchMentors()
    expect(result.category).toBe('mentors')
    expect(result.revalidateSeconds).toBe(21600)
    expect(Array.isArray(result.data)).toBe(true)
  })
})
```

- [ ] **Step 2: Run to see fail**

```bash
npx jest __tests__/lib/api/mentors.test.ts --no-coverage
```

Expected: FAIL.

- [ ] **Step 3: Rewrite `lib/api/mentors.ts`**

```typescript
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
          field: p.company ?? undefined,
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
  const articles: Array<{ user: { username: string; name: string; bio_html: string; github_username: string } }> = await res.json()
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
    abstract: string; website: string; twitter: string;
  }> = Array.isArray(json) ? json : json.profiles ?? []
  return profiles.slice(0, 50).map((p) => ({
    id: randomUUID(),
    name: p.fullname ?? 'Speaker',
    category: 'mentors' as const,
    lat: 0, lng: 0,
    location: [p.city, p.country].filter(Boolean).join(', ') || 'Global',
    url: p.website ?? `https://speakerinnen.org/en/profiles`,
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
```

- [ ] **Step 4: Delete mentors-seed.json**

```bash
git rm data/mentors-seed.json
```

Expected: file deleted from repository.

- [ ] **Step 5: Run tests**

```bash
npx jest __tests__/lib/api/mentors.test.ts --no-coverage
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add lib/api/mentors.ts __tests__/lib/api/mentors.test.ts
git commit -m "feat: rewrite mentors fetcher — GitHub + Dev.to + Hashnode + Speakerinnen, delete mentors-seed.json"
```

---

## Chunk 4: Routes, UI, and cleanup

### Task 11: Update all 6 route files

**Files:**
- Modify: `app/api/resources/events/route.ts`
- Modify: `app/api/resources/jobs/route.ts`
- Modify: `app/api/resources/hackathons/route.ts`
- Modify: `app/api/resources/grants/route.ts`
- Modify: `app/api/resources/orgs/route.ts`
- Modify: `app/api/resources/mentors/route.ts`

Each route changes from `buildResponse(await fetchX(), 'x')` to `NextResponse.json(await fetchX())`.

- [ ] **Step 1: Update `app/api/resources/events/route.ts`**

```typescript
import { NextResponse } from 'next/server'
import { fetchEvents } from '@/lib/api/events'

export const revalidate = 300

export async function GET() {
  try {
    return NextResponse.json(await fetchEvents())
  } catch (error) {
    console.error('[events route]', error)
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}
```

- [ ] **Step 2: Update `app/api/resources/jobs/route.ts`**

```typescript
import { NextResponse } from 'next/server'
import { fetchJobs } from '@/lib/api/jobs'

export const revalidate = 300

export async function GET() {
  try {
    return NextResponse.json(await fetchJobs())
  } catch (error) {
    console.error('[jobs route]', error)
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 })
  }
}
```

- [ ] **Step 3: Update `app/api/resources/hackathons/route.ts`**

```typescript
import { NextResponse } from 'next/server'
import { fetchHackathons } from '@/lib/api/hackathons'

export const revalidate = 300

export async function GET() {
  try {
    return NextResponse.json(await fetchHackathons())
  } catch (error) {
    console.error('[hackathons route]', error)
    return NextResponse.json({ error: 'Failed to fetch hackathons' }, { status: 500 })
  }
}
```

- [ ] **Step 4: Update `app/api/resources/grants/route.ts`**

```typescript
import { NextResponse } from 'next/server'
import { fetchGrants } from '@/lib/api/grants'

export const revalidate = 1800

export async function GET() {
  try {
    return NextResponse.json(await fetchGrants())
  } catch (error) {
    console.error('[grants route]', error)
    return NextResponse.json({ error: 'Failed to fetch grants' }, { status: 500 })
  }
}
```

- [ ] **Step 5: Update `app/api/resources/orgs/route.ts`**

```typescript
import { NextResponse } from 'next/server'
import { fetchOrgs } from '@/lib/api/orgs'

export const revalidate = 21600

export async function GET() {
  try {
    return NextResponse.json(await fetchOrgs())
  } catch (error) {
    console.error('[orgs route]', error)
    return NextResponse.json({ error: 'Failed to fetch orgs' }, { status: 500 })
  }
}
```

- [ ] **Step 6: Update `app/api/resources/mentors/route.ts`**

```typescript
import { NextResponse } from 'next/server'
import { fetchMentors } from '@/lib/api/mentors'

export const revalidate = 21600

export async function GET() {
  try {
    return NextResponse.json(await fetchMentors())
  } catch (error) {
    console.error('[mentors route]', error)
    return NextResponse.json({ error: 'Failed to fetch mentors' }, { status: 500 })
  }
}
```

- [ ] **Step 7: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: 0 errors.

- [ ] **Step 8: Commit**

```bash
git add app/api/resources/events/route.ts app/api/resources/jobs/route.ts \
        app/api/resources/hackathons/route.ts app/api/resources/grants/route.ts \
        app/api/resources/orgs/route.ts app/api/resources/mentors/route.ts
git commit -m "feat: update all route files — new revalidate intervals, remove buildResponse wrapper"
```

---

### Task 12: Rewrite LastUpdatedBadge with freshness colors and next-refresh time

**Files:**
- Rewrite: `components/resources/LastUpdatedBadge.tsx`

- [ ] **Step 1: Rewrite the component**

```tsx
interface LastUpdatedBadgeProps {
  updatedAt: string
  revalidateSeconds: number
  sources: string[]
  sourcesAttempted: number
  sourcesSucceeded: number
}

function formatTimeAgo(isoString: string): string {
  const diff = Date.now() - new Date(isoString).getTime()
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) return 'just now'
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  return `${Math.floor(hours / 24)}d ago`
}

function formatNextRefresh(updatedAt: string, revalidateSeconds: number): string {
  const nextMs = new Date(updatedAt).getTime() + revalidateSeconds * 1000
  const diffMs = nextMs - Date.now()
  if (diffMs <= 0) return 'soon'
  const diffMin = Math.round(diffMs / 60000)
  if (diffMin < 60) return `~${diffMin}m`
  return `~${Math.round(diffMin / 60)}h`
}

function getFreshnessColor(updatedAt: string, revalidateSeconds: number): string {
  const elapsed = (Date.now() - new Date(updatedAt).getTime()) / 1000
  const ratio = elapsed / revalidateSeconds
  if (ratio < 1 / 3) return '#10b981' // green — fresh
  if (ratio < 2 / 3) return '#f59e0b' // amber — aging
  return '#ef4444'                     // red — stale
}

function formatSources(sources: string[], attempted: number, succeeded: number): string {
  if (sources.length === 0) return ''
  const visible = sources.slice(0, 4).join(', ')
  const extra = sources.length > 4 ? ` +${sources.length - 4} more` : ''
  return `Sources: ${visible}${extra}  ·  ${succeeded}/${attempted} responding`
}

export default function LastUpdatedBadge({
  updatedAt,
  revalidateSeconds,
  sources,
  sourcesAttempted,
  sourcesSucceeded,
}: LastUpdatedBadgeProps) {
  const color = getFreshnessColor(updatedAt, revalidateSeconds)
  const timeAgo = formatTimeAgo(updatedAt)
  const nextRefresh = formatNextRefresh(updatedAt, revalidateSeconds)
  const sourcesSummary = formatSources(sources, sourcesAttempted, sourcesSucceeded)

  return (
    <div className="flex flex-col gap-0.5">
      <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color }}>
        <span
          className="rounded-full"
          style={{ width: '5px', height: '5px', background: color, display: 'inline-block' }}
        />
        Updated {timeAgo} · Refreshes in {nextRefresh}
      </span>
      {sourcesSummary && (
        <span className="text-xs" style={{ color: '#9e8090' }}>
          {sourcesSummary}
        </span>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Update the call site in `components/resources/ResourceList.tsx` (line 161)**

The current call is:
```tsx
{data && <LastUpdatedBadge updatedAt={data.updatedAt} />}
```

`data` is the `ResourcesResponse` from `useSWR`. All five new fields are present on `data` after the API is updated. Replace the line with:
```tsx
{data && (
  <LastUpdatedBadge
    updatedAt={data.updatedAt}
    revalidateSeconds={data.revalidateSeconds}
    sources={data.sources}
    sourcesAttempted={data.sourcesAttempted}
    sourcesSucceeded={data.sourcesSucceeded}
  />
)}
```

This is the only call site. No other files use `LastUpdatedBadge`.

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: 0 errors.

- [ ] **Step 4: Commit**

```bash
git add components/resources/LastUpdatedBadge.tsx
git commit -m "feat: update LastUpdatedBadge — color-coded freshness, next refresh time, source count"
```

---

### Task 13: Create CoverageDisclaimer and add to CoverPage

**Files:**
- Create: `components/resources/CoverageDisclaimer.tsx`
- Modify: `components/book/pages/CoverPage.tsx`

- [ ] **Step 1: Create `components/resources/CoverageDisclaimer.tsx`**

```tsx
'use client'

import { useState } from 'react'

interface CoverageDisclaimerProps {
  lastRunAt?: string  // ISO timestamp from any ResourcesResponse.updatedAt
}

export default function CoverageDisclaimer({ lastRunAt }: CoverageDisclaimerProps) {
  const [expanded, setExpanded] = useState(false)

  const lastRun = lastRunAt
    ? new Date(lastRunAt).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })
    : 'unknown'

  return (
    <div className="text-xs" style={{ color: '#9e8090' }}>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-1 hover:opacity-80 transition-opacity"
        aria-expanded={expanded}
      >
        <span style={{ color: '#b09ee0' }}>ⓘ</span>
        About our data coverage
        <span style={{ fontSize: '10px' }}>{expanded ? '▲' : '▼'}</span>
      </button>

      {expanded && (
        <div
          className="mt-2 p-3 rounded-xl text-xs leading-relaxed"
          style={{ background: 'rgba(176,158,224,0.06)', border: '1px solid rgba(61,42,58,0.6)' }}
        >
          <p className="mb-2">
            STEM•SPARK aggregates automatically from 50+ free sources across all world regions.
            Coverage is strongest in North America, Europe, and South Asia. Local grassroots
            organizations in some regions may not yet be represented.
          </p>
          <p className="mb-2">
            Data is never manually curated — it updates automatically every 5–30 minutes
            depending on category. Last pipeline run: {lastRun}.
          </p>
          <p className="mb-2" style={{ color: '#9e8090' }}>
            Sources include: SWE, Grace Hopper, IEEE WIE, AAUW, NSF, Grants.gov, NIH,
            Marie Curie Actions, Commonwealth Scholarships, OWSD, L&apos;Oréal-UNESCO,
            ADB, IDB, TechWomen, Devpost, Arbeitnow, Remotive, GitHub, Dev.to, and 30+ more.
          </p>
          <p style={{ color: '#9e8090' }}>
            Notice a missing organization or incorrect information?{' '}
            <span style={{ color: '#d4919e' }}>Community submissions — coming soon.</span>
          </p>
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Add `CoverageDisclaimer` to `CoverPage.tsx`**

Add the import near the top of `components/book/pages/CoverPage.tsx` (with the other component imports):
```tsx
import CoverageDisclaimer from '@/components/resources/CoverageDisclaimer'
```

Find the closing `</motion.div>` tag on line ~162 that ends the category pills `motion.div` (it comes right before the `{/* Newsletter */}` comment). Insert a new `<div>` wrapper immediately after that closing tag:

```tsx
        </motion.div>

        {/* Coverage disclaimer */}
        <div className="mt-4">
          <CoverageDisclaimer />
        </div>

        {/* Newsletter */}
```

The exact surrounding context to match (use this as your Edit anchor):
```tsx
          })}
        </motion.div>

        {/* Newsletter */}
```

Replace it with:
```tsx
          })}
        </motion.div>

        {/* Coverage disclaimer */}
        <div className="mt-4">
          <CoverageDisclaimer />
        </div>

        {/* Newsletter */}
```

- [ ] **Step 3: Verify build**

```bash
npx tsc --noEmit
```

Expected: 0 errors.

- [ ] **Step 4: Commit**

```bash
git add components/resources/CoverageDisclaimer.tsx components/book/pages/CoverPage.tsx
git commit -m "feat: add CoverageDisclaimer component with collapsible global coverage info"
```

---

### Task 14: Full build verification and environment variable check

**Files:** No code changes.

- [ ] **Step 1: Run all tests**

```bash
npx jest --no-coverage
```

Expected: all test suites PASS. Zero failures.

- [ ] **Step 2: TypeScript full check**

```bash
npx tsc --noEmit
```

Expected: 0 errors.

- [ ] **Step 3: Dev build check**

```bash
npm run build
```

Expected: build completes with no errors. Note: API routes will fail at runtime without `GITHUB_TOKEN` — this is expected behavior, not a build error. The pipeline degrades gracefully.

- [ ] **Step 4: Verify GITHUB_TOKEN setup instructions**

Check `.env.local` exists (not committed). If it doesn't exist:

```bash
echo "GITHUB_TOKEN=" >> .env.local
```

Add `.env.local` to `.gitignore` if not already present:

```bash
grep -q ".env.local" .gitignore || echo ".env.local" >> .gitignore
```

Get a free personal access token from: **github.com → Settings → Developer Settings → Personal Access Tokens (classic) → Generate new token** — no scopes needed. Paste it after `GITHUB_TOKEN=` in `.env.local`.

Also add `GITHUB_TOKEN` to Vercel project environment variables.

- [ ] **Step 5: Final commit**

```bash
git add .gitignore
git commit -m "chore: ensure .env.local in .gitignore for GITHUB_TOKEN"
```

---

## Summary

| Chunk | Tasks | What it builds |
|---|---|---|
| Chunk 1 | 1–4 | Types, `pipeline.ts`, `buildResponse` update, `geocodeAll` |
| Chunk 2 | 5–7 | `events.ts` (18 sources), `jobs.ts` (5), `hackathons.ts` (5) |
| Chunk 3 | 8–10 | `grants.ts` (16), `orgs.ts` (Wikipedia+Wikidata+GitHub), `mentors.ts` |
| Chunk 4 | 11–14 | Route revalidate + wrapper removal, `LastUpdatedBadge`, `CoverageDisclaimer` |

After completing all chunks: zero hardcoded seed data, 50+ live sources, freshness UI on every category, global coverage disclaimer on cover page.
