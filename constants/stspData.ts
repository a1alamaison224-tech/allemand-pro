import type { StSpWord, StSpQuizQuestion } from '../types';

export const stWords: StSpWord[] = [
  { word: 'Straße', ipa: '[ˈʃtʁaːsə]', pronunciationHint: 'Schtra-ße' },
  { word: 'Stadt', ipa: '[ʃtat]', pronunciationHint: 'Schtatt' },
  { word: 'Stuhl', ipa: '[ʃtuːl]', pronunciationHint: 'Schtoul' },
  { word: 'stehen', ipa: '[ˈʃteːən]', pronunciationHint: 'Schte-hen' },
  { word: 'Stimme', ipa: '[ˈʃtɪmə]', pronunciationHint: 'Schtim-me' },
  { word: 'bestellen', ipa: '[bəˈʃtɛlən]', pronunciationHint: 'be-schtellen (début de syllabe)' },
];

export const spWords: StSpWord[] = [
  { word: 'Spiel', ipa: '[ʃpiːl]', pronunciationHint: 'Schpiel' },
  { word: 'Sport', ipa: '[ʃpɔʁt]', pronunciationHint: 'Schport' },
  { word: 'Spalte', ipa: '[ˈʃpaltə]', pronunciationHint: 'Schpal-te' },
  { word: 'sprechen', ipa: '[ˈʃpʁɛçn̩]', pronunciationHint: 'Schpre-chen' },
  { word: 'spät', ipa: '[ʃpɛːt]', pronunciationHint: 'Schpät' },
  { word: 'Beispiel', ipa: '[ˈbaɪʃpiːl]', pronunciationHint: 'Bei-schpiel (début de syllabe)' },
];

export const stspExceptions: StSpWord[] = [
    { word: 'fasten', ipa: '[ˈfastn̩]', pronunciationHint: 'fas-ten (pas en début de syllabe)' },
    { word: 'Kosten', ipa: '[ˈkɔstn̩]', pronunciationHint: 'Kos-ten (pas en début de syllabe)' },
    { word: 'Knospe', ipa: '[ˈknɔspə]', pronunciationHint: 'Knos-pe (pas en début de syllabe)' },
    { word: 'lustig', ipa: '[ˈlʊstɪç]', pronunciationHint: 'lus-tig (pas en début de syllabe)' },
];


export const stspQuiz: StSpQuizQuestion[] = [
  {
    question: "Comment se prononce le mot 'Straße' ?",
    options: ['[Sch-tra-ße]', '[S-tra-ße]'],
    answer: '[Sch-tra-ße]',
    explanation: "Richtig ! 'St' est en début de mot, donc on le prononce [ʃt]."
  },
  {
    question: "Comment se prononce le mot 'sprechen' ?",
    options: ['[s-pre-chen]', '[sch-pre-chen]'],
    answer: '[sch-pre-chen]',
    explanation: "Parfait ! 'Sp' est en début de mot, donc on le prononce [ʃp]."
  },
  {
    question: "Et le mot 'Kosten' (coûts) ?",
    options: ['[Kos-ten]', '[Kosch-ten]'],
    answer: '[Kos-ten]',
    explanation: "Excellent ! Ici, 'st' n'est pas en début de mot ou de syllabe, donc la prononciation est normale [st]."
  },
  {
    question: "Vrai ou Faux : 'St' et 'Sp' se prononcent toujours 'Scht' et 'Schp'.",
    options: ['Vrai', 'Faux'],
    answer: 'Faux',
    explanation: "Exactement ! Cette règle ne s'applique qu'au début d'un mot ou d'une syllabe."
  }
];
