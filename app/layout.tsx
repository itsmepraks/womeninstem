import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'STEM•SPARK - Igniting Curiosity in STEM',
  description:
    'Space-themed platform empowering girls and women in STEM through interactive learning, mentorship, and community.',
  keywords: ['STEM', 'women in STEM', 'education', 'mentorship', 'learning platform'],
  authors: [{ name: 'Prakriti Bista', url: 'https://praks.me' }],
  creator: 'Prakriti Bista',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stemspark.dev',
    title: 'STEM•SPARK - Igniting Curiosity in STEM',
    description:
      'Space-themed platform empowering girls and women in STEM through interactive learning, mentorship, and community.',
    siteName: 'STEM•SPARK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STEM•SPARK - Igniting Curiosity in STEM',
    description:
      'Space-themed platform empowering girls and women in STEM through interactive learning, mentorship, and community.',
    creator: '@itsmepraks',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-deep-space text-white antialiased">
        <div className="relative min-h-screen flex flex-col">
          {/* Background stars effect */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-cosmic" />
            <div className="stars" />
            <div className="stars2" />
            <div className="stars3" />
          </div>
          
          {/* Header Navigation */}
          <Header />
          
          {/* Main content with top padding for fixed header */}
          <main className="relative z-10 flex-1 pt-16 md:pt-20">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
