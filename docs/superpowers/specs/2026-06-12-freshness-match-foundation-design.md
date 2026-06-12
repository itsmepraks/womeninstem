# Freshness Tracker and Match Metadata Foundation

## Purpose

stem.spark should become a living public directory for women in STEM resources without accounts, user tracking, resume uploads, or a private database. The first foundation is automated link freshness plus structured eligibility and quality metadata. This makes the existing directory more trustworthy now and prepares the site for a future local-only match finder.

## Product Goals

- Show users whether a resource link was recently verified.
- Sort or de-emphasize stale resources without deleting useful context.
- Add structured eligibility metadata that can power filters, match scoring, and SEO pages.
- Keep all generated status data public, reproducible, and open-source.
- Avoid storing any user data.

## Non-Goals

- No user accounts.
- No resume upload.
- No email alerts.
- No private database, KV store, or hosted queue.
- No AI eligibility claims.
- No moderation or peer-review community features.

## Architecture

The repo remains the source of truth. Static resources stay in source-controlled data files. A scheduled GitHub Action runs a Node script that checks public resource URLs and writes generated freshness state to `data/generated/freshness.json`. The workflow commits the file only when the generated output changes.

The site reads generated freshness data at build/runtime like any other static data. Resource cards combine existing resource fields, freshness data, and eligibility metadata to show trust badges and quality labels.

GitHub Actions should use the built-in `GITHUB_TOKEN` with explicit least-privilege permissions:

```yaml
permissions:
  contents: write
```

This follows GitHub's current guidance to limit the token to the minimum access required for workflow commits.

## Data Model

### Freshness Record

Each checked public URL produces one record:

```ts
type FreshnessStatus = 'active' | 'redirected' | 'stale' | 'error' | 'unchecked';

type FreshnessRecord = {
  id: string;
  label: string;
  category: string;
  url: string;
  status: FreshnessStatus;
  statusCode?: number;
  checkedAt: string;
  lastActiveAt?: string;
  finalUrl?: string;
  consecutiveFailures: number;
  message?: string;
};
```

Resource IDs should be namespaced so IDs remain unique across resource types:

- `scholarship:swe-scholarships`
- `organization:swe`
- `program:kode-with-klossy`
- `course:cs50`
- `community:women-who-code`

### Eligibility Metadata

Eligibility metadata should be deterministic and public:

```ts
type ResourceMetadata = {
  id: string;
  audience?: Array<'high-school' | 'undergraduate' | 'graduate' | 'postdoctoral' | 'professional' | 'career-switcher' | 'all'>;
  fields?: Array<'computer-science' | 'engineering' | 'science' | 'mathematics' | 'biology' | 'data-science' | 'general-stem'>;
  regions?: Array<'Global' | 'US' | 'Europe' | 'Americas' | 'Asia' | 'Africa' | 'Oceania'>;
  resourceTypes?: Array<'scholarship' | 'organization' | 'program' | 'conference' | 'mentorship' | 'job-board' | 'course' | 'community'>;
  cost?: 'free' | 'paid' | 'varies' | 'unknown';
  deadlineType?: 'fixed' | 'annual' | 'rolling' | 'unknown';
  identityFocus?: Array<'women-in-stem' | 'first-gen' | 'black' | 'latina' | 'indigenous' | 'lgbtq' | 'disability' | 'international' | 'low-income'>;
};
```

The initial implementation should generate sensible metadata from existing fields where possible and allow manual overrides later.

## Quality Score

Quality scoring should be transparent and conservative. It is not a moral score. It indicates how complete and trustworthy the listing is.

Signals:

- Link is active or recently redirected.
- Has a direct official URL.
- Has deadline information when relevant.
- Has region information.
- Has amount or cost information where relevant.
- Has structured eligibility metadata.
- Has a clear description.

Labels:

- `Highly reliable`
- `Verified`
- `Limited info`
- `Needs review`

The UI should show the label and the most important reason, not a raw numeric score.

## Freshness Script

Add `scripts/update-freshness.mjs`.

Responsibilities:

- Collect static URLs from `data/resources.ts`, `data/courses.ts`, and `data/communities.ts`.
- Preserve previous `lastActiveAt` and `consecutiveFailures` when possible.
- Check each URL with `HEAD`; fall back to `GET` for servers that reject `HEAD`.
- Follow redirects.
- Use a clear user agent.
- Use timeouts.
- Limit concurrency so the workflow is polite to third-party sites.
- Write stable, sorted JSON to `data/generated/freshness.json`.
- Exit successfully even if some links fail; stale resources are product data, not workflow failure.

## GitHub Action

Add `.github/workflows/freshness.yml`.

Triggers:

- `workflow_dispatch`
- scheduled weekly at an off-peak minute, for example `37 8 * * 1`

Steps:

- Checkout repository.
- Set up pnpm and Node.
- Install dependencies with frozen lockfile.
- Run freshness script.
- Commit generated freshness data only if changed.

## UI Behavior

Resource cards should show freshness and quality if available:

- `Verified today`
- `Verified 4 days ago`
- `Redirected, verified 2 days ago`
- `Needs review`
- `Unchecked`

Cards with active or redirected links should remain normal. Cards with repeated failures should be visually de-emphasized but still visible unless the resource is clearly unsafe or irrelevant.

## Privacy and Safety

- The system checks only public URLs already listed in the repo.
- It does not process user input.
- It does not store visitor state.
- It does not infer eligibility from private data.
- It should avoid aggressive crawling and use low concurrency.

## Testing

- Unit-like script checks for URL collection and quality scoring helpers where practical.
- Run `node scripts/update-freshness.mjs --dry-run` or equivalent local mode.
- Run `pnpm type-check`.
- Run `pnpm build`.
- Verify resource cards render with generated freshness data.

## Rollout

1. Add generated data file and script.
2. Add workflow.
3. Add UI badges to resource cards.
4. Add metadata helpers for quality labels.
5. Run the script once locally and commit the generated baseline.

## Open Decisions

- Whether stale resources should remain visible by default or move below verified resources.
- Whether generated freshness should cover only curated static resources initially or also live API feed results.

Initial decision: cover curated static resources first. Live feeds are already transient and can be handled separately later.
