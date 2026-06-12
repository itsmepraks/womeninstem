import freshnessRecords from '@/data/generated/freshness.json';
import type { FreshnessRecord, FreshnessStatus } from '@/types/freshness';

const records = freshnessRecords as FreshnessRecord[];

export function getFreshness(id: string): FreshnessRecord | undefined {
  return records.find((record) => record.id === id);
}

export function formatFreshnessBadge(record: FreshnessRecord | undefined): {
  label: string;
  tone: 'good' | 'warn' | 'muted';
} {
  if (!record) return { label: 'Unchecked', tone: 'muted' };

  if (record.status === 'active' || record.status === 'redirected') {
    const days = daysSince(record.lastActiveAt ?? record.checkedAt);
    const label =
      days === 0
        ? 'Verified today'
        : `Verified ${days} day${days === 1 ? '' : 's'} ago`;
    return { label, tone: record.status === 'redirected' ? 'warn' : 'good' };
  }

  if (record.status === 'stale' || record.status === 'error') {
    return { label: 'Needs review', tone: 'warn' };
  }

  return { label: 'Unchecked', tone: 'muted' };
}

function daysSince(value: string): number {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 0;
  const diff = Date.now() - date.getTime();
  return Math.max(0, Math.floor(diff / 86_400_000));
}

export function isFreshnessHealthy(status: FreshnessStatus | undefined): boolean {
  return status === 'active' || status === 'redirected';
}
