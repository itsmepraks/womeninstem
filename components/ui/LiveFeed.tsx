'use client';

import { useEffect, useState } from 'react';
import { useLiveData } from '@/lib/useLiveData';

interface LiveFeedProps {
  endpoint: string;
  title: string;
  limit?: number;
  emptyMessage?: string;
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

export default function LiveFeed({
  endpoint,
  title,
  limit = 5,
  emptyMessage = 'No items right now. New data fetches automatically every few hours.',
}: LiveFeedProps) {
  const { data, loading, error, updatedAt } = useLiveData(endpoint);
  const items = data.slice(0, limit);
  const [slowLoading, setSlowLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      setSlowLoading(false);
      return;
    }
    const id = setTimeout(() => setSlowLoading(true), 5000);
    return () => clearTimeout(id);
  }, [loading]);

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
          <span className="text-xs text-text-muted">
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
          {items.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-white p-5 flex items-start justify-between gap-4 group hover:shadow-card-hover transition-shadow"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-body text-text-heading font-medium truncate">
                  {item.name}
                </h3>
                {item.description && (
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
                    <span className="text-xs text-text-muted">
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
          ))}
        </div>
      )}
    </div>
  );
}
