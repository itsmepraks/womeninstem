'use client';

import { useEffect, useMemo, useState } from 'react';
import PathfinderForm from '@/components/pathfinder/PathfinderForm';
import MatchResults from '@/components/pathfinder/MatchResults';
import RoadmapPanel from '@/components/pathfinder/RoadmapPanel';
import { getPathfinderCatalog } from '@/lib/pathfinder/catalog';
import {
  DEFAULT_PATHFINDER_FILTERS,
  getPathfinderMatches,
  groupPathfinderMatches,
} from '@/lib/pathfinder/scoring';
import {
  addRoadmapItem,
  emptyRoadmap,
  hasRoadmapItem,
  moveRoadmapItem,
  readRoadmap,
  removeRoadmapItem,
  toRoadmapItem,
  writeRoadmap,
} from '@/lib/pathfinder/storage';
import type {
  PathfinderFilters,
  PathfinderMatch,
  RoadmapBucket,
  RoadmapState,
} from '@/lib/pathfinder/types';

export default function PathfinderExperience() {
  const [filters, setFilters] = useState<PathfinderFilters>(DEFAULT_PATHFINDER_FILTERS);
  const [roadmap, setRoadmap] = useState<RoadmapState>(() => emptyRoadmap());
  const [hydrated, setHydrated] = useState(false);

  const catalog = useMemo(() => getPathfinderCatalog(), []);
  const matches = useMemo(() => getPathfinderMatches(catalog, filters), [catalog, filters]);
  const groups = useMemo(() => groupPathfinderMatches(matches), [matches]);
  const savedIds = useMemo(() => {
    return new Set([...roadmap.now, ...roadmap.month, ...roadmap.later].map((item) => item.id));
  }, [roadmap]);

  useEffect(() => {
    setRoadmap(readRoadmap());
    setHydrated(true);
  }, []);

  function persist(next: RoadmapState) {
    setRoadmap(next);
    writeRoadmap(next);
  }

  function addMatch(match: PathfinderMatch) {
    if (hasRoadmapItem(roadmap, match.id)) return;
    persist(addRoadmapItem(roadmap, toRoadmapItem(match, 'now')));
  }

  function moveItem(id: string, bucket: RoadmapBucket) {
    persist(moveRoadmapItem(roadmap, id, bucket));
  }

  function removeItem(id: string) {
    persist(removeRoadmapItem(roadmap, id));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
      <div className="min-w-0 space-y-10">
        <section className="card-white p-6 md:p-7">
          <div className="mb-6">
            <p className="mb-2 text-label text-accent-primary">Private matching</p>
            <h1 className="font-display text-[2.5rem] font-light leading-tight text-text-heading md:text-[3rem]">
              STEM Pathfinder
            </h1>
            <p className="mt-3 max-w-[560px] text-body text-text-body">
              Answer five quick filters and get a local-only shortlist of scholarships,
              courses, communities, events, and career resources.
            </p>
          </div>
          <PathfinderForm filters={filters} onChange={setFilters} />
        </section>

        <section aria-live="polite" aria-busy={!hydrated}>
          <div className="mb-5 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-label text-accent-primary">Matches</p>
              <h2 className="font-display text-display text-text-heading">
                {matches.length} suggested next steps
              </h2>
            </div>
            <p className="text-sm text-text-muted">
              Suggestions only. Always verify eligibility on the official site.
            </p>
          </div>
          <MatchResults groups={groups} savedIds={savedIds} onAdd={addMatch} />
        </section>
      </div>

      <RoadmapPanel roadmap={roadmap} onMove={moveItem} onRemove={removeItem} />
    </div>
  );
}
