import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Saved STEM Resources | stem·spark',
    description:
      'View resources bookmarked on this device, including scholarships, courses, organizations, programs, conferences, mentorship options, and jobs.',
    path: '/saved',
    index: false,
  }),
};

export default function SavedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
