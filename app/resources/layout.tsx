import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Women in STEM Scholarships and Resources | stem·spark',
    description:
      'Search scholarships, organizations, programs, conferences, mentorship platforms, job boards, and communities for women in STEM.',
    path: '/resources',
  }),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
