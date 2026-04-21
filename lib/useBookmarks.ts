'use client';

import { useCallback, useEffect, useState } from 'react';

export type BookmarkType =
  | 'scholarship'
  | 'course'
  | 'organization'
  | 'program'
  | 'conference'
  | 'mentorship'
  | 'job'
  | 'community';

export interface BookmarkItem {
  key: string;
  type: BookmarkType;
  title: string;
  subtitle?: string;
  amount?: string;
  url: string;
  savedAt: number;
}

export type CelebrationKind = 'first' | 'milestone';

export interface CelebrationDetail {
  kind: CelebrationKind;
  count: number;
}

const STORAGE_KEY = 'stemspark:bookmarks:v1';
const CHANGE_EVENT = 'stemspark:bookmarks:change';
export const CELEBRATE_EVENT = 'stemspark:bookmarks:celebrate';
const MILESTONES = [5, 10, 25, 50, 100];

function readAll(): BookmarkItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeAll(items: BookmarkItem[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

function emitCelebration(detail: CelebrationDetail) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent<CelebrationDetail>(CELEBRATE_EVENT, { detail }));
}

export function useBookmarks() {
  const [items, setItems] = useState<BookmarkItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readAll());
    setHydrated(true);

    function sync() {
      setItems(readAll());
    }
    window.addEventListener('storage', sync);
    window.addEventListener(CHANGE_EVENT, sync);
    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener(CHANGE_EVENT, sync);
    };
  }, []);

  const has = useCallback(
    (key: string) => items.some((i) => i.key === key),
    [items]
  );

  const add = useCallback((item: Omit<BookmarkItem, 'savedAt'>) => {
    const current = readAll();
    if (current.some((i) => i.key === item.key)) return;
    const next = [{ ...item, savedAt: Date.now() }, ...current];
    writeAll(next);

    const newCount = next.length;
    if (current.length === 0) {
      emitCelebration({ kind: 'first', count: 1 });
    } else if (MILESTONES.includes(newCount)) {
      emitCelebration({ kind: 'milestone', count: newCount });
    }
  }, []);

  const remove = useCallback((key: string) => {
    const current = readAll();
    const next = current.filter((i) => i.key !== key);
    writeAll(next);
  }, []);

  const toggle = useCallback(
    (item: Omit<BookmarkItem, 'savedAt'>) => {
      if (readAll().some((i) => i.key === item.key)) {
        remove(item.key);
      } else {
        add(item);
      }
    },
    [add, remove]
  );

  const clear = useCallback(() => writeAll([]), []);

  return { items, hydrated, has, add, remove, toggle, clear };
}
