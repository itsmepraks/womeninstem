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
 * Book-inspired Button component with vintage styling and elegant interactions
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Begin Reading</Button>
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
        // Base styles - Book aesthetic
        'relative inline-flex items-center justify-center gap-2',
        'font-serif font-semibold transition-book',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-parchment',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
        'disabled:hover:shadow-none disabled:hover:scale-100',
        
        // Variant styles
        {
          // Primary - Warm sepia brown with book shadow
          'bg-sepia-600 text-parchment border-2 border-sepia-700 shadow-book hover:bg-sepia-700 hover:shadow-book-lg hover:-translate-y-0.5 focus:ring-sepia-500':
            variant === 'primary',
          
          // Secondary - Parchment background with ink text
          'bg-parchment text-ink border-2 border-ink-light shadow-book hover:bg-parchment-dark hover:shadow-book-lg hover:-translate-y-0.5 focus:ring-ink-light':
            variant === 'secondary',
          
          // Ghost - Minimal with subtle hover
          'text-ink-light hover:bg-sepia-100 hover:text-ink focus:ring-ink-light':
            variant === 'ghost',
          
          // Accent - Burgundy for special actions
          'bg-burgundy-600 text-parchment border-2 border-burgundy-700 shadow-book hover:bg-burgundy-700 hover:shadow-book-lg hover:-translate-y-0.5 focus:ring-burgundy-500':
            variant === 'accent',
          
          // Outline - Vintage border style
          'bg-transparent border-2 border-sepia-500 text-sepia-700 hover:bg-sepia-50 hover:border-sepia-600 hover:text-sepia-800 hover:shadow-book focus:ring-sepia-500':
            variant === 'outline',
        },
        
        // Size styles
        {
          'px-4 py-2 text-sm rounded-book': size === 'sm',
          'px-6 py-3 text-base rounded-book': size === 'md',
          'px-8 py-4 text-lg rounded-book': size === 'lg',
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
        <span className="inline-flex transition-transform-book group-hover:translate-x-0.5">
          {leftIcon}
        </span>
      )}
      
      {/* Button Text */}
      <span className="inline-flex">{children}</span>
      
      {/* Right Icon */}
      {!isLoading && rightIcon && (
        <span className="inline-flex transition-transform-book group-hover:translate-x-0.5">
          {rightIcon}
        </span>
      )}
      
      {/* Vintage paper texture overlay on hover */}
      {(variant === 'primary' || variant === 'accent') && !disabled && (
        <span className="absolute inset-0 rounded-book opacity-0 hover:opacity-5 transition-opacity duration-300 bg-parchment pointer-events-none" />
      )}
    </button>
  );
}

/**
 * Icon Button - Circular button for icon-only actions with book styling
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
        'bg-parchment text-ink border-2 border-sepia-300',
        'hover:bg-parchment-dark hover:shadow-book',
        'focus:outline-none focus:ring-2 focus:ring-sepia-500 focus:ring-offset-2 focus:ring-offset-parchment',
        'transition-book',
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
