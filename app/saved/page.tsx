'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bookmark, Trash2 } from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import { useBookmarks, type BookmarkItem, type BookmarkType } from '@/lib/useBookmarks';

const TYPE_LABEL: Record<BookmarkType, string> = {
  scholarship: 'Scholarships',
  course: 'Courses',
  organization: 'Organizations',
  program: 'Programs',
  conference: 'Conferences',
  mentorship: 'Mentorship',
  job: 'Jobs',
  community: 'Communities',
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

function groupByType(items: BookmarkItem[]): Map<BookmarkType, BookmarkItem[]> {
  const map = new Map<BookmarkType, BookmarkItem[]>();
  for (const item of items) {
    const existing = map.get(item.type) ?? [];
    existing.push(item);
    map.set(item.type, existing);
  }
  return map;
}

export default function SavedPage() {
  const { items, remove, clear, hydrated } = useBookmarks();
  const grouped = groupByType(items);

  return (
    <PageTransition>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-[880px] mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-16"
      >
        <motion.section variants={fadeUp} className="mb-10">
          <p className="text-label text-accent-primary font-semibold mb-3.5 tracking-[0.19em]">
            Saved
          </p>
          <h1 className="font-display text-display-lg text-text-heading mb-1.5">
            Your collection
          </h1>
          <div className="accent-underline mt-4 mb-5" />
          <p className="text-body-lg text-text-body max-w-[520px]">
            Resources you&apos;ve bookmarked, stored on this device.{' '}
            <span className="text-text-muted">No account, no cloud.</span>
          </p>
        </motion.section>

        {hydrated && items.length === 0 && (
          <motion.section variants={fadeUp}>
            <div className="card-white p-10 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent-secondary/10 flex items-center justify-center text-accent-primary">
                <Bookmark size={22} />
              </div>
              <h2 className="font-display text-heading text-text-heading mb-2">
                Nothing saved yet
              </h2>
              <p className="text-body text-text-body mb-6 max-w-[420px] mx-auto">
                Tap the bookmark on any resource to keep it here for later.
              </p>
              <Link href="/resources" className="btn-primary">
                Browse resources
              </Link>
            </div>
          </motion.section>
        )}

        {hydrated && items.length > 0 && (
          <>
            <motion.section variants={fadeUp} className="flex items-center justify-between mb-5">
              <span className="text-sm text-text-muted tabular-nums">
                {items.length} saved
              </span>
              <button
                onClick={() => {
                  if (confirm('Remove all saved resources?')) clear();
                }}
                className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-primary active:scale-[0.96] [transition:color_0.2s,transform_0.15s]"
              >
                <Trash2 size={13} />
                Clear all
              </button>
            </motion.section>

            {Array.from(grouped.entries()).map(([type, list]) => (
              <motion.section key={type} variants={fadeUp} className="pb-10">
                <h2 className="font-display text-heading text-text-heading mb-4">
                  {TYPE_LABEL[type]}{' '}
                  <span className="text-text-muted text-sm font-sans font-normal tabular-nums">
                    {list.length}
                  </span>
                </h2>
                <div className="space-y-2.5">
                  {list.map((item) => (
                    <div
                      key={item.key}
                      className="card-white p-5 flex items-center gap-4 group hover:shadow-card-hover transition-shadow relative"
                    >
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 rounded-organic z-[1] focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
                        aria-label={`${item.title} — open`}
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-card-title text-text-heading mb-0.5 truncate">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          remove(item.key);
                        }}
                        aria-label={`Remove ${item.title} from saved`}
                        className="relative z-[2] w-10 h-10 -m-2 flex items-center justify-center rounded-full text-text-muted hover:text-accent-primary hover:bg-accent-secondary/10 active:scale-[0.96] [transition:color_0.2s,background-color_0.2s,transform_0.15s] focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </>
        )}
      </motion.div>
    </PageTransition>
  );
}
