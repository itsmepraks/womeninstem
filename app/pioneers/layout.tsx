import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pioneers · stem·spark',
  description: '32 women who shaped science, technology, engineering, and mathematics.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
