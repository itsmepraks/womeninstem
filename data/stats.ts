export interface Stat {
  value: string;
  label: string;
  source?: string;
  rotation: number;
}

export interface Challenge {
  title: string;
  description: string;
  stats: string[];
}

// Hero stats — the most impactful numbers for the homepage floating cards
export const heroStats: Stat[] = [
  {
    value: '28%',
    label: 'of the STEM workforce are women',
    source: 'National Science Foundation',
    rotation: -2,
  },
  {
    value: '52%',
    label: 'of women in STEM leave their jobs mid-career',
    source: 'Center for Talent Innovation',
    rotation: 1.2,
  },
];

// A real, sourced highlight for the dark testimonial card
export const heroHighlight = {
  text: 'Women earn 57% of all bachelor\'s degrees but only 19% of computer science degrees and 21% of engineering degrees.',
  source: 'National Center for Education Statistics',
  rotation: 2.5,
};

// Workforce participation stats
export const workforceStats: Stat[] = [
  {
    value: '28%',
    label: 'of the STEM workforce in the US are women',
    source: 'National Science Foundation',
    rotation: -1.5,
  },
  {
    value: '25%',
    label: 'of computing jobs held by women despite being half the total workforce',
    source: 'Bureau of Labor Statistics',
    rotation: 0.8,
  },
  {
    value: '15%',
    label: 'of engineering roles are held by women',
    source: 'Society of Women Engineers',
    rotation: -2.2,
  },
  {
    value: '26%',
    label: 'of computing roles are held by women',
    source: 'Bureau of Labor Statistics',
    rotation: 1.4,
  },
  {
    value: '47%',
    label: 'of life science roles are held by women',
    source: 'National Science Foundation',
    rotation: -0.5,
  },
  {
    value: '44%',
    label: 'of mathematics and statistics roles are held by women',
    source: 'National Science Foundation',
    rotation: 2.1,
  },
  {
    value: '39%',
    label: 'of chemistry roles are held by women',
    source: 'American Chemical Society',
    rotation: -1.0,
  },
];

// Education stats
export const educationStats: Stat[] = [
  {
    value: '57%',
    label: 'of all bachelor\'s degrees are earned by women',
    source: 'National Center for Education Statistics',
    rotation: 1.3,
  },
  {
    value: '19%',
    label: 'of computer science degrees are earned by women',
    source: 'National Center for Education Statistics',
    rotation: -1.8,
  },
  {
    value: '21%',
    label: 'of engineering degrees are earned by women',
    source: 'National Center for Education Statistics',
    rotation: 0.6,
  },
  {
    value: '43%',
    label: 'of mathematics degrees are earned by women',
    source: 'National Center for Education Statistics',
    rotation: -2.5,
  },
  {
    value: '52%',
    label: 'of chemistry degrees are earned by women',
    source: 'National Center for Education Statistics',
    rotation: 1.7,
  },
  {
    value: '18-20%',
    label: 'of CS bachelor\'s degrees go to women, down from 37% in 1984',
    source: 'National Center for Women & Information Technology',
    rotation: -0.3,
  },
  {
    value: '24%',
    label: 'of computer science teachers are women',
    source: 'Code.org',
    rotation: 2.0,
  },
  {
    value: '4%',
    label: 'of STEM bachelor\'s degrees are earned by Black women',
    source: 'National Science Foundation',
    rotation: -1.2,
  },
  {
    value: '6%',
    label: 'of STEM bachelor\'s degrees are earned by Latina women',
    source: 'National Science Foundation',
    rotation: 0.9,
  },
];

// Retention and attrition stats
export const retentionStats: Stat[] = [
  {
    value: '52%',
    label: 'of women in STEM leave their jobs mid-career (vs 17% in non-STEM)',
    source: 'Center for Talent Innovation',
    rotation: -2.0,
  },
  {
    value: '45%',
    label: 'more likely for women in computing to leave the field than men',
    source: 'National Center for Women & Information Technology',
    rotation: 1.5,
  },
  {
    value: '50%',
    label: 'of women leave tech within 12 years (vs 20% of men)',
    source: 'Accenture / Girls Who Code',
    rotation: -0.7,
  },
  {
    value: '50%',
    label: 'of women in STEM report experiencing gender discrimination at work',
    source: 'Pew Research Center',
    rotation: 2.3,
  },
  {
    value: '36%',
    label: 'of women in tech have experienced sexual harassment',
    source: 'Elephant in the Valley Survey',
    rotation: -1.4,
  },
  {
    value: '43%',
    label: 'of highly qualified women with children leave careers or off-ramp',
    source: 'Center for Talent Innovation',
    rotation: 0.5,
  },
];

// Economic impact stats
export const economicStats: Stat[] = [
  {
    value: '$12T',
    label: 'potential gain to global economy by advancing women\'s equality',
    source: 'McKinsey Global Institute',
    rotation: -1.6,
  },
  {
    value: '$2.5T',
    label: 'potential addition to US economy by reaching STEM gender parity by 2030',
    source: 'McKinsey & Company',
    rotation: 0.4,
  },
  {
    value: '15%',
    label: 'more likely to outperform competitors with gender-diverse teams',
    source: 'McKinsey & Company',
    rotation: 2.2,
  },
  {
    value: '85¢',
    label: 'earned by women in STEM for every dollar earned by men',
    source: 'American Association of University Women',
    rotation: -0.9,
  },
  {
    value: '63¢',
    label: 'earned by Black women per dollar earned by white men in STEM',
    source: 'National Women\'s Law Center',
    rotation: 1.8,
  },
  {
    value: '54¢',
    label: 'earned by Latina women per dollar earned by white men in STEM',
    source: 'National Women\'s Law Center',
    rotation: -2.4,
  },
  {
    value: '$900K–$1.2M',
    label: 'lifetime earnings gap cost for women',
    source: 'National Women\'s Law Center',
    rotation: 0.7,
  },
];

// The 8 key challenges from the markdown
export const challenges: Challenge[] = [
  {
    title: 'Gender Bias and Stereotypes',
    description:
      'Unconscious bias begins as early as age 6 and persists throughout careers, affecting hiring, evaluation, and advancement.',
    stats: [
      'As early as age 6, girls begin to believe that brilliant achievement is a male trait',
      'Parents are 2.5x more likely to ask boys than girls "How does it work?" at science museums',
      'Identical resumes with male names receive higher ratings and $4,000 more in salary offers (Yale study)',
      'Only 18% of characters in STEM careers in children\'s media are female',
      'In blind auditions, women are 50% more likely to advance',
    ],
  },
  {
    title: 'Educational Barriers',
    description:
      'From K-12 through higher education, women face less encouragement, hostile climates, and structural barriers that push them out of STEM.',
    stats: [
      'Only 24% of computer science teachers are women',
      'Female STEM students report harassment and unwelcoming culture at 2x the rate of male peers',
      'Female professors increase the likelihood of female students completing a STEM degree by 6-8%',
      'Women earn 18-20% of CS degrees, down from 37% in 1984',
      '"Weed-out" courses disproportionately discourage women from continuing in STEM',
    ],
  },
  {
    title: 'Workplace Discrimination',
    description:
      'Half of women in STEM report gender discrimination at work, facing hostile environments, hiring bias, and biased performance evaluations.',
    stats: [
      '50% of women in STEM report experiencing gender discrimination at work',
      '36% of women in tech have experienced sexual harassment',
      '44% of women in STEM say they\'ve been passed over for important assignments',
      'In CS and engineering, men are hired at twice the rate of equally qualified women',
      'Code written by women on GitHub is accepted more often — but only when gender is unknown',
    ],
  },
  {
    title: 'Work-Life Balance',
    description:
      'The "motherhood penalty," long-hours culture, and disproportionate caregiving responsibilities drive women out of STEM careers.',
    stats: [
      'Mothers are 6x less likely to be hired than equally qualified non-mothers',
      'Mothers are offered $11,000 less in starting salary on average',
      'Women perform 2-3x more childcare and household labor than men',
      'Only 27% of US workers have access to paid family leave',
      'During the pandemic, mothers reduced work hours 4-5x more than fathers',
    ],
  },
  {
    title: 'Mentorship and Sponsorship Gaps',
    description:
      'Women lack access to mentors and sponsors, and are excluded from informal networks that drive career advancement.',
    stats: [
      'Only 28% of STEM faculty are women, limiting mentorship opportunities',
      'Men are 46% more likely to have sponsors in their networks',
      'Employees with sponsors are 23% more likely to move up than those with only mentors',
      'Women with sponsors are 27% more likely to ask for raises',
      'Cross-gender mentoring relationships face scrutiny, reducing access',
    ],
  },
  {
    title: 'Impostor Syndrome',
    description:
      'Up to 70% of people experience impostor syndrome, but women and minorities experience it at higher rates due to unwelcoming environments.',
    stats: [
      'Up to 70% of people experience impostor syndrome at some point',
      'Women apply for jobs only when meeting 100% of qualifications vs 60% for men',
      'Women in tech are twice as likely to report impostor feelings',
      'Being "the only" woman in a room increases impostor feelings',
      'Impostor syndrome correlates with anxiety, depression, and burnout',
    ],
  },
  {
    title: 'Pay and Promotion Gaps',
    description:
      'Women in STEM earn 85 cents per dollar compared to men, with the gap widening for women of color and at senior levels.',
    stats: [
      'Women in STEM earn 85 cents for every dollar earned by men',
      'Black women earn 63 cents, Latina women 54 cents, Native American women 50 cents per dollar',
      'For every 100 men promoted to manager, only 86 women are promoted',
      'Women at executive levels earn only 71% of male peers\' pay',
      'Lifetime earnings gap costs women $900,000 to $1.2 million',
    ],
  },
  {
    title: 'Lack of Representation',
    description:
      'Women hold only 14% of senior STEM leadership roles, and underrepresentation at every level perpetuates the cycle.',
    stats: [
      'Women hold only 14% of senior leadership roles in STEM',
      'Only 5% of tech VC firm partners are women',
      '12% of STEM startup founders are women',
      'Only 13% of Wikipedia STEM biographies are about women',
      'Male scientists are quoted 4x more often than women in media',
      'Only 21% of full professors in STEM are women',
    ],
  },
];
