export interface Course {
  title: string;
  cost: string;
  url: string;
  field: string;
}

export const courses: Course[] = [
  { title: 'Harvard CS50 — Introduction to Computer Science', cost: 'Free', url: 'https://cs50.harvard.edu/', field: 'Computer Science' },
  { title: 'Stanford Machine Learning — Andrew Ng', cost: 'Free to audit', url: 'https://www.coursera.org/learn/machine-learning', field: 'Computer Science' },
  { title: 'freeCodeCamp — Full Stack Web Development', cost: 'Free', url: 'https://www.freecodecamp.org/', field: 'Computer Science' },
  { title: 'Codecademy — Learn Python', cost: 'Free basic', url: 'https://www.codecademy.com/', field: 'Computer Science' },
  { title: 'MIT OpenCourseWare — Engineering Courses', cost: 'Free', url: 'https://ocw.mit.edu/', field: 'Engineering' },
  { title: 'Coursera — Engineering Project Management', cost: '$49/month', url: 'https://www.coursera.org/', field: 'Engineering' },
  { title: 'edX — Environmental Engineering MicroMasters', cost: 'Free to audit', url: 'https://www.edx.org/', field: 'Engineering' },
  { title: 'Coursera — Genomic Data Science Specialization', cost: '$49/month', url: 'https://www.coursera.org/', field: 'Biotech & Life Sciences' },
  { title: 'edX — Principles of Biochemistry', cost: 'Free to audit', url: 'https://www.edx.org/', field: 'Biotech & Life Sciences' },
  { title: 'Khan Academy — Biology', cost: 'Free', url: 'https://www.khanacademy.org/science/biology', field: 'Biotech & Life Sciences' },
];

export function getCoursesByField(): Map<string, Course[]> {
  const map = new Map<string, Course[]>();
  for (const course of courses) {
    const existing = map.get(course.field) ?? [];
    existing.push(course);
    map.set(course.field, existing);
  }
  return map;
}
