import type { YpsilonWord, YpsilonQuizQuestion } from '../types';

export const ypsilonAsUmlautUWords: YpsilonWord[] = [
  { word: 'Xylofon', ipa: '[ksyloˈfoːn]', pronunciationHint: 'Prononcé comme "ü"' },
  { word: 'Physik', ipa: '[fyˈziːk]', pronunciationHint: 'Prononcé comme "ü"' },
  { word: 'Enzym', ipa: '[ɛnˈtsyːm]', pronunciationHint: 'Prononcé comme "ü"' },
  { word: 'Gymnastik', ipa: '[gʏmˈnastɪk]', pronunciationHint: 'Prononcé comme "ü"' },
  { word: 'typisch', ipa: '[ˈtyːpɪʃ]', pronunciationHint: 'Prononcé comme "ü"' },
  { word: 'System', ipa: '[zʏsˈteːm]', pronunciationHint: 'Prononcé comme "ü"' },
];

export const ypsilonAsIWords: YpsilonWord[] = [
  { word: 'Pony', ipa: '[ˈpɔni]', pronunciationHint: 'Prononcé comme "i"' },
  { word: 'Party', ipa: '[ˈpaːɐ̯ti]', pronunciationHint: 'Prononcé comme "i"' },
  { word: 'Hobby', ipa: '[ˈhɔbi]', pronunciationHint: 'Prononcé comme "i"' },
  { word: 'Baby', ipa: '[ˈbeːbi]', pronunciationHint: 'Prononcé comme "i"' },
];

export const ypsilonAsJWords: YpsilonWord[] = [
    { word: 'Yoga', ipa: '[ˈjoːɡa]', pronunciationHint: 'Prononcé comme "j" ([y])' },
    { word: 'Yacht', ipa: '[jaxt]', pronunciationHint: 'Prononcé comme "j" ([y])' },
];


export const ypsilonQuiz: YpsilonQuizQuestion[] = [
  {
    question: "Comment se prononce le 'y' dans le mot 'Physik' ?",
    options: ['Comme le "u" français', 'Comme le "i" français', 'Comme le "j" français'],
    answer: 'Comme le "u" français',
    explanation: "Correct ! Dans les mots d'origine grecque comme 'Physik', le 'y' se prononce comme le 'ü' allemand, qui est très proche du 'u' français."
  },
  {
    question: "Dans le mot 'Hobby', le 'y' final se prononce...",
    options: ['[ü]', '[i]', '[j]'],
    answer: '[i]',
    explanation: "Excellent ! Dans les mots empruntés à l'anglais, le 'y' final se prononce comme un 'i'."
  },
  {
    question: "Quelle est la prononciation du 'Y' dans le mot 'Yoga' ?",
    options: ['You-ga [joːɡa]', 'U-ga [yːɡa]', 'I-o-ga [i.oɡa]'],
    answer: 'You-ga [joːɡa]',
    explanation: "Parfait ! Ici, le 'Y' se prononce comme un 'J' allemand, c'est-à-dire le son [y] du mot français 'yaourt'."
  }
];
