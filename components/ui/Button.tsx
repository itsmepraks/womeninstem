import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Button component with space-themed styling and variants
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="secondary" leftIcon={<Icon />}>With Icon</Button>
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
        'font-semibold transition-all duration-300',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-deep-space',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
        
        // Variant styles
        {
          'bg-gradient-nebula text-white hover:shadow-glow hover:scale-105 focus:ring-nebula-500':
            variant === 'primary',
          'glass text-white hover:bg-white/10 hover:shadow-glow-blue focus:ring-cosmic-blue-500':
            variant === 'secondary',
          'text-gray-300 hover:bg-white/5 hover:text-white focus:ring-white/20':
            variant === 'ghost',
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
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
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
      {!isLoading && leftIcon && <span className="inline-flex">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="inline-flex">{rightIcon}</span>}
    </button>
  );
}
