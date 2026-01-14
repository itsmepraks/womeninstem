'use client';

import React from 'react';
import { usePageTurn } from '@/hooks/usePageTurn';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, BookOpen, Home } from 'lucide-react';

interface BookNavigationProps {
  position?: 'bottom' | 'side' | 'floating';
  showPageNumbers?: boolean;
  className?: string;
}

/**
 * BookNavigation - Interactive controls for navigating through the book
 * Supports previous/next buttons, page numbers, and home button
 */
export default function BookNavigation({
  position = 'bottom',
  showPageNumbers = true,
  className,
}: BookNavigationProps) {
  const {
    currentPage,
    totalPages,
    isFlipping,
    canGoNext,
    canGoPrevious,
    turnNextPage,
    turnPreviousPage,
    navigateToPage,
  } = usePageTurn();

  const positionStyles = {
    bottom: 'fixed bottom-8 left-1/2 -translate-x-1/2',
    side: 'fixed right-8 top-1/2 -translate-y-1/2 flex-col',
    floating: 'absolute bottom-4 left-1/2 -translate-x-1/2',
  };

  return (
    <nav
      className={cn(
        'book-navigation flex items-center gap-4 z-50',
        'bg-parchment-light rounded-full shadow-book-lg',
        'border-2 border-sepia-300 px-6 py-3',
        positionStyles[position],
        className
      )}
      aria-label="Book navigation"
    >
      {/* Home button */}
      <button
        onClick={() => navigateToPage(0)}
        disabled={isFlipping || currentPage === 0}
        className={cn(
          'p-2 rounded-full transition-book',
          'hover:bg-sepia-100 focus:outline-none focus:ring-2 focus:ring-sepia-500',
          'disabled:opacity-30 disabled:cursor-not-allowed'
        )}
        aria-label="Go to first page"
        title="Home"
      >
        <Home className="w-5 h-5 text-ink" />
      </button>

      {/* Previous button */}
      <button
        onClick={turnPreviousPage}
        disabled={isFlipping || !canGoPrevious}
        className={cn(
          'p-3 rounded-full transition-book',
          'bg-sepia-600 text-parchment hover:bg-sepia-700',
          'hover:shadow-book hover:-translate-x-0.5',
          'focus:outline-none focus:ring-2 focus:ring-sepia-500 focus:ring-offset-2',
          'disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none'
        )}
        aria-label="Previous page"
        title="Previous Page (← or Page Up)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Page indicator */}
      {showPageNumbers && (
        <div className="flex items-center gap-2 min-w-[120px] justify-center">
          <BookOpen className="w-5 h-5 text-sepia-600" />
          <span className="font-serif text-sm text-ink font-medium">
            Page {currentPage + 1} of {totalPages}
          </span>
        </div>
      )}

      {/* Next button */}
      <button
        onClick={turnNextPage}
        disabled={isFlipping || !canGoNext}
        className={cn(
          'p-3 rounded-full transition-book',
          'bg-sepia-600 text-parchment hover:bg-sepia-700',
          'hover:shadow-book hover:translate-x-0.5',
          'focus:outline-none focus:ring-2 focus:ring-sepia-500 focus:ring-offset-2',
          'disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none'
        )}
        aria-label="Next page"
        title="Next Page (→ or Page Down)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Quick jump to end */}
      <button
        onClick={() => navigateToPage(totalPages - 1)}
        disabled={isFlipping || currentPage === totalPages - 1}
        className={cn(
          'p-2 rounded-full transition-book',
          'hover:bg-sepia-100 focus:outline-none focus:ring-2 focus:ring-sepia-500',
          'disabled:opacity-30 disabled:cursor-not-allowed'
        )}
        aria-label="Go to last page"
        title="Last Page"
      >
        <BookOpen className="w-5 h-5 text-ink" />
      </button>
    </nav>
  );
}

/**
 * Compact navigation for mobile devices
 */
export function MobileBookNavigation({ className }: { className?: string }) {
  const { turnNextPage, turnPreviousPage, canGoNext, canGoPrevious, isFlipping } = usePageTurn();

  return (
    <div className={cn('flex justify-between items-center w-full px-4', className)}>
      <button
        onClick={turnPreviousPage}
        disabled={!canGoPrevious || isFlipping}
        className={cn(
          'p-4 bg-sepia-600 text-parchment rounded-full shadow-book',
          'active:scale-95 transition-transform',
          'disabled:opacity-30 disabled:cursor-not-allowed'
        )}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={turnNextPage}
        disabled={!canGoNext || isFlipping}
        className={cn(
          'p-4 bg-sepia-600 text-parchment rounded-full shadow-book',
          'active:scale-95 transition-transform',
          'disabled:opacity-30 disabled:cursor-not-allowed'
        )}
        aria-label="Next page"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
