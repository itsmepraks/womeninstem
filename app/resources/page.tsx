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

export default function ResourcesPage() {
  const undergradScholarships = scholarships.filter((s) => s.level === 'undergraduate');
  const gradScholarships = scholarships.filter((s) => s.level === 'graduate');
  const postdocScholarships = scholarships.filter((s) => s.level === 'postdoctoral' || s.level === 'all');

  const k12Programs = programs.filter((p) => p.category === 'k12');
  const bootcampPrograms = programs.filter((p) => p.category === 'bootcamp');
  const onlinePrograms = programs.filter((p) => p.category === 'online');

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

        {/* Quick nav */}
        <div className="flex flex-wrap gap-2 mt-6">
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
      <section id="scholarships" className="pb-12">
        <SectionHeading title="Scholarships & Funding" accent={`${scholarships.length} opportunities`} />

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

      {/* ─── ORGANIZATIONS ─── */}
      <section id="organizations" className="pb-12">
        <SectionHeading title="Professional Organizations" accent={`${organizations.length} listed`} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {organizations.map((org) => (
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

      {/* ─── PROGRAMS ─── */}
      <section id="programs" className="pb-12">
        <SectionHeading title="Educational Programs" accent={`${programs.length} listed`} />

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

      {/* ─── CONFERENCES ─── */}
      <section id="conferences" className="pb-12">
        <SectionHeading title="Conferences & Events" accent={`${conferences.length} listed`} />
        <div className="space-y-2.5">
          {conferences.map((conf) => {
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

      {/* ─── MENTORSHIP ─── */}
      <section id="mentorship" className="pb-12">
        <SectionHeading title="Mentorship Platforms" accent="External platforms" />
        <div className="space-y-2.5">
          {mentorshipPlatforms.map((platform) => {
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

      {/* ─── JOB BOARDS ─── */}
      <section id="jobs" className="pb-12">
        <SectionHeading title="Job Boards & Career" accent="External job sites" />
        <div className="space-y-2.5">
          {jobBoards.map((board) => {
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
    </div>
  );
}
