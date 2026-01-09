import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'nebula' | 'aurora' | 'stardust' | 'cosmic' | 'supernova';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}

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
        
        // Variant styles
        {
          'glass text-white': variant === 'default',
          'bg-nebula-500/20 text-nebula-300 border border-nebula-500/30':
            variant === 'nebula',
          'bg-aurora-500/20 text-aurora-300 border border-aurora-500/30':
            variant === 'aurora',
          'bg-stardust-500/20 text-stardust-300 border border-stardust-500/30':
            variant === 'stardust',
          'bg-cosmic-blue-500/20 text-cosmic-blue-300 border border-cosmic-blue-500/30':
            variant === 'cosmic',
          'bg-supernova-500/20 text-supernova-300 border border-supernova-500/30':
            variant === 'supernova',
        },
        
        // Size styles
        {
          'px-2 py-0.5 text-xs': size === 'sm',
          'px-3 py-1 text-sm': size === 'md',
          'px-4 py-1.5 text-base': size === 'lg',
        },
        
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'w-2 h-2 rounded-full',
            {
              'bg-white': variant === 'default',
              'bg-nebula-400': variant === 'nebula',
              'bg-aurora-400': variant === 'aurora',
              'bg-stardust-400': variant === 'stardust',
              'bg-cosmic-blue-400': variant === 'cosmic',
              'bg-supernova-400': variant === 'supernova',
            }
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
