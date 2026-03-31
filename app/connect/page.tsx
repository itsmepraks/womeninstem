'use client';

import dynamic from 'next/dynamic';
import SectionHeading from '@/components/ui/SectionHeading';
import DarkPanel from '@/components/ui/DarkPanel';
import { pioneers } from '@/data/pioneers';
import { mentorshipPlatforms, conferences } from '@/data/resources';

const ConnectMap = dynamic(() => import('./ConnectMap'), { ssr: false });

const regionStats = [
  { region: 'North America', count: '15+ orgs' },
  { region: 'Europe', count: '8+ orgs' },
  { region: 'Asia Pacific', count: '5+ orgs' },
  { region: 'Global / Remote', count: '20+ orgs' },
];

export default function ConnectPage() {
  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          You don&apos;t have to{' '}
          <em className="italic text-accent-primary">do it alone</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[500px]">
          Find mentors, attend conferences, and join a global network of women
          who understand the journey.
        </p>
      </section>

      {/* Interactive Map */}
      <section className="pb-10">
        <SectionHeading title="Global Impact" subtitle="Women in STEM organizations worldwide" />
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-[1.2] rounded-organic overflow-hidden h-[320px]">
            <ConnectMap />
          </div>
          <div className="flex-[0.8]">
            <div className="card-white p-5">
              <p className="text-label mb-3">By Region</p>
              <div className="space-y-0">
                {regionStats.map((r, i) => (
                  <div
                    key={r.region}
                    className={`flex justify-between py-2.5 text-sm ${
                      i < regionStats.length - 1
                        ? 'border-b border-accent-primary/[0.05]'
                        : ''
                    }`}
                  >
                    <span className="text-text-heading font-semibold">{r.region}</span>
                    <span className="text-accent-primary font-bold">{r.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Platforms — real platforms, not fake people */}
      <section className="pb-10">
        <SectionHeading title="Mentorship Platforms" accent="Find real guidance" />
        <div className="space-y-3">
          {mentorshipPlatforms.map((platform) => (
            <div key={platform.id} className="card-white p-6 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-text-heading">{platform.name}</h3>
                <p className="text-sm text-text-secondary mt-0.5">{platform.description}</p>
              </div>
              <span className="text-xs bg-accent-secondary/10 text-accent-primary px-3 py-1 rounded-pill flex-shrink-0">
                {platform.cost}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Conferences — real conferences from RESOURCES.md */}
      <section className="pb-10">
        <SectionHeading title="Major Conferences" accent="Network in person" />
        <div className="space-y-2.5">
          {conferences.slice(0, 7).map((conf) => (
            <div key={conf.id} className="card-white p-5 flex items-center justify-between">
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pioneers */}
      <section className="pb-10">
        <SectionHeading title="Stand on their shoulders" subtitle="Pioneers who paved the way" />
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
            </div>
          ))}
        </DarkPanel>
      </section>
    </div>
  );
}
