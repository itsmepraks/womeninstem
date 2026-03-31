# STEMSpark UI Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the dark glassmorphic book-themed UI with a warm organic multi-page design using Coral & Honey palette, Fraunces + DM Sans typography, and editorial content layout.

**Architecture:** Complete visual overhaul — replace Tailwind config, CSS, layout, and all page components. Keep Next.js 14 App Router, Tailwind CSS, Framer Motion, and Leaflet. Remove book metaphor (BookReader, Zustand store, page-flip animations). Build 5 new pages (Home, Learning, Connect, Resources, About) with shared organic components.

**Tech Stack:** Next.js 14, Tailwind CSS, Framer Motion, Leaflet/react-leaflet, next/font/google (Fraunces + DM Sans), TypeScript

**Spec:** `docs/superpowers/specs/2026-03-31-ui-redesign-design.md`
**Mockups:** `.superpowers/brainstorm/85523-1774990146/content/06-full-design.html`

---

## File Structure

### New files to create:
```
app/globals.css                          — Complete rewrite (warm organic styles)
app/layout.tsx                           — Rewrite (new fonts, background, nav)
app/page.tsx                             — Rewrite (Home page)
app/learning/page.tsx                    — Rewrite (Learning page)
app/connect/page.tsx                     — New (merged Community + Mentorship)
app/resources/page.tsx                   — Rewrite (Resources page)
app/about/page.tsx                       — Rewrite (About page)
app/pioneers/page.tsx                    — New (Pioneer collection page)

components/layout/Nav.tsx                — New (warm organic nav bar)
components/layout/Footer.tsx             — Rewrite (warm organic footer)
components/layout/BackgroundBlobs.tsx     — New (organic blob background)

components/ui/StatCard.tsx               — New (floating stat card with rotation)
components/ui/PioneerSpotlight.tsx        — New (reusable pioneer spotlight)
components/ui/DarkPanel.tsx              — New (dark contrast section)
components/ui/SectionHeading.tsx         — New (Fraunces heading + subtitle)
components/ui/ResourceCard.tsx           — New (scholarship/resource list item)
components/ui/CompanyCard.tsx            — New (company card with letter logo)

data/navigation.ts                       — New (replaces chapter-based nav)
data/pioneers.ts                         — New (pioneer data for spotlights)
data/resources.ts                        — New (curated resource data)
data/stats.ts                            — New (site stats data)

lib/constants.ts                         — Rewrite (new site name, nav, etc.)
```

### Files to delete:
```
app/globals-enhanced.css
app/globals-3d-animations.css
app/explore/page.tsx
app/mentorship/page.tsx
app/community/page.tsx
app/demo/page.tsx
app/read/page.tsx

components/book/BookReader.tsx
components/book/pages/*                  — All book page components
components/ui/BookPage.tsx
components/layout/Header.tsx

lib/store/bookStore.ts
lib/bookHelpers.ts
lib/utils/sound.ts

data/chapters.ts
types/book.ts
```

### Files to modify:
```
tailwind.config.js                       — Replace color/font/animation tokens
lib/utils.ts                             — Keep cn(), remove book-specific utils
```

---

## Task 1: Replace Tailwind Config with Warm Organic Tokens

**Files:**
- Modify: `tailwind.config.js`

- [ ] **Step 1: Replace the entire tailwind.config.js**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#fdf8f3',
          warm: '#fceee3',
          deep: '#f7e4d4',
        },
        text: {
          heading: '#3d2518',
          body: '#6b5344',
          secondary: '#8b6e5a',
          muted: '#b8946c',
        },
        accent: {
          primary: '#c47a52',
          secondary: '#e8976b',
          gold: '#f4c87a',
        },
        surface: {
          white: '#ffffff',
          dark: '#3d2518',
          'dark-text': '#fceee3',
        },
        blob: {
          coral: 'rgba(232,151,107,0.07)',
          gold: 'rgba(244,200,122,0.05)',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.08', fontWeight: '300' }],
        'display': ['2rem', { lineHeight: '1.15', fontWeight: '500' }],
        'heading': ['1.375rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['0.9375rem', { lineHeight: '1.7' }],
        'label': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.125em', fontWeight: '400' }],
      },
      borderRadius: {
        'organic': '1.25rem',
        'organic-lg': '1.375rem',
        'pill': '2rem',
      },
      boxShadow: {
        'card': '0 12px 40px rgba(92,58,46,0.06)',
        'card-sm': '0 2px 12px rgba(92,58,46,0.03)',
        'card-hover': '0 20px 60px rgba(92,58,46,0.1)',
        'dark-card': '0 12px 40px rgba(92,58,46,0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'blob-drift': 'blobDrift 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blobDrift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(15px, -10px) rotate(3deg)' },
          '66%': { transform: 'translate(-10px, 8px) rotate(-2deg)' },
        },
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 2: Verify config is valid**

Run: `npx tailwindcss --help`
Expected: No parse errors. (We'll fully verify once we have pages using the tokens.)

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.js
git commit -m "feat: replace tailwind config with warm organic design tokens"
```

---

## Task 2: Replace globals.css with Warm Organic Base Styles

**Files:**
- Rewrite: `app/globals.css`
- Delete: `app/globals-enhanced.css`
- Delete: `app/globals-3d-animations.css`

- [ ] **Step 1: Delete old animation CSS files**

```bash
rm app/globals-enhanced.css app/globals-3d-animations.css
```

- [ ] **Step 2: Replace globals.css entirely**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font-dm-sans), system-ui, sans-serif;
    color: #6b5344;
    background: #fdf8f3;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-fraunces), Georgia, serif;
    color: #3d2518;
  }

  ::selection {
    background: rgba(196, 122, 82, 0.2);
    color: #3d2518;
  }
}

@layer components {
  /* Organic background gradient */
  .bg-organic {
    background: linear-gradient(160deg, #fdf8f3 0%, #fceee3 40%, #f7e4d4 100%);
  }

  /* Card styles */
  .card-white {
    background: #ffffff;
    border-radius: 1.25rem;
    box-shadow: 0 12px 40px rgba(92, 58, 46, 0.06);
  }

  .card-dark {
    background: #3d2518;
    border-radius: 1.25rem;
    color: #fceee3;
    box-shadow: 0 12px 40px rgba(92, 58, 46, 0.15);
  }

  /* Button styles */
  .btn-primary {
    display: inline-flex;
    align-items: center;
    background: #3d2518;
    color: #fdf8f3;
    padding: 0.75rem 2rem;
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 500;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(61, 37, 24, 0.2);
  }

  .btn-secondary {
    color: #c47a52;
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: color 0.2s;
  }

  .btn-secondary:hover {
    color: #e8976b;
  }

  /* Label/meta text */
  .text-label {
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 0.125em;
    color: #b8946c;
  }

  /* Accent underline — slightly tilted for organic feel */
  .accent-underline {
    width: 7.5rem;
    height: 3px;
    background: #c47a52;
    border-radius: 2px;
    opacity: 0.7;
    transform: rotate(-0.8deg);
  }
}

@layer utilities {
  /* Stagger animation delays */
  .delay-100 { animation-delay: 100ms; }
  .delay-200 { animation-delay: 200ms; }
  .delay-300 { animation-delay: 300ms; }
  .delay-400 { animation-delay: 400ms; }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add -A app/globals.css app/globals-enhanced.css app/globals-3d-animations.css
git commit -m "feat: replace CSS with warm organic base styles, remove old animation files"
```

---

## Task 3: New Data Files (Navigation, Pioneers, Resources, Stats)

**Files:**
- Create: `data/navigation.ts`
- Create: `data/pioneers.ts`
- Create: `data/resources.ts`
- Create: `data/stats.ts`
- Modify: `lib/constants.ts`

- [ ] **Step 1: Create data/navigation.ts**

```ts
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'learning', label: 'Learning', href: '/learning' },
  { id: 'connect', label: 'Connect', href: '/connect' },
  { id: 'resources', label: 'Resources', href: '/resources' },
  { id: 'about', label: 'About', href: '/about' },
];
```

- [ ] **Step 2: Create data/pioneers.ts**

```ts
export interface Pioneer {
  id: string;
  name: string;
  initial: string;
  title: string;
  description: string;
  field: string;
  link?: string;
}

export const pioneers: Pioneer[] = [
  {
    id: 'marie-curie',
    name: 'Marie Curie',
    initial: 'M',
    title: 'First woman to win a Nobel Prize',
    description:
      'Discovered radioactivity. Proved that brilliance has no gender — then won a second Nobel just to make sure everyone understood.',
    field: 'Physics & Chemistry',
  },
  {
    id: 'grace-hopper',
    name: 'Grace Hopper',
    initial: 'G',
    title: 'Pioneer of computer programming',
    description:
      'Invented the first compiler and popularized the idea of machine-independent programming languages. "The most dangerous phrase in the language is: we\'ve always done it this way."',
    field: 'Computer Science',
  },
  {
    id: 'chien-shiung-wu',
    name: 'Chien-Shiung Wu',
    initial: 'C',
    title: 'The First Lady of Physics',
    description:
      'Disproved the law of conservation of parity — an experiment so elegant it won the Nobel Prize, though only her male colleagues received it.',
    field: 'Physics',
  },
  {
    id: 'katherine-johnson',
    name: 'Katherine Johnson',
    initial: 'K',
    title: 'NASA mathematician who sent humans to the moon',
    description:
      'Her orbital trajectory calculations were so trusted that John Glenn refused to fly until she personally verified the computer\'s numbers.',
    field: 'Mathematics & Aerospace',
  },
  {
    id: 'rosalind-franklin',
    name: 'Rosalind Franklin',
    initial: 'R',
    title: 'Revealed the structure of DNA',
    description:
      'Her X-ray crystallography work produced Photo 51 — the image that unlocked the double helix. Recognition came decades after her death.',
    field: 'Chemistry & Biology',
  },
  {
    id: 'ada-lovelace',
    name: 'Ada Lovelace',
    initial: 'A',
    title: 'The world\'s first computer programmer',
    description:
      'Wrote the first algorithm intended to be processed by a machine, a full century before modern computers existed.',
    field: 'Computer Science & Mathematics',
  },
];

export function getRandomPioneer(): Pioneer {
  return pioneers[Math.floor(Math.random() * pioneers.length)];
}

export function getPioneerByField(field: string): Pioneer | undefined {
  return pioneers.find((p) => p.field.toLowerCase().includes(field.toLowerCase()));
}
```

- [ ] **Step 3: Create data/resources.ts**

```ts
export interface Scholarship {
  id: string;
  title: string;
  description: string;
  deadline: string;
  daysLeft: number;
}

export interface Company {
  id: string;
  name: string;
  initial: string;
  color: string;
  description: string;
}

export interface CommunityPick {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export const openScholarships: Scholarship[] = [
  {
    id: 'google-wie',
    title: 'Google Women in Engineering Scholarship',
    description: 'Full tuition + mentorship for undergraduate women in CS and engineering.',
    deadline: 'Apr 15',
    daysLeft: 15,
  },
  {
    id: 'adobe-fellowship',
    title: 'Adobe Research Women-in-Tech Fellowship',
    description: '$10,000 award + internship for women pursuing PhDs in CS-related fields.',
    deadline: 'May 1',
    daysLeft: 31,
  },
  {
    id: 'palantir-scholarship',
    title: 'Palantir Women in Technology Scholarship',
    description: '$10,000 scholarship for women in STEM pursuing undergraduate or graduate degrees.',
    deadline: 'May 15',
    daysLeft: 45,
  },
];

export const companiesHiring: Company[] = [
  {
    id: 'nasa-jpl',
    name: 'NASA JPL',
    initial: 'N',
    color: '#3d2518',
    description: '14 open roles specifically recruiting women in aerospace engineering.',
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    initial: 'M',
    color: '#c47a52',
    description: 'Women@Microsoft ERG — 8 mentorship tracks open for applications.',
  },
  {
    id: 'genentech',
    name: 'Genentech',
    initial: 'G',
    color: '#b8946c',
    description: 'Biotech leader with 48% women in research leadership roles.',
  },
];

export const communityPicks: CommunityPick[] = [
  {
    id: 'girls-who-code',
    title: 'Girls Who Code — Summer Programs',
    description:
      'Free 7-week immersive CS program for high school girls. Recommended by 89 community members.',
    tags: ['Free', 'Ages 15-18', 'In-person & virtual'],
  },
  {
    id: 'swe-conference',
    title: 'Society of Women Engineers — Annual Conference',
    description:
      "World's largest conference for women in engineering. Career fair, workshops, 300+ employers.",
    tags: ['October 2026', 'Networking'],
  },
];
```

- [ ] **Step 4: Create data/stats.ts**

```ts
export interface Stat {
  value: string;
  label: string;
  rotation: number;
}

export const siteStats: Stat[] = [
  { value: '500+', label: 'curated resources', rotation: -2 },
  { value: '120+', label: 'mentors ready', rotation: 1.2 },
];

export const testimonial = {
  quote:
    'I found my first research position through STEMSpark. The mentorship directory changed everything.',
  author: 'Priya',
  field: 'computational biology',
  rotation: 2.5,
};
```

- [ ] **Step 5: Update lib/constants.ts**

```ts
export const SITE_NAME = 'stem·spark';
export const SITE_DESCRIPTION =
  'Resources, mentors, and community for women in STEM.';
export const SITE_URL = 'https://stemspark.dev';

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/itsmepraks',
  github: 'https://github.com/itsmepraks',
  linkedin: 'https://linkedin.com/in/prakritibista',
  website: 'https://praks.me',
};

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;
```

- [ ] **Step 6: Commit**

```bash
git add data/navigation.ts data/pioneers.ts data/resources.ts data/stats.ts lib/constants.ts
git commit -m "feat: add new data files for navigation, pioneers, resources, and stats"
```

---

## Task 4: Shared UI Components

**Files:**
- Create: `components/ui/SectionHeading.tsx`
- Create: `components/ui/StatCard.tsx`
- Create: `components/ui/PioneerSpotlight.tsx`
- Create: `components/ui/DarkPanel.tsx`
- Create: `components/ui/ResourceCard.tsx`
- Create: `components/ui/CompanyCard.tsx`

- [ ] **Step 1: Create components/ui/SectionHeading.tsx**

```tsx
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: string;
}

export default function SectionHeading({ title, subtitle, accent }: SectionHeadingProps) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-3">
        <h2 className="font-display text-display text-text-heading">{title}</h2>
        {accent && <span className="text-sm font-body text-accent-primary">{accent}</span>}
      </div>
      {subtitle && (
        <p className="text-body-lg text-text-secondary mt-1">{subtitle}</p>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Create components/ui/StatCard.tsx**

```tsx
interface StatCardProps {
  value: string;
  label: string;
  detail?: string;
  rotation?: number;
  variant?: 'light' | 'dark';
}

export default function StatCard({
  value,
  label,
  detail,
  rotation = 0,
  variant = 'light',
}: StatCardProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`rounded-organic-lg p-7 ${
        isDark ? 'card-dark' : 'card-white'
      }`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className={`font-display text-[2.5rem] font-bold leading-none ${
          isDark ? 'text-surface-dark-text' : 'text-accent-primary'
        }`}
      >
        {value}
      </div>
      <div
        className={`text-body mt-1 ${
          isDark ? 'text-surface-dark-text/60' : 'text-text-body'
        }`}
      >
        {label}
      </div>
      {detail && (
        <div
          className={`text-xs mt-3 ${
            isDark ? 'text-surface-dark-text/40' : 'text-text-muted'
          }`}
        >
          {detail}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 3: Create components/ui/PioneerSpotlight.tsx**

```tsx
import type { Pioneer } from '@/data/pioneers';

interface PioneerSpotlightProps {
  pioneer: Pioneer;
  totalCount?: number;
  index?: number;
}

export default function PioneerSpotlight({
  pioneer,
  totalCount = 42,
  index = 1,
}: PioneerSpotlightProps) {
  return (
    <div className="card-white p-9 flex items-center gap-7 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-accent-gold/[0.06]" />

      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-bg-warm to-bg-deep flex-shrink-0 flex items-center justify-center">
        <span className="font-display text-[2rem] text-accent-primary">
          {pioneer.initial}
        </span>
      </div>

      <div className="flex-1 relative z-[1]">
        <p className="text-label mb-1.5">Pioneer Spotlight</p>
        <h3 className="font-display text-heading text-text-heading">
          {pioneer.name}
        </h3>
        <p className="text-body text-text-body mt-1.5 leading-relaxed">
          {pioneer.description}
        </p>
      </div>

      <div className="flex-shrink-0 text-right">
        <span className="text-sm text-accent-primary font-medium underline underline-offset-4 cursor-pointer hover:text-accent-secondary transition-colors">
          Read her story
        </span>
        <p className="text-xs text-text-muted mt-1.5">
          {index} of {totalCount} pioneers
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Create components/ui/DarkPanel.tsx**

```tsx
interface DarkPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function DarkPanel({ children, className = '' }: DarkPanelProps) {
  return (
    <div className={`card-dark p-8 ${className}`}>
      {children}
    </div>
  );
}
```

- [ ] **Step 5: Create components/ui/ResourceCard.tsx**

```tsx
interface ResourceCardProps {
  title: string;
  description: string;
  deadline?: string;
  daysLeft?: number;
}

export default function ResourceCard({
  title,
  description,
  deadline,
  daysLeft,
}: ResourceCardProps) {
  return (
    <div className="card-white p-6 flex items-center gap-5">
      <div className="w-13 h-13 rounded-[0.875rem] bg-gradient-to-br from-accent-secondary/10 to-accent-gold/10 flex-shrink-0 flex items-center justify-content-center">
        <span className="font-display text-xl text-accent-primary w-full text-center">$</span>
      </div>
      <div className="flex-1">
        <h3 className="text-[1.0625rem] font-semibold text-text-heading mb-0.5">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
      {deadline && (
        <div className="flex-shrink-0 text-right">
          <div className="text-sm font-semibold text-accent-primary">{deadline}</div>
          {daysLeft !== undefined && (
            <div className="text-xs text-text-muted">{daysLeft} days left</div>
          )}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 6: Create components/ui/CompanyCard.tsx**

```tsx
interface CompanyCardProps {
  name: string;
  initial: string;
  color: string;
  description: string;
}

export default function CompanyCard({ name, initial, color, description }: CompanyCardProps) {
  return (
    <div className="card-white p-6">
      <div className="flex items-center gap-2.5 mb-3">
        <div
          className="w-9 h-9 rounded-[0.625rem] flex items-center justify-center text-sm font-bold text-white"
          style={{ background: color }}
        >
          {initial}
        </div>
        <h3 className="text-base font-semibold text-text-heading">{name}</h3>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      <span className="inline-block mt-2.5 text-xs text-accent-primary font-medium cursor-pointer hover:text-accent-secondary transition-colors">
        View roles →
      </span>
    </div>
  );
}
```

- [ ] **Step 7: Commit**

```bash
git add components/ui/SectionHeading.tsx components/ui/StatCard.tsx components/ui/PioneerSpotlight.tsx components/ui/DarkPanel.tsx components/ui/ResourceCard.tsx components/ui/CompanyCard.tsx
git commit -m "feat: add shared UI components for warm organic design"
```

---

## Task 5: Layout Components (Nav, Footer, BackgroundBlobs)

**Files:**
- Create: `components/layout/Nav.tsx`
- Create: `components/layout/BackgroundBlobs.tsx`
- Rewrite: `components/layout/Footer.tsx`

- [ ] **Step 1: Create components/layout/BackgroundBlobs.tsx**

```tsx
export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="bg-organic absolute inset-0" />
      <div
        className="absolute -top-20 -right-16 w-[400px] h-[400px] bg-blob-coral animate-blob-drift"
        style={{ borderRadius: '60% 40% 55% 45%', transform: 'rotate(-12deg)' }}
      />
      <div
        className="absolute top-[300px] -left-24 w-[350px] h-[280px] bg-blob-gold animate-blob-drift"
        style={{
          borderRadius: '45% 55% 60% 40%',
          transform: 'rotate(8deg)',
          animationDelay: '-7s',
        }}
      />
      <div
        className="absolute -bottom-16 right-24 w-[250px] h-[250px] bg-blob-coral/50 animate-blob-drift"
        style={{
          borderRadius: '50% 50% 40% 60%',
          transform: 'rotate(-5deg)',
          animationDelay: '-13s',
        }}
      />
    </div>
  );
}
```

- [ ] **Step 2: Create components/layout/Nav.tsx**

```tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/data/navigation';
import { SITE_NAME } from '@/lib/constants';

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative z-20 flex items-center justify-between px-6 md:px-10 py-5">
      {/* Logo */}
      <Link href="/" className="font-display text-2xl text-text-heading font-medium">
        {SITE_NAME}
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-1.5">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`text-sm px-4 py-2.5 rounded-3xl transition-colors ${
                isActive
                  ? 'bg-accent-secondary/10 text-accent-primary font-medium'
                  : 'text-text-body hover:text-text-heading'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/connect"
          className="ml-2 text-sm px-5 py-2.5 rounded-3xl bg-surface-dark text-bg-primary font-medium hover:bg-text-heading transition-colors"
        >
          Join us
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden p-2 text-text-heading"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-primary/95 backdrop-blur-md border-b border-accent-primary/5 p-6 flex flex-col gap-2 md:hidden z-50">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-base text-text-body py-2 hover:text-text-heading transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/connect"
            className="btn-primary text-center mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Join us
          </Link>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 3: Rewrite components/layout/Footer.tsx**

```tsx
import Link from 'next/link';
import { SITE_NAME, SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-accent-primary/5 mt-16">
      <div className="max-w-[880px] mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <span className="font-display text-xl text-text-heading font-medium">
              {SITE_NAME}
            </span>
            <p className="text-sm text-text-secondary mt-2 max-w-xs">
              Resources, mentors, and community for women building the future of STEM.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-label mb-3">Pages</p>
              <div className="flex flex-col gap-2">
                <Link href="/learning" className="text-sm text-text-body hover:text-text-heading transition-colors">Learning</Link>
                <Link href="/connect" className="text-sm text-text-body hover:text-text-heading transition-colors">Connect</Link>
                <Link href="/resources" className="text-sm text-text-body hover:text-text-heading transition-colors">Resources</Link>
                <Link href="/about" className="text-sm text-text-body hover:text-text-heading transition-colors">About</Link>
              </div>
            </div>
            <div>
              <p className="text-label mb-3">Social</p>
              <div className="flex flex-col gap-2">
                <a href={SOCIAL_LINKS.twitter} className="text-sm text-text-body hover:text-text-heading transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href={SOCIAL_LINKS.github} className="text-sm text-text-body hover:text-text-heading transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={SOCIAL_LINKS.linkedin} className="text-sm text-text-body hover:text-text-heading transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-text-muted mt-10">
          Built with care by{' '}
          <a href={SOCIAL_LINKS.website} className="underline underline-offset-2 hover:text-text-secondary transition-colors" target="_blank" rel="noopener noreferrer">
            Prakriti Bista
          </a>
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/layout/BackgroundBlobs.tsx components/layout/Nav.tsx components/layout/Footer.tsx
git commit -m "feat: add warm organic layout components (Nav, Footer, BackgroundBlobs)"
```

---

## Task 6: Root Layout

**Files:**
- Rewrite: `app/layout.tsx`

- [ ] **Step 1: Replace app/layout.tsx**

```tsx
import type { Metadata } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import BackgroundBlobs from '@/components/layout/BackgroundBlobs';
import 'leaflet/dist/leaflet.css';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'stem·spark — Resources, Mentors & Community for Women in STEM',
  description:
    'Resources, mentors, and a supportive community — everything you need to start and grow your career in science and technology.',
  keywords: ['STEM', 'women in STEM', 'resources', 'mentorship', 'community', 'scholarships'],
  authors: [{ name: 'Prakriti Bista', url: 'https://praks.me' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased min-h-screen">
        <BackgroundBlobs />
        <Nav />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`
Expected: Build may have import errors from old pages — that's fine, we'll replace them next. The layout itself should parse.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: replace root layout with warm organic design (Fraunces + DM Sans)"
```

---

## Task 7: Home Page

**Files:**
- Rewrite: `app/page.tsx`

- [ ] **Step 1: Replace app/page.tsx with the full Home page**

```tsx
import Link from 'next/link';
import StatCard from '@/components/ui/StatCard';
import PioneerSpotlight from '@/components/ui/PioneerSpotlight';
import { siteStats, testimonial } from '@/data/stats';
import { pioneers } from '@/data/pioneers';

export default function HomePage() {
  const spotlightPioneer = pioneers[0]; // Marie Curie as default

  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* ─── HERO ─── */}
      <section className="pt-16 md:pt-24 pb-10 max-w-[640px]">
        <p className="text-label text-accent-primary font-semibold mb-3.5 tracking-[0.19em]">
          For women who build the future
        </p>
        <h1 className="font-display text-display-lg text-text-heading mb-1.5">
          Every woman in STEM{' '}
          <em className="font-black text-accent-primary inline-block -rotate-[1.5deg]">
            changes the equation
          </em>
        </h1>
        <div className="accent-underline mt-4 mb-5" />
        <p className="text-body-lg text-text-body max-w-[460px] mb-8">
          Resources, mentors, and community. We bring it all together so you can
          focus on what matters — your work.
        </p>
        <div className="flex items-center gap-3.5">
          <Link href="/resources" className="btn-primary">
            Explore resources
          </Link>
          <Link href="/about" className="btn-secondary">
            How it works
          </Link>
        </div>
      </section>

      {/* ─── FLOATING STAT CARDS ─── */}
      <section className="relative h-[240px] md:h-[220px] mb-5">
        <div className="absolute left-0 top-2.5 w-[240px]">
          <StatCard
            value={siteStats[0].value}
            label={siteStats[0].label}
            detail="Courses · Scholarships · Programs"
            rotation={siteStats[0].rotation}
          />
        </div>
        <div className="absolute left-[270px] top-7 w-[220px] hidden md:block">
          <StatCard
            value={siteStats[1].value}
            label={siteStats[1].label}
            detail="1-on-1 · Group · Async"
            rotation={siteStats[1].rotation}
          />
        </div>
        <div
          className="absolute right-0 top-0 w-[280px] hidden md:block card-dark p-7"
          style={{ transform: `rotate(${testimonial.rotation}deg)` }}
        >
          <p className="font-display text-[1.0625rem] text-surface-dark-text/80 leading-relaxed italic">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <p className="text-sm text-surface-dark-text/45 mt-3">
            — {testimonial.author}, {testimonial.field}
          </p>
        </div>
      </section>

      {/* ─── WHAT YOU'LL FIND HERE ─── */}
      <section className="pt-12 pb-2">
        <h2 className="font-display text-display text-text-heading mb-1.5">
          What you&apos;ll find here
        </h2>
        <p className="text-body-lg text-text-secondary">
          Everything is curated by women who&apos;ve been where you are.
        </p>
      </section>

      {/* Feature blocks — varied layout, NOT a grid */}
      <section className="space-y-4 py-6">
        {/* Full-width: Learning Hub */}
        <div className="card-white p-8 flex items-center gap-8">
          <div className="flex-1">
            <h3 className="font-display text-heading text-text-heading mb-2">
              Learning Hub
            </h3>
            <p className="text-body text-text-body leading-relaxed">
              Courses, bootcamps, and scholarships from institutions that care
              about diversity. Filtered by field, level, and deadline so you find
              what&apos;s relevant — not everything that exists.
            </p>
            <Link
              href="/learning"
              className="inline-block mt-3 text-sm text-accent-primary font-semibold hover:text-accent-secondary transition-colors"
            >
              Browse courses →
            </Link>
          </div>
          <div className="w-24 h-24 rounded-[50%_50%_50%_20%] bg-gradient-to-br from-accent-secondary/10 to-accent-gold/15 flex-shrink-0 flex items-center justify-center">
            <span className="font-display text-4xl text-accent-primary font-light">
              42
            </span>
          </div>
        </div>

        {/* Side-by-side: Connect + Organizations */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Connect — light card with quote */}
          <div className="card-white p-8 flex-[1.2]">
            <h3 className="font-display text-heading text-text-heading mb-2">
              Connect
            </h3>
            <p className="text-body text-text-body leading-relaxed">
              Find a mentor who gets it. Join study groups. Attend events. Your
              network is your superpower — we just make it easier to build.
            </p>
            <div className="mt-4 p-3.5 bg-accent-secondary/[0.04] rounded-[0.875rem]">
              <p className="text-xs text-text-muted italic">
                &ldquo;My mentor helped me negotiate a 40% raise. I didn&apos;t
                even know I was underpaid.&rdquo;
              </p>
              <p className="text-[0.6875rem] text-text-muted/70 mt-1">
                — Sarah, data science
              </p>
            </div>
          </div>

          {/* Organizations — dark card with tags */}
          <div className="card-dark p-8 flex-[0.8] flex flex-col justify-between">
            <div>
              <h3 className="font-display text-heading text-surface-dark-text mb-2">
                Organizations
              </h3>
              <p className="text-body text-surface-dark-text/60 leading-relaxed">
                50+ companies and nonprofits that walk the talk on supporting
                women in STEM.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Tech', 'Biotech', 'Research', 'Engineering', 'Aerospace'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-surface-dark-text/[0.06] text-surface-dark-text/50 px-3 py-1 rounded-[0.875rem] text-xs"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PIONEER SPOTLIGHT ─── */}
      <section className="py-8">
        <PioneerSpotlight pioneer={spotlightPioneer} />
      </section>

      {/* ─── FOOTER CTA ─── */}
      <section className="py-14 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-secondary/[0.03] rounded-3xl" />
        <div className="relative z-[1]">
          <h2 className="font-display text-[2.25rem] text-text-heading font-light mb-3">
            Ready to start?
          </h2>
          <p className="text-body-lg text-text-secondary mb-7">
            Join thousands of women discovering their place in STEM.
          </p>
          <Link href="/connect" className="btn-primary text-base">
            Join the community
          </Link>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: build warm organic home page with hero, stats, features, pioneer spotlight"
```

---

## Task 8: Resources Page

**Files:**
- Rewrite: `app/resources/page.tsx`

- [ ] **Step 1: Replace app/resources/page.tsx**

```tsx
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ResourceCard from '@/components/ui/ResourceCard';
import CompanyCard from '@/components/ui/CompanyCard';
import DarkPanel from '@/components/ui/DarkPanel';
import { openScholarships, companiesHiring, communityPicks } from '@/data/resources';

export default function ResourcesPage() {
  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          Resources <em className="italic text-accent-primary">that matter</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[500px]">
          Curated by women in the field. Updated weekly. No fluff — just
          opportunities worth your time.
        </p>
      </section>

      {/* Open Now */}
      <section className="pb-10">
        <SectionHeading title="Open Now" accent="Deadlines approaching" />
        <div className="space-y-3">
          {openScholarships.map((s) => (
            <ResourceCard
              key={s.id}
              title={s.title}
              description={s.description}
              deadline={s.deadline}
              daysLeft={s.daysLeft}
            />
          ))}
        </div>
        <Link
          href="#"
          className="inline-block mt-4 text-sm text-accent-primary font-medium underline underline-offset-4 hover:text-accent-secondary transition-colors"
        >
          View all 42 open scholarships →
        </Link>
      </section>

      {/* Companies Hiring */}
      <section className="pb-10">
        <SectionHeading
          title="Companies Hiring"
          subtitle="With strong women-in-STEM programs"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {companiesHiring.map((c) => (
            <CompanyCard
              key={c.id}
              name={c.name}
              initial={c.initial}
              color={c.color}
              description={c.description}
            />
          ))}
        </div>
      </section>

      {/* Community Picks */}
      <section className="pb-10">
        <SectionHeading
          title="Community Picks"
          subtitle="Recommended by members"
        />
        <DarkPanel className="flex flex-col md:flex-row gap-6">
          {communityPicks.map((pick, i) => (
            <div
              key={pick.id}
              className={`flex-1 ${
                i < communityPicks.length - 1
                  ? 'md:border-r md:border-surface-dark-text/[0.06] md:pr-6'
                  : ''
              }`}
            >
              <h3 className="font-display text-lg text-surface-dark-text font-medium mb-2">
                {pick.title}
              </h3>
              <p className="text-sm text-surface-dark-text/60 leading-relaxed mb-3">
                {pick.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {pick.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-dark-text/[0.06] text-surface-dark-text/50 px-3.5 py-1 rounded-[0.875rem] text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </DarkPanel>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/resources/page.tsx
git commit -m "feat: build resources page with editorial curation (Open Now, Companies, Community Picks)"
```

---

## Task 9: Learning Page

**Files:**
- Rewrite: `app/learning/page.tsx`

- [ ] **Step 1: Replace app/learning/page.tsx**

```tsx
import SectionHeading from '@/components/ui/SectionHeading';
import ResourceCard from '@/components/ui/ResourceCard';
import { openScholarships } from '@/data/resources';
import { getPioneerByField } from '@/data/pioneers';

const fields = [
  {
    name: 'Computer Science',
    courses: [
      'Harvard CS50 — Introduction to Computer Science (Free)',
      'Stanford Machine Learning — Andrew Ng (Free)',
      'freeCodeCamp — Full Stack Web Development (Free)',
    ],
  },
  {
    name: 'Engineering',
    courses: [
      'MIT OpenCourseWare — Mechanical Engineering (Free)',
      'Coursera — Engineering Project Management',
      'edX — Environmental Engineering MicroMasters',
    ],
  },
  {
    name: 'Biotech & Life Sciences',
    courses: [
      'Coursera — Genomic Data Science Specialization',
      'edX — Principles of Biochemistry',
      'Khan Academy — Biology (Free)',
    ],
  },
];

export default function LearningPage() {
  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          Learn <em className="italic text-accent-primary">without limits</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[500px]">
          Courses, bootcamps, and scholarships — organized by field, filtered by
          what actually matters to you.
        </p>
      </section>

      {/* Courses by field */}
      {fields.map((field) => {
        const pioneer = getPioneerByField(field.name);
        return (
          <section key={field.name} className="pb-10">
            <SectionHeading title={field.name} />
            <div className="space-y-2.5">
              {field.courses.map((course) => (
                <div key={course} className="card-white p-5 flex items-center justify-between">
                  <span className="text-body text-text-heading font-medium">{course}</span>
                  <span className="text-xs text-accent-primary font-medium cursor-pointer hover:text-accent-secondary transition-colors flex-shrink-0 ml-4">
                    View →
                  </span>
                </div>
              ))}
            </div>
            {/* Contextual pioneer callout */}
            {pioneer && (
              <div className="mt-4 p-5 bg-accent-gold/[0.04] rounded-organic border border-accent-gold/[0.08]">
                <p className="text-label text-accent-primary mb-1.5">
                  Pioneer of {field.name}
                </p>
                <p className="text-sm text-text-body">
                  <strong className="text-text-heading">{pioneer.name}</strong>{' '}
                  — {pioneer.title}
                </p>
              </div>
            )}
          </section>
        );
      })}

      {/* Scholarships spotlight */}
      <section className="pb-10">
        <SectionHeading title="Scholarships Open Now" accent="Apply before they close" />
        <div className="space-y-3">
          {openScholarships.slice(0, 2).map((s) => (
            <ResourceCard
              key={s.id}
              title={s.title}
              description={s.description}
              deadline={s.deadline}
              daysLeft={s.daysLeft}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/learning/page.tsx
git commit -m "feat: build learning page with courses by field and pioneer callouts"
```

---

## Task 10: Connect Page (with Interactive Map)

**Files:**
- Create: `app/connect/page.tsx`

- [ ] **Step 1: Create app/connect/page.tsx**

```tsx
'use client';

import dynamic from 'next/dynamic';
import SectionHeading from '@/components/ui/SectionHeading';
import DarkPanel from '@/components/ui/DarkPanel';
import { pioneers } from '@/data/pioneers';

// Leaflet must be loaded client-side only
const ConnectMap = dynamic(() => import('./ConnectMap'), { ssr: false });

const mentors = [
  { name: 'Dr. Amara Osei', field: 'AI & Machine Learning', format: '1-on-1', available: true },
  { name: 'Jessica Chen', field: 'Biomedical Engineering', format: 'Group', available: true },
  { name: 'Priya Sharma', field: 'Data Science', format: 'Async', available: false },
];

const events = [
  { title: 'Virtual Coffee Chat — Women in AI', date: 'Apr 5, 2026', type: 'Virtual' },
  { title: 'SWE Regional Meetup — Bay Area', date: 'Apr 12, 2026', type: 'In-person' },
  { title: 'Resume Workshop with Google Engineers', date: 'Apr 18, 2026', type: 'Virtual' },
];

const regionStats = [
  { region: 'North America', count: '180+' },
  { region: 'Europe', count: '120+' },
  { region: 'Asia Pacific', count: '90+' },
  { region: 'Global Remote', count: '110+' },
];

export default function ConnectPage() {
  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          You don&apos;t have to{' '}
          <em className="italic text-accent-primary">do it alone</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[500px]">
          Find mentors, attend events, and join a community of women who
          understand the journey.
        </p>
      </section>

      {/* Interactive Map */}
      <section className="pb-10">
        <SectionHeading
          title="Global Impact"
          subtitle="Women in STEM worldwide"
        />
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-[1.2] rounded-organic overflow-hidden h-[320px]">
            <ConnectMap />
          </div>
          <div className="flex-[0.8]">
            <div className="card-white p-5">
              <p className="text-label mb-3">Top Regions</p>
              <div className="space-y-0">
                {regionStats.map((r, i) => (
                  <div
                    key={r.region}
                    className={`flex justify-between py-2.5 text-sm ${
                      i < regionStats.length - 1
                        ? 'border-b border-accent-primary/[0.05]'
                        : ''
                    }`}
                  >
                    <span className="text-text-heading font-semibold">{r.region}</span>
                    <span className="text-accent-primary font-bold">{r.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find a Mentor */}
      <section className="pb-10">
        <SectionHeading title="Find a Mentor" accent="Real people, real advice" />
        <div className="space-y-3">
          {mentors.map((m) => (
            <div key={m.name} className="card-white p-6 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-text-heading">{m.name}</h3>
                <p className="text-sm text-text-secondary mt-0.5">{m.field}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs bg-accent-secondary/10 text-accent-primary px-3 py-1 rounded-pill">
                  {m.format}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    m.available ? 'bg-green-500' : 'bg-text-muted/40'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="pb-10">
        <SectionHeading title="Upcoming Events" />
        <div className="space-y-2.5">
          {events.map((e) => (
            <div key={e.title} className="card-white p-5 flex items-center justify-between">
              <div>
                <h3 className="text-body text-text-heading font-medium">{e.title}</h3>
                <p className="text-xs text-text-muted mt-1">{e.date}</p>
              </div>
              <span className="text-xs bg-accent-gold/10 text-text-muted px-3 py-1 rounded-pill">
                {e.type}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Stand on Their Shoulders */}
      <section className="pb-10">
        <SectionHeading
          title="Stand on their shoulders"
          subtitle="Pioneers linked to modern mentors"
        />
        <DarkPanel className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pioneers.slice(0, 2).map((p) => (
            <div key={p.id}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-surface-dark-text/10 flex items-center justify-center text-surface-dark-text/60 font-display text-lg">
                  {p.initial}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-surface-dark-text">{p.name}</h4>
                  <p className="text-xs text-surface-dark-text/40">{p.field}</p>
                </div>
              </div>
              <p className="text-sm text-surface-dark-text/60 leading-relaxed">
                {p.title}
              </p>
            </div>
          ))}
        </DarkPanel>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Create app/connect/ConnectMap.tsx**

```tsx
'use client';

import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

const markers = [
  { lat: 37.77, lng: -122.42, label: 'San Francisco', size: 14, color: '#e8976b' },
  { lat: 51.51, lng: -0.13, label: 'London', size: 12, color: '#c47a52' },
  { lat: 35.68, lng: 139.69, label: 'Tokyo', size: 10, color: '#f4c87a' },
  { lat: 1.35, lng: 103.82, label: 'Singapore', size: 8, color: '#e8976b' },
  { lat: 48.86, lng: 2.35, label: 'Paris', size: 10, color: '#c47a52' },
  { lat: -33.87, lng: 151.21, label: 'Sydney', size: 8, color: '#f4c87a' },
  { lat: 40.71, lng: -74.01, label: 'New York', size: 14, color: '#e8976b' },
  { lat: 19.08, lng: 72.88, label: 'Mumbai', size: 12, color: '#c47a52' },
  { lat: 52.52, lng: 13.4, label: 'Berlin', size: 10, color: '#e8976b' },
  { lat: -23.55, lng: -46.63, label: 'São Paulo', size: 8, color: '#f4c87a' },
];

export default function ConnectMap() {
  return (
    <MapContainer
      center={[25, 10]}
      zoom={2}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%', borderRadius: '1.25rem' }}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {markers.map((m) => (
        <CircleMarker
          key={m.label}
          center={[m.lat, m.lng]}
          radius={m.size}
          pathOptions={{
            color: 'transparent',
            fillColor: m.color,
            fillOpacity: 0.5,
          }}
        >
          <Popup>
            <span className="font-body text-sm text-text-heading font-medium">
              {m.label}
            </span>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/connect/page.tsx app/connect/ConnectMap.tsx
git commit -m "feat: build connect page with interactive map, mentors, events, and pioneers"
```

---

## Task 11: About Page

**Files:**
- Rewrite: `app/about/page.tsx`

- [ ] **Step 1: Replace app/about/page.tsx**

```tsx
import StatCard from '@/components/ui/StatCard';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* Mission */}
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight max-w-[600px]">
          Built by a woman in STEM,{' '}
          <em className="italic text-accent-primary">for women in STEM</em>
        </h1>
        <p className="text-body-lg text-text-body mt-4 max-w-[540px] leading-relaxed">
          STEMSpark started because finding resources, mentors, and community as
          a woman in tech shouldn&apos;t require 47 browser tabs. Everything you
          need, in one place, curated by people who understand the journey.
        </p>
      </section>

      {/* The Story */}
      <section className="pb-10">
        <div className="card-white p-8 md:p-10">
          <h2 className="font-display text-display text-text-heading mb-4">
            The story
          </h2>
          <div className="space-y-4 text-body text-text-body leading-relaxed">
            <p>
              When I started my career in tech, the hardest part wasn&apos;t the
              code — it was feeling like I was the only one navigating it.
              Scholarships existed but were buried. Mentors existed but were hard
              to find. Communities existed but were scattered across platforms.
            </p>
            <p>
              STEMSpark is the resource I wish I had. A single, curated hub
              where women at any stage — students, career changers, senior
              professionals — can find what they need without the noise.
            </p>
            <p>
              Every resource is vetted. Every mentor is real. Every piece of
              content is written with the belief that the next breakthrough in
              science will come from someone who almost didn&apos;t think she
              belonged.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-accent-primary/[0.06]">
            <p className="text-sm text-text-heading font-semibold">Prakriti Bista</p>
            <p className="text-xs text-text-muted mt-0.5">
              Builder ·{' '}
              <a
                href={SOCIAL_LINKS.website}
                className="text-accent-primary underline underline-offset-2 hover:text-accent-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                praks.me
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="pb-10">
        <h2 className="font-display text-display text-text-heading mb-6">
          By the numbers
        </h2>
        <div className="relative h-[200px]">
          <div className="absolute left-0 top-0 w-[200px]">
            <StatCard value="500+" label="resources curated" rotation={-1.5} />
          </div>
          <div className="absolute left-[220px] top-5 w-[200px] hidden md:block">
            <StatCard value="120+" label="mentors in the network" rotation={1} />
          </div>
          <div className="absolute right-0 top-2 w-[200px] hidden md:block">
            <StatCard value="50+" label="partner organizations" rotation={2} />
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: build about page with mission, story, and floating stat cards"
```

---

## Task 12: Pioneers Collection Page

**Files:**
- Create: `app/pioneers/page.tsx`

- [ ] **Step 1: Create app/pioneers/page.tsx**

```tsx
import PioneerSpotlight from '@/components/ui/PioneerSpotlight';
import { pioneers } from '@/data/pioneers';

export default function PioneersPage() {
  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          Pioneers <em className="italic text-accent-primary">who led the way</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[500px]">
          The women who proved that science has no gender. Their stories are the
          foundation everything here is built on.
        </p>
      </section>

      <section className="space-y-4 pb-10">
        {pioneers.map((pioneer, i) => (
          <PioneerSpotlight
            key={pioneer.id}
            pioneer={pioneer}
            totalCount={pioneers.length}
            index={i + 1}
          />
        ))}
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/pioneers/page.tsx
git commit -m "feat: add pioneers collection page"
```

---

## Task 13: Remove Old Book System & Unused Files

**Files:**
- Delete: all files listed in "Files to delete" section above

- [ ] **Step 1: Remove old book components and pages**

```bash
rm -rf components/book
rm components/ui/BookPage.tsx
rm components/layout/Header.tsx
rm lib/store/bookStore.ts
rm lib/bookHelpers.ts
rm lib/utils/sound.ts
rm data/chapters.ts
rm types/book.ts
```

- [ ] **Step 2: Remove old route pages that are no longer needed**

```bash
rm -rf app/explore
rm -rf app/mentorship
rm -rf app/community
rm -rf app/demo
rm -rf app/read
```

- [ ] **Step 3: Update components/ui/index.ts barrel export**

```ts
export { default as Button } from './Button';
export { default as Card } from './Card';
export { default as Badge } from './Badge';
export { default as Container } from './Container';
export { default as Loading } from './Loading';
export { default as StatCard } from './StatCard';
export { default as PioneerSpotlight } from './PioneerSpotlight';
export { default as DarkPanel } from './DarkPanel';
export { default as SectionHeading } from './SectionHeading';
export { default as ResourceCard } from './ResourceCard';
export { default as CompanyCard } from './CompanyCard';
```

- [ ] **Step 4: Update components/layout/index.ts barrel export**

```ts
export { default as Nav } from './Nav';
export { default as Footer } from './Footer';
export { default as BackgroundBlobs } from './BackgroundBlobs';
```

- [ ] **Step 5: Clean up lib/utils.ts — remove book-specific imports if any**

Read `lib/utils.ts` first. Keep `cn()`, `formatDate()`, `truncate()`, `slugify()`, `delay()`, `isClient()`, `getInitials()`. Remove `calculateReadingTime()` only if nothing else uses it.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: remove old book system, glassmorphic components, and unused route pages"
```

---

## Task 14: Build Verification

- [ ] **Step 1: Run the build**

Run: `pnpm build 2>&1 | tail -30`
Expected: Successful build with no errors. Warnings about unused variables are acceptable.

- [ ] **Step 2: Fix any build errors**

Common issues:
- Missing imports: check all `@/data/*` and `@/components/*` imports resolve correctly
- Unused imports in old files: check `lib/utils.ts` for references to deleted modules
- Type errors: ensure all props match their interfaces

- [ ] **Step 3: Start dev server and visually verify**

Run: `pnpm dev`

Check each page in browser:
- `/` — Hero, floating stat cards, features, pioneer spotlight, CTA
- `/learning` — Courses by field with pioneer callouts
- `/connect` — Map renders, mentor cards, events
- `/resources` — Open Now, Companies Hiring, Community Picks
- `/about` — Mission, story, floating stat cards
- `/pioneers` — Pioneer list renders

- [ ] **Step 4: Commit any fixes**

```bash
git add -A
git commit -m "fix: resolve build errors from redesign migration"
```

---

## Task 15: Add .gitignore entry for brainstorm files

- [ ] **Step 1: Add .superpowers/ to .gitignore**

Append to `.gitignore`:
```
.superpowers/
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: add .superpowers/ to gitignore"
```
