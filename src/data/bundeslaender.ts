import type { Bundesland } from '../types';

export const bundeslaender: { name: Bundesland; capital: string; association: string }[] = [
  { name: 'Baden-Württemberg', capital: 'Stuttgart', association: 'WFV / SBFV' },
  { name: 'Bayern', capital: 'München', association: 'BFV' },
  { name: 'Berlin', capital: 'Berlin', association: 'BFV Berlin' },
  { name: 'Brandenburg', capital: 'Potsdam', association: 'FLB' },
  { name: 'Bremen', capital: 'Bremen', association: 'BFV Bremen' },
  { name: 'Hamburg', capital: 'Hamburg', association: 'HFV' },
  { name: 'Hessen', capital: 'Wiesbaden', association: 'HFV' },
  { name: 'Mecklenburg-Vorpommern', capital: 'Schwerin', association: 'NFV-MVP' },
  { name: 'Niedersachsen', capital: 'Hannover', association: 'NFV' },
  { name: 'Nordrhein-Westfalen', capital: 'Düsseldorf', association: 'FLVW / FVN' },
  { name: 'Rheinland-Pfalz', capital: 'Mainz', association: 'SWFV / RFV' },
  { name: 'Saarland', capital: 'Saarbrücken', association: 'SFV' },
  { name: 'Sachsen', capital: 'Dresden', association: 'SFV Sachsen' },
  { name: 'Sachsen-Anhalt', capital: 'Magdeburg', association: 'NOFV-SA' },
  { name: 'Schleswig-Holstein', capital: 'Kiel', association: 'SHFV' },
  { name: 'Thüringen', capital: 'Erfurt', association: 'TFV' },
];
