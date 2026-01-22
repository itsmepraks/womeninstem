/**
 * Chapter structure for the STEM•SPARK book
 * Each nav item = 1 chapter
 */
import type { Chapter } from '@/types/book';

export const chapters: Chapter[] = [
  {
    id: 'cover',
    title: 'STEM•SPARK',
    subtitle: 'Your Journey Starts Here',
    icon: '✨',
    pageRange: [0, 0],
    color: 'white',
  },
  {
    id: 'explore',
    title: 'Explore',
    subtitle: 'Discover the Platform',
    icon: '🔍',
    pageRange: [1, 1],
    color: 'white',
  },
  {
    id: 'learning',
    title: 'Learning Paths',
    subtitle: 'Resources & Courses',
    icon: '📚',
    pageRange: [2, 2],
    color: 'white',
  },
  {
    id: 'mentorship',
    title: 'Mentorship',
    subtitle: 'Connect with Mentors',
    icon: '👥',
    pageRange: [3, 3],
    color: 'white',
  },
  {
    id: 'community',
    title: 'Community',
    subtitle: 'Network & Collaborate',
    icon: '🤝',
    pageRange: [4, 4],
    color: 'white',
  },
  {
    id: 'resources',
    title: 'Resources',
    subtitle: 'Companies, Events & More',
    icon: '🗺️',
    pageRange: [5, 5],
    color: 'white',
  },
];

// Map nav items to chapter pages
export const NAV_TO_CHAPTER: Record<string, number> = {
  'explore': 1,
  'learning': 2,
  'mentorship': 3,
  'community': 4,
  'resources': 5,
};

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
  return chapters.length;
}
