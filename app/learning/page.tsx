import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import PageTransition from '@/components/ui/PageTransition';
import Feedback from '@/components/ui/Feedback';
import ResourceCard from '@/components/ui/ResourceCard';
import TrustBadges from '@/components/ui/TrustBadges';
import { pageMetadata } from '@/lib/seo';
import { scholarships, programs } from '@/data/resources';
import { getCoursesByField } from '@/data/courses';
import { getFreshness } from '@/lib/freshness';
import { inferCostTag, slugifyResourceId } from '@/lib/resourceMetadata';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Free STEM Courses and Bootcamps | stem·spark',
    description:
      'Browse free online courses, coding bootcamps, scholarships, and learning programs for women in STEM, grouped by field and career stage.',
    path: '/learning',
  }),
};

export default function LearningPage() {
  const bootcamps = programs.filter((p) => p.category === 'bootcamp').slice(0, 3);
  const coursesByField = getCoursesByField();

  return (
    <PageTransition>
      <div className="mx-auto max-w-[880px] px-6 md:px-10">
        {/* Hero */}
        <section className="pb-10 pt-12 md:pt-20">
          <h1 className="font-display text-[2.75rem] font-light leading-tight text-text-heading">
            Learn <em className="italic text-accent-primary">for free</em>
          </h1>
          <p className="mt-3 max-w-[500px] text-body-lg text-text-body">
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
                    className="card-white group flex items-center justify-between p-5 transition-shadow hover:shadow-card-hover"
                  >
                    <div className="min-w-0 pr-3">
                      <span className="text-body font-medium text-text-heading">
                        {course.title}
                      </span>
                      <span className="ml-2 text-xs text-text-muted">({course.cost})</span>
                      <TrustBadges
                        freshness={getFreshness(`course:${slugifyResourceId(course.title)}`)}
                        qualityInput={{
                          id: `course:${slugifyResourceId(course.title)}`,
                          url: course.url,
                          cost: course.cost,
                          region: course.region,
                          metadata: {
                            id: `course:${slugifyResourceId(course.title)}`,
                            audience: ['all'],
                            fields: ['general-stem'],
                            regions: course.region ? [course.region] : undefined,
                            resourceTypes: ['course'],
                            cost: inferCostTag(course.cost),
                            deadlineType: 'rolling',
                            identityFocus: ['women-in-stem'],
                          },
                        }}
                        className="mt-2"
                      />
                    </div>
                    <span className="ml-4 flex-shrink-0 text-xs font-medium text-accent-primary transition-colors group-hover:text-accent-secondary">
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
                  className="card-white group flex items-center justify-between p-5 transition-shadow hover:shadow-card-hover"
                >
                  <div className="min-w-0 pr-3">
                    <span className="text-body font-medium text-text-heading">{b.name}</span>
                    <span className="ml-2 text-xs text-text-muted">({b.cost})</span>
                    <p className="mt-1 text-xs text-text-secondary">{b.description}</p>
                    <TrustBadges
                      freshness={getFreshness(`program:${b.id}`)}
                      qualityInput={{
                        id: `program:${b.id}`,
                        url: b.url,
                        description: b.description,
                        cost: b.cost,
                        region: b.region,
                        metadata: {
                          id: `program:${b.id}`,
                          audience: ['career-switcher'],
                          fields: ['general-stem'],
                          regions: b.region ? [b.region] : undefined,
                          resourceTypes: ['program'],
                          cost: inferCostTag(b.cost),
                          deadlineType: 'rolling',
                          identityFocus: ['women-in-stem'],
                        },
                      }}
                      className="mt-2"
                    />
                  </div>
                  <span className="ml-4 flex-shrink-0 text-xs font-medium text-accent-primary transition-colors group-hover:text-accent-secondary">
                    Apply →
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Scholarships */}
        <section className="pb-10">
          <SectionHeading
            title="Scholarships & Funding"
            accent={`${scholarships.length} opportunities`}
          />
          <div className="space-y-3">
            {scholarships.slice(0, 5).map((s) => (
              <ResourceCard
                key={s.id}
                title={s.name}
                description={s.description}
                amount={s.amount}
                url={s.url}
                bookmark={{ key: `scholarship:${s.id}`, type: 'scholarship' }}
                freshness={getFreshness(`scholarship:${s.id}`)}
                metadata={{
                  id: `scholarship:${s.id}`,
                  audience: [s.level],
                  fields: ['general-stem'],
                  regions: s.region ? [s.region] : undefined,
                  resourceTypes: ['scholarship'],
                  cost: 'free',
                  deadlineType: s.nextDeadline ? 'fixed' : 'unknown',
                  identityFocus: ['women-in-stem'],
                }}
                region={s.region}
              />
            ))}
          </div>
          <Link
            href="/resources#scholarships"
            className="mt-4 inline-block text-sm font-medium text-accent-primary underline underline-offset-4 transition-colors hover:text-accent-secondary"
          >
            View all {scholarships.length} scholarships →
          </Link>
        </section>

        <Feedback />
      </div>
    </PageTransition>
  );
}
