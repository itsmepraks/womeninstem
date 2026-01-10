import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant = 
  | 'default' 
  | 'nebula' 
  | 'aurora' 
  | 'stardust' 
  | 'cosmic' 
  | 'supernova'
  | 'elegant'
  | 'premium'
  | 'outline';

export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  pulse?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}

// Sophisticated variant class mappings with solid colors
const variantClasses: Record<BadgeVariant, string> = {
  default: 'glass text-white hover:bg-white/10',
  
  // Solid color variants with refined styling
  nebula: 'bg-nebula-500/20 text-nebula-300 border border-nebula-500/30 hover:bg-nebula-500/30 hover:border-nebula-500/40',
  aurora: 'bg-aurora-500/20 text-aurora-300 border border-aurora-500/30 hover:bg-aurora-500/30 hover:border-aurora-500/40',
  stardust: 'bg-stardust-500/20 text-stardust-300 border border-stardust-500/30 hover:bg-stardust-500/30 hover:border-stardust-500/40',
  cosmic: 'bg-cosmic-blue-500/20 text-cosmic-blue-300 border border-cosmic-blue-500/30 hover:bg-cosmic-blue-500/30 hover:border-cosmic-blue-500/40',
  supernova: 'bg-supernova-500/20 text-supernova-300 border border-supernova-500/30 hover:bg-supernova-500/30 hover:border-supernova-500/40',
  
  // Premium variants
  elegant: 'bg-platinum-800/40 text-platinum-200 border border-platinum-700/50 hover:bg-platinum-800/60 hover:border-platinum-600/50',
  premium: 'bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 shadow-elegant',
  outline: 'bg-transparent text-gray-300 border border-white/20 hover:bg-white/5 hover:border-white/30 hover:text-white',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

const dotClasses: Record<BadgeVariant, string> = {
  default: 'bg-white',
  nebula: 'bg-nebula-400',
  aurora: 'bg-aurora-400',
  stardust: 'bg-stardust-400',
  cosmic: 'bg-cosmic-blue-400',
  supernova: 'bg-supernova-400',
  elegant: 'bg-platinum-400',
  premium: 'bg-white',
  outline: 'bg-gray-400',
};

/**
 * Sophisticated Badge component for labels, tags, and status indicators
 * 
 * @example
 * ```tsx
 * <Badge variant="nebula">Beginner</Badge>
 * <Badge variant="aurora" dot>Active</Badge>
 * <Badge variant="premium" pulse>Live</Badge>
 * <Badge variant="outline" size="sm">Tag</Badge>
 * <Badge removable onRemove={() => console.log('removed')}>Filter</Badge>
 * ```
 */
export default function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  pulse = false,
  removable = false,
  onRemove,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-full',
        'transition-elegant select-none',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {/* Status Dot */}
      {dot && (
        <span className="relative flex">
          <span
            className={cn(
              'w-2 h-2 rounded-full',
              dotClasses[variant],
              pulse && 'animate-pulse-subtle'
            )}
          />
        </span>
      )}
      
      {/* Pulse Ring Effect */}
      {pulse && !dot && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              dotClasses[variant]
            )}
          />
          <span
            className={cn(
              'relative inline-flex rounded-full h-2 w-2',
              dotClasses[variant]
            )}
          />
        </span>
      )}
      
      {/* Badge Content */}
      <span className="inline-flex items-center">{children}</span>
      
      {/* Remove Button */}
      {removable && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="ml-0.5 hover:bg-white/10 rounded-full p-0.5 transition-colors-elegant focus:outline-none focus:ring-1 focus:ring-white/20"
          aria-label="Remove"
          type="button"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  );
}

/**
 * Badge Group - For displaying multiple badges together
 */
export function BadgeGroup({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 flex-wrap',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Status Badge - Pre-configured badges for common status indicators
 */
export function StatusBadge({
  status,
  className,
  ...props
}: {
  status: 'active' | 'inactive' | 'pending' | 'success' | 'warning' | 'error';
  className?: string;
} & Omit<BadgeProps, 'variant'>) {
  const statusConfig = {
    active: { variant: 'aurora' as BadgeVariant, label: 'Active', dot: true, pulse: true },
    inactive: { variant: 'default' as BadgeVariant, label: 'Inactive', dot: true },
    pending: { variant: 'stardust' as BadgeVariant, label: 'Pending', dot: true, pulse: true },
    success: { variant: 'aurora' as BadgeVariant, label: 'Success', dot: true },
    warning: { variant: 'stardust' as BadgeVariant, label: 'Warning', dot: true },
    error: { variant: 'supernova' as BadgeVariant, label: 'Error', dot: true },
  };

  const config = statusConfig[status];

  return (
    <Badge
      variant={config.variant}
      dot={config.dot}
      pulse={config.pulse ?? false}
      className={className}
      {...props}
    >
      {config.label}
    </Badge>
  );
}

/**
 * Level Badge - For skill/difficulty levels
 */
export function LevelBadge({
  level,
  className,
  ...props
}: {
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  className?: string;
} & Omit<BadgeProps, 'variant' | 'children'>) {
  const levelConfig = {
    beginner: { variant: 'aurora' as BadgeVariant, label: 'Beginner' },
    intermediate: { variant: 'cosmic' as BadgeVariant, label: 'Intermediate' },
    advanced: { variant: 'nebula' as BadgeVariant, label: 'Advanced' },
    expert: { variant: 'supernova' as BadgeVariant, label: 'Expert' },
  };

  const config = levelConfig[level];

  return (
    <Badge
      variant={config.variant}
      className={className}
      {...props}
    >
      {config.label}
    </Badge>
  );
}

/**
 * Count Badge - For displaying counts (like notifications)
 */
export function CountBadge({
  count,
  max = 99,
  variant = 'supernova',
  className,
  ...props
}: {
  count: number;
  max?: number;
  variant?: BadgeVariant;
  className?: string;
} & Omit<BadgeProps, 'children'>) {
  const displayCount = count > max ? `${max}+` : count.toString();

  return (
    <Badge
      variant={variant}
      size="sm"
      className={cn('min-w-[20px] justify-center px-1.5', className)}
      {...props}
    >
      {displayCount}
    </Badge>
  );
}

/**
 * Icon Badge - Badge with icon support
 */
export function IconBadge({
  icon,
  children,
  className,
  ...props
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
} & BadgeProps) {
  return (
    <Badge className={cn('gap-2', className)} {...props}>
      <span className="inline-flex text-current opacity-80">{icon}</span>
      <span>{children}</span>
    </Badge>
  );
}
