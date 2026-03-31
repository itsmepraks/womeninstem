import StatCard from '@/components/ui/StatCard';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight max-w-[600px]">
          Built by a woman in STEM,{' '}
          <em className="italic text-accent-primary">for women in STEM</em>
        </h1>
        <p className="text-body-lg text-text-body mt-4 max-w-[540px] leading-relaxed">
          STEMSpark started because finding resources, mentors, and community as
          a woman in tech shouldn&apos;t require 47 browser tabs. Everything you
          need, in one place, curated by people who understand the journey.
        </p>
      </section>

      <section className="pb-10">
        <div className="card-white p-8 md:p-10">
          <h2 className="font-display text-display text-text-heading mb-4">
            The story
          </h2>
          <div className="space-y-4 text-body text-text-body leading-relaxed">
            <p>
              When I started my career in tech, the hardest part wasn&apos;t the
              code — it was feeling like I was the only one navigating it.
              Scholarships existed but were buried. Mentors existed but were hard
              to find. Communities existed but were scattered across platforms.
            </p>
            <p>
              STEMSpark is the resource I wish I had. A single, curated hub
              where women at any stage — students, career changers, senior
              professionals — can find what they need without the noise.
            </p>
            <p>
              Every resource is vetted. Every mentor is real. Every piece of
              content is written with the belief that the next breakthrough in
              science will come from someone who almost didn&apos;t think she
              belonged.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-accent-primary/[0.06]">
            <p className="text-sm text-text-heading font-semibold">Prakriti Bista</p>
            <p className="text-xs text-text-muted mt-0.5">
              Builder ·{' '}
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

      <section className="pb-10">
        <h2 className="font-display text-display text-text-heading mb-6">
          By the numbers
        </h2>
        <div className="relative h-[200px]">
          <div className="absolute left-0 top-0 w-[200px]">
            <StatCard value="500+" label="resources curated" rotation={-1.5} />
          </div>
          <div className="absolute left-[220px] top-5 w-[200px] hidden md:block">
            <StatCard value="120+" label="mentors in the network" rotation={1} />
          </div>
          <div className="absolute right-0 top-2 w-[200px] hidden md:block">
            <StatCard value="50+" label="partner organizations" rotation={2} />
          </div>
        </div>
      </section>
    </div>
  );
}
