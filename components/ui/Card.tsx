import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elegant' | 'premium' | 'glass' | 'bordered' | 'flat';
  hover?: boolean;
  interactive?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const variantClasses: Record<string, string> = {
  default: 'glass shadow-card',
  elegant: 'bg-white/5 backdrop-blur-md border border-white/10 shadow-elegant',
  premium: 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-elegant-lg',
  glass: 'glass-strong shadow-elegant',
  bordered: 'bg-white/[0.03] border-2 border-white/10 shadow-card',
  flat: 'bg-white/5',
};

const hoverClasses: Record<string, string> = {
  default: 'hover:shadow-card-hover hover:-translate-y-1',
  elegant: 'hover:shadow-elegant-lg hover:-translate-y-1 hover:border-white/20',
  premium: 'hover:shadow-elegant-xl hover:-translate-y-1 hover:border-white/30',
  glass: 'hover:shadow-elegant-lg hover:-translate-y-0.5 hover:bg-white/15',
  bordered: 'hover:shadow-card-hover hover:-translate-y-1 hover:border-white/20',
  flat: 'hover:bg-white/10',
};

const paddingClasses: Record<string, string> = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

export default function Card({
  variant = 'default',
  hover = false,
  interactive = false,
  padding = 'md',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-premium transition-elegant',
        variantClasses[variant],
        paddingClasses[padding],
        hover && hoverClasses[variant],
        interactive && 'cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-start justify-between gap-4 mb-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  as: Component = 'h3',
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }) {
  return (
    <Component
      className={cn(
        'font-display text-xl md:text-2xl font-semibold tracking-tight text-white',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'text-sm text-gray-400 leading-relaxed',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('space-y-4', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 mt-6 pt-4 border-t border-white/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  variant = 'elegant',
  hover = true,
  ...props
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
} & Omit<CardProps, 'children'>) {
  return (
    <Card
      variant={variant}
      hover={hover}
      className={cn('group', className)}
      {...props}
    >
      {icon && (
        <div className="mb-4 text-nebula-400 group-hover:text-nebula-300 transition-colors-elegant">
          {icon}
        </div>
      )}
      <CardTitle className="mb-2 group-hover:text-nebula-400 transition-colors-elegant">
        {title}
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}

export function StatCard({
  value,
  label,
  icon,
  trend,
  trendValue,
  variant = 'elegant',
  className,
  ...props
}: {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  variant?: CardProps['variant'];
  className?: string;
}) {
  const trendColors = {
    up: 'text-aurora-400',
    down: 'text-supernova-400',
    neutral: 'text-gray-400',
  };

  return (
    <Card variant={variant} className={className} {...props}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-400">{label}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
          {trend && trendValue && (
            <p className={cn('text-sm font-medium', trendColors[trend])}>
              {trend === 'up' && '↑ '}
              {trend === 'down' && '↓ '}
              {trendValue}
            </p>
          )}
        </div>
        {icon && (
          <div className="p-3 rounded-lg bg-white/5 text-nebula-400">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}

export function ImageCard({
  image,
  imageAlt = '',
  title,
  description,
  footer,
  variant = 'elegant',
  hover = true,
  className,
  ...props
}: {
  image: string;
  imageAlt?: string;
  title: string;
  description?: string;
  footer?: React.ReactNode;
} & Omit<CardProps, 'children' | 'padding'>) {
  return (
    <Card
      variant={variant}
      hover={hover}
      padding="none"
      className={cn('overflow-hidden group', className)}
      {...props}
    >
      <div className="aspect-video w-full overflow-hidden bg-white/5">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform-elegant group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <CardTitle className="mb-2">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {footer && (
          <div className="mt-4 pt-4 border-t border-white/10">
            {footer}
          </div>
        )}
      </div>
    </Card>
  );
}

export function HighlightCard({
  accentColor = 'nebula',
  children,
  className,
  ...props
}: {
  accentColor?: 'nebula' | 'aurora' | 'cosmic' | 'stardust' | 'supernova';
} & CardProps) {
  const accentColors = {
    nebula: 'border-l-nebula-500',
    aurora: 'border-l-aurora-500',
    cosmic: 'border-l-cosmic-blue-500',
    stardust: 'border-l-stardust-500',
    supernova: 'border-l-supernova-500',
  };

  return (
    <Card
      className={cn(
        'border-l-4',
        accentColors[accentColor],
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}

export function InfoCard({
  icon,
  title,
  description,
  variant = 'elegant',
  iconColor = 'nebula',
  className,
  ...props
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: 'nebula' | 'aurora' | 'cosmic' | 'stardust' | 'supernova';
} & Omit<CardProps, 'children'>) {
  const iconColorClasses = {
    nebula: 'bg-nebula-500/20 text-nebula-400',
    aurora: 'bg-aurora-500/20 text-aurora-400',
    cosmic: 'bg-cosmic-blue-500/20 text-cosmic-blue-400',
    stardust: 'bg-stardust-500/20 text-stardust-400',
    supernova: 'bg-supernova-500/20 text-supernova-400',
  };

  return (
    <Card variant={variant} className={className} {...props}>
      <div className="flex gap-4">
        <div
          className={cn(
            'flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center',
            iconColorClasses[iconColor]
          )}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-white mb-1">{title}</h4>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
}

export function CardGrid({
  columns = 3,
  gap = 6,
  className,
  children,
}: {
  columns?: 1 | 2 | 3 | 4;
  gap?: 4 | 6 | 8;
  className?: string;
  children: React.ReactNode;
}) {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  const gapClasses = {
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  };

  return (
    <div
      className={cn(
        'grid',
        columnClasses[columns],
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
