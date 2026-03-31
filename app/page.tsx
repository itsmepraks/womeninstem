import Link from 'next/link';
import StatCard from '@/components/ui/StatCard';
import PioneerSpotlight from '@/components/ui/PioneerSpotlight';
import { siteStats, testimonial } from '@/data/stats';
import { pioneers } from '@/data/pioneers';

export default function HomePage() {
  const spotlightPioneer = pioneers[0];

  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* ─── HERO ─── */}
      <section className="pt-16 md:pt-24 pb-10 max-w-[640px]">
        <p className="text-label text-accent-primary font-semibold mb-3.5 tracking-[0.19em]">
          For women who build the future
        </p>
        <h1 className="font-display text-display-lg text-text-heading mb-1.5">
          Every woman in STEM{' '}
          <em className="font-black text-accent-primary inline-block -rotate-[1.5deg]">
            changes the equation
          </em>
        </h1>
        <div className="accent-underline mt-4 mb-5" />
        <p className="text-body-lg text-text-body max-w-[460px] mb-8">
          Resources, mentors, and community. We bring it all together so you can
          focus on what matters — your work.
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
      <section className="relative h-[240px] md:h-[220px] mb-5">
        <div className="absolute left-0 top-2.5 w-[240px]">
          <StatCard
            value={siteStats[0].value}
            label={siteStats[0].label}
            detail="Courses · Scholarships · Programs"
            rotation={siteStats[0].rotation}
          />
        </div>
        <div className="absolute left-[270px] top-7 w-[220px] hidden md:block">
          <StatCard
            value={siteStats[1].value}
            label={siteStats[1].label}
            detail="1-on-1 · Group · Async"
            rotation={siteStats[1].rotation}
          />
        </div>
        <div
          className="absolute right-0 top-0 w-[280px] hidden md:block card-dark p-7"
          style={{ transform: `rotate(${testimonial.rotation}deg)` }}
        >
          <p className="font-display text-[1.0625rem] text-surface-dark-text/80 leading-relaxed italic">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <p className="text-sm text-surface-dark-text/45 mt-3">
            — {testimonial.author}, {testimonial.field}
          </p>
        </div>
      </section>

      {/* ─── WHAT YOU'LL FIND HERE ─── */}
      <section className="pt-12 pb-2">
        <h2 className="font-display text-display text-text-heading mb-1.5">
          What you&apos;ll find here
        </h2>
        <p className="text-body-lg text-text-secondary">
          Everything is curated by women who&apos;ve been where you are.
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
              Courses, bootcamps, and scholarships from institutions that care
              about diversity. Filtered by field, level, and deadline so you find
              what&apos;s relevant — not everything that exists.
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
              42
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
              Find a mentor who gets it. Join study groups. Attend events. Your
              network is your superpower — we just make it easier to build.
            </p>
            <div className="mt-4 p-3.5 bg-accent-secondary/[0.04] rounded-[0.875rem]">
              <p className="text-xs text-text-muted italic">
                &ldquo;My mentor helped me negotiate a 40% raise. I didn&apos;t
                even know I was underpaid.&rdquo;
              </p>
              <p className="text-[0.6875rem] text-text-muted/70 mt-1">
                — Sarah, data science
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
                50+ companies and nonprofits that walk the talk on supporting
                women in STEM.
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

      {/* ─── FOOTER CTA ─── */}
      <section className="py-14 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-secondary/[0.03] rounded-3xl" />
        <div className="relative z-[1]">
          <h2 className="font-display text-[2.25rem] text-text-heading font-light mb-3">
            Ready to start?
          </h2>
          <p className="text-body-lg text-text-secondary mb-7">
            Join thousands of women discovering their place in STEM.
          </p>
          <Link href="/connect" className="btn-primary text-base">
            Join the community
          </Link>
        </div>
      </section>
    </div>
  );
}
