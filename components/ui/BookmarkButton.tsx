'use client';

import { Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBookmarks, type BookmarkItem } from '@/lib/useBookmarks';

interface BookmarkButtonProps {
  item: Omit<BookmarkItem, 'savedAt'>;
  size?: number;
}

export default function BookmarkButton({ item, size = 16 }: BookmarkButtonProps) {
  const { has, toggle, hydrated } = useBookmarks();
  const saved = hydrated && has(item.key);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(item);
      }}
      aria-label={saved ? 'Remove from saved' : 'Save for later'}
      aria-pressed={saved}
      className="relative z-[2] w-10 h-10 -m-2 flex items-center justify-center rounded-full text-text-muted hover:text-accent-primary hover:bg-accent-secondary/10 active:scale-[0.96] [transition:color_0.2s,background-color_0.2s,transform_0.15s] focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
    >
      <motion.span
        key={saved ? 'on' : 'off'}
        initial={false}
        animate={{ scale: saved ? [1, 1.18, 1] : 1 }}
        transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
        className="block"
      >
        <Bookmark
          size={size}
          className={saved ? 'text-accent-primary' : ''}
          fill={saved ? 'currentColor' : 'none'}
          strokeWidth={saved ? 1.75 : 2}
        />
      </motion.span>
    </button>
  );
}
