import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const lastModified = new Date('2026-06-12');

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/resources`, lastModified, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/learning`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/impact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/media`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
