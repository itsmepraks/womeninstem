import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  as?: 'div' | 'article' | 'section';
  children: React.ReactNode;
}

/**
 * Modern flat card component with clean borders
 */
export default function Card({
  hover = false,
  as: Component = 'div',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6',
        hover && 'transition-all duration-200 hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

// Sub-components for card structure
export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-4', className)} {...props} />;
}

export function CardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-4', className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800', className)} {...props} />;
}
