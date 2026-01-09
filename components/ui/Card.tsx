import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  as?: 'div' | 'article' | 'section';
  href?: string;
  children: React.ReactNode;
}

export default function Card({
  hover = false,
  as: Component = 'div',
  href,
  className,
  children,
  ...props
}: CardProps) {
  const cardClasses = cn(
    'bg-white rounded-xl border border-gray-200 p-6 shadow-soft',
    hover && 'transition-all duration-200 hover:shadow-medium hover:border-gray-300',
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

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-4', className)} {...props} />;
}

export function CardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('', className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mt-4 pt-4 border-t border-gray-200', className)} {...props} />;
}
