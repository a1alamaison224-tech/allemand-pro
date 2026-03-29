import type { DiphthongCategory } from '../types';

export const diphthongData: DiphthongCategory[] = [
  {
    diphthong: 'AI / EI',
    pronunciation: '[aɪ̯]',
    rule: "Cette combinaison se prononce <strong>[aï]</strong>, un peu comme dans le mot français 'aïe'. Le son commence par un 'a' ouvert et glisse rapidement vers un 'i'. C'est le son le plus courant pour 'ei'.",
    words: [
      { word: 'Bein', ipa: '[baɪ̯n]', translation: 'jambe' },
      { word: 'Seife', ipa: '[ˈzaɪ̯fə]', translation: 'savon' },
      { word: 'Beil', ipa: '[baɪ̯l]', translation: 'hache' },
      { word: 'Reise', ipa: '[ˈʁaɪ̯zə]', translation: 'voyage' },
      { word: 'nein', ipa: '[naɪ̯n]', translation: 'non' },
      { word: 'Kreis', ipa: '[kʁaɪ̯s]', translation: 'cercle' },
    ]
  },
  {
    diphthong: 'AU',
    pronunciation: '[aʊ̯]',
    rule: "Se prononce <strong>[aou]</strong>, comme dans 'août' en français, mais en liant les sons très rapidement. Le son part d'un 'a' et glisse vers un 'ou' court.",
    words: [
      { word: 'Haus', ipa: '[haʊ̯s]', translation: 'maison' },
      { word: 'laufen', ipa: '[ˈlaʊ̯fn̩]', translation: 'courir' },
      { word: 'kaufen', ipa: '[ˈkaʊ̯fn̩]', translation: 'acheter' },
      { word: 'Laube', ipa: '[ˈlaʊ̯bə]', translation: 'tonnelle' },
      { word: 'rauchen', ipa: '[ˈʁaʊ̯xn̩]', translation: 'fumer' },
    ]
  },
  {
    diphthong: 'EU / ÄU',
    pronunciation: '[ɔɪ̯]',
    rule: "Se prononce <strong>[oï]</strong>, un peu comme le son dans 'boy' en anglais. Le son commence par un 'o' ouvert (comme dans 'botte') et glisse vers un son 'i' bref. Les deux graphies 'eu' et 'äu' produisent le même son.",
    words: [
      { word: 'Leute', ipa: '[ˈlɔɪ̯tə]', translation: 'gens' },
      { word: 'heute', ipa: '[ˈhɔɪ̯tə]', translation: 'aujourd\'hui' },
      { word: 'Mäuse', ipa: '[ˈmɔɪ̯zə]', translation: 'souris (pluriel)' },
      { word: 'Kräuter', ipa: '[ˈkʁɔɪ̯tɐ]', translation: 'herbes' },
      { word: 'Feuer', ipa: '[ˈfɔɪ̯ɐ]', translation: 'feu' },
      { word: 'Kreuz', ipa: '[kʁɔɪ̯t͡s]', translation: 'croix' },
      { word: 'Häuser', ipa: '[ˈhɔɪ̯zɐ]', translation: 'maisons (pluriel)' },
    ]
  },
  {
    diphthong: 'OI / UI',
    pronunciation: 'Variée',
    rule: "Ces combinaisons sont beaucoup plus rares et souvent trompeuses. Dans les mots d'emprunt comme <strong>'Boiler'</strong>, 'oi' se prononce [ɔɪ̯] (comme 'eu'/'äu'). Cependant, attention aux exceptions où l'orthographe ne correspond pas à une diphtongue : dans <strong>'Troisdorf'</strong> (un nom de ville), il se prononce [oː] long, et dans <strong>'Asteroid'</strong>, les voyelles sont séparées [o-i]. <strong>'ui'</strong> n'est généralement pas une diphtongue mais deux sons séparés, sauf dans des interjections comme 'pfui' [pfʊɪ̯] ou des exceptions comme 'Duisburg' où 'ui' se prononce comme un 'ü' long [yː].",
    words: [
      { word: 'Boiler', ipa: '[ˈbɔɪ̯lɐ]', translation: 'chauffe-eau' },
      { word: 'Asteroid', ipa: '[asteʁoˈiːt]', translation: 'astéroïde' },
      { word: 'Troisdorf', ipa: '[ˈtʁoːsdɔʁf]', translation: 'Troisdorf (ville)' },
      { word: 'pfui', ipa: '[pfʊɪ̯]', translation: 'pouah' },
      { word: 'Duisburg', ipa: '[ˈdyːsbʊʁk]', translation: 'Duisbourg (ville)' },
      { word: 'Pinguin', ipa: '[ˈpɪŋɡuiːn]', translation: 'pingouin' },
    ]
  }
];