interface ResourceCardProps {
  title: string;
  description: string;
  amount?: string;
  url?: string;
  daysLeft?: number;
  deadlineLabel?: string;
}

export default function ResourceCard({
  title,
  description,
  amount,
  url,
  daysLeft,
  deadlineLabel,
}: ResourceCardProps) {
  const Wrapper = url ? 'a' : 'div';
  const linkProps = url
    ? { href: url, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

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
    <Wrapper
      {...linkProps}
      className="card-white p-6 md:p-5 flex items-center gap-4 md:gap-5 group hover:shadow-card-hover transition-shadow"
    >
      <div className="w-12 h-12 rounded-[0.875rem] bg-gradient-to-br from-accent-secondary/10 to-accent-gold/10 flex-shrink-0 flex items-center justify-center">
        <span className="font-display text-xl text-accent-primary w-full text-center">$</span>
      </div>
      <div className="flex-1">
        <h3 className="text-card-title text-text-heading mb-0.5">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {amount && <span className="text-accent-primary font-medium">{amount}</span>}
          {amount && ' · '}
          {description}
        </p>
      </div>
      {hasDeadline && (
        <span className={`text-xs font-medium flex-shrink-0 px-3 py-1 rounded-pill tabular-nums ${badgeClass}`}>
          {badgeText}
        </span>
      )}
      {url && !hasDeadline && (
        <span className="text-xs text-accent-primary font-medium flex-shrink-0 group-hover:text-accent-secondary transition-colors">
          Apply →
        </span>
      )}
    </Wrapper>
  );
}
