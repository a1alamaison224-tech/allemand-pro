import type { ScharfesSSection, ScharfesSQuizQuestion } from '../types';

export const scharfesSSections: ScharfesSSection[] = [
  {
    title: '1. Langer Vokal (voyelle longue) → ß',
    rule: "La règle principale est simple : si la voyelle ou la diphtongue qui précède le son [s] est <strong>longue</strong>, on écrit <strong>ß</strong> (appelé 'Eszett' ou 'scharfes S').",
    words: [
      { word: 'Straße', translation: 'rue' },
      { word: 'groß', translation: 'grand' },
      { word: 'weiß', translation: 'blanc' },
      { word: 'reißen', translation: 'déchirer' },
      { word: 'Fuß', translation: 'pied' },
      { word: 'Gruß', translation: 'salutation' },
      { word: 'schießen', translation: 'tirer (avec une arme)' },
      { word: 'genießen', translation: 'profiter de' },
      { word: 'Strauß', translation: 'bouquet / autruche' },
      { word: 'süß', translation: 'sucré, mignon' },
    ]
  },
  {
    title: '2. Kurzer Vokal (voyelle courte) → ss',
    rule: "Si la voyelle qui précède le son [s] est <strong>courte</strong> et brève, on écrit <strong>ss</strong>. Cela permet de 'bloquer' la voyelle et de garder son son court.",
    words: [
      { word: 'Kasse', translation: 'caisse' },
      { word: 'Klasse', translation: 'classe' },
      { word: 'Tasse', translation: 'tasse' },
      { word: 'wissen', translation: 'savoir' },
      { word: 'essen', translation: 'manger' },
      { word: 'müssen', translation: 'devoir' },
      { word: 'Schloss', translation: 'château / serrure' },
      { word: 'Fluss', translation: 'rivière' },
      { word: 'lassen', translation: 'laisser' },
      { word: 'Kuss', translation: 'baiser' },
    ]
  },
  {
    title: '3. Ausnahmen (Exceptions) → s',
    rule: "On écrit un simple <strong>s</strong> à la fin d'un mot ou d'une syllabe lorsque le son [s] suit une voyelle, mais ne correspond pas aux règles du ß ou du ss. C'est souvent le cas pour les pluriels ou les noms simples.",
    words: [
      { word: 'Los', translation: 'billet de loterie / destin' },
      { word: 'Gas', translation: 'gaz' },
      { word: 'Haus', translation: 'maison' },
      { word: 'Hindernis', translation: 'obstacle' },
      { word: 'etwas', translation: 'quelque chose' },
      { word: 'alles', translation: 'tout' },
      { word: 'Bus', translation: 'bus' },
      { word: 'Preis', translation: 'prix' },
    ]
  }
];

export const scharfesSQuiz: ScharfesSQuizQuestion[] = [
  { gapped: 'gro_', full: 'groß', correct: 'ß', hint: 'La voyelle "o" est longue.' },
  { gapped: 'e_en', full: 'essen', correct: 'ss', hint: 'La voyelle "e" est courte.' },
  { gapped: 'Fu_', full: 'Fuß', correct: 'ß', hint: 'La voyelle "u" est longue.' },
  { gapped: 'Kla_e', full: 'Klasse', correct: 'ss', hint: 'La voyelle "a" est courte.' },
  { gapped: 'wei_', full: 'weiß', correct: 'ß', hint: 'La diphtongue "ei" est toujours longue.' },
  { gapped: 'mü_en', full: 'müssen', correct: 'ss', hint: 'La voyelle "ü" est courte.' },
  { gapped: 'Stra_e', full: 'Straße', correct: 'ß', hint: 'La voyelle "a" est longue.' },
  { gapped: 'Flu_', full: 'Fluss', correct: 'ss', hint: 'La voyelle "u" est courte.' },
  { gapped: 'genie_en', full: 'genießen', correct: 'ß', hint: 'Le "ie" est un "i" long.' },
  { gapped: 'la_en', full: 'lassen', correct: 'ss', hint: 'La voyelle "a" est courte.' },
];
