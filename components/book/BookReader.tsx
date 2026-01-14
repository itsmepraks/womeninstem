'use client';

import React, { useState, useEffect } from 'react';
import { useBookStore } from '@/lib/store/bookStore';
import { usePageTurn } from '@/hooks/usePageTurn';
import { calculateProgress } from '@/lib/bookHelpers';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

export interface BookReaderProps {
  pages: React.ReactNode[];
  showControls?: boolean;
  showProgress?: boolean;
  className?: string;
}

/**
 * Main book reader component with page navigation and progress tracking
 */
export default function BookReader({
  pages,
  showControls = true,
  showProgress = true,
  className,
}: BookReaderProps) {
  const [mounted, setMounted] = useState(false);
  const { setTotalPages } = useBookStore();
  const {
    currentPage,
    totalPages,
    canGoNext,
    canGoPrevious,
    turnNextPage,
    turnPreviousPage,
    navigateToPage,
    isFlipping,
  } = usePageTurn();

  useEffect(() => {
    setMounted(true);
    setTotalPages(pages.length);
  }, [pages.length, setTotalPages]);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-sepia-600 border-t-transparent mx-auto mb-4" />
          <p className="text-ink-light font-serif">Loading book...</p>
        </div>
      </div>
    );
  }

  const progress = calculateProgress(currentPage, totalPages);

  return (
    <div className={cn('book-reader w-full', className)}>
      {/* Progress Bar */}
      {showProgress && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-serif text-ink-light">
              Page {currentPage + 1} of {totalPages}
            </span>
            <span className="text-sm font-serif text-ink-light">{progress}%</span>
          </div>
          <div className="h-2 bg-sepia-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-sepia-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Book Page Container */}
      <div className="relative">
        <div
          className={cn(
            'book-page bg-parchment rounded-page shadow-book-xl',
            'border-2 border-sepia-200/50',
            'p-8 md:p-12 lg:p-16',
            'min-h-[600px]',
            'transition-opacity duration-300',
            isFlipping && 'opacity-50'
          )}
        >
          {pages[currentPage]}
        </div>

        {/* Navigation Buttons */}
        {showControls && (
          <>
            <button
              onClick={turnPreviousPage}
              disabled={!canGoPrevious || isFlipping}
              className={cn(
                'absolute left-4 top-1/2 -translate-y-1/2',
                'w-12 h-12 rounded-full',
                'bg-sepia-600 text-parchment',
                'border-2 border-sepia-700',
                'shadow-book hover:shadow-book-lg',
                'transition-all duration-300',
                'disabled:opacity-30 disabled:cursor-not-allowed',
                'hover:scale-110',
                'focus:outline-none focus:ring-2 focus:ring-sepia-500'
              )}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6 mx-auto" />
            </button>

            <button
              onClick={turnNextPage}
              disabled={!canGoNext || isFlipping}
              className={cn(
                'absolute right-4 top-1/2 -translate-y-1/2',
                'w-12 h-12 rounded-full',
                'bg-sepia-600 text-parchment',
                'border-2 border-sepia-700',
                'shadow-book hover:shadow-book-lg',
                'transition-all duration-300',
                'disabled:opacity-30 disabled:cursor-not-allowed',
                'hover:scale-110',
                'focus:outline-none focus:ring-2 focus:ring-sepia-500'
              )}
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6 mx-auto" />
            </button>
          </>
        )}
      </div>

      {/* Bottom Controls */}
      {showControls && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => navigateToPage(0)}
            disabled={currentPage === 0 || isFlipping}
            className={cn(
              'px-4 py-2 rounded-book',
              'bg-parchment text-ink',
              'border-2 border-sepia-300',
              'hover:bg-parchment-dark hover:border-sepia-400',
              'transition-all duration-300',
              'disabled:opacity-30 disabled:cursor-not-allowed',
              'focus:outline-none focus:ring-2 focus:ring-sepia-500',
              'font-serif font-semibold text-sm'
            )}
          >
            <Home className="w-4 h-4 inline mr-2" />
            First Page
          </button>
        </div>
      )}
    </div>
  );
}
