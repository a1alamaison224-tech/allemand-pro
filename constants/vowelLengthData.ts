import type { VowelLengthPair, VowelLengthWord } from '../types';

export const vowelLengthPairs: VowelLengthPair[] = [
  { long: { word: 'Rate', syllables: 'Ra-te' }, short: { word: 'Ratte', syllables: 'Rat-te' } },
  { long: { word: 'loben', syllables: 'lo-ben' }, short: { word: 'Robbe', syllables: 'Rob-be' } },
  { long: { word: 'Hof', syllables: 'Hof' }, short: { word: 'hoffen', syllables: 'hof-fen' } },
  { long: { word: 'Koma', syllables: 'Ko-ma' }, short: { word: 'Komma', syllables: 'Kom-ma' } },
  { long: { word: 'Zone', syllables: 'Zo-ne' }, short: { word: 'Tonne', syllables: 'Ton-ne' } },
  { long: { word: 'Lupe', syllables: 'Lu-pe' }, short: { word: 'Puppe', syllables: 'Pup-pe' } },
  { long: { word: 'Käse', syllables: 'Kä-se' }, short: { word: 'Kasse', syllables: 'Kas-se' } },
  { long: { word: 'Polen', syllables: 'Po-len' }, short: { word: 'Wolle', syllables: 'Wol-le' } },
];

export const longVowelWords: VowelLengthWord[] = [
  { word: 'Ruder', syllables: 'Ru-der' },
  { word: 'Hafer', syllables: 'Ha-fer' },
  { word: 'Igel', syllables: 'I-gel' },
  { word: 'legen', syllables: 'Le-gen' },
  { word: 'holen', syllables: 'ho-len' },
  { word: 'Monat', syllables: 'Mo-nat' },
  { word: 'Luke', syllables: 'Lu-ke' },
  { word: 'Samen', syllables: 'Sa-men' },
  { word: 'Pore', syllables: 'Po-re' },
];

export const shortVowelWords: VowelLengthWord[] = [
  { word: 'Quaddel', syllables: 'Quad-del' },
  { word: 'Puffer', syllables: 'Puff-er' },
  { word: 'Bagger', syllables: 'Bag-ger' },
  { word: 'Flagge', syllables: 'Flag-ge' },
  { word: 'Hobby', syllables: 'Hob-by' },
  { word: 'Paddel', syllables: 'Pad-del' },
  { word: 'Hölle', syllables: 'Höl-le' },
  { word: 'irren', syllables: 'ir-ren' },
  { word: 'Lack', syllables: 'Lack' },
  { word: 'Gasse', syllables: 'Gas-se' },
  { word: 'Sommer', syllables: 'Som-mer' },
];

export const exceptionWords: VowelLengthWord[] = [
    { word: 'Pizza', syllables: 'Piz-za' },
    { word: 'Razzia', syllables: 'Raz-zia' },
];
