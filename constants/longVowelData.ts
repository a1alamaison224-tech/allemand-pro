import type { LongVowelCategory } from '../types';

export const longVowelData: LongVowelCategory[] = [
  {
    title: 'Vokalverdoppelung (Voyelle doublée)',
    rule: "Quand une voyelle (a, e, o) est doublée, elle est toujours longue. C'est la règle la plus simple à retenir !",
    words: [
      { word: 'Saal', syllables: 'Saal', ipa: '[zaːl]', translation: 'salle' },
      { word: 'Beere', syllables: 'Bee-re', ipa: '[ˈbeːʁə]', translation: 'baie' },
      { word: 'Moor', syllables: 'Moor', ipa: '[moːɐ̯]', translation: 'marais' },
      { word: 'Zoo', syllables: 'Zoo', ipa: '[t͡soː]', translation: 'zoo' },
      { word: 'Paar', syllables: 'Paar', ipa: '[paːɐ̯]', translation: 'paire' },
      { word: 'Meer', syllables: 'Meer', ipa: '[meːɐ̯]', translation: 'mer' },
    ]
  },
  {
    title: 'Dehnungs-h (H d\'allongement)',
    rule: "Un 'h' placé juste après une voyelle est muet. Son seul rôle est de nous indiquer que cette voyelle doit être prononcée de manière longue.",
    words: [
      { word: 'Wahl', syllables: 'Wahl', ipa: '[vaːl]', translation: 'choix' },
      { word: 'Sehne', syllables: 'Seh-ne', ipa: '[ˈzeːnə]', translation: 'tendon' },
      { word: 'Ihr', syllables: 'Ihr', ipa: '[iːɐ̯]', translation: 'vous (pol.) / leur' },
      { word: 'Bohne', syllables: 'Boh-ne', ipa: '[ˈboːnə]', translation: 'haricot' },
      { word: 'Huhn', syllables: 'Huhn', ipa: '[huːn]', translation: 'poulet' },
      { word: 'Fähre', syllables: 'Fäh-re', ipa: '[ˈfɛːʁə]', translation: 'ferry' },
      { word: 'Föhn', syllables: 'Föhn', ipa: '[føːn]', translation: 'sèche-cheveux' },
      { word: 'kühn', syllables: 'kühn', ipa: '[kyːn]', translation: 'audacieux' },
      { word: 'Röhre', syllables: 'Röh-re', ipa: '[ˈʁøːʁə]', translation: 'tube' },
      { word: 'Mehl', syllables: 'Mehl', ipa: '[meːl]', translation: 'farine' },
      { word: 'zählen', syllables: 'zäh-len', ipa: '[ˈt͡sɛːlən]', translation: 'compter' },
      { word: 'Bühne', syllables: 'Büh-ne', ipa: '[ˈbyːnə]', translation: 'scène' },
      { word: 'Sohle', syllables: 'Soh-le', ipa: '[ˈzoːlə]', translation: 'semelle' },
      { word: 'Zahl', syllables: 'Zahl', ipa: '[t͡saːl]', translation: 'nombre' },
      { word: 'ihm', syllables: 'ihm', ipa: '[iːm]', translation: 'à lui' },
      { word: 'Fuhre', syllables: 'Fuh-re', ipa: '[ˈfuːʁə]', translation: 'chargement' },
    ]
  },
  {
    title: 'Le "ie" long',
    rule: "Le groupe de lettres 'ie' se prononce presque toujours comme un 'i' long [iː], similaire au 'i' du mot français 'gîte'. Ne prononcez pas le 'e' !",
    words: [
      { word: 'Tier', syllables: 'Tier', ipa: '[tiːɐ̯]', translation: 'animal' },
      { word: 'viel', syllables: 'viel', ipa: '[fiːl]', translation: 'beaucoup' },
    ]
  },
];
