interface DarkPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function DarkPanel({ children, className = '' }: DarkPanelProps) {
  return (
    <div className={`card-dark p-8 ${className}`}>
      {children}
    </div>
  );
}
