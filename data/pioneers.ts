export interface Pioneer {
  id: string;
  name: string;
  initial: string;
  title: string;
  description: string;
  field: string;
  link?: string;
}

export const pioneers: Pioneer[] = [
  {
    id: 'marie-curie',
    name: 'Marie Curie',
    initial: 'M',
    title: 'First woman to win a Nobel Prize',
    description:
      'Discovered radioactivity. Proved that brilliance has no gender — then won a second Nobel just to make sure everyone understood.',
    field: 'Physics & Chemistry',
  },
  {
    id: 'grace-hopper',
    name: 'Grace Hopper',
    initial: 'G',
    title: 'Pioneer of computer programming',
    description:
      'Invented the first compiler and popularized the idea of machine-independent programming languages. "The most dangerous phrase in the language is: we\'ve always done it this way."',
    field: 'Computer Science',
  },
  {
    id: 'chien-shiung-wu',
    name: 'Chien-Shiung Wu',
    initial: 'C',
    title: 'The First Lady of Physics',
    description:
      'Disproved the law of conservation of parity — an experiment so elegant it won the Nobel Prize, though only her male colleagues received it.',
    field: 'Physics',
  },
  {
    id: 'katherine-johnson',
    name: 'Katherine Johnson',
    initial: 'K',
    title: 'NASA mathematician who sent humans to the moon',
    description:
      'Her orbital trajectory calculations were so trusted that John Glenn refused to fly until she personally verified the computer\'s numbers.',
    field: 'Mathematics & Aerospace',
  },
  {
    id: 'rosalind-franklin',
    name: 'Rosalind Franklin',
    initial: 'R',
    title: 'Revealed the structure of DNA',
    description:
      'Her X-ray crystallography work produced Photo 51 — the image that unlocked the double helix. Recognition came decades after her death.',
    field: 'Chemistry & Biology',
  },
  {
    id: 'ada-lovelace',
    name: 'Ada Lovelace',
    initial: 'A',
    title: 'The world\'s first computer programmer',
    description:
      'Wrote the first algorithm intended to be processed by a machine, a full century before modern computers existed.',
    field: 'Computer Science & Mathematics',
  },
];

export function getRandomPioneer(): Pioneer {
  return pioneers[Math.floor(Math.random() * pioneers.length)];
}

export function getPioneerByField(field: string): Pioneer | undefined {
  return pioneers.find((p) => p.field.toLowerCase().includes(field.toLowerCase()));
}
