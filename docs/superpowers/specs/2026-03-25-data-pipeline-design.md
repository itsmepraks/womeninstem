# STEM•SPARK Global Data Pipeline — Design Spec
**Date:** 2026-03-25
**Status:** Approved
**Goal:** Replace all hardcoded seed data with a fully automated, self-updating global pipeline drawing from 50+ free sources across every world region. Zero human intervention required. Data freshness visible to users at all times.

---

## 1. Principles

- **No hardcoded resource data anywhere** — `GRANTS_SEED`, `ORG_SEED`, `mentors-seed.json` are deleted
- **All sources are free** — no paid API keys, no subscriptions
- **All sources run in parallel** — `Promise.allSettled` collects whatever responds within 8 seconds
- **Deduplication by URL fingerprint** — same resource from two sources appears once
- **Graceful degradation** — if all sources for a category fail, return `[]` and log; never crash
- **Honest UI** — every category shows data freshness, source list, and a global coverage disclaimer

---

## 2. Complete Source Map

### 2.1 Events — revalidate: 300s (5 min)

| Source | URL | Region |
|---|---|---|
| Society of Women Engineers | `https://swe.org/feed/` | USA |
| Grace Hopper Conference | `https://ghc.anitab.org/feed/` | USA/Global |
| AnitaB.org | `https://anitab.org/feed/` | USA/Global |
| IEEE Women in Engineering | `https://wie.ieee.org/feed/` | Global |
| NCWIT | `https://ncwit.org/feed/` | USA |
| ACM-W | `https://women.acm.org/feed/` | Global |
| AWIS | `https://www.awis.org/feed/` | USA/Global |
| 500 Women Scientists | `https://500womenscientists.org/feed/` | USA/Global |
| Stemettes | `https://stemettes.org/feed/` | UK/Europe |
| Girls Who Code | `https://girlswhocode.com/feed/` | USA |
| Lesbians Who Tech | `https://lesbianswhotech.org/feed/` | USA/Global |
| Women in AI | `https://www.womeninai.co/feed/` | Global |
| Django Girls | `https://djangogirls.org/en/feed/atom/` | Global |
| Rails Girls | `https://railsgirls.com/atom.xml` | Global |
| PyLadies | `https://pyladies.com/feed/` | Global |
| OWSD | `https://owsd.net/feed/` | Africa/Asia/LatAm |
| Women Techmakers | `https://developers.google.com/community/experts/feed` | Global |
| TechWomen | `https://www.techwomen.org/feed/` | MENA/Africa/Asia |

**Note:** Meetup removed public RSS search feeds in 2019 — excluded. All 18 sources above are verified free RSS/Atom feeds.

**Processing:** XML/RSS parse → geocode location string via Nominatim queue (see §3.2) → filter expired

**XML parsing:** Use `fast-xml-parser` (zero-dependency, edge-compatible). Add to `package.json`. Avoids brittle regex on 18 concurrent feeds.

---

### 2.2 Jobs — revalidate: 300s (5 min)

| Source | URL/API | Region |
|---|---|---|
| Arbeitnow | `https://www.arbeitnow.com/api/job-board-api` | Europe/Global |
| Remotive.io | `https://remotive.io/api/remote-jobs?limit=50` | Global remote |
| Jobicy | `https://jobicy.com/api/v2/remote-jobs?count=50` | Global remote |
| Himalayas | `https://himalayas.app/jobs/api?limit=50` | Global remote |
| We Work Remotely | `https://weworkremotely.com/remote-jobs.rss` (RSS) | Global remote |

**Note:** The Muse API (`themuse.com/api/public/jobs`) requires an API key even for free-tier access — excluded. All 5 sources above are confirmed no-auth.

**Processing:** Normalize job title/description → filter for STEM keywords → deduplicate by URL → filter non-English where possible

**STEM filter keywords:** `engineer, developer, scientist, researcher, data, analyst, biotech, pharma, clinical, mathematician, physicist, chemist, biologist, architect, designer, product, ai, ml, robotics`

---

### 2.3 Hackathons — revalidate: 300s (5 min)

| Source | URL/API | Region |
|---|---|---|
| Devpost | `https://devpost.com/hackathons.rss` | Global |
| ChallengeRocket | `https://challengerocket.com/rss.xml` | Europe/Global |
| MLH (Major League Hacking) | `https://mlh.io/seasons/2026/events` — **NOTE: MLH events page is client-rendered (React SPA). A plain `fetch` returns skeleton HTML with no JSON-LD.** Use the MLH public API instead: `https://mlh.io/api/v2/events?season=${year}&format=json` (no auth required, returns structured JSON). If this endpoint returns 404, fall back to Devpost RSS only and drop MLH. Season year parameterized with `new Date().getFullYear()`. | USA/Europe/Global |
| Devfolio | `https://devfolio.co/hackathons.rss` | India/Global |
| Unstop | `https://unstop.com/api/public/competition/listing?per_page=30` | India/Asia |

**Processing:** Parse → extract prize, team size, deadline → filter expired → deduplicate

---

### 2.4 Grants & Scholarships — revalidate: 1800s (30 min)

| Source | URL/API | Region |
|---|---|---|
| AAUW Fellowships | `https://www.aauw.org/feed/` (RSS, filter fellowship/grant posts) | USA/Global |
| NSF Awards API | `https://api.nsf.gov/services/v1/awards.json?keyword=women+STEM&printFields=id,title,abstractText,startDate,expDate,piFirstName,piLastName,awardeeName,fundProgramName` | USA |
| Grants.gov API | POST `https://api.grants.gov/v2/search` with body `{"keyword":"women STEM","oppStatuses":"forecasted,posted"}` | USA |
| NIH Reporter API | POST `https://api.reporter.nih.gov/v2/projects/search` with `{"criteria":{"advanced_text_search":{"operator":"and","search_field":"all","search_text":"women STEM"}}}` | USA |
| Marie Curie Actions | `https://ec.europa.eu/research/mariecurieactions/feed` | Europe/Global |
| Erasmus+ | `https://erasmus-plus.ec.europa.eu/news-and-events/feed` | Europe/Global |
| Commonwealth Scholarships | `https://cscuk.fcdo.gov.uk/feed/` | 50+ countries |
| Gates Foundation | `https://www.gatesfoundation.org/feed/` | Global |
| L'Oréal-UNESCO | `https://www.forwomeninscience.com/en/feed` | Global |
| OWSD Fellowships | `https://owsd.net/feed/` (filter fellowship posts) | Africa/Asia/LatAm |
| ADB Scholarships | `https://www.adb.org/news/rss` (filter scholarship posts) | Asia/Pacific |
| IDB Scholarships | `https://www.iadb.org/en/news-and-events/rss.xml` — IDB's primary news feed; filter posts containing "scholarship", "fellowship", or "women" | Latin America |
| OAS Scholarships | `https://www.oas.org/en/media_center/press_releases/rss.asp` — OAS press release feed; filter for scholarship/fellowship keywords | Americas |
| DAAD Germany | `https://www.daad.de/en/feed/` (filter women/scholarships) | Europe/Global |
| African Development Bank | `https://www.afdb.org/en/feed/` (filter scholarships) | Africa |
| Mastercard Foundation | `https://mastercardfdn.org/feed/` | Africa/Global |

**Processing:** Each API has a custom adapter → normalize to `Resource` schema → deduplicate by URL → filter expired dates

---

### 2.5 Organizations — revalidate: 21600s (6 hr)

| Source | URL/API | Notes |
|---|---|---|
| Wikipedia Category API | `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Women_in_STEM&cmlimit=100` | Returns page titles → fetch summary for each |
| Wikipedia Category API | `Category:Organizations_for_women_in_science` | Second category pass |
| Wikidata SPARQL | `https://query.wikidata.org/sparql` | Query: orgs with `field of work = STEM` + `target group = women` |
| GitHub Orgs API | `https://api.github.com/search/repositories?q=women+STEM+org:*&type=org` | Tech orgs |
| GitHub Orgs API | `https://api.github.com/search/users?q=women+tech+type:org+in:bio` | Org accounts |

**Processing for Wikipedia:** Page title → `https://en.wikipedia.org/api/rest_v1/page/summary/{title}` → extract description, extract location from text → geocode

**Processing for Wikidata:** SPARQL returns structured JSON with labels, descriptions, coordinates, official websites → map to Resource schema directly

**Requires:** `GITHUB_TOKEN` env var (free personal access token — no scopes needed for public search)

---

### 2.6 Mentors — revalidate: 21600s (6 hr)

| Source | URL/API | Notes |
|---|---|---|
| GitHub Users — query 1 | `https://api.github.com/search/users?q=women+mentor+STEM+in:bio&per_page=50` | Bio search |
| GitHub Users — query 2 | `https://api.github.com/search/users?q="she/her"+engineer+mentor+in:bio&per_page=50` | Pronouns+role |
| GitHub Users — query 3 | `https://api.github.com/search/users?q="women in tech"+mentor+in:bio&per_page=50` | Community keyword |
| Dev.to API | `https://dev.to/api/articles?tag=womenintech&per_page=50` | Active writers |
| Dev.to API | `https://dev.to/api/articles?tag=career&per_page=50&username=` | Filter for women authors |
| Hashnode | GraphQL: `https://api.hashnode.com` — query posts tagged `women-in-tech` | Active bloggers |
| Speakerinnen.org | `https://speakerinnen.org/api/v1/profiles?locale=en` | Women speakers/mentors |

**Processing for GitHub:** User login → fetch `https://api.github.com/users/{login}` for bio, location, blog, company → filter for mentor signals in bio → geocode location string

**Processing for Dev.to/Hashnode:** Article author → fetch author profile → check bio for mentor keywords → deduplicate by profile URL

**Mentor quality filter keywords (bio must contain at least one):** `mentor, mentoring, coach, coaching, advisory, open to connect, DM me, happy to help, reach out`

**Requires:** `GITHUB_TOKEN` env var (same token as orgs)

---

## 3. Technical Architecture

### 3.1 New shared utility: `lib/api/pipeline.ts`

Single file replacing ad-hoc fetching patterns. Exports:

```typescript
interface AggregateResult<T> {
  data: T[]
  sourceNames: string[]   // fetcher.name for every fetcher in the input array
  sourcesAttempted: number // = fetchers.length
  sourcesSucceeded: number // fetchers that resolved with at least one result
}

// Fire multiple source fetchers in parallel, collect all results, never throw.
// Each fetcher function must be a named function (not an arrow) so .name is available.
async function aggregateSources<T>(
  fetchers: Array<() => Promise<T[]>>,
  timeoutMs = 8000
): Promise<AggregateResult<T>>

// Normalize a URL for deduplication (strip tracking params, www, trailing slash)
function fingerprintUrl(url: string): string

// Deduplicate Resource[] by URL fingerprint, keeping the richest record
function deduplicateResources(resources: Resource[]): Resource[]

// Merge two Resource records (keep longer description, union tags)
function mergeResources(a: Resource, b: Resource): Resource
```

### 3.2 Geocoding strategy (serverless-safe)

**Problem:** In-memory queues don't work across concurrent serverless invocations. Two simultaneous revalidations would each fire Nominatim calls independently, violating the 1 req/sec policy.

**Solution:** Cap geocoding calls per pipeline run. Each `fetchCategory()` call geocodes at most **15 new addresses per run**. Addresses beyond the cap receive `lat=0, lng=0` (globe hides these). On the next revalidation cycle, more addresses get geocoded.

```typescript
// lib/geocoding.ts — updated exports:

// Per-invocation in-memory cache (fast lookups within one pipeline run)
const cache = new Map<string, GeocodingResult>()

// Built-in country centroid fallback — 60 countries pre-seeded
// Used when: geocoding fails OR per-run cap is reached
const COUNTRY_CENTROIDS: Record<string, { lat: number; lng: number }>

// Low-level: Geocode a single address with cap enforcement.
// callCountRef is a shared counter object allocated by the caller (geocodeAll).
// maxPerRun: max new Nominatim calls this invocation (default: 15)
// Enforces 1100ms delay between calls within the invocation.
// NOT for direct use by source adapters — use geocodeAll instead.
async function geocodeAddress(
  address: string,
  callCountRef: { count: number },
  maxPerRun = 15
): Promise<GeocodingResult | null>

// High-level: Geocode a batch of resources, respecting cap.
// Allocates callCountRef internally — callers never manage it.
// Returns resources with lat/lng filled in (centroid or 0,0 for overflow).
// This is the ONLY geocoding entry point source adapters should use.
async function geocodeAll(
  resources: Resource[],
  maxPerRun = 15
): Promise<Resource[]>
```

**RULE: Adapters must never call `geocodeAddress` directly.** All geocoding must go through the post-aggregation `geocodeAll` call in the category fetcher (after `aggregateSources` returns). Calling `geocodeAddress` inside an individual adapter would fire Nominatim calls in parallel across all 18 concurrent adapters, violating the 1 req/sec policy.

**`geocodeAll` implementation note:** Allocates `const callCountRef = { count: 0 }` and passes it to each `geocodeAddress` call. Because `geocodeAll` is called once per category (after aggregation), there is only one `callCountRef` per serverless invocation.

**Concurrency model:** In Next.js ISR, each route (`/api/resources/events`, `/api/resources/jobs`, etc.) is a **separate serverless function invocation** with its own isolated memory. When Vercel revalidates multiple routes simultaneously, each runs independently — they do not share a `callCountRef`. Therefore the 15-call cap is per-route-invocation. In the worst case (all 6 routes revalidating simultaneously), up to 90 Nominatim calls could fire across the cluster within the same few seconds. This is acceptable: each invocation enforces its own 1100ms delay (15 × 1.1s ≈ 16.5s per route), and Nominatim's policy is per-IP per-second. Vercel functions may run from the same IP cluster, but the 15-call cap keeps any single invocation well within limits. If Nominatim rate-limit errors are observed in production logs, reduce `maxPerRun` to 8.

**Country centroid extraction:** Parse last word/phrase of location string against `COUNTRY_CENTROIDS` keys. e.g. "Nairobi, Kenya" → "Kenya" → `{ lat: -0.023, lng: 37.906 }`

**OWSD duplicate across categories:** `owsd.net/feed/` appears in both Events and Grants source lists intentionally — each adapter filters posts by content type (event vs. fellowship announcement). Deduplication by URL fingerprint handles any overlap within a single category.

### 3.3 Source adapter pattern

Each source in each category gets a typed adapter function:

```typescript
// Example for one events source (named function — .name used by aggregateSources):
async function fetchSWEEvents(): Promise<Resource[]> {
  const xml = await fetchWithTimeout('https://swe.org/feed/', {}, 8000)
  // parse, normalize, return Resource[]
}

// Main category fetcher — returns ResourcesResponse (canonical return type for all fetchers):
export async function fetchEvents(): Promise<ResourcesResponse> {
  const agg = await aggregateSources([
    fetchSWEEvents,
    fetchGHCEvents,
    fetchAnitaBEvents,
    // ... all 19 sources
  ])
  const deduped = deduplicateResources(agg.data)    // note: agg.data, not agg
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

### 3.4 ISR intervals

**Current state:** Route files use these revalidate values today. Implementers **must** update the four routes that need to change — without this change the pipeline design provides no freshness benefit.

| Category | Route file | Current value | New value | Change? |
|---|---|---|---|---|
| Events | `app/api/resources/events/route.ts` | `21600` | `300` | ✅ Change |
| Jobs | `app/api/resources/jobs/route.ts` | `21600` | `300` | ✅ Change |
| Hackathons | `app/api/resources/hackathons/route.ts` | `21600` | `300` | ✅ Change |
| Grants | `app/api/resources/grants/route.ts` | `21600` | `1800` | ✅ Change |
| Orgs | `app/api/resources/orgs/route.ts` | `86400` | `21600` | ✅ Change |
| Mentors | `app/api/resources/mentors/route.ts` | `86400` | `21600` | ✅ Change |

### 3.5 Environment variables

| Variable | Purpose | Where to get |
|---|---|---|
| `GITHUB_TOKEN` | GitHub API — raises limit from 60 to 5000 req/hr | github.com → Settings → Developer Settings → Personal Access Tokens (classic) → no scopes needed |

Add to Vercel environment variables (free). Add `GITHUB_TOKEN=` to `.env.local` for local dev. Add `.env.local` to `.gitignore` (already should be).

---

## 4. Data Freshness & Disclaimer UI

### 4.1 Enhanced `LastUpdatedBadge` component

Replace the current simple "Updated X ago" with:

```
● Updated 2 min ago  ·  Refreshes every 5 min
  Sources: SWE, GHC, AnitaB, IEEE WIE +15 more
```

Dot color:
- **Green** — updated within first third of interval (fresh)
- **Amber** — updated within second third (aging)
- **Red** — updated over two-thirds ago (stale — sources likely failing)

"Next refresh" calculation: `new Date(updatedAt).getTime() + (revalidateSeconds * 1000)`

Show "in ~X min" if < 60 min remaining, "in ~X hr" otherwise.

### 4.2 API response includes source metadata

Extend `ResourcesResponse` type (`types/resource.ts`). The three new fields are **required** — every `buildResponse` call must supply them. They must never be undefined in a successful response:

```typescript
interface ResourcesResponse {
  data: Resource[]
  category: ResourceCategory
  updatedAt: string          // ISO timestamp (existing — required)
  revalidateSeconds: number  // NEW required — so UI can calculate next refresh
  sources: string[]          // NEW required — list of source names that responded
  sourcesAttempted: number   // NEW required — total sources tried
  sourcesSucceeded: number   // NEW required — how many responded OK
}
```

Updated `buildResponse` signature in `lib/api/helpers.ts`:

```typescript
// Before (current):
function buildResponse(
  data: Resource[],
  category: ResourceCategory
): ResourcesResponse

// After (new):
function buildResponse(
  data: Resource[],
  category: ResourceCategory,
  meta: {
    revalidateSeconds: number
    sources: string[]          // names of all sources attempted (= AggregateResult.sourceNames)
    sourcesAttempted: number   // = AggregateResult.sourcesAttempted
    sourcesSucceeded: number   // = AggregateResult.sourcesSucceeded
  }
): ResourcesResponse
```

Each category fetcher spreads `AggregateResult` directly into `meta`. All four fields map 1:1 from `AggregateResult`:

```typescript
export async function fetchEvents(): Promise<ResourcesResponse> {
  const agg = await aggregateSources([fetchSWEEvents, fetchGHCEvents, ...])
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

### 4.3 Global Coverage Disclaimer

New component: `components/resources/CoverageDisclaimer.tsx`

Displayed:
1. On the CoverPage as a small footnote below the category pills
2. Collapsed by default ("ⓘ About our data coverage") — expands on click

Content:
```
ⓘ About our data coverage

STEM•SPARK aggregates automatically from 50+ free sources across all
world regions. Coverage is strongest in North America, Europe, and
South Asia. Local grassroots organizations in some regions may not
yet be represented.

Data is never manually curated — it updates automatically every
5–30 minutes depending on category. Last pipeline run: [timestamp].

Sources include: SWE, Grace Hopper, IEEE WIE, AAUW, NSF, Grants.gov,
NSF, NIH, Marie Curie Actions, Commonwealth Scholarships, OWSD,
L'Oréal-UNESCO, ADB, IDB, TechWomen, Devpost, Arbeitnow, Remotive,
GitHub, Dev.to, and 30+ more.

Notice a missing organization or incorrect information?
Community submissions — coming soon.
```

### 4.4 Per-resource source attribution

Each `Resource` gets an optional `sourceName: string` field. Displayed as a tiny pill on the card bottom-left:

```
[Devpost]  [Grace Hopper Conference · Apr 2026]
```

Helps users understand provenance and builds trust.

---

## 5. Files Changed

### New files
| File | Purpose |
|---|---|
| `lib/api/pipeline.ts` | `aggregateSources`, `fingerprintUrl`, `deduplicateResources`, `mergeResources` |
| `components/resources/CoverageDisclaimer.tsx` | Global coverage disclaimer, collapsible |

### Replaced files (full rewrite)

**Critical migration notes for all category fetchers (`events.ts`, `jobs.ts`, `hackathons.ts`, `grants.ts`, `orgs.ts`, `mentors.ts`):**
- Return type changes from `Promise<Resource[]>` → **`Promise<ResourcesResponse>`** — this is required for the route files to work without calling `buildResponse` themselves
- Remove any direct `geocodeAddress` import and call — all geocoding must go through `geocodeAll(resources)` called once after `aggregateSources`. See §3.2 rule.

| File | Change |
|---|---|
| `lib/api/events.ts` | Full rewrite: 3-source RSS → 19-source parallel aggregator. Return type: `Promise<Resource[]>` → `Promise<ResourcesResponse>`. Remove direct `geocodeAddress` call. |
| `lib/api/jobs.ts` | Full rewrite: 1-source → 6-source parallel aggregator. Return type: `Promise<Resource[]>` → `Promise<ResourcesResponse>`. |
| `lib/api/hackathons.ts` | Full rewrite: 1-source → 5-source parallel aggregator. Return type: `Promise<Resource[]>` → `Promise<ResourcesResponse>`. |
| `lib/api/grants.ts` | Full rewrite: `GRANTS_SEED` removed → 16-source aggregator (RSS + REST APIs). Return type: `Promise<Resource[]>` → `Promise<ResourcesResponse>`. |
| `lib/api/orgs.ts` | Full rewrite: `ORG_SEED` removed → Wikipedia + Wikidata + GitHub aggregator. Return type: `Promise<Resource[]>` → `Promise<ResourcesResponse>`. |
| `lib/api/mentors.ts` | Full rewrite: seed JSON removed → GitHub + Dev.to + Hashnode + Speakerinnen. Return type: `Promise<Resource[]>` → `Promise<ResourcesResponse>`. |
| `lib/geocoding.ts` | Add per-run cap + country centroid fallback. Export `geocodeAll` as primary entry point; keep `geocodeAddress` as internal. |
| `lib/api/helpers.ts` | Update `buildResponse` signature to accept `meta` object with `revalidateSeconds`, `sources`, `sourcesAttempted`, `sourcesSucceeded`. |

### Modified files
| File | Change |
|---|---|
| `package.json` | Add `fast-xml-parser` dependency (`npm install fast-xml-parser`) |
| `app/api/resources/events/route.ts` | Change `revalidate = 300`; **remove `buildResponse` wrapper** — route now returns `NextResponse.json(await fetchEvents())` directly, since `fetchEvents()` returns `ResourcesResponse` |
| `app/api/resources/jobs/route.ts` | Same pattern — `revalidate = 300`; `NextResponse.json(await fetchJobs())` |
| `app/api/resources/hackathons/route.ts` | Same pattern — `revalidate = 300`; `NextResponse.json(await fetchHackathons())` |
| `app/api/resources/grants/route.ts` | Same pattern — `revalidate = 1800`; `NextResponse.json(await fetchGrants())` |
| `app/api/resources/orgs/route.ts` | Same pattern — `revalidate = 21600`; `NextResponse.json(await fetchOrgs())` |
| `app/api/resources/mentors/route.ts` | Same pattern — `revalidate = 21600`; `NextResponse.json(await fetchMentors())` |

**Route migration pattern** — every route changes from:
```typescript
// Before:
export const revalidate = 21600
export async function GET() {
  const data = await fetchEvents()             // returns Resource[]
  return NextResponse.json(buildResponse(data, 'events'))
}

// After:
export const revalidate = 300
export async function GET() {
  return NextResponse.json(await fetchEvents()) // fetchEvents() returns ResourcesResponse
}
```
| `types/resource.ts` | Add `sourceName?: string` to `Resource`; add new fields to `ResourcesResponse` |
| `components/resources/LastUpdatedBadge.tsx` | Show next refresh time + source count + color-coded dot |
| `components/book/pages/CoverPage.tsx` | Add `CoverageDisclaimer` below category pills |

### Unchanged files (explicitly confirmed — no modifications needed)
| File | Notes |
|---|---|
| `lib/api/filterExpired.ts` | Signature and logic unchanged — filters resources whose deadline/date is in the past. All category fetchers continue to call it as-is after geocoding. |

### Deleted files
| File | Reason |
|---|---|
| `data/mentors-seed.json` | Replaced by live GitHub/Dev.to/Hashnode/Speakerinnen fetching |

### Cleared (seed arrays removed, real fetching added)
| File | What's removed |
|---|---|
| `lib/api/grants.ts` | `GRANTS_SEED` constant deleted |
| `lib/api/orgs.ts` | `ORG_SEED` constant deleted |

---

## 6. Error Handling & Resilience

- `Promise.allSettled` — partial failures never crash the pipeline
- Per-source 8s timeout via `fetchWithTimeout` (already exists in `lib/api/helpers.ts`)
- Minimum viable response: return whatever sources responded, even if it's just 1 of 19
- Geocoding failure → use country centroid if country is known, else lat=0 lng=0 (globe hides (0,0) dots)
- API shape changes → each adapter has its own try/catch; bad responses return `[]`
- Console warnings (not errors) for failed sources — visible in Vercel function logs

---

## 7. What This Achieves

| Metric | Before | After |
|---|---|---|
| Hardcoded resources | Grants (17), Orgs (25), Mentors (14) | 0 |
| Live data sources | 5 | 50+ |
| Update frequency | 6h (all categories) | 5 min (events/jobs/hackathons), 30 min (grants), 6 hr (orgs/mentors) |
| Global regions covered | Primarily USA | All major world regions |
| Data transparency | "Updated X ago" | Full source list, freshness indicator, coverage disclaimer |
| Resilience | Single source failure = empty category | N-1 redundancy per category |
