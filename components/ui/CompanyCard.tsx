interface CompanyCardProps {
  name: string;
  initial: string;
  color: string;
  description: string;
}

export default function CompanyCard({ name, initial, color, description }: CompanyCardProps) {
  return (
    <div className="card-white p-6">
      <div className="flex items-center gap-2.5 mb-3">
        <div
          className="w-9 h-9 rounded-[0.625rem] flex items-center justify-center text-sm font-bold text-white"
          style={{ background: color }}
        >
          {initial}
        </div>
        <h3 className="text-base font-semibold text-text-heading">{name}</h3>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      <span className="inline-block mt-2.5 text-xs text-accent-primary font-medium cursor-pointer hover:text-accent-secondary transition-colors">
        View roles →
      </span>
    </div>
  );
}
