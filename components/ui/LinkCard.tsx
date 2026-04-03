interface LinkCardProps {
  url?: string;
  className?: string;
  children: React.ReactNode;
}

export default function LinkCard({ url, className = '', children }: LinkCardProps) {
  const Wrapper = url ? 'a' : 'div';
  const linkProps = url
    ? { href: url, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={`card-white group hover:shadow-card-hover transition-shadow ${className}`}
    >
      {children}
    </Wrapper>
  );
}
