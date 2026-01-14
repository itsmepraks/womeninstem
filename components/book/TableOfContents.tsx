'use client';

import React from 'react';
import { useBookStore } from '@/lib/store/bookStore';
import { usePageTurn } from '@/hooks/usePageTurn';
import { cn } from '@/lib/utils';
import { X, BookMarked } from 'lucide-react';
import type { Chapter } from '@/types/book';

interface TableOfContentsProps {
  chapters: Chapter[];
  className?: string;
}

/**
 * TableOfContents - Drawer/modal component showing all chapters and allowing quick navigation
 */
export default function TableOfContents({ chapters, className }: TableOfContentsProps) {
  const { showTableOfContents, setShowTableOfContents } = useBookStore();
  const { navigateToPage, currentPage } = usePageTurn();

  const handleChapterClick = (startPage: number) => {
    navigateToPage(startPage);
    setShowTableOfContents(false);
  };

  if (!showTableOfContents) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-40 animate-fade-in"
        onClick={() => setShowTableOfContents(false)}
        aria-hidden="true"
      />

      {/* Table of Contents Panel */}
      <aside
        className={cn(
          'fixed right-0 top-0 bottom-0 w-full sm:w-96',
          'bg-parchment shadow-book-xl z-50',
          'animate-slide-in-right overflow-hidden',
          className
        )}
        role="dialog"
        aria-label="Table of contents"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="px-6 py-5 border-b-2 border-sepia-300 bg-parchment-light">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BookMarked className="w-6 h-6 text-burgundy-600" />
                <h2 className="text-2xl font-serif font-bold text-ink">
                  Table of Contents
                </h2>
              </div>
              <button
                onClick={() => setShowTableOfContents(false)}
                className={cn(
                  'p-2 rounded-full hover:bg-sepia-100',
                  'transition-book focus:outline-none focus:ring-2 focus:ring-sepia-500'
                )}
                aria-label="Close table of contents"
              >
                <X className="w-5 h-5 text-ink" />
              </button>
            </div>
          </div>

          {/* Chapters List */}
          <nav className="flex-1 overflow-y-auto scrollbar-book px-6 py-4">
            <ul className="space-y-2">
              {chapters.map((chapter, index) => {
                const isActive = currentPage >= chapter.pageRange[0] && currentPage <= chapter.pageRange[1];
                
                return (
                  <li key={chapter.id}>
                    <button
                      onClick={() => handleChapterClick(chapter.pageRange[0])}
                      className={cn(
                        'w-full text-left p-4 rounded-book transition-book',
                        'border-2 hover:shadow-book',
                        isActive
                          ? 'bg-burgundy-50 border-burgundy-400 shadow-book'
                          : 'bg-parchment-light border-sepia-200 hover:border-sepia-400',
                        'focus:outline-none focus:ring-2 focus:ring-sepia-500'
                      )}
                    >
                      <div className="flex items-start gap-3">
                        {/* Chapter Number */}
                        <div
                          className={cn(
                            'flex-shrink-0 w-10 h-10 rounded-full',
                            'flex items-center justify-center',
                            'font-serif font-bold text-sm',
                            isActive
                              ? 'bg-burgundy-600 text-parchment'
                              : 'bg-sepia-200 text-ink'
                          )}
                        >
                          {index + 1}
                        </div>

                        {/* Chapter Info */}
                        <div className="flex-1 min-w-0">
                          <h3
                            className={cn(
                              'font-serif font-semibold text-lg mb-1',
                              isActive ? 'text-burgundy-900' : 'text-ink'
                            )}
                          >
                            {chapter.title}
                          </h3>
                          {chapter.subtitle && (
                            <p className="text-sm text-ink-light/70 italic">
                              {chapter.subtitle}
                            </p>
                          )}
                          <p className="text-xs text-ink-light/50 mt-2 font-serif">
                            Pages {chapter.pageRange[0] + 1} - {chapter.pageRange[1] + 1}
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t-2 border-sepia-300 bg-parchment-light">
            <p className="text-sm text-center text-ink-light font-serif italic">
              Use keyboard arrows or swipe to navigate pages
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

/**
 * TOC Toggle Button - Floatingbutton to open the table of contents
 */
export function TOCToggleButton({ className }: { className?: string }) {
  const { toggleTableOfContents } = useBookStore();

  return (
    <button
      onClick={toggleTableOfContents}
      className={cn(
        'fixed top-24 right-8 z-30',
        'p-4 bg-burgundy-600 text-parchment rounded-full shadow-book-lg',
        'hover:bg-burgundy-700 hover:shadow-book-xl hover:scale-105',
        'transition-book focus:outline-none focus:ring-2 focus:ring-burgundy-500',
        className
      )}
      aria-label="Open table of contents"
      title="Table of Contents"
    >
      <BookMarked className="w-6 h-6" />
    </button>
  );
}
