import type { Club } from '../types';
import { leagueLevels } from '../data/leagues';

interface Props {
  allClubs: Club[];
  filteredClubs: Club[];
}

export function StatsBar({ allClubs, filteredClubs }: Props) {
  const tierCounts = leagueLevels.map((l) => ({
    ...l,
    count: filteredClubs.filter((c) => c.league === l.level).length,
  })).filter((l) => l.count > 0);

  const totalMembers = filteredClubs.reduce((sum, c) => sum + c.members, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex flex-wrap gap-6 items-center">
        <div>
          <div className="text-2xl font-bold text-gray-900">{filteredClubs.length}</div>
          <div className="text-xs text-gray-500">von {allClubs.length} Vereinen</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">{totalMembers.toLocaleString('de-DE')}</div>
          <div className="text-xs text-gray-500">Mitglieder gesamt</div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-gray-500 mb-1.5">Ligaverteilung</div>
          <div className="flex gap-1 flex-wrap">
            {tierCounts.map((l) => (
              <span
                key={l.level}
                className={`text-xs px-2 py-0.5 rounded-full ${l.bg} ${l.color} font-medium`}
                title={l.level}
              >
                {l.count}× {l.level}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
