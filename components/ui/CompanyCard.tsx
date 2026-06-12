import TrustBadges from './TrustBadges';
import type { FreshnessRecord, ResourceMetadata } from '@/types/freshness';

interface CompanyCardProps {
  name: string;
  initial: string;
  description: string;
  members?: string;
  cost?: string;
  url?: string;
  freshness?: FreshnessRecord;
  metadata?: ResourceMetadata;
  region?: string;
}

export default function CompanyCard({
  name,
  initial,
  description,
  members,
  cost,
  url,
  freshness,
  metadata,
  region,
}: CompanyCardProps) {
  const Wrapper = url ? 'a' : 'div';
  const linkProps = url ? { href: url, target: '_blank' as const, rel: 'noopener noreferrer' } : {};

  return (
    <Wrapper
      {...linkProps}
      className="card-white group p-6 transition-shadow hover:shadow-card-hover"
    >
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-[0.625rem] bg-accent-primary text-sm font-bold text-white">
          {initial}
        </div>
        <h3 className="text-base font-semibold text-text-heading">{name}</h3>
      </div>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
      <TrustBadges
        freshness={freshness}
        qualityInput={{
          id: name,
          url,
          description,
          cost,
          region,
          metadata,
        }}
        className="mt-3"
      />
      <div className="mt-2.5 flex flex-wrap items-center gap-2">
        {members && <span className="text-xs font-medium text-accent-primary">{members}</span>}
        {cost && <span className="text-xs text-text-muted">{cost}</span>}
      </div>
      {url && (
        <span className="mt-2 inline-block text-xs font-medium text-accent-primary transition-colors group-hover:text-accent-secondary">
          Visit website →
        </span>
      )}
    </Wrapper>
  );
}
