import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  clickable?: boolean;
  href?: string;
  as?: 'div' | 'article' | 'section';
}

/**
 * Card component with glass morphism effect
 * 
 * @example
 * ```tsx
 * <Card hover>
 *   <CardHeader>Title</CardHeader>
 *   <CardBody>Content goes here</CardBody>
 *   <CardFooter>Footer content</CardFooter>
 * </Card>
 * ```
 */
export default function Card({
  hover = false,
  clickable = false,
  href,
  as: Component = 'div',
  className,
  children,
  ...props
}: CardProps) {
  const cardClasses = cn(
    'glass rounded-2xl p-6',
    'transition-all duration-300',
    {
      'hover:bg-white/10 hover:shadow-glow-blue hover:scale-105': hover,
      'cursor-pointer': clickable || href,
    },
    className
  );

  if (href) {
    return (
      <Link href={href}>
        <Component className={cardClasses} {...props}>
          {children}
        </Component>
      </Link>
    );
  }

  return (
    <Component className={cardClasses} {...props}>
      {children}
    </Component>
  );
}

/**
 * Card Header component
 */
export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Card Body component
 */
export function CardBody({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Card Footer component
 */
export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-white/10', className)} {...props}>
      {children}
    </div>
  );
}
