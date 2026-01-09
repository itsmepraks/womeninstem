import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  as?: 'div' | 'section' | 'article' | 'main';
}

/**
 * Container component for consistent max-width and padding
 * 
 * @example
 * ```tsx
 * <Container size="lg">
 *   <h1>Content goes here</h1>
 * </Container>
 * ```
 */
export default function Container({
  size = 'lg',
  as: Component = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        {
          'max-w-3xl': size === 'sm',
          'max-w-5xl': size === 'md',
          'max-w-6xl': size === 'lg',
          'max-w-7xl': size === 'xl',
          'max-w-full': size === 'full',
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
