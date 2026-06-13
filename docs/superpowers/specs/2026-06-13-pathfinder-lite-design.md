# Pathfinder Lite Design

## Goal

Pathfinder Lite turns stem·spark from a static directory into a private, no-login opportunity navigator. A visitor answers a few lightweight questions, receives matched resources across the existing catalog, and can save a small roadmap in their browser.

The feature must preserve the project's core promise: free to use, open source, privacy-first, and useful without a database.

## Non-Goals

- No accounts, server profiles, authentication, or database.
- No resume upload or document parsing in this version.
- No email alerts in this version.
- No external AI calls or hidden user tracking.
- No complex eligibility claims. Matches are guidance, not guarantees.

## User Experience

Add a new `/pathfinder` page. The page starts with the actual tool, not a marketing landing page.

The first screen shows a compact questionnaire with five inputs:

1. Stage: high school, undergraduate, graduate, postdoctoral, professional, career switcher, or all.
2. Field: computer science, engineering, data science, biology, mathematics, or general STEM.
3. Region: all, global, US, Europe, Americas, Asia, Africa, or Oceania.
4. Goal: funding, learn skills, community, mentorship, career, events, or explore everything.
5. Cost: free only or include paid/variable resources.

After the user answers, the page shows matched resources grouped into:

- Best next steps
- Scholarships & funding
- Courses to build skill
- Communities & mentorship
- Career and events

Each result shows:

- Title
- Short description
- External link
- Freshness badge
- Quality badge
- One or two match reasons, such as "matches your region", "free", "recently verified", or "good for undergrads"
- Button to add the item to the roadmap

The roadmap appears as a side panel on desktop and a bottom section on mobile. It has three buckets:

- Now
- This month
- Later

Items saved to the roadmap persist in `localStorage`. The user can move or remove items. The roadmap does not sync across devices.

## Matching Model

Matching is deterministic and local. It should use existing static data and the freshness/metadata foundation already in the app.

Create a normalized match item shape that can represent scholarships, courses, programs, organizations, conferences, mentorship platforms, job boards, and communities. Each item should include:

- Stable ID
- Resource type
- Title
- Description
- URL
- Cost
- Region
- Audience tags
- Field tags
- Freshness record
- Quality score

Scoring should favor:

- Goal/resource type fit
- Audience/stage fit
- Region fit
- Free resources when requested
- Recently verified or redirected freshness
- Higher quality labels

Scoring should penalize:

- Stale or failing freshness status
- Paid resources when the user requested free only
- Region mismatch when the item has a known region

The UI must describe matches as suggestions. It should avoid wording like "you qualify" unless the data proves it.

## Architecture

Add the feature in small, testable pieces:

- `lib/pathfinder/types.ts`: shared filter, match item, score, and roadmap types.
- `lib/pathfinder/catalog.ts`: converts existing data sources into normalized match items.
- `lib/pathfinder/scoring.ts`: deterministic scoring and match reasons.
- `lib/pathfinder/storage.ts`: localStorage helpers for questionnaire state and roadmap items.
- `components/pathfinder/PathfinderForm.tsx`: questionnaire controls.
- `components/pathfinder/MatchResults.tsx`: grouped result display.
- `components/pathfinder/RoadmapPanel.tsx`: roadmap buckets and item controls.
- `app/pathfinder/page.tsx`: page composition and SEO metadata.

The page should be a client component or contain a small client feature component, because questionnaire state and localStorage are browser-only. Data can still be imported statically from the existing `data/` files.

## Data Flow

1. The page loads the normalized catalog from static data.
2. The questionnaire stores active filters in React state.
3. Filters are scored against the catalog in memory.
4. Results are grouped by resource type and rendered with reasons.
5. Roadmap actions write selected items to `localStorage`.
6. Saved roadmap items hydrate from `localStorage` after the client mounts.

No questionnaire data or roadmap contents are sent to the server.

## Accessibility and UX Details

- Use radios, segmented controls, or select-like buttons with proper labels for the questionnaire.
- Results should be keyboard navigable.
- Roadmap controls must have clear button labels for add, move, and remove actions.
- Empty states should be useful, for example: "Try including paid resources" or "Broaden your region."
- Avoid UI cards inside cards. Results can be repeated cards; page sections should remain unframed.
- The mobile layout should stack form, results, and roadmap without horizontal overflow.

## SEO

Add page metadata for `/pathfinder`:

- Title: `STEM Pathfinder | Find Scholarships, Courses, and Communities`
- Description: `Answer a few private, no-login questions and get matched with scholarships, courses, communities, events, and career resources for women in STEM.`

The page should be linked from the main navigation and home page so crawlers and users can discover it.

## Testing and Verification

Local verification should include:

- `pnpm type-check`
- `pnpm lint`
- `pnpm build`
- Browser smoke test for `/pathfinder`
- Mobile viewport check for questionnaire, result cards, and roadmap panel
- Manual localStorage test: add item, reload page, confirm item persists, remove item

Scoring logic should be unit-testable as pure functions. If the project has no test runner, keep scoring functions small and validate them with focused TypeScript checks and manual browser scenarios for this version.

## Rollout

Build the first version as a focused feature:

1. Normalize catalog data.
2. Add deterministic scoring.
3. Build `/pathfinder` questionnaire and grouped matches.
4. Add local roadmap persistence.
5. Link it from navigation and home page.
6. Verify locally and push in small commits.

Future versions can add shareable roadmap images, GitHub-powered contribution loops, and optional resume matching without changing the privacy-first foundation.
