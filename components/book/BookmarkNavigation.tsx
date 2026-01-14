'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Bookmark, Plus, X, Check } from 'lucide-react';

export interface BookmarkItem {
  id: string;
  pageNumber: number;
  title: string;
  note?: string;
  createdAt: Date;
}

export interface BookmarkNavigationProps {
  currentPage: number;
  onNavigate: (pageNumber: number) => void;
  className?: string;
}

/**
 * BookmarkNavigation component - Manage and navigate bookmarks
 * 
 * @example
 * ```tsx
 * <BookmarkNavigation 
 *   currentPage={5}
 *   onNavigate={(page) => goToPage(page)}
 * />
 * ```
 */
export default function BookmarkNavigation({
  currentPage,
  onNavigate,
  className,
}: BookmarkNavigationProps) {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const [isAddingBookmark, setIsAddingBookmark] = useState(false);
  const [bookmarkTitle, setBookmarkTitle] = useState('');
  const [bookmarkNote, setBookmarkNote] = useState('');

  // Load bookmarks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('book-bookmarks');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setBookmarks(parsed.map((b: any) => ({
          ...b,
          createdAt: new Date(b.createdAt),
        })));
      } catch (e) {
        console.error('Failed to load bookmarks');
      }
    }
  }, []);

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('book-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const isCurrentPageBookmarked = bookmarks.some((b) => b.pageNumber === currentPage);

  const addBookmark = () => {
    if (!bookmarkTitle.trim()) return;

    const newBookmark: BookmarkItem = {
      id: `bookmark-${Date.now()}`,
      pageNumber: currentPage,
      title: bookmarkTitle,
      note: bookmarkNote || undefined,
      createdAt: new Date(),
    };

    setBookmarks((prev) => [...prev, newBookmark]);
    setBookmarkTitle('');
    setBookmarkNote('');
    setIsAddingBookmark(false);
  };

  const removeBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  const sortedBookmarks = [...bookmarks].sort((a, b) => a.pageNumber - b.pageNumber);

  return (
    <div className={cn('bookmark-navigation book-card p-6', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-burgundy-300">
        <div className="flex items-center gap-3">
          <Bookmark className="w-6 h-6 text-burgundy-600" />
          <h3 className="font-serif text-2xl font-bold text-ink">Bookmarks</h3>
        </div>
        <span className="text-sm font-serif text-ink-light">
          {bookmarks.length} saved
        </span>
      </div>

      {/* Add Bookmark Button */}
      {!isAddingBookmark && (
        <button
          onClick={() => setIsAddingBookmark(true)}
          className={cn(
            'w-full flex items-center justify-center gap-2 p-3 mb-4',
            'bg-burgundy-600 text-parchment rounded-book',
            'border-2 border-burgundy-700 shadow-book',
            'hover:bg-burgundy-700 hover:shadow-book-lg transition-all duration-300',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            { 'opacity-50': isCurrentPageBookmarked }
          )}
          disabled={isCurrentPageBookmarked}
        >
          {isCurrentPageBookmarked ? (
            <>
              <Check className="w-5 h-5" />
              <span className="font-serif font-semibold">Page Bookmarked</span>
            </>
          ) : (
            <>
              <Plus className="w-5 h-5" />
              <span className="font-serif font-semibold">Bookmark This Page</span>
            </>
          )}
        </button>
      )}

      {/* Add Bookmark Form */}
      {isAddingBookmark && (
        <div className="mb-4 p-4 bg-parchment-light rounded-book border-2 border-burgundy-300">
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">
                Bookmark Title *
              </label>
              <input
                type="text"
                value={bookmarkTitle}
                onChange={(e) => setBookmarkTitle(e.target.value)}
                placeholder="e.g., Important concept"
                className="input-book w-full"
                autoFocus
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">
                Note (optional)
              </label>
              <textarea
                value={bookmarkNote}
                onChange={(e) => setBookmarkNote(e.target.value)}
                placeholder="Add a note about this bookmark..."
                className="input-book w-full h-20 resize-none"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={addBookmark}
                disabled={!bookmarkTitle.trim()}
                className="flex-1 px-4 py-2 bg-burgundy-600 text-parchment rounded-book border-2 border-burgundy-700 font-serif font-semibold hover:bg-burgundy-700 transition-all disabled:opacity-50"
              >
                Save Bookmark
              </button>
              <button
                onClick={() => {
                  setIsAddingBookmark(false);
                  setBookmarkTitle('');
                  setBookmarkNote('');
                }}
                className="px-4 py-2 bg-parchment text-ink rounded-book border-2 border-ink-light font-serif font-semibold hover:bg-parchment-dark transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bookmarks List */}
      {sortedBookmarks.length > 0 ? (
        <div className="space-y-3 max-h-96 overflow-y-auto scrollbar-book">
          {sortedBookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className={cn(
                'group p-4 rounded-book border-2 transition-all duration-300',
                {
                  'bg-burgundy-50 border-burgundy-400': bookmark.pageNumber === currentPage,
                  'bg-parchment-light border-sepia-200 hover:border-burgundy-300': bookmark.pageNumber !== currentPage,
                }
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <button
                  onClick={() => onNavigate(bookmark.pageNumber)}
                  className="flex-1 text-left"
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <h4 className="font-serif text-lg font-semibold text-ink group-hover:text-burgundy-700">
                      {bookmark.title}
                    </h4>
                    <span className="text-sm font-serif text-ink-light/60">
                      p. {bookmark.pageNumber}
                    </span>
                  </div>
                  {bookmark.note && (
                    <p className="text-sm text-ink-light/70 font-body mt-1">
                      {bookmark.note}
                    </p>
                  )}
                </button>
                <button
                  onClick={() => removeBookmark(bookmark.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-burgundy-100 rounded"
                  aria-label="Remove bookmark"
                >
                  <X className="w-4 h-4 text-burgundy-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <Bookmark className="w-12 h-12 mx-auto text-ink-light/30 mb-3" />
          <p className="text-sm text-ink-light/70 font-body">
            No bookmarks yet. Add one to mark important pages!
          </p>
        </div>
      )}
    </div>
  );
}
