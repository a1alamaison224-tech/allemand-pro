export interface WordData {
  word: string;
  syllables: string;
  ipa: string;
  vowelInfo: string;
  sentence: string;
  translation?: string;
  sentenceTranslation?: string;
}

export interface ConsonantWord {
  word: string;
  syllables?: string;
  ipa: string;
  quiz: {
    question: string;
    options: {
      text: string;
      isCorrect: boolean;
    }[];
    explanation: string;
  };
}

export interface ConsonantRule {
  letter: string;
  rule: string;
  words: ConsonantWord[];
}

export interface UmlautWord {
  word: string;
  syllables: string;
}

export interface UmlautPair {
  without: UmlautWord;
  with: UmlautWord;
}

export interface VowelLengthWord {
  word: string;
  syllables: string;
}

export interface VowelLengthPair {
  long: VowelLengthWord;
  short: VowelLengthWord;
}

export interface LongVowelWord {
  word: string;
  syllables: string;
  ipa: string;
  translation: string;
}

export interface LongVowelCategory {
  title: string;
  rule: string;
  words: LongVowelWord[];
}

export interface DiphthongWord {
  word: string;
  ipa: string;
  translation: string;
}

export interface DiphthongCategory {
  diphthong: string;
  pronunciation: string;
  rule: string;
  words: DiphthongWord[];
}

export interface ScharfesSWord {
  word: string;
  translation: string;
}

export interface ScharfesSSection {
  title: string;
  rule: string;
  words: ScharfesSWord[];
}

export interface ScharfesSQuizQuestion {
  gapped: string;
  full: string;
  correct: 'ß' | 'ss';
  hint: string;
}

export interface XWord {
  word: string;
  ipa: string;
}

export interface XQuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface YpsilonWord {
  word: string;
  ipa: string;
  pronunciationHint: string;
}

export interface YpsilonQuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface StSpWord {
  word: string;
  ipa: string;
  pronunciationHint: string;
}

export interface StSpQuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface PfWord {
  word: string;
  ipa: string;
  translation: string;
}

export interface PfQuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface KonsonantenhaufungWord {
  group: string;
  word: string;
  syllables: string;
  translation: string;
}

export interface KonsonantenhaufungQuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface PdfWord {
  word: string;
  translation: string;
  syllables: string;
}

export interface PdfCategory {
  title: string;
  words: PdfWord[];
}

export type PdfData = PdfCategory[];
