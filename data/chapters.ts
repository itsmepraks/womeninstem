/**
 * Chapter structure and content data
 * Stub implementation to prevent build errors
 */

import type { Chapter } from '@/types/book';

// This is a stub implementation to prevent build errors
// Full implementation will be added when book redesign is merged

export const chapters: Chapter[] = [
  {
    id: 'home',
    title: 'Welcome',
    subtitle: 'Begin Your Journey',
    pageRange: [0, 0],
  },
];

export function getChapterByPage(pageNumber: number): Chapter | null {
  return chapters.find(
    (chapter) =>
      pageNumber >= chapter.pageRange[0] && pageNumber <= chapter.pageRange[1]
  ) || null;
}

export function getChapterById(id: string): Chapter | null {
  return chapters.find((chapter) => chapter.id === id) || null;
}

export function getTotalPages(): number {
  const lastChapter = chapters[chapters.length - 1];
  return lastChapter ? lastChapter.pageRange[1] + 1 : 0;
}
