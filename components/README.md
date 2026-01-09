# Components Directory

This directory contains all React components for the STEM•SPARK application.

## Structure

```
components/
├── ui/                    # Reusable UI primitives
│   ├── Button.tsx        # Button component with variants
│   ├── Card.tsx          # Card component for content containers
│   ├── Input.tsx         # Form input components
│   ├── Badge.tsx         # Badge component for labels
│   └── Modal.tsx         # Modal dialog component
│
├── features/             # Feature-specific components
│   ├── learning/         # Learning paths components
│   ├── mentorship/       # Mentorship platform components
│   ├── community/        # Community forum components
│   ├── achievements/     # Achievement system components
│   └── profile/          # User profile components
│
├── layout/               # Layout components
│   ├── Header.tsx        # Main navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Sidebar.tsx       # Sidebar navigation
│   └── Container.tsx     # Content container wrapper
│
└── shared/               # Shared utility components
    ├── Loading.tsx       # Loading states
    ├── ErrorBoundary.tsx # Error handling
    └── SEO.tsx          # SEO metadata component
```

## Component Guidelines

### 1. Component Structure
- Use TypeScript for all components
- Export component as default
- Define prop types using TypeScript interfaces
- Include JSDoc comments for complex components

### 2. Naming Conventions
- Use PascalCase for component names
- Use descriptive names that indicate purpose
- Suffix container components with "Container"
- Prefix HOCs with "with" (e.g., withAuth)

### 3. Component Organization
```tsx
// 1. Imports
import React from 'react';
import { cn } from '@/lib/utils';

// 2. Type definitions
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

// 3. Component definition
export default function Button({ variant = 'primary', children }: ButtonProps) {
  return (
    <button className={cn('base-styles', variant === 'primary' && 'primary-styles')}>
      {children}
    </button>
  );
}
```

### 4. Styling
- Use Tailwind CSS utility classes
- Use the `cn()` utility for conditional classes
- Follow the space-themed design system
- Ensure responsive design with mobile-first approach

### 5. Accessibility
- Include ARIA labels where needed
- Ensure keyboard navigation support
- Maintain proper heading hierarchy
- Use semantic HTML elements

### 6. Performance
- Lazy load heavy components
- Use React.memo for expensive computations
- Optimize images with Next.js Image component
- Minimize re-renders with proper dependency arrays

## Examples

### Basic UI Component
```tsx
// components/ui/Button.tsx
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-full font-semibold transition-all duration-300',
        {
          'bg-gradient-nebula hover:shadow-glow': variant === 'primary',
          'glass hover:bg-white/10': variant === 'secondary',
          'hover:bg-white/5': variant === 'ghost',
        },
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Feature Component
```tsx
// components/features/learning/LearningCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface LearningCardProps {
  title: string;
  description: string;
  progress: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  imageUrl: string;
  slug: string;
}

export default function LearningCard({
  title,
  description,
  progress,
  difficulty,
  imageUrl,
  slug,
}: LearningCardProps) {
  return (
    <Link href={`/learning/${slug}`}>
      <article className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 space-y-4">
        <div className="relative h-48 rounded-lg overflow-hidden">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-xl font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wide text-nebula-400">
            {difficulty}
          </span>
          <span className="text-sm text-gray-400">{progress}% complete</span>
        </div>
      </article>
    </Link>
  );
}
```

## Best Practices

1. **Keep components focused** - Each component should have a single responsibility
2. **Reuse UI components** - Build a consistent component library
3. **Document complex logic** - Add comments for non-obvious implementations
4. **Test interactive components** - Ensure user interactions work as expected
5. **Optimize for performance** - Use memoization and lazy loading when appropriate

## Resources

- [React Documentation](https://react.dev)
- [Next.js Components](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
