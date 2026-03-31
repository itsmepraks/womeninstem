'use client';

import dynamic from 'next/dynamic';
import SectionHeading from '@/components/ui/SectionHeading';
import DarkPanel from '@/components/ui/DarkPanel';
import { pioneers } from '@/data/pioneers';

const ConnectMap = dynamic(() => import('./ConnectMap'), { ssr: false });

const mentors = [
  { name: 'Dr. Amara Osei', field: 'AI & Machine Learning', format: '1-on-1', available: true },
  { name: 'Jessica Chen', field: 'Biomedical Engineering', format: 'Group', available: true },
  { name: 'Priya Sharma', field: 'Data Science', format: 'Async', available: false },
];

const events = [
  { title: 'Virtual Coffee Chat — Women in AI', date: 'Apr 5, 2026', type: 'Virtual' },
  { title: 'SWE Regional Meetup — Bay Area', date: 'Apr 12, 2026', type: 'In-person' },
  { title: 'Resume Workshop with Google Engineers', date: 'Apr 18, 2026', type: 'Virtual' },
];

const regionStats = [
  { region: 'North America', count: '180+' },
  { region: 'Europe', count: '120+' },
  { region: 'Asia Pacific', count: '90+' },
  { region: 'Global Remote', count: '110+' },
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
          Find mentors, attend events, and join a community of women who
          understand the journey.
        </p>
      </section>

      <section className="pb-10">
        <SectionHeading title="Global Impact" subtitle="Women in STEM worldwide" />
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-[1.2] rounded-organic overflow-hidden h-[320px]">
            <ConnectMap />
          </div>
          <div className="flex-[0.8]">
            <div className="card-white p-5">
              <p className="text-label mb-3">Top Regions</p>
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

      <section className="pb-10">
        <SectionHeading title="Find a Mentor" accent="Real people, real advice" />
        <div className="space-y-3">
          {mentors.map((m) => (
            <div key={m.name} className="card-white p-6 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-text-heading">{m.name}</h3>
                <p className="text-sm text-text-secondary mt-0.5">{m.field}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs bg-accent-secondary/10 text-accent-primary px-3 py-1 rounded-pill">
                  {m.format}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    m.available ? 'bg-green-500' : 'bg-text-muted/40'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-10">
        <SectionHeading title="Upcoming Events" />
        <div className="space-y-2.5">
          {events.map((e) => (
            <div key={e.title} className="card-white p-5 flex items-center justify-between">
              <div>
                <h3 className="text-body text-text-heading font-medium">{e.title}</h3>
                <p className="text-xs text-text-muted mt-1">{e.date}</p>
              </div>
              <span className="text-xs bg-accent-gold/10 text-text-muted px-3 py-1 rounded-pill">
                {e.type}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-10">
        <SectionHeading title="Stand on their shoulders" subtitle="Pioneers linked to modern mentors" />
        <DarkPanel className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pioneers.slice(0, 2).map((p) => (
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
