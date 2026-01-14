'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Book, ChevronDown, ChevronRight } from 'lucide-react';

export interface Chapter {
  id: string;
  number?: number;
  title: string;
  pageNumber: number;
  subsections?: {
    id: string;
    title: string;
    pageNumber: number;
  }[];
}

export interface TableOfContentsProps {
  chapters: Chapter[];
  currentPage: number;
  onNavigate: (pageNumber: number) => void;
  className?: string;
}

/**
 * TableOfContents component - Interactive table of contents with chapter navigation
 * 
 * @example
 * ```tsx
 * <TableOfContents 
 *   chapters={chapters}
 *   currentPage={5}
 *   onNavigate={(page) => goToPage(page)}
 * />
 * ```
 */
export default function TableOfContents({
  chapters,
  currentPage,
  onNavigate,
  className,
}: TableOfContentsProps) {
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set());

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(chapterId)) {
        newSet.delete(chapterId);
      } else {
        newSet.add(chapterId);
      }
      return newSet;
    });
  };

  const getCurrentChapter = () => {
    return chapters.find(
      (chapter) => 
        currentPage >= chapter.pageNumber && 
        (chapters[chapters.indexOf(chapter) + 1]?.pageNumber > currentPage || 
         chapters.indexOf(chapter) === chapters.length - 1)
    );
  };

  const currentChapter = getCurrentChapter();

  return (
    <div className={cn('table-of-contents book-card p-6', className)}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-sepia-300">
        <Book className="w-6 h-6 text-sepia-600" />
        <h3 className="font-serif text-2xl font-bold text-ink">Table of Contents</h3>
      </div>

      {/* Chapters List */}
      <nav className="space-y-3">
        {chapters.map((chapter) => {
          const isExpanded = expandedChapters.has(chapter.id);
          const isCurrentChapter = currentChapter?.id === chapter.id;
          const hasSubsections = chapter.subsections && chapter.subsections.length > 0;

          return (
            <div key={chapter.id} className="chapter-item">
              {/* Main Chapter */}
              <button
                onClick={() => {
                  if (hasSubsections) {
                    toggleChapter(chapter.id);
                  } else {
                    onNavigate(chapter.pageNumber);
                  }
                }}
                className={cn(
                  'w-full flex items-start gap-3 p-3 rounded-book text-left',
                  'transition-all duration-300 group',
                  {
                    'bg-sepia-100 border-2 border-sepia-400': isCurrentChapter,
                    'hover:bg-sepia-50 border-2 border-transparent': !isCurrentChapter,
                  }
                )}
              >
                {hasSubsections && (
                  <span className="mt-1">
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-sepia-600" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-sepia-600" />
                    )}
                  </span>
                )}
                
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <div>
                      {chapter.number && (
                        <span className="text-sm font-medium text-sepia-600 uppercase tracking-wider">
                          Chapter {chapter.number}
                        </span>
                      )}
                      <h4 className="font-serif text-lg font-semibold text-ink group-hover:text-sepia-700">
                        {chapter.title}
                      </h4>
                    </div>
                    <span className="text-sm font-serif text-ink-light/60 whitespace-nowrap">
                      {chapter.pageNumber}
                    </span>
                  </div>
                </div>
              </button>

              {/* Subsections */}
              {hasSubsections && isExpanded && (
                <div className="ml-8 mt-2 space-y-2">
                  {chapter.subsections!.map((subsection) => (
                    <button
                      key={subsection.id}
                      onClick={() => onNavigate(subsection.pageNumber)}
                      className={cn(
                        'w-full flex items-baseline justify-between gap-2 p-2 rounded-book text-left',
                        'transition-all duration-300',
                        'hover:bg-sepia-50',
                        {
                          'bg-sepia-50': currentPage === subsection.pageNumber,
                        }
                      )}
                    >
                      <span className="font-body text-base text-ink-light hover:text-ink">
                        {subsection.title}
                      </span>
                      <span className="text-sm font-serif text-ink-light/60">
                        {subsection.pageNumber}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer Note */}
      <div className="mt-6 pt-4 border-t border-sepia-200">
        <p className="text-sm text-ink-light/70 italic text-center font-body">
          Use arrow keys to navigate pages
        </p>
      </div>
    </div>
  );
}
