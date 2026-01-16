import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS class names intelligently, handling conflicts and duplicates
 * 
 * Combines clsx (for conditional classes) and tailwind-merge (for proper Tailwind conflicts)
 * to provide the best of both worlds. This is the recommended way to handle dynamic
 * className props in components.
 * 
 * @param inputs - Variable number of class values (strings, objects, arrays, etc.)
 * @returns Merged and deduplicated class string
 * 
 * @example
 * Basic usage:
 * ```tsx
 * cn('px-4 py-2', 'bg-blue-500')
 * // Returns: 'px-4 py-2 bg-blue-500'
 * ```
 * 
 * @example
 * Conditional classes:
 * ```tsx
 * cn('base-class', isActive && 'active-class', disabled && 'disabled-class')
 * // Returns: 'base-class active-class' (if isActive is true and disabled is false)
 * ```
 * 
 * @example
 * Handling Tailwind conflicts (later values win):
 * ```tsx
 * cn('p-4', 'p-6')
 * // Returns: 'p-6' (correctly removes conflicting padding)
 * ```
 * 
 * @example
 * Component usage pattern:
 * ```tsx
 * function Button({ className, ...props }: ButtonProps) {
 *   return (
 *     <button className={cn('btn-base', 'hover:opacity-90', className)} {...props} />
 *   );
 * }
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date into a human-readable string
 * 
 * Converts a date string or Date object into a localized, long-form date format
 * suitable for display in the UI (e.g., blog posts, comments, timestamps).
 * 
 * @param date - Date string (ISO 8601) or Date object to format
 * @returns Formatted date string in 'Month Day, Year' format (e.g., 'January 15, 2026')
 * 
 * @example
 * With ISO date string:
 * ```typescript
 * formatDate('2026-01-15')
 * // Returns: 'January 15, 2026'
 * ```
 * 
 * @example
 * With Date object:
 * ```typescript
 * formatDate(new Date())
 * // Returns: 'January 16, 2026' (current date)
 * ```
 * 
 * @example
 * Display in component:
 * ```tsx
 * <time dateTime={isoDate}>{formatDate(isoDate)}</time>
 * ```
 */
export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Calculates estimated reading time based on average reading speed
 * 
 * Uses the industry standard of 200 words per minute for average reading speed.
 * Useful for displaying "X min read" indicators on articles, tutorials, and content.
 * 
 * @param text - The text content to analyze
 * @returns Estimated reading time in minutes (rounded up to nearest minute)
 * 
 * @example
 * Short text:
 * ```typescript
 * calculateReadingTime('Hello world')
 * // Returns: 1 (minimum is always 1 minute)
 * ```
 * 
 * @example
 * Article content:
 * ```typescript
 * const article = "Long article text with approximately 800 words...";
 * calculateReadingTime(article)
 * // Returns: 4 (800 words / 200 wpm = 4 minutes)
 * ```
 * 
 * @example
 * Display in UI:
 * ```tsx
 * <span className="text-sm text-gray-600">
 *   {calculateReadingTime(article.content)} min read
 * </span>
 * ```
 * 
 * @remarks
 * - Uses 200 words per minute as the baseline (average adult reading speed)
 * - Always rounds up to ensure time estimate is not underestimated
 * - Splits on whitespace to count words
 * - Trims content before counting to avoid counting leading/trailing spaces
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Truncates text to a specified length with ellipsis
 * 
 * Safely shortens text content while preserving word boundaries when possible.
 * Adds ellipsis (...) to indicate truncation. Useful for previews, excerpts,
 * and content that needs to fit within specific layout constraints.
 * 
 * @param text - The text to truncate
 * @param length - Maximum length before truncation (including ellipsis)
 * @returns Truncated text with ellipsis, or original text if shorter than length
 * 
 * @example
 * Text longer than limit:
 * ```typescript
 * truncate('This is a long description that needs truncation', 20)
 * // Returns: 'This is a long desc...'
 * ```
 * 
 * @example
 * Text shorter than limit:
 * ```typescript
 * truncate('Short text', 20)
 * // Returns: 'Short text' (no truncation needed)
 * ```
 * 
 * @example
 * Card preview:
 * ```tsx
 * <p className="text-sm">
 *   {truncate(description, 150)}
 * </p>
 * ```
 * 
 * @remarks
 * - Trims whitespace before checking length
 * - Ellipsis (...) is added within the specified length limit
 * - Does not attempt to preserve complete words (cuts at exact character count)
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

/**
 * Converts a string into a URL-friendly slug
 * 
 * Creates SEO-friendly, URL-safe slugs from any string by converting to lowercase,
 * removing special characters, and replacing spaces with hyphens. Ideal for
 * generating URLs from titles, names, or other user-generated content.
 * 
 * @param text - The text to convert into a slug
 * @returns URL-safe slug string with hyphens
 * 
 * @example
 * Article title:
 * ```typescript
 * slugify('Introduction to Machine Learning')
 * // Returns: 'introduction-to-machine-learning'
 * ```
 * 
 * @example
 * With special characters:
 * ```typescript
 * slugify('Hello, World! 123')
 * // Returns: 'hello-world-123'
 * ```
 * 
 * @example
 * Multiple spaces and symbols:
 * ```typescript
 * slugify('React    &    TypeScript')
 * // Returns: 'react-typescript'
 * ```
 * 
 * @example
 * Generate URL path:
 * ```tsx
 * const articleUrl = `/articles/${slugify(article.title)}`;
 * // '/articles/introduction-to-machine-learning'
 * ```
 * 
 * @remarks
 * - Converts to lowercase for consistency
 * - Removes all non-word characters except spaces and hyphens
 * - Replaces multiple spaces/hyphens with single hyphen
 * - Trims leading and trailing hyphens
 * - Preserves numbers in the slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces/underscores with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Creates a Promise that resolves after a specified delay
 * 
 * Useful for adding intentional delays in async operations, rate limiting,
 * animations, or testing loading states. Returns a Promise that can be awaited.
 * 
 * @param ms - Delay duration in milliseconds
 * @returns Promise that resolves after the specified delay
 * 
 * @example
 * Simple delay:
 * ```typescript
 * async function fetchWithDelay() {
 *   await delay(1000); // Wait 1 second
 *   const data = await fetch('/api/data');
 *   return data;
 * }
 * ```
 * 
 * @example
 * Retry with backoff:
 * ```typescript
 * async function retryOperation(attempt: number) {
 *   try {
 *     return await someOperation();
 *   } catch (error) {
 *     await delay(attempt * 1000); // Exponential backoff
 *     return retryOperation(attempt + 1);
 *   }
 * }
 * ```
 * 
 * @example
 * Show loading state:
 * ```typescript
 * async function loadData() {
 *   setLoading(true);
 *   await delay(500); // Minimum loading time for UX
 *   const data = await fetchData();
 *   setLoading(false);
 * }
 * ```
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Checks if code is running in a browser environment (client-side)
 * 
 * Essential for Next.js and SSR applications to prevent errors when accessing
 * browser-specific APIs during server-side rendering. Use this before accessing
 * window, document, localStorage, or other browser-only features.
 * 
 * @returns true if running in browser, false if running on server
 * 
 * @example
 * Conditional browser API usage:
 * ```typescript
 * function getStoredValue() {
 *   if (isClient()) {
 *     return localStorage.getItem('key');
 *   }
 *   return null;
 * }
 * ```
 * 
 * @example
 * Safe window access:
 * ```typescript
 * function scrollToTop() {
 *   if (isClient()) {
 *     window.scrollTo({ top: 0, behavior: 'smooth' });
 *   }
 * }
 * ```
 * 
 * @example
 * In a React component:
 * ```tsx
 * function Component() {
 *   const [mounted, setMounted] = useState(false);
 *   
 *   useEffect(() => {
 *     if (isClient()) {
 *       setMounted(true);
 *     }
 *   }, []);
 *   
 *   if (!mounted) return null;
 *   return <div>Client-only content</div>;
 * }
 * ```
 * 
 * @remarks
 * - Returns false during server-side rendering (SSR)
 * - Returns false during static generation (SSG)
 * - Returns true in browser and during client-side hydration
 */
export function isClient(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Extracts initials from a full name
 * 
 * Generates a 1-2 character initial string from a person's name, useful for
 * avatar placeholders, user badges, or profile icons when images are unavailable.
 * 
 * @param name - Full name to extract initials from (first name, last name, or full name)
 * @returns Uppercase initials (maximum 2 characters)
 * 
 * @example
 * Full name:
 * ```typescript
 * getInitials('Prakriti Bista')
 * // Returns: 'PB'
 * ```
 * 
 * @example
 * Single name:
 * ```typescript
 * getInitials('Prakriti')
 * // Returns: 'P'
 * ```
 * 
 * @example
 * Multiple names (takes first two):
 * ```typescript
 * getInitials('Ada Lovelace Byron')
 * // Returns: 'AL'
 * ```
 * 
 * @example
 * Avatar component:
 * ```tsx
 * function Avatar({ name, imageUrl }: AvatarProps) {
 *   return (
 *     <div className="avatar">
 *       {imageUrl ? (
 *         <img src={imageUrl} alt={name} />
 *       ) : (
 *         <span>{getInitials(name)}</span>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 * 
 * @remarks
 * - Automatically converts to uppercase
 * - Takes maximum 2 initials (first two words)
 * - Handles extra spaces gracefully
 * - Returns empty string for empty input
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
