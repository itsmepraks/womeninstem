import React from 'react';
import { cn } from '@/lib/utils';

export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse';
  className?: string;
}

/**
 * Loading component with multiple variants
 * 
 * @example
 * ```tsx
 * <Loading size="md" variant="spinner" />
 * <Loading size="lg" variant="dots" />
 * ```
 */
export default function Loading({ size = 'md', variant = 'spinner', className }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  if (variant === 'spinner') {
    return (
      <div className={cn('inline-block', className)}>
        <svg
          className={cn('animate-spin text-nebula-500', sizeClasses[size])}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'dots') {
    const dotSize = {
      sm: 'w-1.5 h-1.5',
      md: 'w-2 h-2',
      lg: 'w-3 h-3',
      xl: 'w-4 h-4',
    };

    return (
      <div className={cn('inline-flex gap-1.5', className)}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              'rounded-full bg-nebula-500 animate-pulse',
              dotSize[size]
            )}
            style={{
              animationDelay: `${i * 150}ms`,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={cn('inline-block', className)}>
        <div
          className={cn(
            'rounded-full bg-gradient-nebula animate-pulse',
            sizeClasses[size]
          )}
        />
      </div>
    );
  }

  return null;
}

/**
 * Full page loading component
 */
export function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loading size="xl" variant="spinner" />
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}

/**
 * Skeleton loader component
 */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-lg bg-white/5',
        className
      )}
    />
  );
}
