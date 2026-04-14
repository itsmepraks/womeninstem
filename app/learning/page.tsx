import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import PageTransition from '@/components/ui/PageTransition';
import Feedback from '@/components/ui/Feedback';

export const metadata: Metadata = {
  title: 'Learning · stem·spark',
  description: 'Free courses and bootcamps for women in STEM, sorted by field.',
};
import ResourceCard from '@/components/ui/ResourceCard';
import { scholarships, programs } from '@/data/resources';
import { getCoursesByField } from '@/data/courses';

export default function LearningPage() {
  // Get bootcamp programs to feature
  const bootcamps = programs.filter((p) => p.category === 'bootcamp').slice(0, 3);
  const coursesByField = getCoursesByField();

  return (
    <PageTransition>
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          Learn <em className="italic text-accent-primary">for free</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[500px]">
          Online courses and bootcamps, sorted by field.
        </p>
      </section>

      {/* Courses by field */}
      {Array.from(coursesByField.entries()).map(([fieldName, fieldCourses]) => {
        return (
          <section key={fieldName} className="pb-10">
            <SectionHeading title={fieldName} />
            <div className="space-y-2.5">
              {fieldCourses.map((course) => (
                <a
                  key={course.title}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-white p-5 flex items-center justify-between group hover:shadow-card-hover transition-shadow"
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
                className="card-white p-5 flex items-center justify-between group hover:shadow-card-hover transition-shadow"
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

      <Feedback />
    </div>
    </PageTransition>
  );
}
