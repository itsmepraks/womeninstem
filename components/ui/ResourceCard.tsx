interface ResourceCardProps {
  title: string;
  description: string;
  amount?: string;
  url?: string;
}

export default function ResourceCard({
  title,
  description,
  amount,
  url,
}: ResourceCardProps) {
  const Wrapper = url ? 'a' : 'div';
  const linkProps = url
    ? { href: url, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="card-white p-6 flex items-center gap-5 group hover:shadow-card-hover transition-shadow"
    >
      <div className="w-12 h-12 rounded-[0.875rem] bg-gradient-to-br from-accent-secondary/10 to-accent-gold/10 flex-shrink-0 flex items-center justify-center">
        <span className="font-display text-xl text-accent-primary w-full text-center">$</span>
      </div>
      <div className="flex-1">
        <h3 className="text-[1.0625rem] font-semibold text-text-heading mb-0.5">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {amount && <span className="text-accent-primary font-medium">{amount}</span>}
          {amount && ' — '}
          {description}
        </p>
      </div>
      {url && (
        <span className="text-xs text-accent-primary font-medium flex-shrink-0 group-hover:text-accent-secondary transition-colors">
          Apply →
        </span>
      )}
    </Wrapper>
  );
}
