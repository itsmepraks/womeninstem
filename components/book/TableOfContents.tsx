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
 * Glassmorphic Table of Contents with chapter navigation
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
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 animate-fade-in"
        onClick={() => setShowTableOfContents(false)}
        aria-hidden="true"
      />

      {/* TOC Panel */}
      <aside
        className={cn(
          'fixed right-0 top-0 bottom-0 w-full sm:w-96',
          'glass-strong z-50',
          'animate-slide-in-right overflow-hidden',
          className
        )}
        role="dialog"
        aria-label="Table of contents"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="px-6 py-5 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BookMarked className="w-5 h-5 text-white/70" />
                <h2 className="text-xl font-display font-bold text-white">
                  Contents
                </h2>
              </div>
              <button
                onClick={() => setShowTableOfContents(false)}
                className={cn(
                  'p-2 rounded-full hover:bg-white/10',
                  'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20'
                )}
                aria-label="Close table of contents"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>
            </div>
          </div>

          {/* Chapters List */}
          <nav className="flex-1 overflow-y-auto scrollbar-minimal px-4 py-4">
            <ul className="space-y-2">
              {chapters.map((chapter, index) => {
                const isActive = currentPage >= chapter.pageRange[0] && currentPage <= chapter.pageRange[1];

                return (
                  <li key={chapter.id}>
                    <button
                      onClick={() => handleChapterClick(chapter.pageRange[0])}
                      className={cn(
                        'w-full text-left p-4 rounded-xl transition-all duration-300',
                        'border',
                        isActive
                          ? 'bg-white/10 border-white/20'
                          : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10',
                        'focus:outline-none focus:ring-2 focus:ring-white/20'
                      )}
                    >
                      <div className="flex items-start gap-3">
                        {/* Chapter Number */}
                        <div
                          className={cn(
                            'flex-shrink-0 w-10 h-10 rounded-full',
                            'flex items-center justify-center text-sm font-medium',
                            isActive
                              ? 'bg-white text-black'
                              : 'bg-white/10 text-white/60'
                          )}
                        >
                          {index + 1}
                        </div>

                        {/* Chapter Info */}
                        <div className="flex-1 min-w-0">
                          <h3
                            className={cn(
                              'font-display font-semibold mb-1',
                              isActive ? 'text-white' : 'text-white/80'
                            )}
                          >
                            {chapter.title}
                          </h3>
                          {chapter.subtitle && (
                            <p className="text-sm text-white/40 italic">
                              {chapter.subtitle}
                            </p>
                          )}
                          <p className="text-xs text-white/30 mt-2">
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
          <div className="px-6 py-4 border-t border-white/10">
            <p className="text-sm text-center text-white/30">
              Use arrow keys to navigate
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

/**
 * TOC Toggle Button - Glassmorphic style
 */
export function TOCToggleButton({ className }: { className?: string }) {
  const { toggleTableOfContents } = useBookStore();

  return (
    <button
      onClick={toggleTableOfContents}
      className={cn(
        'fixed top-24 right-6 z-30',
        'nav-button',
        className
      )}
      aria-label="Open table of contents"
      title="Table of Contents"
    >
      <BookMarked className="w-5 h-5" />
    </button>
  );
}
