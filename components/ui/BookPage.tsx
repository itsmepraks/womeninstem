import React from 'react';
import { cn } from '@/lib/utils';

export interface BookPageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Page number to display at bottom */
  pageNumber?: number;
  /** Chapter title to display at top */
  chapterTitle?: string;
  /** Whether to show decorative elements */
  showOrnaments?: boolean;
  /** Variant of the page style */
  variant?: 'default' | 'premium' | 'chapter';
}

/**
 * BookPage component - Creates a book-inspired page layout with paper texture,
 * decorative elements, and proper typography for the book aesthetic.
 * 
 * @example
 * ```tsx
 * <BookPage pageNumber={1} chapterTitle="Introduction">
 *   <p className="body-text">Your content here...</p>
 * </BookPage>
 * ```
 */
export default function BookPage({
  pageNumber,
  chapterTitle,
  showOrnaments = false,
  variant = 'default',
  className,
  children,
  ...props
}: BookPageProps) {
  return (
    <div
      className={cn(
        'book-page relative',
        {
          'book-card-premium': variant === 'premium',
          'shadow-chapter': variant === 'chapter',
        },
        className
      )}
      {...props}
    >
      {/* Chapter Title Header */}
      {chapterTitle && (
        <div className="mb-8">
          {showOrnaments && (
            <div className="chapter-ornament" />
          )}
          <h2 className="chapter-heading">{chapterTitle}</h2>
          <div className="ornamental-divider" />
        </div>
      )}

      {/* Page Content */}
      <div className="min-h-[400px]">
        {children}
      </div>

      {/* Page Number Footer */}
      {pageNumber !== undefined && (
        <>
          <div className="ornamental-divider mt-8" />
          <div className="page-number mt-4">
            {pageNumber}
          </div>
        </>
      )}
    </div>
  );
}

/**
 * BookSpread component - Creates a two-page spread layout for larger screens
 */
export function BookSpread({
  leftPage,
  rightPage,
  className,
}: {
  leftPage: React.ReactNode;
  rightPage: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('book-spread', className)}>
      <div className="book-page-left">{leftPage}</div>
      <div className="book-page-right">{rightPage}</div>
    </div>
  );
}

/**
 * ChapterHeader component - Dedicated component for chapter openings
 */
export function ChapterHeader({
  number,
  title,
  subtitle,
  className,
}: {
  number?: number | string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn('text-center py-12', className)}>
      {number && (
        <div className="chapter-number">
          Chapter {number}
        </div>
      )}
      <h1 className="chapter-heading">{title}</h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-ink-light font-serif italic mt-4">
          {subtitle}
        </p>
      )}
      <div className="chapter-ornament" />
    </div>
  );
}

/**
 * BookQuote component - Styled quote block for book layout
 */
export function BookQuote({
  quote,
  author,
  source,
  className,
}: {
  quote: string;
  author?: string;
  source?: string;
  className?: string;
}) {
  return (
    <blockquote className={cn('book-quote', className)}>
      <p className="text-lg md:text-xl italic">{quote}</p>
      {(author || source) && (
        <footer className="mt-4 text-right">
          {author && (
            <cite className="font-serif not-italic font-semibold text-ink">
              — {author}
            </cite>
          )}
          {source && (
            <span className="block text-sm text-ink-light mt-1">{source}</span>
          )}
        </footer>
      )}
    </blockquote>
  );
}
