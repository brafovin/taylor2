export type Bundesland =
  | 'Baden-Württemberg' | 'Bayern' | 'Berlin' | 'Brandenburg'
  | 'Bremen' | 'Hamburg' | 'Hessen' | 'Mecklenburg-Vorpommern'
  | 'Niedersachsen' | 'Nordrhein-Westfalen' | 'Rheinland-Pfalz'
  | 'Saarland' | 'Sachsen' | 'Sachsen-Anhalt' | 'Schleswig-Holstein'
  | 'Thüringen';

export type LeagueLevel =
  | '1. Bundesliga' | '2. Bundesliga' | '3. Liga'
  | 'Regionalliga' | 'Oberliga' | 'Verbandsliga'
  | 'Landesliga' | 'Bezirksliga' | 'Kreisliga'
  | 'Kreisklasse' | 'Stadtklasse';

export type AgeGroup =
  | 'Bambini (U6, 4-5 J.)'
  | 'F-Junioren (U8, 6-7 J.)'
  | 'E-Junioren (U10, 8-9 J.)'
  | 'D-Junioren (U12, 10-11 J.)'
  | 'C-Junioren (U14, 12-13 J.)'
  | 'B-Junioren (U16, 14-15 J.)'
  | 'A-Junioren (U19, 16-18 J.)'
  | 'Aktive Herren (19-29 J.)'
  | 'Aktive Damen (19-29 J.)'
  | 'Ü30 Herren'
  | 'Ü35 Herren'
  | 'Ü40 Herren'
  | 'Ü45 Herren';

export interface Club {
  id: string;
  name: string;
  shortName: string;
  city: string;
  bundesland: Bundesland;
  founded: number;
  members: number;
  league: LeagueLevel;
  ageGroups: AgeGroup[];
  stadium?: string;
  colors: string;
  description: string;
}
