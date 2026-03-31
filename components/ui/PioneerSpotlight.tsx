import type { Pioneer } from '@/data/pioneers';

interface PioneerSpotlightProps {
  pioneer: Pioneer;
  totalCount?: number;
  index?: number;
}

export default function PioneerSpotlight({
  pioneer,
  totalCount = 32,
  index = 1,
}: PioneerSpotlightProps) {
  return (
    <div className="card-white p-9 flex items-center gap-7 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-accent-gold/[0.06]" />

      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-bg-warm to-bg-deep flex-shrink-0 flex items-center justify-center">
        <span className="font-display text-[2rem] text-accent-primary">
          {pioneer.initial}
        </span>
      </div>

      <div className="flex-1 relative z-[1]">
        <p className="text-label mb-1.5">Pioneer Spotlight · {pioneer.years}</p>
        <h3 className="font-display text-heading text-text-heading">
          {pioneer.name}
        </h3>
        <p className="text-body text-text-body mt-1.5 leading-relaxed">
          {pioneer.description}
        </p>
      </div>

      <div className="flex-shrink-0 text-right">
        {pioneer.link ? (
          <a
            href={pioneer.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-primary font-medium underline underline-offset-4 hover:text-accent-secondary transition-colors"
          >
            Read her story →
          </a>
        ) : (
          <span className="text-sm text-text-muted">
            {pioneer.field}
          </span>
        )}
        <p className="text-xs text-text-muted mt-1.5">
          {index} of {totalCount} pioneers
        </p>
      </div>
    </div>
  );
}
