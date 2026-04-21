'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLiveData } from '@/lib/useLiveData';

const REGION_KEYWORDS: Record<string, string[]> = {
  US: ['usa', 'united states', 'us', 'new york', 'san francisco', 'california', 'texas', 'boston', 'seattle', 'chicago', 'austin', 'remote (us)', 'north america'],
  Europe: ['uk', 'germany', 'france', 'london', 'berlin', 'paris', 'amsterdam', 'europe', 'eu', 'deutschland', 'españa', 'italia', 'remote (eu)'],
  Americas: ['canada', 'brazil', 'mexico', 'toronto', 'vancouver', 'latin america', 'south america'],
  Asia: ['india', 'japan', 'china', 'singapore', 'tokyo', 'mumbai', 'bangalore', 'asia'],
  Africa: ['nigeria', 'kenya', 'south africa', 'africa', 'nairobi', 'lagos', 'cape town'],
  Oceania: ['australia', 'new zealand', 'sydney', 'melbourne'],
  Global: ['remote', 'worldwide', 'global', 'anywhere'],
};

function matchesRegionFilter(region: string, location: string): boolean {
  if (region === 'all') return true;
  const keywords = REGION_KEYWORDS[region];
  if (!keywords) return true;
  const loc = location.toLowerCase();
  return keywords.some((kw) => loc.includes(kw));
}

interface LiveFeedProps {
  endpoint: string;
  title: string;
  limit?: number;
  emptyMessage?: string;
  regionFilter?: string;
}

function timeSince(isoDate: string): string {
  const seconds = Math.floor((Date.now() - new Date(isoDate).getTime()) / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

const NEW_PILL_MS = 10_000;

export default function LiveFeed({
  endpoint,
  title,
  limit = 5,
  emptyMessage = 'No items right now. New data fetches automatically every few hours.',
  regionFilter = 'all',
}: LiveFeedProps) {
  const { data, loading, error, updatedAt } = useLiveData(endpoint);
  const filtered = regionFilter === 'all'
    ? data
    : data.filter((item) => matchesRegionFilter(regionFilter, item.location || ''));
  const items = filtered.slice(0, limit);
  const [slowLoading, setSlowLoading] = useState(false);
  const [newIds, setNewIds] = useState<Set<string>>(new Set());
  const seenIdsRef = useRef<Set<string>>(new Set());
  const initialisedRef = useRef(false);

  useEffect(() => {
    if (!loading) {
      setSlowLoading(false);
      return;
    }
    const id = setTimeout(() => setSlowLoading(true), 5000);
    return () => clearTimeout(id);
  }, [loading]);

  useEffect(() => {
    if (data.length === 0) return;
    const currentIds = data.map((d) => d.id);

    if (!initialisedRef.current) {
      initialisedRef.current = true;
      seenIdsRef.current = new Set(currentIds);
      return;
    }

    const arrivals: string[] = [];
    for (const id of currentIds) {
      if (!seenIdsRef.current.has(id)) {
        arrivals.push(id);
        seenIdsRef.current.add(id);
      }
    }

    if (arrivals.length === 0) return;

    setNewIds((prev) => {
      const next = new Set(prev);
      for (const id of arrivals) next.add(id);
      return next;
    });

    const timer = setTimeout(() => {
      setNewIds((prev) => {
        const next = new Set(prev);
        for (const id of arrivals) next.delete(id);
        return next;
      });
    }, NEW_PILL_MS);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div>
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-baseline gap-3">
          <h2 className="font-display text-display text-text-heading">{title}</h2>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-text-muted">Live</span>
          </div>
        </div>
        {updatedAt && (
          <span className="text-xs text-text-muted tabular-nums">
            Updated {timeSince(updatedAt)}
          </span>
        )}
      </div>

      {loading && (
        <div className="space-y-2.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="card-white p-5 animate-pulse">
              <div className="h-4 bg-accent-secondary/10 rounded w-3/4 mb-2" />
              <div className="h-3 bg-accent-secondary/5 rounded w-1/2" />
            </div>
          ))}
          {slowLoading && (
            <p className="text-sm text-text-muted text-center mt-3">
              Still fetching... external APIs can be slow on first load.
            </p>
          )}
        </div>
      )}

      {error && (
        <div className="card-white p-5">
          <p className="text-sm text-text-muted mb-3">
            Loading is slow right now. Try these directly:
          </p>
          <div className="flex flex-wrap gap-2">
            {endpoint.includes('jobs') && (
              <>
                <a href="https://remotive.com" target="_blank" rel="noopener noreferrer" className="text-xs bg-accent-secondary/10 text-accent-primary px-3 py-1.5 rounded-pill hover:bg-accent-secondary/20 transition-colors">Remotive →</a>
                <a href="https://www.arbeitnow.com" target="_blank" rel="noopener noreferrer" className="text-xs bg-accent-secondary/10 text-accent-primary px-3 py-1.5 rounded-pill hover:bg-accent-secondary/20 transition-colors">Arbeitnow →</a>
                <a href="https://powertofly.com" target="_blank" rel="noopener noreferrer" className="text-xs bg-accent-secondary/10 text-accent-primary px-3 py-1.5 rounded-pill hover:bg-accent-secondary/20 transition-colors">PowerToFly →</a>
              </>
            )}
            {endpoint.includes('events') && (
              <>
                <a href="https://ghc.anitab.org" target="_blank" rel="noopener noreferrer" className="text-xs bg-accent-secondary/10 text-accent-primary px-3 py-1.5 rounded-pill hover:bg-accent-secondary/20 transition-colors">Grace Hopper →</a>
                <a href="https://www.widsconference.org" target="_blank" rel="noopener noreferrer" className="text-xs bg-accent-secondary/10 text-accent-primary px-3 py-1.5 rounded-pill hover:bg-accent-secondary/20 transition-colors">WiDS →</a>
              </>
            )}
            {endpoint.includes('hackathons') && (
              <>
                <a href="https://devpost.com" target="_blank" rel="noopener noreferrer" className="text-xs bg-accent-secondary/10 text-accent-primary px-3 py-1.5 rounded-pill hover:bg-accent-secondary/20 transition-colors">Devpost →</a>
                <a href="https://mlh.io" target="_blank" rel="noopener noreferrer" className="text-xs bg-accent-secondary/10 text-accent-primary px-3 py-1.5 rounded-pill hover:bg-accent-secondary/20 transition-colors">MLH →</a>
              </>
            )}
            {endpoint.includes('grants') && (
              <>
                <a href="https://www.nsf.gov/funding" target="_blank" rel="noopener noreferrer" className="text-xs bg-accent-secondary/10 text-accent-primary px-3 py-1.5 rounded-pill hover:bg-accent-secondary/20 transition-colors">NSF →</a>
                <a href="https://www.swe.org/scholarships" target="_blank" rel="noopener noreferrer" className="text-xs bg-accent-secondary/10 text-accent-primary px-3 py-1.5 rounded-pill hover:bg-accent-secondary/20 transition-colors">SWE →</a>
              </>
            )}
          </div>
        </div>
      )}

      {!loading && !error && items.length === 0 && (
        <div className="card-white p-5 text-center">
          <p className="text-sm text-text-muted">{emptyMessage}</p>
        </div>
      )}

      {!loading && !error && items.length > 0 && (
        <div className="space-y-2.5">
          {items.map((item) => {
            const isNew = newIds.has(item.id);
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-white p-5 flex items-start justify-between gap-4 group hover:shadow-card-hover transition-shadow relative"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-body text-text-heading font-medium truncate">
                      {item.name}
                    </h3>
                    <AnimatePresence>
                      {isNew && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.7, y: -2 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
                          className="text-[0.6875rem] font-semibold tracking-wide uppercase bg-accent-primary/10 text-accent-primary px-2 py-0.5 rounded-pill flex items-center gap-1"
                          aria-label="Recently added"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent-primary animate-pulse" />
                          New
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  {item.description && typeof item.description === 'string' && (
                    <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    {item.company && (
                      <span className="text-xs text-text-muted">{item.company}</span>
                    )}
                    {item.location && item.location !== 'Unknown' && (
                      <span className="text-xs text-text-muted">{item.location}</span>
                    )}
                    {item.date && !isNaN(new Date(item.date).getTime()) && (
                      <span className="text-xs text-text-muted tabular-nums">
                        {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    )}
                    {item.amount && (
                      <span className="text-xs text-accent-primary font-medium">{item.amount}</span>
                    )}
                    {item.tags && item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-accent-secondary/10 text-accent-primary px-2 py-1 rounded-pill"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xs text-accent-primary font-medium flex-shrink-0 group-hover:text-accent-secondary transition-colors mt-1">
                  View →
                </span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
