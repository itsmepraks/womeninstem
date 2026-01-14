'use client';

import React, { useState } from 'react';
import { useBookStore } from '@/lib/store/bookStore';
import { usePageTurn } from '@/hooks/usePageTurn';
import { getChapterByPage } from '@/data/chapters';
import { cn } from '@/lib/utils';
import { Bookmark, BookmarkPlus, Trash2, X } from 'lucide-react';

interface BookmarksProps {
  className?: string;
}

/**
 * Bookmarks panel for managing saved pages
 */
export default function Bookmarks({ className }: BookmarksProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const { bookmarks, addBookmark, removeBookmark, clearBookmarks } = useBookStore();
  const { navigateToPage, currentPage } = usePageTurn();

  const currentChapter = getChapterByPage(currentPage);
  const isBookmarked = bookmarks.some((b) => b.pageNumber === currentPage);

  const handleAddBookmark = () => {
    if (!title.trim() || !currentChapter) return;

    addBookmark({
      pageNumber: currentPage,
      chapterId: currentChapter.id,
      title: title.trim(),
      note: note.trim() || undefined,
    });

    setTitle('');
    setNote('');
    setIsAdding(false);
  };

  const handleNavigate = (pageNumber: number) => {
    navigateToPage(pageNumber);
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'fixed bottom-8 right-8 z-30',
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
          <div
            className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

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
                    <h2 className="text-2xl font-serif font-bold text-ink">Bookmarks</h2>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-sepia-100 transition-book"
                    aria-label="Close bookmarks"
                  >
                    <X className="w-5 h-5 text-ink" />
                  </button>
                </div>
                {bookmarks.length > 0 && (
                  <button
                    onClick={clearBookmarks}
                    className="mt-3 text-sm text-burgundy-600 hover:text-burgundy-700 font-serif underline"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Add Bookmark Section */}
              {!isBookmarked && currentChapter && (
                <div className="px-6 py-4 bg-gold-50 border-b-2 border-sepia-200">
                  {!isAdding ? (
                    <button
                      onClick={() => setIsAdding(true)}
                      className="w-full flex items-center justify-center gap-2 p-3 bg-gold-600 text-parchment rounded-book border-2 border-gold-700 shadow-book hover:bg-gold-700 transition-book font-serif font-semibold"
                    >
                      <BookmarkPlus className="w-5 h-5" />
                      Bookmark This Page
                    </button>
                  ) : (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Bookmark title"
                        className="input-book w-full"
                        autoFocus
                      />
                      <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Add a note (optional)"
                        className="input-book w-full h-20 resize-none"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={handleAddBookmark}
                          disabled={!title.trim()}
                          className="flex-1 px-4 py-2 bg-gold-600 text-parchment rounded-book font-serif font-semibold hover:bg-gold-700 transition-book disabled:opacity-50"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => {
                            setIsAdding(false);
                            setTitle('');
                            setNote('');
                          }}
                          className="px-4 py-2 bg-parchment text-ink rounded-book border-2 border-ink-light font-serif font-semibold hover:bg-parchment-dark transition-book"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Bookmarks List */}
              <div className="flex-1 overflow-y-auto scrollbar-book px-6 py-4">
                {bookmarks.length === 0 ? (
                  <div className="text-center py-12">
                    <BookmarkPlus className="w-16 h-16 text-sepia-300 mx-auto mb-4" />
                    <p className="text-ink-light font-serif text-lg mb-2">No bookmarks yet</p>
                    <p className="text-sm text-ink-light/70">
                      Add bookmarks to save important pages
                    </p>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {bookmarks.map((bookmark) => {
                      const chapter = getChapterByPage(bookmark.pageNumber);
                      const isActive = currentPage === bookmark.pageNumber;

                      return (
                        <li key={bookmark.id}>
                          <div
                            className={cn(
                              'p-4 rounded-book border-2 transition-book group',
                              isActive
                                ? 'bg-gold-50 border-gold-400 shadow-book'
                                : 'bg-parchment-light border-sepia-200 hover:border-gold-300'
                            )}
                          >
                            <button
                              onClick={() => handleNavigate(bookmark.pageNumber)}
                              className="w-full text-left"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <Bookmark className="w-4 h-4 text-gold-600" />
                                <h3 className="font-serif font-semibold text-ink">
                                  {bookmark.title}
                                </h3>
                              </div>
                              {chapter && (
                                <p className="text-sm text-ink-light/70">{chapter.title}</p>
                              )}
                              <p className="text-xs text-ink-light/50 mt-1 font-serif">
                                Page {bookmark.pageNumber + 1}
                              </p>
                              {bookmark.note && (
                                <p className="text-sm text-ink-light italic mt-2">
                                  "{bookmark.note}"
                                </p>
                              )}
                            </button>
                            <button
                              onClick={() => removeBookmark(bookmark.id)}
                              className="mt-2 p-2 hover:bg-burgundy-100 rounded-full transition-book opacity-0 group-hover:opacity-100"
                              aria-label="Remove bookmark"
                            >
                              <Trash2 className="w-4 h-4 text-burgundy-600" />
                            </button>
                          </div>
                        </li>
                      );
                    })}
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
