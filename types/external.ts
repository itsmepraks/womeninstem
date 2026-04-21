// types/external.ts — shapes for third-party API responses.
//
// Each interface models *just* the fields we consume, plus the nullability we
// observe in practice. Fields are all optional so the types compose with
// `await res.json()` (which returns `unknown`-ish) without forcing runtime
// validation — code sites coerce with `String(x ?? '')` / `Array.isArray(x)`.

/**
 * fast-xml-parser (with cdataPropName: '__cdata') produces either a plain
 * string for a text node or an object like { __cdata: 'value' } for CDATA
 * wrapped text. Some feeds also emit both (an object with both '#text' and
 * '__cdata'). Callers should pass the raw field into `readXmlText`.
 */
export type XmlTextNode =
  | string
  | { __cdata?: string; '#text'?: string; [k: string]: unknown }
  | undefined
  | null

/**
 * Coerces an RSS/Atom text field (which may be a plain string or a CDATA
 * wrapper object) to a plain string. Falls back to '' for unexpected shapes.
 */
export function readXmlText(node: unknown): string {
  if (node == null) return ''
  if (typeof node === 'string') return node
  if (typeof node === 'object') {
    const n = node as { __cdata?: unknown; '#text'?: unknown }
    if (typeof n.__cdata === 'string') return n.__cdata
    if (typeof n['#text'] === 'string') return n['#text']
  }
  return ''
}

/**
 * Shape of an RSS <item> or Atom <entry> as produced by fast-xml-parser.
 * All fields are optional because different feeds populate different subsets.
 */
export interface RssItem {
  title?: XmlTextNode
  link?: XmlTextNode
  guid?: XmlTextNode
  description?: XmlTextNode
  summary?: XmlTextNode
  pubDate?: XmlTextNode
  updated?: XmlTextNode
}

// ─── Job boards ─────────────────────────────────────────────────────────────

export interface ArbeitnowJob {
  title?: string
  location?: string
  url?: string
  description?: string
  created_at?: string | number
  tags?: string[]
  company_name?: string
}

export interface ArbeitnowResponse {
  data?: ArbeitnowJob[]
}

export interface RemotiveJob {
  title?: string
  candidate_required_location?: string
  url?: string
  description?: string
  publication_date?: string
  company_name?: string
}

export interface RemotiveResponse {
  jobs?: RemotiveJob[]
}

export interface JobicyJob {
  jobTitle?: string
  jobGeo?: string
  url?: string
  jobExcerpt?: string
  pubDate?: string
  companyName?: string
}

export interface JobicyResponse {
  jobs?: JobicyJob[]
}

export interface HimalayasJob {
  title?: string
  location?: string
  applicationLink?: string
  url?: string
  description?: string
  datePosted?: string
  companyName?: string
}

export interface HimalayasResponse {
  jobs?: HimalayasJob[]
}

// ─── Grants ─────────────────────────────────────────────────────────────────

export interface NSFAward {
  id?: string
  title?: string
  abstractText?: string
  startDate?: string
  expDate?: string
  awardeeName?: string
  fundProgramName?: string
}

export interface NSFResponse {
  response?: {
    award?: NSFAward[]
  }
}

export interface GrantsGovOpportunity {
  id?: string | number
  opportunityTitle?: string
  synopsis?: string
  closeDate?: string
}

export interface GrantsGovResponse {
  opportunities?: GrantsGovOpportunity[]
}

export interface NIHProject {
  appl_id?: string | number
  project_title?: string
  abstract_text?: string
  project_end_date?: string
}

export interface NIHResponse {
  results?: NIHProject[]
}

// ─── Hackathons ─────────────────────────────────────────────────────────────

export interface DevpostTheme {
  name?: string
}

export interface DevpostHackathon {
  title?: string
  url?: string
  displayed_location?: { location?: string }
  time_left_to_submission?: string
  organization_name?: string
  registrations_count?: number
  themes?: DevpostTheme[]
  prize_amount?: string
}

export interface DevpostResponse {
  hackathons?: DevpostHackathon[]
}

// ─── Books — Open Library ───────────────────────────────────────────────────

export interface OpenLibraryDoc {
  title?: string
  key?: string
  author_name?: string[]
  first_sentence?: string | string[]
  subject?: string[]
  first_publish_year?: number
}

export interface OpenLibrarySearchResponse {
  docs?: OpenLibraryDoc[]
}

// ─── Podcasts — iTunes Search ───────────────────────────────────────────────

export interface ItunesResult {
  trackName?: string
  trackViewUrl?: string
  collectionViewUrl?: string
  artistName?: string
  description?: string
  genres?: string[]
}

export interface ItunesSearchResponse {
  results?: ItunesResult[]
}

// ─── Wikidata SPARQL ────────────────────────────────────────────────────────

export interface WikidataValue {
  type?: string
  value: string
  'xml:lang'?: string
}

export interface WikidataBinding {
  org?: WikidataValue
  orgLabel?: WikidataValue
  description?: WikidataValue
  coords?: WikidataValue
  website?: WikidataValue
}

export interface WikidataSparqlResponse {
  results?: {
    bindings?: WikidataBinding[]
  }
}

// ─── Wikipedia REST ─────────────────────────────────────────────────────────

export interface WikipediaCategoryMember {
  title: string
}

export interface WikipediaCategoryResponse {
  query?: {
    categorymembers?: WikipediaCategoryMember[]
  }
}

export interface WikipediaSummary {
  title?: string
  description?: string
  extract?: string
  coordinates?: { lat?: number; lon?: number }
  content_urls?: {
    desktop?: { page?: string }
  }
}

// ─── GitHub ─────────────────────────────────────────────────────────────────

export interface GitHubUserSearchResult {
  login: string
}

export interface GitHubSearchUsersResponse {
  items?: GitHubUserSearchResult[]
}

export interface GitHubUserProfile {
  login?: string
  name?: string
  bio?: string
  location?: string
  blog?: string
  html_url?: string
}

export interface GitHubOrgSearchItem {
  login: string
  html_url: string
  description: string
}

export interface GitHubOrgProfile {
  name?: string
  description?: string
  bio?: string
  location?: string
  blog?: string
  html_url?: string
}

export interface GitHubRepoSearchItem {
  full_name: string
  html_url: string
  description: string | null
  owner: { login: string; html_url: string }
}

export interface GitHubRepoSearchResponse {
  items?: GitHubRepoSearchItem[]
}
