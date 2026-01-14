/**
 * Complete Zustand store for managing book state with persistence
 */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { BookState, Bookmark, BookSettings } from '@/types/book';

interface BookStore extends BookState {
  // Page navigation
  setCurrentPage: (page: number) => void;
  setTotalPages: (total: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  goToPage: (page: number) => void;
  
  // Flipping state
  setIsFlipping: (flipping: boolean) => void;
  
  // Table of contents
  toggleTableOfContents: () => void;
  setShowTableOfContents: (show: boolean) => void;
  
  // Bookmarks
  addBookmark: (bookmark: Omit<Bookmark, 'id' | 'createdAt'>) => void;
  removeBookmark: (id: string) => void;
  clearBookmarks: () => void;
  
  // Settings
  updateSettings: (settings: Partial<BookSettings>) => void;
  
  // History
  addToHistory: (page: number) => void;
  goBack: () => void;
  
  // Reset
  resetBook: () => void;
}

const initialSettings: BookSettings = {
  soundEnabled: false,
  autoPlay: false,
  animationSpeed: 'normal',
  theme: 'light',
};

export const useBookStore = create<BookStore>()(persist(
    (set, get) => ({
      // Initial state
      currentPage: 0,
      totalPages: 0,
      isFlipping: false,
      showTableOfContents: false,
      bookmarks: [],
      settings: initialSettings,
      history: [],

      // Set total pages
      setTotalPages: (total) => set({ totalPages: total }),

      // Page navigation
      setCurrentPage: (page) => {
        const { totalPages, addToHistory } = get();
        if (page >= 0 && page < totalPages) {
          addToHistory(get().currentPage);
          set({ currentPage: page });
        }
      },

      nextPage: () => {
        const { currentPage, totalPages } = get();
        if (currentPage < totalPages - 1) {
          get().setCurrentPage(currentPage + 1);
        }
      },

      previousPage: () => {
        const { currentPage } = get();
        if (currentPage > 0) {
          get().setCurrentPage(currentPage - 1);
        }
      },

      goToPage: (page) => {
        get().setCurrentPage(page);
      },

      // Flipping state
      setIsFlipping: (flipping) => set({ isFlipping: flipping }),

      // Table of contents
      toggleTableOfContents: () =>
        set((state) => ({ showTableOfContents: !state.showTableOfContents })),

      setShowTableOfContents: (show) => set({ showTableOfContents: show }),

      // Bookmarks
      addBookmark: (bookmark) =>
        set((state) => ({
          bookmarks: [
            ...state.bookmarks,
            {
              ...bookmark,
              id: `bookmark-${Date.now()}`,
              createdAt: new Date(),
            },
          ],
        })),

      removeBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((b) => b.id !== id),
        })),

      clearBookmarks: () => set({ bookmarks: [] }),

      // Settings
      updateSettings: (settings) =>
        set((state) => ({
          settings: { ...state.settings, ...settings },
        })),

      // History
      addToHistory: (page) =>
        set((state) => ({
          history: [...state.history.slice(-10), page],
        })),

      goBack: () => {
        const { history } = get();
        if (history.length > 0) {
          const previousPage = history[history.length - 1];
          set({
            currentPage: previousPage,
            history: history.slice(0, -1),
          });
        }
      },

      // Reset
      resetBook: () =>
        set({
          currentPage: 0,
          isFlipping: false,
          showTableOfContents: false,
          history: [],
        }),
    }),
    {
      name: 'book-storage',
      storage: createJSONStorage(() => {
        if (typeof window !== 'undefined') {
          return localStorage;
        }
        // Fallback for SSR
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
      partialize: (state) => ({
        currentPage: state.currentPage,
        bookmarks: state.bookmarks,
        settings: state.settings,
      }),
    }
  )
);
