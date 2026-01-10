import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Sophisticated Button component with premium styling and elegant interactions
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Launch Journey</Button>
 * <Button variant="accent" leftIcon={<Icon />}>Get Started</Button>
 * <Button variant="outline">Learn More</Button>
 * ```
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        'relative inline-flex items-center justify-center gap-2',
        'font-semibold transition-elegant',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-deep-space',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
        'disabled:hover:shadow-none disabled:hover:scale-100',
        
        // Variant styles
        {
          // Primary - Nebula purple with elegant glow
          'bg-nebula-600 text-white shadow-elegant hover:bg-nebula-500 hover:shadow-glow-nebula hover:scale-105 focus:ring-nebula-500':
            variant === 'primary',
          
          // Secondary - Premium glass effect
          'glass text-white hover:bg-white/10 hover:shadow-elegant-lg focus:ring-white/20':
            variant === 'secondary',
          
          // Ghost - Minimal with subtle hover
          'text-gray-300 hover:bg-white/5 hover:text-white focus:ring-white/20':
            variant === 'ghost',
          
          // Accent - Aurora green for special actions
          'bg-aurora-600 text-white shadow-elegant hover:bg-aurora-500 hover:shadow-glow-aurora hover:scale-105 focus:ring-aurora-500':
            variant === 'accent',
          
          // Outline - Elegant border with refined hover
          'bg-transparent border-2 border-nebula-500/50 text-nebula-300 hover:bg-nebula-500/10 hover:border-nebula-400 hover:text-nebula-200 hover:shadow-glow-nebula focus:ring-nebula-500':
            variant === 'outline',
        },
        
        // Size styles
        {
          'px-4 py-2 text-sm rounded-full': size === 'sm',
          'px-6 py-3 text-base rounded-full': size === 'md',
          'px-8 py-4 text-lg rounded-full': size === 'lg',
        },
        
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Loading Spinner */}
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
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
      )}
      
      {/* Left Icon */}
      {!isLoading && leftIcon && (
        <span className="inline-flex transition-transform-elegant group-hover:translate-x-0.5">
          {leftIcon}
        </span>
      )}
      
      {/* Button Text */}
      <span className="inline-flex">{children}</span>
      
      {/* Right Icon */}
      {!isLoading && rightIcon && (
        <span className="inline-flex transition-transform-elegant group-hover:translate-x-0.5">
          {rightIcon}
        </span>
      )}
      
      {/* Premium Shine Effect on Hover (Primary & Accent only) */}
      {(variant === 'primary' || variant === 'accent') && !disabled && (
        <span className="absolute inset-0 rounded-full opacity-0 hover:opacity-10 transition-opacity duration-500 bg-white pointer-events-none" />
      )}
    </button>
  );
}

/**
 * Icon Button - Circular button for icon-only actions
 */
export function IconButton({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center',
        'w-10 h-10 rounded-full',
        'glass text-white',
        'hover:bg-white/10 hover:shadow-elegant',
        'focus:outline-none focus:ring-2 focus:ring-nebula-500 focus:ring-offset-2 focus:ring-offset-deep-space',
        'transition-elegant',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * Button Group - For grouped button layouts
 */
export function ButtonGroup({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-3',
        'flex-wrap',
        className
      )}
    >
      {children}
    </div>
  );
}
