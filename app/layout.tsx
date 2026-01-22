import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Playfair_Display, Lora } from 'next/font/google';
import Header from '@/components/layout/Header';
import './globals.css';
import './globals-enhanced.css';

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
  title: 'STEM•SPARK - All-in-One Platform for Women in STEM',
  description:
    'Your all-in-one platform for resources, mentorship, community, and opportunities in STEM.',
  keywords: ['STEM', 'women in STEM', 'resources', 'mentorship', 'community'],
  authors: [{ name: 'Prakriti Bista', url: 'https://praks.me' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} ${lora.variable}`}>
      <body className="font-body antialiased bg-obsidian text-white min-h-screen">
        {/* Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian-900 to-obsidian" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
