'use client';

import React from 'react';
import { usePageTurn } from '@/hooks/usePageTurn';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

interface BookNavigationProps {
  className?: string;
}

/**
 * Navigation controls for the book with keyboard support info
 */
export default function BookNavigation({ className }: BookNavigationProps) {
  const {
    currentPage,
    totalPages,
    isFlipping,
    canGoNext,
    canGoPrevious,
    turnNextPage,
    turnPreviousPage,
  } = usePageTurn();

  return (
    <nav
      className={cn(
        'book-navigation flex items-center justify-between',
        'bg-parchment-light rounded-book shadow-book',
        'border-2 border-sepia-300 px-6 py-4',
        className
      )}
      aria-label="Book navigation"
    >
      {/* Previous Button */}
      <button
        onClick={turnPreviousPage}
        disabled={isFlipping || !canGoPrevious}
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-book',
          'bg-sepia-600 text-parchment',
          'border-2 border-sepia-700',
          'hover:bg-sepia-700 hover:shadow-book',
          'transition-all duration-300',
          'disabled:opacity-30 disabled:cursor-not-allowed',
          'focus:outline-none focus:ring-2 focus:ring-sepia-500',
          'font-serif font-semibold'
        )}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Counter */}
      <div className="flex items-center gap-3">
        <BookOpen className="w-5 h-5 text-sepia-600" />
        <span className="font-serif text-ink font-medium">
          {currentPage + 1} / {totalPages}
        </span>
      </div>

      {/* Next Button */}
      <button
        onClick={turnNextPage}
        disabled={isFlipping || !canGoNext}
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-book',
          'bg-sepia-600 text-parchment',
          'border-2 border-sepia-700',
          'hover:bg-sepia-700 hover:shadow-book',
          'transition-all duration-300',
          'disabled:opacity-30 disabled:cursor-not-allowed',
          'focus:outline-none focus:ring-2 focus:ring-sepia-500',
          'font-serif font-semibold'
        )}
        aria-label="Next page"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}

/**
 * Keyboard shortcuts info component
 */
export function KeyboardShortcuts({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-parchment-light rounded-book p-4',
        'border-2 border-sepia-200',
        className
      )}
    >
      <h3 className="font-serif font-semibold text-ink mb-3">Keyboard Shortcuts</h3>
      <dl className="space-y-2 text-sm">
        <div className="flex justify-between">
          <dt className="text-ink-light">Next page:</dt>
          <dd className="font-mono text-sepia-600">→ or Page Down</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink-light">Previous page:</dt>
          <dd className="font-mono text-sepia-600">← or Page Up</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink-light">First page:</dt>
          <dd className="font-mono text-sepia-600">Home</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink-light">Last page:</dt>
          <dd className="font-mono text-sepia-600">End</dd>
        </div>
      </dl>
    </div>
  );
}
