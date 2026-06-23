import type { Club } from '../types';
import { getLeagueStyle, leagueLevels } from '../data/leagues';

interface Props {
  club: Club;
  onClose: () => void;
}

export function ClubModal({ club, onClose }: Props) {
  const league = getLeagueStyle(club.league);
  const currentTier = league.tier;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header stripe */}
        <div className="h-2 bg-gradient-to-r from-black via-red-600 to-yellow-400 rounded-t-2xl" />

        <div className="p-6">
          {/* Title */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-gray-100 text-gray-700 text-sm font-bold px-2 py-0.5 rounded-full">
                  {club.shortName}
                </span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${league.bg} ${league.color}`}>
                  {club.league}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{club.name}</h2>
              <p className="text-gray-500">{club.city}, {club.bundesland}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 text-2xl font-light leading-none mt-1"
            >
              ×
            </button>
          </div>

          <p className="text-gray-700 mb-6">{club.description}</p>

          {/* Info grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Gegründet</div>
              <div className="font-bold text-gray-900 text-lg">{club.founded}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Mitglieder</div>
              <div className="font-bold text-gray-900 text-lg">{club.members.toLocaleString('de-DE')}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Farben</div>
              <div className="font-bold text-gray-900">{club.colors}</div>
            </div>
            {club.stadium && (
              <div className="bg-gray-50 rounded-lg p-3 col-span-2 sm:col-span-3">
                <div className="text-xs text-gray-500 uppercase tracking-wide">Stadion</div>
                <div className="font-bold text-gray-900">🏟 {club.stadium}</div>
              </div>
            )}
          </div>

          {/* League pyramid */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Ligapyramide</h3>
            <div className="space-y-1">
              {leagueLevels.map((l) => (
                <div
                  key={l.level}
                  className={`flex items-center gap-2 rounded-lg px-3 py-1.5 transition-all ${
                    l.tier === currentTier
                      ? `${l.bg} ${l.color} font-bold ring-2 ring-offset-1 ring-yellow-400`
                      : 'bg-gray-50 text-gray-500'
                  }`}
                  style={{ marginLeft: `${(l.tier - 1) * 8}px` }}
                >
                  <span className="text-xs">{l.tier}.</span>
                  <span className="text-sm">{l.level}</span>
                  {l.tier === currentTier && <span className="ml-auto text-xs">← aktuell</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Age groups */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">
              Altersklassen ({club.ageGroups.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {club.ageGroups.map((ag) => (
                <span key={ag} className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100">
                  {ag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
