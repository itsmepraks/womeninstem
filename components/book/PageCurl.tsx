'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface PageCurlProps {
  children: React.ReactNode;
  onFlip?: () => void;
  side?: 'left' | 'right';
  className?: string;
}

/**
 * PageCurl component - Adds interactive page curl effect on hover
 * 
 * @example
 * ```tsx
 * <PageCurl side="right" onFlip={goToNextPage}>
 *   <div>Page content here</div>
 * </PageCurl>
 * ```
 */
export default function PageCurl({
  children,
  onFlip,
  side = 'right',
  className,
}: PageCurlProps) {
  const [isCurling, setIsCurling] = useState(false);
  const [curlPosition, setCurlPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate distance from corner
    const cornerX = side === 'right' ? rect.width : 0;
    const cornerY = 0;
    const distance = Math.sqrt(
      Math.pow(x - cornerX, 2) + Math.pow(y - cornerY, 2)
    );

    // Only show curl if close to corner (within 150px)
    if (distance < 150) {
      setIsCurling(true);
      setCurlPosition({ x, y });
    } else {
      setIsCurling(false);
    }
  };

  const handleMouseLeave = () => {
    setIsCurling(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cornerX = side === 'right' ? rect.width : 0;
    const cornerY = 0;
    const distance = Math.sqrt(
      Math.pow(x - cornerX, 2) + Math.pow(y - cornerY, 2)
    );

    // If clicked near corner, trigger flip
    if (distance < 150 && onFlip) {
      onFlip();
    }
  };

  return (
    <div
      className={cn('page-curl-container relative overflow-hidden', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Main Content */}
      <div className="relative z-10">{children}</div>

      {/* Page Curl Effect */}
      {isCurling && (
        <div
          className={cn(
            'absolute z-20 pointer-events-none transition-opacity duration-300',
            side === 'right' ? 'top-0 right-0' : 'top-0 left-0'
          )}
          style={{
            width: '200px',
            height: '200px',
          }}
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            style={{
              transform: side === 'left' ? 'scaleX(-1)' : 'none',
            }}
          >
            {/* Shadow gradient */}
            <defs>
              <linearGradient id="curlShadow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(45, 37, 32, 0.3)" />
                <stop offset="100%" stopColor="rgba(45, 37, 32, 0)" />
              </linearGradient>
            </defs>

            {/* Curl shape */}
            <path
              d="M200,0 Q180,20 160,40 Q140,60 120,80 Q100,100 80,120 Q60,140 40,160 Q20,180 0,200 L200,200 L200,0 Z"
              fill="url(#curlShadow)"
              className="animate-pulse-book"
            />
            
            {/* Curl page edge */}
            <path
              d="M200,0 Q180,20 160,40 Q140,60 120,80 Q100,100 80,120 Q60,140 40,160 Q20,180 0,200"
              fill="none"
              stroke="rgba(139, 122, 86, 0.4)"
              strokeWidth="2"
            />
          </svg>
        </div>
      )}

      {/* Hover hint */}
      {isCurling && (
        <div
          className={cn(
            'absolute z-30 pointer-events-none',
            side === 'right' ? 'top-4 right-4' : 'top-4 left-4'
          )}
        >
          <div className="bg-sepia-600 text-parchment px-3 py-1 rounded-full text-xs font-serif font-semibold shadow-book animate-pulse-book">
            Click to turn page
          </div>
        </div>
      )}
    </div>
  );
}
