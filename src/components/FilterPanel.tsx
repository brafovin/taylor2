import type { AgeGroup, Bundesland, LeagueLevel } from '../types';
import { leagueLevels } from '../data/leagues';
import { bundeslaender } from '../data/bundeslaender';

const ALL_AGE_GROUPS: AgeGroup[] = [
  'Bambini (U6, 4-5 J.)',
  'F-Junioren (U8, 6-7 J.)',
  'E-Junioren (U10, 8-9 J.)',
  'D-Junioren (U12, 10-11 J.)',
  'C-Junioren (U14, 12-13 J.)',
  'B-Junioren (U16, 14-15 J.)',
  'A-Junioren (U19, 16-18 J.)',
  'Aktive Herren (19-29 J.)',
  'Aktive Damen (19-29 J.)',
  'Ü30 Herren',
  'Ü35 Herren',
  'Ü40 Herren',
  'Ü45 Herren',
];

interface Props {
  search: string;
  onSearch: (v: string) => void;
  selectedBundesland: Bundesland | '';
  onBundesland: (v: Bundesland | '') => void;
  selectedLeague: LeagueLevel | '';
  onLeague: (v: LeagueLevel | '') => void;
  selectedAgeGroups: AgeGroup[];
  onAgeGroups: (v: AgeGroup[]) => void;
  resultCount: number;
  onReset: () => void;
}

export function FilterPanel({
  search, onSearch,
  selectedBundesland, onBundesland,
  selectedLeague, onLeague,
  selectedAgeGroups, onAgeGroups,
  resultCount, onReset,
}: Props) {
  function toggleAge(ag: AgeGroup) {
    if (selectedAgeGroups.includes(ag)) {
      onAgeGroups(selectedAgeGroups.filter((a) => a !== ag));
    } else {
      onAgeGroups([...selectedAgeGroups, ag]);
    }
  }

  const hasFilters = search || selectedBundesland || selectedLeague || selectedAgeGroups.length > 0;

  return (
    <aside className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 space-y-6 h-fit sticky top-4">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-gray-800 text-lg">Filter</h2>
        {hasFilters && (
          <button
            onClick={onReset}
            className="text-sm text-red-600 hover:text-red-800 font-medium"
          >
            Zurücksetzen
          </button>
        )}
      </div>

      <div className="bg-yellow-50 rounded-lg p-3 text-center">
        <span className="text-2xl font-bold text-gray-900">{resultCount}</span>
        <span className="text-gray-600 text-sm ml-1">Verein{resultCount !== 1 ? 'e' : ''} gefunden</span>
      </div>

      {/* Search */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Suche</label>
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Vereinsname oder Stadt..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Bundesland */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Bundesland</label>
        <select
          value={selectedBundesland}
          onChange={(e) => onBundesland(e.target.value as Bundesland | '')}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="">Alle Bundesländer</option>
          {bundeslaender.map((bl) => (
            <option key={bl.name} value={bl.name}>{bl.name}</option>
          ))}
        </select>
      </div>

      {/* League */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Spielklasse</label>
        <select
          value={selectedLeague}
          onChange={(e) => onLeague(e.target.value as LeagueLevel | '')}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="">Alle Spielklassen</option>
          {leagueLevels.map((l) => (
            <option key={l.level} value={l.level}>{l.level}</option>
          ))}
        </select>
      </div>

      {/* Age groups */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Altersklassen</label>
        <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
          {ALL_AGE_GROUPS.map((ag) => (
            <label key={ag} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded px-1 py-0.5">
              <input
                type="checkbox"
                checked={selectedAgeGroups.includes(ag)}
                onChange={() => toggleAge(ag)}
                className="accent-yellow-500 w-4 h-4"
              />
              <span className="text-sm text-gray-700">{ag}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
