/**
 * BookPage Component with Interactive Layers and 3D Animation Integration
 * 
 * Wraps individual book pages with all visual layers needed for realistic
 * page-turning effects including shadows, textures, corners, and interactions.
 */

'use client';

import React, { ReactNode, useCallback } from 'react';
import { usePageTurn } from '@/hooks/usePageTurn';
import { useBookStore } from '@/lib/store/bookStore';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

export interface BookPageProps {
  children: ReactNode;
  pageNumber: number;
  isActive: boolean;
  isPast?: boolean;
  isFuture?: boolean;
  className?: string;
  onPageTurn?: () => void;
}

/**
 * Individual book page with full animation support and interactive layers
 */
export default function BookPage({
  children,
  pageNumber,
  isActive,
  isPast = false,
  isFuture = false,
  className,
  onPageTurn,
}: BookPageProps) {
  const { pageRef, dragState, handlers, createRipple } = usePageTurn({
    enableSound: true,
    dragThreshold: 30,
    enableCornerDrag: true,
  });

  const { isAnimating, animationDirection } = useBookStore();

  // Handle corner click to turn page
  const handleCornerClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    createRipple(e);
    if (onPageTurn) {
      onPageTurn();
    }
  }, [createRipple, onPageTurn]);

  return (
    <div
      ref={pageRef}
      className={cn(
        'book-page',
        'relative bg-parchment',
        'min-h-[600px] w-full',
        // Animation states
        isActive && isAnimating && animationDirection === 'forward' && 'flipping-forward',
        isActive && isAnimating && animationDirection === 'backward' && 'flipping-backward',
        dragState.isDragging && 'dragging',
        // Position states
        isPast && 'translate-x-[-100%] rotate-y-[-180deg]',
        isFuture && 'translate-x-0',
        // Interaction states
        !dragState.isDragging && !isAnimating && 'cursor-grab hover:cursor-grab',
        dragState.isDragging && 'cursor-grabbing',
        className
      )}
      {...handlers}
      role="article"
      aria-label={`Page ${pageNumber}`}
    >
      {/* Paper texture overlay */}
      <div className="paper-texture" aria-hidden="true" />

      {/* Dynamic shadow layer */}
      <div className="page-shadow" aria-hidden="true" />

      {/* Page curl overlay */}
      <div className="page-curl-overlay" aria-hidden="true" />

      {/* Page spine (left edge) */}
      <div className="page-spine" aria-hidden="true" />

      {/* Edge highlight on hover */}
      <div className="page-edge-highlight" aria-hidden="true" />

      {/* Main content area */}
      <div className="relative z-10 h-full p-8 md:p-12 lg:p-16">
        {children}
      </div>

      {/* Page number footer */}
      <div 
        className="page-number"
        aria-label={`Page ${pageNumber}`}
      >
        {pageNumber}
      </div>

      {/* Corner fold indicator (interactive) */}
      {isActive && !isAnimating && (
        <button
          className="page-corner-fold"
          onClick={handleCornerClick}
          aria-label="Turn to next page"
          title="Click to turn page"
        >
          <ChevronRight 
            className="absolute bottom-2 right-2 w-5 h-5 text-burgundy-600/50 pointer-events-none" 
            aria-hidden="true"
          />
        </button>
      )}

      {/* Accessibility: Screen reader page info */}
      <div className="sr-only">
        Page {pageNumber} content
      </div>
    </div>
  );
}

/**
 * Display name for React DevTools
 */
BookPage.displayName = 'BookPage';
