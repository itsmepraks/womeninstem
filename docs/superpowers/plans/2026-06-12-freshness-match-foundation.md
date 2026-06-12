# Freshness Tracker and Match Metadata Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an automated public freshness tracker plus deterministic eligibility/quality metadata foundation for stem.spark without accounts, private user data, or a database.

**Architecture:** Static curated data remains source-controlled. A Node script collects public URLs, checks their freshness, writes stable generated JSON to `data/generated/freshness.json`, and a scheduled GitHub Action commits changes. The UI reads generated freshness and computed quality metadata to display trust badges on resource cards.

**Tech Stack:** Next.js 14 App Router, TypeScript, Node 20 scripts, GitHub Actions, static JSON, Tailwind components.

---

## File Structure

- Create `types/freshness.ts`: shared freshness, metadata, and quality score types.
- Create `data/generated/freshness.json`: generated baseline freshness records.
- Create `lib/freshness.ts`: lookup and badge helpers consumed by React components.
- Create `lib/resourceMetadata.ts`: deterministic eligibility and quality helpers.
- Create `scripts/update-freshness.mjs`: URL collector and checker used locally and in CI.
- Create `.github/workflows/freshness.yml`: scheduled updater that commits generated JSON.
- Modify `components/ui/ResourceCard.tsx`: show freshness and quality badges.
- Modify `components/ui/LinkCard.tsx`: accept optional badge row for non-scholarship resources.
- Modify `app/resources/page.tsx`: pass namespaced resource IDs and metadata into cards.
- Modify `app/learning/page.tsx`: pass scholarship/course IDs into cards where cards are used.
- Modify `package.json`: add `freshness:update` script.

## Task 1: Add Freshness Types and Generated Baseline

**Files:**
- Create: `types/freshness.ts`
- Create: `data/generated/freshness.json`

- [ ] **Step 1: Add shared freshness types**

Create `types/freshness.ts`:

```ts
export type FreshnessStatus = 'active' | 'redirected' | 'stale' | 'error' | 'unchecked';

export interface FreshnessRecord {
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
}

export type QualityLabel = 'Highly reliable' | 'Verified' | 'Limited info' | 'Needs review';

export interface QualityScore {
  score: number;
  label: QualityLabel;
  reason: string;
}

export type AudienceTag =
  | 'high-school'
  | 'undergraduate'
  | 'graduate'
  | 'postdoctoral'
  | 'professional'
  | 'career-switcher'
  | 'all';

export type FieldTag =
  | 'computer-science'
  | 'engineering'
  | 'science'
  | 'mathematics'
  | 'biology'
  | 'data-science'
  | 'general-stem';

export type ResourceTypeTag =
  | 'scholarship'
  | 'organization'
  | 'program'
  | 'conference'
  | 'mentorship'
  | 'job-board'
  | 'course'
  | 'community';

export type CostTag = 'free' | 'paid' | 'varies' | 'unknown';
export type DeadlineTypeTag = 'fixed' | 'annual' | 'rolling' | 'unknown';

export type IdentityFocusTag =
  | 'women-in-stem'
  | 'first-gen'
  | 'black'
  | 'latina'
  | 'indigenous'
  | 'lgbtq'
  | 'disability'
  | 'international'
  | 'low-income';

export interface ResourceMetadata {
  id: string;
  audience?: AudienceTag[];
  fields?: FieldTag[];
  regions?: string[];
  resourceTypes?: ResourceTypeTag[];
  cost?: CostTag;
  deadlineType?: DeadlineTypeTag;
  identityFocus?: IdentityFocusTag[];
}
```

- [ ] **Step 2: Add generated baseline JSON**

Create `data/generated/freshness.json`:

```json
[]
```

- [ ] **Step 3: Verify typecheck**

Run:

```bash
pnpm type-check
```

Expected: command exits `0`.

- [ ] **Step 4: Commit**

```bash
git add types/freshness.ts data/generated/freshness.json
git commit -m "Add freshness data types"
```

## Task 2: Add Freshness Lookup and Quality Helpers

**Files:**
- Create: `lib/freshness.ts`
- Create: `lib/resourceMetadata.ts`

- [ ] **Step 1: Add freshness lookup helpers**

Create `lib/freshness.ts`:

```ts
import freshnessRecords from '@/data/generated/freshness.json';
import type { FreshnessRecord, FreshnessStatus } from '@/types/freshness';

const records = freshnessRecords as FreshnessRecord[];

export function getFreshness(id: string): FreshnessRecord | undefined {
  return records.find((record) => record.id === id);
}

export function formatFreshnessBadge(record: FreshnessRecord | undefined): {
  label: string;
  tone: 'good' | 'warn' | 'muted';
} {
  if (!record) return { label: 'Unchecked', tone: 'muted' };

  if (record.status === 'active' || record.status === 'redirected') {
    const days = daysSince(record.lastActiveAt ?? record.checkedAt);
    const label =
      days === 0
        ? 'Verified today'
        : `Verified ${days} day${days === 1 ? '' : 's'} ago`;
    return { label, tone: record.status === 'redirected' ? 'warn' : 'good' };
  }

  if (record.status === 'stale' || record.status === 'error') {
    return { label: 'Needs review', tone: 'warn' };
  }

  return { label: 'Unchecked', tone: 'muted' };
}

function daysSince(value: string): number {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 0;
  const diff = Date.now() - date.getTime();
  return Math.max(0, Math.floor(diff / 86_400_000));
}

export function isFreshnessHealthy(status: FreshnessStatus | undefined): boolean {
  return status === 'active' || status === 'redirected';
}
```

- [ ] **Step 2: Add quality and metadata helpers**

Create `lib/resourceMetadata.ts`:

```ts
import type { FreshnessRecord, QualityScore, ResourceMetadata } from '@/types/freshness';

type QualityInput = {
  id: string;
  url?: string;
  description?: string;
  amount?: string;
  cost?: string;
  region?: string;
  deadline?: string;
  freshness?: FreshnessRecord;
  metadata?: ResourceMetadata;
};

export function inferCostTag(cost?: string): ResourceMetadata['cost'] {
  if (!cost) return 'unknown';
  const normalized = cost.toLowerCase();
  if (normalized.includes('free')) return 'free';
  if (normalized.includes('varies') || normalized.includes('variable')) return 'varies';
  if (normalized.includes('$') || normalized.includes('paid')) return 'paid';
  return 'unknown';
}

export function scoreResourceQuality(input: QualityInput): QualityScore {
  let score = 0;
  const reasons: string[] = [];

  if (input.url) {
    score += 15;
    reasons.push('official link');
  }

  if (input.freshness?.status === 'active') {
    score += 35;
    reasons.push('recently verified');
  } else if (input.freshness?.status === 'redirected') {
    score += 25;
    reasons.push('verified after redirect');
  } else if (input.freshness?.status === 'stale' || input.freshness?.status === 'error') {
    score -= 20;
    reasons.push('needs link review');
  }

  if (input.deadline) {
    score += 15;
    reasons.push('deadline listed');
  }

  if (input.region) {
    score += 10;
    reasons.push('region listed');
  }

  if (input.amount || input.cost) {
    score += 10;
    reasons.push('cost or amount listed');
  }

  if (input.metadata) {
    score += 15;
    reasons.push('eligibility tags');
  }

  if (input.description && input.description.length >= 80) {
    score += 5;
  }

  if (score >= 80) return { score, label: 'Highly reliable', reason: reasons[0] ?? 'complete listing' };
  if (score >= 55) return { score, label: 'Verified', reason: reasons[0] ?? 'usable listing' };
  if (score >= 30) return { score, label: 'Limited info', reason: reasons[0] ?? 'partial listing' };
  return { score, label: 'Needs review', reason: reasons[0] ?? 'missing verification' };
}
```

- [ ] **Step 3: Verify typecheck**

Run:

```bash
pnpm type-check
```

Expected: command exits `0`.

- [ ] **Step 4: Commit**

```bash
git add lib/freshness.ts lib/resourceMetadata.ts
git commit -m "Add freshness and quality helpers"
```

## Task 3: Build Freshness Update Script

**Files:**
- Create: `scripts/update-freshness.mjs`
- Modify: `package.json`

- [ ] **Step 1: Add script command**

Modify `package.json` scripts:

```json
"freshness:update": "node scripts/update-freshness.mjs"
```

- [ ] **Step 2: Add freshness script**

Create `scripts/update-freshness.mjs`:

```js
#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = process.cwd();
const outputPath = join(root, 'data/generated/freshness.json');
const sourceFiles = ['data/resources.ts', 'data/courses.ts', 'data/communities.ts'];
const urlRegex = /url:\s*['"`](https?:\/\/[^'"`]+)['"`]/g;
const idRegex = /id:\s*['"`]([^'"`]+)['"`]/;
const titleRegex = /(name|title):\s*['"`]([^'"`]+)['"`]/;
const categoryByFile = new Map([
  ['data/resources.ts', 'resource'],
  ['data/courses.ts', 'course'],
  ['data/communities.ts', 'community'],
]);

const previous = readPrevious(outputPath);
const collected = collectUrls();
const checkedAt = new Date().toISOString();
const records = [];

for (const item of collected) {
  const prior = previous.get(item.id);
  const result = await checkUrl(item.url);
  const healthy = result.status === 'active' || result.status === 'redirected';

  records.push({
    id: item.id,
    label: item.label,
    category: item.category,
    url: item.url,
    status: result.status,
    statusCode: result.statusCode,
    checkedAt,
    lastActiveAt: healthy ? checkedAt : prior?.lastActiveAt,
    finalUrl: result.finalUrl,
    consecutiveFailures: healthy ? 0 : (prior?.consecutiveFailures ?? 0) + 1,
    message: result.message,
  });
}

records.sort((a, b) => a.id.localeCompare(b.id));
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(records, null, 2)}\n`);
console.log(`Wrote ${records.length} freshness records to ${outputPath}`);

function readPrevious(path) {
  if (!existsSync(path)) return new Map();
  const parsed = JSON.parse(readFileSync(path, 'utf8'));
  return new Map(parsed.map((record) => [record.id, record]));
}

function collectUrls() {
  const items = [];
  for (const file of sourceFiles) {
    const text = readFileSync(join(root, file), 'utf8');
    const blocks = text.split(/\n\s*},\s*\n/);
    for (const block of blocks) {
      const url = [...block.matchAll(urlRegex)][0]?.[1];
      if (!url) continue;
      const rawId = block.match(idRegex)?.[1] ?? slugify(url);
      const label = block.match(titleRegex)?.[2] ?? rawId;
      const category = categoryByFile.get(file) ?? 'resource';
      items.push({
        id: `${category}:${rawId}`,
        label,
        category,
        url,
      });
    }
  }
  return dedupeById(items);
}

function dedupeById(items) {
  const map = new Map();
  for (const item of items) map.set(item.id, item);
  return [...map.values()];
}

async function checkUrl(url) {
  const head = await request(url, 'HEAD');
  if (head.ok || (head.statusCode && head.statusCode !== 405 && head.statusCode !== 403)) {
    return head;
  }
  return request(url, 'GET');
}

async function request(url, method) {
  try {
    const res = await fetch(url, {
      method,
      redirect: 'follow',
      signal: AbortSignal.timeout(12_000),
      headers: {
        'User-Agent': 'stemspark-freshness-checker/1.0 (+https://wis.praks.me)',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });

    const finalUrl = res.url || url;
    if (res.ok) {
      return {
        status: finalUrl === url ? 'active' : 'redirected',
        statusCode: res.status,
        finalUrl,
        message: finalUrl === url ? undefined : `Redirected to ${finalUrl}`,
      };
    }

    return {
      status: res.status >= 500 ? 'error' : 'stale',
      statusCode: res.status,
      finalUrl,
      message: `${method} returned ${res.status}`,
    };
  } catch (error) {
    return {
      status: 'error',
      message: error instanceof Error ? error.message : String(error),
    };
  }
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
```

- [ ] **Step 3: Run the script**

Run:

```bash
pnpm freshness:update
```

Expected: `data/generated/freshness.json` contains public freshness records and the command exits `0`.

- [ ] **Step 4: Run validation**

Run:

```bash
pnpm type-check
pnpm build
```

Expected: both commands exit `0`.

- [ ] **Step 5: Commit**

```bash
git add package.json scripts/update-freshness.mjs data/generated/freshness.json
git commit -m "Generate resource freshness data"
```

## Task 4: Add Scheduled GitHub Action

**Files:**
- Create: `.github/workflows/freshness.yml`

- [ ] **Step 1: Add workflow**

Create `.github/workflows/freshness.yml`:

```yaml
name: Freshness

on:
  workflow_dispatch:
  schedule:
    - cron: '37 8 * * 1'

permissions:
  contents: write

concurrency:
  group: freshness-${{ github.ref }}
  cancel-in-progress: true

jobs:
  update:
    name: Update freshness data
    runs-on: ubuntu-latest
    timeout-minutes: 15

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 10

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Update freshness data
        run: pnpm freshness:update

      - name: Commit freshness data
        run: |
          if git diff --quiet -- data/generated/freshness.json; then
            echo "No freshness changes to commit."
            exit 0
          fi
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add data/generated/freshness.json
          git commit -m "chore: update resource freshness"
          git push
```

- [ ] **Step 2: Verify workflow syntax in local build path**

Run:

```bash
pnpm type-check
```

Expected: command exits `0`.

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/freshness.yml
git commit -m "Add freshness update workflow"
```

## Task 5: Show Freshness and Quality on Cards

**Files:**
- Modify: `components/ui/ResourceCard.tsx`
- Modify: `components/ui/LinkCard.tsx`

- [ ] **Step 1: Extend ResourceCard props and UI**

Modify `ResourceCardProps` in `components/ui/ResourceCard.tsx`:

```ts
import { formatFreshnessBadge } from '@/lib/freshness';
import { scoreResourceQuality } from '@/lib/resourceMetadata';
import type { FreshnessRecord, ResourceMetadata } from '@/types/freshness';
```

Add props:

```ts
  freshness?: FreshnessRecord;
  metadata?: ResourceMetadata;
  region?: string;
```

Inside the component before `return`, add:

```ts
  const freshnessBadge = formatFreshnessBadge(freshness);
  const quality = scoreResourceQuality({
    id: bookmark?.key ?? title,
    url,
    description,
    amount,
    region,
    deadline: deadlineLabel,
    freshness,
    metadata,
  });
```

Add the badge row inside the text block below the description:

```tsx
        <div className="mt-2 flex flex-wrap gap-1.5">
          <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-pill ${freshnessBadge.tone === 'good' ? 'bg-green-100 text-green-900' : freshnessBadge.tone === 'warn' ? 'bg-amber-100 text-amber-900' : 'bg-accent-secondary/10 text-text-muted'}`}>
            {freshnessBadge.label}
          </span>
          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-pill bg-accent-secondary/10 text-accent-primary">
            {quality.label}
          </span>
        </div>
```

- [ ] **Step 2: Extend LinkCard to support badges**

Modify `components/ui/LinkCard.tsx` props:

```ts
interface LinkCardProps {
  url?: string;
  className?: string;
  badges?: React.ReactNode;
  children: React.ReactNode;
}
```

Modify function signature:

```ts
export default function LinkCard({ url, className = '', badges, children }: LinkCardProps) {
```

Render badges after children:

```tsx
      {children}
      {badges && <div className="mt-2 flex flex-wrap gap-1.5">{badges}</div>}
```

- [ ] **Step 3: Run validation**

Run:

```bash
pnpm type-check
pnpm build
```

Expected: both commands exit `0`.

- [ ] **Step 4: Commit**

```bash
git add components/ui/ResourceCard.tsx components/ui/LinkCard.tsx
git commit -m "Show resource trust badges"
```

## Task 6: Wire Metadata Into Resource Pages

**Files:**
- Modify: `app/resources/page.tsx`
- Modify: `app/learning/page.tsx`

- [ ] **Step 1: Import helpers**

Add imports to both files:

```ts
import { getFreshness } from '@/lib/freshness';
import { inferCostTag } from '@/lib/resourceMetadata';
```

- [ ] **Step 2: Pass freshness into scholarship cards**

For each scholarship `ResourceCard`, pass:

```tsx
freshness={getFreshness(`resource:${s.id}`) ?? getFreshness(`scholarship:${s.id}`)}
metadata={{
  id: `scholarship:${s.id}`,
  audience: [s.level],
  regions: s.region ? [s.region] : undefined,
  resourceTypes: ['scholarship'],
  cost: 'free',
  deadlineType: s.nextDeadline ? 'fixed' : 'unknown',
  identityFocus: ['women-in-stem'],
}}
region={s.region}
```

- [ ] **Step 3: Pass freshness into program cards via LinkCard badges**

For program and conference LinkCards, use `formatFreshnessBadge` and `scoreResourceQuality` to render the same badge pair. Use IDs like `resource:${p.id}` and `resource:${conf.id}`.

- [ ] **Step 4: Verify pages**

Run:

```bash
pnpm type-check
pnpm build
```

Expected: both commands exit `0`.

- [ ] **Step 5: Commit**

```bash
git add app/resources/page.tsx app/learning/page.tsx
git commit -m "Wire freshness badges into resource pages"
```

## Task 7: Final Verification

**Files:**
- No new files.

- [ ] **Step 1: Run full validation**

Run:

```bash
pnpm freshness:update
pnpm type-check
pnpm build
git status --short
```

Expected:

- Freshness script exits `0`.
- Type-check exits `0`.
- Build exits `0`.
- Git status shows no uncommitted changes after the final commit.

- [ ] **Step 2: Push commits**

Run:

```bash
git push origin main
```

Expected: push exits `0`.

