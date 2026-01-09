import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant = 'default' | 'nebula' | 'aurora' | 'stardust' | 'cosmic' | 'supernova';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}

// Explicit variant class mappings for Tailwind purging
const variantClasses: Record<BadgeVariant, string> = {
  default: 'glass text-white',
  nebula: 'bg-nebula-500/20 text-nebula-300 border border-nebula-500/30',
  aurora: 'bg-aurora-500/20 text-aurora-300 border border-aurora-500/30',
  stardust: 'bg-stardust-500/20 text-stardust-300 border border-stardust-500/30',
  cosmic: 'bg-cosmic-blue-500/20 text-cosmic-blue-300 border border-cosmic-blue-500/30',
  supernova: 'bg-supernova-500/20 text-supernova-300 border border-supernova-500/30',
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
};

/**
 * Badge component for labels, tags, and status indicators
 * 
 * @example
 * ```tsx
 * <Badge variant="nebula">Beginner</Badge>
 * <Badge variant="aurora" dot>Active</Badge>
 * <Badge removable onRemove={() => console.log('removed')}>Tag</Badge>
 * ```
 */
export default function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
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
        'transition-all duration-200',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'w-2 h-2 rounded-full',
            dotClasses[variant]
          )}
        />
      )}
      {children}
      {removable && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="ml-0.5 hover:bg-white/10 rounded-full p-0.5 transition-colors"
          aria-label="Remove"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  );
}
