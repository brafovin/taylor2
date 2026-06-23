import { useMemo, useState } from 'react';
import { Header } from './components/Header';
import { FilterPanel } from './components/FilterPanel';
import { ClubCard } from './components/ClubCard';
import { ClubModal } from './components/ClubModal';
import { StatsBar } from './components/StatsBar';
import { clubs } from './data/clubs';
import { leagueLevels } from './data/leagues';
import type { AgeGroup, Bundesland, Club, LeagueLevel } from './types';

const SORTED_CLUBS = [...clubs].sort((a, b) => {
  const tierA = leagueLevels.find((l) => l.level === a.league)?.tier ?? 99;
  const tierB = leagueLevels.find((l) => l.level === b.league)?.tier ?? 99;
  if (tierA !== tierB) return tierA - tierB;
  return a.name.localeCompare(b.name, 'de');
});

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedBundesland, setSelectedBundesland] = useState<Bundesland | ''>('');
  const [selectedLeague, setSelectedLeague] = useState<LeagueLevel | ''>('');
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<AgeGroup[]>([]);
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    return SORTED_CLUBS.filter((c) => {
      if (search) {
        const q = search.toLowerCase();
        if (!c.name.toLowerCase().includes(q) && !c.city.toLowerCase().includes(q) && !c.shortName.toLowerCase().includes(q)) return false;
      }
      if (selectedBundesland && c.bundesland !== selectedBundesland) return false;
      if (selectedLeague && c.league !== selectedLeague) return false;
      if (selectedAgeGroups.length > 0 && !selectedAgeGroups.some((ag) => c.ageGroups.includes(ag))) return false;
      return true;
    });
  }, [search, selectedBundesland, selectedLeague, selectedAgeGroups]);

  function reset() {
    setSearch('');
    setSelectedBundesland('');
    setSelectedLeague('');
    setSelectedAgeGroups([]);
  }

  const hasFilters = !!(search || selectedBundesland || selectedLeague || selectedAgeGroups.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <StatsBar allClubs={clubs} filteredClubs={filtered} />

        {/* Mobile filter toggle */}
        <button
          className="lg:hidden w-full mb-4 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 flex items-center justify-between shadow-sm"
          onClick={() => setFilterOpen((o) => !o)}
        >
          <span>Filter {hasFilters ? '(aktiv)' : ''}</span>
          <span>{filterOpen ? '▲' : '▼'}</span>
        </button>

        <div className="flex gap-6 items-start">
          {/* Sidebar */}
          <div className={`${filterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-72 shrink-0`}>
            <FilterPanel
              search={search}
              onSearch={setSearch}
              selectedBundesland={selectedBundesland}
              onBundesland={setSelectedBundesland}
              selectedLeague={selectedLeague}
              onLeague={setSelectedLeague}
              selectedAgeGroups={selectedAgeGroups}
              onAgeGroups={setSelectedAgeGroups}
              resultCount={filtered.length}
              onReset={reset}
            />
          </div>

          {/* Club grid */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-500">
                <div className="text-5xl mb-4">⚽</div>
                <p className="text-lg font-medium">Keine Vereine gefunden</p>
                <p className="text-sm mt-1">Versuche andere Filtereinstellungen</p>
                <button onClick={reset} className="mt-4 text-red-600 hover:text-red-800 text-sm font-medium underline">
                  Filter zurücksetzen
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map((club) => (
                  <ClubCard key={club.id} club={club} onClick={() => setSelectedClub(club)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {selectedClub && (
        <ClubModal club={selectedClub} onClose={() => setSelectedClub(null)} />
      )}
    </div>
  );
}
