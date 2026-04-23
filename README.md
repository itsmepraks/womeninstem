# stem·spark

A directory of scholarships, courses, and organizations for women in STEM. One site, all free.

Live at [wis.praks.me](https://wis.praks.me).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue.svg)](https://www.typescriptlang.org/)

## What it is

I'm a student, and I kept missing scholarship deadlines because the info was scattered across too many tabs. Mentorship on one site, conferences buried in newsletters I hadn't subscribed to, fellowships mentioned once on a blog and never again. So I made this. Every link here goes to a real organization, scholarship, or program. No accounts, no ads, no tracking.

Static, hand-curated:

- 31 scholarships & fellowships with deadline tracking
- 37 organizations
- 30 programs (K-12, bootcamps, online)
- 14 conferences with annual timing
- 24 free online courses
- 8 communities (Slack, Discord, newsletters)
- Mentorship platforms and job boards

Live feeds, refreshed daily at 06:00 UTC via Vercel cron:

- Jobs & internships from Arbeitnow, Remotive, Jobicy, Himalayas, WWR
- Events from 18 RSS sources (WWCode, SWE, IEEE-WIE, AAUW, etc.)
- Hackathons from Devpost, MLH
- Grants from NSF, Grants.gov, NIH, plus 13 international RSS sources
- Mentors, orgs, books (iTunes, Open Library), podcasts

## Tech

Next.js 14 (App Router, static + ISR), TypeScript in strict mode, Tailwind. Framer Motion for animation, Vercel for hosting and cron. Data-cache invalidation via `unstable_cache` and `revalidateTag`.

## Getting started

```bash
git clone https://github.com/itsmepraks/womeninstem.git
cd womeninstem
pnpm install
pnpm dev
```

Runs without any config. Env vars are only needed if you're running the cron locally:

```env
# Auth for /api/cron/refresh
CRON_SECRET=<random-string>

# Optional. Raises GitHub rate limits on the orgs/mentors fetchers.
GITHUB_TOKEN=<gh-pat>
```

To mirror production: `vercel env pull .env.local`.

### Scripts

```bash
pnpm dev          # Dev server
pnpm build        # Production build
pnpm start        # Production server
pnpm lint         # ESLint
pnpm type-check   # tsc --noEmit
pnpm check-links  # Verify all external URLs resolve
```

## Project layout

```
app/
  api/
    cron/refresh/      # Daily runner, hits all 8 feeds and revalidates tags
    resources/[feed]/  # 8 feed endpoints, each wrapped in unstable_cache
  page.tsx             # Home
  resources/           # Main directory with category/cost/region filters
  learning/            # Courses + scholarships
  impact/              # Stats & research
  media/               # Books, podcasts, documentaries
  saved/               # localStorage bookmarks
  about/

components/            # UI + layout
data/                  # Hand-curated static data
lib/
  api/                 # 8 fetchers, pipeline, shared RSS parser
  useBookmarks.ts      # localStorage hook with cross-tab sync
  useLiveData.ts       # Client fetcher with tab-focus refresh
types/                 # Shared types
```

## How data stays fresh

Vercel cron fires `/api/cron/refresh` once a day. The handler imports the 8 fetchers directly (no self-HTTP), runs them in parallel, and invalidates the matching cache tag on success. Client requests hit warm cache. Per-source failures get logged; they don't kill the batch.

Details: `lib/api/feeds.ts` is the registry, `app/api/cron/refresh/route.ts` is the runner.

## Contributing

A few ways to help:

- Suggest a resource — open an issue with a link
- Report a broken link — open an issue
- Fix a bug — PRs welcome

More in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT. See [LICENSE](LICENSE).

## Credits

By [Prakriti Bista](https://praks.me).
