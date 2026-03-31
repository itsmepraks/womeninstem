# STEMSpark UI Redesign — Design Spec

**Date:** 2026-03-31
**Status:** Approved
**Mockups:** `.superpowers/brainstorm/85523-1774990146/content/06-full-design.html`

---

## Overview

Complete visual redesign of STEMSpark from dark glassmorphic book-themed UI to a warm, organic, human-feeling design that is welcoming for girls and women in STEM. The new design prioritizes readability, clear information hierarchy, and a distinctive aesthetic that doesn't look AI-generated.

## Design System

### Aesthetic: Warm Organic

Soft, sculptural, alive. Organic blob shapes in the background, overlapping cards at slight angles, warm gradients. Content has varied layouts — no two sections look cookie-cutter identical.

**Anti-AI design principles:**
- Asymmetric card layouts — each card has different content types (one has an accent bar, one has a quote, one has tags, one has a big number)
- Slight rotations on floating elements (1-3 degrees, varied per card)
- Organic background blobs with irregular border-radius (not circles)
- Mixed content density — spacious hero, dense features, focused spotlight moments
- Descriptive stat labels ("Mentors ready to help" not just "Mentors")
- Real testimonials embedded in context, not in a separate carousel

### Color Palette: Coral & Honey Warmth

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#fdf8f3` | Page background (lightest) |
| `--bg-warm` | `#fceee3` | Gradient mid-tone |
| `--bg-deep` | `#f7e4d4` | Gradient end, section backgrounds |
| `--text-heading` | `#3d2518` | Primary headings, nav logo |
| `--text-body` | `#6b5344` | Body text, descriptions |
| `--text-secondary` | `#8b6e5a` | Secondary text, subtitles |
| `--text-muted` | `#b8946c` | Labels, meta text, timestamps |
| `--accent-primary` | `#c47a52` | Coral accent — CTAs, links, highlights, italic headlines |
| `--accent-secondary` | `#e8976b` | Lighter coral — stats, badges |
| `--accent-gold` | `#f4c87a` | Honey — subtle accents, gradients |
| `--surface-white` | `#ffffff` | Card backgrounds |
| `--surface-dark` | `#3d2518` | Dark cards, footer CTA, community picks panel |
| `--surface-dark-text` | `#fceee3` | Text on dark surfaces |
| `--blob-coral` | `rgba(232,151,107,0.07)` | Background blob shapes |
| `--blob-gold` | `rgba(244,200,122,0.05)` | Background blob shapes |

### Typography

| Role | Font | Weight | Size (desktop) |
|------|------|--------|----------------|
| Display headline | Fraunces | 300 (light) | 56px |
| Display italic emphasis | Fraunces | 900 italic | 56px |
| Section heading | Fraunces | 500-600 | 32px |
| Card heading | Fraunces | 600-700 | 22-24px |
| Stat number | Fraunces | 700 | 40px |
| Body text | DM Sans | 400 | 18px, line-height 1.75 |
| Card body | DM Sans | 400 | 15px, line-height 1.7 |
| Nav items | DM Sans | 400 | 14px |
| Labels/meta | DM Sans | 400 | 11-12px, uppercase, letter-spacing 2px |
| Tags/badges | DM Sans | 400 | 11-12px |

**Key type decisions:**
- Body text is large (18px) for readability — this was a core requirement
- Fraunces at light weight (300) for main headlines gives elegance, heavy weight (900) italic for emphasis words gives punch
- DM Sans uppercase with wide letter-spacing for labels/categories creates hierarchy without needing bold

### Spacing & Layout

- Max content width: ~880px (not full-bleed)
- Page padding: 40px horizontal on desktop
- Section gap: 32-48px vertical
- Card border-radius: 20-22px (large, organic)
- Card padding: 28-36px (generous)
- Card shadows: `0 12px 40px rgba(92,58,46,0.06)` (warm-tinted, subtle)

### Components

**Organic background:** Linear gradient from `--bg-primary` → `--bg-warm` → `--bg-deep` at ~160deg, with 2-3 absolutely positioned blob divs using irregular `border-radius` (e.g., `60% 40% 55% 45%`) and slight `transform: rotate()`.

**Floating stat cards:** White cards with `box-shadow`, each with a different `transform: rotate()` between -2deg and +2.5deg. Not in a grid — positioned with absolute or flex with varying sizes. One dark card for testimonial.

**Feature blocks:** NOT a uniform grid. A mix of:
- Full-width card (Learning Hub — wide with number accent)
- Side-by-side cards of different widths (Connect ~60% + Organizations ~40%)
- One light card, one dark card, one with embedded testimonial, one with tags

**Pioneer spotlight:** White card, large border-radius, with a decorative blob inside. Letter initial in a circle instead of an emoji. "1 of 42 pioneers" counter.

**Nav:** Logo left (Fraunces, `stem·spark`), pill-shaped nav items center, dark "Join us" button right. Active state has light coral background pill.

**Buttons:** Primary = dark brown `#3d2518` with cream text, 32px border-radius. Secondary = text link with underline, coral color, `text-underline-offset: 4px`.

**Dark panels:** `#3d2518` background for contrast sections (Organizations card, Community Picks, footer CTA). Text uses `--surface-dark-text`.

---

## Site Map

```
Home        — Hero + stats + features + pioneer spotlight + CTA
Learning    — Editorial sections: courses by field, bootcamps, scholarships
Connect     — Mentor directory + interactive map + events + community
Resources   — Editorial curation: Open Now, Companies Hiring, Community Picks
About       — Mission, story, team
```

Consolidated from 6 chapters (book metaphor removed):
- Explore → absorbed into Home hero + feature overview
- Community + Mentorship → merged into Connect

### Home Page

1. **Nav bar** — `stem·spark` logo, Learning / Connect / Resources / About links, "Join us" CTA button
2. **Hero** — Large Fraunces headline "Every woman in STEM *changes the equation*" (italic emphasis rotated -1.5deg), body text at 18px, two CTAs (primary dark button + underlined coral link)
3. **Floating stat cards** — 3 cards at different angles: 500+ resources, 120+ mentors, dark testimonial card. Not a grid — overlapping, organic positioning
4. **"What you'll find here"** — Section heading + varied feature blocks:
   - Full-width Learning Hub card (white, with "42" number accent in organic circle shape)
   - Side-by-side: Connect card (white, with embedded testimonial quote) + Organizations card (dark, with field tags)
5. **Pioneer spotlight** — Horizontal card with initial letter circle, name, story excerpt, "Read her story" link, "1 of 42" counter
6. **Footer CTA** — "Ready to start?" centered with gradient background, "Join the community" button

### Resources Page

Editorial curation layout with three distinct sections:

1. **Hero** — "Resources *that matter*" headline, subtitle about curation
2. **Open Now** — Scholarship/deadline-driven items in stacked list cards. Each card: icon left, title + description center, deadline date right in coral. "View all 42 open scholarships →" link below
3. **Companies Hiring** — 3-column cards (company letter logo, name, description, "View roles →" link). Companies with specific women-in-STEM programs
4. **Community Picks** — Dark panel with two featured items side-by-side, tags below each (Free, Ages 15-18, etc.)

### Learning Page

Mix of consistent patterns + unique elements:

1. **Hero** — Same pattern as Resources (Fraunces headline + subtitle)
2. **Courses by field** — Grouped sections (CS, Engineering, Biotech, etc.) with course cards. Each field section has a different pioneer quote callout contextually placed ("Women who pioneered this field" — e.g., Grace Hopper next to CS)
3. **Scholarships spotlight** — Reuse "Open Now" pattern from Resources for active scholarships
4. **Bootcamps & programs** — Horizontal scrollable cards or stacked list format

### Connect Page

1. **Hero** — Headline about connection/mentorship
2. **Interactive map** — Leaflet map showing mentors/events/organizations by region. Map on left, region stats sidebar on right (similar to user's inspo image #2). Warm-tinted map tiles
3. **Find a mentor** — Mentor cards with field, availability, format (1-on-1, group, async)
4. **Upcoming events** — Timeline or list view of community events
5. **"Stand on their shoulders"** — Pioneers linked to modern mentors in the same field

### About Page

1. **Mission statement** — Large Fraunces type, personal tone
2. **The story** — Why STEMSpark exists, who built it
3. **By the numbers** — Reuse floating stat card pattern with site-wide impact numbers

---

## Pioneers Strategy

Pioneers are woven throughout the site, not isolated in a separate page:

- **Home:** Rotating spotlight card
- **Learning:** Contextual "pioneer of this field" callouts next to relevant topics
- **Resources:** Pioneer quote between editorial sections as visual breather
- **Connect:** "Stand on their shoulders" section linking pioneers to modern mentors

A "View all pioneers" link from any spotlight goes to a simple collection page (`/pioneers`) that lists all 42 stories.

---

## Interactive Map

Present on the Connect page. Uses Leaflet (already a dependency).

- Map centered on world view with warm-tinted tiles
- Colored dots for organizations, mentors, events (different sizes/colors per type)
- Click dots for detail popups
- Sidebar with region breakdown stats (like inspo image #2: North America 180+, Europe 120+, etc.)
- Filter by type (mentors, events, organizations)

---

## Migration from Current Design

### What's removed:
- Dark glassmorphic theme (black backgrounds, frosted glass)
- Book metaphor (BookReader, page-flip animations, chapter structure)
- 3D animations CSS (`globals-3d-animations.css`)
- Enhanced animations CSS (`globals-enhanced.css`)
- Zustand book store (page navigation, bookmarks, page history)
- react-pageflip dependency
- Emoji icons for features

### What's kept:
- Next.js 14 + App Router
- Tailwind CSS (reconfigured for new palette)
- Framer Motion (for organic entrance animations, blob movement)
- Leaflet / react-leaflet (for interactive map)
- Lucide React (for sparse icon usage in nav/UI)
- Content data structures (chapters.ts → pages/sections)
- All markdown content (PIONEERS.md, RESOURCES.md, CHALLENGES_AND_SOLUTIONS.md)

### What's new:
- Fraunces + DM Sans fonts (via next/font or Google Fonts)
- Warm organic color system in Tailwind config
- New page structure (Home, Learning, Connect, Resources, About)
- Editorial card components with varied layouts
- Pioneer spotlight component (reusable across pages)
- Dark panel component for contrast sections
- Floating stat card components with rotation
- Background blob components

---

## Technical Notes

- **Fonts:** Load Fraunces (variable, optical size 9-144) and DM Sans (variable, optical size 9-40) via `next/font/google` for optimal loading
- **Tailwind config:** Replace obsidian/frost/glass color tokens with new warm palette. Remove glass-specific utilities. Add organic border-radius values
- **Animations:** Subtle — entrance fades with stagger, slight parallax on blobs during scroll, hover lifts on cards. No page-flip or 3D transforms
- **Responsive:** Cards stack vertically on mobile. Floating stat cards become a horizontal scroll. Map goes full-width with stats below instead of sidebar
- **Accessibility:** All text meets WCAG AA contrast on warm backgrounds. Focus states use coral outline. Reduced motion preference disables blob animations
