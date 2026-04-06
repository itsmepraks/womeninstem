'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { pioneers } from '@/data/pioneers';
import {
  scholarships,
  organizations,
  programs,
  conferences,
  mentorshipPlatforms,
  jobBoards,
} from '@/data/resources';
import { courses } from '@/data/courses';

interface SearchResult {
  title: string;
  subtitle: string;
  category: string;
  url?: string;
  href?: string; // internal link
}

function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  for (const p of pioneers) {
    results.push({
      title: p.name,
      subtitle: `${p.title} · ${p.field}`,
      category: 'Pioneers',
      url: p.link,
      href: '/pioneers',
    });
  }

  for (const s of scholarships) {
    results.push({
      title: s.name,
      subtitle: `${s.amount} · ${s.level}`,
      category: 'Scholarships',
      url: s.url,
    });
  }

  for (const o of organizations) {
    results.push({
      title: o.name,
      subtitle: o.description,
      category: 'Organizations',
      url: o.url,
    });
  }

  for (const p of programs) {
    results.push({
      title: p.name,
      subtitle: `${p.cost} · ${p.description}`,
      category: 'Programs',
      url: p.url,
    });
  }

  for (const c of conferences) {
    results.push({
      title: c.name,
      subtitle: c.description,
      category: 'Conferences',
      url: c.url,
    });
  }

  for (const m of mentorshipPlatforms) {
    results.push({
      title: m.name,
      subtitle: `${m.cost} · ${m.description}`,
      category: 'Mentorship',
      url: m.url,
    });
  }

  for (const j of jobBoards) {
    results.push({
      title: j.name,
      subtitle: `${j.cost} · ${j.description}`,
      category: 'Job Boards',
      url: j.url,
    });
  }

  for (const c of courses) {
    results.push({
      title: c.title,
      subtitle: `${c.cost} · ${c.field}`,
      category: 'Courses',
      url: c.url,
    });
  }

  return results;
}

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const index = useMemo(() => buildSearchIndex(), []);

  const allMatches = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    return index.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.subtitle.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q)
    );
  }, [query, index]);

  const results = useMemo(() => allMatches.slice(0, 12), [allMatches]);

  // Group results by category
  const grouped = useMemo(() => {
    const map = new Map<string, SearchResult[]>();
    for (const r of results) {
      const existing = map.get(r.category) ?? [];
      existing.push(r);
      map.set(r.category, existing);
    }
    return map;
  }, [results]);

  // Keyboard shortcut: Cmd+K or Ctrl+K
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      if (e.key === 'Escape') {
        setOpen(false);
        setQuery('');
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside to close
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery('');
      }
    }
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      {/* Search trigger button */}
      <button
        onClick={() => {
          setOpen(true);
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
        className="flex items-center gap-2 text-sm text-text-muted hover:text-text-heading transition-colors px-4 py-2.5 rounded-xl hover:bg-accent-secondary/5"
        aria-label="Search"
      >
        <Search size={16} />
        <span className="hidden lg:inline">Search</span>
        <kbd className="hidden lg:inline text-[0.625rem] bg-accent-secondary/10 text-text-muted px-1.5 py-0.5 rounded">
          ⌘K
        </kbd>
      </button>

      {/* Search modal overlay */}
      {open && (
        <div className="fixed inset-0 bg-surface-dark/20 backdrop-blur-sm z-50 flex items-start justify-center pt-[15vh]">
          <div className="w-full max-w-[560px] mx-4 bg-bg-primary rounded-2xl shadow-card-hover border border-accent-primary/5 overflow-hidden">
            {/* Search input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-accent-primary/5">
              <Search size={18} className="text-text-muted flex-shrink-0" />
              <label htmlFor="global-search-input" className="sr-only">Search resources</label>
              <input
                id="global-search-input"
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search everything..."
                aria-label="Search resources"
                className="flex-1 bg-transparent text-body-lg text-text-heading placeholder:text-text-muted/50 outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="text-text-muted hover:text-text-heading transition-colors"
                >
                  <X size={16} />
                </button>
              )}
              <kbd className="text-[0.625rem] bg-accent-secondary/10 text-text-muted px-1.5 py-0.5 rounded flex-shrink-0">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[400px] overflow-y-auto">
              {query.length < 2 && (
                <div className="px-5 py-8 text-center">
                  <p className="text-sm text-text-muted">
                    Start typing to search {index.length} resources
                  </p>
                </div>
              )}

              {query.length >= 2 && results.length === 0 && (
                <div className="px-5 py-8 text-center">
                  <p className="text-sm text-text-muted">
                    No results for &ldquo;{query}&rdquo;
                  </p>
                  <p className="text-xs text-text-muted/60 mt-1">
                    Try a name, field, or keyword
                  </p>
                </div>
              )}

              {grouped.size > 0 && (
                <div className="py-2">
                  {Array.from(grouped.entries()).map(([category, items]) => (
                    <div key={category}>
                      <div className="px-5 py-2">
                        <span className="text-label text-accent-primary">{category}</span>
                      </div>
                      {items.map((item, i) => {
                        const isExternal = !!item.url;
                        const linkUrl = item.url ?? item.href ?? '#';
                        return (
                          <a
                            key={`${category}-${i}`}
                            href={linkUrl}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            onClick={() => {
                              setOpen(false);
                              setQuery('');
                            }}
                            className="flex items-start gap-3 px-5 py-3 hover:bg-accent-secondary/[0.04] transition-colors cursor-pointer"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-text-heading font-medium truncate">
                                {item.title}
                              </p>
                              <p className="text-xs text-text-muted truncate mt-0.5">
                                {item.subtitle}
                              </p>
                            </div>
                            <span className="text-[0.625rem] text-accent-primary flex-shrink-0 mt-0.5">
                              {isExternal ? '↗' : '→'}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {allMatches.length > 12 && (
              <div className="px-5 py-2 text-center border-t border-accent-primary/5">
                <span className="text-xs text-text-muted">
                  Showing 12 of {allMatches.length} results. Try a more specific search.
                </span>
              </div>
            )}

            {/* Footer */}
            {results.length > 0 && (
              <div className="px-5 py-3 border-t border-accent-primary/5 flex justify-between items-center">
                <span className="text-xs text-text-muted">
                  {results.length} result{results.length !== 1 ? 's' : ''}
                </span>
                <span className="text-xs text-text-muted">
                  ↗ opens external site
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
