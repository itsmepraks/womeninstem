# Contributing to stem·spark

Thanks for taking the time. This is a directory site, so most contributions are one of three things: adding a resource, fixing a broken link, or improving code. Here's how to do each.

## Ground rules

- **Every resource must be real.** We don't list fake data, paid-to-list items, or resources we haven't verified.
- **Free to browse, always.** The site itself stays free. Linked resources can cost money (that's fine — we label cost where it applies).
- **We don't run any of the programs we link to.** We're a directory, not a platform.

## Suggest a resource

Open an issue with the "suggest a resource" label and include:

- **Name** and **URL** (must resolve)
- **Category** — scholarship, organization, program, conference, mentorship, job board, community, or course
- **Region** — Global, US, Europe, Americas, Asia, Africa, or Oceania (or "Global" if remote/anywhere)
- **Cost** — "Free" or a rough price
- **One-sentence description** of what it offers
- **Why it belongs here** — what makes it specifically useful for women in STEM

We'll verify the link, deduplicate against existing entries, and merge or close.

## Report a broken link

Open an issue with the "broken link" label and include the URL that's broken plus where on the site it appears (e.g., `/resources#scholarships`).

Or, if you want to fix it yourself, remove the dead entry from the relevant file in `data/` and open a PR.

## Development

### Prerequisites

- Node.js ≥ 18.17
- pnpm ≥ 9 (or npm/yarn; pnpm is the lockfile)
- Git

### Setup

```bash
git clone https://github.com/itsmepraks/womeninstem.git
cd womeninstem
pnpm install
pnpm dev
```

### Before opening a PR

```bash
pnpm lint         # Must pass
pnpm type-check   # Must pass
pnpm build        # Must pass
```

## Adding a static resource

Static resources live in `data/`. Each file exports a typed array.

| Category | File | Interface |
| --- | --- | --- |
| Scholarships | `data/resources.ts` | `Scholarship` |
| Organizations | `data/resources.ts` | `Organization` |
| Programs (bootcamps/K-12/online) | `data/resources.ts` | `Program` |
| Conferences | `data/resources.ts` | `Conference` |
| Mentorship platforms | `data/resources.ts` | `MentorshipPlatform` |
| Job boards | `data/resources.ts` | `JobBoard` |
| Communities | `data/communities.ts` | `Community` |
| Courses | `data/courses.ts` | `Course` |

Open the file, add your entry, commit. Fields are documented via the interfaces at the top of each file. IDs are slugs — match the existing style (lowercase, hyphenated).

### Scholarship deadlines

`nextDeadline` is an ISO date (`YYYY-MM-DD`) for the *next* application cycle. The UI shows "N days left" badges automatically.

## Adding a live-feed source

Live feeds live in `lib/api/<feed>.ts`. Each feed aggregates N upstream sources (usually APIs or RSS).

1. Read the existing fetchers in the relevant file to match the pattern.
2. Write a new source function that returns `Promise<Resource[]>` using `fetchWithTimeout` and either the typed API response (if JSON — see `types/external.ts`) or `parseRssItem` from `lib/api/helpers.ts` (if RSS).
3. Add it to the `aggregateSources([...])` call.
4. Test locally: the dev server's `/api/resources/<feed>` endpoint should return your new items.
5. If the source is rate-limited, note it in the PR.

Registered feeds live in `lib/api/feeds.ts` — that file is the source of truth for the cron runner.

## Code conventions

- **TypeScript strict**, including `noUncheckedIndexedAccess`. Non-null assertions (`!`) are fine where intent is clear.
- **No `any`.** Use `unknown` + type guards for genuinely variable shapes; type external API responses properly in `types/external.ts`.
- **No comments that restate code.** Only comment the WHY when it's non-obvious (invariants, gotchas, external constraints).
- **Small atomic commits** over one giant commit. If you touch two unrelated things, split them.

## Commit messages

Conventional Commits, no scope required:

```
feat: add Rewriting the Code to organizations
fix: SWE RSS feed URL was 404ing
copy: clearer empty-state on /saved
refactor: extract region filter into a custom hook
chore: bump next to 14.2.5
```

Prefer `feat` / `fix` / `copy` / `refactor` / `chore` / `docs`. Use `polish` for UI-only visual tweaks.

## PR process

1. Fork, branch (`feat/short-name`), push.
2. Open a PR with a clear description — what changed, what the user sees differently.
3. For data additions, link to the source so reviewers can verify quickly.
4. For code changes, explain the why (bug reproduction, design tradeoff).
5. CI is Vercel's preview deploy — check that the preview URL renders correctly.

## License

By contributing you agree that your contributions are licensed under [MIT](LICENSE).

## Contact

Open an issue for anything project-related. For private inquiries: [hello@praks.me](mailto:hello@praks.me) or [praks.me](https://praks.me).
