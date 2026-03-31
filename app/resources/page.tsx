import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ResourceCard from '@/components/ui/ResourceCard';
import CompanyCard from '@/components/ui/CompanyCard';
import DarkPanel from '@/components/ui/DarkPanel';
import { openScholarships, companiesHiring, communityPicks } from '@/data/resources';

export default function ResourcesPage() {
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

      {/* Open Now */}
      <section className="pb-10">
        <SectionHeading title="Open Now" accent="Deadlines approaching" />
        <div className="space-y-3">
          {openScholarships.map((s) => (
            <ResourceCard
              key={s.id}
              title={s.title}
              description={s.description}
              deadline={s.deadline}
              daysLeft={s.daysLeft}
            />
          ))}
        </div>
        <Link
          href="#"
          className="inline-block mt-4 text-sm text-accent-primary font-medium underline underline-offset-4 hover:text-accent-secondary transition-colors"
        >
          View all 42 open scholarships →
        </Link>
      </section>

      {/* Companies Hiring */}
      <section className="pb-10">
        <SectionHeading
          title="Companies Hiring"
          subtitle="With strong women-in-STEM programs"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {companiesHiring.map((c) => (
            <CompanyCard
              key={c.id}
              name={c.name}
              initial={c.initial}
              color={c.color}
              description={c.description}
            />
          ))}
        </div>
      </section>

      {/* Community Picks */}
      <section className="pb-10">
        <SectionHeading
          title="Community Picks"
          subtitle="Recommended by members"
        />
        <DarkPanel className="flex flex-col md:flex-row gap-6">
          {communityPicks.map((pick, i) => (
            <div
              key={pick.id}
              className={`flex-1 ${
                i < communityPicks.length - 1
                  ? 'md:border-r md:border-surface-dark-text/[0.06] md:pr-6'
                  : ''
              }`}
            >
              <h3 className="font-display text-lg text-surface-dark-text font-medium mb-2">
                {pick.title}
              </h3>
              <p className="text-sm text-surface-dark-text/60 leading-relaxed mb-3">
                {pick.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {pick.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-dark-text/[0.06] text-surface-dark-text/50 px-3.5 py-1 rounded-[0.875rem] text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </DarkPanel>
      </section>
    </div>
  );
}
