'use client';

import { useEffect, useRef, useState } from 'react';
import type { ResourcesResponse, Resource } from '@/types/resource';

interface UseLiveDataResult {
  data: Resource[];
  loading: boolean;
  error: boolean;
  updatedAt: string | null;
}

const MIN_REFETCH_INTERVAL_MS = 60_000; // don't refetch on focus if data is younger than this

export function useLiveData(endpoint: string): UseLiveDataResult {
  const [data, setData] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const lastFetchedAt = useRef<number>(0);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
      if (!cancelled) {
        setError(true);
        setLoading(false);
      }
    }, 30000);

    async function fetchData(silent = false) {
      try {
        if (!silent) setLoading(true);
        const res = await fetch(endpoint, { signal: controller.signal });
        if (!res.ok) throw new Error(`${res.status}`);
        const json: ResourcesResponse = await res.json();
        if (cancelled) return;
        setData(json.data);
        setUpdatedAt(json.updatedAt);
        setError(false);
        setLoading(false);
        lastFetchedAt.current = Date.now();
      } catch {
        if (cancelled) return;
        if (!silent) {
          setError(true);
          setLoading(false);
        }
        // silent refetch failures: keep showing last good data
      }
    }

    fetchData();

    function handleVisibilityChange() {
      if (document.visibilityState !== 'visible') return;
      const age = Date.now() - lastFetchedAt.current;
      if (age < MIN_REFETCH_INTERVAL_MS) return;
      fetchData(true);
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timeout);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [endpoint]);

  return { data, loading, error, updatedAt };
}
