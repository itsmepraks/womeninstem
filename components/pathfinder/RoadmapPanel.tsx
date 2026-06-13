import { ArrowRight, ExternalLink, Trash2 } from 'lucide-react';
import type { RoadmapBucket, RoadmapItem, RoadmapState } from '@/lib/pathfinder/types';

interface RoadmapPanelProps {
  roadmap: RoadmapState;
  onMove: (id: string, bucket: RoadmapBucket) => void;
  onRemove: (id: string) => void;
}

const BUCKETS: { id: RoadmapBucket; label: string; next?: RoadmapBucket }[] = [
  { id: 'now', label: 'Now', next: 'month' },
  { id: 'month', label: 'This month', next: 'later' },
  { id: 'later', label: 'Later' },
];

function nextLabel(bucket: RoadmapBucket): string {
  if (bucket === 'now') return 'Move to this month';
  if (bucket === 'month') return 'Move to later';
  return 'Move to now';
}

function nextBucket(bucket: RoadmapBucket): RoadmapBucket {
  if (bucket === 'now') return 'month';
  if (bucket === 'month') return 'later';
  return 'now';
}

function RoadmapCard({
  item,
  onMove,
  onRemove,
}: {
  item: RoadmapItem;
  onMove: (id: string, bucket: RoadmapBucket) => void;
  onRemove: (id: string) => void;
}) {
  const targetBucket = nextBucket(item.bucket);

  return (
    <div className="rounded-[0.875rem] border border-accent-secondary/10 bg-white p-3.5">
      <h3 className="text-sm font-semibold leading-snug text-text-heading">{item.title}</h3>
      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-text-secondary">
        {item.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-pill px-2.5 py-1.5 text-[0.6875rem] font-medium text-accent-primary hover:bg-accent-secondary/10 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
        >
          <ExternalLink size={12} />
          Visit
        </a>
        <button
          type="button"
          onClick={() => onMove(item.id, targetBucket)}
          className="inline-flex items-center gap-1 rounded-pill px-2.5 py-1.5 text-[0.6875rem] font-medium text-text-muted hover:bg-accent-secondary/10 hover:text-text-body focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
        >
          <ArrowRight size={12} />
          {nextLabel(item.bucket)}
        </button>
        <button
          type="button"
          onClick={() => onRemove(item.id)}
          className="inline-flex items-center gap-1 rounded-pill px-2.5 py-1.5 text-[0.6875rem] font-medium text-text-muted hover:bg-red-100 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
        >
          <Trash2 size={12} />
          Remove
        </button>
      </div>
    </div>
  );
}

export default function RoadmapPanel({ roadmap, onMove, onRemove }: RoadmapPanelProps) {
  const total = roadmap.now.length + roadmap.month.length + roadmap.later.length;

  return (
    <aside className="card-white p-5 lg:sticky lg:top-24" aria-label="My roadmap">
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="font-display text-heading text-text-heading">My Roadmap</h2>
        <span className="text-xs text-text-muted">{total} saved</span>
      </div>

      {total === 0 && (
        <p className="text-sm leading-relaxed text-text-muted">
          Add matches as you browse. Your roadmap stays in this browser.
        </p>
      )}

      <div className="space-y-5">
        {BUCKETS.map((bucket) => (
          <section key={bucket.id} aria-labelledby={`roadmap-${bucket.id}`}>
            <div className="mb-2 flex items-center justify-between">
              <h3 id={`roadmap-${bucket.id}`} className="text-label text-accent-primary">
                {bucket.label}
              </h3>
              <span className="text-xs text-text-muted">{roadmap[bucket.id].length}</span>
            </div>
            <div className="space-y-2">
              {roadmap[bucket.id].map((item) => (
                <RoadmapCard
                  key={item.id}
                  item={item}
                  onMove={onMove}
                  onRemove={onRemove}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
}
