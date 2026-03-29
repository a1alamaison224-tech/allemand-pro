import type { XWord, XQuizQuestion } from '../types';

export const xWords: XWord[] = [
  { word: 'Taxi', ipa: '[ˈtaksi]' },
  { word: 'Fax', ipa: '[faks]' },
  { word: 'Luxus', ipa: '[ˈlʊksʊs]' },
  { word: 'Mexiko', ipa: '[ˈmɛksiko]' },
  { word: 'Lexikon', ipa: '[ˈlɛksikɔn]' },
];

export const chsWords: XWord[] = [
  { word: 'sechs', ipa: '[zɛks]' },
  { word: 'Fuchs', ipa: '[fʊks]' },
  { word: 'Niedersachsen', ipa: '[ˈniːdɐzaksn̩]' },
  { word: 'Ochse', ipa: '[ˈɔksə]' },
  { word: 'Wachs', ipa: '[vaks]' },
  { word: 'Achse', ipa: '[ˈaksə]' },
];

export const xQuiz: XQuizQuestion[] = [
  {
    question: "Comment se prononce le 'x' dans le mot 'Taxi' ?",
    options: ['[ks]', '[s]', '[ch]'],
    answer: '[ks]',
    explanation: "Excellent ! Le 'x' se prononce toujours [ks], comme dans le mot français."
  },
  {
    question: "Le groupe de lettres 'chs' dans le mot 'sechs' sonne comme...",
    options: ['[ch] + [s]', '[ks]', '[sch]'],
    answer: '[ks]',
    explanation: "Parfait ! Le groupe 'chs' se prononce [ks], tout comme la lettre 'x'."
  },
  {
    question: "Vrai ou Faux : Les prononciations de 'X' et 'chs' sont identiques en allemand.",
    options: ['Vrai', 'Faux'],
    answer: 'Vrai',
    explanation: "Absolument ! C'est la règle à retenir : X = chs = [ks]."
  },
];
