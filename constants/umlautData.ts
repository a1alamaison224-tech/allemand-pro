import type { UmlautPair } from '../types';

export const umlautPairs: UmlautPair[] = [
  { without: { word: 'Mutter', syllables: 'Mut-ter' }, with: { word: 'Mütter', syllables: 'Müt-ter' } },
  { without: { word: 'Bruder', syllables: 'Bru-der' }, with: { word: 'Brüder', syllables: 'Brü-der' } },
  { without: { word: 'Nagel', syllables: 'Na-gel' }, with: { word: 'Nägel', syllables: 'Nä-gel' } },
  { without: { word: 'Ofen', syllables: 'O-fen' }, with: { word: 'Öfen', syllables: 'Ö-fen' } },
  { without: { word: 'mochte', syllables: 'moch-te' }, with: { word: 'möchte', syllables: 'möch-te' } },
  { without: { word: 'Losung', syllables: 'Lo-sung' }, with: { word: 'Lösung', syllables: 'Lö-sung' } },
  { without: { word: 'schon', syllables: 'schon' }, with: { word: 'schön', syllables: 'schön' } },
  { without: { word: 'Apfel', syllables: 'Ap-fel' }, with: { word: 'Äpfel', syllables: 'Äp-fel' } },
  { without: { word: 'Naht', syllables: 'Naht' }, with: { word: 'näht', syllables: 'näht' } },
  { without: { word: 'wasche', syllables: 'wa-sche' }, with: { word: 'wäsche', syllables: 'Wä-sche' } },
  { without: { word: 'Fahrt', syllables: 'Fahrt' }, with: { word: 'fährt', syllables: 'fährt' } },
];
