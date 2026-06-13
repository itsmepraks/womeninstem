import { Plus, Check } from 'lucide-react';
import TrustBadges from '@/components/ui/TrustBadges';
import type { PathfinderMatch } from '@/lib/pathfinder/types';

export interface MatchGroup {
  id: string;
  title: string;
  matches: PathfinderMatch[];
}

interface MatchResultsProps {
  groups: MatchGroup[];
  savedIds: Set<string>;
  onAdd: (match: PathfinderMatch) => void;
}

function typeLabel(type: PathfinderMatch['type']): string {
  const labels: Record<PathfinderMatch['type'], string> = {
    scholarship: 'Funding',
    organization: 'Organization',
    program: 'Program',
    conference: 'Event',
    mentorship: 'Mentorship',
    'job-board': 'Career',
    course: 'Course',
    community: 'Community',
  };
  return labels[type];
}

export default function MatchResults({ groups, savedIds, onAdd }: MatchResultsProps) {
  if (groups.length === 0) {
    return (
      <section className="py-12 text-center">
        <p className="text-sm text-text-muted">
          No strong matches yet. Try broadening your region or including paid/variable resources.
        </p>
      </section>
    );
  }

  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <section key={group.id} aria-labelledby={`pathfinder-${group.id}`}>
          <div className="mb-3 flex items-end justify-between gap-3">
            <h2 id={`pathfinder-${group.id}`} className="font-display text-heading text-text-heading">
              {group.title}
            </h2>
            <span className="text-xs text-text-muted">{group.matches.length} matches</span>
          </div>
          <div className="space-y-2.5">
            {group.matches.map((match) => {
              const saved = savedIds.has(match.id);
              return (
                <article
                  key={`${group.id}-${match.id}`}
                  className="card-white p-5 transition-shadow hover:shadow-card-hover"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0">
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <span className="rounded-pill bg-accent-gold/10 px-2.5 py-1 text-[0.6875rem] font-medium leading-none text-text-muted">
                          {typeLabel(match.type)}
                        </span>
                        {match.region && (
                          <span className="text-xs text-text-muted">{match.region}</span>
                        )}
                      </div>
                      <h3 className="text-card-title text-text-heading">{match.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {match.amount && (
                          <span className="font-medium text-accent-primary">{match.amount} · </span>
                        )}
                        {match.description}
                      </p>
                      <TrustBadges
                        freshness={match.freshness}
                        qualityInput={{
                          id: match.id,
                          url: match.url,
                          description: match.description,
                          amount: match.amount,
                          cost: match.cost,
                          region: match.region,
                          metadata: match.metadata,
                        }}
                        className="mt-2.5"
                      />
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {match.reasons.map((reason) => (
                          <span
                            key={reason}
                            className="rounded-pill bg-accent-secondary/[0.06] px-2.5 py-1 text-[0.6875rem] font-medium leading-none text-text-muted"
                          >
                            {reason}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-2 md:flex-col md:items-end">
                      <a
                        href={match.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-pill px-3.5 py-2 text-xs font-medium text-accent-primary transition-colors hover:bg-accent-secondary/10 hover:text-accent-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
                      >
                        Visit
                      </a>
                      <button
                        type="button"
                        onClick={() => onAdd(match)}
                        disabled={saved}
                        className={`inline-flex items-center gap-1.5 rounded-pill px-3.5 py-2 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 ${
                          saved
                            ? 'cursor-default bg-emerald-100 text-emerald-900'
                            : 'bg-accent-secondary/10 text-accent-primary hover:bg-accent-secondary/20'
                        }`}
                      >
                        {saved ? <Check size={14} /> : <Plus size={14} />}
                        {saved ? 'Added' : 'Add'}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
