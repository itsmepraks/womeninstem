'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ResourceCard from '@/components/ui/ResourceCard';
import CompanyCard from '@/components/ui/CompanyCard';
import LinkCard from '@/components/ui/LinkCard';
import TrustBadges from '@/components/ui/TrustBadges';
import LiveFeed from '@/components/ui/LiveFeed';
import PageTransition from '@/components/ui/PageTransition';
import Feedback from '@/components/ui/Feedback';
import {
  scholarships,
  organizations,
  conferences,
  programs,
  mentorshipPlatforms,
  jobBoards,
} from '@/data/resources';
import { communities } from '@/data/communities';
import { getNextAnnualOccurrence, formatDeadlineDisplay } from '@/lib/dateHelpers';
import { getFreshness } from '@/lib/freshness';
import { inferCostTag } from '@/lib/resourceMetadata';
import type { Region } from '@/types/region';
import type { ResourceMetadata, ResourceTypeTag } from '@/types/freshness';

type Category =
  | 'all'
  | 'scholarships'
  | 'organizations'
  | 'programs'
  | 'conferences'
  | 'mentorship'
  | 'jobs'
  | 'communities';
type CostFilter = 'all' | 'free' | 'paid';
type RegionFilter = 'all' | Region;

const CATEGORIES: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'scholarships', label: 'Scholarships' },
  { value: 'organizations', label: 'Organizations' },
  { value: 'programs', label: 'Programs' },
  { value: 'conferences', label: 'Conferences' },
  { value: 'mentorship', label: 'Mentorship' },
  { value: 'jobs', label: 'Jobs' },
  { value: 'communities', label: 'Communities' },
];

const COST_OPTIONS: { value: CostFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'free', label: 'Free' },
  { value: 'paid', label: 'Paid' },
];

const REGIONS: { value: RegionFilter; label: string }[] = [
  { value: 'all', label: 'All regions' },
  { value: 'Global', label: 'Global' },
  { value: 'US', label: 'United States' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Oceania', label: 'Oceania' },
];

function isFree(cost: string | undefined): boolean {
  if (!cost) return false;
  return cost.toLowerCase().includes('free');
}

function matchesSearch(query: string, ...fields: (string | undefined)[]): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  return fields.some((f) => f?.toLowerCase().includes(q));
}

function matchesCost(costFilter: CostFilter, cost: string | undefined): boolean {
  if (costFilter === 'all') return true;
  if (costFilter === 'free') return isFree(cost);
  return !isFree(cost);
}

function matchesRegion(activeRegion: string, itemRegion?: string): boolean {
  if (activeRegion === 'all') return true;
  if (!itemRegion) return true; // Show items without region under all filters
  return itemRegion === activeRegion;
}

function freshnessId(type: ResourceTypeTag, id: string): string {
  return `${type}:${id}`;
}

function buildMetadata({
  id,
  type,
  cost,
  region,
  audience = ['all'],
  deadlineType = 'unknown',
}: {
  id: string;
  type: ResourceTypeTag;
  cost?: string;
  region?: string;
  audience?: ResourceMetadata['audience'];
  deadlineType?: ResourceMetadata['deadlineType'];
}): ResourceMetadata {
  return {
    id,
    audience,
    fields: ['general-stem'],
    regions: region ? [region] : undefined,
    resourceTypes: [type],
    cost: inferCostTag(cost),
    deadlineType,
    identityFocus: ['women-in-stem'],
  };
}

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [activeCost, setActiveCost] = useState<CostFilter>('all');
  const [activeRegion, setActiveRegion] = useState<RegionFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  function toggle(key: string) {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const PREVIEW = 6;

  function ShowMoreButton({ sectionKey, total }: { sectionKey: string; total: number }) {
    if (total <= PREVIEW) return null;
    return (
      <button
        onClick={() => toggle(sectionKey)}
        className="mt-3 text-sm font-medium text-accent-primary underline underline-offset-4 transition-colors hover:text-accent-secondary"
      >
        {expanded[sectionKey] ? 'Show less' : `Show all ${total}`}
      </button>
    );
  }

  function sliced<T>(arr: T[], key: string): T[] {
    return expanded[key] ? arr : arr.slice(0, PREVIEW);
  }

  const showSection = (section: Category) => activeCategory === 'all' || activeCategory === section;

  const filteredScholarships = useMemo(() => {
    // Scholarships are inherently free — any "paid" cost filter hides them entirely.
    return scholarships.filter((s) => {
      if (!matchesSearch(searchQuery, s.name, s.description)) return false;
      if (activeCost === 'paid') return false;
      if (!matchesRegion(activeRegion, s.region)) return false;
      return true;
    });
  }, [searchQuery, activeCost, activeRegion]);

  const undergradScholarships = useMemo(
    () => filteredScholarships.filter((s) => s.level === 'undergraduate'),
    [filteredScholarships]
  );
  const gradScholarships = useMemo(
    () => filteredScholarships.filter((s) => s.level === 'graduate'),
    [filteredScholarships]
  );
  const postdocScholarships = useMemo(
    () => filteredScholarships.filter((s) => s.level === 'postdoctoral' || s.level === 'all'),
    [filteredScholarships]
  );

  const filteredOrganizations = useMemo(
    () =>
      organizations.filter(
        (o) =>
          matchesSearch(searchQuery, o.name, o.description) &&
          matchesCost(activeCost, o.cost) &&
          matchesRegion(activeRegion, o.region)
      ),
    [searchQuery, activeCost, activeRegion]
  );

  const filteredPrograms = useMemo(
    () =>
      programs.filter(
        (p) =>
          matchesSearch(searchQuery, p.name, p.description) &&
          matchesCost(activeCost, p.cost) &&
          matchesRegion(activeRegion, p.region)
      ),
    [searchQuery, activeCost, activeRegion]
  );

  const k12Programs = useMemo(
    () => filteredPrograms.filter((p) => p.category === 'k12'),
    [filteredPrograms]
  );
  const bootcampPrograms = useMemo(
    () => filteredPrograms.filter((p) => p.category === 'bootcamp'),
    [filteredPrograms]
  );
  const onlinePrograms = useMemo(
    () => filteredPrograms.filter((p) => p.category === 'online'),
    [filteredPrograms]
  );

  const filteredConferences = useMemo(
    () =>
      conferences.filter(
        (c) =>
          matchesSearch(searchQuery, c.name, c.description) &&
          matchesCost(activeCost, c.cost) &&
          matchesRegion(activeRegion, c.region)
      ),
    [searchQuery, activeCost, activeRegion]
  );

  const filteredMentorship = useMemo(
    () =>
      mentorshipPlatforms.filter(
        (m) =>
          matchesSearch(searchQuery, m.name, m.description) &&
          matchesCost(activeCost, m.cost) &&
          matchesRegion(activeRegion, m.region)
      ),
    [searchQuery, activeCost, activeRegion]
  );

  const filteredJobBoards = useMemo(
    () =>
      jobBoards.filter(
        (b) =>
          matchesSearch(searchQuery, b.name, b.description) &&
          matchesCost(activeCost, b.cost) &&
          matchesRegion(activeRegion, b.region)
      ),
    [searchQuery, activeCost, activeRegion]
  );

  const filteredCommunities = useMemo(
    () =>
      communities.filter(
        (c) =>
          matchesSearch(searchQuery, c.name, c.description) && matchesRegion(activeRegion, c.region)
      ),
    [searchQuery, activeRegion]
  );

  const closingSoonScholarships = useMemo(() => {
    return scholarships
      .filter((s) => s.nextDeadline)
      .map((s) => ({ s, info: formatDeadlineDisplay(s.nextDeadline!) }))
      .filter(({ info }) => !info.isExpired)
      .sort((a, b) => a.info.daysLeft - b.info.daysLeft)
      .slice(0, 5);
  }, []);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const sortedConferences = useMemo(() => {
    return [...filteredConferences]
      .map((c) => ({
        conf: c,
        occurrence: c.month ? getNextAnnualOccurrence(c.month, c.monthEnd) : null,
      }))
      .sort((a, b) => {
        if (a.occurrence && b.occurrence)
          return a.occurrence.date.getTime() - b.occurrence.date.getTime();
        if (a.occurrence) return -1;
        if (b.occurrence) return 1;
        return 0;
      });
  }, [filteredConferences]);

  return (
    <PageTransition>
      <div className="mx-auto max-w-[880px] px-6 md:px-10">
        {/* Hero */}
        <section className="pb-10 pt-12 md:pt-20">
          <h1 className="font-display text-[2.75rem] font-light leading-tight text-text-heading">
            Resources <em className="italic text-accent-primary">that matter</em>
          </h1>
          <p className="mt-3 max-w-[500px] text-body-lg text-text-body">
            Every link is real. Click through to verify before you apply.
          </p>
        </section>

        <section className="sticky top-0 z-30 -mx-6 mb-8 border-b border-accent-primary/5 bg-bg-primary/90 px-6 py-4 backdrop-blur-md md:-mx-10 md:px-10">
          {/* Search */}
          <label htmlFor="resources-search-input" className="sr-only">
            Search resources
          </label>
          <input
            id="resources-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search resources..."
            aria-label="Search resources"
            className="mb-3 w-full rounded-pill border border-accent-secondary/20 bg-white px-4 py-2.5 text-sm text-text-body transition-colors placeholder:text-text-muted focus:border-accent-primary/40 focus:outline-none focus:ring-1 focus:ring-accent-primary/20"
          />

          {/* Category pills */}
          <div role="group" aria-label="Filter by category" className="mb-2 flex flex-wrap gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`rounded-pill px-3.5 py-1.5 text-xs [transition:background-color_0.2s,color_0.2s,transform_0.15s] focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 active:scale-[0.96] ${
                  activeCategory === cat.value
                    ? 'bg-accent-secondary/10 font-medium text-accent-primary'
                    : 'bg-transparent text-text-muted hover:bg-accent-secondary/5 hover:text-text-body'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cost + Region on one line */}
          <div className="flex flex-wrap items-center gap-1.5">
            <div role="group" aria-label="Filter by cost" className="flex gap-1.5">
              {COST_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setActiveCost(opt.value)}
                  className={`rounded-pill px-3 py-1 text-xs [transition:background-color_0.2s,color_0.2s,transform_0.15s] focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 active:scale-[0.96] ${
                    activeCost === opt.value
                      ? 'bg-accent-secondary/10 font-medium text-accent-primary'
                      : 'bg-transparent text-text-muted hover:bg-accent-secondary/5 hover:text-text-body'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <span className="mx-1 text-text-muted/30">|</span>
            <div role="group" aria-label="Filter by region" className="flex flex-wrap gap-1.5">
              {REGIONS.map((reg) => (
                <button
                  key={reg.value}
                  onClick={() => setActiveRegion(reg.value)}
                  className={`rounded-pill px-3 py-1 text-xs [transition:background-color_0.2s,color_0.2s,transform_0.15s] focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 active:scale-[0.96] ${
                    activeRegion === reg.value
                      ? 'bg-accent-secondary/10 font-medium text-accent-primary'
                      : 'bg-transparent text-text-muted hover:bg-accent-secondary/5 hover:text-text-body'
                  }`}
                >
                  {reg.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <motion.div variants={stagger} initial="hidden" animate="show">
          {/* CLOSING SOON — only show when All categories selected */}
          {activeCategory === 'all' && closingSoonScholarships.length > 0 && (
            <motion.section variants={fadeUp} className="pb-10">
              <SectionHeading title="Closing soon" accent="Apply before they expire" />
              <div className="space-y-2.5">
                {closingSoonScholarships.map(({ s, info }) => (
                  <ResourceCard
                    key={s.id}
                    title={s.name}
                    description={s.description}
                    amount={s.amount}
                    url={s.url}
                    daysLeft={info.daysLeft}
                    deadlineLabel={info.label}
                    bookmark={{ key: `scholarship:${s.id}`, type: 'scholarship' }}
                    freshness={getFreshness(freshnessId('scholarship', s.id))}
                    metadata={buildMetadata({
                      id: freshnessId('scholarship', s.id),
                      type: 'scholarship',
                      cost: 'Free',
                      region: s.region,
                      audience: [s.level],
                      deadlineType: s.nextDeadline ? 'fixed' : 'unknown',
                    })}
                    region={s.region}
                  />
                ))}
              </div>
            </motion.section>
          )}

          {activeCategory === 'all' && (
            <motion.section variants={fadeUp} id="live" className="pb-10">
              <SectionHeading
                title="Live Feeds"
                accent="From public sources. Refreshed throughout the day."
              />
              <div className="space-y-6">
                <LiveFeed
                  endpoint="/api/resources/jobs"
                  title="Jobs & Internships"
                  limit={5}
                  regionFilter={activeRegion}
                />
                <LiveFeed
                  endpoint="/api/resources/events"
                  title="Events"
                  limit={5}
                  regionFilter={activeRegion}
                />
                <LiveFeed
                  endpoint="/api/resources/hackathons"
                  title="Hackathons"
                  limit={5}
                  regionFilter={activeRegion}
                />
                <LiveFeed
                  endpoint="/api/resources/grants"
                  title="Grants"
                  limit={5}
                  regionFilter={activeRegion}
                />
              </div>
            </motion.section>
          )}

          {showSection('scholarships') && filteredScholarships.length > 0 && (
            <motion.section variants={fadeUp} id="scholarships" className="pb-12">
              <SectionHeading
                title="Scholarships & Funding"
                accent={`${filteredScholarships.length} opportunities`}
              />

              {undergradScholarships.length > 0 && (
                <div className="mb-8">
                  <h3 className="mb-3 text-label text-accent-primary">Undergraduate</h3>
                  <div className="space-y-2.5">
                    {sliced(undergradScholarships, 'scholarships-undergrad').map((s) => {
                      const dl = s.nextDeadline ? formatDeadlineDisplay(s.nextDeadline) : null;
                      return (
                        <ResourceCard
                          key={s.id}
                          title={s.name}
                          description={s.description}
                          amount={s.amount}
                          url={s.url}
                          daysLeft={dl?.daysLeft}
                          deadlineLabel={dl?.label}
                          bookmark={{ key: `scholarship:${s.id}`, type: 'scholarship' }}
                          freshness={getFreshness(freshnessId('scholarship', s.id))}
                          metadata={buildMetadata({
                            id: freshnessId('scholarship', s.id),
                            type: 'scholarship',
                            cost: 'Free',
                            region: s.region,
                            audience: [s.level],
                            deadlineType: s.nextDeadline ? 'fixed' : 'unknown',
                          })}
                          region={s.region}
                        />
                      );
                    })}
                  </div>
                  <ShowMoreButton
                    sectionKey="scholarships-undergrad"
                    total={undergradScholarships.length}
                  />
                </div>
              )}

              {gradScholarships.length > 0 && (
                <div className="mb-8">
                  <h3 className="mb-3 text-label text-accent-primary">Graduate & Fellowship</h3>
                  <div className="space-y-2.5">
                    {sliced(gradScholarships, 'scholarships-grad').map((s) => {
                      const dl = s.nextDeadline ? formatDeadlineDisplay(s.nextDeadline) : null;
                      return (
                        <ResourceCard
                          key={s.id}
                          title={s.name}
                          description={s.description}
                          amount={s.amount}
                          url={s.url}
                          daysLeft={dl?.daysLeft}
                          deadlineLabel={dl?.label}
                          bookmark={{ key: `scholarship:${s.id}`, type: 'scholarship' }}
                          freshness={getFreshness(freshnessId('scholarship', s.id))}
                          metadata={buildMetadata({
                            id: freshnessId('scholarship', s.id),
                            type: 'scholarship',
                            cost: 'Free',
                            region: s.region,
                            audience: [s.level],
                            deadlineType: s.nextDeadline ? 'fixed' : 'unknown',
                          })}
                          region={s.region}
                        />
                      );
                    })}
                  </div>
                  <ShowMoreButton sectionKey="scholarships-grad" total={gradScholarships.length} />
                </div>
              )}

              {postdocScholarships.length > 0 && (
                <div>
                  <h3 className="mb-3 text-label text-accent-primary">
                    Postdoctoral & Research Grants
                  </h3>
                  <div className="space-y-2.5">
                    {sliced(postdocScholarships, 'scholarships-postdoc').map((s) => {
                      const dl = s.nextDeadline ? formatDeadlineDisplay(s.nextDeadline) : null;
                      return (
                        <ResourceCard
                          key={s.id}
                          title={s.name}
                          description={s.description}
                          amount={s.amount}
                          url={s.url}
                          daysLeft={dl?.daysLeft}
                          deadlineLabel={dl?.label}
                          bookmark={{ key: `scholarship:${s.id}`, type: 'scholarship' }}
                          freshness={getFreshness(freshnessId('scholarship', s.id))}
                          metadata={buildMetadata({
                            id: freshnessId('scholarship', s.id),
                            type: 'scholarship',
                            cost: 'Free',
                            region: s.region,
                            audience: [s.level],
                            deadlineType: s.nextDeadline ? 'fixed' : 'unknown',
                          })}
                          region={s.region}
                        />
                      );
                    })}
                  </div>
                  <ShowMoreButton
                    sectionKey="scholarships-postdoc"
                    total={postdocScholarships.length}
                  />
                </div>
              )}
            </motion.section>
          )}

          {showSection('organizations') && filteredOrganizations.length > 0 && (
            <motion.section variants={fadeUp} id="organizations" className="pb-12">
              <SectionHeading
                title="Organizations"
                accent={`${filteredOrganizations.length} listed`}
              />
              <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
                {sliced(filteredOrganizations, 'organizations').map((org) => (
                  <CompanyCard
                    key={org.id}
                    name={org.name}
                    initial={org.initial}
                    description={org.description}
                    members={org.members}
                    cost={org.cost}
                    url={org.url}
                    freshness={getFreshness(freshnessId('organization', org.id))}
                    metadata={buildMetadata({
                      id: freshnessId('organization', org.id),
                      type: 'organization',
                      cost: org.cost,
                      region: org.region,
                      audience: ['all'],
                    })}
                    region={org.region}
                  />
                ))}
              </div>
              <ShowMoreButton sectionKey="organizations" total={filteredOrganizations.length} />
            </motion.section>
          )}

          {showSection('programs') && filteredPrograms.length > 0 && (
            <motion.section variants={fadeUp} id="programs" className="pb-12">
              <SectionHeading
                title="Educational Programs"
                accent={`${filteredPrograms.length} listed`}
              />

              {[
                {
                  key: 'k12',
                  label: 'K-12 & Youth',
                  programs: k12Programs,
                  cta: 'Learn more \u2192',
                },
                {
                  key: 'bootcamp',
                  label: 'Coding Bootcamps',
                  programs: bootcampPrograms,
                  cta: 'Apply \u2192',
                },
                {
                  key: 'online',
                  label: 'Online Learning Platforms',
                  programs: onlinePrograms,
                  cta: 'Start learning \u2192',
                },
              ].map(
                (section, idx) =>
                  section.programs.length > 0 && (
                    <div key={section.key} className={idx < 2 ? 'mb-8' : undefined}>
                      <h3 className="mb-3 text-label text-accent-primary">{section.label}</h3>
                      <div className="space-y-2.5">
                        {sliced(section.programs, `programs-${section.key}`).map((p) => (
                          <a
                            key={p.id}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-white group flex items-center justify-between p-6 transition-shadow hover:shadow-card-hover md:p-5"
                          >
                            <div className="min-w-0 pr-3">
                              <span className="text-body font-medium text-text-heading">
                                {p.name}
                              </span>
                              <span className="ml-2 text-xs text-text-muted">({p.cost})</span>
                              <p className="mt-1 text-xs text-text-secondary">{p.description}</p>
                              <TrustBadges
                                freshness={getFreshness(freshnessId('program', p.id))}
                                qualityInput={{
                                  id: freshnessId('program', p.id),
                                  url: p.url,
                                  description: p.description,
                                  cost: p.cost,
                                  region: p.region,
                                  metadata: buildMetadata({
                                    id: freshnessId('program', p.id),
                                    type: 'program',
                                    cost: p.cost,
                                    region: p.region,
                                    audience:
                                      p.category === 'bootcamp' ? ['career-switcher'] : ['all'],
                                  }),
                                }}
                                className="mt-2"
                              />
                            </div>
                            <span className="ml-4 flex-shrink-0 text-xs font-medium text-accent-primary transition-colors group-hover:text-accent-secondary">
                              {section.cta}
                            </span>
                          </a>
                        ))}
                      </div>
                      <ShowMoreButton
                        sectionKey={`programs-${section.key}`}
                        total={section.programs.length}
                      />
                    </div>
                  )
              )}
            </motion.section>
          )}

          {showSection('conferences') && filteredConferences.length > 0 && (
            <motion.section variants={fadeUp} id="conferences" className="pb-12">
              <SectionHeading
                title="Conferences & Events"
                accent={`${filteredConferences.length} listed`}
              />
              <div className="space-y-2.5">
                {sliced(sortedConferences, 'conferences').map(({ conf, occurrence }) => (
                  <LinkCard
                    key={conf.id}
                    url={conf.url}
                    className="flex items-center justify-between p-6 md:p-5"
                  >
                    <div className="min-w-0 pr-3">
                      <h3 className="text-body font-medium text-text-heading">{conf.name}</h3>
                      <p className="mt-1 text-xs text-text-muted">{conf.description}</p>
                      <TrustBadges
                        freshness={getFreshness(freshnessId('conference', conf.id))}
                        qualityInput={{
                          id: freshnessId('conference', conf.id),
                          url: conf.url,
                          description: conf.description,
                          cost: conf.cost,
                          region: conf.region,
                          deadline: occurrence?.display ?? conf.timing,
                          metadata: buildMetadata({
                            id: freshnessId('conference', conf.id),
                            type: 'conference',
                            cost: conf.cost,
                            region: conf.region,
                            audience: ['professional'],
                            deadlineType: conf.month ? 'annual' : 'unknown',
                          }),
                        }}
                        className="mt-2"
                      />
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-2">
                      {conf.size && (
                        <span className="rounded-pill bg-accent-gold/10 px-3 py-1 text-xs text-text-muted">
                          {conf.size}
                        </span>
                      )}
                      {(occurrence || conf.timing) && (
                        <span className="text-xs text-text-muted">
                          {occurrence ? occurrence.display : conf.timing}
                        </span>
                      )}
                      {conf.url && (
                        <span className="text-xs font-medium text-accent-primary transition-colors group-hover:text-accent-secondary">
                          Register →
                        </span>
                      )}
                    </div>
                  </LinkCard>
                ))}
              </div>
              <ShowMoreButton sectionKey="conferences" total={sortedConferences.length} />
            </motion.section>
          )}

          {showSection('mentorship') && filteredMentorship.length > 0 && (
            <motion.section variants={fadeUp} id="mentorship" className="pb-12">
              <SectionHeading title="Mentorship Platforms" accent="External platforms" />
              <div className="space-y-2.5">
                {sliced(filteredMentorship, 'mentorship').map((platform) => (
                  <LinkCard
                    key={platform.id}
                    url={platform.url}
                    className="flex items-center justify-between p-6 md:p-5"
                  >
                    <div className="min-w-0 pr-3">
                      <h3 className="text-body font-medium text-text-heading">{platform.name}</h3>
                      <p className="mt-1 text-xs text-text-secondary">{platform.description}</p>
                      <TrustBadges
                        freshness={getFreshness(freshnessId('mentorship', platform.id))}
                        qualityInput={{
                          id: freshnessId('mentorship', platform.id),
                          url: platform.url,
                          description: platform.description,
                          cost: platform.cost,
                          region: platform.region,
                          metadata: buildMetadata({
                            id: freshnessId('mentorship', platform.id),
                            type: 'mentorship',
                            cost: platform.cost,
                            region: platform.region,
                            audience: ['all'],
                          }),
                        }}
                        className="mt-2"
                      />
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-2">
                      <span className="rounded-pill bg-accent-secondary/10 px-3 py-1 text-xs text-accent-primary">
                        {platform.cost}
                      </span>
                      {platform.url && (
                        <span className="text-xs font-medium text-accent-primary transition-colors group-hover:text-accent-secondary">
                          Visit →
                        </span>
                      )}
                    </div>
                  </LinkCard>
                ))}
              </div>
              <ShowMoreButton sectionKey="mentorship" total={filteredMentorship.length} />
            </motion.section>
          )}

          {showSection('jobs') && filteredJobBoards.length > 0 && (
            <motion.section variants={fadeUp} id="jobs" className="pb-12">
              <SectionHeading title="Job Boards & Career" accent="External job sites" />
              <div className="space-y-2.5">
                {sliced(filteredJobBoards, 'jobs').map((board) => (
                  <LinkCard
                    key={board.id}
                    url={board.url}
                    className="flex items-center justify-between p-6 md:p-5"
                  >
                    <div className="min-w-0 pr-3">
                      <h3 className="text-body font-medium text-text-heading">{board.name}</h3>
                      <p className="mt-1 text-xs text-text-secondary">{board.description}</p>
                      <TrustBadges
                        freshness={getFreshness(freshnessId('job-board', board.id))}
                        qualityInput={{
                          id: freshnessId('job-board', board.id),
                          url: board.url,
                          description: board.description,
                          cost: board.cost,
                          region: board.region,
                          metadata: buildMetadata({
                            id: freshnessId('job-board', board.id),
                            type: 'job-board',
                            cost: board.cost,
                            region: board.region,
                            audience: ['professional'],
                          }),
                        }}
                        className="mt-2"
                      />
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-2">
                      <span className="rounded-pill bg-accent-gold/10 px-3 py-1 text-xs text-text-muted">
                        {board.cost}
                      </span>
                      {board.url && (
                        <span className="text-xs font-medium text-accent-primary transition-colors group-hover:text-accent-secondary">
                          Browse jobs →
                        </span>
                      )}
                    </div>
                  </LinkCard>
                ))}
              </div>
              <ShowMoreButton sectionKey="jobs" total={filteredJobBoards.length} />
            </motion.section>
          )}

          {showSection('communities') && filteredCommunities.length > 0 && (
            <motion.section variants={fadeUp} id="communities" className="pb-12">
              <SectionHeading title="Communities" accent="Slack, Discord, newsletters" />
              <div className="space-y-2.5">
                {sliced(filteredCommunities, 'communities').map((c) => (
                  <LinkCard
                    key={c.id}
                    url={c.url}
                    className="flex items-center justify-between p-6 md:p-5"
                  >
                    <div className="min-w-0 pr-3">
                      <h3 className="text-body font-medium text-text-heading">{c.name}</h3>
                      <p className="mt-1 text-xs text-text-secondary">{c.description}</p>
                      <TrustBadges
                        freshness={getFreshness(freshnessId('community', c.id))}
                        qualityInput={{
                          id: freshnessId('community', c.id),
                          url: c.url,
                          description: c.description,
                          region: c.region,
                          metadata: buildMetadata({
                            id: freshnessId('community', c.id),
                            type: 'community',
                            cost: 'Free',
                            region: c.region,
                            audience: ['all'],
                          }),
                        }}
                        className="mt-2"
                      />
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-2">
                      <span className="rounded-pill bg-accent-secondary/10 px-3 py-1 text-xs capitalize text-accent-primary">
                        {c.platform}
                      </span>
                      {c.members && <span className="text-xs text-text-muted">{c.members}</span>}
                      <span className="text-xs font-medium text-accent-primary transition-colors group-hover:text-accent-secondary">
                        Join →
                      </span>
                    </div>
                  </LinkCard>
                ))}
              </div>
              <ShowMoreButton sectionKey="communities" total={filteredCommunities.length} />
            </motion.section>
          )}
        </motion.div>

        {/* Empty state */}
        {(activeCategory !== 'all' ||
          activeCost !== 'all' ||
          activeRegion !== 'all' ||
          searchQuery) &&
          filteredScholarships.length === 0 &&
          filteredOrganizations.length === 0 &&
          filteredPrograms.length === 0 &&
          filteredConferences.length === 0 &&
          filteredMentorship.length === 0 &&
          filteredJobBoards.length === 0 &&
          filteredCommunities.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-sm text-text-muted">No resources match your filters.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setActiveCost('all');
                  setActiveRegion('all');
                  setSearchQuery('');
                }}
                className="mt-3 inline-block rounded-pill bg-accent-secondary/10 px-4 py-2.5 text-sm text-accent-primary [transition:background-color_0.2s,transform_0.15s] hover:bg-accent-secondary/20 active:scale-[0.96]"
              >
                Clear all filters
              </button>
            </div>
          )}

        <Feedback />
      </div>
    </PageTransition>
  );
}
