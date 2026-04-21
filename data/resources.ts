export interface Scholarship {
  id: string;
  name: string;
  amount: string;
  description: string;
  level: 'undergraduate' | 'graduate' | 'postdoctoral' | 'all';
  url: string;
  nextDeadline?: string; // ISO date YYYY-MM-DD for next application deadline
  region?: 'Global' | 'US' | 'Europe' | 'Asia' | 'Africa' | 'Americas' | 'Oceania';
}

export interface Organization {
  id: string;
  name: string;
  initial: string;
  description: string;
  members?: string;
  category:
    | 'general'
    | 'engineering'
    | 'technology'
    | 'science'
    | 'mathematics'
    | 'intersectional';
  cost?: string;
  url?: string;
  region?: 'Global' | 'US' | 'Europe' | 'Asia' | 'Africa' | 'Americas' | 'Oceania';
}

export interface Program {
  id: string;
  name: string;
  description: string;
  category: 'k12' | 'bootcamp' | 'summer' | 'online' | 'certification';
  cost: string;
  audience?: string;
  url: string;
  region?: 'Global' | 'US' | 'Europe' | 'Asia' | 'Africa' | 'Americas' | 'Oceania';
}

export interface Conference {
  id: string;
  name: string;
  description: string;
  size?: string;
  timing?: string; // Keep for backward compat / display fallback
  cost?: string;
  url?: string;
  month?: number; // 1-12, the month it usually happens
  monthEnd?: number; // For events spanning 2 months
  region?: 'Global' | 'US' | 'Europe' | 'Asia' | 'Africa' | 'Americas' | 'Oceania';
}

export interface MentorshipPlatform {
  id: string;
  name: string;
  description: string;
  cost: string;
  url?: string;
  region?: 'Global' | 'US' | 'Europe' | 'Asia' | 'Africa' | 'Americas' | 'Oceania';
}

export interface JobBoard {
  id: string;
  name: string;
  description: string;
  cost: string;
  url: string;
  region?: 'Global' | 'US' | 'Europe' | 'Asia' | 'Africa' | 'Americas' | 'Oceania';
}

export const scholarships: Scholarship[] = [
  // Undergraduate Scholarships
  {
    id: 'swe-scholarships',
    name: 'Society of Women Engineers (SWE) Scholarships',
    amount: '$1,000 - $15,000',
    description:
      'Over 260 scholarships for women studying engineering or computer science, some renewable.',
    level: 'undergraduate',
    url: 'https://swe.org/scholarships/',
    nextDeadline: '2027-02-15',
    region: 'US',
  },
  {
    id: 'google-women-techmakers',
    name: 'Google Women Techmakers Scholars Program',
    amount: '$10,000',
    description:
      'Award for women in computer science or related technical fields, includes invitation to annual retreat.',
    level: 'all',
    url: 'https://buildyourfuture.withgoogle.com/scholarships/google-women-techmakers-scholars-program',
    nextDeadline: '2026-12-01',
    region: 'Global',
  },
  {
    id: 'palantir-wit',
    name: 'Palantir Women in Technology Scholarship',
    amount: '$10,000',
    description:
      'Scholarship for women studying computer science, includes networking with Palantir engineers.',
    level: 'undergraduate',
    url: 'https://www.palantir.com/students/scholarship/wit-north-america/',
    nextDeadline: '2026-09-15',
    region: 'US',
  },
  {
    id: 'microsoft-tuition',
    name: 'Microsoft Tuition Scholarships',
    amount: 'Full tuition or partial tuition',
    description:
      'Multiple scholarship programs for women, minorities, and students with disabilities in computing.',
    level: 'undergraduate',
    url: 'https://www.microsoft.com/university',
    nextDeadline: '2027-02-01',
    region: 'US',
  },
  {
    id: 'bhw-stem',
    name: 'BHW Women in STEM Scholarship',
    amount: '$3,000',
    description:
      "Essay-based scholarship for women pursuing undergraduate or master's degrees in STEM.",
    level: 'all',
    url: 'https://thebhwgroup.com/scholarship',
    nextDeadline: '2027-03-01',
    region: 'US',
  },
  {
    id: 'astronaut-scholarship',
    name: 'Astronaut Scholarship Foundation',
    amount: 'Up to $15,000',
    description:
      'Prestigious faculty-nominated award for STEM majors at select universities.',
    level: 'undergraduate',
    url: 'https://www.astronautscholarship.org/',
    nextDeadline: '2027-03-15',
    region: 'US',
  },
  {
    id: 'aauw-scholarships',
    name: 'AAUW Scholarships',
    amount: 'Varies',
    description:
      'Multiple programs for women pursuing various STEM degrees at different career stages.',
    level: 'all',
    url: 'https://www.aauw.org/resources/programs/fellowships-grants/',
    nextDeadline: '2026-11-15',
    region: 'US',
  },
  {
    id: 'shpe-scholarships',
    name: 'Society of Hispanic Professional Engineers (SHPE) Scholarships',
    amount: '$1,000 - $5,000',
    description:
      'Scholarships for Hispanic students pursuing degrees in STEM fields.',
    level: 'undergraduate',
    url: 'https://www.shpe.org/students/scholarships/',
    nextDeadline: '2026-11-01',
    region: 'US',
  },
  {
    id: 'nsbe-scholarships',
    name: 'National Society of Black Engineers (NSBE) Scholarships',
    amount: 'Varies',
    description:
      'Scholarships supporting Black students in engineering programs.',
    level: 'undergraduate',
    url: 'https://www.nsbe.org/Programs/Scholarships.aspx',
    nextDeadline: '2026-11-30',
    region: 'US',
  },
  {
    id: 'science-ambassador',
    name: 'Science Ambassador Scholarship (Full Ride)',
    amount: 'Full tuition (up to $100,000)',
    description:
      'Unique video-based application for women in STEM with a full-tuition award.',
    level: 'undergraduate',
    url: 'https://www.scienceambassadorscholarship.org/',
    nextDeadline: '2026-12-15',
    region: 'US',
  },
  // Graduate Fellowships
  {
    id: 'nsf-grfp',
    name: 'NSF Graduate Research Fellowship Program (GRFP)',
    amount: '$37,000 stipend + $12,000 education allowance per year for 3 years',
    description:
      'Highly prestigious fellowship for STEM graduate students usable at any accredited US institution.',
    level: 'graduate',
    url: 'https://www.nsfgrfp.org/',
    nextDeadline: '2026-10-20',
    region: 'US',
  },
  {
    id: 'ford-foundation',
    name: 'Ford Foundation Fellowship Program',
    amount: '$27,000 - $45,000',
    description:
      'Prestigious fellowship for underrepresented minorities committed to advancing diversity in academia.',
    level: 'graduate',
    url: 'https://nap.edu/ford',
    nextDeadline: '2026-12-15',
    region: 'US',
  },
  {
    id: 'pdsoros',
    name: 'Paul & Daisy Soros Fellowships for New Americans',
    amount: '$90,000 over 2 years',
    description:
      'Highly competitive fellowship for immigrants and children of immigrants in graduate programs.',
    level: 'graduate',
    url: 'https://www.pdsoros.org/',
    nextDeadline: '2026-10-28',
    region: 'US',
  },
  {
    id: 'hertz-fellowship',
    name: 'Hertz Foundation Fellowship',
    amount: 'Full tuition + $38,000 annual stipend (up to 5 years)',
    description:
      'One of the most prestigious STEM fellowships for applied physical, biological, and engineering sciences.',
    level: 'graduate',
    url: 'https://www.hertzfoundation.org/',
    nextDeadline: '2026-10-25',
    region: 'US',
  },
  {
    id: 'peo-scholar',
    name: 'P.E.O. Scholar Awards',
    amount: '$20,000',
    description:
      'International award for women in the final two years of their doctoral program.',
    level: 'graduate',
    url: 'https://www.peointernational.org/',
    nextDeadline: '2026-11-20',
    region: 'Global',
  },
  {
    id: 'aauw-international',
    name: 'AAUW International Fellowships',
    amount: '$18,000 - $30,000',
    description:
      'Fellowships for international women pursuing graduate study in the United States.',
    level: 'graduate',
    url: 'https://www.aauw.org/resources/programs/fellowships-grants/international/',
    nextDeadline: '2026-11-15',
    region: 'Global',
  },
  {
    id: 'loreal-usa',
    name: "L'Oreal USA For Women in Science Fellowship",
    amount: '$60,000',
    description:
      'Prestigious award for women postdoctoral researchers in life sciences, physical sciences, math, engineering, and CS.',
    level: 'postdoctoral',
    url: 'https://www.loreal.com/usa-forwomeninscience',
    nextDeadline: '2027-01-31',
    region: 'US',
  },
  {
    id: 'facebook-fellowship',
    name: 'Facebook Fellowship Program',
    amount: 'Full tuition + stipend',
    description:
      'Fellowship for PhD students in computer science and related fields.',
    level: 'graduate',
    url: 'https://research.facebook.com/fellowship',
    nextDeadline: '2026-10-01',
    region: 'Global',
  },
  {
    id: 'microsoft-research-phd',
    name: 'Microsoft Research PhD Fellowship',
    amount: 'Full tuition + stipend',
    description: 'Fellowship for PhD students in computing-related fields.',
    level: 'graduate',
    url: 'https://www.microsoft.com/research/academic-program/phd-fellowship',
    nextDeadline: '2026-10-15',
    region: 'Global',
  },
  {
    id: 'google-phd',
    name: 'Google PhD Fellowship',
    amount: 'Full tuition + stipend for 2-3 years',
    description: 'Fellowship for PhD students in computer science.',
    level: 'graduate',
    url: 'https://research.google/outreach/phd-fellowship',
    nextDeadline: '2026-12-01',
    region: 'Global',
  },
  // Postdoctoral Funding
  {
    id: 'loreal-unesco',
    name: "L'Oreal-UNESCO For Women in Science",
    amount: 'Varies by region',
    description:
      'International program with regional and international awards for women postdoctoral researchers.',
    level: 'postdoctoral',
    url: 'https://www.forwomeninscience.com/',
    nextDeadline: '2026-10-31',
    region: 'Global',
  },
  {
    id: 'aauw-career-development',
    name: 'AAUW Career Development Grants',
    amount: '$2,000 - $12,000',
    description:
      'Grants for women pursuing advanced degrees, certificates, or credentials.',
    level: 'postdoctoral',
    url: 'https://www.aauw.org/resources/programs/fellowships-grants/current-opportunities/career-development/',
    nextDeadline: '2026-11-15',
    region: 'US',
  },
  {
    id: 'blavatnik-awards',
    name: 'Blavatnik Regional Awards for Young Scientists',
    amount: '$30,000 - $300,000',
    description:
      'Awards for young faculty in life sciences, physical sciences, and engineering.',
    level: 'postdoctoral',
    url: 'https://www.blavatnikawards.org/',
    nextDeadline: '2026-06-30',
    region: 'US',
  },
  {
    id: 'schlumberger-faculty',
    name: 'Schlumberger Foundation Faculty for the Future Fellowships',
    amount: 'Varies',
    description:
      'Fellowships for women from developing countries pursuing PhD or postdoc in STEM, focused on returning home.',
    level: 'postdoctoral',
    url: 'https://www.facultyforthefuture.net/',
    nextDeadline: '2026-11-07',
    region: 'Global',
  },
  // Research Grants
  {
    id: 'nsf-career',
    name: 'NSF CAREER Awards',
    amount: '$400,000 - $500,000 over 5 years',
    description:
      'Prestigious early-career faculty award with an education component.',
    level: 'postdoctoral',
    url: 'https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=503214',
    nextDeadline: '2026-07-31',
    region: 'US',
  },
  {
    id: 'nih-early-independence',
    name: 'NIH Early Independence Awards',
    amount: 'Up to $250,000 per year for 5 years',
    description: 'Research award for exceptional junior investigators.',
    level: 'postdoctoral',
    url: 'https://commonfund.nih.gov/earlyindependence',
    nextDeadline: '2026-08-15',
    region: 'US',
  },
  {
    id: 'sloan-fellowships',
    name: 'Alfred P. Sloan Research Fellowships',
    amount: '$75,000 over 2 years',
    description:
      'Highly prestigious unrestricted fellowships for early-career scholars in STEM fields.',
    level: 'postdoctoral',
    url: 'https://sloan.org/fellowships',
    nextDeadline: '2026-09-15',
    region: 'US',
  },
  {
    id: 'mozilla-moss',
    name: 'Mozilla Open Source Support (MOSS)',
    amount: 'Varies',
    description: 'Grants supporting open source projects and contributors.',
    level: 'all',
    url: 'https://www.mozilla.org/moss',
    nextDeadline: '2026-06-15',
    region: 'Global',
  },
  // Conference Travel Grants
  {
    id: 'ghc-scholarships',
    name: 'Grace Hopper Celebration (GHC) Scholarships',
    amount: 'Conference registration + travel',
    description:
      "Highly competitive scholarships for students and emerging professionals to attend the world's largest gathering of women technologists.",
    level: 'all',
    url: 'https://ghc.anitab.org/attend/scholarships/',
    nextDeadline: '2027-03-10',
    region: 'US',
  },
  {
    id: 'acm-w-scholarships',
    name: 'ACM-W Scholarships for Attendance at Research Conferences',
    amount: 'Up to $1,000',
    description:
      'Travel scholarships for women in computing attending ACM conferences.',
    level: 'all',
    url: 'https://women.acm.org/scholarships/',
    nextDeadline: '2026-05-15',
    region: 'Global',
  },
  {
    id: 'swe-conference-scholarships',
    name: 'SWE Conference Scholarships',
    amount: 'Varies',
    description:
      'Scholarships for SWE members attending WE Local, WE, or regional conferences.',
    level: 'all',
    url: 'https://swe.org',
    nextDeadline: '2026-08-01',
    region: 'US',
  },
];

export const organizations: Organization[] = [
  // General Women in STEM
  {
    id: 'awis',
    name: 'Association for Women in Science (AWIS)',
    initial: 'A',
    description:
      'Advocacy, networking, career resources, and local chapters across all STEM fields.',
    category: 'general',
    cost: '$45-$110',
    url: 'https://www.awis.org/',
    region: 'US',
  },
  {
    id: 'women-stem-leadership',
    name: 'Women in STEM Leadership',
    initial: 'W',
    description:
      'Leadership development organization focused on women in STEM careers.',
    category: 'general',
    url: 'https://www.womeninstemleadership.com/',
    region: 'US',
  },
  // Engineering
  {
    id: 'swe',
    name: 'Society of Women Engineers (SWE)',
    initial: 'S',
    description:
      'Largest organization for women engineers with scholarships, conferences, career center, and 300+ sections.',
    members: '50,000+',
    category: 'engineering',
    cost: '$20-$125',
    url: 'https://swe.org/',
    region: 'US',
  },
  {
    id: 'wepan',
    name: 'Women in Engineering ProActive Network (WEPAN)',
    initial: 'W',
    description:
      'Focused on engineering education and careers, great for educators and institutional change agents.',
    category: 'engineering',
    url: 'https://www.wepan.org/',
    region: 'US',
  },
  {
    id: 'nsbe',
    name: 'National Society of Black Engineers (NSBE)',
    initial: 'N',
    description:
      'Professional organization supporting Black engineers and engineering students.',
    members: '18,000+',
    category: 'engineering',
    url: 'https://www.nsbe.org/',
    region: 'US',
  },
  {
    id: 'shpe',
    name: 'Society of Hispanic Professional Engineers (SHPE)',
    initial: 'S',
    description:
      'Professional organization serving Hispanic STEM professionals and students.',
    members: '13,000+',
    category: 'engineering',
    url: 'https://www.shpe.org/',
    region: 'US',
  },
  {
    id: 'sase',
    name: 'Society of Asian Scientists and Engineers (SASE)',
    initial: 'S',
    description:
      'Professional organization for people of Asian heritage in STEM fields.',
    category: 'engineering',
    url: 'https://www.saseconnect.org/',
    region: 'US',
  },
  // Technology and Computer Science
  {
    id: 'anitab',
    name: 'AnitaB.org',
    initial: 'A',
    description:
      "Host of Grace Hopper Celebration, the world's largest gathering of women technologists.",
    category: 'technology',
    cost: 'Free',
    url: 'https://anitab.org/',
    region: 'Global',
  },
  {
    id: 'women-who-code',
    name: 'Women Who Code',
    initial: 'W',
    description:
      'Global nonprofit with free coding education, job board, events, and study groups in 145 countries.',
    members: '360,000+',
    category: 'technology',
    cost: 'Free',
    url: 'https://www.womenwhocode.com/',
    region: 'Global',
  },
  {
    id: 'girl-develop-it',
    name: 'Girl Develop It',
    initial: 'G',
    description:
      'Affordable web and software development classes with mentorship and local chapters.',
    category: 'technology',
    cost: 'Low-cost',
    url: 'https://www.girldevelopit.com/',
    region: 'US',
  },
  {
    id: 'acm-w',
    name: 'ACM-W (Association for Computing Machinery - Women)',
    initial: 'A',
    description:
      'Academic and industry computer science organization with scholarships, conferences, and chapters.',
    category: 'technology',
    url: 'https://women.acm.org/',
    region: 'Global',
  },
  {
    id: 'witi',
    name: 'Women in Technology International (WITI)',
    initial: 'W',
    description:
      'Global organization connecting women technology professionals for networking and career growth.',
    category: 'technology',
    url: 'https://witi.com/',
    region: 'Global',
  },
  {
    id: 'ncwit',
    name: 'National Center for Women & Information Technology (NCWIT)',
    initial: 'N',
    description:
      'Research-driven organization with K-12 programs and the Aspirations in Computing Award.',
    category: 'technology',
    url: 'https://www.ncwit.org/',
    region: 'US',
  },
  {
    id: 'django-girls',
    name: 'Django Girls',
    initial: 'D',
    description:
      'Free workshops worldwide teaching women Python and Django web development.',
    category: 'technology',
    cost: 'Free',
    url: 'https://djangogirls.org/',
    region: 'Global',
  },
  {
    id: 'pyladies',
    name: 'PyLadies',
    initial: 'P',
    description:
      'International mentorship group for women Python developers with local chapters and meetups.',
    category: 'technology',
    cost: 'Free',
    url: 'https://www.pyladies.com/',
    region: 'Global',
  },
  // Science
  {
    id: 'aaas',
    name: 'American Association for the Advancement of Science (AAAS)',
    initial: 'A',
    description:
      'Publisher of Science journal, offering advocacy, career resources across all sciences.',
    category: 'science',
    url: 'https://www.aaas.org/',
    region: 'US',
  },
  {
    id: 'awp',
    name: 'Association for Women in Psychology (AWP)',
    initial: 'A',
    description:
      'Professional organization supporting women in psychology and related fields.',
    category: 'science',
    url: 'https://www.awpsych.org/',
    region: 'US',
  },
  {
    id: 'acs-wcc',
    name: 'American Chemical Society Women Chemists Committee',
    initial: 'A',
    description:
      'Committee within ACS dedicated to supporting and advancing women in chemistry.',
    category: 'science',
    url: 'https://www.acs.org/wcc',
    region: 'US',
  },
  {
    id: 'sacnas',
    name: 'SACNAS',
    initial: 'S',
    description:
      'Society for Advancement of Chicanos/Hispanics and Native Americans in Science.',
    members: '10,000+',
    category: 'science',
    url: 'https://www.sacnas.org/',
    region: 'US',
  },
  {
    id: 'aps-cswp',
    name: 'APS Committee on the Status of Women in Physics',
    initial: 'A',
    description:
      'American Physical Society committee focused on advancing women in physics.',
    category: 'science',
    url: 'https://www.aps.org/cswp',
    region: 'US',
  },
  {
    id: 'women-in-bio',
    name: 'Women in Bio',
    initial: 'W',
    description:
      'Organization supporting women in the life sciences industry.',
    category: 'science',
    url: 'https://www.womeninbio.org/',
    region: 'US',
  },
  // Mathematics and Statistics
  {
    id: 'awm',
    name: 'Association for Women in Mathematics (AWM)',
    initial: 'A',
    description:
      'Strong mathematics community with workshops, mentorship network, and research opportunities.',
    category: 'mathematics',
    cost: '$30-$75',
    url: 'https://awm-math.org/',
    region: 'US',
  },
  {
    id: 'ewm',
    name: 'European Women in Mathematics (EWM)',
    initial: 'E',
    description:
      'European organization for women mathematicians with biennial conferences and networking.',
    category: 'mathematics',
    url: 'https://www.europeanwomeninmaths.org/',
    region: 'Europe',
  },
  {
    id: 'cwstat',
    name: 'Caucus for Women in Statistics',
    initial: 'C',
    description:
      'Organization dedicated to supporting and promoting women statisticians.',
    category: 'mathematics',
    url: 'https://www.cwstat.org/',
    region: 'US',
  },
  // Intersectional Organizations
  {
    id: 'black-girls-code',
    name: 'Black Girls CODE',
    initial: 'B',
    description:
      'Workshops, hackathons, and mentorship introducing Black girls ages 7-17 to tech and CS.',
    category: 'intersectional',
    cost: 'Free',
    url: 'https://www.blackgirlscode.com/',
    region: 'US',
  },
  {
    id: 'latinas-in-tech',
    name: 'Latinas in Tech',
    initial: 'L',
    description:
      'Networking, mentorship, and scholarships for Latina women in technology.',
    category: 'intersectional',
    cost: 'Free',
    url: 'https://www.latinasintech.org/',
    region: 'US',
  },
  {
    id: 'out-in-tech',
    name: 'Out in Tech',
    initial: 'O',
    description:
      'Networking events and career development for LGBTQ+ professionals in technology.',
    category: 'intersectional',
    url: 'https://www.outintech.com/',
    region: 'US',
  },
  {
    id: 'lesbians-who-tech',
    name: 'Lesbians Who Tech & Allies',
    initial: 'L',
    description:
      'Annual summit, city communities, and job board for LGBTQ women and non-binary people in tech.',
    category: 'intersectional',
    url: 'https://www.lesbianswhotech.org/',
    region: 'US',
  },
  {
    id: 'cmd-it',
    name: 'Women of Color in Computing (CMD-IT)',
    initial: 'W',
    description:
      'Collaborations Conference and scholarships for women of color in computing fields.',
    category: 'intersectional',
    url: 'https://cmd-it.org/',
    region: 'US',
  },
  {
    id: 'rewriting-the-code',
    name: 'Rewriting the Code',
    initial: 'R',
    description:
      'Peer community for college women in tech with internship opportunities and mentorship.',
    category: 'intersectional',
    url: 'https://www.rewritingthecode.org/',
    region: 'US',
  },
  // International Organizations
  {
    id: 'wise-uk',
    name: 'WISE Campaign',
    initial: 'W',
    description: 'Women in Science and Engineering. UK-based with awards, campaigns, and research.',
    category: 'general',
    url: 'https://www.wisecampaign.org.uk/',
    region: 'Europe',
  },
  {
    id: 'owsd',
    name: 'OWSD',
    initial: 'O',
    description: 'Organization for Women in Science for the Developing World. Fellowships and networking.',
    category: 'general',
    url: 'https://owsd.net/',
    region: 'Global',
  },
  {
    id: 'scwist',
    name: 'SCWIST',
    initial: 'S',
    description: 'Society for Canadian Women in Science and Technology.',
    category: 'general',
    url: 'https://www.scwist.ca/',
    region: 'Americas',
  },
  {
    id: 'wit-australia',
    name: 'Women in Technology Australia',
    initial: 'W',
    description: 'Australian network for women in technology.',
    category: 'technology',
    url: 'https://www.wit.org.au/',
    region: 'Oceania',
  },
  {
    id: 'epws',
    name: 'European Platform of Women Scientists',
    initial: 'E',
    description: 'Network representing women scientists across Europe.',
    category: 'science',
    url: 'https://epws.org/',
    region: 'Europe',
  },
  {
    id: 'awse',
    name: 'African Women in Science and Engineering',
    initial: 'A',
    description: 'Supporting women scientists and engineers across Africa.',
    category: 'general',
    url: 'https://awse-net.org/',
    region: 'Africa',
  },
  {
    id: 'loreal-unesco-intl',
    name: "L'Oreal-UNESCO For Women in Science",
    initial: 'L',
    description: 'International awards and fellowships for women scientists.',
    category: 'general',
    url: 'https://www.forwomeninscience.com/',
    region: 'Global',
  },
];

export const programs: Program[] = [
  // K-12 Programs
  {
    id: 'girls-who-code',
    name: 'Girls Who Code',
    description:
      'Summer immersion programs (7 weeks) and school-year clubs that have reached 500,000+ girls.',
    category: 'k12',
    cost: 'Free',
    audience: 'Grades 3-12',
    url: 'https://girlswhocode.com/',
    region: 'US',
  },
  {
    id: 'black-girls-code-program',
    name: 'Black Girls CODE',
    description:
      'Workshops, hackathons, and summer camps teaching Black girls coding and computer science.',
    category: 'k12',
    cost: 'Free or low-cost',
    audience: 'Ages 7-17',
    url: 'https://www.blackgirlscode.com/',
    region: 'US',
  },
  {
    id: 'techgirlz',
    name: 'TechGirlz',
    description:
      'Free workshops and online resources inspiring middle school girls to explore technology.',
    category: 'k12',
    cost: 'Free',
    audience: 'Middle school girls',
    url: 'https://www.techgirlz.org/',
    region: 'US',
  },
  {
    id: 'stem-like-a-girl',
    name: 'STEM Like a Girl',
    description:
      'Events, activities, and resources to get elementary and middle school girls excited about STEM.',
    category: 'k12',
    cost: 'Free',
    audience: 'Elementary and middle school',
    url: 'https://stemlikeagirl.org/',
    region: 'US',
  },
  {
    id: 'engineergirl',
    name: 'EngineerGirl',
    description:
      'Website with resources, essays, and interviews to inspire K-12 students about engineering.',
    category: 'k12',
    cost: 'Free',
    audience: 'K-12',
    url: 'https://www.engineergirl.org/',
    region: 'US',
  },
  {
    id: 'code-org',
    name: 'Code.org',
    description:
      'Free online coding courses and Hour of Code activities for all ages.',
    category: 'k12',
    cost: 'Free',
    audience: 'All ages',
    url: 'https://code.org/',
    region: 'Global',
  },
  {
    id: 'nasa-stem-engagement',
    name: 'NASA STEM Engagement',
    description:
      'Competitions, programs, and resources from NASA for K-12 students and beyond.',
    category: 'k12',
    cost: 'Free',
    audience: 'K-12 and beyond',
    url: 'https://www.nasa.gov/stem',
    region: 'US',
  },
  {
    id: 'first-robotics',
    name: 'FIRST Robotics',
    description:
      'Robotics competitions across various leagues inspiring young people in STEM.',
    category: 'k12',
    cost: 'Varies',
    audience: 'Ages 4-18',
    url: 'https://www.firstinspires.org/',
    region: 'Global',
  },
  // Coding Bootcamps and Tech Training
  {
    id: 'wwc-learn-to-code',
    name: 'Women Who Code - Learn to Code Programs',
    description:
      'Free online and in-person coding study groups for women.',
    category: 'bootcamp',
    cost: 'Free',
    audience: 'Women',
    url: 'https://www.womenwhocode.com/',
    region: 'Global',
  },
  {
    id: 'hackbright-academy',
    name: 'Hackbright Academy',
    description:
      '12-week full-time software engineering bootcamp for women with deferred tuition options.',
    category: 'bootcamp',
    cost: '~$17,000',
    audience: 'Women',
    url: 'https://www.hackbrightacademy.com/',
    region: 'US',
  },
  {
    id: 'grace-hopper-fullstack',
    name: 'Grace Hopper Program at Fullstack Academy',
    description:
      'Software engineering immersive (17 or 28 weeks) for women and non-binary students.',
    category: 'bootcamp',
    cost: '~$17,000',
    audience: 'Women and non-binary',
    url: 'https://www.gracehopper.com/',
    region: 'US',
  },
  {
    id: 'ada-developers',
    name: 'Ada Developers Academy',
    description:
      'Free 11-month software development program (6 months classroom + 5 months internship) in Seattle.',
    category: 'bootcamp',
    cost: 'Free',
    audience: 'Women and gender-diverse people',
    url: 'https://www.adadevelopersacademy.org/',
    region: 'US',
  },
  {
    id: 'app-academy',
    name: 'App Academy',
    description:
      'Full-stack web development bootcamp with deferred tuition until employed.',
    category: 'bootcamp',
    cost: 'Deferred tuition',
    audience: 'All',
    url: 'https://www.appacademy.io/',
    region: 'US',
  },
  {
    id: 'general-assembly',
    name: 'General Assembly',
    description:
      'Full-time, part-time, and online programs in coding, data science, and UX design.',
    category: 'bootcamp',
    cost: 'Varies by program',
    audience: 'All',
    url: 'https://generalassemb.ly/',
    region: 'Global',
  },
  // Summer Programs
  {
    id: 'google-cssi',
    name: 'Google Computer Science Summer Institute (CSSI)',
    description:
      'Free 3-week program for high school seniors entering college, including travel and accommodation.',
    category: 'summer',
    cost: 'Free',
    audience: 'High school seniors',
    url: 'https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute',
    region: 'US',
  },
  {
    id: 'microsoft-hs-internship',
    name: 'Microsoft High School Internship Program',
    description:
      'Internship opportunities at Microsoft for high school students.',
    category: 'summer',
    cost: 'Paid',
    audience: 'High school students',
    url: 'https://www.microsoft.com/university',
    region: 'US',
  },
  {
    id: 'nasa-internships',
    name: 'NASA Internships',
    description:
      'Summer, fall, and spring internships at NASA for high school through graduate students.',
    category: 'summer',
    cost: 'Paid',
    audience: 'High school through graduate',
    url: 'https://intern.nasa.gov/',
    region: 'US',
  },
  {
    id: 'nsf-reu',
    name: 'NSF REU (Research Experiences for Undergraduates)',
    description:
      'NSF-funded summer research programs for undergraduate women at universities nationwide.',
    category: 'summer',
    cost: 'Paid stipend',
    audience: 'Undergraduates',
    url: 'https://www.nsf.gov/crssprgm/reu/',
    region: 'US',
  },
  // Online Learning Platforms
  {
    id: 'coursera',
    name: 'Coursera',
    description:
      'University courses from Stanford, MIT, Yale and more, including STEM and women-in-leadership tracks.',
    category: 'online',
    cost: 'Free to audit; $49-$99 for certificates',
    audience: 'All',
    url: 'https://www.coursera.org/',
    region: 'Global',
  },
  {
    id: 'edx',
    name: 'edX',
    description:
      'University courses from Harvard, MIT, and Berkeley in STEM subjects.',
    category: 'online',
    cost: 'Free to audit; $50-$300 for certificates',
    audience: 'All',
    url: 'https://www.edx.org/',
    region: 'Global',
  },
  {
    id: 'khan-academy',
    name: 'Khan Academy',
    description:
      'Completely free K-12 and early college STEM education platform.',
    category: 'online',
    cost: 'Free',
    audience: 'K-12 and early college',
    url: 'https://www.khanacademy.org/',
    region: 'Global',
  },
  {
    id: 'codecademy',
    name: 'Codecademy',
    description:
      'Interactive coding lessons across many programming languages.',
    category: 'online',
    cost: 'Free basic; $20/month Pro',
    audience: 'All',
    url: 'https://www.codecademy.com/',
    region: 'Global',
  },
  {
    id: 'freecodecamp',
    name: 'freeCodeCamp',
    description:
      'Free coding curriculum and certifications covering full-stack web development.',
    category: 'online',
    cost: 'Free',
    audience: 'All',
    url: 'https://www.freecodecamp.org/',
    region: 'Global',
  },
  {
    id: 'linkedin-learning',
    name: 'LinkedIn Learning',
    description:
      'Professional and technical skills courses, often free through libraries or universities.',
    category: 'online',
    cost: '$30-$40/month',
    audience: 'All',
    url: 'https://www.linkedin.com/learning/',
    region: 'Global',
  },
  {
    id: 'udacity',
    name: 'Udacity',
    description:
      'Nanodegree programs in data science, AI, programming, and other tech skills.',
    category: 'online',
    cost: '~$400/month',
    audience: 'All',
    url: 'https://www.udacity.com/',
    region: 'Global',
  },
  {
    id: 'mit-ocw',
    name: 'MIT OpenCourseWare',
    description:
      'Free MIT course materials covering the full range of STEM subjects.',
    category: 'online',
    cost: 'Free',
    audience: 'All',
    url: 'https://ocw.mit.edu/',
    region: 'Global',
  },
  // Certification Programs
  {
    id: 'google-career-certs',
    name: 'Google Career Certificates',
    description:
      'Self-paced 3-6 month programs in Data Analytics, Project Management, UX Design, and IT Support.',
    category: 'certification',
    cost: '$39/month',
    audience: 'All',
    url: 'https://grow.google/certificates/',
    region: 'Global',
  },
  {
    id: 'aws-certification',
    name: 'AWS Certified Solutions Architect',
    description:
      'Industry-recognized cloud computing certification from Amazon Web Services.',
    category: 'certification',
    cost: 'Varies',
    audience: 'All',
    url: 'https://aws.amazon.com/certification/',
    region: 'Global',
  },
  {
    id: 'microsoft-certifications',
    name: 'Microsoft Certifications',
    description:
      'Certifications in cloud, data, AI, and development from Microsoft.',
    category: 'certification',
    cost: 'Varies',
    audience: 'All',
    url: 'https://www.microsoft.com/certifications',
    region: 'Global',
  },
  {
    id: 'cisco-certifications',
    name: 'Cisco Certifications',
    description: 'Networking certifications from Cisco Systems.',
    category: 'certification',
    cost: 'Varies',
    audience: 'All',
    url: 'https://www.cisco.com/certifications',
    region: 'Global',
  },
];

export const conferences: Conference[] = [
  {
    id: 'ghc',
    name: 'Grace Hopper Celebration (GHC)',
    description:
      "World's largest gathering of women technologists with a career fair featuring 600+ employers.",
    size: '26,000+',
    timing: 'September/October',
    month: 9,
    monthEnd: 10,
    cost: '$300-$600',
    url: 'https://ghc.anitab.org/',
    region: 'US',
  },
  {
    id: 'swe-we',
    name: 'SWE Annual Conference (WE)',
    description:
      'Largest conference for women in engineering with career fair, professional development, and networking.',
    size: '15,000+',
    timing: 'October/November',
    month: 10,
    monthEnd: 11,
    cost: 'Varies (scholarships available)',
    url: 'https://we.swe.org/',
    region: 'US',
  },
  {
    id: 'wids',
    name: 'Women in Data Science (WiDS) Conference',
    description:
      'Annual global data science conference with year-round regional events worldwide.',
    timing: 'March',
    month: 3,
    cost: 'Free or low-cost',
    url: 'https://www.widsconference.org/',
    region: 'Global',
  },
  {
    id: 'lwt-summit',
    name: 'Lesbians Who Tech & Allies Summit',
    description:
      'Summit for LGBTQ+ women and non-binary people in technology.',
    size: '5,000+',
    timing: 'February/March',
    month: 2,
    monthEnd: 3,
    url: 'https://www.lesbianswhotech.org/summit/',
    region: 'US',
  },
  {
    id: 'wicys',
    name: 'Women in Cybersecurity (WiCyS) Conference',
    description:
      'Annual conference focused on recruiting, retaining, and advancing women in cybersecurity.',
    timing: 'March',
    month: 3,
    url: 'https://www.wicys.org/conference/',
    region: 'US',
  },
  {
    id: 'sacnas-conference',
    name: 'SACNAS National Diversity in STEM Conference',
    description:
      'Conference for Hispanics/Chicanos and Native Americans in STEM with career expo.',
    size: '5,000+',
    timing: 'October',
    month: 10,
    url: 'https://www.sacnas.org/conference/',
    region: 'US',
  },
  {
    id: 'nsbe-convention',
    name: 'NSBE Annual Convention',
    description:
      'One of the largest STEM conferences focused on Black engineers with career fair and workshops.',
    size: '10,000+',
    timing: 'March',
    month: 3,
    url: 'https://www.nsbe.org/convention/',
    region: 'US',
  },
  {
    id: 'awm-symposium',
    name: 'AWM Research Symposium',
    description:
      'Biennial symposium showcasing research by women in mathematics.',
    timing: 'Biennial',
    url: 'https://awm-math.org/',
    region: 'US',
  },
  {
    id: 'cra-w-grad-cohort',
    name: 'CRA-W Grad Cohort Workshop',
    description:
      'Workshop for graduate women in computing research with mentoring and networking.',
    timing: 'April',
    month: 4,
    url: 'https://cra.org/cra-w/grad-cohort-for-women/',
    region: 'US',
  },
  {
    id: 'ewm-meeting',
    name: 'European Women in Mathematics (EWM) General Meeting',
    description:
      'International meeting for women mathematicians held every 2-4 years in Europe.',
    timing: 'Every 2-4 years',
    url: 'https://www.europeanwomeninmaths.org/',
    region: 'Europe',
  },
  {
    id: 'pyladies-meetups',
    name: 'PyLadies Meetups',
    description:
      'Ongoing local meetups for women Python developers in cities worldwide.',
    timing: 'Ongoing',
    cost: 'Free',
    url: 'https://www.pyladies.com/',
    region: 'Global',
  },
  {
    id: 'wwc-networking',
    name: 'Women Who Code Networking Nights',
    description:
      'Monthly networking events for women in tech across various cities.',
    timing: 'Monthly',
    cost: 'Free',
    url: 'https://www.womenwhocode.com/events',
    region: 'Global',
  },
  {
    id: 'rails-girls',
    name: 'Rails Girls Workshops',
    description:
      'Free workshops teaching Ruby on Rails to beginners worldwide.',
    timing: 'Ongoing',
    cost: 'Free',
    url: 'https://railsgirls.com/',
    region: 'Global',
  },
  {
    id: 'django-girls-workshops',
    name: 'Django Girls Workshops',
    description:
      'Free Python and Django workshops for beginners held worldwide.',
    timing: 'Ongoing',
    cost: 'Free',
    url: 'https://djangogirls.org/',
    region: 'Global',
  },
];

export const mentorshipPlatforms: MentorshipPlatform[] = [
  {
    id: 'mentornet',
    name: 'MentorNet',
    description:
      'One-on-one e-mentoring platform that matches mentees with mentors based on goals and interests.',
    cost: 'Free',
    url: 'https://www.mentornet.org/',
    region: 'US',
  },
  {
    id: 'linkedin-career-advice',
    name: 'LinkedIn Career Advice',
    description:
      'Algorithm-matched mentorship where you opt in as mentor or mentee based on career goals.',
    cost: 'Free',
    url: 'https://www.linkedin.com/',
    region: 'Global',
  },
  {
    id: 'adplist',
    name: 'ADPList (Amazing Design People List)',
    description:
      'Book time with mentors in design and tech, with group sessions available.',
    cost: 'Free',
    url: 'https://www.adplist.org/',
    region: 'Global',
  },
  {
    id: 'million-women-mentors',
    name: 'Million Women Mentors (MWM)',
    description:
      'Connects mentors with mentees focused on supporting girls and women in STEM from K-12 to early career.',
    cost: 'Free',
    url: 'https://www.millionwomenmentors.org/',
    region: 'US',
  },
];

export const jobBoards: JobBoard[] = [
  {
    id: 'powertofly',
    name: 'PowerToFly',
    description:
      'Remote-first job board featuring diversity-focused companies with networking events and career advice.',
    cost: 'Free',
    url: 'https://powertofly.com/',
    region: 'Global',
  },
  {
    id: 'hire-tech-ladies',
    name: 'Hire Tech Ladies',
    description:
      'Job board and community for women in tech with free basic access and premium features.',
    cost: 'Free basic; $19/month premium',
    url: 'https://www.hiretechladies.com/',
    region: 'US',
  },
  {
    id: 'wwc-job-board',
    name: 'Women Who Code Job Board',
    description:
      'Free job board focused on software engineering positions for women.',
    cost: 'Free',
    url: 'https://www.womenwhocode.com/jobs',
    region: 'Global',
  },
  {
    id: 'fairygodboss',
    name: 'Fairygodboss',
    description:
      'Job board with company reviews from women, career advice, and women-friendly employer listings.',
    cost: 'Free',
    url: 'https://www.fairygodboss.com/',
    region: 'US',
  },
  {
    id: 'the-mom-project',
    name: 'The Mom Project',
    description:
      'Jobs for mothers including flexible, remote, and returnship opportunities.',
    cost: 'Free',
    url: 'https://www.themomproject.com/',
    region: 'US',
  },
  {
    id: 'jopwell',
    name: 'Jopwell',
    description:
      'Career platform for Black, Latinx, and Native American professionals.',
    cost: 'Free',
    url: 'https://www.jopwell.com/',
    region: 'US',
  },
  {
    id: 'diversify-tech',
    name: 'Diversify Tech',
    description:
      'Jobs and resources for underrepresented people in tech.',
    cost: 'Free',
    url: 'https://www.diversifytech.co/',
    region: 'Global',
  },
  {
    id: 'linkedin-diversity',
    name: 'LinkedIn (with diversity filters)',
    description:
      'Use filters to find companies with diversity initiatives and women-friendly workplaces.',
    cost: 'Free',
    url: 'https://www.linkedin.com/jobs/',
    region: 'Global',
  },
];
