# stem·spark

A curated directory of scholarships, courses, organizations, and opportunities for women in STEM — in one place, all free to browse.

**Live:** [wis.praks.me](https://wis.praks.me)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue.svg)](https://www.typescriptlang.org/)

## What it is

A static-first directory site. No accounts, no tracking, no paywalls — every link goes to a real external organization, scholarship, or program. Built because opportunities for women in STEM *exist*, they're just scattered across 47 tabs.

**Hand-curated (kept current manually):**
- 31 scholarships & fellowships with deadline tracking
- 37 organizations
- 30 programs (K-12, bootcamps, online platforms)
- 14 conferences with annual timing
- 24 free online courses across 8 fields
- 8 communities (Slack, Discord, newsletters)
- Plus mentorship platforms and job boards

**Live feeds (refreshed daily at 06:00 UTC via Vercel cron):**
- Jobs & internships — Arbeitnow, Remotive, Jobicy, Himalayas, WWR
- Events — 18 RSS feeds (WWCode, SWE, IEEE-WIE, AAUW, etc.)
- Hackathons — Devpost, MLH
- Grants — NSF, Grants.gov, NIH, plus 13 international RSS sources
- Mentors, orgs, books (iTunes/Open Library), podcasts

## Tech

- **Next.js 14** (App Router, static + ISR)
- **TypeScript** (strict mode with `noUncheckedIndexedAccess`)
- **Tailwind CSS** (custom design tokens — warm organic palette)
- **Framer Motion** for animations
- **Vercel** for hosting + cron jobs
- `unstable_cache` + `revalidateTag` for tag-based cache invalidation

## Getting started

```bash
git clone https://github.com/itsmepraks/womeninstem.git
cd womeninstem
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Only required for running the cron locally — the site works without them.

```env
# Required for /api/cron/refresh (Vercel cron auth)
CRON_SECRET=<random-string>

# Optional — higher rate limits on GitHub-based fetchers (orgs, mentors)
GITHUB_TOKEN=<gh-pat>
```

Pull from Vercel with `vercel env pull .env.local`.

### Scripts

```bash
pnpm dev          # Dev server on :3000
pnpm build        # Production build
pnpm start        # Production server
pnpm lint         # Next.js ESLint
pnpm type-check   # tsc --noEmit
pnpm check-links  # Verify all external URLs resolve
```

## Project structure

```
app/
  api/
    cron/refresh/      # Daily fetcher runner — hits all 8 feeds, revalidates tags
    resources/[feed]/  # 8 feed endpoints: jobs, events, hackathons, grants,
                       # mentors, orgs, books, podcasts — each wrapped in
                       # unstable_cache with a matching tag
  page.tsx             # Home
  resources/           # Main directory with category/cost/region filters
  learning/            # Courses + scholarships
  impact/              # Stats & research
  media/               # Books, podcasts, documentaries
  saved/               # localStorage bookmarks
  about/

components/
  ui/                  # Design system pieces (ResourceCard, LiveFeed,
                       # GlobalSearch, BookmarkButton, etc.)
  layout/

data/                  # Hand-curated static data (scholarships, orgs, courses, ...)
lib/
  api/                 # 8 fetchers, pipeline.ts (aggregateSources, dedup),
                       # feeds.ts (central FeedConfig), createFeedRoute.ts
  useBookmarks.ts      # localStorage hook w/ cross-tab sync + celebrate events
  useLiveData.ts       # Client fetcher w/ tab-focus refresh
types/                 # Shared types (resource, region, external API shapes)
```

## How data stays current

1. **Vercel cron** fires `/api/cron/refresh` daily at 06:00 UTC.
2. The handler imports the 8 fetchers directly (no self-HTTP), runs them in parallel, and calls `revalidateTag('resources:<feed>')` on success.
3. Each `/api/resources/<feed>` route wraps its fetcher in `unstable_cache` with the matching tag, so client requests hit warm cache.
4. The `LiveFeed` component refetches silently on tab-focus (> 60s stale).
5. Per-source failures are logged with context but don't kill the batch.

See `lib/api/feeds.ts` for the feed registry and `app/api/cron/refresh/route.ts` for the runner.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). The fastest way to contribute right now is:

- **Suggest a resource** (scholarship, org, program, etc.) — open an issue with a link
- **Report a broken link** — open an issue
- **Fix a bug** — PRs welcome

## License

MIT — see [LICENSE](LICENSE).

## Credits

Built by [Prakriti Bista](https://praks.me).
