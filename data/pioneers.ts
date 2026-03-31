export interface Pioneer {
  id: string;
  name: string;
  initial: string;
  title: string;
  description: string;
  field: string;
  category: 'science' | 'technology' | 'engineering' | 'mathematics';
  era: 'historical' | 'contemporary';
  years: string;
  link?: string;
}

export const pioneers: Pioneer[] = [
  // =====================
  // SCIENCE - Historical
  // =====================
  {
    id: 'marie-curie',
    name: 'Marie Curie',
    initial: 'M',
    title: 'First woman to win a Nobel Prize',
    description:
      'Discovered radioactivity, coined the term, and won two Nobel Prizes in two different sciences. She proved brilliance has no gender — then built mobile X-ray units during WWI to save lives on the front lines.',
    field: 'Physics & Chemistry',
    category: 'science',
    era: 'historical',
    years: '1867-1934',
    link: 'https://en.wikipedia.org/wiki/Marie_Curie',
  },
  {
    id: 'rosalind-franklin',
    name: 'Rosalind Franklin',
    initial: 'R',
    title: 'Revealed the structure of DNA',
    description:
      'Her X-ray crystallography produced Photo 51 — the image that unlocked the double helix. Watson and Crick used her data without permission; recognition came decades after her death at 37.',
    field: 'Molecular Biology & Biophysics',
    category: 'science',
    era: 'historical',
    years: '1920-1958',
    link: 'https://en.wikipedia.org/wiki/Rosalind_Franklin',
  },
  {
    id: 'barbara-mcclintock',
    name: 'Barbara McClintock',
    initial: 'B',
    title: 'Discoverer of genetic transposition',
    description:
      'Proved that genes could "jump" between chromosomes — a discovery so ahead of its time that scientists ignored it for 30 years. She won the Nobel Prize unshared in 1983, vindicating decades of solitary work.',
    field: 'Genetics & Cytogenetics',
    category: 'science',
    era: 'historical',
    years: '1902-1992',
    link: 'https://en.wikipedia.org/wiki/Barbara_McClintock',
  },
  {
    id: 'rachel-carson',
    name: 'Rachel Carson',
    initial: 'R',
    title: 'Mother of the modern environmental movement',
    description:
      'Her book "Silent Spring" took on the entire chemical industry and won. It led to a nationwide ban on DDT and the creation of the EPA — all while she was battling breast cancer.',
    field: 'Marine Biology & Environmental Science',
    category: 'science',
    era: 'historical',
    years: '1907-1964',
    link: 'https://en.wikipedia.org/wiki/Rachel_Carson',
  },
  {
    id: 'jane-goodall',
    name: 'Jane Goodall',
    initial: 'J',
    title: "World's foremost expert on chimpanzees",
    description:
      'Rewrote the textbooks by observing chimps making tools — something scientists thought only humans could do. She started without a university degree and built a 60-year legacy in primatology.',
    field: 'Primatology & Anthropology',
    category: 'science',
    era: 'historical',
    years: '1934-Present',
    link: 'https://en.wikipedia.org/wiki/Jane_Goodall',
  },

  // =====================
  // SCIENCE - Contemporary
  // =====================
  {
    id: 'tu-youyou',
    name: 'Tu Youyou',
    initial: 'T',
    title: 'Discoverer of artemisinin, saving millions from malaria',
    description:
      'Mined ancient Chinese medical texts to find artemisinin, a revolutionary malaria treatment. She tested the drug on herself first and worked for decades without international recognition before winning the Nobel Prize.',
    field: 'Pharmaceutical Chemistry',
    category: 'science',
    era: 'contemporary',
    years: '1930-Present',
    link: 'https://en.wikipedia.org/wiki/Tu_Youyou',
  },
  {
    id: 'jennifer-doudna',
    name: 'Jennifer Doudna',
    initial: 'J',
    title: 'Co-developer of CRISPR gene editing',
    description:
      'Co-invented CRISPR-Cas9, giving humanity the power to edit DNA with unprecedented precision. Her Nobel Prize-winning work is revolutionizing medicine, agriculture, and our understanding of life itself.',
    field: 'Biochemistry & Genetics',
    category: 'science',
    era: 'contemporary',
    years: '1964-Present',
    link: 'https://en.wikipedia.org/wiki/Jennifer_Doudna',
  },
  {
    id: 'fabiola-gianotti',
    name: 'Fabiola Gianotti',
    initial: 'F',
    title: 'First woman Director-General of CERN',
    description:
      'Led the ATLAS experiment that discovered the Higgs boson, coordinating 3,000 physicists from 38 countries. Then became the first woman to run CERN, the world\'s largest particle physics lab.',
    field: 'Particle Physics',
    category: 'science',
    era: 'contemporary',
    years: '1960-Present',
    link: 'https://en.wikipedia.org/wiki/Fabiola_Gianotti',
  },
  {
    id: 'katalin-kariko',
    name: 'Katalin Karikó',
    initial: 'K',
    title: 'Pioneer of mRNA vaccine technology',
    description:
      'Demoted, defunded, and dismissed for decades — she never stopped believing in mRNA. Her persistence became the foundation of COVID-19 vaccines that saved millions of lives, earning her the 2023 Nobel Prize.',
    field: 'Biochemistry & Immunology',
    category: 'science',
    era: 'contemporary',
    years: '1955-Present',
    link: 'https://en.wikipedia.org/wiki/Katalin_Karik%C3%B3',
  },

  // =====================
  // TECHNOLOGY - Historical
  // =====================
  {
    id: 'ada-lovelace',
    name: 'Ada Lovelace',
    initial: 'A',
    title: "The world's first computer programmer",
    description:
      'Wrote the first algorithm intended to be processed by a machine — a full century before modern computers existed. She envisioned computers creating music and art, not just crunching numbers.',
    field: 'Mathematics & Computing',
    category: 'technology',
    era: 'historical',
    years: '1815-1852',
    link: 'https://en.wikipedia.org/wiki/Ada_Lovelace',
  },
  {
    id: 'grace-hopper',
    name: 'Grace Hopper',
    initial: 'G',
    title: 'Pioneer of computer programming',
    description:
      'Invented the first compiler and made programming accessible to humans, not just machines. A Navy rear admiral who popularized "debugging" and lived by: "The most dangerous phrase is \'we\'ve always done it this way.\'"',
    field: 'Computer Science',
    category: 'technology',
    era: 'historical',
    years: '1906-1992',
    link: 'https://en.wikipedia.org/wiki/Grace_Hopper',
  },
  {
    id: 'hedy-lamarr',
    name: 'Hedy Lamarr',
    initial: 'H',
    title: 'Co-inventor of frequency-hopping spread spectrum',
    description:
      'A Hollywood star who was secretly a brilliant inventor. She co-invented frequency-hopping technology during WWII that the Navy dismissed — it later became the foundation of WiFi, GPS, and Bluetooth.',
    field: 'Wireless Communications & Invention',
    category: 'technology',
    era: 'historical',
    years: '1914-2000',
    link: 'https://en.wikipedia.org/wiki/Hedy_Lamarr',
  },
  {
    id: 'radia-perlman',
    name: 'Radia Perlman',
    initial: 'R',
    title: 'Mother of the Internet',
    description:
      'Invented the Spanning Tree Protocol that makes network bridges work — a foundational piece of how the internet operates. She holds over 100 patents and was one of just 50 women among 1,000 students at MIT.',
    field: 'Computer Science & Network Engineering',
    category: 'technology',
    era: 'historical',
    years: '1951-Present',
    link: 'https://en.wikipedia.org/wiki/Radia_Perlman',
  },

  // =====================
  // TECHNOLOGY - Contemporary
  // =====================
  {
    id: 'susan-wojcicki',
    name: 'Susan Wojcicki',
    initial: 'S',
    title: 'Former CEO of YouTube',
    description:
      'Google\'s 16th employee who rented her garage to Larry Page and Sergey Brin. She proposed Google\'s acquisition of YouTube, then led it as CEO, growing it to over 2 billion users.',
    field: 'Technology Business & Internet',
    category: 'technology',
    era: 'contemporary',
    years: '1968-2024',
    link: 'https://en.wikipedia.org/wiki/Susan_Wojcicki',
  },
  {
    id: 'reshma-saujani',
    name: 'Reshma Saujani',
    initial: 'R',
    title: 'Founder of Girls Who Code',
    description:
      'After losing political campaigns, she found her true calling: teaching girls to code. Girls Who Code has reached over 500,000 young women, attacking the tech gender gap at its root — education.',
    field: 'Technology Education & Advocacy',
    category: 'technology',
    era: 'contemporary',
    years: '1975-Present',
    link: 'https://en.wikipedia.org/wiki/Reshma_Saujani',
  },
  {
    id: 'fei-fei-li',
    name: 'Fei-Fei Li',
    initial: 'F',
    title: 'Creator of ImageNet, catalyst of the AI revolution',
    description:
      'Immigrated to the U.S. at 16 speaking little English, worked multiple jobs through college, and created ImageNet — the dataset that ignited the deep learning revolution and modern AI boom.',
    field: 'Artificial Intelligence & Computer Vision',
    category: 'technology',
    era: 'contemporary',
    years: '1976-Present',
    link: 'https://en.wikipedia.org/wiki/Fei-Fei_Li',
  },
  {
    id: 'timnit-gebru',
    name: 'Timnit Gebru',
    initial: 'T',
    title: 'Pioneer of AI ethics and bias research',
    description:
      'An Eritrean Ethiopian refugee who became a leading voice exposing racial and gender bias in AI. Her "Gender Shades" paper changed the industry, and she stood up to Big Tech to demand accountability.',
    field: 'Artificial Intelligence & Ethics',
    category: 'technology',
    era: 'contemporary',
    years: '1983-Present',
    link: 'https://en.wikipedia.org/wiki/Timnit_Gebru',
  },

  // =====================
  // ENGINEERING - Historical
  // =====================
  {
    id: 'emily-warren-roebling',
    name: 'Emily Warren Roebling',
    initial: 'E',
    title: 'De facto chief engineer of the Brooklyn Bridge',
    description:
      'When her husband fell ill, she taught herself engineering and took over construction of the Brooklyn Bridge for over a decade. She was the first person to cross the completed bridge in 1883.',
    field: 'Civil Engineering',
    category: 'engineering',
    era: 'historical',
    years: '1843-1903',
    link: 'https://en.wikipedia.org/wiki/Emily_Warren_Roebling',
  },
  {
    id: 'lillian-gilbreth',
    name: 'Lillian Moller Gilbreth',
    initial: 'L',
    title: 'First Lady of Engineering',
    description:
      'Earned her PhD while raising 12 children, then took over the family engineering firm when her husband died. She pioneered ergonomics, invented the foot-pedal trash can, and worked until age 90.',
    field: 'Industrial Engineering & Psychology',
    category: 'engineering',
    era: 'historical',
    years: '1878-1972',
    link: 'https://en.wikipedia.org/wiki/Lillian_Moller_Gilbreth',
  },
  {
    id: 'irmgard-flugge-lotz',
    name: 'Irmgard Flügge-Lotz',
    initial: 'I',
    title: 'First woman engineering professor at Stanford',
    description:
      'Fled Nazi Germany and worked without pay at Stanford for years before becoming its first female engineering professor at age 57. Her work on automatic control theory is fundamental to modern aerospace.',
    field: 'Aeronautical Engineering',
    category: 'engineering',
    era: 'historical',
    years: '1903-1974',
    link: 'https://en.wikipedia.org/wiki/Irmgard_Fl%C3%BCgge-Lotz',
  },

  // =====================
  // ENGINEERING - Contemporary
  // =====================
  {
    id: 'gwynne-shotwell',
    name: 'Gwynne Shotwell',
    initial: 'G',
    title: 'President and COO of SpaceX',
    description:
      'Started college studying art, pivoted to engineering, and now runs the day-to-day operations of SpaceX. Under her leadership, it became the first private company to send astronauts to the ISS.',
    field: 'Aerospace Engineering',
    category: 'engineering',
    era: 'contemporary',
    years: '1963-Present',
    link: 'https://en.wikipedia.org/wiki/Gwynne_Shotwell',
  },
  {
    id: 'yoky-matsuoka',
    name: 'Yoky Matsuoka',
    initial: 'Y',
    title: 'Pioneer of neurobotics and co-founder of Google X',
    description:
      'A former aspiring tennis pro who turned serious injuries into a new path — building robotic limbs that interface with the human brain. She co-founded Google X and won a MacArthur "Genius" grant at 36.',
    field: 'Robotics & Neuroscience',
    category: 'engineering',
    era: 'contemporary',
    years: '1971-Present',
    link: 'https://en.wikipedia.org/wiki/Yoky_Matsuoka',
  },
  {
    id: 'ayanna-howard',
    name: 'Ayanna Howard',
    initial: 'A',
    title: 'Roboticist building AI for people with special needs',
    description:
      'Spent 13 years at NASA JPL, then founded Zyrobotics to create therapy tools for children with special needs. Now Dean of Engineering at Ohio State, she proves robotics can serve everyone.',
    field: 'Robotics',
    category: 'engineering',
    era: 'contemporary',
    years: '1972-Present',
    link: 'https://en.wikipedia.org/wiki/Ayanna_Howard',
  },
  {
    id: 'debbie-sterling',
    name: 'Debbie Sterling',
    initial: 'D',
    title: 'Founder of GoldieBlox',
    description:
      'Often the only woman in her Stanford engineering classes, she channeled that frustration into GoldieBlox — a toy company that disrupted the "pink aisle" and introduced millions of girls to engineering.',
    field: 'Mechanical Engineering & Design',
    category: 'engineering',
    era: 'contemporary',
    years: '1983-Present',
    link: 'https://en.wikipedia.org/wiki/Debbie_Sterling',
  },

  // =====================
  // MATHEMATICS - Historical
  // =====================
  {
    id: 'sofia-kovalevskaya',
    name: 'Sofia Kovalevskaya',
    initial: 'S',
    title: 'First woman to earn a doctorate in mathematics',
    description:
      'Entered a marriage of convenience just to leave Russia and study math. She became the first woman to earn a math doctorate and the first female full professor in Northern Europe — all before dying at 41.',
    field: 'Mathematics',
    category: 'mathematics',
    era: 'historical',
    years: '1850-1891',
    link: 'https://en.wikipedia.org/wiki/Sofia_Kovalevskaya',
  },
  {
    id: 'emmy-noether',
    name: 'Emmy Noether',
    initial: 'E',
    title: 'Most important woman in the history of mathematics',
    description:
      'Einstein called her the most important woman in math history. She developed Noether\'s Theorem linking symmetry to conservation laws — the foundation of modern physics — while being forced to lecture under male colleagues\' names.',
    field: 'Abstract Algebra & Theoretical Physics',
    category: 'mathematics',
    era: 'historical',
    years: '1882-1935',
    link: 'https://en.wikipedia.org/wiki/Emmy_Noether',
  },
  {
    id: 'katherine-johnson',
    name: 'Katherine Johnson',
    initial: 'K',
    title: 'NASA mathematician who sent humans to the moon',
    description:
      'Her orbital trajectory calculations were so trusted that John Glenn refused to fly until she personally verified the computer\'s numbers. She broke through both racial segregation and gender barriers at NASA.',
    field: 'Mathematics & Aerospace',
    category: 'mathematics',
    era: 'historical',
    years: '1918-2020',
    link: 'https://en.wikipedia.org/wiki/Katherine_Johnson',
  },
  {
    id: 'mary-jackson',
    name: 'Mary Jackson',
    initial: 'M',
    title: "NASA's first Black female engineer",
    description:
      'Had to petition the city of Hampton just to take engineering classes in a segregated school. She became NASA\'s first Black female engineer, then sacrificed her own advancement to help other women and minorities rise.',
    field: 'Mathematics & Aerospace Engineering',
    category: 'mathematics',
    era: 'historical',
    years: '1921-2005',
    link: 'https://en.wikipedia.org/wiki/Mary_Jackson_(engineer)',
  },

  // =====================
  // MATHEMATICS - Contemporary
  // =====================
  {
    id: 'maryam-mirzakhani',
    name: 'Maryam Mirzakhani',
    initial: 'M',
    title: 'First woman to win the Fields Medal',
    description:
      'Grew up during the Iran-Iraq War and became the first woman — and first Iranian — to win the Fields Medal, math\'s highest honor. She described math as "being lost in a jungle" and finding a way out.',
    field: 'Mathematics',
    category: 'mathematics',
    era: 'contemporary',
    years: '1977-2017',
    link: 'https://en.wikipedia.org/wiki/Maryam_Mirzakhani',
  },
  {
    id: 'ingrid-daubechies',
    name: 'Ingrid Daubechies',
    initial: 'I',
    title: 'Inventor of wavelets used in image compression',
    description:
      'Invented the Daubechies wavelets used in JPEG 2000 — technology millions of people use daily without knowing her name. She became the first woman president of the International Mathematical Union.',
    field: 'Mathematics & Applied Mathematics',
    category: 'mathematics',
    era: 'contemporary',
    years: '1954-Present',
    link: 'https://en.wikipedia.org/wiki/Ingrid_Daubechies',
  },
  {
    id: 'chelsea-walton',
    name: 'Chelsea Walton',
    initial: 'C',
    title: 'Leading researcher in noncommutative algebra',
    description:
      'A Black woman navigating a field with few role models, she turned isolation into fuel — building an influential research career in noncommutative algebra while mentoring the next generation of diverse mathematicians.',
    field: 'Noncommutative Algebra',
    category: 'mathematics',
    era: 'contemporary',
    years: '1983-Present',
    link: 'https://en.wikipedia.org/wiki/Chelsea_Walton',
  },
  {
    id: 'talithia-williams',
    name: 'Talithia Williams',
    initial: 'T',
    title: 'Statistician making math accessible to all',
    description:
      'A TED speaker with over a million views and host of PBS NOVA Wonders, she makes statistics feel human and urgent. She proves you don\'t need a lab coat to be a scientist — just curiosity and data.',
    field: 'Statistics',
    category: 'mathematics',
    era: 'contemporary',
    years: '1980-Present',
    link: 'https://en.wikipedia.org/wiki/Talithia_Williams',
  },
];

export function getRandomPioneer(): Pioneer {
  return pioneers[Math.floor(Math.random() * pioneers.length)]!;
}

export function getPioneerByField(field: string): Pioneer | undefined {
  return pioneers.find((p) =>
    p.field.toLowerCase().includes(field.toLowerCase())
  );
}

export function getPioneersByCategory(category: string): Pioneer[] {
  return pioneers.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}
