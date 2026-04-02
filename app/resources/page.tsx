'use client';

import { useState, useMemo } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ResourceCard from '@/components/ui/ResourceCard';
import CompanyCard from '@/components/ui/CompanyCard';
import {
  scholarships,
  organizations,
  conferences,
  programs,
  mentorshipPlatforms,
  jobBoards,
} from '@/data/resources';

type Category = 'all' | 'scholarships' | 'organizations' | 'programs' | 'conferences' | 'mentorship' | 'jobs';
type CostFilter = 'all' | 'free' | 'paid';

const CATEGORIES: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'scholarships', label: 'Scholarships' },
  { value: 'organizations', label: 'Organizations' },
  { value: 'programs', label: 'Programs' },
  { value: 'conferences', label: 'Conferences' },
  { value: 'mentorship', label: 'Mentorship' },
  { value: 'jobs', label: 'Jobs' },
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

  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          Resources <em className="italic text-accent-primary">that matter</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[500px]">
          Everything links to the real source. Click through to verify.
        </p>
      </section>

      {/* ─── FILTER BAR ─── */}
      <section className="pb-8">
        <div className="space-y-4">
          {/* Category toggles */}
          <div>
            <span className="text-xs text-text-muted uppercase tracking-wide font-medium block mb-2">Category</span>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`text-xs px-3.5 py-1.5 rounded-pill transition-colors ${
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
            <div className="flex flex-wrap gap-2">
              {COST_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setActiveCost(opt.value)}
                  className={`text-xs px-3.5 py-1.5 rounded-pill transition-colors ${
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
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or description..."
              className="w-full text-sm px-4 py-2.5 rounded-pill border border-accent-secondary/20 bg-white text-text-body placeholder:text-text-muted focus:outline-none focus:border-accent-primary/40 focus:ring-1 focus:ring-accent-primary/20 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="pb-8">
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'Scholarships', href: '#scholarships' },
            { label: 'Organizations', href: '#organizations' },
            { label: 'Programs', href: '#programs' },
            { label: 'Conferences', href: '#conferences' },
            { label: 'Mentorship', href: '#mentorship' },
            { label: 'Job Boards', href: '#jobs' },
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
      </section>

      {/* ─── SCHOLARSHIPS ─── */}
      {showSection('scholarships') && filteredScholarships.length > 0 && (
        <section id="scholarships" className="pb-12">
          <SectionHeading title="Scholarships & Funding" accent={`${filteredScholarships.length} opportunities`} />

          {undergradScholarships.length > 0 && (
            <div className="mb-8">
              <h3 className="text-label text-accent-primary mb-3">Undergraduate</h3>
              <div className="space-y-2.5">
                {undergradScholarships.map((s) => (
                  <ResourceCard key={s.id} title={s.name} description={s.description} amount={s.amount} url={s.url} />
                ))}
              </div>
            </div>
          )}

          {gradScholarships.length > 0 && (
            <div className="mb-8">
              <h3 className="text-label text-accent-primary mb-3">Graduate & Fellowship</h3>
              <div className="space-y-2.5">
                {gradScholarships.map((s) => (
                  <ResourceCard key={s.id} title={s.name} description={s.description} amount={s.amount} url={s.url} />
                ))}
              </div>
            </div>
          )}

          {postdocScholarships.length > 0 && (
            <div>
              <h3 className="text-label text-accent-primary mb-3">Postdoctoral & Research Grants</h3>
              <div className="space-y-2.5">
                {postdocScholarships.map((s) => (
                  <ResourceCard key={s.id} title={s.name} description={s.description} amount={s.amount} url={s.url} />
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* ─── ORGANIZATIONS ─── */}
      {showSection('organizations') && filteredOrganizations.length > 0 && (
        <section id="organizations" className="pb-12">
          <SectionHeading title="Professional Organizations" accent={`${filteredOrganizations.length} listed`} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {filteredOrganizations.map((org) => (
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
        </section>
      )}

      {/* ─── PROGRAMS ─── */}
      {showSection('programs') && filteredPrograms.length > 0 && (
        <section id="programs" className="pb-12">
          <SectionHeading title="Educational Programs" accent={`${filteredPrograms.length} listed`} />

          {k12Programs.length > 0 && (
            <div className="mb-8">
              <h3 className="text-label text-accent-primary mb-3">K-12 & Youth</h3>
              <div className="space-y-2.5">
                {k12Programs.map((p) => (
                  <a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-white p-5 flex items-center justify-between group hover:shadow-card-hover transition-shadow block"
                  >
                    <div>
                      <span className="text-body text-text-heading font-medium">{p.name}</span>
                      <span className="text-xs text-text-muted ml-2">({p.cost})</span>
                      <p className="text-xs text-text-secondary mt-1">{p.description}</p>
                    </div>
                    <span className="text-xs text-accent-primary font-medium group-hover:text-accent-secondary transition-colors flex-shrink-0 ml-4">
                      Learn more →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {bootcampPrograms.length > 0 && (
            <div className="mb-8">
              <h3 className="text-label text-accent-primary mb-3">Coding Bootcamps</h3>
              <div className="space-y-2.5">
                {bootcampPrograms.map((p) => (
                  <a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-white p-5 flex items-center justify-between group hover:shadow-card-hover transition-shadow block"
                  >
                    <div>
                      <span className="text-body text-text-heading font-medium">{p.name}</span>
                      <span className="text-xs text-text-muted ml-2">({p.cost})</span>
                      <p className="text-xs text-text-secondary mt-1">{p.description}</p>
                    </div>
                    <span className="text-xs text-accent-primary font-medium group-hover:text-accent-secondary transition-colors flex-shrink-0 ml-4">
                      Apply →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {onlinePrograms.length > 0 && (
            <div>
              <h3 className="text-label text-accent-primary mb-3">Online Learning Platforms</h3>
              <div className="space-y-2.5">
                {onlinePrograms.map((p) => (
                  <a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-white p-5 flex items-center justify-between group hover:shadow-card-hover transition-shadow block"
                  >
                    <div>
                      <span className="text-body text-text-heading font-medium">{p.name}</span>
                      <span className="text-xs text-text-muted ml-2">({p.cost})</span>
                      <p className="text-xs text-text-secondary mt-1">{p.description}</p>
                    </div>
                    <span className="text-xs text-accent-primary font-medium group-hover:text-accent-secondary transition-colors flex-shrink-0 ml-4">
                      Start learning →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* ─── CONFERENCES ─── */}
      {showSection('conferences') && filteredConferences.length > 0 && (
        <section id="conferences" className="pb-12">
          <SectionHeading title="Conferences & Events" accent={`${filteredConferences.length} listed`} />
          <div className="space-y-2.5">
            {filteredConferences.map((conf) => {
              const Wrapper = conf.url ? 'a' : 'div';
              const linkProps = conf.url
                ? { href: conf.url, target: '_blank' as const, rel: 'noopener noreferrer' }
                : {};
              return (
                <Wrapper
                  key={conf.id}
                  {...linkProps}
                  className="card-white p-5 flex items-center justify-between group hover:shadow-card-hover transition-shadow block"
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
                    {conf.timing && (
                      <span className="text-xs text-text-muted">{conf.timing}</span>
                    )}
                    {conf.url && (
                      <span className="text-xs text-accent-primary font-medium group-hover:text-accent-secondary transition-colors">
                        Register →
                      </span>
                    )}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </section>
      )}

      {/* ─── MENTORSHIP ─── */}
      {showSection('mentorship') && filteredMentorship.length > 0 && (
        <section id="mentorship" className="pb-12">
          <SectionHeading title="Mentorship Platforms" accent="External platforms" />
          <div className="space-y-2.5">
            {filteredMentorship.map((platform) => {
              const Wrapper = platform.url ? 'a' : 'div';
              const linkProps = platform.url
                ? { href: platform.url, target: '_blank' as const, rel: 'noopener noreferrer' }
                : {};
              return (
                <Wrapper
                  key={platform.id}
                  {...linkProps}
                  className="card-white p-5 flex items-center justify-between group hover:shadow-card-hover transition-shadow block"
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
                </Wrapper>
              );
            })}
          </div>
        </section>
      )}

      {/* ─── JOB BOARDS ─── */}
      {showSection('jobs') && filteredJobBoards.length > 0 && (
        <section id="jobs" className="pb-12">
          <SectionHeading title="Job Boards & Career" accent="External job sites" />
          <div className="space-y-2.5">
            {filteredJobBoards.map((board) => {
              const Wrapper = board.url ? 'a' : 'div';
              const linkProps = board.url
                ? { href: board.url, target: '_blank' as const, rel: 'noopener noreferrer' }
                : {};
              return (
                <Wrapper
                  key={board.id}
                  {...linkProps}
                  className="card-white p-5 flex items-center justify-between group hover:shadow-card-hover transition-shadow block"
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
                </Wrapper>
              );
            })}
          </div>
        </section>
      )}

      {/* Empty state */}
      {(activeCategory !== 'all' || activeCost !== 'all' || searchQuery) &&
        filteredScholarships.length === 0 &&
        filteredOrganizations.length === 0 &&
        filteredPrograms.length === 0 &&
        filteredConferences.length === 0 &&
        filteredMentorship.length === 0 &&
        filteredJobBoards.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-muted text-sm">No resources match your filters.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveCost('all');
                setSearchQuery('');
              }}
              className="text-xs text-accent-primary mt-2 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
    </div>
  );
}
