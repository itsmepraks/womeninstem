import type { Metadata } from 'next';
import PageTransition from '@/components/ui/PageTransition';
import { SOCIAL_LINKS } from '@/lib/constants';
import { pioneers } from '@/data/pioneers';
import { scholarships, organizations, programs, conferences } from '@/data/resources';

export const metadata: Metadata = {
  title: 'About · stem·spark',
  description: 'Why this site exists. Built by a student who couldn\'t find what she needed.',
};

export default function AboutPage() {
  return (
    <PageTransition>
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight max-w-[600px]">
          Why <em className="italic text-accent-primary">this exists</em>
        </h1>
      </section>

      {/* The real story */}
      <section className="pb-10">
        <div className="card-white p-8 md:p-10">
          <div className="space-y-5 text-body-lg text-text-body leading-relaxed">
            <p>
              I&apos;m a student about to graduate, and I kept running into the
              same problem: information about opportunities for women in STEM
              exists, but it&apos;s scattered everywhere. Scholarships on one
              site, mentorship programs on another, organizations somewhere else,
              conferences buried in newsletters you didn&apos;t know to subscribe to.
            </p>
            <p>
              I&apos;d miss application deadlines because I didn&apos;t know they
              existed. I&apos;d hear about workshops after they already happened.
              Opportunities were there. I just couldn&apos;t find them in time.
            </p>
            <p>
              So I made this. It&apos;s not a company. It&apos;s not a platform
              with user accounts or a community forum. It&apos;s a simple website
              that links real resources in one place so people like me don&apos;t
              have to dig through 47 tabs to find what they need.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-accent-primary/[0.06]">
            <p className="text-sm text-text-heading font-semibold">Prakriti Bista</p>
            <p className="text-xs text-text-muted mt-0.5">
              Student & builder ·{' '}
              <a
                href={SOCIAL_LINKS.website}
                className="text-accent-primary underline underline-offset-2 hover:text-accent-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                praks.me
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* What this is (and isn't) */}
      <section className="pb-10">
        <h2 className="font-display text-display text-text-heading mb-4">
          What this site is
        </h2>
        <div className="space-y-3">
          <div className="card-white p-6">
            <h3 className="text-base font-semibold text-text-heading mb-1">A curated directory</h3>
            <p className="text-body text-text-body">
              Every link goes to a real organization, real scholarship, or real
              program. I don&apos;t make up data. If something is listed here,
              you can click through and verify it yourself.
            </p>
          </div>
          <div className="card-white p-6">
            <h3 className="text-base font-semibold text-text-heading mb-1">Automatically updated</h3>
            <p className="text-body text-text-body">
              Live data (jobs, events, hackathons, grants) is pulled automatically
              from public sources every few hours. Static resources (scholarships,
              organizations, programs) are manually curated and updated regularly.
            </p>
          </div>
          <div className="card-white p-6">
            <h3 className="text-base font-semibold text-text-heading mb-1">Free and open</h3>
            <p className="text-body text-text-body">
              No accounts, no paywalls, no tracking. The{' '}
              <a
                href={SOCIAL_LINKS.github}
                className="text-accent-primary underline underline-offset-2 hover:text-accent-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                source code is on GitHub
              </a>
              . Found a broken link or want to suggest a resource? Open an issue.
            </p>
          </div>
        </div>
      </section>

      {/* What this isn't */}
      <section className="pb-10">
        <h2 className="font-display text-display text-text-heading mb-4">
          What this site is <em className="italic text-accent-primary">not</em>
        </h2>
        <div className="card-dark p-8">
          <ul className="space-y-3 text-body text-surface-dark-text/70">
            <li>We don&apos;t run any mentorship programs. We link to platforms that do.</li>
            <li>We don&apos;t host events or conferences. We help you find them.</li>
            <li>We don&apos;t verify scholarship deadlines in real-time. Always check the source.</li>
            <li>We don&apos;t endorse any specific organization. We just make them easier to find.</li>
            <li>We don&apos;t collect your data or require sign-up.</li>
          </ul>
        </div>
      </section>

      {/* What's here */}
      <section className="pb-10">
        <h2 className="font-display text-display text-text-heading mb-4">
          What you&apos;ll find
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { label: 'Pioneer profiles', count: pioneers.length },
            { label: 'Scholarships & grants', count: scholarships.length },
            { label: 'Organizations', count: organizations.length },
            { label: 'Educational programs', count: programs.length },
            { label: 'Conferences & events', count: conferences.length },
            { label: 'Live data feeds', count: 6, suffix: 'Jobs, events, hackathons, grants, mentors, orgs' },
          ].map((item) => (
            <div key={item.label} className="card-white p-5">
              <div className="font-display text-2xl text-accent-primary font-bold">
                {item.count}
              </div>
              <div className="text-sm text-text-heading font-medium mt-1">{item.label}</div>
              {item.suffix && (
                <div className="text-xs text-text-muted mt-0.5">{item.suffix}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Data transparency */}
      <section className="pb-10">
        <h2 className="font-display text-display text-text-heading mb-4">
          How data stays current
        </h2>
        <div className="card-white p-8">
          <div className="space-y-4 text-body text-text-body">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
              <div>
                <strong className="text-text-heading">Live feeds (updated every 6-24 hours):</strong>{' '}
                Jobs, events, hackathons, grants, mentor profiles, and organizations
                are fetched automatically from public APIs and RSS feeds.
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
              <div>
                <strong className="text-text-heading">Curated resources (updated less often):</strong>{' '}
                Scholarships, pioneer write-ups, book/podcast recommendations, and
                statistics from published research. These are hand-picked. Always
                verify details on the source website before applying.
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-text-muted/40 mt-2 flex-shrink-0" />
              <div>
                <strong className="text-text-heading">Statistics:</strong>{' '}
                Numbers on the Impact page come from published research (NSF, NCES, etc.).
                These don&apos;t auto-update. They&apos;re from specific reports and studies.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}
