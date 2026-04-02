import Link from 'next/link';
import StatCard from '@/components/ui/StatCard';
import PioneerSpotlight from '@/components/ui/PioneerSpotlight';
import LiveFeed from '@/components/ui/LiveFeed';
import { heroStats, heroHighlight } from '@/data/stats';
import { scholarships } from '@/data/resources';
import { pioneers } from '@/data/pioneers';

export default function HomePage() {
  const spotlightPioneer = pioneers[0]!;
  const stat1 = heroStats[0]!;
  const stat2 = heroStats[1]!;
  const scholarshipCount = scholarships.length;

  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* ─── HERO ─── */}
      <section className="pt-16 md:pt-24 pb-10 max-w-[640px]">
        <p className="text-label text-accent-primary font-semibold mb-3.5 tracking-[0.19em]">
          Women in STEM
        </p>
        <h1 className="font-display text-display-lg text-text-heading mb-1.5">
          Find what you need,{' '}
          <em className="font-black text-accent-primary inline-block -rotate-[1.5deg]">
            in one place
          </em>
        </h1>
        <div className="accent-underline mt-4 mb-5" />
        <p className="text-body-lg text-text-body max-w-[460px] mb-8">
          Scholarships, organizations, courses, and mentorship platforms. All linked, all real, all free to browse.
        </p>
        <div className="flex items-center gap-3.5">
          <Link href="/resources" className="btn-primary">
            Explore resources
          </Link>
          <Link href="/about" className="btn-secondary">
            How it works
          </Link>
        </div>
      </section>

      {/* ─── FLOATING STAT CARDS ─── */}
      {/* Mobile: stacked cards. Desktop: floating positioned */}
      <section className="mb-5">
        {/* Mobile layout */}
        <div className="flex flex-col gap-3 md:hidden">
          <StatCard value={stat1.value} label={stat1.label} detail={stat1.source} />
          <StatCard value={stat2.value} label={stat2.label} detail={stat2.source} />
          <div className="card-dark p-6">
            <p className="font-display text-[0.9375rem] text-surface-dark-text/80 leading-relaxed">
              {heroHighlight.text}
            </p>
            <p className="text-sm text-surface-dark-text/45 mt-2">
              — {heroHighlight.source}
            </p>
          </div>
        </div>
        {/* Desktop layout */}
        <div className="relative h-[220px] hidden md:block">
          <div className="absolute left-0 top-2.5 w-[240px]">
            <StatCard value={stat1.value} label={stat1.label} detail={stat1.source} rotation={stat1.rotation} />
          </div>
          <div className="absolute left-[270px] top-7 w-[220px]">
            <StatCard value={stat2.value} label={stat2.label} detail={stat2.source} rotation={stat2.rotation} />
          </div>
          <div className="absolute right-0 top-0 w-[280px] card-dark p-7" style={{ transform: `rotate(${heroHighlight.rotation}deg)` }}>
            <p className="font-display text-[1.0625rem] text-surface-dark-text/80 leading-relaxed">
              {heroHighlight.text}
            </p>
            <p className="text-sm text-surface-dark-text/45 mt-3">
              — {heroHighlight.source}
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU'LL FIND HERE ─── */}
      <section className="pt-12 pb-2">
        <h2 className="font-display text-display text-text-heading mb-1.5">
          What you&apos;ll find here
        </h2>
        <p className="text-body-lg text-text-secondary">
          Here&apos;s what we&apos;ve put together so far.
        </p>
      </section>

      {/* Feature blocks — varied layout, NOT a grid */}
      <section className="space-y-4 py-6">
        {/* Full-width: Learning Hub */}
        <div className="card-white p-8 flex items-center gap-8">
          <div className="flex-1">
            <h3 className="font-display text-heading text-text-heading mb-2">
              Learning Hub
            </h3>
            <p className="text-body text-text-body leading-relaxed">
              Courses, bootcamps, and scholarships. Sorted by field and level so you can skip the noise.
            </p>
            <Link
              href="/learning"
              className="inline-block mt-3 text-sm text-accent-primary font-semibold hover:text-accent-secondary transition-colors"
            >
              Browse courses →
            </Link>
          </div>
          <div className="w-24 h-24 rounded-[50%_50%_50%_20%] bg-gradient-to-br from-accent-secondary/10 to-accent-gold/15 flex-shrink-0 flex items-center justify-center">
            <span className="font-display text-4xl text-accent-primary font-light">
              {scholarshipCount}
            </span>
          </div>
        </div>

        {/* Side-by-side: Connect + Organizations */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Connect — light card with quote */}
          <div className="card-white p-8 flex-[1.2]">
            <h3 className="font-display text-heading text-text-heading mb-2">
              Connect
            </h3>
            <p className="text-body text-text-body leading-relaxed">
              Mentorship platforms, conferences, and events. We link to them — we don&apos;t run them.
            </p>
            <div className="mt-4 p-3.5 bg-accent-secondary/[0.04] rounded-[0.875rem]">
              <p className="text-xs text-text-muted italic">
                Women in computing are 45% more likely to leave than men.
                Companies with gender-diverse teams are 15% more likely to outperform competitors.
              </p>
              <p className="text-[0.6875rem] text-text-muted/70 mt-1">
                — Center for Talent Innovation
              </p>
            </div>
          </div>

          {/* Organizations — dark card with tags */}
          <div className="card-dark p-8 flex-[0.8] flex flex-col justify-between">
            <div>
              <h3 className="font-display text-heading text-surface-dark-text mb-2">
                Organizations
              </h3>
              <p className="text-body text-surface-dark-text/60 leading-relaxed">
                Professional orgs for women in tech, engineering, science, and math.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Tech', 'Biotech', 'Research', 'Engineering', 'Aerospace'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-surface-dark-text/[0.06] text-surface-dark-text/50 px-3 py-1 rounded-[0.875rem] text-xs"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PIONEER SPOTLIGHT ─── */}
      <section className="py-8">
        <PioneerSpotlight pioneer={spotlightPioneer} />
      </section>

      {/* ─── LIVE PREVIEW ─── */}
      <section className="py-8">
        <LiveFeed
          endpoint="/api/resources/jobs"
          title="Latest Opportunities"
          limit={3}
        />
        <Link
          href="/connect"
          className="inline-block mt-4 text-sm text-accent-primary font-medium underline underline-offset-4 hover:text-accent-secondary transition-colors"
        >
          See all live feeds (jobs, events, hackathons, grants) →
        </Link>
      </section>

      {/* ─── FOOTER CTA ─── */}
      <section className="py-14 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-secondary/[0.03] rounded-3xl" />
        <div className="relative z-[1]">
          <h2 className="font-display text-[2.25rem] text-text-heading font-light mb-3">
            That&apos;s what we&apos;ve got
          </h2>
          <p className="text-body-lg text-text-secondary mb-7">
            Scholarships, orgs, courses, jobs, events. One site.
          </p>
          <Link href="/resources" className="btn-primary text-base">
            Browse all resources
          </Link>
        </div>
      </section>
    </div>
  );
}
