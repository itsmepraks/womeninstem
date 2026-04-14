'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ResourceCard from '@/components/ui/ResourceCard';
import CompanyCard from '@/components/ui/CompanyCard';
import LinkCard from '@/components/ui/LinkCard';
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

type Category = 'all' | 'scholarships' | 'organizations' | 'programs' | 'conferences' | 'mentorship' | 'jobs' | 'communities';
type CostFilter = 'all' | 'free' | 'paid';

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
  // paid = not free
  return !isFree(cost);
}

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [activeCost, setActiveCost] = useState<CostFilter>('all');
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
        className="mt-3 text-sm text-accent-primary font-medium underline underline-offset-4 hover:text-accent-secondary transition-colors"
      >
        {expanded[sectionKey] ? 'Show less' : `Show all ${total}`}
      </button>
    );
  }

  function sliced<T>(arr: T[], key: string): T[] {
    return expanded[key] ? arr : arr.slice(0, PREVIEW);
  }

  const showSection = (section: Category) => activeCategory === 'all' || activeCategory === section;

  // Filtered data
  const filteredScholarships = useMemo(() => {
    // Scholarships don't have a cost field in the same way, treat them as free
    return scholarships.filter((s) => {
      if (!matchesSearch(searchQuery, s.name, s.description)) return false;
      // Scholarships are inherently free (they give money), so if cost filter is "paid", hide them
      if (activeCost === 'paid') return false;
      return true;
    });
  }, [searchQuery, activeCost]);

  const undergradScholarships = useMemo(() => filteredScholarships.filter((s) => s.level === 'undergraduate'), [filteredScholarships]);
  const gradScholarships = useMemo(() => filteredScholarships.filter((s) => s.level === 'graduate'), [filteredScholarships]);
  const postdocScholarships = useMemo(() => filteredScholarships.filter((s) => s.level === 'postdoctoral' || s.level === 'all'), [filteredScholarships]);

  const filteredOrganizations = useMemo(
    () => organizations.filter((o) => matchesSearch(searchQuery, o.name, o.description) && matchesCost(activeCost, o.cost)),
    [searchQuery, activeCost],
  );

  const filteredPrograms = useMemo(
    () => programs.filter((p) => matchesSearch(searchQuery, p.name, p.description) && matchesCost(activeCost, p.cost)),
    [searchQuery, activeCost],
  );

  const k12Programs = useMemo(() => filteredPrograms.filter((p) => p.category === 'k12'), [filteredPrograms]);
  const bootcampPrograms = useMemo(() => filteredPrograms.filter((p) => p.category === 'bootcamp'), [filteredPrograms]);
  const onlinePrograms = useMemo(() => filteredPrograms.filter((p) => p.category === 'online'), [filteredPrograms]);

  const filteredConferences = useMemo(
    () => conferences.filter((c) => matchesSearch(searchQuery, c.name, c.description) && matchesCost(activeCost, c.cost)),
    [searchQuery, activeCost],
  );

  const filteredMentorship = useMemo(
    () => mentorshipPlatforms.filter((m) => matchesSearch(searchQuery, m.name, m.description) && matchesCost(activeCost, m.cost)),
    [searchQuery, activeCost],
  );

  const filteredJobBoards = useMemo(
    () => jobBoards.filter((b) => matchesSearch(searchQuery, b.name, b.description) && matchesCost(activeCost, b.cost)),
    [searchQuery, activeCost],
  );

  const filteredCommunities = useMemo(
    () => communities.filter((c) => matchesSearch(searchQuery, c.name, c.description)),
    [searchQuery],
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
        if (a.occurrence && b.occurrence) return a.occurrence.date.getTime() - b.occurrence.date.getTime();
        if (a.occurrence) return -1;
        if (b.occurrence) return 1;
        return 0;
      });
  }, [filteredConferences]);

  return (
    <PageTransition>
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          Resources <em className="italic text-accent-primary">that matter</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[500px]">
          Every link is real. Click through to verify before you apply.
        </p>
      </section>

      {/* ─── FILTER BAR ─── */}
      <section className="sticky top-0 z-30 -mx-6 md:-mx-10 px-6 md:px-10 py-4 mb-8 bg-bg-primary/90 backdrop-blur-md border-b border-accent-primary/5">
        <div className="space-y-4">
          {/* Category toggles */}
          <div>
            <span className="text-xs text-text-muted uppercase tracking-wide font-medium block mb-2">Category</span>
            <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`text-xs px-4 py-2 rounded-pill transition-colors focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:outline-none ${
                    activeCategory === cat.value
                      ? 'bg-accent-secondary/10 text-accent-primary font-medium'
                      : 'bg-transparent text-text-muted hover:bg-accent-secondary/5 hover:text-text-body'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cost toggles */}
          <div>
            <span className="text-xs text-text-muted uppercase tracking-wide font-medium block mb-2">Cost</span>
            <div role="group" aria-label="Filter by cost" className="flex flex-wrap gap-2">
              {COST_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setActiveCost(opt.value)}
                  className={`text-xs px-4 py-2 rounded-pill transition-colors focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:outline-none ${
                    activeCost === opt.value
                      ? 'bg-accent-secondary/10 text-accent-primary font-medium'
                      : 'bg-transparent text-text-muted hover:bg-accent-secondary/5 hover:text-text-body'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search input */}
          <div>
            <label htmlFor="resources-search-input" className="sr-only">Search resources by name</label>
            <input
              id="resources-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or description..."
              aria-label="Search resources by name"
              className="w-full text-sm px-4 py-2.5 rounded-pill border border-accent-secondary/20 bg-white text-text-body placeholder:text-text-muted focus:outline-none focus:border-accent-primary/40 focus:ring-1 focus:ring-accent-primary/20 transition-colors"
            />
          </div>
        </div>
      </section>

      <motion.div variants={stagger} initial="hidden" animate="show">
      {/* CLOSING SOON */}
      {closingSoonScholarships.length > 0 && (
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
              />
            ))}
          </div>
        </motion.section>
      )}

      {/* ─── LIVE FEEDS ─── */}
      <motion.section variants={fadeUp} id="live" className="pb-10">
        <SectionHeading title="Live Feeds" accent="From public APIs. Updated every few hours." />
        <div className="space-y-6">
          <LiveFeed endpoint="/api/resources/jobs" title="Jobs & Internships" limit={5} />
          <LiveFeed endpoint="/api/resources/events" title="Events" limit={5} />
          <LiveFeed endpoint="/api/resources/hackathons" title="Hackathons" limit={5} />
          <LiveFeed endpoint="/api/resources/grants" title="Grants" limit={5} />
        </div>
      </motion.section>

      {/* Quick nav */}
      <motion.section variants={fadeUp} className="pb-8">
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'Live', href: '#live' },
            { label: 'Scholarships', href: '#scholarships' },
            { label: 'Organizations', href: '#organizations' },
            { label: 'Programs', href: '#programs' },
            { label: 'Conferences', href: '#conferences' },
            { label: 'Mentorship', href: '#mentorship' },
            { label: 'Job Boards', href: '#jobs' },
            { label: 'Communities', href: '#communities' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs px-3.5 py-1.5 rounded-pill bg-accent-secondary/10 text-accent-primary hover:bg-accent-secondary/20 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.section>

      {/* ─── SCHOLARSHIPS ─── */}
      {showSection('scholarships') && filteredScholarships.length > 0 && (
        <motion.section variants={fadeUp} id="scholarships" className="pb-12">
          <SectionHeading title="Scholarships & Funding" accent={`${filteredScholarships.length} opportunities`} />

          {undergradScholarships.length > 0 && (
            <div className="mb-8">
              <h3 className="text-label text-accent-primary mb-3">Undergraduate</h3>
              <div className="space-y-2.5">
                {sliced(undergradScholarships, 'scholarships-undergrad').map((s) => {
                  const dl = s.nextDeadline ? formatDeadlineDisplay(s.nextDeadline) : null;
                  return <ResourceCard key={s.id} title={s.name} description={s.description} amount={s.amount} url={s.url} daysLeft={dl?.daysLeft} deadlineLabel={dl?.label} />;
                })}
              </div>
              <ShowMoreButton sectionKey="scholarships-undergrad" total={undergradScholarships.length} />
            </div>
          )}

          {gradScholarships.length > 0 && (
            <div className="mb-8">
              <h3 className="text-label text-accent-primary mb-3">Graduate & Fellowship</h3>
              <div className="space-y-2.5">
                {sliced(gradScholarships, 'scholarships-grad').map((s) => {
                  const dl = s.nextDeadline ? formatDeadlineDisplay(s.nextDeadline) : null;
                  return <ResourceCard key={s.id} title={s.name} description={s.description} amount={s.amount} url={s.url} daysLeft={dl?.daysLeft} deadlineLabel={dl?.label} />;
                })}
              </div>
              <ShowMoreButton sectionKey="scholarships-grad" total={gradScholarships.length} />
            </div>
          )}

          {postdocScholarships.length > 0 && (
            <div>
              <h3 className="text-label text-accent-primary mb-3">Postdoctoral & Research Grants</h3>
              <div className="space-y-2.5">
                {sliced(postdocScholarships, 'scholarships-postdoc').map((s) => {
                  const dl = s.nextDeadline ? formatDeadlineDisplay(s.nextDeadline) : null;
                  return <ResourceCard key={s.id} title={s.name} description={s.description} amount={s.amount} url={s.url} daysLeft={dl?.daysLeft} deadlineLabel={dl?.label} />;
                })}
              </div>
              <ShowMoreButton sectionKey="scholarships-postdoc" total={postdocScholarships.length} />
            </div>
          )}
        </motion.section>
      )}

      {/* ─── ORGANIZATIONS ─── */}
      {showSection('organizations') && filteredOrganizations.length > 0 && (
        <motion.section variants={fadeUp} id="organizations" className="pb-12">
          <SectionHeading title="Professional Organizations" accent={`${filteredOrganizations.length} listed`} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {sliced(filteredOrganizations, 'organizations').map((org) => (
              <CompanyCard
                key={org.id}
                name={org.name}
                initial={org.initial}
                description={org.description}
                members={org.members}
                cost={org.cost}
                url={org.url}
              />
            ))}
          </div>
          <ShowMoreButton sectionKey="organizations" total={filteredOrganizations.length} />
        </motion.section>
      )}

      {/* ─── PROGRAMS ─── */}
      {showSection('programs') && filteredPrograms.length > 0 && (
        <motion.section variants={fadeUp} id="programs" className="pb-12">
          <SectionHeading title="Educational Programs" accent={`${filteredPrograms.length} listed`} />

          {[
            { key: 'k12', label: 'K-12 & Youth', programs: k12Programs, cta: 'Learn more \u2192' },
            { key: 'bootcamp', label: 'Coding Bootcamps', programs: bootcampPrograms, cta: 'Apply \u2192' },
            { key: 'online', label: 'Online Learning Platforms', programs: onlinePrograms, cta: 'Start learning \u2192' },
          ].map((section, idx) =>
            section.programs.length > 0 && (
              <div key={section.key} className={idx < 2 ? 'mb-8' : undefined}>
                <h3 className="text-label text-accent-primary mb-3">{section.label}</h3>
                <div className="space-y-2.5">
                  {sliced(section.programs, `programs-${section.key}`).map((p) => (
                    <a
                      key={p.id}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-white p-6 md:p-5 flex items-center justify-between group hover:shadow-card-hover transition-shadow"
                    >
                      <div>
                        <span className="text-body text-text-heading font-medium">{p.name}</span>
                        <span className="text-xs text-text-muted ml-2">({p.cost})</span>
                        <p className="text-xs text-text-secondary mt-1">{p.description}</p>
                      </div>
                      <span className="text-xs text-accent-primary font-medium group-hover:text-accent-secondary transition-colors flex-shrink-0 ml-4">
                        {section.cta}
                      </span>
                    </a>
                  ))}
                </div>
                <ShowMoreButton sectionKey={`programs-${section.key}`} total={section.programs.length} />
              </div>
            )
          )}
        </motion.section>
      )}

      {/* ─── CONFERENCES ─── */}
      {showSection('conferences') && filteredConferences.length > 0 && (
        <motion.section variants={fadeUp} id="conferences" className="pb-12">
          <SectionHeading title="Conferences & Events" accent={`${filteredConferences.length} listed`} />
          <div className="space-y-2.5">
            {sliced(sortedConferences, 'conferences').map(({ conf, occurrence }) => (
                <LinkCard
                  key={conf.id}
                  url={conf.url}
                  className="p-6 md:p-5 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-body text-text-heading font-medium">{conf.name}</h3>
                    <p className="text-xs text-text-muted mt-1">{conf.description}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {conf.size && (
                      <span className="text-xs bg-accent-gold/10 text-text-muted px-3 py-1 rounded-pill">
                        {conf.size}
                      </span>
                    )}
                    {(occurrence || conf.timing) && (
                      <span className="text-xs text-text-muted">
                        {occurrence ? occurrence.display : conf.timing}
                      </span>
                    )}
                    {conf.url && (
                      <span className="text-xs text-accent-primary font-medium group-hover:text-accent-secondary transition-colors">
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

      {/* ─── MENTORSHIP ─── */}
      {showSection('mentorship') && filteredMentorship.length > 0 && (
        <motion.section variants={fadeUp} id="mentorship" className="pb-12">
          <SectionHeading title="Mentorship Platforms" accent="External platforms" />
          <div className="space-y-2.5">
            {sliced(filteredMentorship, 'mentorship').map((platform) => (
                <LinkCard
                  key={platform.id}
                  url={platform.url}
                  className="p-6 md:p-5 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-body text-text-heading font-medium">{platform.name}</h3>
                    <p className="text-xs text-text-secondary mt-1">{platform.description}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs bg-accent-secondary/10 text-accent-primary px-3 py-1 rounded-pill">
                      {platform.cost}
                    </span>
                    {platform.url && (
                      <span className="text-xs text-accent-primary font-medium group-hover:text-accent-secondary transition-colors">
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

      {/* ─── JOB BOARDS ─── */}
      {showSection('jobs') && filteredJobBoards.length > 0 && (
        <motion.section variants={fadeUp} id="jobs" className="pb-12">
          <SectionHeading title="Job Boards & Career" accent="External job sites" />
          <div className="space-y-2.5">
            {sliced(filteredJobBoards, 'jobs').map((board) => (
                <LinkCard
                  key={board.id}
                  url={board.url}
                  className="p-6 md:p-5 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-body text-text-heading font-medium">{board.name}</h3>
                    <p className="text-xs text-text-secondary mt-1">{board.description}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs bg-accent-gold/10 text-text-muted px-3 py-1 rounded-pill">
                      {board.cost}
                    </span>
                    {board.url && (
                      <span className="text-xs text-accent-primary font-medium group-hover:text-accent-secondary transition-colors">
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

      {/* ─── COMMUNITIES ─── */}
      {showSection('communities') && filteredCommunities.length > 0 && (
        <motion.section variants={fadeUp} id="communities" className="pb-12">
          <SectionHeading title="Communities" accent="Slack, Discord, newsletters" />
          <div className="space-y-2.5">
            {sliced(filteredCommunities, 'communities').map((c) => (
              <LinkCard key={c.id} url={c.url} className="p-6 md:p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-body text-text-heading font-medium">{c.name}</h3>
                  <p className="text-xs text-text-secondary mt-1">{c.description}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs bg-accent-secondary/10 text-accent-primary px-3 py-1 rounded-pill capitalize">
                    {c.platform}
                  </span>
                  {c.members && (
                    <span className="text-xs text-text-muted">{c.members}</span>
                  )}
                  <span className="text-xs text-accent-primary font-medium group-hover:text-accent-secondary transition-colors">
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
      {(activeCategory !== 'all' || activeCost !== 'all' || searchQuery) &&
        filteredScholarships.length === 0 &&
        filteredOrganizations.length === 0 &&
        filteredPrograms.length === 0 &&
        filteredConferences.length === 0 &&
        filteredMentorship.length === 0 &&
        filteredJobBoards.length === 0 &&
        filteredCommunities.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-muted text-sm">No resources match your filters.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveCost('all');
                setSearchQuery('');
              }}
              className="mt-3 inline-block text-sm px-4 py-2.5 rounded-pill bg-accent-secondary/10 text-accent-primary hover:bg-accent-secondary/20 transition-colors"
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
