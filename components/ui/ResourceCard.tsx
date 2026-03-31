interface ResourceCardProps {
  title: string;
  description: string;
  deadline?: string;
  daysLeft?: number;
}

export default function ResourceCard({
  title,
  description,
  deadline,
  daysLeft,
}: ResourceCardProps) {
  return (
    <div className="card-white p-6 flex items-center gap-5">
      <div className="w-13 h-13 rounded-[0.875rem] bg-gradient-to-br from-accent-secondary/10 to-accent-gold/10 flex-shrink-0 flex items-center justify-center">
        <span className="font-display text-xl text-accent-primary w-full text-center">$</span>
      </div>
      <div className="flex-1">
        <h3 className="text-[1.0625rem] font-semibold text-text-heading mb-0.5">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
      {deadline && (
        <div className="flex-shrink-0 text-right">
          <div className="text-sm font-semibold text-accent-primary">{deadline}</div>
          {daysLeft !== undefined && (
            <div className="text-xs text-text-muted">{daysLeft} days left</div>
          )}
        </div>
      )}
    </div>
  );
}
