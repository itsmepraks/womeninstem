/**
 * Application-wide constants and configuration
 */

// Site metadata
export const SITE_NAME = 'STEM•SPARK';
export const SITE_DESCRIPTION =
  'Space-themed platform empowering girls and women in STEM through interactive learning, mentorship, and community.';
export const SITE_URL = 'https://stemspark.dev';

// Social media
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/itsmepraks',
  github: 'https://github.com/itsmepraks',
  linkedin: 'https://linkedin.com/in/prakritibista',
  website: 'https://praks.me',
};

// STEM fields
export const STEM_FIELDS = [
  { id: 'science', name: 'Science', icon: '🔬' },
  { id: 'technology', name: 'Technology', icon: '💻' },
  { id: 'engineering', name: 'Engineering', icon: '⚙️' },
  { id: 'mathematics', name: 'Mathematics', icon: '📐' },
] as const;

// Difficulty levels
export const DIFFICULTY_LEVELS = [
  { id: 'beginner', name: 'Beginner', color: 'aurora' },
  { id: 'intermediate', name: 'Intermediate', color: 'cosmic-blue' },
  { id: 'advanced', name: 'Advanced', color: 'nebula' },
] as const;

// Achievement types
export const ACHIEVEMENT_TYPES = [
  { id: 'learning', name: 'Learning Achievement', icon: '📚' },
  { id: 'community', name: 'Community Contributor', icon: '🤝' },
  { id: 'mentor', name: 'Mentorship', icon: '👥' },
  { id: 'project', name: 'Project Completion', icon: '🎯' },
] as const;

// Navigation items
export const NAV_ITEMS = [
  { href: '/explore', label: 'Explore' },
  { href: '/learning', label: 'Learning Paths' },
  { href: '/mentorship', label: 'Mentorship' },
  { href: '/community', label: 'Community' },
  { href: '/resources', label: 'Resources' },
] as const;

// API endpoints (for future backend integration)
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Pagination
export const ITEMS_PER_PAGE = 12;

// Animation durations
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;
