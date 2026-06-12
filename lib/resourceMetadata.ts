import type { FreshnessRecord, QualityScore, ResourceMetadata } from '@/types/freshness';

type QualityInput = {
  id: string;
  url?: string;
  description?: string;
  amount?: string;
  cost?: string;
  region?: string;
  deadline?: string;
  freshness?: FreshnessRecord;
  metadata?: ResourceMetadata;
};

export function inferCostTag(cost?: string): ResourceMetadata['cost'] {
  if (!cost) return 'unknown';
  const normalized = cost.toLowerCase();
  if (normalized.includes('free')) return 'free';
  if (normalized.includes('varies') || normalized.includes('variable')) return 'varies';
  if (normalized.includes('$') || normalized.includes('paid')) return 'paid';
  return 'unknown';
}

export function scoreResourceQuality(input: QualityInput): QualityScore {
  let score = 0;
  const reasons: string[] = [];

  if (input.url) {
    score += 15;
    reasons.push('official link');
  }

  if (input.freshness?.status === 'active') {
    score += 35;
    reasons.push('recently verified');
  } else if (input.freshness?.status === 'redirected') {
    score += 25;
    reasons.push('verified after redirect');
  } else if (input.freshness?.status === 'stale' || input.freshness?.status === 'error') {
    score -= 20;
    reasons.push('needs link review');
  }

  if (input.deadline) {
    score += 15;
    reasons.push('deadline listed');
  }

  if (input.region) {
    score += 10;
    reasons.push('region listed');
  }

  if (input.amount || input.cost) {
    score += 10;
    reasons.push('cost or amount listed');
  }

  if (input.metadata) {
    score += 15;
    reasons.push('eligibility tags');
  }

  if (input.description && input.description.length >= 80) {
    score += 5;
  }

  if (score >= 80) {
    return { score, label: 'Highly reliable', reason: reasons[0] ?? 'complete listing' };
  }
  if (score >= 55) {
    return { score, label: 'Verified', reason: reasons[0] ?? 'usable listing' };
  }
  if (score >= 30) {
    return { score, label: 'Limited info', reason: reasons[0] ?? 'partial listing' };
  }
  return { score, label: 'Needs review', reason: reasons[0] ?? 'missing verification' };
}
