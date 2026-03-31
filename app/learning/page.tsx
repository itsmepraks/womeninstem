import SectionHeading from '@/components/ui/SectionHeading';
import ResourceCard from '@/components/ui/ResourceCard';
import { scholarships } from '@/data/resources';
import { getPioneerByField } from '@/data/pioneers';

const fields = [
  {
    name: 'Computer Science',
    courses: [
      'Harvard CS50 — Introduction to Computer Science (Free)',
      'Stanford Machine Learning — Andrew Ng (Free)',
      'freeCodeCamp — Full Stack Web Development (Free)',
    ],
  },
  {
    name: 'Engineering',
    courses: [
      'MIT OpenCourseWare — Mechanical Engineering (Free)',
      'Coursera — Engineering Project Management',
      'edX — Environmental Engineering MicroMasters',
    ],
  },
  {
    name: 'Biotech & Life Sciences',
    courses: [
      'Coursera — Genomic Data Science Specialization',
      'edX — Principles of Biochemistry',
      'Khan Academy — Biology (Free)',
    ],
  },
];

export default function LearningPage() {
  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          Learn <em className="italic text-accent-primary">without limits</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[500px]">
          Courses, bootcamps, and scholarships — organized by field, filtered by
          what actually matters to you.
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
                <div key={course} className="card-white p-5 flex items-center justify-between">
                  <span className="text-body text-text-heading font-medium">{course}</span>
                  <span className="text-xs text-accent-primary font-medium cursor-pointer hover:text-accent-secondary transition-colors flex-shrink-0 ml-4">
                    View →
                  </span>
                </div>
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
                </p>
              </div>
            )}
          </section>
        );
      })}

      {/* Scholarships spotlight */}
      <section className="pb-10">
        <SectionHeading title="Scholarships & Funding" accent={`${scholarships.length} opportunities`} />
        <div className="space-y-3">
          {scholarships.slice(0, 3).map((s) => (
            <ResourceCard
              key={s.id}
              title={s.name}
              description={`${s.amount} — ${s.description}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
