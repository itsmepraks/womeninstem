export interface Community {
  id: string;
  name: string;
  description: string;
  platform: 'slack' | 'discord' | 'forum' | 'newsletter';
  members?: string;
  url: string;
  region?: 'Global' | 'US' | 'Europe' | 'Asia' | 'Africa' | 'Americas' | 'Oceania';
}

export const communities: Community[] = [
  {
    id: 'women-who-code-slack',
    name: 'Women Who Code',
    description: 'Global Slack community with chapters in 145 countries.',
    platform: 'slack',
    members: '360,000+',
    url: 'https://www.womenwhocode.com/',
    region: 'Global',
  },
  {
    id: 'wnb-discord',
    name: 'Women in Tech Discord',
    description: 'Discord server for women and non-binary people in tech.',
    platform: 'discord',
    url: 'https://discord.gg/womenintech',
    region: 'Global',
  },
  {
    id: 'techladies',
    name: 'Tech Ladies',
    description: 'Community + job board for women in tech roles.',
    platform: 'forum',
    members: '250,000+',
    url: 'https://www.hiretechladies.com/',
    region: 'US',
  },
  {
    id: 'rewriting-the-code',
    name: 'Rewriting the Code',
    description: 'Community for college women in tech with mentorship and events.',
    platform: 'forum',
    members: '20,000+',
    url: 'https://rewritingthecode.org/',
    region: 'US',
  },
  {
    id: 'lesbians-who-tech-slack',
    name: 'Lesbians Who Tech & Allies',
    description: 'Slack community for LGBTQ+ women, non-binary, and allies in tech.',
    platform: 'slack',
    members: '50,000+',
    url: 'https://lesbianswhotech.org/',
    region: 'US',
  },
  {
    id: 'wnb-newsletter',
    name: 'Women in Tech Newsletter',
    description: 'Weekly newsletter with jobs, events, and articles.',
    platform: 'newsletter',
    url: 'https://womenintechnology.org/',
    region: 'Global',
  },
  {
    id: 'girls-in-tech',
    name: 'Girls in Tech',
    description: 'Global community with 60 chapters and free education programs.',
    platform: 'forum',
    members: '70,000+',
    url: 'https://girlsintech.org/',
    region: 'Global',
  },
  {
    id: 'awsis',
    name: 'Association for Women in Science',
    description: 'Membership community for women in all STEM fields.',
    platform: 'forum',
    url: 'https://www.awis.org/',
    region: 'US',
  },
];
