import type { Metadata } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import BackgroundBlobs from '@/components/layout/BackgroundBlobs';
import 'leaflet/dist/leaflet.css';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'stem·spark · Scholarships, orgs, and courses for women in STEM',
  description:
    'Scholarships, courses, mentors, organizations for women in STEM. All in one place. All free to browse.',
  keywords: ['STEM', 'women in STEM', 'scholarships', 'organizations', 'courses', 'women in tech'],
  authors: [{ name: 'Prakriti Bista', url: 'https://praks.me' }],
  openGraph: {
    title: 'stem·spark',
    description: 'Scholarships, orgs, and courses for women in STEM. One site.',
    url: 'https://stemspark.dev',
    siteName: 'stem·spark',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'stem·spark',
    description: 'Scholarships, orgs, and courses for women in STEM. One site.',
    creator: '@its_me_praks',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased min-h-screen">
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <BackgroundBlobs />
        <Nav />
        <main id="main-content" className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
