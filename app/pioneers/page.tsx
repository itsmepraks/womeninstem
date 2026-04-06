'use client';

import PioneerSpotlight from '@/components/ui/PioneerSpotlight';
import LiveFeed from '@/components/ui/LiveFeed';
import { pioneers } from '@/data/pioneers';

export default function PioneersPage() {
  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          Pioneers <em className="italic text-accent-primary">who led the way</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[500px]">
          Real people. Click any name to read more.
        </p>
      </section>

      {/* Live — fetched from Wikipedia/Wikidata */}
      <section className="pb-10">
        <LiveFeed
          endpoint="/api/resources/pioneers"
          title="From Wikipedia"
          limit={20}
          emptyMessage="Loading women in STEM from Wikipedia..."
        />
      </section>

      {/* Curated profiles — hand-written with more detail */}
      <section className="pb-4">
        <h2 className="font-display text-display text-text-heading mb-2">Curated profiles</h2>
        <p className="text-sm text-text-muted mb-4">
          Hand-written. The list above pulls from Wikipedia.
        </p>
      </section>

      <section className="space-y-4 pb-10">
        {pioneers.map((pioneer, i) => (
          <PioneerSpotlight
            key={pioneer.id}
            pioneer={pioneer}
            totalCount={pioneers.length}
            index={i + 1}
          />
        ))}
      </section>

      {/* Disclaimer */}
      <section className="pb-10">
        <div className="p-5 bg-accent-gold/[0.04] rounded-organic border border-accent-gold/[0.08]">
          <p className="text-sm text-text-muted">
            The &quot;From Wikipedia&quot; section pulls automatically from Wikidata every 24 hours.
            Curated profiles are hand-written and updated less frequently.
          </p>
        </div>
      </section>
    </div>
  );
}
