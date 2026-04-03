import dynamic from 'next/dynamic';
import SectionHeading from '@/components/ui/SectionHeading';
import DarkPanel from '@/components/ui/DarkPanel';
import LinkCard from '@/components/ui/LinkCard';
import LiveFeed from '@/components/ui/LiveFeed';
import { pioneers } from '@/data/pioneers';
import { mentorshipPlatforms, conferences } from '@/data/resources';

const ConnectMap = dynamic(() => import('./ConnectMap'), { ssr: false });

export default function ConnectPage() {
  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          Live <em className="italic text-accent-primary">feeds</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[500px]">
          These pull from public APIs and RSS feeds. Data refreshes every few hours.
        </p>
      </section>

      {/* ─── LIVE FEEDS ─── */}
      <section className="pb-10">
        <LiveFeed
          endpoint="/api/resources/jobs"
          title="Jobs & Internships"
          limit={6}
        />
      </section>

      <section className="pb-10">
        <LiveFeed
          endpoint="/api/resources/events"
          title="Upcoming Events"
          limit={6}
        />
      </section>

      <section className="pb-10">
        <LiveFeed
          endpoint="/api/resources/hackathons"
          title="Hackathons"
          limit={5}
        />
      </section>

      <section className="pb-10">
        <LiveFeed
          endpoint="/api/resources/grants"
          title="Grants & Funding"
          limit={5}
        />
      </section>

      {/* ─── MAP ─── */}
      <section className="pb-10">
        <SectionHeading title="Global Community" subtitle="Where these organizations are based" />
        <div className="rounded-organic overflow-hidden h-[360px]">
          <ConnectMap />
        </div>
      </section>

      {/* ─── MENTORSHIP PLATFORMS ─── */}
      <section className="pb-10">
        <SectionHeading title="Mentorship Platforms" accent="We link to these, we don't run them" />
        <div className="space-y-2.5">
          {mentorshipPlatforms.map((platform) => (
              <LinkCard
                key={platform.id}
                url={platform.url}
                className="p-5 flex items-center justify-between"
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
      </section>

      {/* ─── CONFERENCES ─── */}
      <section className="pb-10">
        <SectionHeading title="Major Conferences" accent="Recurring" />
        <div className="space-y-2.5">
          {conferences.slice(0, 7).map((conf) => (
              <LinkCard
                key={conf.id}
                url={conf.url}
                className="p-5 flex items-center justify-between"
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
              </LinkCard>
          ))}
        </div>
      </section>

      {/* ─── PIONEERS ─── */}
      <section className="pb-10">
        <SectionHeading title="Stand on their shoulders" subtitle="Some of the women behind the work" />
        <DarkPanel className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pioneers.slice(0, 4).map((p) => (
            <div key={p.id}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-surface-dark-text/10 flex items-center justify-center text-surface-dark-text/60 font-display text-lg">
                  {p.initial}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-surface-dark-text">{p.name}</h4>
                  <p className="text-xs text-surface-dark-text/40">{p.field}</p>
                </div>
              </div>
              <p className="text-sm text-surface-dark-text/60 leading-relaxed">{p.title}</p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs text-accent-gold/60 hover:text-accent-gold transition-colors underline underline-offset-2"
                >
                  Learn more →
                </a>
              )}
            </div>
          ))}
        </DarkPanel>
      </section>
    </div>
  );
}
