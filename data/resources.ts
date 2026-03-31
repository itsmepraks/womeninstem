export interface Scholarship {
  id: string;
  title: string;
  description: string;
  deadline: string;
  daysLeft: number;
}

export interface Company {
  id: string;
  name: string;
  initial: string;
  color: string;
  description: string;
}

export interface CommunityPick {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export const openScholarships: Scholarship[] = [
  {
    id: 'google-wie',
    title: 'Google Women in Engineering Scholarship',
    description: 'Full tuition + mentorship for undergraduate women in CS and engineering.',
    deadline: 'Apr 15',
    daysLeft: 15,
  },
  {
    id: 'adobe-fellowship',
    title: 'Adobe Research Women-in-Tech Fellowship',
    description: '$10,000 award + internship for women pursuing PhDs in CS-related fields.',
    deadline: 'May 1',
    daysLeft: 31,
  },
  {
    id: 'palantir-scholarship',
    title: 'Palantir Women in Technology Scholarship',
    description: '$10,000 scholarship for women in STEM pursuing undergraduate or graduate degrees.',
    deadline: 'May 15',
    daysLeft: 45,
  },
];

export const companiesHiring: Company[] = [
  {
    id: 'nasa-jpl',
    name: 'NASA JPL',
    initial: 'N',
    color: '#3d2518',
    description: '14 open roles specifically recruiting women in aerospace engineering.',
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    initial: 'M',
    color: '#c47a52',
    description: 'Women@Microsoft ERG — 8 mentorship tracks open for applications.',
  },
  {
    id: 'genentech',
    name: 'Genentech',
    initial: 'G',
    color: '#b8946c',
    description: 'Biotech leader with 48% women in research leadership roles.',
  },
];

export const communityPicks: CommunityPick[] = [
  {
    id: 'girls-who-code',
    title: 'Girls Who Code — Summer Programs',
    description:
      'Free 7-week immersive CS program for high school girls. Recommended by 89 community members.',
    tags: ['Free', 'Ages 15-18', 'In-person & virtual'],
  },
  {
    id: 'swe-conference',
    title: 'Society of Women Engineers — Annual Conference',
    description:
      "World's largest conference for women in engineering. Career fair, workshops, 300+ employers.",
    tags: ['October 2026', 'Networking'],
  },
];
