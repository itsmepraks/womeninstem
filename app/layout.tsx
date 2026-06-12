import type { Metadata } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';
import BackgroundBlobs from '@/components/layout/BackgroundBlobs';
import BookmarkCelebration from '@/components/ui/BookmarkCelebration';
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/constants';
import { metadataBase, pageMetadata, siteJsonLd } from '@/lib/seo';
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
  ...pageMetadata({
    title: 'stem·spark | Women in STEM Resources',
    description: SITE_DESCRIPTION,
  }),
  metadataBase,
  applicationName: SITE_NAME,
  category: 'education',
  keywords: ['STEM', 'women in STEM', 'scholarships', 'organizations', 'courses', 'women in tech'],
  authors: [{ name: 'Prakriti Bista', url: 'https://praks.me' }],
  creator: 'Prakriti Bista',
  publisher: SITE_NAME,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = siteJsonLd();

  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        <link rel="llms" href="/llms.txt" />
      </head>
      <body className="font-body antialiased min-h-screen">
        {jsonLd.map((schema) => (
          <script
            key={schema['@type']}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
          />
        ))}
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <BackgroundBlobs />
        <Nav />
        <main id="main-content" className="relative z-10">{children}</main>
        <BackToTop />
        <BookmarkCelebration />
        <Footer />
      </body>
    </html>
  );
}
