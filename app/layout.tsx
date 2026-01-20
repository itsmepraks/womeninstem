import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Playfair_Display, Lora } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';
import './globals-enhanced.css';
import './globals-3d-animations.css';

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

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'STEM•SPARK - Igniting Curiosity in STEM',
  description:
    'Interactive book-themed platform empowering girls and women in STEM through immersive learning, mentorship, and community.',
  keywords: ['STEM', 'women in STEM', 'education', 'mentorship', 'learning platform', 'interactive book'],
  authors: [{ name: 'Prakriti Bista', url: 'https://praks.me' }],
  creator: 'Prakriti Bista',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stemspark.dev',
    title: 'STEM•SPARK - Igniting Curiosity in STEM',
    description:
      'Interactive book-themed platform empowering girls and women in STEM through immersive learning, mentorship, and community.',
    siteName: 'STEM•SPARK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STEM•SPARK - Igniting Curiosity in STEM',
    description:
      'Interactive book-themed platform empowering girls and women in STEM through immersive learning, mentorship, and community.',
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} ${lora.variable}`}>
      <body className="font-body bg-parchment text-ink antialiased">
        <div className="relative min-h-screen flex flex-col">
          {/* Book paper texture background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-parchment-gradient" />
            <div className="absolute inset-0 opacity-30 mix-blend-multiply paper-texture" />
          </div>
          
          {/* Header Navigation */}
          <Header />
          
          {/* Main content container with book layout */}
          <main className="relative z-10 flex-1 pt-16 md:pt-20">
            <div className="book-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
