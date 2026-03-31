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
  title: 'stem·spark — Resources, Mentors & Community for Women in STEM',
  description:
    'Resources, mentors, and a supportive community — everything you need to start and grow your career in science and technology.',
  keywords: ['STEM', 'women in STEM', 'resources', 'mentorship', 'community', 'scholarships'],
  authors: [{ name: 'Prakriti Bista', url: 'https://praks.me' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased min-h-screen">
        <BackgroundBlobs />
        <Nav />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
