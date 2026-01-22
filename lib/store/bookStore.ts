/**
 * Book Store - Zustand state management for book reading experience
 * 
 * Manages:
 * - Current page and navigation
 * - Animation state
 * - Bookmarks with persistence
 * - Reading settings
 * - Page history
 */

'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type AnimationDirection = 'forward' | 'backward' | null;
export type AnimationSpeed = 'slow' | 'normal' | 'fast';

interface BookSettings {
  soundEnabled: boolean;
  animationSpeed: AnimationSpeed;
  showPageNumbers: boolean;
}

interface BookState {
  // Page state
  currentPage: number;
  totalPages: number;
  isAnimating: boolean;
  animationDirection: AnimationDirection;
  
  // Navigation history
  pageHistory: number[];
  
  // Bookmarks
  bookmarks: number[];
  
  // Table of contents
  showTableOfContents: boolean;
  
  // Settings
  settings: BookSettings;
  
  // Actions
  nextPage: () => void;
  previousPage: () => void;
  goToPage: (page: number) => void;
  setTotalPages: (total: number) => void;
  
  // Animation control
  setAnimating: (animating: boolean, direction?: AnimationDirection) => void;
  
  // Bookmarks
  toggleBookmark: (page: number) => void;
  isBookmarked: (page: number) => boolean;
  
  // Table of contents
  toggleTableOfContents: () => void;
  setShowTableOfContents: (show: boolean) => void;
  
  // Settings
  updateSettings: (settings: Partial<BookSettings>) => void;
  
  // Utility
  canNavigateNext: () => boolean;
  canNavigatePrevious: () => boolean;
  getProgress: () => number;
}

export const useBookStore = create<BookState>()(
  persist(
    (set, get) => ({
      // Initial state
      currentPage: 0,
      totalPages: 0,
      isAnimating: false,
      animationDirection: null,
      pageHistory: [0],
      bookmarks: [],
      showTableOfContents: false,
      settings: {
        soundEnabled: true,
        animationSpeed: 'normal',
        showPageNumbers: true,
      },

      // Navigation actions
      nextPage: () => {
        const { currentPage, totalPages, isAnimating } = get();
        if (isAnimating || currentPage >= totalPages - 1) return;

        set({
          isAnimating: true,
          animationDirection: 'forward',
        });

        // Animation duration based on speed
        const duration = {
          slow: 1000,
          normal: 800,
          fast: 600,
        }[get().settings.animationSpeed];

        setTimeout(() => {
          set(state => ({
            currentPage: state.currentPage + 1,
            pageHistory: [...state.pageHistory, state.currentPage + 1],
            isAnimating: false,
            animationDirection: null,
          }));
        }, duration);
      },

      previousPage: () => {
        const { currentPage, isAnimating } = get();
        if (isAnimating || currentPage <= 0) return;

        set({
          isAnimating: true,
          animationDirection: 'backward',
        });

        const duration = {
          slow: 1000,
          normal: 800,
          fast: 600,
        }[get().settings.animationSpeed];

        setTimeout(() => {
          set(state => ({
            currentPage: state.currentPage - 1,
            pageHistory: [...state.pageHistory, state.currentPage - 1],
            isAnimating: false,
            animationDirection: null,
          }));
        }, duration);
      },

      goToPage: (page: number) => {
        const { currentPage, totalPages, isAnimating } = get();
        
        if (
          isAnimating || 
          page < 0 || 
          page >= totalPages || 
          page === currentPage
        ) {
          return;
        }

        const direction = page > currentPage ? 'forward' : 'backward';

        set({
          isAnimating: true,
          animationDirection: direction,
        });

        const duration = {
          slow: 1000,
          normal: 800,
          fast: 600,
        }[get().settings.animationSpeed];

        setTimeout(() => {
          set(state => ({
            currentPage: page,
            pageHistory: [...state.pageHistory, page],
            isAnimating: false,
            animationDirection: null,
          }));
        }, duration);
      },

      setTotalPages: (total: number) => {
        set({ totalPages: total });
      },

      // Animation control
      setAnimating: (animating: boolean, direction: AnimationDirection = null) => {
        set({ isAnimating: animating, animationDirection: direction });
      },

      // Bookmarks
      toggleBookmark: (page: number) => {
        set(state => ({
          bookmarks: state.bookmarks.includes(page)
            ? state.bookmarks.filter(p => p !== page)
            : [...state.bookmarks, page].sort((a, b) => a - b),
        }));
      },

      isBookmarked: (page: number) => {
        return get().bookmarks.includes(page);
      },

      // Table of contents
      toggleTableOfContents: () => {
        set(state => ({ showTableOfContents: !state.showTableOfContents }));
      },

      setShowTableOfContents: (show: boolean) => {
        set({ showTableOfContents: show });
      },

      // Settings
      updateSettings: (newSettings: Partial<BookSettings>) => {
        set(state => ({
          settings: { ...state.settings, ...newSettings },
        }));
      },

      // Utility functions
      canNavigateNext: () => {
        const { currentPage, totalPages, isAnimating } = get();
        return currentPage < totalPages - 1 && !isAnimating;
      },

      canNavigatePrevious: () => {
        const { currentPage, isAnimating } = get();
        return currentPage > 0 && !isAnimating;
      },

      getProgress: () => {
        const { currentPage, totalPages } = get();
        if (totalPages === 0) return 0;
        return Math.round(((currentPage + 1) / totalPages) * 100);
      },
    }),
    {
      name: 'stem-spark-book-storage',
      storage: createJSONStorage(() => localStorage),
      // Only persist certain fields
      partialize: (state) => ({
        currentPage: state.currentPage,
        bookmarks: state.bookmarks,
        settings: state.settings,
        pageHistory: state.pageHistory.slice(-10), // Keep last 10 pages only
      }),
    }
  )
);
