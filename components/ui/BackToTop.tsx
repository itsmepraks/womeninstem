'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-surface-dark text-bg-primary flex items-center justify-center shadow-card hover:bg-text-heading transition-colors focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:outline-none"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
