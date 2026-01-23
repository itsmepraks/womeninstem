/**
 * Application constants
 */

export const SITE_NAME = 'STEM•SPARK';
export const SITE_DESCRIPTION =
  'All-in-one platform for women in STEM - resources, mentorship, community, and opportunities.';
export const SITE_URL = 'https://stemspark.dev';

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/itsmepraks',
  github: 'https://github.com/itsmepraks',
  linkedin: 'https://linkedin.com/in/prakritibista',
  website: 'https://praks.me',
};

// Navigation items - each maps to a chapter
export const NAV_ITEMS = [
  { id: 'explore', label: 'Explore', chapter: 1 },
  { id: 'learning', label: 'Learning Paths', chapter: 2 },
  { id: 'mentorship', label: 'Mentorship', chapter: 3 },
  { id: 'community', label: 'Community', chapter: 4 },
  { id: 'resources', label: 'Resources', chapter: 5 },
] as const;

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;
