/**
 * Complete helper functions for book navigation and page management
 */
import type { PageMetadata } from '@/types/book';

/**
 * Calculate reading progress as a percentage
 */
export function calculateProgress(currentPage: number, totalPages: number): number {
  if (totalPages === 0) return 0;
  return Math.round(((currentPage + 1) / totalPages) * 100);
}

/**
 * Format page number with leading zeros
 */
export function formatPageNumber(page: number, totalPages: number): string {
  const digits = totalPages.toString().length;
  return page.toString().padStart(digits, '0');
}

/**
 * Get estimated reading time for a page (based on word count)
 */
export function estimateReadingTime(wordCount: number): number {
  const wordsPerMinute = 200; // Average reading speed
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Generate table of contents from page metadata
 */
export function generateTableOfContents(pages: PageMetadata[]) {
  const chapters = new Map<number, {
    number: number;
    title: string;
    startPage: number;
    sections: { title: string; page: number }[];
  }>();

  pages.forEach((page) => {
    if (page.chapterNumber && page.chapterTitle) {
      if (!chapters.has(page.chapterNumber)) {
        chapters.set(page.chapterNumber, {
          number: page.chapterNumber,
          title: page.chapterTitle,
          startPage: page.pageNumber,
          sections: [],
        });
      }

      if (page.sectionTitle) {
        chapters.get(page.chapterNumber)!.sections.push({
          title: page.sectionTitle,
          page: page.pageNumber,
        });
      }
    }
  });

  return Array.from(chapters.values()).sort((a, b) => a.number - b.number);
}

/**
 * Save reading position to localStorage
 */
export function saveReadingPosition(bookId: string, page: number): void {
  if (typeof window === 'undefined') return;
  try {
    const positions = JSON.parse(localStorage.getItem('reading-positions') || '{}');
    positions[bookId] = {
      page,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('reading-positions', JSON.stringify(positions));
  } catch (e) {
    console.error('Failed to save reading position:', e);
  }
}

/**
 * Load reading position from localStorage
 */
export function loadReadingPosition(bookId: string): number | null {
  if (typeof window === 'undefined') return null;
  try {
    const positions = JSON.parse(localStorage.getItem('reading-positions') || '{}');
    return positions[bookId]?.page || null;
  } catch (e) {
    console.error('Failed to load reading position:', e);
    return null;
  }
}

/**
 * Clear reading position from localStorage
 */
export function clearReadingPosition(bookId: string): void {
  if (typeof window === 'undefined') return;
  try {
    const positions = JSON.parse(localStorage.getItem('reading-positions') || '{}');
    delete positions[bookId];
    localStorage.setItem('reading-positions', JSON.stringify(positions));
  } catch (e) {
    console.error('Failed to clear reading position:', e);
  }
}

/**
 * Get all reading positions
 */
export function getAllReadingPositions(): Record<string, { page: number; timestamp: string }> {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem('reading-positions') || '{}');
  } catch (e) {
    console.error('Failed to get reading positions:', e);
    return {};
  }
}
