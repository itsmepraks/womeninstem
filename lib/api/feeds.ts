export interface FeedConfig {
  name: string;
  revalidateSeconds: number;
}

export const FEED_CONFIG: FeedConfig[] = [
  { name: 'jobs', revalidateSeconds: 21600 },
  { name: 'events', revalidateSeconds: 21600 },
  { name: 'hackathons', revalidateSeconds: 21600 },
  { name: 'grants', revalidateSeconds: 21600 },
  { name: 'mentors', revalidateSeconds: 86400 },
  { name: 'orgs', revalidateSeconds: 86400 },
  { name: 'pioneers', revalidateSeconds: 86400 },
  { name: 'books', revalidateSeconds: 86400 },
  { name: 'podcasts', revalidateSeconds: 86400 },
];
