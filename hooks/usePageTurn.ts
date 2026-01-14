/**
 * Complete hook for page-turning functionality with sound and keyboard navigation
 */
import { useCallback, useEffect } from 'react';
import { useBookStore } from '@/lib/store/bookStore';
import { soundManager } from '@/lib/utils/sound';

export function usePageTurn() {
  const {
    currentPage,
    totalPages,
    isFlipping,
    settings,
    nextPage,
    previousPage,
    goToPage,
    setIsFlipping,
  } = useBookStore();

  // Preload sounds on mount
  useEffect(() => {
    soundManager.preloadSounds();
    soundManager.setEnabled(settings.soundEnabled);
  }, [settings.soundEnabled]);

  // Get animation duration based on speed setting
  const getAnimationDuration = useCallback(() => {
    switch (settings.animationSpeed) {
      case 'slow':
        return 800;
      case 'fast':
        return 400;
      default:
        return 600;
    }
  }, [settings.animationSpeed]);

  // Turn to next page with animation and sound
  const turnNextPage = useCallback(() => {
    if (isFlipping || currentPage >= totalPages - 1) return;

    setIsFlipping(true);
    if (settings.soundEnabled) {
      soundManager.play('pageTurn');
    }

    setTimeout(() => {
      nextPage();
      setIsFlipping(false);
    }, getAnimationDuration());
  }, [currentPage, totalPages, isFlipping, settings.soundEnabled, nextPage, setIsFlipping, getAnimationDuration]);

  // Turn to previous page with animation and sound
  const turnPreviousPage = useCallback(() => {
    if (isFlipping || currentPage === 0) return;

    setIsFlipping(true);
    if (settings.soundEnabled) {
      soundManager.play('pageFlip');
    }

    setTimeout(() => {
      previousPage();
      setIsFlipping(false);
    }, getAnimationDuration());
  }, [currentPage, isFlipping, settings.soundEnabled, previousPage, setIsFlipping, getAnimationDuration]);

  // Navigate to specific page
  const navigateToPage = useCallback(
    (page: number) => {
      if (isFlipping || page === currentPage || page < 0 || page >= totalPages) return;

      setIsFlipping(true);
      if (settings.soundEnabled) {
        soundManager.play('pageTurn');
      }

      setTimeout(() => {
        goToPage(page);
        setIsFlipping(false);
      }, getAnimationDuration());
    },
    [currentPage, isFlipping, totalPages, settings.soundEnabled, goToPage, setIsFlipping, getAnimationDuration]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isFlipping) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          turnNextPage();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          turnPreviousPage();
          break;
        case 'Home':
          e.preventDefault();
          navigateToPage(0);
          break;
        case 'End':
          e.preventDefault();
          navigateToPage(totalPages - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFlipping, turnNextPage, turnPreviousPage, navigateToPage, totalPages]);

  return {
    currentPage,
    totalPages,
    isFlipping,
    canGoNext: currentPage < totalPages - 1,
    canGoPrevious: currentPage > 0,
    turnNextPage,
    turnPreviousPage,
    navigateToPage,
    animationDuration: getAnimationDuration(),
  };
}
