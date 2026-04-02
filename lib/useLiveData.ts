'use client';

import { useEffect, useState } from 'react';
import type { ResourcesResponse, Resource } from '@/types/resource';

interface UseLiveDataResult {
  data: Resource[];
  loading: boolean;
  error: boolean;
  updatedAt: string | null;
}

export function useLiveData(endpoint: string): UseLiveDataResult {
  const [data, setData] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

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

    async function fetchData() {
      try {
        const res = await fetch(endpoint, { signal: controller.signal });
        clearTimeout(timeout);
        if (!res.ok) throw new Error(`${res.status}`);
        const json: ResourcesResponse = await res.json();
        if (!cancelled) {
          setData(json.data);
          setUpdatedAt(json.updatedAt);
          setLoading(false);
        }
      } catch {
        clearTimeout(timeout);
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      }
    }

    fetchData();
    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timeout);
    };
  }, [endpoint]);

  return { data, loading, error, updatedAt };
}
