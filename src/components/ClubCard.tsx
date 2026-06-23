import type { Club } from '../types';
import { getLeagueStyle } from '../data/leagues';

interface Props {
  club: Club;
  onClick: () => void;
}

export function ClubCard({ club, onClick }: Props) {
  const league = getLeagueStyle(club.league);
  const visibleAges = club.ageGroups.slice(0, 3);
  const extraAges = club.ageGroups.length - 3;

  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 text-left hover:shadow-md hover:border-yellow-400 transition-all duration-150 w-full group"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 text-gray-700 text-xs font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100">
              {club.shortName}
            </span>
          </div>
          <h3 className="font-bold text-gray-900 mt-1 leading-tight">{club.name}</h3>
          <p className="text-sm text-gray-500">{club.city} · {club.bundesland}</p>
        </div>
        <span className={`shrink-0 text-xs font-semibold px-2 py-1 rounded-lg ${league.bg} ${league.color} whitespace-nowrap`}>
          {club.league}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{club.description}</p>

      {/* Stats row */}
      <div className="flex gap-4 text-xs text-gray-500 mb-3">
        <span>Gegr. <strong className="text-gray-800">{club.founded}</strong></span>
        <span>{club.members.toLocaleString('de-DE')} Mitglieder</span>
        {club.stadium && <span>🏟 {club.stadium}</span>}
      </div>

      {/* Age groups */}
      <div className="flex flex-wrap gap-1">
        {visibleAges.map((ag) => (
          <span key={ag} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
            {ag}
          </span>
        ))}
        {extraAges > 0 && (
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
            +{extraAges} mehr
          </span>
        )}
      </div>

      {/* Colors indicator */}
      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
        <span>Vereinsfarben:</span>
        <span className="text-gray-600 font-medium">{club.colors}</span>
      </div>
    </button>
  );
}
