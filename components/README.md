# Components Directory

This directory contains all React components for the STEM•SPARK application.

## ✅ Implemented Components

### UI Components (`components/ui/`)

#### Button
Versatile button component with multiple variants and states.

```tsx
import { Button } from '@/components/ui';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With icons
<Button leftIcon={<Icon />}>With Icon</Button>
<Button isLoading>Loading...</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `isLoading`: boolean
- `leftIcon`, `rightIcon`: React.ReactNode
- All standard button HTML attributes

---

#### Card
Glass morphism card component for content containers.

```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui';

<Card hover>
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>Card content goes here</p>
  </CardBody>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>

// Clickable card
<Card href="/path" hover>
  Content
</Card>
```

**Props:**
- `hover`: boolean - Enable hover effects
- `clickable`: boolean - Show pointer cursor
- `href`: string - Make card a link
- `as`: 'div' | 'article' | 'section' - HTML element type

---

#### Container
Responsive container for consistent max-width and padding.

```tsx
import { Container } from '@/components/ui';

<Container size="lg">
  <h1>Content</h1>
</Container>
```

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'
- `as`: 'div' | 'section' | 'article' | 'main'

---

#### Badge
Labels and status indicators with multiple color variants.

```tsx
import { Badge } from '@/components/ui';

<Badge variant="nebula">Beginner</Badge>
<Badge variant="aurora" dot>Active</Badge>
<Badge variant="stardust" size="lg">Featured</Badge>
<Badge removable onRemove={() => handleRemove()}>Tag</Badge>
```

**Props:**
- `variant`: 'default' | 'nebula' | 'aurora' | 'stardust' | 'cosmic' | 'supernova'
- `size`: 'sm' | 'md' | 'lg'
- `dot`: boolean - Show status dot
- `removable`: boolean - Show remove button
- `onRemove`: () => void - Remove callback

---

#### Loading
Loading states with multiple variants.

```tsx
import { Loading, LoadingPage, Skeleton } from '@/components/ui';

<Loading size="md" variant="spinner" />
<Loading variant="dots" />
<Loading variant="pulse" />

// Full page loading
<LoadingPage />

// Skeleton loader
<Skeleton className="h-20 w-full" />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `variant`: 'spinner' | 'dots' | 'pulse'

---

### Layout Components (`components/layout/`)

#### Header
Main navigation header with mobile menu support.

**Features:**
- Fixed position with glass morphism on scroll
- Desktop navigation menu
- Mobile hamburger menu
- Active route highlighting
- Animated logo
- Responsive design

```tsx
import { Header } from '@/components/layout';

// Already integrated in root layout
<Header />
```

---

#### Footer
Site footer with navigation and social links.

**Features:**
- Four-column grid layout
- Navigation links
- Social media icons (GitHub, Twitter, LinkedIn, Website)
- Back to top button
- Responsive design

```tsx
import { Footer } from '@/components/layout';

// Already integrated in root layout
<Footer />
```

---

## Component Structure

```
components/
├── ui/                    # ✅ Implemented
│   ├── Button.tsx        # ✅ Complete
│   ├── Card.tsx          # ✅ Complete
│   ├── Container.tsx     # ✅ Complete
│   ├── Badge.tsx         # ✅ Complete
│   ├── Loading.tsx       # ✅ Complete
│   └── index.ts          # ✅ Export file
│
├── layout/               # ✅ Implemented
│   ├── Header.tsx        # ✅ Complete
│   ├── Footer.tsx        # ✅ Complete
│   └── index.ts          # ✅ Export file
│
├── features/             # 🚧 To be implemented
│   ├── learning/
│   ├── mentorship/
│   ├── community/
│   ├── achievements/
│   └── profile/
│
└── shared/               # 🚧 To be implemented
    ├── ErrorBoundary.tsx
    └── SEO.tsx
```

---

## Usage Guidelines

### 1. Import Components

```tsx
// UI components
import { Button, Card, Container, Badge, Loading } from '@/components/ui';

// Layout components
import { Header, Footer } from '@/components/layout';
```

### 2. Component Styling

All components follow the space-themed design system:

**Color Variants:**
- `nebula`: Purple/indigo gradient
- `aurora`: Green gradient
- `stardust`: Yellow/gold
- `cosmic`: Blue
- `supernova`: Pink

**Glass Morphism:**
All components use the `.glass` utility class for the signature frosted glass effect.

**Animations:**
- Smooth transitions (300ms default)
- Hover effects with scale transforms
- Loading states with spinners/pulses

### 3. Accessibility

All components include:
- Proper ARIA labels
- Keyboard navigation support
- Focus states
- Semantic HTML

### 4. TypeScript

All components are fully typed with TypeScript interfaces exported for use.

### 5. Responsive Design

Components follow mobile-first responsive design:
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+

---

## Design System Reference

### Colors
Defined in `tailwind.config.js`:
- Deep Space: `#0a0e27` (background)
- Nebula: Purple/indigo shades
- Cosmic Blue: Blue shades
- Stardust: Yellow/gold shades
- Aurora: Green shades
- Supernova: Pink shades

### Utilities
Defined in `app/globals.css`:
- `.glass` - Glass morphism effect
- `.gradient-text` - Gradient text effect
- `.text-glow` - Glow effect
- `.stars`, `.stars2`, `.stars3` - Animated star fields

### Typography
- **Sans**: Inter (body text)
- **Display**: Space Grotesk (headings)

---

## Next Steps

### Planned UI Components
- [ ] Input components (text, textarea, select)
- [ ] Modal/Dialog
- [ ] Dropdown menu
- [ ] Tabs
- [ ] Toast notifications
- [ ] Alert messages
- [ ] Progress bars
- [ ] Breadcrumbs
- [ ] Pagination

### Feature Components
- [ ] Learning path cards
- [ ] Mentor profile cards
- [ ] Achievement badges
- [ ] Discussion threads
- [ ] User profiles

---

## Best Practices

1. **Keep components focused** - Single responsibility principle
2. **Use TypeScript** - Always define prop interfaces
3. **Document props** - Add JSDoc comments
4. **Test responsiveness** - Check all breakpoints
5. **Maintain accessibility** - WCAG 2.1 AA compliance
6. **Optimize performance** - Use React.memo when needed

---

## Resources

- [React Documentation](https://react.dev)
- [Next.js Components](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

**Status:** Core UI library and layout components complete ✅
**Last Updated:** January 2026
