import { formatFreshnessBadge } from '@/lib/freshness';
import { scoreResourceQuality } from '@/lib/resourceMetadata';
import type { FreshnessRecord, ResourceMetadata } from '@/types/freshness';

interface TrustBadgesProps {
  freshness?: FreshnessRecord;
  qualityInput?: {
    id: string;
    url?: string;
    description?: string;
    amount?: string;
    cost?: string;
    region?: string;
    deadline?: string;
    metadata?: ResourceMetadata;
  };
  className?: string;
}

const toneClasses = {
  good: 'bg-emerald-100 text-emerald-900',
  warn: 'bg-amber-100 text-amber-900',
  muted: 'bg-accent-secondary/10 text-text-muted',
};

export default function TrustBadges({ freshness, qualityInput, className = '' }: TrustBadgesProps) {
  const freshnessBadge = formatFreshnessBadge(freshness);
  const quality = qualityInput
    ? scoreResourceQuality({ ...qualityInput, freshness })
    : undefined;

  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      <span className={`text-[0.6875rem] leading-none font-medium px-2.5 py-1.5 rounded-pill ${toneClasses[freshnessBadge.tone]}`}>
        {freshnessBadge.label}
      </span>
      {quality && (
        <span
          className="text-[0.6875rem] leading-none font-medium px-2.5 py-1.5 rounded-pill bg-accent-secondary/10 text-accent-primary"
          title={quality.reason}
        >
          {quality.label}
        </span>
      )}
    </div>
  );
}
