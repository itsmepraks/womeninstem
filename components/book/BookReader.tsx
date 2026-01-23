'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useBookStore } from '@/lib/store/bookStore';
import { chapters } from '@/data/chapters';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

// Chapter page components
import CoverPage from './pages/CoverPage';
import ExplorePage from './pages/ExplorePage';
import LearningPage from './pages/LearningPage';
import MentorshipPage from './pages/MentorshipPage';
import CommunityPage from './pages/CommunityPage';
import ResourcesPage from './pages/ResourcesPage';

/**
 * Main Book Reader - The entire website experience
 */
export default function BookReader() {
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward' | null>(null);

  const { currentPage, goToPage, setTotalPages } = useBookStore();

  useEffect(() => {
    setTotalPages(chapters.length);
  }, [setTotalPages]);

  const canGoNext = currentPage < chapters.length - 1;
  const canGoPrevious = currentPage > 0;

  const handleNextPage = useCallback(() => {
    if (!canGoNext || isFlipping) return;
    setFlipDirection('forward');
    setIsFlipping(true);

    setTimeout(() => {
      goToPage(currentPage + 1);
      setIsFlipping(false);
      setFlipDirection(null);
    }, 400);
  }, [canGoNext, isFlipping, currentPage, goToPage]);

  const handlePreviousPage = useCallback(() => {
    if (!canGoPrevious || isFlipping) return;
    setFlipDirection('backward');
    setIsFlipping(true);

    setTimeout(() => {
      goToPage(currentPage - 1);
      setIsFlipping(false);
      setFlipDirection(null);
    }, 400);
  }, [canGoPrevious, isFlipping, currentPage, goToPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextPage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePreviousPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextPage, handlePreviousPage]);

  // Render page content based on current chapter
  const renderPageContent = () => {
    switch (currentPage) {
      case 0:
        return <CoverPage />;
      case 1:
        return <ExplorePage />;
      case 2:
        return <LearningPage />;
      case 3:
        return <MentorshipPage />;
      case 4:
        return <CommunityPage />;
      case 5:
        return <ResourcesPage />;
      default:
        return <CoverPage />;
    }
  };

  const currentChapter = chapters[currentPage];
  const progress = Math.round(((currentPage + 1) / chapters.length) * 100);

  return (
    <div className="min-h-screen pt-20 pb-8">
      {/* Progress indicator */}
      <div className="fixed top-16 left-0 right-0 z-40">
        <div className="h-0.5 bg-white/5">
          <div
            className="h-full bg-white/30 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Book container */}
      <div className="book-container max-w-6xl mx-auto px-4">
        <div className="book relative">
          {/* Book shadow */}
          <div className="absolute -inset-6 bg-black/40 blur-3xl rounded-3xl" />

          {/* Main book content */}
          <div
            className={cn(
              'relative bg-gradient-to-br from-obsidian-800 via-obsidian-900 to-obsidian',
              'rounded-2xl overflow-hidden',
              'border border-white/5',
              'shadow-book',
              'min-h-[70vh]',
              isFlipping && 'pointer-events-none'
            )}
          >
            {/* Page fold effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/30 to-transparent pointer-events-none z-10" />

            {/* Chapter indicator */}
            <div className="absolute top-4 left-4 z-20">
              <div className="flex items-center gap-2 text-white/30 text-sm">
                <BookOpen className="w-4 h-4" />
                <span>{currentChapter?.title}</span>
              </div>
            </div>

            {/* Page content */}
            <div
              className={cn(
                'relative p-8 md:p-12 lg:p-16',
                'transition-all duration-400',
                isFlipping && flipDirection === 'forward' && 'animate-page-flip-forward',
                isFlipping && flipDirection === 'backward' && 'opacity-50 scale-95'
              )}
            >
              {renderPageContent()}
            </div>

            {/* Page number */}
            <div className="absolute bottom-4 right-6 text-white/20 text-sm font-serif">
              {currentPage + 1} / {chapters.length}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePreviousPage}
            disabled={!canGoPrevious || isFlipping}
            className={cn(
              'absolute left-2 md:-left-16 top-1/2 -translate-y-1/2',
              'nav-button',
              'z-20'
            )}
            aria-label="Previous chapter"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNextPage}
            disabled={!canGoNext || isFlipping}
            className={cn(
              'absolute right-2 md:-right-16 top-1/2 -translate-y-1/2',
              'nav-button',
              'z-20'
            )}
            aria-label="Next chapter"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Keyboard hint */}
      <div className="text-center mt-8">
        <p className="text-white/20 text-sm">
          Use ← → to navigate chapters
        </p>
      </div>
    </div>
  );
}
