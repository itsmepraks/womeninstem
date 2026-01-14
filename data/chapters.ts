/**
 * Complete chapter structure and content for the STEM•SPARK book
 */
import type { Chapter } from '@/types/book';

export const chapters: Chapter[] = [
  {
    id: 'home',
    title: 'Welcome',
    subtitle: 'Begin Your Journey',
    icon: '🏠',
    pageRange: [0, 3],
    color: 'burgundy',
  },
  {
    id: 'about',
    title: 'About STEM•SPARK',
    subtitle: 'Our Mission & Vision',
    icon: '✨',
    pageRange: [4, 9],
    color: 'sepia',
  },
  {
    id: 'resources',
    title: 'Learning Resources',
    subtitle: 'Tools for Growth',
    icon: '📚',
    pageRange: [10, 17],
    color: 'forest',
  },
  {
    id: 'stories',
    title: 'Success Stories',
    subtitle: 'Inspiration & Impact',
    icon: '🌟',
    pageRange: [18, 23],
    color: 'gold',
  },
  {
    id: 'get-involved',
    title: 'Get Involved',
    subtitle: 'Join the Community',
    icon: '🤝',
    pageRange: [24, 29],
    color: 'burgundy',
  },
  {
    id: 'contact',
    title: 'Connect With Us',
    subtitle: 'Reach Out',
    icon: '📧',
    pageRange: [30, 31],
    color: 'sepia',
  },
];

/**
 * Get chapter by page number
 */
export function getChapterByPage(pageNumber: number): Chapter | null {
  return (
    chapters.find(
      (chapter) =>
        pageNumber >= chapter.pageRange[0] && pageNumber <= chapter.pageRange[1]
    ) || null
  );
}

/**
 * Get chapter by ID
 */
export function getChapterById(id: string): Chapter | null {
  return chapters.find((chapter) => chapter.id === id) || null;
}

/**
 * Get total number of pages
 */
export function getTotalPages(): number {
  const lastChapter = chapters[chapters.length - 1];
  return lastChapter ? lastChapter.pageRange[1] + 1 : 0;
}

/**
 * Get next chapter
 */
export function getNextChapter(currentChapterId: string): Chapter | null {
  const currentIndex = chapters.findIndex((c) => c.id === currentChapterId);
  if (currentIndex === -1 || currentIndex === chapters.length - 1) return null;
  return chapters[currentIndex + 1];
}

/**
 * Get previous chapter
 */
export function getPreviousChapter(currentChapterId: string): Chapter | null {
  const currentIndex = chapters.findIndex((c) => c.id === currentChapterId);
  if (currentIndex <= 0) return null;
  return chapters[currentIndex - 1];
}
