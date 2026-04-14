export interface Course {
  title: string;
  cost: string;
  url: string;
  field: string;
  region?: 'Global' | 'US' | 'Europe' | 'Asia' | 'Africa' | 'Americas' | 'Oceania';
}

export const courses: Course[] = [
  { title: 'Harvard CS50 — Introduction to Computer Science', cost: 'Free', url: 'https://cs50.harvard.edu/', field: 'Computer Science', region: 'Global' },
  { title: 'Stanford Machine Learning — Andrew Ng', cost: 'Free to audit', url: 'https://www.coursera.org/learn/machine-learning', field: 'Computer Science', region: 'Global' },
  { title: 'freeCodeCamp — Full Stack Web Development', cost: 'Free', url: 'https://www.freecodecamp.org/', field: 'Computer Science', region: 'Global' },
  { title: 'Codecademy — Learn Python', cost: 'Free basic', url: 'https://www.codecademy.com/', field: 'Computer Science', region: 'Global' },
  { title: 'MIT OpenCourseWare — Engineering Courses', cost: 'Free', url: 'https://ocw.mit.edu/', field: 'Engineering', region: 'Global' },
  { title: 'Coursera — Engineering Project Management', cost: '$49/month', url: 'https://www.coursera.org/', field: 'Engineering', region: 'Global' },
  { title: 'edX — Environmental Engineering MicroMasters', cost: 'Free to audit', url: 'https://www.edx.org/', field: 'Engineering', region: 'Global' },
  { title: 'Coursera — Genomic Data Science Specialization', cost: '$49/month', url: 'https://www.coursera.org/', field: 'Biotech & Life Sciences', region: 'Global' },
  { title: 'edX — Principles of Biochemistry', cost: 'Free to audit', url: 'https://www.edx.org/', field: 'Biotech & Life Sciences', region: 'Global' },
  { title: 'Khan Academy — Biology', cost: 'Free', url: 'https://www.khanacademy.org/science/biology', field: 'Biotech & Life Sciences', region: 'Global' },

  // Mathematics
  { title: 'MIT 18.01 — Single Variable Calculus', cost: 'Free', url: 'https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/', field: 'Mathematics', region: 'Global' },
  { title: 'Khan Academy — Linear Algebra', cost: 'Free', url: 'https://www.khanacademy.org/math/linear-algebra', field: 'Mathematics', region: 'Global' },
  { title: '3Blue1Brown — Essence of Linear Algebra', cost: 'Free', url: 'https://www.3blue1brown.com/topics/linear-algebra', field: 'Mathematics', region: 'Global' },

  // Data Science & AI
  { title: 'fast.ai — Practical Deep Learning', cost: 'Free', url: 'https://course.fast.ai/', field: 'Data Science & AI', region: 'Global' },
  { title: 'Kaggle Learn — Intro to Machine Learning', cost: 'Free', url: 'https://www.kaggle.com/learn/intro-to-machine-learning', field: 'Data Science & AI', region: 'Global' },
  { title: 'Google — Machine Learning Crash Course', cost: 'Free', url: 'https://developers.google.com/machine-learning/crash-course', field: 'Data Science & AI', region: 'Global' },
  { title: 'DataCamp — Data Science with Python', cost: '$25/month', url: 'https://www.datacamp.com/', field: 'Data Science & AI', region: 'Global' },

  // Physics
  { title: 'MIT 8.01 — Classical Mechanics', cost: 'Free', url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/', field: 'Physics', region: 'Global' },
  { title: 'Khan Academy — Physics', cost: 'Free', url: 'https://www.khanacademy.org/science/physics', field: 'Physics', region: 'Global' },

  // Environmental Science
  { title: 'Coursera — Climate Change and Health', cost: 'Free to audit', url: 'https://www.coursera.org/learn/climate-change', field: 'Environmental Science', region: 'Global' },
  { title: 'edX — Environmental Science', cost: 'Free to audit', url: 'https://www.edx.org/learn/environmental-science', field: 'Environmental Science', region: 'Global' },

  // Cybersecurity
  { title: 'Cybrary — Introduction to IT and Cybersecurity', cost: 'Free', url: 'https://www.cybrary.it/', field: 'Cybersecurity', region: 'Global' },
  { title: 'TryHackMe — Complete Beginner Path', cost: 'Free tier', url: 'https://tryhackme.com/', field: 'Cybersecurity', region: 'Global' },
  { title: 'SANS Cyber Aces — Free Online Courses', cost: 'Free', url: 'https://www.cyberaces.org/', field: 'Cybersecurity', region: 'Global' },
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
