import type { PfWord, PfQuizQuestion } from '../types';

export const pfWords: PfWord[] = [
  { word: 'Knopf', ipa: '[knɔpf]', translation: 'bouton' },
  { word: 'Pferd', ipa: '[p͡fɛʁt]', translation: 'cheval' },
  { word: 'Pfeil', ipa: '[p͡faɪ̯l]', translation: 'flèche' },
  { word: 'Pfau', ipa: '[p͡faʊ̯]', translation: 'paon' },
  { word: 'Kopf', ipa: '[kɔp͡f]', translation: 'tête' },
  { word: 'Topf', ipa: '[tɔp͡f]', translation: 'casserole' },
  { word: 'Pfund', ipa: '[p͡fʊnt]', translation: 'livre (unité)' },
  { word: 'Pfand', ipa: '[p͡fant]', translation: 'consigne' },
  { word: 'pfeifen', ipa: '[ˈp͡faɪ̯fn̩]', translation: 'siffler' },
  { word: 'Tropfen', ipa: '[ˈtʁɔp͡fn̩]', translation: 'goutte' },
  { word: 'Strumpf', ipa: '[ʃtʁʊmp͡f]', translation: 'chaussette' },
  { word: 'Apfel', ipa: '[ˈap͡fl̩]', translation: 'pomme' },
];

export const pfQuiz: PfQuizQuestion[] = [
  {
    question: "Comment se prononce le début du mot 'Pferd' ?",
    options: ['Comme un simple P', 'Puis F, très vite [pf]'],
    answer: 'Puis F, très vite [pf]',
    explanation: "Richtig ! On prononce le P et le F ensemble, en un seul son explosif."
  },
  {
    question: "Lequel de ces mots contient le son [pf] ?",
    options: ['Vater', 'Apfel', 'Fiel'],
    answer: 'Apfel',
    explanation: "Parfait ! 'Apfel' se prononce [ˈap͡fl̩], avec le son [pf] au milieu."
  },
  {
    question: "Le son 'Pf' est...",
    options: ['Un son typiquement allemand', 'Un son typiquement français'],
    answer: 'Un son typiquement allemand',
    explanation: "Excellent ! Ce son est l'une des signatures de la prononciation allemande."
  },
];