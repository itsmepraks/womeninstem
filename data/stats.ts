export interface Stat {
  value: string;
  label: string;
  rotation: number;
}

export const siteStats: Stat[] = [
  { value: '500+', label: 'curated resources', rotation: -2 },
  { value: '120+', label: 'mentors ready', rotation: 1.2 },
];

export const testimonial = {
  quote:
    'I found my first research position through STEMSpark. The mentorship directory changed everything.',
  author: 'Priya',
  field: 'computational biology',
  rotation: 2.5,
};
