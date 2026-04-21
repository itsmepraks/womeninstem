'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bookmark, Sparkles } from 'lucide-react';
import { CELEBRATE_EVENT, type CelebrationDetail } from '@/lib/useBookmarks';

interface ToastState {
  id: number;
  kind: 'first' | 'milestone';
  count: number;
}

const MILESTONE_COPY: Record<number, { title: string; body: string }> = {
  5: { title: 'Five saved', body: 'Keep going.' },
  10: { title: 'Ten saved', body: 'Double digits.' },
  25: { title: 'Twenty-five saved', body: 'Solid shortlist.' },
  50: { title: 'Fifty saved', body: 'Nice library.' },
  100: { title: 'One hundred saved', body: "That's a lot." },
};

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function BookmarkCelebration() {
  const [toast, setToast] = useState<ToastState | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(prefersReducedMotion());
    let timer: ReturnType<typeof setTimeout> | undefined;

    function handle(e: Event) {
      const detail = (e as CustomEvent<CelebrationDetail>).detail;
      if (!detail) return;
      const id = Date.now();
      setToast({ id, kind: detail.kind, count: detail.count });
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setToast(null), 3800);
    }

    window.addEventListener(CELEBRATE_EVENT, handle);
    return () => {
      window.removeEventListener(CELEBRATE_EVENT, handle);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const content = !toast
    ? null
    : toast.kind === 'first'
    ? { title: 'First save', body: "It's kept here. Come back anytime." }
    : MILESTONE_COPY[toast.count] ?? null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 z-50 pointer-events-none"
    >
      <AnimatePresence>
        {toast && content && (
          <motion.div
            key={toast.id}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="pointer-events-auto card-white px-5 py-4 flex items-center gap-3 min-w-[260px] max-w-[360px] shadow-card-hover"
            role="status"
          >
            <div className="relative w-10 h-10 rounded-full bg-accent-secondary/10 flex items-center justify-center text-accent-primary flex-shrink-0">
              {toast.kind === 'first' ? (
                <Bookmark size={16} fill="currentColor" strokeWidth={1.75} />
              ) : (
                <Sparkles size={16} />
              )}
              {!reduced && (
                <motion.span
                  aria-hidden
                  initial={{ scale: 0, opacity: 0.45 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.2, 0, 0, 1] }}
                  className="absolute inset-0 rounded-full border border-accent-primary/40"
                />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-card-title text-text-heading">{content.title}</p>
              <p className="text-xs text-text-muted mt-0.5">{content.body}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
