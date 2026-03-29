import type { ConsonantRule } from '../types';

export const consonantRules: ConsonantRule[] = [
  {
    letter: 'K, k',
    rule: 'Se prononce toujours [k], comme le "k" de "képi". C\'est un son dur et clair, jamais comme le "qu" français.',
    words: [
      {
        word: 'Kind',
        ipa: '[kɪnt]',
        quiz: {
          question: 'Le "K" de "Kind" se prononce comme...',
          options: [
            { text: 'Le "qu" de "qui"', isCorrect: true },
            { text: 'Le "ch" de "chat"', isCorrect: false },
          ],
          explanation: 'Correct ! C\'est un [k] sec, comme dans "kangourou".',
        },
      },
      {
        word: 'Kuchen',
        ipa: '[ˈkuːxn̩]',
        quiz: {
          question: 'Le son [k] dans "Kuchen" est...',
          options: [
            { text: 'Dur et clair', isCorrect: true },
            { text: 'Doux et aspiré', isCorrect: false },
          ],
          explanation: 'Oui, le "K" allemand est toujours un son plosif et non aspiré.',
        },
      },
      {
        word: 'Krone',
        ipa: '[ˈkʁoːnə]',
        quiz: {
          question: 'Le "K" dans "Krone" se prononce comme...',
          options: [
            { text: 'Le "c" de "car"', isCorrect: true },
            { text: 'Le "ch" de "chef"', isCorrect: false },
          ],
          explanation: 'Toujours un son [k] dur, comme dans "kilo".',
        },
      },
      {
        word: 'Anker',
        ipa: '[ˈaŋkɐ]',
        quiz: {
          question: 'Le son du "k" dans "Anker" est...',
          options: [
            { text: 'Doux et aspiré', isCorrect: false },
            { text: 'Dur et non aspiré', isCorrect: true },
          ],
          explanation: 'C\'est un son [k] clair et sec.',
        },
      },
      {
        word: 'Kakadu',
        ipa: '[ˈkakadu]',
        quiz: {
          question: 'Combien de sons [k] entendez-vous dans "Kakadu" ?',
          options: [
            { text: 'Un', isCorrect: false },
            { text: 'Deux', isCorrect: true },
          ],
          explanation: 'Exact, les deux "k" sont prononcés durement.',
        },
      },
    ],
  },
  {
    letter: 'J, j',
    rule: 'Attention, piège ! Se prononce [y], comme le "y" de "yaourt" ou "yoga". Jamais comme le "j" de "jardin".',
    words: [
      {
        word: 'Jahr',
        ipa: '[jaːɐ̯]',
        quiz: {
          question: 'Le "J" de "Jahr" sonne comme...',
          options: [
            { text: 'Le "j" de "jour"', isCorrect: false },
            { text: 'Le "y" de "yaourt"', isCorrect: true },
            { text: 'Le "ch" de "chat"', isCorrect: false },
          ],
          explanation: 'Parfait ! C\'est le son [y], une semi-voyelle, comme "yo-yo".',
        },
      },
      {
        word: 'jetzt',
        ipa: '[jɛt͡st]',
        quiz: {
          question: 'Quel mot français commence avec le même son que "jetzt" ?',
          options: [
            { text: 'Jeu', isCorrect: false },
            { text: 'Gentil', isCorrect: false },
            { text: 'Yacht', isCorrect: true },
          ],
          explanation: 'Exactement ! Le son est [y], comme dans "yacht".',
        },
      },
      {
        word: 'Junge',
        ipa: '[ˈjʊŋə]',
        quiz: {
          question: 'Le "J" de "Junge" sonne comme...',
          options: [
            { text: 'Le "j" de "jeune"', isCorrect: false },
            { text: 'Le "y" de "yeux"', isCorrect: true },
          ],
          explanation: 'Parfait ! Le son [y] est comme le début du mot "yoga".',
        },
      },
      {
        word: 'Judo',
        ipa: '[ˈjuːdo]',
        quiz: {
          question: 'Comment se prononce le début de "Judo" en allemand ?',
          options: [
            { text: 'Djou-do', isCorrect: false },
            { text: 'You-do', isCorrect: true },
          ],
          explanation: 'Correct ! En allemand, "Judo" se prononce avec un son [y] initial.',
        },
      },
      {
        word: 'Soja',
        ipa: '[ˈzoːja]',
        quiz: {
          question: 'Le "j" dans "Soja" se prononce comme...',
          options: [
            { text: 'Le "j" de "déjà"', isCorrect: false },
            { text: 'Le "y" de "soyez"', isCorrect: true },
          ],
          explanation: 'Très bien, c\'est le son [y] de la semi-voyelle.',
        },
      },
    ],
  },
  {
    letter: 'Z, z',
    rule: 'Très différent du français. Se prononce [ts], comme le son "ts" dans "tsunami" ou "pizza". C\'est un son très bref et percutant.',
    words: [
      {
        word: 'Zeit',
        ipa: '[t͡saɪ̯t]',
        quiz: {
          question: 'Le "Z" de "Zeit" combine quels sons ?',
          options: [
            { text: '[t] + [s]', isCorrect: true },
            { text: 'Juste [s]', isCorrect: false },
            { text: 'Juste [z]', isCorrect: false },
          ],
          explanation: 'C\'est ça ! Un [t] et un [s] prononcés très rapidement ensemble.',
        },
      },
      {
        word: 'Zebra',
        ipa: '[ˈtseːbʁa]',
        quiz: {
          question: 'La prononciation de "Zebra" commence comme...',
          options: [
            { text: '"Zèbre" en français', isCorrect: false },
            { text: 'Le mot "tsar"', isCorrect: true },
          ],
          explanation: 'Absolument. Le son initial est [ts].',
        },
      },
      {
        word: 'Medizin',
        ipa: '[mediˈt͡siːn]',
        quiz: {
          question: 'Le "z" dans "Medizin" se prononce...',
          options: [
            { text: '[ts] comme dans "pizza"', isCorrect: true },
            { text: '[z] comme dans "zoo"', isCorrect: false },
          ],
          explanation: 'Exact ! Le son est [ts], très percutant.',
        },
      },
      {
        word: 'Zitrone',
        ipa: '[t͡siˈtʁoːnə]',
        quiz: {
          question: 'Le mot "Zitrone" commence avec le son...',
          options: [
            { text: '[s]', isCorrect: false },
            { text: '[z]', isCorrect: false },
            { text: '[ts]', isCorrect: true },
          ],
          explanation: 'Parfait, c\'est le son [ts] typique du "Z" allemand.',
        },
      },
    ],
  },
  {
    letter: 'Qu, qu',
    rule: 'On prononce les deux lettres : [kv]. Le "u" sonne comme un "v" très court. Pensez au mot "é(qu)ateur".',
    words: [
      {
        word: 'Quelle',
        ipa: '[ˈkvɛlə]',
        quiz: {
          question: 'Le son "Qu" dans "Quelle" est...',
          options: [
            { text: '[k] comme dans "qui"', isCorrect: false },
            { text: '[k] + [v]', isCorrect: true },
          ],
          explanation: 'Très bien ! On entend bien le [k] suivi du son [v].',
        },
      },
      {
        word: 'Quiz',
        ipa: '[kvɪs]',
        quiz: {
          question: 'Comment décomposer la prononciation de "Quiz" ?',
          options: [
            { text: 'K - i - s', isCorrect: false },
            { text: 'K - v - i - s', isCorrect: true },
          ],
          explanation: 'Oui, c\'est le son [kv] au début.',
        },
      },
       {
        word: 'Qualle',
        ipa: '[ˈkvalə]',
        quiz: {
          question: 'Le son "qu" dans "Qualle" est prononcé...',
          options: [
            { text: '[k]', isCorrect: false },
            { text: '[kv]', isCorrect: true },
          ],
          explanation: 'Oui, on entend bien le "k" suivi d\'un "v".',
        },
      },
      {
        word: 'quaken',
        ipa: '[ˈkvaːkn̩]',
        quiz: {
          question: 'Le son "qu" dans "quaken" ressemble à celui de...',
          options: [
            { text: '\'quatre\' en français', isCorrect: false },
            { text: '\'équateur\' en français', isCorrect: true },
          ],
          explanation: 'Très bien ! C\'est le son [kv].',
        },
      },
    ],
  },
   {
    letter: 'C, c / Ch',
    rule: `Le 'c' est rare et suit des règles précises. Le 'ch' a plusieurs prononciations, c'est une des plus grandes difficultés !<br/><strong class="font-semibold text-slate-800">'c' seul :</strong> Devant 'a, o, u' -> [k] (Cafe). Devant 'e, i' -> [ts] (Cent). Les emprunts peuvent varier (City -> [s]).<br/><strong class="font-semibold text-slate-800">'ch' :</strong><ul class="list-disc list-inside mt-1 text-sm space-y-1"><li><strong class="font-semibold">[k]</strong> au début de mots d'origine grecque (Chor, Chaos).</li><li><strong class="font-semibold">[ç] (ich-Laut)</strong> après 'e, i, ä, ö, ü' et consonnes (Chemie, ich). Son aigu, depuis l'avant de la bouche.</li><li><strong class="font-semibold">[x] (ach-Laut)</strong> après 'a, o, u, au' (Dach, Buch). Son guttural, depuis l'arrière de la gorge.</li><li><strong class="font-semibold">[ʃ]</strong> ("ch" français) dans les emprunts au français (Charlotte).</li><li><strong class="font-semibold">[tʃ]</strong> ("tch" anglais) dans les emprunts à l'anglais (Chips).</li></ul>`,
    words: [
      {
        word: 'Cafe',
        ipa: '[kaˈfeː]',
        quiz: {
          question: 'Dans "Cafe", le "C" se prononce comme...',
          options: [
            { text: 'Un [s]', isCorrect: false },
            { text: 'Un [k]', isCorrect: true },
          ],
          explanation: 'Correct, devant un "a", le "c" sonne comme un [k].',
        },
      },
      {
        word: 'Cent',
        ipa: '[t͡sɛnt]',
        quiz: {
          question: 'Dans "Cent", le "C" se prononce comme...',
          options: [
            { text: 'Un [s] comme en français', isCorrect: false },
            { text: 'Un [ts] comme la lettre Z', isCorrect: true },
          ],
          explanation: 'Exact ! Devant un "e", le "c" se prononce [ts], comme "Zent".',
        },
      },
      {
        word: 'Celsius',
        ipa: '[ˈt͡sɛlzi̯ʊs]',
        quiz: {
          question: 'Dans "Celsius", le "C" initial se prononce comme...',
          options: [
            { text: 'La lettre Z allemande ([ts])', isCorrect: true },
            { text: 'La lettre S ([s])', isCorrect: false },
          ],
          explanation: 'Exact ! Devant un "e", le "c" se prononce souvent [ts], comme la lettre Z.',
        },
      },
      {
        word: 'Computer',
        ipa: '[kɔmˈpjuːtɐ]',
        quiz: {
          question: 'Dans "Computer", le "C" se prononce comme...',
          options: [
            { text: 'Un [k]', isCorrect: true },
            { text: 'Un [s]', isCorrect: false },
          ],
          explanation: 'Parfait. Devant "o", "a", "u", le "c" se prononce [k].',
        },
      },
       {
        word: 'Coca Cola',
        ipa: '[ˈkoːka ˈkoːla]',
        quiz: {
          question: 'Les deux "C" de "Coca Cola" se prononcent...',
          options: [
            { text: '[k] et [s]', isCorrect: false },
            { text: 'Les deux comme [k]', isCorrect: true },
          ],
          explanation: 'Exact. Devant "o", le "c" se prononce [k].',
        },
      },
      {
        word: 'City',
        ipa: '[ˈsɪti]',
        quiz: {
          question: 'Pourquoi le "C" de "City" se prononce [s] et non [ts] ?',
          options: [
            { text: 'C\'est un mot emprunté à l\'anglais', isCorrect: true },
            { text: 'La règle du [ts] est fausse', isCorrect: false },
          ],
          explanation: 'Correct. Les mots d\'emprunt conservent souvent leur prononciation d\'origine.',
        },
      },
      {
        word: 'Chemie',
        ipa: '[çeˈmiː]',
        quiz: {
          question: 'Le son "ch" dans "Chemie" est un...',
          options: [
            { text: 'Son doux [ç] (ich-Laut)', isCorrect: true },
            { text: 'Son dur [k]', isCorrect: false },
          ],
          explanation: 'Très bien ! Le "ch" de "Chemie" est un "ich-Laut" [ç], un son qui n\'existe pas en français.',
        },
      },
      {
        word: 'Chor',
        ipa: '[koːɐ̯]',
        quiz: {
          question: 'Le "ch" au début de "Chor" se prononce...',
          options: [
            { text: 'Comme un [k]', isCorrect: true },
            { text: 'Comme le "ch" de "chat"', isCorrect: false },
          ],
          explanation: 'Oui ! Dans beaucoup de mots d\'origine grecque, "ch" en début de mot se prononce [k].',
        },
      },
      {
        word: 'Charlotte',
        ipa: '[ʃaʁˈlɔtə]',
        quiz: {
          question: 'Le "ch" dans "Charlotte" se prononce comme en français car...',
          options: [
            { text: 'C\'est un emprunt au français', isCorrect: true },
            { text: 'Toutes les lettres sont les mêmes', isCorrect: false },
          ],
          explanation: 'Exactement. L\'allemand conserve la prononciation [ʃ] ("ch" de chat) pour ce nom d\'origine française.',
        },
      },
      {
        word: 'Chips',
        ipa: '[tʃɪps]',
        quiz: {
          question: 'Le son "ch" dans "Chips" est prononcé...',
          options: [
            { text: '[tʃ] comme "match"', isCorrect: true },
            { text: '[ʃ] comme "chat"', isCorrect: false },
          ],
          explanation: 'Correct ! Pour cet emprunt à l\'anglais, on utilise la prononciation anglaise [tʃ].',
        },
      },
      {
        word: 'Chaos',
        ipa: '[ˈkaːɔs]',
        quiz: {
          question: 'La prononciation de "Chaos" en allemand est...',
          options: [
            { text: '[kaːɔs]', isCorrect: true },
            { text: '[ʃaɔs]', isCorrect: false },
          ],
          explanation: 'Parfait ! Comme "Chor", le "ch" initial se prononce [k].',
        },
      },
    ],
  },
  {
    letter: 'F, f / V, v / Ph, ph',
    rule: "Le 'F' et 'Ph' se prononcent toujours <strong>[f]</strong>, comme dans '<strong>f</strong>amille'. Le 'V' se prononce aussi <strong>[f]</strong> dans la plupart des mots d'origine germanique. C'est le son 'sourd' (non-voisé).",
    words: [
      { word: 'Fuge', ipa: '[ˈfuːɡə]', quiz: { question: "Le 'F' de 'Fuge' se prononce...", options: [{ text: '[f]', isCorrect: true }, { text: '[v]', isCorrect: false }], explanation: "Le 'F' allemand est toujours [f]." } },
      { word: 'Vater', ipa: '[ˈfaːtɐ]', quiz: { question: "Le 'V' de 'Vater' se prononce...", options: [{ text: '[f]', isCorrect: true }, { text: '[v]', isCorrect: false }], explanation: "Dans les mots allemands natifs comme 'Vater', le V se prononce [f]." } },
      { word: 'Vogel', ipa: '[ˈfoːɡl̩]', quiz: { question: "Le 'V' de 'Vogel' se prononce...", options: [{ text: '[f]', isCorrect: true }, { text: '[v]', isCorrect: false }], explanation: "C'est un mot d'origine germanique, donc le V se prononce [f]." } },
      { word: 'fertig', ipa: '[ˈfɛʁtɪç]', quiz: { question: "Le 'F' de 'fertig' se prononce...", options: [{ text: '[f]', isCorrect: true }, { text: '[v]', isCorrect: false }], explanation: "Le 'F' allemand est toujours [f]." } },
      { word: 'Faden', ipa: '[ˈfaːdn̩]', quiz: { question: "Le 'F' de 'Faden' se prononce...", options: [{ text: '[f]', isCorrect: true }, { text: '[v]', isCorrect: false }], explanation: "Le 'F' allemand est toujours [f]." } },
      { word: 'Pharao', ipa: '[ˈfaːʁao]', quiz: { question: "Le 'Ph' de 'Pharao' se prononce...", options: [{ text: '[f]', isCorrect: true }, { text: '[p] + [h]', isCorrect: false }], explanation: "Le groupe 'Ph' se prononce [f], comme en français." } },
      { word: 'Alphabet', ipa: '[alfaˈbeːt]', quiz: { question: "Le 'ph' de 'Alphabet' se prononce...", options: [{ text: '[f]', isCorrect: true }, { text: '[p] + [h]', isCorrect: false }], explanation: "Le groupe 'ph' se prononce comme un seul son : [f]." } },
      { word: 'Physik', ipa: '[fyˈziːk]', quiz: { question: "Le 'Ph' de 'Physik' se prononce...", options: [{ text: '[f]', isCorrect: true }, { text: '[p] aspiré', isCorrect: false }], explanation: "Comme en français, 'ph' se prononce [f]." } },
      { word: 'Vorname', ipa: '[ˈfoːɐ̯ˌnaːmə]', quiz: { question: "Le 'V' de 'Vorname' se prononce...", options: [{ text: '[f]', isCorrect: true }, { text: '[v]', isCorrect: false }], explanation: "Dans le préfixe 'vor-', le V se prononce [f]." } },
      { word: 'Fuder', ipa: '[ˈfuːdɐ]', quiz: { question: "Le 'F' de 'Fuder' se prononce...", options: [{ text: '[f]', isCorrect: true }, { text: '[v]', isCorrect: false }], explanation: "Le 'F' allemand est toujours [f]." } },
      { word: 'Philosoph', ipa: '[filoˈzoːf]', quiz: { question: "Le 'Ph' de 'Philosoph' se prononce...", options: [{ text: '[f]', isCorrect: true }, { text: '[p] + [h]', isCorrect: false }], explanation: "Le groupe 'ph' se prononce [f]." } },
      { word: 'Finger', ipa: '[ˈfɪŋɐ]', quiz: { question: "Le 'F' de 'Finger' se prononce...", options: [{ text: '[f]', isCorrect: true }, { text: '[v]', isCorrect: false }], explanation: "Le 'F' allemand est toujours [f]." } },
      { word: 'Ferien', ipa: '[ˈfeːʁiən]', quiz: { question: "Le 'F' de 'Ferien' se prononce...", options: [{ text: '[f]', isCorrect: true }, { text: '[v]', isCorrect: false }], explanation: "Le 'F' allemand est toujours [f]." } },
    ]
  },
  {
    letter: 'W, w / V, v',
    rule: "Le 'W' allemand se prononce toujours <strong>[v]</strong>, comme dans '<strong>v</strong>oiture'. C'est un son 'sonore' (voisé). Le 'V' se prononce également <strong>[v]</strong> dans de nombreux mots d'emprunt (d'origine étrangère). Ne prononcez jamais le 'W' comme en anglais ('wagon') !",
    words: [
      { word: 'Wasser', ipa: '[ˈvasɐ]', quiz: { question: "Le 'W' de 'Wasser' se prononce...", options: [{ text: '[v]', isCorrect: true }, { text: 'comme dans "wagon"', isCorrect: false }], explanation: "Le 'W' allemand est toujours un son [v]." } },
      { word: 'Vase', ipa: '[ˈvaːzə]', quiz: { question: "Le 'V' de 'Vase' se prononce...", options: [{ text: '[v]', isCorrect: true }, { text: '[f]', isCorrect: false }], explanation: "'Vase' est un mot d'emprunt, le V se prononce [v]." } },
      { word: 'Wanne', ipa: '[ˈvanə]', quiz: { question: "Le 'W' de 'Wanne' se prononce...", options: [{ text: '[v]', isCorrect: true }, { text: '[f]', isCorrect: false }], explanation: "Le 'W' allemand est toujours un son [v]." } },
      { word: 'Vitamin', ipa: '[vitaˈmiːn]', quiz: { question: "Le 'V' de 'Vitamin' se prononce...", options: [{ text: '[v]', isCorrect: true }, { text: '[f]', isCorrect: false }], explanation: "Mot d'origine latine, le V se prononce [v]." } },
      { word: 'Welt', ipa: '[vɛlt]', quiz: { question: "Le 'W' de 'Welt' se prononce...", options: [{ text: '[v]', isCorrect: true }, { text: 'muet', isCorrect: false }], explanation: "Le 'W' allemand est toujours un son [v]." } },
      { word: 'Vokal', ipa: '[voˈkaːl]', quiz: { question: "Le 'V' de 'Vokal' se prononce...", options: [{ text: '[v]', isCorrect: true }, { text: '[f]', isCorrect: false }], explanation: "Mot d'emprunt (latin), le V se prononce [v]." } },
      { word: 'Wolke', ipa: '[ˈvɔlkə]', quiz: { question: "Le 'W' de 'Wolke' se prononce...", options: [{ text: '[v]', isCorrect: true }, { text: '[f]', isCorrect: false }], explanation: "Le 'W' allemand est toujours un son [v]." } },
      { word: 'Video', ipa: '[ˈviːdeo]', quiz: { question: "Le 'V' de 'Video' se prononce...", options: [{ text: '[v]', isCorrect: true }, { text: '[f]', isCorrect: false }], explanation: "Mot international, le V se prononce [v]." } },
      { word: 'Wurst', ipa: '[vʊʁst]', quiz: { question: "Le 'W' de 'Wurst' se prononce...", options: [{ text: '[v]', isCorrect: true }, { text: 'comme dans "watt"', isCorrect: false }], explanation: "Le 'W' allemand est toujours un son [v]." } },
      { word: 'Pullover', ipa: '[pʊˈloːvɐ]', quiz: { question: "Le 'v' de 'Pullover' se prononce...", options: [{ text: '[v]', isCorrect: true }, { text: '[f]', isCorrect: false }], explanation: "Mot d'emprunt (anglais), le V se prononce [v]." } },
      { word: 'Wald', ipa: '[valt]', quiz: { question: "Le 'W' de 'Wald' se prononce...", options: [{ text: '[v]', isCorrect: true }, { text: '[f]', isCorrect: false }], explanation: "Le 'W' allemand est toujours un son [v]." } },
      { word: 'Winter', ipa: '[ˈvɪntɐ]', quiz: { question: "Le 'W' de 'Winter' se prononce...", options: [{ text: '[v]', isCorrect: true }, { text: 'comme en anglais', isCorrect: false }], explanation: "Le 'W' allemand est toujours un son [v], différent de l'anglais." } },
    ]
  },
  {
    letter: '„ch“ nach „e“, „i“ (ich-Laut)',
    rule: 'Après "e", "i", "ä", "ö", "ü" et les consonnes, le "ch" se prononce <strong>[ç]</strong>. C\'est un son doux, produit à l\'avant de la bouche, un peu comme un "h" chuchoté très fort.',
    words: [
        { word: 'echt', syllables: 'echt', ipa: '[ɛçt]', quiz: { question: "Le son 'ch' dans 'echt' est un...", options: [{ text: 'Son doux [ç] (ich-Laut)', isCorrect: true }, { text: 'Son guttural [x] (ach-Laut)', isCorrect: false }], explanation: "Correct ! Après 'e', c'est le son doux [ç]." } },
        { word: 'kichern', syllables: 'ki-chern', ipa: '[ˈkɪçɐn]', quiz: { question: "Le son 'ch' dans 'kichern' est un...", options: [{ text: 'Son doux [ç] (ich-Laut)', isCorrect: true }, { text: 'Son dur [k]', isCorrect: false }], explanation: "Correct ! Après 'i', c'est le son doux [ç]." } },
        { word: 'mich', syllables: 'mich', ipa: '[mɪç]', quiz: { question: "Le son 'ch' dans 'mich' est un...", options: [{ text: 'Son doux [ç] (ich-Laut)', isCorrect: true }, { text: 'Son guttural [x] (ach-Laut)', isCorrect: false }], explanation: "Correct ! Après 'i', c'est le son doux [ç]." } },
        { word: 'dich', syllables: 'dich', ipa: '[dɪç]', quiz: { question: "Le son 'ch' dans 'dich' est un...", options: [{ text: 'Son doux [ç] (ich-Laut)', isCorrect: true }, { text: 'Son guttural [x] (ach-Laut)', isCorrect: false }], explanation: "Correct ! Après 'i', c'est le son doux [ç]." } },
        { word: 'Recht', syllables: 'Recht', ipa: '[ʁɛçt]', quiz: { question: "Le son 'ch' dans 'Recht' est un...", options: [{ text: 'Son doux [ç] (ich-Laut)', isCorrect: true }, { text: 'Son guttural [x] (ach-Laut)', isCorrect: false }], explanation: "Correct ! Après 'e', c'est le son doux [ç]." } },
        { word: 'Gicht', syllables: 'Gicht', ipa: '[ɡɪçt]', quiz: { question: "Le son 'ch' dans 'Gicht' est un...", options: [{ text: 'Son doux [ç] (ich-Laut)', isCorrect: true }, { text: 'Son guttural [x] (ach-Laut)', isCorrect: false }], explanation: "Correct ! Après 'i', c'est le son doux [ç]." } },
        { word: 'Vorsicht', syllables: 'Vor-sicht', ipa: '[ˈfoːɐ̯zɪçt]', quiz: { question: "Le son 'ch' dans 'Vorsicht' est un...", options: [{ text: 'Son doux [ç] (ich-Laut)', isCorrect: true }, { text: 'Son guttural [x] (ach-Laut)', isCorrect: false }], explanation: "Correct ! Après 'i', c'est le son doux [ç]." } },
        { word: 'rechts', syllables: 'rechts', ipa: '[ʁɛçts]', quiz: { question: "Le son 'ch' dans 'rechts' est un...", options: [{ text: 'Son doux [ç] (ich-Laut)', isCorrect: true }, { text: 'Son guttural [x] (ach-Laut)', isCorrect: false }], explanation: "Correct ! Après 'e' (et une consonne), c'est le son doux [ç]." } },
        { word: 'Pech', syllables: 'Pech', ipa: '[pɛç]', quiz: { question: "Le son 'ch' dans 'Pech' est un...", options: [{ text: 'Son doux [ç] (ich-Laut)', isCorrect: true }, { text: 'Son guttural [x] (ach-Laut)', isCorrect: false }], explanation: "Correct ! Après 'e', c'est le son doux [ç]." } },
    ]
  },
  {
    letter: '„ch“ nach „a“, „o“, „u“ (ach-Laut)',
    rule: 'Après "a", "o", "u" et "au", le "ch" se prononce <strong>[x]</strong>. C\'est un son guttural, produit à l\'arrière de la gorge, comme le "j" espagnol de "jota" ou un "r" français très grasseyé.',
    words: [
        { word: 'kochen', syllables: 'ko-chen', ipa: '[ˈkɔxn̩]', quiz: { question: "Le son 'ch' dans 'kochen' est un...", options: [{ text: 'Son guttural [x] (ach-Laut)', isCorrect: true }, { text: 'Son doux [ç] (ich-Laut)', isCorrect: false }], explanation: "Correct ! Après 'o', c'est le son guttural [x]." } },
        { word: 'Loch', syllables: 'Loch', ipa: '[lɔx]', quiz: { question: "Le son 'ch' dans 'Loch' est un...", options: [{ text: 'Son guttural [x] (ach-Laut)', isCorrect: true }, { text: 'Son doux [ç] (ich-Laut)', isCorrect: false }], explanation: "Correct ! Après 'o', c'est le son guttural [x]." } },
        { word: 'doch', syllables: 'doch', ipa: '[dɔx]', quiz: { question: "Le son 'ch' dans 'doch' est un...", options: [{ text: 'Son guttural [x] (ach-Laut)', isCorrect: true }, { text: 'Son doux [ç] (ich-Laut)', isCorrect: false }], explanation: "Correct ! Après 'o', c'est le son guttural [x]." } },
        { word: 'wachen', syllables: 'wa-chen', ipa: '[ˈvaxn̩]', quiz: { question: "Le son 'ch' dans 'wachen' est un...", options: [{ text: 'Son guttural [x] (ach-Laut)', isCorrect: true }, { text: 'Son doux [ç] (ich-Laut)', isCorrect: false }], explanation: "Correct ! Après 'a', c'est le son guttural [x]." } },
        { word: 'lachen', syllables: 'la-chen', ipa: '[ˈlaxn̩]', quiz: { question: "Le son 'ch' dans 'lachen' est un...", options: [{ text: 'Son guttural [x] (ach-Laut)', isCorrect: true }, { text: 'Son doux [ç] (ich-Laut)', isCorrect: false }], explanation: "Correct ! Après 'a', c'est le son guttural [x]." } },
        { word: 'machen', syllables: 'ma-chen', ipa: '[ˈmaxn̩]', quiz: { question: "Le son 'ch' dans 'machen' est un...", options: [{ text: 'Son guttural [x] (ach-Laut)', isCorrect: true }, { text: 'Son doux [ç] (ich-Laut)', isCorrect: false }], explanation: "Correct ! Après 'a', c'est le son guttural [x]." } },
        { word: 'suchen', syllables: 'su-chen', ipa: '[ˈzuːxn̩]', quiz: { question: "Le son 'ch' dans 'suchen' est un...", options: [{ text: 'Son guttural [x] (ach-Laut)', isCorrect: true }, { text: 'Son doux [ç] (ich-Laut)', isCorrect: false }], explanation: "Correct ! Après 'u', c'est le son guttural [x]." } },
        { word: 'Woche', syllables: 'Wo-che', ipa: '[ˈvɔxə]', quiz: { question: "Le son 'ch' dans 'Woche' est un...", options: [{ text: 'Son guttural [x] (ach-Laut)', isCorrect: true }, { text: 'Son doux [ç] (ich-Laut)', isCorrect: false }], explanation: "Correct ! Après 'o', c'est le son guttural [x]." } },
    ]
  },
  {
    letter: 'sch',
    rule: 'Le groupe de lettres "sch" se prononce toujours <strong>[ʃ]</strong>, exactement comme le "ch" français dans "<strong>ch</strong>at" ou "<strong>ch</strong>ien".',
    words: [
        { word: 'waschen', syllables: 'wa-schen', ipa: '[ˈvaʃn̩]', quiz: { question: "Le son 'sch' de 'waschen' correspond au son 'ch' dans...", options: [{ text: 'le mot français "chat"', isCorrect: true }, { text: 'le mot allemand "Dach"', isCorrect: false }], explanation: "Exactement, c'est le son [ʃ]." } },
        { word: 'Schabe', syllables: 'Scha-be', ipa: '[ˈʃaːbə]', quiz: { question: "Le son 'sch' est comme le 'ch' dans...", options: [{ text: '"chemise"', isCorrect: true }, { text: '"chaos"', isCorrect: false }], explanation: "Oui, c'est le son [ʃ] du français." } },
        { word: 'Schere', syllables: 'Sche-re', ipa: '[ˈʃeːʁə]', quiz: { question: "Le son 'sch' est comme le 'ch' dans...", options: [{ text: '"chercher"', isCorrect: true }, { text: '"écho"', isCorrect: false }], explanation: "Oui, c'est le son [ʃ]." } },
        { word: 'Kutsche', syllables: 'Kut-sche', ipa: '[ˈkʊt͡ʃə]', quiz: { question: "Attention, le 'tsch' de 'Kutsche' se prononce...", options: [{ text: 'comme "tch" dans "match"', isCorrect: true }, { text: 'comme "sch" dans "Schere"', isCorrect: false }], explanation: "Piège ! 'tsch' est différent de 'sch'. Il se prononce [tʃ]." } },
        { word: 'Busch', syllables: 'Busch', ipa: '[bʊʃ]', quiz: { question: "Le son 'sch' est comme le 'ch' dans...", options: [{ text: '"bouche"', isCorrect: true }, { text: '"bouc"', isCorrect: false }], explanation: "Oui, c'est le son [ʃ]." } },
        { word: 'rasch', syllables: 'rasch', ipa: '[ʁaʃ]', quiz: { question: "Le son 'sch' est comme le 'ch' dans...", options: [{ text: '"moche"', isCorrect: true }, { text: '"moka"', isCorrect: false }], explanation: "Oui, c'est le son [ʃ]." } },
        { word: 'Schaf', syllables: 'Schaf', ipa: '[ʃaːf]', quiz: { question: "Le son 'sch' est comme le 'ch' dans...", options: [{ text: '"châle"', isCorrect: true }, { text: '"chrome"', isCorrect: false }], explanation: "Oui, c'est le son [ʃ]." } },
        { word: 'Schuh', syllables: 'Schuh', ipa: '[ʃuː]', quiz: { question: "Le son 'sch' est comme le 'ch' dans...", options: [{ text: '"chou"', isCorrect: true }, { text: '"choral"', isCorrect: false }], explanation: "Oui, c'est le son [ʃ]." } },
        { word: 'Schiff', syllables: 'Schiff', ipa: '[ʃɪf]', quiz: { question: "Le son 'sch' est comme le 'ch' dans...", options: [{ text: '"chiffre"', isCorrect: true }, { text: '"psychique"', isCorrect: false }], explanation: "Oui, c'est le son [ʃ]." } },
        { word: 'Dusche', syllables: 'Du-sche', ipa: '[ˈduːʃə]', quiz: { question: "Le son 'sch' est comme le 'ch' dans...", options: [{ text: '"douche"', isCorrect: true }, { text: '"duc"', isCorrect: false }], explanation: "Oui, c'est le son [ʃ]." } },
        { word: 'Kirsche', syllables: 'Kir-sche', ipa: '[ˈkɪʁʃə]', quiz: { question: "Le son 'sch' est comme le 'ch' dans...", options: [{ text: 'un "ch" français', isCorrect: true }, { text: 'un "k" allemand', isCorrect: false }], explanation: "Oui, c'est le son [ʃ]." } },
        { word: 'Tasche', syllables: 'Ta-sche', ipa: '[ˈtaʃə]', quiz: { question: "Le son 'sch' est comme le 'ch' dans...", options: [{ text: '"sache"', isCorrect: true }, { text: '"sac"', isCorrect: false }], explanation: "Oui, c'est le son [ʃ]." } },
        { word: 'Asche', syllables: 'A-sche', ipa: '[ˈaʃə]', quiz: { question: "Le son 'sch' est comme le 'ch' dans...", options: [{ text: '"hache"', isCorrect: true }, { text: '"acte"', isCorrect: false }], explanation: "Oui, c'est le son [ʃ]." } },
    ]
  }
];