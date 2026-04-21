import type { Metadata } from 'next';
import PageTransition from '@/components/ui/PageTransition';
import {
  heroStats,
  workforceStats,
  educationStats,
  retentionStats,
  economicStats,
  challenges,
} from '@/data/stats';
import type { Stat } from '@/data/stats';

export const metadata: Metadata = {
  title: 'Impact · stem·spark',
  description: 'Real statistics about women in STEM from published research.',
};

function ImpactStat({ stat }: { stat: Stat }) {
  return (
    <div className="card-white p-5 md:p-6">
      <div className="font-display text-2xl md:text-3xl text-accent-primary font-bold leading-tight tabular-nums">
        {stat.value}
      </div>
      <p className="text-sm text-text-body mt-1.5 leading-snug">{stat.label}</p>
      {stat.source && (
        <p className="text-[11px] text-text-muted mt-2">{stat.source}</p>
      )}
    </div>
  );
}

export default function ImpactPage() {
  return (
    <PageTransition>
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          The <em className="italic text-accent-primary">numbers</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[540px]">
          Real data about women in STEM, sourced from published research,
          government agencies, and peer-reviewed studies.
        </p>
      </section>

      {/* Hero highlight stats */}
      <section className="pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {heroStats.map((stat) => (
            <div key={stat.label} className="card-dark p-8">
              <div className="font-display text-4xl md:text-5xl text-surface-dark-text font-bold tabular-nums">
                {stat.value}
              </div>
              <p className="text-body text-surface-dark-text/70 mt-2">{stat.label}</p>
              {stat.source && (
                <p className="text-xs text-surface-dark-text/40 mt-3">{stat.source}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Workforce Stats */}
      <section className="pb-12">
        <h2 className="font-display text-display text-text-heading mb-2">
          Workforce participation
        </h2>
        <p className="text-body text-text-body mb-5">
          Women make up half the total US workforce but remain underrepresented
          across most STEM fields.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {workforceStats.map((stat) => (
            <ImpactStat key={stat.label} stat={stat} />
          ))}
        </div>
      </section>

      {/* Education Stats */}
      <section className="pb-12">
        <h2 className="font-display text-display text-text-heading mb-2">
          Education pipeline
        </h2>
        <p className="text-body text-text-body mb-5">
          Women earn the majority of all bachelor&apos;s degrees, but the numbers
          drop sharply in computing and engineering.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {educationStats.map((stat) => (
            <ImpactStat key={stat.label} stat={stat} />
          ))}
        </div>
      </section>

      {/* Retention Stats — alarming */}
      <section className="pb-12">
        <h2 className="font-display text-display text-text-heading mb-2">
          Retention <em className="italic text-accent-primary">crisis</em>
        </h2>
        <p className="text-body text-text-body mb-5">
          Even when women enter STEM, more than half leave mid-career. The
          attrition rate dwarfs every other professional field.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {retentionStats.map((stat) => (
            <div key={stat.label} className="card-white p-6 border-l-[3px] border-l-accent-primary">
              <div className="font-display text-3xl text-accent-primary font-bold tabular-nums">
                {stat.value}
              </div>
              <p className="text-sm text-text-body mt-1.5 leading-snug">{stat.label}</p>
              {stat.source && (
                <p className="text-[11px] text-text-muted mt-2">{stat.source}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Economic Impact Stats */}
      <section className="pb-12">
        <h2 className="font-display text-display text-text-heading mb-2">
          Economic impact
        </h2>
        <p className="text-body text-text-body mb-5">
          Gender parity in STEM is not just a fairness issue. It is an economic
          imperative worth trillions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {economicStats.map((stat) => (
            <ImpactStat key={stat.label} stat={stat} />
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="pb-12">
        <h2 className="font-display text-display text-text-heading mb-2">
          The 8 key challenges
        </h2>
        <p className="text-body text-text-body mb-5">
          Research identifies eight systemic barriers that drive women out of STEM
          at every stage, from childhood through senior leadership.
        </p>
        <div className="space-y-3">
          {challenges.map((challenge) => (
            <details key={challenge.title} className="card-white group">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-text-heading">
                    {challenge.title}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1">
                    {challenge.description}
                  </p>
                </div>
                <span className="text-accent-primary text-lg flex-shrink-0 ml-4 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <ul className="space-y-2">
                  {challenge.stats.map((s) => (
                    <li key={s} className="flex gap-3 text-sm text-text-body">
                      <span className="text-accent-primary mt-0.5 flex-shrink-0">&bull;</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Source note */}
      <section className="pb-16">
        <div className="card-white p-6 text-center">
          <p className="text-xs text-text-muted leading-relaxed">
            All statistics sourced from published research. See our{' '}
            <a
              href="/about"
              className="text-accent-primary underline underline-offset-2 hover:text-accent-secondary transition-colors"
            >
              About page
            </a>{' '}
            for data methodology.
          </p>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}
