'use client';

import React, { useRef, useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useBookStore } from '@/lib/store/bookStore';
import { cn } from '@/lib/utils';
import type { BookPage } from '@/types/book';

interface BookContainerProps {
  pages: BookPage[];
  width?: number;
  height?: number;
  showCover?: boolean;
  className?: string;
}

/**
 * BookContainer - Main component that manages the interactive page-flipping book
 * Uses react-pageflip for smooth page-turning animations
 */
export default function BookContainer({
  pages,
  width = 550,
  height = 733,
  showCover = true,
  className,
}: BookContainerProps) {
  const bookRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);
  const { currentPage, setCurrentPage, setIsFlipping, settings } = useBookStore();

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Sync current page with flip book
  useEffect(() => {
    if (bookRef.current && isClient) {
      try {
        bookRef.current.pageFlip().turnToPage(currentPage);
      } catch (error) {
        console.warn('Failed to turn page:', error);
      }
    }
  }, [currentPage, isClient]);

  // Handle page flip events
  const handleFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  const handleFlipStart = () => {
    setIsFlipping(true);
  };

  const handleFlipEnd = () => {
    setIsFlipping(false);
  };

  // Get animation speed in milliseconds
  const getFlipDuration = () => {
    switch (settings.animationSpeed) {
      case 'slow':
        return 800;
      case 'fast':
        return 400;
      default:
        return 600;
    }
  };

  if (!isClient) {
    return (
      <div className={cn('flex items-center justify-center min-h-screen', className)}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-sepia-600 border-t-transparent mx-auto mb-4" />
          <p className="text-ink-light font-serif">Loading book...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('book-container-wrapper', className)}>
      <div className="relative mx-auto" style={{ maxWidth: width * 2 }}>
        {/* Book spine decoration */}
        <div className="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 bg-book-spine shadow-inner-book z-10 pointer-events-none" />
        
        <HTMLFlipBook
          ref={bookRef}
          width={width}
          height={height}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          drawShadow={true}
          flippingTime={getFlipDuration()}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          maxShadowOpacity={0.5}
          showCover={showCover}
          mobileScrollSupport={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
          className="book-flip-container"
          style={{}}
          onFlip={handleFlip}
          onChangeOrientation={() => {}}
          onChangeState={(e: any) => {
            if (e.data === 'flipping') handleFlipStart();
            if (e.data === 'read') handleFlipEnd();
          }}
        >
          {pages.map((page, index) => (
            <div
              key={page.id}
              className="book-page-content bg-parchment shadow-page"
              data-density="hard"
            >
              <div className="h-full w-full p-8 md:p-12 flex flex-col">
                {/* Page number at top */}
                {page.pageNumber > 0 && (
                  <div className="page-number-header text-right mb-4">
                    <span className="text-sm text-ink-light/50 font-serif">
                      {page.pageNumber}
                    </span>
                  </div>
                )}

                {/* Page content */}
                <div className="flex-1 overflow-auto scrollbar-book">
                  {page.content}
                </div>

                {/* Chapter indicator at bottom */}
                {page.chapter && (
                  <div className="mt-4 pt-4 border-t border-sepia-200">
                    <p className="text-xs text-center text-ink-light/60 font-serif uppercase tracking-wider">
                      {page.chapter}
                    </p>
                  </div>
                )}
              </div>

              {/* Page curl effect hint */}
              <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tl from-sepia-200/30 to-transparent rounded-tl-full" />
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}

/**
 * Responsive wrapper that adjusts book size based on screen size
 */
export function ResponsiveBookContainer({
  pages,
  showCover = true,
  className,
}: Omit<BookContainerProps, 'width' | 'height'>) {
  const [dimensions, setDimensions] = useState({ width: 550, height: 733 });

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      
      if (screenWidth < 640) {
        // Mobile
        setDimensions({ width: 300, height: 400 });
      } else if (screenWidth < 1024) {
        // Tablet
        setDimensions({ width: 400, height: 533 });
      } else {
        // Desktop
        setDimensions({ width: 550, height: 733 });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <BookContainer
      pages={pages}
      width={dimensions.width}
      height={dimensions.height}
      showCover={showCover}
      className={className}
    />
  );
}
