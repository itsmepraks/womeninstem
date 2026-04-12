import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources · stem·spark',
  description: 'Scholarships, organizations, programs, conferences, and job boards for women in STEM.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
