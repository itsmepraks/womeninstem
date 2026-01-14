/**
 * Hook for page turning functionality
 * Stub implementation to prevent build errors
 */

// This is a stub implementation to prevent build errors
// Full implementation will be added when book redesign is merged

export function usePageTurn() {
  return {
    currentPage: 0,
    totalPages: 0,
    isFlipping: false,
    canGoNext: false,
    canGoPrevious: false,
    turnNextPage: () => {},
    turnPreviousPage: () => {},
    navigateToPage: (page: number) => {},
    animationDuration: 600,
  };
}
