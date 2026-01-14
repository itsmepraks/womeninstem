'use client';

import React, { useState } from 'react';
import { useBookStore } from '@/lib/store/bookStore';
import { usePageTurn } from '@/hooks/usePageTurn';
import { soundManager } from '@/lib/utils/sound';
import { cn } from '@/lib/utils';
import { Bookmark, BookmarkPlus, Trash2, X } from 'lucide-react';
import type { Chapter } from '@/types/book';

interface BookmarksProps {
  chapters: Chapter[];
  className?: string;
}

/**
 * Bookmarks Panel - Manage and navigate to saved bookmarks
 */
export default function Bookmarks({ chapters, className }: BookmarksProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { bookmarks, removeBookmark, clearBookmarks, settings } = useBookStore();
  const { navigateToPage, currentPage } = usePageTurn();

  const handleBookmarkClick = (pageNumber: number) => {
    navigateToPage(pageNumber);
    setIsOpen(false);
  };

  const handleRemoveBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    removeBookmark(id);
    if (settings.soundEnabled) {
      soundManager.play('bookmark');
    }
  };

  const getChapterTitle = (chapterId: string) => {
    const chapter = chapters.find((c) => c.id === chapterId);
    return chapter?.title || 'Unknown Chapter';
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'fixed top-36 right-8 z-30',
          'p-4 bg-gold-600 text-parchment rounded-full shadow-book-lg',
          'hover:bg-gold-700 hover:shadow-book-xl hover:scale-105',
          'transition-book focus:outline-none focus:ring-2 focus:ring-gold-500',
          bookmarks.length > 0 && 'relative',
          className
        )}
        aria-label="View bookmarks"
        title="Bookmarks"
      >
        <Bookmark className="w-6 h-6" />
        {bookmarks.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-burgundy-600 text-parchment text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {bookmarks.length}
          </span>
        )}
      </button>

      {/* Bookmarks Panel */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <aside
            className={cn(
              'fixed right-0 top-0 bottom-0 w-full sm:w-96',
              'bg-parchment shadow-book-xl z-50',
              'animate-slide-in-right overflow-hidden'
            )}
            role="dialog"
            aria-label="Bookmarks"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="px-6 py-5 border-b-2 border-sepia-300 bg-parchment-light">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bookmark className="w-6 h-6 text-gold-600" />
                    <h2 className="text-2xl font-serif font-bold text-ink">
                      Bookmarks
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'p-2 rounded-full hover:bg-sepia-100',
                      'transition-book focus:outline-none focus:ring-2 focus:ring-sepia-500'
                    )}
                    aria-label="Close bookmarks"
                  >
                    <X className="w-5 h-5 text-ink" />
                  </button>
                </div>

                {/* Clear all button */}
                {bookmarks.length > 0 && (
                  <button
                    onClick={clearBookmarks}
                    className="mt-3 text-sm text-burgundy-600 hover:text-burgundy-700 font-serif underline"
                  >
                    Clear all bookmarks
                  </button>
                )}
              </div>

              {/* Bookmarks List */}
              <div className="flex-1 overflow-y-auto scrollbar-book px-6 py-4">
                {bookmarks.length === 0 ? (
                  <div className="text-center py-12">
                    <BookmarkPlus className="w-16 h-16 text-sepia-300 mx-auto mb-4" />
                    <p className="text-ink-light font-serif text-lg mb-2">
                      No bookmarks yet
                    </p>
                    <p className="text-sm text-ink-light/70">
                      Click the bookmark button on any page to save your place
                    </p>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {bookmarks.map((bookmark) => (
                      <li key={bookmark.id}>
                        <button
                          onClick={() => handleBookmarkClick(bookmark.pageNumber)}
                          className={cn(
                            'w-full text-left p-4 rounded-book transition-book',
                            'border-2 bg-parchment-light hover:shadow-book',
                            currentPage === bookmark.pageNumber
                              ? 'border-gold-400 shadow-book bg-gold-50'
                              : 'border-sepia-200 hover:border-sepia-400',
                            'focus:outline-none focus:ring-2 focus:ring-gold-500'
                          )}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <Bookmark className="w-4 h-4 text-gold-600 flex-shrink-0" />
                                <h3 className="font-serif font-semibold text-ink">
                                  {bookmark.title}
                                </h3>
                              </div>
                              <p className="text-sm text-ink-light/70">
                                {getChapterTitle(bookmark.chapterId)}
                              </p>
                              <p className="text-xs text-ink-light/50 mt-1 font-serif">
                                Page {bookmark.pageNumber + 1}
                              </p>
                              {bookmark.note && (
                                <p className="text-sm text-ink-light italic mt-2">
                                  "{bookmark.note}"
                                </p>
                              )}
                            </div>
                            <button
                              onClick={(e) => handleRemoveBookmark(bookmark.id, e)}
                              className="p-2 hover:bg-burgundy-100 rounded-full transition-book"
                              aria-label="Remove bookmark"
                            >
                              <Trash2 className="w-4 h-4 text-burgundy-600" />
                            </button>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
}

/**
 * Add Bookmark Button - Floating button to bookmark current page
 */
export function AddBookmarkButton({
  currentChapter,
  className,
}: {
  currentChapter: Chapter | null;
  className?: string;
}) {
  const { currentPage, totalPages } = usePageTurn();
  const { bookmarks, addBookmark, settings } = useBookStore();

  const isBookmarked = bookmarks.some((b) => b.pageNumber === currentPage);

  const handleAddBookmark = () => {
    if (isBookmarked || !currentChapter) return;

    addBookmark({
      pageNumber: currentPage,
      chapterId: currentChapter.id,
      title: `Page ${currentPage + 1}`,
    });

    if (settings.soundEnabled) {
      soundManager.play('bookmark');
    }
  };

  return (
    <button
      onClick={handleAddBookmark}
      disabled={isBookmarked}
      className={cn(
        'fixed bottom-24 right-8 z-30',
        'p-4 rounded-full shadow-book-lg',
        'transition-book focus:outline-none focus:ring-2',
        isBookmarked
          ? 'bg-gold-600 text-parchment cursor-default'
          : 'bg-parchment border-2 border-gold-600 text-gold-600 hover:bg-gold-50 hover:shadow-book-xl hover:scale-105',
        'focus:ring-gold-500',
        className
      )}
      aria-label={isBookmarked ? 'Page bookmarked' : 'Bookmark this page'}
      title={isBookmarked ? 'Already bookmarked' : 'Bookmark this page'}
    >
      {isBookmarked ? (
        <Bookmark className="w-6 h-6 fill-current" />
      ) : (
        <BookmarkPlus className="w-6 h-6" />
      )}
    </button>
  );
}

/**
 * Reading Progress Bar - Visual indicator of reading progress
 */
export function ReadingProgress() {
  const { currentPage, totalPages } = usePageTurn();
  const progress = totalPages > 0 ? ((currentPage + 1) / totalPages) * 100 : 0;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-sepia-200">
      <div
        className="h-full bg-gradient-to-r from-burgundy-600 via-gold-500 to-burgundy-600 transition-all duration-300"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />
    </div>
  );
}
