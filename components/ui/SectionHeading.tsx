interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: string;
}

export default function SectionHeading({ title, subtitle, accent }: SectionHeadingProps) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-3">
        <h2 className="font-display text-display text-text-heading">{title}</h2>
        {accent && <span className="text-sm font-body text-accent-primary">{accent}</span>}
      </div>
      {subtitle && (
        <p className="text-body-lg text-text-secondary mt-1">{subtitle}</p>
      )}
    </div>
  );
}
