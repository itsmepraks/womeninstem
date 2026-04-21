# STEMspark Deduplication Report

Worktree: `/Users/praks/Development/womeninstem/.claude/worktrees/agent-acfa1377`
Branch: `worktree-agent-acfa1377`

## Candidates

### HIGH confidence

#### H1. 8 identical `app/api/resources/<feed>/route.ts` route handlers
- **Call sites:** 8 (`jobs`, `events`, `hackathons`, `grants`, `mentors`, `orgs`, `books`, `podcasts`)
- **Duplication:** Each file is ~26 lines and differs only in the feed name, the `fetchX` import, the cache key (`resources:<name>:v1`), and the revalidate seconds. The shape (unstable_cache wrap, 503-on-total-failure, 500-on-exception, console.error prefix) is byte-identical.
- **Reasoning:** Textbook factory. `FEED_CONFIG` in `lib/api/feeds.ts` already has exactly the metadata we need (name + revalidateSeconds + fetch). A single `createFeedRoute(name, fetcher, revalidate)` helper collapses ~200 lines into ~20.
- **Risk:** Low. Next.js only needs each `route.ts` to export `GET` and optionally `revalidate`. The handler body is invariant.

#### ~~H2~~ Downgraded to MEDIUM on closer inspection.
- Filter pills in `app/resources/page.tsx` use the same base transition + focus-ring set across 3 sites, but padding varies (category px-3.5/py-1.5, cost/region px-3/py-1). The media-page and Feedback-button pills use **different** sizes and hover treatments — they're not the same pattern. True cross-file dedup doesn't emerge.
- Keeping as MEDIUM; a future author adding a 4th filter pill elsewhere should extract a `.pill-filter-base` utility then. Not doing it now to avoid a 1-file abstraction.

#### H3. RSS item parsing in `lib/api/events.ts` and `lib/api/grants.ts`
- **Call sites:** 2 functions (`makeRssFetcher`, `makeGrantsRssFetcher`) that each parse RSS items identically — title/link/description/date extraction with CDATA handling, HTML-strip. Grants adds keyword filtering.
- **Reasoning:** Extract `parseRssItem(item): { title, url, description, date } | null` into a shared helper. Each factory keeps its mapping to a Resource. **Borderline HIGH — consolidating the parsing envelope leaves the category-specific mapping clear.**

### MEDIUM confidence

#### M1. Trailing accent-link spans (`View →`, `Apply →`, etc.)
- **Call sites:** 10+ spans with `text-xs text-accent-primary font-medium ... group-hover:text-accent-secondary transition-colors` and varying text.
- **Reasoning:** A `<CardArrowLabel>` saves ~1 line per call; marginal. Leave.

#### M2. `card-white p-(5|6) flex items-center justify-between group hover:shadow-card-hover transition-shadow` link rows
- **Call sites:** ~5 in resources/page.tsx, 2 in learning/page.tsx
- **Reasoning:** Could be a `<LinkRow>` or `.card-row` @apply. LinkCard already exists but isn't used everywhere; author may have deliberately kept bespoke layouts. **Risk of visual drift.** Leave for human.

#### M3. `User-Agent: stemspark/1.0` and GitHub headers ceremony
- **Call sites:** User-Agent header appears 33× across fetcher files. GitHub headers duplicated exactly in `mentors.ts` and `orgs.ts`.
- **Reasoning:** Could hoist `DEFAULT_HEADERS` / `GITHUB_HEADERS`. But each fetcher inlines its own flavor (some with `Accept`, some with `Content-Type`). GitHub-header duplication is only 2 sites. Leave.

#### M4. Per-RSS `{ id: randomUUID(), category, lat: 0, lng: 0, ... }` Resource-shape repetition
- **Reasoning:** 14+ sites, but per user instructions ("fetchers handle different upstream shapes — consolidating guts is risky") a builder would need every optional field. Skip.

### LOW confidence

- **L1.** `toLocaleDateString` pattern: 1 call site.
- **L2.** Bookmark tap-target button pattern: 2 sites.
- **L3.** `timeSince` in LiveFeed: 1 site; could graduate to `lib/dateHelpers.ts` when a second caller arrives.
- **L4.** Framer-motion `stagger`/`fadeUp` variants: 3 pages but with slightly different durations per page — likely intentional.
- **L5.** Inline `<a target="_blank">` vs `LinkCard`: consistency refactor, not dedupe.

---

## Implementation log

Three atomic commits were attempted: H1, H2, H3. See git log on this branch.
