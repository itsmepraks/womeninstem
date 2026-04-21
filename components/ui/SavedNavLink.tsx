'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bookmark } from 'lucide-react';
import { useBookmarks } from '@/lib/useBookmarks';

export default function SavedNavLink() {
  const pathname = usePathname();
  const { items, hydrated } = useBookmarks();
  const isActive = pathname === '/saved';
  const count = hydrated ? items.length : 0;

  return (
    <Link
      href="/saved"
      aria-label={`Saved${count > 0 ? ` — ${count} items` : ''}`}
      className={`relative flex items-center gap-1.5 text-sm px-4 py-2.5 rounded-xl active:scale-[0.96] [transition:color_0.2s,background-color_0.2s,transform_0.15s] ${
        isActive
          ? 'bg-accent-secondary/10 text-accent-primary'
          : 'text-text-muted hover:text-text-heading hover:bg-accent-secondary/5'
      }`}
    >
      <Bookmark size={16} fill={isActive || count > 0 ? 'currentColor' : 'none'} strokeWidth={count > 0 ? 1.75 : 2} />
      {count > 0 && (
        <span className="text-xs font-medium tabular-nums">{count}</span>
      )}
    </Link>
  );
}
