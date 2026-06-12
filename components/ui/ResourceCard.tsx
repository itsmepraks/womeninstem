import BookmarkButton from './BookmarkButton';
import TrustBadges from './TrustBadges';
import type { BookmarkType } from '@/lib/useBookmarks';
import type { FreshnessRecord, ResourceMetadata } from '@/types/freshness';

interface ResourceCardProps {
  title: string;
  description: string;
  amount?: string;
  url?: string;
  daysLeft?: number;
  deadlineLabel?: string;
  bookmark?: { key: string; type: BookmarkType };
  freshness?: FreshnessRecord;
  metadata?: ResourceMetadata;
  region?: string;
}

export default function ResourceCard({
  title,
  description,
  amount,
  url,
  daysLeft,
  deadlineLabel,
  bookmark,
  freshness,
  metadata,
  region,
}: ResourceCardProps) {
  const hasDeadline = typeof daysLeft === 'number' && deadlineLabel;
  let badgeText = '';
  let badgeClass = '';
  if (hasDeadline) {
    if (daysLeft! <= 7) {
      badgeText = `${daysLeft} days left`;
      badgeClass = 'bg-red-100 text-red-900';
    } else if (daysLeft! <= 30) {
      badgeText = `${daysLeft} days left`;
      badgeClass = 'bg-accent-secondary/10 text-accent-primary';
    } else {
      badgeText = deadlineLabel!;
      badgeClass = 'text-text-muted';
    }
  }

  return (
    <div className="card-white group relative flex items-center gap-4 p-6 transition-shadow hover:shadow-card-hover md:gap-5 md:p-5">
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-[1] rounded-organic focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
          aria-label={`${title} — open`}
        />
      )}
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[0.875rem] bg-gradient-to-br from-accent-secondary/10 to-accent-gold/10">
        <span className="w-full text-center font-display text-xl text-accent-primary">$</span>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="mb-0.5 text-card-title text-text-heading">{title}</h3>
        <p className="text-sm leading-relaxed text-text-secondary">
          {amount && <span className="font-medium text-accent-primary">{amount}</span>}
          {amount && ' · '}
          {description}
        </p>
        <TrustBadges
          freshness={freshness}
          qualityInput={{
            id: bookmark?.key ?? title,
            url,
            description,
            amount,
            region,
            deadline: deadlineLabel,
            metadata,
          }}
          className="mt-2"
        />
      </div>
      {hasDeadline && (
        <span
          className={`flex-shrink-0 rounded-pill px-3 py-1 text-xs font-medium tabular-nums ${badgeClass}`}
        >
          {badgeText}
        </span>
      )}
      {url && !hasDeadline && (
        <span className="flex-shrink-0 text-xs font-medium text-accent-primary transition-colors group-hover:text-accent-secondary">
          Apply →
        </span>
      )}
      {bookmark && url && (
        <BookmarkButton
          item={{
            key: bookmark.key,
            type: bookmark.type,
            title,
            subtitle: amount ? `${amount} · ${description}` : description,
            amount,
            url,
          }}
        />
      )}
    </div>
  );
}
