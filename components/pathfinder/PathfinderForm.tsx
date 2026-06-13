import {
  COST_OPTIONS,
  FIELD_OPTIONS,
  GOAL_OPTIONS,
  REGION_OPTIONS,
  STAGE_OPTIONS,
} from '@/lib/pathfinder/scoring';
import type {
  PathfinderCostPreference,
  PathfinderField,
  PathfinderFilters,
  PathfinderGoal,
  PathfinderOption,
  PathfinderRegion,
  PathfinderStage,
} from '@/lib/pathfinder/types';

interface PathfinderFormProps {
  filters: PathfinderFilters;
  onChange: (filters: PathfinderFilters) => void;
}

function SegmentedControl<TValue extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: TValue;
  options: PathfinderOption<TValue>[];
  onChange: (value: TValue) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-label text-accent-primary">{label}</p>
      <div role="group" aria-label={label} className="flex flex-wrap gap-1.5">
        {options.map((option) => {
          const active = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`rounded-pill px-3.5 py-2 text-xs transition-colors active:scale-[0.96] focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 ${
                active
                  ? 'bg-accent-secondary/10 font-medium text-accent-primary'
                  : 'text-text-muted hover:bg-accent-secondary/5 hover:text-text-body'
              }`}
              aria-pressed={active}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function PathfinderForm({ filters, onChange }: PathfinderFormProps) {
  return (
    <section className="space-y-5" aria-label="Pathfinder filters">
      <SegmentedControl<PathfinderStage>
        label="Stage"
        value={filters.stage}
        options={STAGE_OPTIONS}
        onChange={(stage) => onChange({ ...filters, stage })}
      />
      <SegmentedControl<PathfinderField>
        label="Field"
        value={filters.field}
        options={FIELD_OPTIONS}
        onChange={(field) => onChange({ ...filters, field })}
      />
      <SegmentedControl<PathfinderRegion>
        label="Region"
        value={filters.region}
        options={REGION_OPTIONS}
        onChange={(region) => onChange({ ...filters, region })}
      />
      <SegmentedControl<PathfinderGoal>
        label="Goal"
        value={filters.goal}
        options={GOAL_OPTIONS}
        onChange={(goal) => onChange({ ...filters, goal })}
      />
      <SegmentedControl<PathfinderCostPreference>
        label="Cost"
        value={filters.cost}
        options={COST_OPTIONS}
        onChange={(cost) => onChange({ ...filters, cost })}
      />
    </section>
  );
}
