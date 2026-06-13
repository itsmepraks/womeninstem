'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import StatCard from '@/components/ui/StatCard';
import LiveFeed from '@/components/ui/LiveFeed';
import PageTransition from '@/components/ui/PageTransition';
import { heroStats, heroHighlight } from '@/data/stats';
import { courses } from '@/data/courses';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function HomePage() {
  const stat1 = heroStats[0]!;
  const stat2 = heroStats[1]!;
  const courseCount = courses.length;

  return (
    <PageTransition>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-[880px] px-6 md:px-10"
      >
        {/* ─── HERO ─── */}
        <motion.section variants={fadeUp} className="max-w-[640px] pb-10 pt-16 md:pt-24">
          <p className="mb-3.5 text-label font-semibold tracking-[0.19em] text-accent-primary">
            Women in STEM
          </p>
          <h1 className="mb-1.5 font-display text-display-lg text-text-heading">
            Find what you need,{' '}
            <em className="inline-block -rotate-[1.5deg] font-black text-accent-primary">
              in one place
            </em>
          </h1>
          <div className="accent-underline mb-5 mt-4" />
          <p className="mb-8 max-w-[460px] text-body-lg text-text-body">
            Scholarships, courses, mentors, orgs. Free to browse, no sign-up.
          </p>
          <div className="flex items-center gap-3.5">
            <Link href="/pathfinder" className="btn-primary">
              Start Pathfinder
            </Link>
            <Link href="/resources" className="btn-secondary">
              Explore resources
            </Link>
            <Link href="/about" className="btn-secondary">
              How it works
            </Link>
          </div>
        </motion.section>

        {/* ─── FLOATING STAT CARDS ─── */}
        {/* Mobile: stacked cards. Desktop: floating positioned */}
        <motion.section variants={fadeUp} className="mb-5">
          {/* Mobile layout */}
          <div className="flex flex-col gap-3 md:hidden">
            <StatCard value={stat1.value} label={stat1.label} detail={stat1.source} />
            <StatCard value={stat2.value} label={stat2.label} detail={stat2.source} />
            <div className="card-dark p-6">
              <p className="font-display text-[0.9375rem] leading-relaxed text-surface-dark-text/80">
                {heroHighlight.text}
              </p>
              <p className="mt-2 text-sm text-surface-dark-text/45">{heroHighlight.source}</p>
            </div>
          </div>
          {/* Desktop layout */}
          <div className="relative hidden h-[220px] md:block">
            <div className="absolute left-0 top-2.5 w-[240px]">
              <StatCard
                value={stat1.value}
                label={stat1.label}
                detail={stat1.source}
                rotation={stat1.rotation}
              />
            </div>
            <div className="absolute left-[270px] top-7 w-[220px]">
              <StatCard
                value={stat2.value}
                label={stat2.label}
                detail={stat2.source}
                rotation={stat2.rotation}
              />
            </div>
            <div
              className="card-dark absolute right-0 top-0 w-[280px] p-7"
              style={{ transform: `rotate(${heroHighlight.rotation}deg)` }}
            >
              <p className="font-display text-[1.0625rem] leading-relaxed text-surface-dark-text/80">
                {heroHighlight.text}
              </p>
              <p className="mt-3 text-sm text-surface-dark-text/45">{heroHighlight.source}</p>
            </div>
          </div>
        </motion.section>

        {/* ─── WHAT YOU'LL FIND HERE ─── */}
        <motion.section variants={fadeUp} className="pb-2 pt-12">
          <h2 className="mb-1.5 font-display text-display text-text-heading">
            What you&apos;ll find here
          </h2>
        </motion.section>

        {/* Feature blocks — varied layout, NOT a grid */}
        <motion.section variants={fadeUp} className="space-y-4 py-6">
          <div className="card-white p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-[560px]">
                <h3 className="mb-2 font-display text-heading text-text-heading">Pathfinder</h3>
                <p className="text-body leading-relaxed text-text-body">
                  Answer five private questions and get matched with scholarships, courses,
                  communities, events, and career resources.
                </p>
                <Link
                  href="/pathfinder"
                  className="mt-3 inline-block text-sm font-semibold text-accent-primary transition-colors hover:text-accent-secondary"
                >
                  Build your roadmap →
                </Link>
              </div>
              <div className="flex flex-wrap gap-1.5 md:max-w-[220px] md:justify-end">
                {['No login', 'Local only', 'Freshness checked', 'Roadmap'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-accent-secondary/[0.06] px-3 py-1 text-xs text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Full-width: Learning Hub */}
          <div className="card-white flex items-center gap-8 p-8">
            <div className="flex-1">
              <h3 className="mb-2 font-display text-heading text-text-heading">Learning Hub</h3>
              <p className="text-body leading-relaxed text-text-body">
                Free courses and bootcamps, sorted by field. No paid junk.
              </p>
              <Link
                href="/learning"
                className="mt-3 inline-block text-sm font-semibold text-accent-primary transition-colors hover:text-accent-secondary"
              >
                Browse courses →
              </Link>
            </div>
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-[50%_50%_50%_20%] bg-gradient-to-br from-accent-secondary/10 to-accent-gold/15">
              <span className="font-display text-4xl font-light tabular-nums text-accent-primary">
                {courseCount}
              </span>
            </div>
          </div>

          {/* Side-by-side: Connect + Organizations */}
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Connect — light card with quote */}
            <div className="card-white flex-[1.2] p-8">
              <h3 className="mb-2 font-display text-heading text-text-heading">Connect</h3>
              <p className="text-body leading-relaxed text-text-body">
                Mentorship platforms, conferences, events. We link to them. We don&apos;t run them.
              </p>
              <div className="mt-4 rounded-[0.875rem] bg-accent-secondary/[0.04] p-3.5">
                <p className="text-xs italic text-text-muted">
                  Women in computing are 45% more likely to leave than men. Companies with
                  gender-diverse teams are 15% more likely to outperform competitors.
                </p>
                <p className="mt-1 text-xs text-text-muted/90">Center for Talent Innovation</p>
              </div>
            </div>

            {/* Organizations — dark card with tags */}
            <div className="card-dark flex flex-[0.8] flex-col justify-between p-8">
              <div>
                <h3 className="mb-2 font-display text-heading text-surface-dark-text">
                  Organizations
                </h3>
                <p className="text-body leading-relaxed text-surface-dark-text/60">
                  Professional orgs for women in tech, engineering, science, and math.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {['Tech', 'Biotech', 'Research', 'Engineering', 'Aerospace'].map((tag) => (
                  <span
                    key={tag}
                    className="cursor-default rounded-md bg-surface-dark-text/[0.06] px-3 py-1 text-xs text-surface-dark-text/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ─── LIVE PREVIEW ─── */}
        <motion.section variants={fadeUp} className="py-8">
          <LiveFeed
            endpoint="/api/resources/jobs"
            title="What's new"
            limit={3}
            regionFilter="Global"
          />
          <Link
            href="/resources#live"
            className="mt-4 inline-block text-sm font-medium text-accent-primary underline underline-offset-4 transition-colors hover:text-accent-secondary"
          >
            See everything →
          </Link>
        </motion.section>

        {/* ─── FOOTER CTA ─── */}
        <motion.section variants={fadeUp} className="relative py-14 text-center">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-accent-secondary/[0.03]" />
          <div className="relative z-[1]">
            <h2 className="mb-3 font-display text-[2.25rem] font-light text-text-heading">
              That&apos;s what we&apos;ve got
            </h2>
            <p className="mb-7 text-body-lg text-text-secondary">
              No logins, no ads. Just a directory that works.
            </p>
            <Link href="/resources" className="btn-primary text-base">
              Browse resources
            </Link>
          </div>
        </motion.section>
      </motion.div>
    </PageTransition>
  );
}
