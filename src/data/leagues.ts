import type { LeagueLevel } from '../types';

export const leagueLevels: { level: LeagueLevel; tier: number; color: string; bg: string }[] = [
  { level: '1. Bundesliga', tier: 1, color: 'text-yellow-800', bg: 'bg-yellow-400' },
  { level: '2. Bundesliga', tier: 2, color: 'text-yellow-800', bg: 'bg-yellow-300' },
  { level: '3. Liga', tier: 3, color: 'text-orange-800', bg: 'bg-orange-400' },
  { level: 'Regionalliga', tier: 4, color: 'text-orange-800', bg: 'bg-orange-300' },
  { level: 'Oberliga', tier: 5, color: 'text-blue-800', bg: 'bg-blue-400' },
  { level: 'Verbandsliga', tier: 6, color: 'text-blue-800', bg: 'bg-blue-300' },
  { level: 'Landesliga', tier: 7, color: 'text-green-800', bg: 'bg-green-400' },
  { level: 'Bezirksliga', tier: 8, color: 'text-green-800', bg: 'bg-green-300' },
  { level: 'Kreisliga', tier: 9, color: 'text-gray-700', bg: 'bg-gray-400' },
  { level: 'Kreisklasse', tier: 10, color: 'text-gray-700', bg: 'bg-gray-300' },
  { level: 'Stadtklasse', tier: 11, color: 'text-gray-600', bg: 'bg-gray-200' },
];

export function getLeagueStyle(league: LeagueLevel) {
  return leagueLevels.find((l) => l.level === league) ?? leagueLevels[10];
}
