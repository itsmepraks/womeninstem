import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'accent' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  children: React.ReactNode;
}

/**
 * Modern flat badge component
 */
export default function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300',
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
    accent: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300',
    neutral: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-md',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'h-1.5 w-1.5 rounded-full',
            variant === 'primary' && 'bg-primary-500',
            variant === 'accent' && 'bg-accent-500',
            variant === 'default' && 'bg-neutral-500',
            variant === 'neutral' && 'bg-neutral-400'
          )}
        />
      )}
      {children}
    </span>
  );
}
