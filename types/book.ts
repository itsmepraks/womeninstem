/**
 * Type definitions for the interactive book system
 */

export interface BookPage {
  id: string;
  chapter: string;
  title: string;
  content: React.ReactNode;
  pageNumber: number;
}

export interface Chapter {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
  pageRange: [number, number]; // [start, end]
  color?: string;
}

export interface Bookmark {
  id: string;
  pageNumber: number;
  chapterId: string;
  title: string;
  note?: string;
  createdAt: Date;
}

export interface BookSettings {
  soundEnabled: boolean;
  autoPlay: boolean;
  animationSpeed: 'slow' | 'normal' | 'fast';
  theme: 'light' | 'sepia' | 'dark';
}

export interface BookState {
  currentPage: number;
  totalPages: number;
  isFlipping: boolean;
  showTableOfContents: boolean;
  bookmarks: Bookmark[];
  settings: BookSettings;
  history: number[];
}
