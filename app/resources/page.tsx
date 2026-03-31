import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ResourceCard from '@/components/ui/ResourceCard';
import DarkPanel from '@/components/ui/DarkPanel';
import { scholarships, organizations, conferences } from '@/data/resources';

export default function ResourcesPage() {
  const featuredScholarships = scholarships.slice(0, 5);
  const featuredOrganizations = organizations.slice(0, 6);
  const featuredConferences = conferences.slice(0, 3);

  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          Resources <em className="italic text-accent-primary">that matter</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[500px]">
          Curated by women in the field. Updated weekly. No fluff — just
          opportunities worth your time.
        </p>
      </section>

      {/* Scholarships */}
      <section className="pb-10">
        <SectionHeading title="Scholarships & Funding" accent={`${scholarships.length} opportunities`} />
        <div className="space-y-3">
          {featuredScholarships.map((s) => (
            <ResourceCard
              key={s.id}
              title={s.name}
              description={`${s.amount} — ${s.description}`}
            />
          ))}
        </div>
        <Link
          href="#"
          className="inline-block mt-4 text-sm text-accent-primary font-medium underline underline-offset-4 hover:text-accent-secondary transition-colors"
        >
          View all {scholarships.length} scholarships →
        </Link>
      </section>

      {/* Organizations */}
      <section className="pb-10">
        <SectionHeading
          title="Professional Organizations"
          subtitle="Join a community that supports you"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {featuredOrganizations.map((org) => (
            <div key={org.id} className="card-white p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="w-9 h-9 rounded-[0.625rem] flex items-center justify-center text-sm font-bold text-white bg-accent-primary"
                >
                  {org.initial}
                </div>
                <h3 className="text-base font-semibold text-text-heading">{org.name}</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{org.description}</p>
              {org.members && (
                <span className="inline-block mt-2 text-xs text-text-muted">{org.members} members</span>
              )}
              {org.cost && (
                <span className="inline-block mt-2 ml-2 text-xs text-accent-primary font-medium">{org.cost}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Conferences */}
      <section className="pb-10">
        <SectionHeading
          title="Conferences & Events"
          subtitle="Connect, learn, and grow"
        />
        <DarkPanel className="flex flex-col md:flex-row gap-6">
          {featuredConferences.map((conf, i) => (
            <div
              key={conf.id}
              className={`flex-1 ${
                i < featuredConferences.length - 1
                  ? 'md:border-r md:border-surface-dark-text/[0.06] md:pr-6'
                  : ''
              }`}
            >
              <h3 className="font-display text-lg text-surface-dark-text font-medium mb-2">
                {conf.name}
              </h3>
              <p className="text-sm text-surface-dark-text/60 leading-relaxed mb-3">
                {conf.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {conf.size && (
                  <span className="bg-surface-dark-text/[0.06] text-surface-dark-text/50 px-3.5 py-1 rounded-[0.875rem] text-xs">
                    {conf.size} attendees
                  </span>
                )}
                {conf.timing && (
                  <span className="bg-surface-dark-text/[0.06] text-surface-dark-text/50 px-3.5 py-1 rounded-[0.875rem] text-xs">
                    {conf.timing}
                  </span>
                )}
                {conf.cost && (
                  <span className="bg-surface-dark-text/[0.06] text-surface-dark-text/50 px-3.5 py-1 rounded-[0.875rem] text-xs">
                    {conf.cost}
                  </span>
                )}
              </div>
            </div>
          ))}
        </DarkPanel>
      </section>
    </div>
  );
}
