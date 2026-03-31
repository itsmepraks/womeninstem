interface CompanyCardProps {
  name: string;
  initial: string;
  description: string;
  members?: string;
  cost?: string;
  url?: string;
}

export default function CompanyCard({
  name,
  initial,
  description,
  members,
  cost,
  url,
}: CompanyCardProps) {
  const Wrapper = url ? 'a' : 'div';
  const linkProps = url
    ? { href: url, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="card-white p-6 group hover:shadow-card-hover transition-shadow block"
    >
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-9 h-9 rounded-[0.625rem] flex items-center justify-center text-sm font-bold text-white bg-accent-primary">
          {initial}
        </div>
        <h3 className="text-base font-semibold text-text-heading">{name}</h3>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      <div className="flex items-center gap-2 mt-2.5 flex-wrap">
        {members && (
          <span className="text-xs text-accent-primary font-medium">{members}</span>
        )}
        {cost && (
          <span className="text-xs text-text-muted">{cost}</span>
        )}
      </div>
      {url && (
        <span className="inline-block mt-2 text-xs text-accent-primary font-medium group-hover:text-accent-secondary transition-colors">
          Visit website →
        </span>
      )}
    </Wrapper>
  );
}
