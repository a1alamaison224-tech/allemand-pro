import React, { useState, useEffect } from 'react';
import VowelGuide from './components/VowelGuide';
import VowelLengthGuide from './components/VowelLengthGuide';
import LongVowelLesson from './components/LongVowelLesson';
import UmlautGuide from './components/UmlautGuide';
import DiphthongLesson from './components/DiphthongLesson';
import LessonWrapper from './components/LessonWrapper';
import ConsonantLesson from './components/ConsonantLesson';
import TrainingZone from './components/TrainingZone';
import ScharfesSLesson from './components/ScharfesSLesson';
import { consonantRules } from './constants/consonantData';
import XUndCHSLesson from './components/XUndCHSLesson';
import YpsilonLesson from './components/YpsilonLesson';
import StSpLesson from './components/StSpLesson';
import PfLesson from './components/PfLesson';
import KonsonantenhaufungenLesson from './components/KonsonantenhaufungenLesson';
import type { PdfData } from './types';
import Sidebar from './components/Sidebar';
import Onboarding from './components/Onboarding';
import LessonGrid from './components/LessonGrid';
import { Toaster } from 'sonner';

// Data imports for PDF generation
import { vowelLengthPairs, longVowelWords, shortVowelWords, exceptionWords } from './constants/vowelLengthData';
import { longVowelData } from './constants/longVowelData';
import { umlautPairs } from './constants/umlautData';
import { diphthongData } from './constants/diphthongData';
import { scharfesSSections } from './constants/scharfesSData';
import { xWords, chsWords } from './constants/xData';
import { ypsilonAsUmlautUWords, ypsilonAsIWords, ypsilonAsJWords } from './constants/ypsilonData';
import { stWords, spWords, stspExceptions } from './constants/stspData';
import { pfWords } from './constants/pfData';
import { konsonantenhaufungen, internalKonsonantenhaufungen } from './constants/konsonantenhaufungenData';


const getRules = (keys: string[]) => consonantRules.filter(r => keys.includes(r.letter));

export const lessons = [
  { id: 'intro-vowels', title: 'Introduction aux Voyelles', description: 'Comprendre les bases des voyelles et leur importance capitale.', component: VowelGuide, color: 'blue', icon: 'fa-solid fa-a' },
  { id: 'vowel-length', title: "Leçon 1 : Voyelles Longues vs. Courtes", description: "Apprendre la règle d'or qui détermine la longueur d'une voyelle.", component: VowelLengthGuide, color: 'sky', icon: 'fa-solid fa-ruler-horizontal', 
    getAudioWords: (): string[] => [
      ...vowelLengthPairs.flatMap(p => [p.long.word, p.short.word]),
      ...longVowelWords.map(w => w.word),
      ...shortVowelWords.map(w => w.word),
      ...exceptionWords.map(w => w.word),
    ],
    getPdfData: (): PdfData => ([
      { 
        title: "Comparaisons Directes (Long vs. Court)", 
        words: vowelLengthPairs.flatMap(p => [
          { word: p.long.word, syllables: p.long.syllables, translation: '(voyelle longue)' },
          { word: p.short.word, syllables: p.short.syllables, translation: '(voyelle courte)' }
        ])
      },
      {
        title: 'Exemples de Voyelles Longues',
        words: longVowelWords.map(w => ({ word: w.word, syllables: w.syllables, translation: '' }))
      },
      {
        title: 'Exemples de Voyelles Courtes',
        words: shortVowelWords.map(w => ({ word: w.word, syllables: w.syllables, translation: '' }))
      },
      {
        title: 'Exceptions',
        words: exceptionWords.map(w => ({ word: w.word, syllables: w.syllables, translation: '' }))
      }
    ])},
  { id: 'long-vowel-markers', title: 'Leçon 2 : Identifier les Voyelles Longues', description: "Repérer les voyelles longues grâce au 'h', 'ie' et aux voyelles doublées.", component: LongVowelLesson, color: 'teal', icon: 'fa-solid fa-magnifying-glass-chart', 
    getAudioWords: (): string[] => longVowelData.flatMap(cat => cat.words.map(w => w.word)),
    getPdfData: (): PdfData => longVowelData.map(cat => ({
      title: cat.title,
      words: cat.words.map(w => ({ word: w.word, syllables: w.syllables, translation: w.translation }))
    })) },
  { id: 'umlauts', title: 'Leçon 3 : Les Umlauts (Ä, Ö, Ü)', description: 'Prononcer correctement les voyelles à tréma, si typiques de l\'allemand.', component: UmlautGuide, color: 'green', icon: 'fa-solid fa-diagram-project', 
    getAudioWords: (): string[] => umlautPairs.flatMap(p => [p.without.word, p.with.word]),
    getPdfData: (): PdfData => ([{
      title: "Paires avec et sans Umlaut",
      words: umlautPairs.flatMap(p => [
        { word: p.without.word, syllables: p.without.syllables, translation: '(sans umlaut)' },
        { word: p.with.word, syllables: p.with.syllables, translation: '(avec umlaut)' },
      ])
    }])},
  { id: 'diphthongs', title: 'Leçon 4 : Les Diphtongues', description: 'Maîtriser les combinaisons de voyelles comme "ei", "au", et "eu".', component: DiphthongLesson, color: 'amber', icon: 'fa-solid fa-object-group', 
    getAudioWords: (): string[] => diphthongData.flatMap(cat => cat.words.map(w => w.word)),
    getPdfData: (): PdfData => diphthongData.map(cat => ({
      title: `Diphtongue ${cat.diphthong}`,
      words: cat.words.map(w => ({ word: w.word, syllables: '-', translation: w.translation }))
    })) },
  { id: 'consonants-ch', title: 'Leçon 5 : Les Sons "ch"', description: "Maîtriser les deux sons du 'ch' allemand : ich-Laut et ach-Laut.", component: () => <ConsonantLesson rules={getRules(['„ch“ nach „e“, „i“ (ich-Laut)', '„ch“ nach „a“, „o“, „u“ (ach-Laut)'])} />, color: 'orange', icon: 'fa-solid fa-wind', 
    getAudioWords: (): string[] => getRules(['„ch“ nach „e“, „i“ (ich-Laut)', '„ch“ nach „a“, „o“, „u“ (ach-Laut)']).flatMap(rule => rule.words.map(w => w.word)),
    getPdfData: (): PdfData => getRules(['„ch“ nach „e“, „i“ (ich-Laut)', '„ch“ nach „a“, „o“, „u“ (ach-Laut)']).map(rule => ({
      title: rule.letter,
      words: rule.words.map(w => ({ word: w.word, syllables: w.syllables || '-', translation: '' }))
    })) },
  { id: 'consonants-sch', title: 'Leçon 6 : Le Son "sch"', description: "Un son familier pour les francophones, mais avec une orthographe différente.", component: () => <ConsonantLesson rules={getRules(['sch'])} />, color: 'rose', icon: 'fa-solid fa-shoe-prints', 
    getAudioWords: (): string[] => getRules(['sch']).flatMap(rule => rule.words.map(w => w.word)),
    getPdfData: (): PdfData => getRules(['sch']).map(rule => ({
      title: rule.letter,
      words: rule.words.map(w => ({ word: w.word, syllables: w.syllables || '-', translation: '' }))
    })) },
  { id: 'consonants-vfw', title: 'Leçon 7 : Les Sons V, F, W, Ph', description: 'Comprendre la différence entre les sons [f] (sourd) et [v] (sonore).', component: () => <ConsonantLesson rules={getRules(['F, f / V, v / Ph, ph', 'W, w / V, v'])} />, color: 'red', icon: 'fa-solid fa-font', 
    getAudioWords: (): string[] => getRules(['F, f / V, v / Ph, ph', 'W, w / V, v']).flatMap(rule => rule.words.map(w => w.word)),
    getPdfData: (): PdfData => getRules(['F, f / V, v / Ph, ph', 'W, w / V, v']).map(rule => ({
      title: rule.letter,
      words: rule.words.map(w => ({ word: w.word, syllables: '-', translation: '' }))
    })) },
  { id: 'consonants-jzc', title: 'Leçon 8 : Consonnes Pièges (J, Z, C, Qu, K)', description: "Les consonnes dont la prononciation surprend le plus les francophones.", component: () => <ConsonantLesson rules={getRules(['J, j', 'Z, z', 'C, c / Ch', 'Qu, qu', 'K, k'])} />, color: 'fuchsia', icon: 'fa-solid fa-puzzle-piece', 
    getAudioWords: (): string[] => getRules(['J, j', 'Z, z', 'C, c / Ch', 'Qu, qu', 'K, k']).flatMap(rule => rule.words.map(w => w.word)),
    getPdfData: (): PdfData => getRules(['J, j', 'Z, z', 'C, c / Ch', 'Qu, qu', 'K, k']).map(rule => ({
      title: rule.letter,
      words: rule.words.map(w => ({ word: w.word, syllables: '-', translation: '' }))
    })) },
  { id: 'scharfes-s', title: "Leçon 9 : L'orthographe de ß et ss", description: "Maîtriser la règle de la voyelle longue/courte pour savoir quand utiliser ß, ss ou s.", component: ScharfesSLesson, color: 'slate', icon: 'fa-solid fa-pen-fancy', 
    getAudioWords: (): string[] => scharfesSSections.flatMap(s => s.words.map(w => w.word)),
    getPdfData: (): PdfData => scharfesSSections.map(s => ({
      title: s.title,
      words: s.words.map(w => ({ word: w.word, syllables: '-', translation: w.translation }))
    })) },
  { id: 'x-chs', title: 'Leçon 10 : Xx und chs', description: 'Maîtriser la prononciation [ks] des lettres X et du groupe "chs".', component: XUndCHSLesson, color: 'pink', icon: 'fa-solid fa-xmarks-lines', 
    getAudioWords: (): string[] => [...xWords.map(w => w.word), ...chsWords.map(w => w.word)],
    getPdfData: (): PdfData => ([
      { title: 'La lettre Xx', words: xWords.map(w => ({ word: w.word, syllables: '-', translation: '' }))},
      { title: 'Le groupe "chs"', words: chsWords.map(w => ({ word: w.word, syllables: '-', translation: '' }))},
    ])},
  { id: 'ypsilon', title: 'Leçon 11 :Yy', description: 'Maîtriser les différentes prononciations de la lettre Y.', component: YpsilonLesson, color: 'violet', icon: 'fa-solid fa-y', 
    getAudioWords: (): string[] => [...ypsilonAsUmlautUWords.map(w => w.word), ...ypsilonAsIWords.map(w => w.word), ...ypsilonAsJWords.map(w => w.word)],
    getPdfData: (): PdfData => ([
      { title: 'Y prononcé comme "ü"', words: ypsilonAsUmlautUWords.map(w => ({ word: w.word, syllables: w.pronunciationHint, translation: '' })) },
      { title: 'Y prononcé comme "i"', words: ypsilonAsIWords.map(w => ({ word: w.word, syllables: w.pronunciationHint, translation: '' })) },
      { title: 'Y prononcé comme "j"', words: ypsilonAsJWords.map(w => ({ word: w.word, syllables: w.pronunciationHint, translation: '' })) },
    ])},
  { id: 'st-sp', title: 'Leçon 12 : St et Sp', description: 'Maîtriser la prononciation spéciale de "St" et "Sp" en début de mot.', component: StSpLesson, color: 'cyan', icon: 'fa-solid fa-signs-post', 
    getAudioWords: (): string[] => [...stWords.map(w => w.word), ...spWords.map(w => w.word), ...stspExceptions.map(w => w.word)],
    pdfHeaders: ['Mot Allemand', 'Prononciation', 'Traduction'],
    getPdfData: (): PdfData => ([
      { title: 'St en début de mot/prononciation', words: stWords.map(w => ({ word: w.word, syllables: w.pronunciationHint, translation: '' })) },
      { title: 'Sp en début de mot/prononciation', words: spWords.map(w => ({ word: w.word, syllables: w.pronunciationHint, translation: '' })) },
      { title: 'Exceptions (st/sp internes)', words: stspExceptions.map(w => ({ word: w.word, syllables: w.pronunciationHint, translation: '' })) },
    ])},
  { id: 'pf-sound', title: 'Leçon 13 : Le son Pf', description: 'Maîtriser le son typiquement allemand [pf].', component: PfLesson, color: 'lime', icon: 'fa-solid fa-hippo', 
    getAudioWords: (): string[] => pfWords.map(w => w.word),
    getPdfData: (): PdfData => ([
      { title: 'Mots avec le son "Pf"', words: pfWords.map(w => ({ word: w.word, syllables: '-', translation: w.translation })) }
    ])},
  { id: 'consonant-clusters', title: 'Leçon 14 : Groupes de consonnes', description: 'Maîtriser les groupes de consonnes complexes (Konsonantenhäufungen).', component: KonsonantenhaufungenLesson, color: 'orange', icon: 'fa-solid fa-layer-group', 
    getAudioWords: (): string[] => [...konsonantenhaufungen.map(w => w.word), ...internalKonsonantenhaufungen.map(w => w.word)],
    getPdfData: (): PdfData => ([
      { title: 'Groupes en début de mot', words: konsonantenhaufungen.map(w => ({ word: w.word, syllables: w.syllables, translation: w.translation }))},
      { title: 'Groupes en fin de mot ou internes', words: internalKonsonantenhaufungen.map(w => ({ word: w.word, syllables: w.syllables, translation: w.translation }))},
    ])},
  { id: 'training-zone', title: 'Zone d\'Entraînement Libre', description: "Générez des mots à la volée et entraînez-vous sur des cas variés avec l'IA.", component: TrainingZone, color: 'purple', icon: 'fa-solid fa-dumbbell', hideInstructions: true },
];


const App: React.FC = () => {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState<boolean>(() => {
    return localStorage.getItem('onboardingComplete') === 'true';
  });
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('onboardingComplete', String(isOnboardingComplete));
  }, [isOnboardingComplete]);

  const handleOnboardingComplete = () => {
    setIsOnboardingComplete(true);
  };

  const handleSelectLesson = (id: string) => {
    setSelectedLessonId(id);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedLessonId(null);
  };
  
  const selectedLesson = lessons.find(l => l.id === selectedLessonId);

  const numberedLessons = lessons.filter(l => (l as any).getPdfData);
  const selectedLessonIndex = numberedLessons.findIndex(l => l.id === selectedLessonId);
  const lessonNumber = selectedLessonIndex !== -1 ? selectedLessonIndex + 1 : 0;

  if (!isOnboardingComplete) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="relative min-h-screen md:flex bg-slate-100 text-slate-700 font-sans">
      <Toaster position="top-right" richColors />
      <Sidebar 
        lessons={lessons}
        activeLessonId={selectedLessonId}
        onSelectLesson={handleSelectLesson}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      <main className="flex-1 p-4 md:p-8 lg:p-12 md:ml-72 transition-all duration-300">
        <button 
          onClick={() => setIsSidebarOpen(true)} 
          className="md:hidden p-2 mb-4 -ml-2 rounded-md bg-white text-slate-600 shadow-sm"
          aria-label="Ouvrir le menu"
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
        
        {selectedLesson ? (
          <LessonWrapper 
            title={selectedLesson.title} 
            color={selectedLesson.color} 
            onBack={handleBack}
            lessonNumber={lessonNumber}
            pdfData={(selectedLesson as any).getPdfData ? (selectedLesson as any).getPdfData() : undefined}
            pdfHeaders={(selectedLesson as any).pdfHeaders}
            audioWords={(selectedLesson as any).getAudioWords ? (selectedLesson as any).getAudioWords() : undefined}
            hideInstructions={!!(selectedLesson as any).hideInstructions}
          >
            <selectedLesson.component />
          </LessonWrapper>
        ) : (
          <LessonGrid lessons={lessons} onSelectLesson={handleSelectLesson} />
        )}
      </main>
    </div>
  );
};

export default App;