# Layout Components

This directory contains layout-level components that provide the structural framework for the STEM•SPARK application.

## Components

### Header.tsx

The main navigation header for the application with responsive design, mobile menu, and active route highlighting.

#### Features

##### 🎨 Design
- **Glass Morphism**: Semi-transparent background with backdrop blur effect
- **Space Theme**: Consistent with the cosmic color palette
- **Animated Logo**: Rotating sparkle icon with gradient text
- **Scroll Effect**: Header background appears/strengthens on scroll

##### 🧭 Navigation
- **Desktop Menu**: Horizontal navigation with smooth transitions
- **Mobile Menu**: Full-screen overlay with animated entrance
- **Active Route**: Animated pill background for current page
- **Hover Effects**: Subtle glow on hover for better UX

##### 📱 Responsive
- **Mobile-First**: Optimized for small screens
- **Breakpoints**: 
  - Mobile: < 768px (hamburger menu)
  - Desktop: ≥ 768px (horizontal menu)
- **Touch-Friendly**: Large tap targets on mobile
- **Body Scroll Lock**: Prevents background scrolling when mobile menu is open

##### ♿ Accessibility
- **Semantic HTML**: Proper `<header>` and `<nav>` elements
- **ARIA Labels**: Screen reader friendly
- **Keyboard Navigation**: Full keyboard support
- **Focus States**: Visible focus indicators

##### ✨ Animations (Framer Motion)
- **Active Route**: Layout animation with spring physics
- **Mobile Menu**: Smooth slide-in/fade effects
- **Menu Items**: Staggered entrance animation
- **Logo**: Continuous rotation animation

#### Usage

```tsx
import Header from '@/components/layout/Header';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
```

#### Navigation Items

Navigation is automatically generated from `NAV_ITEMS` constant in `lib/constants.ts`:

```typescript
export const NAV_ITEMS = [
  { href: '/explore', label: 'Explore' },
  { href: '/learning', label: 'Learning Paths' },
  { href: '/mentorship', label: 'Mentorship' },
  { href: '/community', label: 'Community' },
  { href: '/resources', label: 'Resources' },
] as const;
```

#### Customization

##### Colors
The header uses theme colors from `tailwind.config.js`:
- Primary gradient: `bg-gradient-nebula`
- Icon colors: `nebula-400`, `supernova-400`, `stardust-400`, `aurora-400`
- Glass effect: `bg-white/5 backdrop-blur-xl border-white/10`

##### Logo
Located in the top-left, the logo consists of:
- Sparkle icon from `lucide-react`
- Animated rotation overlay
- STEM•SPARK gradient text

To customize, modify lines 72-92 in `Header.tsx`.

##### CTA Button
The "Get Started" button links to `/explore` by default. Change the `href` prop to customize:

```tsx
<Link href="/your-custom-path">
  Get Started
</Link>
```

#### Component Structure

```
Header
├── Desktop Navigation
│   ├── Logo
│   ├── Nav Links (with active highlighting)
│   └── CTA Button
│
└── Mobile Navigation
    ├── Logo
    ├── Hamburger Menu Button
    └── Mobile Menu Overlay
        ├── Nav Links
        ├── CTA Button
        └── Footer Text
```

#### State Management

```typescript
// Scroll detection for glass effect
const [isScrolled, setIsScrolled] = useState(false);

// Mobile menu toggle
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// Current route for active highlighting
const pathname = usePathname();
```

#### Dependencies

- `next/link` - Client-side navigation
- `next/navigation` - usePathname hook
- `framer-motion` - Animations
- `lucide-react` - Icons (Menu, X, Sparkles)
- `@/lib/constants` - Navigation items

#### Performance

- **Client Component**: Uses `'use client'` for interactivity
- **Optimized Animations**: GPU-accelerated transforms
- **Event Cleanup**: Proper useEffect cleanup for scroll listeners
- **Conditional Rendering**: Mobile menu only renders when open

#### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Backdrop blur may have reduced effect on older browsers
- Graceful degradation for unsupported features

---

## Future Components

The following layout components are planned:

### Footer.tsx
- Multi-column footer layout
- Social media links
- Quick navigation
- Newsletter signup
- Copyright info

### Sidebar.tsx
- Collapsible navigation
- User profile section
- Quick actions

### Container.tsx
- Max-width wrapper
- Consistent padding
- Responsive breakpoints

---

## Design Guidelines

### Spacing
- Header height: 64px (mobile), 80px (desktop)
- Padding: 16px (mobile), 24px (desktop)
- Gap between nav items: 4px

### Typography
- Logo: `font-display` (Space Grotesk)
- Nav links: `font-medium`, 14px

### Colors
- Text: white (primary), gray-300 (secondary)
- Background: transparent → glass (on scroll)
- Active: gradient-nebula
- Hover: white/5

### Transitions
- Duration: 200-300ms
- Easing: ease-in-out
- Spring physics for layout animations

---

## Troubleshooting

### Header overlaps content
Add padding-top to your page content:
```tsx
<main className="pt-20">
  {/* Your content */}
</main>
```

### Active route not highlighting
Ensure your route paths match the `href` in `NAV_ITEMS` exactly.

### Mobile menu not closing
The menu auto-closes on route change. Check that navigation is using Next.js `Link` components.

### Glass effect not showing
The glass effect appears after scrolling 20px. Ensure page has enough content to scroll.

---

## Contributing

When modifying the Header component:
1. Maintain accessibility features
2. Test on mobile devices
3. Ensure animations are performant (60fps)
4. Update this documentation
5. Follow the established design system

---

**Created**: January 2026  
**Last Updated**: January 2026  
**Maintainer**: Prakriti Bista
