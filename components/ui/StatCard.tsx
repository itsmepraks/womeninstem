interface StatCardProps {
  value: string;
  label: string;
  detail?: string;
  rotation?: number;
  variant?: 'light' | 'dark';
}

export default function StatCard({
  value,
  label,
  detail,
  rotation = 0,
  variant = 'light',
}: StatCardProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`rounded-organic-lg p-7 ${
        isDark ? 'card-dark' : 'card-white'
      }`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className={`font-display text-[2.5rem] font-bold leading-none ${
          isDark ? 'text-surface-dark-text' : 'text-accent-primary'
        }`}
      >
        {value}
      </div>
      <div
        className={`text-body mt-1 ${
          isDark ? 'text-surface-dark-text/60' : 'text-text-body'
        }`}
      >
        {label}
      </div>
      {detail && (
        <div
          className={`text-xs mt-3 ${
            isDark ? 'text-surface-dark-text/40' : 'text-text-muted'
          }`}
        >
          {detail}
        </div>
      )}
    </div>
  );
}
