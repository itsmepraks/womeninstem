import PioneerSpotlight from '@/components/ui/PioneerSpotlight';
import { pioneers } from '@/data/pioneers';

export default function PioneersPage() {
  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          Pioneers <em className="italic text-accent-primary">who led the way</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[500px]">
          The women who proved that science has no gender. Their stories are the
          foundation everything here is built on.
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
    </div>
  );
}
