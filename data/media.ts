export interface Book {
  title: string;
  author: string;
  category: 'challenges' | 'solutions' | 'biography' | 'young-readers';
}

export interface Podcast {
  name: string;
  host?: string;
  description: string;
  category: 'general' | 'technology' | 'science' | 'career';
}

export interface Documentary {
  title: string;
  year?: string;
  description: string;
}

export interface YouTubeChannel {
  name: string;
  host?: string;
  description: string;
}

export const books: Book[] = [
  // Understanding the Challenges — Bias and Discrimination
  {
    title: 'Inferior: How Science Got Women Wrong',
    author: 'Angela Saini',
    category: 'challenges',
  },
  {
    title: 'Brotopia: Breaking Up the Boys\' Club of Silicon Valley',
    author: 'Emily Chang',
    category: 'challenges',
  },
  {
    title: 'The Confidence Code: The Science and Art of Self-Assurance',
    author: 'Katty Kay & Claire Shipman',
    category: 'challenges',
  },
  {
    title: 'Whistleblower: My Journey to Silicon Valley and Fight for Justice at Uber',
    author: 'Susan Fowler',
    category: 'challenges',
  },
  {
    title: 'Reset: My Fight for Inclusion and Lasting Change',
    author: 'Ellen Pao',
    category: 'challenges',
  },
  // Understanding the Challenges — Academic Perspectives
  {
    title: 'Women in Science: Career Processes and Outcomes',
    author: 'Yu Xie & Kimberlee Shauman',
    category: 'challenges',
  },
  {
    title: 'Why So Slow? The Advancement of Women',
    author: 'Virginia Valian',
    category: 'challenges',
  },
  {
    title: 'Unequal: How America\'s Courts Undermine Discrimination Law',
    author: 'Sandra F. Sperino',
    category: 'challenges',
  },
  // Solutions and Action — Organizational Change
  {
    title: 'What Works: Gender Equality by Design',
    author: 'Iris Bohnet',
    category: 'solutions',
  },
  {
    title: 'The Fix: Overcome the Invisible Barriers That Hold Women Back at Work',
    author: 'Michelle P. King',
    category: 'solutions',
  },
  {
    title: 'Inclusion on Purpose: An Intersectional Approach to Creating a Culture of Belonging at Work',
    author: 'Ruchika Tulshyan',
    category: 'solutions',
  },
  {
    title: 'Better Allies: Everyday Actions to Create Inclusive, Engaging Workplaces',
    author: 'Karen Catlin',
    category: 'solutions',
  },
  // Solutions and Action — Career Development
  {
    title: 'Lean In: Women, Work, and the Will to Lead',
    author: 'Sheryl Sandberg',
    category: 'solutions',
  },
  {
    title: 'The Memo: What Women of Color Need to Know to Secure a Seat at the Table',
    author: 'Minda Harts',
    category: 'solutions',
  },
  {
    title: 'Nice Girls Don\'t Get the Corner Office',
    author: 'Lois P. Frankel',
    category: 'solutions',
  },
  {
    title: 'Playing Big: Practical Wisdom for Women Who Want to Speak Up, Create, and Lead',
    author: 'Tara Mohr',
    category: 'solutions',
  },
  {
    title: 'Brave, Not Perfect',
    author: 'Reshma Saujani',
    category: 'solutions',
  },
  // Biographies and Memoirs — Historical
  {
    title: 'Hidden Figures',
    author: 'Margot Lee Shetterly',
    category: 'biography',
  },
  {
    title: 'The Immortal Life of Henrietta Lacks',
    author: 'Rebecca Skloot',
    category: 'biography',
  },
  {
    title: 'Marie Curie: A Life',
    author: 'Susan Quinn',
    category: 'biography',
  },
  {
    title: 'Rosalind Franklin: The Dark Lady of DNA',
    author: 'Brenda Maddox',
    category: 'biography',
  },
  {
    title: 'A Mind at Play: How Claude Shannon Invented the Information Age',
    author: 'Jimmy Soni & Rob Goodman',
    category: 'biography',
  },
  // Biographies and Memoirs — Contemporary
  {
    title: 'Lab Girl',
    author: 'Hope Jahren',
    category: 'biography',
  },
  {
    title: 'The Woman Who Smashed Codes',
    author: 'Jason Fagone',
    category: 'biography',
  },
  {
    title: 'Rise of the Rocket Girls: The Women Who Propelled Us',
    author: 'Nathalia Holt',
    category: 'biography',
  },
  {
    title: 'The Only Woman in the Room',
    author: 'Eileen Pollack',
    category: 'biography',
  },
  // Young Readers
  {
    title: 'Women in Science: 50 Fearless Pioneers Who Changed the World',
    author: 'Rachel Ignotofsky',
    category: 'young-readers',
  },
  {
    title: 'Headstrong: 52 Women Who Changed Science\u2014and the World',
    author: 'Rachel Swaby',
    category: 'young-readers',
  },
  {
    title: 'Girls Who Code: Learn to Code and Change the World',
    author: 'Reshma Saujani',
    category: 'young-readers',
  },
  {
    title: 'Rosie Revere, Engineer',
    author: 'Andrea Beaty',
    category: 'young-readers',
  },
  {
    title: 'Ada Twist, Scientist',
    author: 'Andrea Beaty',
    category: 'young-readers',
  },
  {
    title: 'Good Night Stories for Rebel Girls',
    author: 'Elena Favilli & Francesca Cavallo',
    category: 'young-readers',
  },
];

export const podcasts: Podcast[] = [
  // General Women in STEM
  {
    name: 'Science Vs',
    host: 'Wendy Zukerman',
    description: 'Examines science behind controversial topics',
    category: 'general',
  },
  {
    name: 'Radiolab',
    host: 'Lulu Miller',
    description: 'Science storytelling',
    category: 'general',
  },
  {
    name: 'The Love of Science',
    host: 'Hope Jahren',
    description: 'On science and scientists',
    category: 'general',
  },
  {
    name: 'Underrepresented in Tech',
    description: 'Interviews with diverse tech professionals',
    category: 'general',
  },
  {
    name: 'AnitaB.org Podcasts',
    description: 'Various series on women in tech',
    category: 'general',
  },
  // Technology
  {
    name: 'Command Line Heroes',
    host: 'Saron Yitbarek',
    description: 'Tech history',
    category: 'technology',
  },
  {
    name: 'Code Newbie',
    host: 'Saron Yitbarek',
    description: 'Learning to code',
    category: 'technology',
  },
  {
    name: 'Women in Tech Show',
    host: 'Edaena Salinas',
    description: 'Interviewing women in tech',
    category: 'technology',
  },
  {
    name: 'Ladybug Podcast',
    description: 'Women in tech discussing career and technical topics',
    category: 'technology',
  },
  // Science
  {
    name: 'Ologies',
    host: 'Alie Ward',
    description: 'Interviews "-ologists" about their fields',
    category: 'science',
  },
  {
    name: 'Undiscovered',
    description: 'Stories about overlooked scientists (Gimlet Media)',
    category: 'science',
  },
  {
    name: 'Science Friday',
    host: 'Ira Flatow',
    description: 'Latest science news',
    category: 'science',
  },
  // Career Development
  {
    name: 'Lean In Podcast Series',
    description: 'Career advice and leadership for women',
    category: 'career',
  },
  {
    name: 'HBR Women at Work',
    description: 'Harvard Business Review on women\'s careers',
    category: 'career',
  },
  {
    name: 'Work Life with Adam Grant',
    host: 'Adam Grant',
    description: 'Organizational psychology',
    category: 'career',
  },
];

export const documentaries: Documentary[] = [
  // Women in STEM
  {
    title: 'Hidden Figures',
    year: '2016',
    description: 'Feature film about NASA mathematicians',
  },
  {
    title: 'Picture a Scientist',
    year: '2020',
    description: 'Gender bias in science',
  },
  {
    title: 'Code Girl',
    year: '2015',
    description: 'Girls competing in Technovation Challenge',
  },
  {
    title: 'She Started It',
    year: '2016',
    description: 'Women tech entrepreneurs',
  },
  {
    title: 'Bombshell: The Hedy Lamarr Story',
    year: '2017',
    description: 'Actress and inventor',
  },
  // Specific Scientists
  {
    title: 'The Genius of Marie Curie',
    year: '2013',
    description: 'Documentary on Marie Curie\'s life and discoveries',
  },
  {
    title: 'Secret Life of Scientists and Engineers',
    description: 'PBS series profiling scientists and engineers',
  },
  {
    title: 'Secrets of the Surface: The Mathematical Vision of Maryam Mirzakhani',
    year: '2020',
    description: 'Documentary on mathematician Maryam Mirzakhani',
  },
];

export const youtubeChannels: YouTubeChannel[] = [
  {
    name: 'Physics Girl',
    host: 'Dianna Cowern',
    description: 'Physics education and experiments',
  },
  {
    name: 'Vsauce',
    description: 'Various hosts including women scientists',
  },
  {
    name: 'SciShow',
    description: 'Science education with diverse hosts',
  },
  {
    name: 'Crash Course',
    description: 'Educational videos on STEM topics',
  },
  {
    name: 'Women in Tech',
    description: 'Various channels and TED Talks',
  },
];
