// types/region.ts
//
// Geographic region taxonomy shared across the curated directory (scholarships,
// organizations, programs, conferences, mentorship platforms, job boards,
// courses, communities) and the resources page filters.
//
// Keep this list in sync with the region <select> in app/resources/page.tsx.

export type Region =
  | 'Global'
  | 'US'
  | 'Europe'
  | 'Asia'
  | 'Africa'
  | 'Americas'
  | 'Oceania';
