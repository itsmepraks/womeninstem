'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface BookReaderProps {
  pages: React.ReactNode[];
  initialPage?: number;
  onPageChange?: (page: number) => void;
  showPageNumbers?: boolean;
  enableSounds?: boolean;
}

/**
 * BookReader component - Main interactive book reader with page-turning functionality
 * 
 * @example
 * ```tsx
 * <BookReader 
 *   pages={[<Page1 />, <Page2 />, <Page3 />]} 
 *   showPageNumbers={true}
 *   enableSounds={false}
 * />
 * ```
 */
export default function BookReader({
  pages,
  initialPage = 0,
  onPageChange,
  showPageNumbers = true,
  enableSounds = false,
}: BookReaderProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'left' | 'right'>('right');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const totalPages = pages.length;

  // Play page turn sound
  const playPageTurnSound = () => {
    if (enableSounds && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Silently fail if audio doesn't play
      });
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('right');
      playPageTurnSound();
      
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        onPageChange?.(currentPage + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('left');
      playPageTurnSound();
      
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        onPageChange?.(currentPage - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 0 && pageNumber < totalPages && pageNumber !== currentPage && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection(pageNumber > currentPage ? 'right' : 'left');
      playPageTurnSound();
      
      setTimeout(() => {
        setCurrentPage(pageNumber);
        onPageChange?.(pageNumber);
        setIsFlipping(false);
      }, 600);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNextPage();
      } else if (e.key === 'ArrowLeft') {
        goToPreviousPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isFlipping]);

  return (
    <div className="book-reader-container relative w-full max-w-7xl mx-auto">
      {/* Hidden audio element for page turn sound */}
      {enableSounds && (
        <audio ref={audioRef} preload="auto">
          <source src="/sounds/page-turn.mp3" type="audio/mpeg" />
          <source src="/sounds/page-turn.ogg" type="audio/ogg" />
        </audio>
      )}

      {/* Book Spine Shadow */}
      <div className="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 bg-gradient-to-r from-transparent via-ink/10 to-transparent z-20 pointer-events-none hidden lg:block" />

      {/* Main Book Container */}
      <div className="relative flex items-center justify-center perspective-container">
        {/* Book Pages */}
        <div className="book-pages relative w-full" style={{ minHeight: '600px' }}>
          {/* Current Page */}
          <div
            className={cn(
              'book-page-container absolute inset-0 transition-all duration-600',
              {
                'page-turn-exit-right': isFlipping && flipDirection === 'right',
                'page-turn-exit-left': isFlipping && flipDirection === 'left',
                'opacity-0': isFlipping,
              }
            )}
          >
            <div className="book-page bg-parchment shadow-book-xl rounded-page border-2 border-sepia-200/50 p-8 md:p-12 lg:p-16 h-full overflow-y-auto scrollbar-book">
              {pages[currentPage]}
              
              {/* Page Number */}
              {showPageNumbers && (
                <div className="page-number mt-8">
                  {currentPage + 1}
                </div>
              )}
            </div>
          </div>

          {/* Page Curl Effect Overlay */}
          <div className="absolute top-0 right-0 w-24 h-24 page-curl-overlay pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 0 || isFlipping}
          className={cn(
            'absolute left-4 top-1/2 -translate-y-1/2 z-30',
            'w-12 h-12 rounded-full',
            'bg-sepia-600 text-parchment border-2 border-sepia-700',
            'shadow-book hover:shadow-book-lg hover:-translate-y-1/2 hover:scale-110',
            'transition-all duration-300',
            'disabled:opacity-30 disabled:cursor-not-allowed',
            'focus:outline-none focus:ring-2 focus:ring-sepia-500 focus:ring-offset-2'
          )}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-6 h-6 mx-auto" />
        </button>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages - 1 || isFlipping}
          className={cn(
            'absolute right-4 top-1/2 -translate-y-1/2 z-30',
            'w-12 h-12 rounded-full',
            'bg-sepia-600 text-parchment border-2 border-sepia-700',
            'shadow-book hover:shadow-book-lg hover:-translate-y-1/2 hover:scale-110',
            'transition-all duration-300',
            'disabled:opacity-30 disabled:cursor-not-allowed',
            'focus:outline-none focus:ring-2 focus:ring-sepia-500 focus:ring-offset-2'
          )}
          aria-label="Next page"
        >
          <ChevronRight className="w-6 h-6 mx-auto" />
        </button>
      </div>

      {/* Page Progress Bar */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="flex-1 max-w-md h-2 bg-sepia-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-sepia-600 transition-all duration-500 ease-out"
            style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
          />
        </div>
        <span className="text-sm font-serif text-ink-light">
          {currentPage + 1} / {totalPages}
        </span>
      </div>
    </div>
  );
}
