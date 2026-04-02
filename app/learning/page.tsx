import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ResourceCard from '@/components/ui/ResourceCard';
import { scholarships, programs } from '@/data/resources';
import { getPioneerByField } from '@/data/pioneers';

const fields = [
  {
    name: 'Computer Science',
    courses: [
      { title: 'Harvard CS50 — Introduction to Computer Science', cost: 'Free', url: 'https://cs50.harvard.edu/' },
      { title: 'Stanford Machine Learning — Andrew Ng', cost: 'Free to audit', url: 'https://www.coursera.org/learn/machine-learning' },
      { title: 'freeCodeCamp — Full Stack Web Development', cost: 'Free', url: 'https://www.freecodecamp.org/' },
      { title: 'Codecademy — Learn Python', cost: 'Free basic', url: 'https://www.codecademy.com/' },
    ],
  },
  {
    name: 'Engineering',
    courses: [
      { title: 'MIT OpenCourseWare — Engineering Courses', cost: 'Free', url: 'https://ocw.mit.edu/' },
      { title: 'Coursera — Engineering Project Management', cost: '$49/month', url: 'https://www.coursera.org/' },
      { title: 'edX — Environmental Engineering MicroMasters', cost: 'Free to audit', url: 'https://www.edx.org/' },
    ],
  },
  {
    name: 'Biotech & Life Sciences',
    courses: [
      { title: 'Coursera — Genomic Data Science Specialization', cost: '$49/month', url: 'https://www.coursera.org/' },
      { title: 'edX — Principles of Biochemistry', cost: 'Free to audit', url: 'https://www.edx.org/' },
      { title: 'Khan Academy — Biology', cost: 'Free', url: 'https://www.khanacademy.org/science/biology' },
    ],
  },
];

export default function LearningPage() {
  // Get bootcamp programs to feature
  const bootcamps = programs.filter((p) => p.category === 'bootcamp').slice(0, 3);

  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          Learn <em className="italic text-accent-primary">for free (mostly)</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[500px]">
          Online courses and bootcamps, sorted by field. Every link goes to the real thing.
        </p>
      </section>

      {/* Courses by field */}
      {fields.map((field) => {
        const pioneer = getPioneerByField(field.name);
        return (
          <section key={field.name} className="pb-10">
            <SectionHeading title={field.name} />
            <div className="space-y-2.5">
              {field.courses.map((course) => (
                <a
                  key={course.title}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-white p-5 flex items-center justify-between group hover:shadow-card-hover transition-shadow block"
                >
                  <div>
                    <span className="text-body text-text-heading font-medium">{course.title}</span>
                    <span className="text-xs text-text-muted ml-2">({course.cost})</span>
                  </div>
                  <span className="text-xs text-accent-primary font-medium group-hover:text-accent-secondary transition-colors flex-shrink-0 ml-4">
                    Start learning →
                  </span>
                </a>
              ))}
            </div>
            {/* Contextual pioneer callout */}
            {pioneer && (
              <div className="mt-4 p-5 bg-accent-gold/[0.04] rounded-organic border border-accent-gold/[0.08]">
                <p className="text-label text-accent-primary mb-1.5">
                  Pioneer of {field.name}
                </p>
                <p className="text-sm text-text-body">
                  <strong className="text-text-heading">{pioneer.name}</strong>{' '}
                  — {pioneer.title}
                  {pioneer.link && (
                    <a href={pioneer.link} target="_blank" rel="noopener noreferrer" className="text-accent-primary ml-1 hover:text-accent-secondary transition-colors">↗</a>
                  )}
                </p>
              </div>
            )}
          </section>
        );
      })}

      {/* Bootcamps */}
      {bootcamps.length > 0 && (
        <section className="pb-10">
          <SectionHeading title="Coding Bootcamps" accent="Intensive, for career switchers" />
          <div className="space-y-2.5">
            {bootcamps.map((b) => (
              <a
                key={b.id}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-white p-5 flex items-center justify-between group hover:shadow-card-hover transition-shadow block"
              >
                <div>
                  <span className="text-body text-text-heading font-medium">{b.name}</span>
                  <span className="text-xs text-text-muted ml-2">({b.cost})</span>
                  <p className="text-xs text-text-secondary mt-1">{b.description}</p>
                </div>
                <span className="text-xs text-accent-primary font-medium group-hover:text-accent-secondary transition-colors flex-shrink-0 ml-4">
                  Apply →
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Scholarships */}
      <section className="pb-10">
        <SectionHeading title="Scholarships & Funding" accent={`${scholarships.length} opportunities`} />
        <div className="space-y-3">
          {scholarships.slice(0, 5).map((s) => (
            <ResourceCard
              key={s.id}
              title={s.name}
              description={s.description}
              amount={s.amount}
              url={s.url}
            />
          ))}
        </div>
        <Link
          href="/resources#scholarships"
          className="inline-block mt-4 text-sm text-accent-primary font-medium underline underline-offset-4 hover:text-accent-secondary transition-colors"
        >
          View all {scholarships.length} scholarships →
        </Link>
      </section>
    </div>
  );
}
