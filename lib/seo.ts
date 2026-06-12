import type { Metadata } from 'next';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_LINKS } from '@/lib/constants';

export const metadataBase = new URL(SITE_URL);

export const defaultOgImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} resource directory for women in STEM`,
};

type PageMetadataInput = {
  title: string;
  description: string;
  path?: `/${string}`;
  index?: boolean;
};

export function pageMetadata({
  title,
  description,
  path = '/',
  index = true,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [defaultOgImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@its_me_praks',
      images: [defaultOgImage.url],
    },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        }
      : {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        },
  };
}

export function siteJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: 'en-US',
      publisher: {
        '@type': 'Person',
        name: 'Prakriti Bista',
        url: SOCIAL_LINKS.website,
        sameAs: [SOCIAL_LINKS.twitter, SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      description: SITE_DESCRIPTION,
      sameAs: [SOCIAL_LINKS.twitter, SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
      founder: {
        '@type': 'Person',
        name: 'Prakriti Bista',
        url: SOCIAL_LINKS.website,
      },
    },
  ];
}
