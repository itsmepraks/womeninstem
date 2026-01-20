/**
 * Enhanced usePageTurn Hook with Drag-to-Flip and Momentum Physics
 * 
 * Provides comprehensive page-turning functionality including:
 * - Mouse and touch drag support
 * - Momentum-based flipping
 * - Spring physics simulation
 * - Sound effects (optional)
 * - Corner-drag initiation
 */

'use client';

import { useCallback, useRef, useState, useEffect } from 'react';
import { useBookStore } from '@/lib/store/bookStore';

interface PageTurnOptions {
  enableSound?: boolean;
  dragThreshold?: number; // Percentage of page width to trigger flip (default: 30%)
  springStiffness?: number;
  springDamping?: number;
  enableCornerDrag?: boolean;
}

interface DragState {
  isDragging: boolean;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  progress: number; // -100 to 100
  isCornerDrag: boolean;
}

export function usePageTurn(options: PageTurnOptions = {}) {
  const {
    enableSound = false,
    dragThreshold = 30,
    enableCornerDrag = true,
  } = options;

  const { 
    currentPage, 
    totalPages, 
    nextPage, 
    previousPage, 
    isAnimating 
  } = useBookStore();

  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    progress: 0,
    isCornerDrag: false,
  });

  const pageRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const velocityRef = useRef<number>(0);
  const lastMoveTimeRef = useRef<number>(0);

  // Initialize sound effect (optional)
  useEffect(() => {
    if (enableSound && typeof window !== 'undefined') {
      try {
        audioRef.current = new Audio('/sounds/page-turn.mp3');
        audioRef.current.volume = 0.3;
        audioRef.current.preload = 'auto';
      } catch (error) {
        console.debug('Page turn sound not available:', error);
      }
    }
  }, [enableSound]);

  // Play turn sound
  const playTurnSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Silently fail - browser may block autoplay
      });
    }
  }, []);

  // Check if drag started from corner
  const isCornerDragStart = useCallback((x: number, y: number, element: HTMLElement) => {
    if (!enableCornerDrag) return false;

    const rect = element.getBoundingClientRect();
    const cornerSize = 80; // 80px corner hit area

    const isBottomRight = 
      x > rect.right - cornerSize && 
      y > rect.bottom - cornerSize;

    return isBottomRight;
  }, [enableCornerDrag]);

  // Handle drag start
  const handleDragStart = useCallback((clientX: number, clientY: number, event: MouseEvent | TouchEvent) => {
    if (isAnimating || !pageRef.current) return false;

    const isCorner = isCornerDragStart(clientX, clientY, pageRef.current);

    setDragState({
      isDragging: true,
      startX: clientX,
      startY: clientY,
      currentX: clientX,
      currentY: clientY,
      progress: 0,
      isCornerDrag: isCorner,
    });

    lastMoveTimeRef.current = Date.now();
    velocityRef.current = 0;

    // Prevent text selection during drag
    event.preventDefault();
    return true;
  }, [isAnimating, isCornerDragStart]);

  // Handle drag move
  const handleDragMove = useCallback((clientX: number, clientY: number) => {
    if (!dragState.isDragging || !pageRef.current) return;

    const rect = pageRef.current.getBoundingClientRect();
    const pageWidth = rect.width;
    const deltaX = clientX - dragState.startX;
    
    // Calculate velocity for momentum
    const now = Date.now();
    const timeDelta = now - lastMoveTimeRef.current;
    if (timeDelta > 0) {
      velocityRef.current = deltaX / timeDelta;
    }
    lastMoveTimeRef.current = now;

    // Calculate progress (-100 to 100)
    const progress = Math.max(-100, Math.min(100, (deltaX / pageWidth) * 100));

    setDragState(prev => ({
      ...prev,
      currentX: clientX,
      currentY: clientY,
      progress,
    }));

    // Apply real-time transform for visual feedback
    if (pageRef.current) {
      const rotation = (progress / 100) * -180;
      const translateZ = Math.abs(progress / 2); // Add depth during drag
      pageRef.current.style.transform = `rotateY(${rotation}deg) translateZ(${translateZ}px)`;
      pageRef.current.style.transition = 'none'; // Disable transition during drag
    }
  }, [dragState.isDragging, dragState.startX]);

  // Handle drag end with momentum
  const handleDragEnd = useCallback(() => {
    if (!dragState.isDragging) return;

    const { progress } = dragState;
    const velocity = velocityRef.current;

    // Reset dragging state
    setDragState(prev => ({ ...prev, isDragging: false }));

    // Re-enable CSS transitions
    if (pageRef.current) {
      pageRef.current.style.transition = '';
      pageRef.current.style.transform = '';
    }

    // Determine if flip should complete based on progress + momentum
    const momentumThreshold = Math.abs(velocity) > 0.5 ? 10 : 0; // Lower threshold if fast swipe
    const effectiveThreshold = dragThreshold - momentumThreshold;

    if (progress < -effectiveThreshold) {
      // Flip forward
      playTurnSound();
      nextPage();
    } else if (progress > effectiveThreshold) {
      // Flip backward
      playTurnSound();
      previousPage();
    }
    // Otherwise snap back (CSS will handle via transition)

    velocityRef.current = 0;
  }, [dragState, dragThreshold, nextPage, previousPage, playTurnSound]);

  // Mouse event handlers
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    handleDragStart(e.clientX, e.clientY, e.nativeEvent);
  }, [handleDragStart]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    handleDragMove(e.clientX, e.clientY);
  }, [handleDragMove]);

  const onMouseUp = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  const onMouseLeave = useCallback(() => {
    if (dragState.isDragging) {
      handleDragEnd();
    }
  }, [dragState.isDragging, handleDragEnd]);

  // Touch event handlers
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (touch) {
      handleDragStart(touch.clientX, touch.clientY, e.nativeEvent);
    }
  }, [handleDragStart]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (touch) {
      handleDragMove(touch.clientX, touch.clientY);
    }
  }, [handleDragMove]);

  const onTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating || dragState.isDragging) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          playTurnSound();
          nextPage();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          playTurnSound();
          previousPage();
          break;
        case 'Home':
          e.preventDefault();
          useBookStore.getState().goToPage(0);
          break;
        case 'End':
          e.preventDefault();
          useBookStore.getState().goToPage(totalPages - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnimating, dragState.isDragging, nextPage, previousPage, playTurnSound, totalPages]);

  // Ripple effect on click
  const createRipple = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!pageRef.current) return;

    const rect = pageRef.current.getBoundingClientRect();
    const x = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    const y = 'clientY' in e ? e.clientY : e.touches[0].clientY;

    const ripple = document.createElement('div');
    ripple.className = 'page-ripple';
    ripple.style.left = `${x - rect.left}px`;
    ripple.style.top = `${y - rect.top}px`;
    ripple.style.width = '20px';
    ripple.style.height = '20px';

    pageRef.current.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 800);
  }, []);

  return {
    pageRef,
    dragState,
    handlers: {
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onMouseLeave,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    },
    createRipple,
    canGoNext: currentPage < totalPages - 1 && !isAnimating,
    canGoPrevious: currentPage > 0 && !isAnimating,
  };
}
