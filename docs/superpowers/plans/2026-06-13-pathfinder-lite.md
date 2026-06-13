# Pathfinder Lite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a private, no-login `/pathfinder` page that matches users to STEM resources and lets them save a local roadmap.

**Architecture:** Normalize existing static resource data into a shared Pathfinder catalog, score it with deterministic local logic, and render a client-side page with questionnaire state plus `localStorage` roadmap persistence. Keep matching pure and reusable, keep UI components small, and link the feature from navigation and home.

**Tech Stack:** Next.js 14 App Router, TypeScript strict mode, React client components, Tailwind CSS, existing freshness/quality helpers, browser `localStorage`.

---

## File Map

- Create `lib/pathfinder/types.ts`: filter, catalog item, scored match, roadmap item, and bucket types.
- Create `lib/pathfinder/catalog.ts`: converts `data/resources.ts`, `data/courses.ts`, and `data/communities.ts` into normalized Pathfinder items.
- Create `lib/pathfinder/scoring.ts`: pure scoring, match reason, grouping, and option helpers.
- Create `lib/pathfinder/storage.ts`: client-safe roadmap persistence helpers.
- Create `components/pathfinder/PathfinderForm.tsx`: segmented questionnaire controls.
- Create `components/pathfinder/MatchResults.tsx`: grouped match result cards with trust badges and add-to-roadmap controls.
- Create `components/pathfinder/RoadmapPanel.tsx`: local roadmap buckets, move controls, and remove controls.
- Create `components/pathfinder/PathfinderExperience.tsx`: client composition and state.
- Create `app/pathfinder/page.tsx`: page metadata and shell.
- Modify `data/navigation.ts`: add Pathfinder to nav.
- Modify `app/page.tsx`: add Pathfinder CTA.

---

### Task 1: Pathfinder Types

**Files:**
- Create: `lib/pathfinder/types.ts`

- [ ] **Step 1: Add shared types**

```ts
import type {
  AudienceTag,
  CostTag,
  FieldTag,
  FreshnessRecord,
  QualityScore,
  ResourceMetadata,
  ResourceTypeTag,
} from '@/types/freshness';

export type PathfinderGoal =
  | 'all'
  | 'funding'
  | 'learn'
  | 'community'
  | 'mentorship'
  | 'career'
  | 'events';

export type PathfinderStage = AudienceTag;
export type PathfinderField = FieldTag;
export type PathfinderCostPreference = 'free' | 'all';
export type PathfinderRegion =
  | 'all'
  | 'Global'
  | 'US'
  | 'Europe'
  | 'Americas'
  | 'Asia'
  | 'Africa'
  | 'Oceania';

export interface PathfinderFilters {
  stage: PathfinderStage;
  field: PathfinderField;
  region: PathfinderRegion;
  goal: PathfinderGoal;
  cost: PathfinderCostPreference;
}

export interface PathfinderItem {
  id: string;
  type: ResourceTypeTag;
  title: string;
  description: string;
  url: string;
  cost?: string;
  amount?: string;
  region?: string;
  audience: AudienceTag[];
  fields: FieldTag[];
  metadata: ResourceMetadata;
  freshness?: FreshnessRecord;
  quality: QualityScore;
}

export interface PathfinderMatch extends PathfinderItem {
  score: number;
  reasons: string[];
}

export type RoadmapBucket = 'now' | 'month' | 'later';

export interface RoadmapItem {
  id: string;
  type: ResourceTypeTag;
  title: string;
  description: string;
  url: string;
  bucket: RoadmapBucket;
  addedAt: number;
}

export type RoadmapState = Record<RoadmapBucket, RoadmapItem[]>;
```

- [ ] **Step 2: Run type-check**

Run: `pnpm type-check`

Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add lib/pathfinder/types.ts
git commit -m "Add Pathfinder types"
```

---

### Task 2: Catalog Normalization

**Files:**
- Create: `lib/pathfinder/catalog.ts`

- [ ] **Step 1: Create normalized catalog**

Implement conversion helpers that:

- Use IDs like `scholarship:${id}`, `program:${id}`, `course:${slugifyResourceId(title)}`.
- Attach freshness via `getFreshness`.
- Attach quality via `scoreResourceQuality`.
- Infer cost via `inferCostTag`.
- Use conservative field tags, mostly `general-stem`, with course fields mapped where obvious.

- [ ] **Step 2: Run type-check**

Run: `pnpm type-check`

Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add lib/pathfinder/catalog.ts
git commit -m "Normalize Pathfinder catalog"
```

---

### Task 3: Scoring Logic

**Files:**
- Create: `lib/pathfinder/scoring.ts`

- [ ] **Step 1: Add scoring helpers**

Implement:

- `DEFAULT_PATHFINDER_FILTERS`
- option arrays for form controls
- `scorePathfinderItem(item, filters)`
- `getPathfinderMatches(items, filters, limit?)`
- `groupPathfinderMatches(matches)`

Scoring should add points for goal/type fit, audience fit, region fit, requested free resources, healthy freshness, and higher quality. It should subtract points for stale/error freshness, paid resources when free-only is selected, and region mismatches. Match reasons should stay user-friendly and non-eligibility-claiming.

- [ ] **Step 2: Run type-check**

Run: `pnpm type-check`

Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add lib/pathfinder/scoring.ts
git commit -m "Add Pathfinder scoring"
```

---

### Task 4: Roadmap Storage

**Files:**
- Create: `lib/pathfinder/storage.ts`

- [ ] **Step 1: Add localStorage helpers**

Implement:

- `emptyRoadmap()`
- `readRoadmap()`
- `writeRoadmap(state)`
- `toRoadmapItem(match, bucket)`
- `addRoadmapItem(state, item)`
- `removeRoadmapItem(state, id)`
- `moveRoadmapItem(state, id, bucket)`

All helpers must be safe when `window` is unavailable and must tolerate malformed stored JSON.

- [ ] **Step 2: Run type-check**

Run: `pnpm type-check`

Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add lib/pathfinder/storage.ts
git commit -m "Add local Pathfinder roadmap storage"
```

---

### Task 5: Pathfinder UI Components

**Files:**
- Create: `components/pathfinder/PathfinderForm.tsx`
- Create: `components/pathfinder/MatchResults.tsx`
- Create: `components/pathfinder/RoadmapPanel.tsx`

- [ ] **Step 1: Build form**

Use accessible grouped buttons for stage, field, region, goal, and cost. Each button must call `onChange` with a full `PathfinderFilters` object.

- [ ] **Step 2: Build match results**

Render grouped results with title, description, trust badges, reasons, and an "Add to roadmap" button. Disable or relabel the button when the item is already saved.

- [ ] **Step 3: Build roadmap panel**

Render Now, This month, and Later buckets. Each saved item should have Visit, Move, and Remove controls.

- [ ] **Step 4: Run type-check**

Run: `pnpm type-check`

Expected: pass.

- [ ] **Step 5: Commit**

```bash
git add components/pathfinder/PathfinderForm.tsx components/pathfinder/MatchResults.tsx components/pathfinder/RoadmapPanel.tsx
git commit -m "Add Pathfinder interface components"
```

---

### Task 6: Pathfinder Page Composition

**Files:**
- Create: `components/pathfinder/PathfinderExperience.tsx`
- Create: `app/pathfinder/page.tsx`

- [ ] **Step 1: Compose client experience**

`PathfinderExperience` should:

- Load catalog with `getPathfinderCatalog()`.
- Keep filters in state with `DEFAULT_PATHFINDER_FILTERS`.
- Compute matches with `getPathfinderMatches`.
- Hydrate roadmap from `readRoadmap` after mount.
- Persist roadmap after user actions.
- Pass add/move/remove handlers to components.

- [ ] **Step 2: Add Next.js page**

`app/pathfinder/page.tsx` should export metadata with the title and description from the spec and render the client experience in the existing centered page shell.

- [ ] **Step 3: Run type-check**

Run: `pnpm type-check`

Expected: pass.

- [ ] **Step 4: Commit**

```bash
git add components/pathfinder/PathfinderExperience.tsx app/pathfinder/page.tsx
git commit -m "Add Pathfinder page"
```

---

### Task 7: Navigation and Home Discovery

**Files:**
- Modify: `data/navigation.ts`
- Modify: `app/page.tsx`

- [ ] **Step 1: Add nav link**

Add `{ id: 'pathfinder', label: 'Pathfinder', href: '/pathfinder' }` near the front of `NAV_ITEMS`.

- [ ] **Step 2: Add home CTA**

Add a Pathfinder CTA near the hero and one feature block or link in the "What you'll find here" section. Keep the page useful, not marketing-heavy.

- [ ] **Step 3: Run type-check**

Run: `pnpm type-check`

Expected: pass.

- [ ] **Step 4: Commit**

```bash
git add data/navigation.ts app/page.tsx
git commit -m "Link Pathfinder from site navigation"
```

---

### Task 8: Final Verification

**Files:**
- May modify touched UI files if verification finds layout issues.

- [ ] **Step 1: Format touched files**

Run:

```bash
pnpm exec prettier --write lib/pathfinder components/pathfinder app/pathfinder/page.tsx data/navigation.ts app/page.tsx
```

Expected: files formatted.

- [ ] **Step 2: Run checks**

Run:

```bash
pnpm type-check
pnpm lint
pnpm build
```

Expected: all pass. Existing non-blocking Browserslist warnings are acceptable.

- [ ] **Step 3: Browser verification**

Start local dev server:

```bash
pnpm exec next dev -p 3000
```

Verify:

- `/pathfinder` loads.
- Changing filters updates matches.
- Adding a result to roadmap works.
- Reload preserves roadmap.
- Move and remove controls work.
- Mobile viewport does not overflow.

- [ ] **Step 4: Commit fixes if needed**

If verification changes files:

```bash
git add <changed-files>
git commit -m "Polish Pathfinder experience"
```

- [ ] **Step 5: Push**

```bash
git push origin main
```
