import React, { useState, useMemo } from 'react';
import { diphthongData } from '../constants/diphthongData';
import DiphthongWordCard from './DiphthongWordCard';
import { CheckCircleIcon, XCircleIcon, ArrowPathIcon } from './IconComponents';

const shuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

const DiphthongLesson: React.FC = () => {

  const initialExerciseWords = useMemo(() => shuffle([
    { word: 'Haus', category: 'au' },
    { word: 'Reise', category: 'ei' },
    { word: 'Leute', category: 'eu' },
    { word: 'nein', category: 'ei' },
    { word: 'laufen', category: 'au' },
    { word: 'Feuer', category: 'eu' },
    { word: 'Seife', category: 'ei' },
    { word: 'Mäuse', category: 'eu' },
    { word: 'kaufen', category: 'au' },
  ]), []);
  
  const [wordPool, setWordPool] = useState(initialExerciseWords);
  const [columns, setColumns] = useState<{ ei: any[], au: any[], eu: any[] }>({ ei: [], au: [], eu: [] });
  const [feedback, setFeedback] = useState<Record<string, 'incorrect'>>({});
  const [selectedWord, setSelectedWord] = useState<{ word: string, category: string } | null>(null);

  const resetExercise = () => {
    setWordPool(initialExerciseWords);
    setColumns({ ei: [], au: [], eu: [] });
    setFeedback({});
    setSelectedWord(null);
  };
  
  const handleClassify = (targetCategory: 'ei' | 'au' | 'eu') => {
    if (!selectedWord) return;

    const isCorrect = selectedWord.category === targetCategory;

    if (isCorrect) {
        setWordPool(prev => prev.filter(w => w.word !== selectedWord.word));
        setColumns(prev => ({...prev, [targetCategory]: [...prev[targetCategory], selectedWord]}));
    } else {
        setFeedback(prev => ({ ...prev, [selectedWord.word]: 'incorrect' }));
    }
    setSelectedWord(null); 
  };
  
  const quizQuestions = [
    { question: 'Comment dit-on "maison" ?', options: ['Haus', 'Bein', 'Feuer'], answer: 'Haus' },
    { question: 'Quel mot veut dire "gens" ?', options: ['Leute', 'Reise', 'Kreuz'], answer: 'Leute' },
    { question: 'Lequel de ces mots contient le son "eu / äu" ?', options: ['Feuer', 'Haus', 'Bein'], answer: 'Feuer' },
  ];
  
  const [quizAnswers, setQuizAnswers] = useState<(string | null)[]>(Array(quizQuestions.length).fill(null));

  const handleQuizAnswer = (questionIndex: number, option: string) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = option;
    setQuizAnswers(newAnswers);
  };
  
  return (
    <div className="bg-[var(--color-card-bg)] p-4 md:p-6 rounded-xl shadow-lg border border-slate-200 space-y-12">
      
      {/* Introduction */}
      <div className="bg-[var(--theme-color-light)] p-4 rounded-lg border border-[var(--theme-color)]/20">
        <h3 className="text-xl font-bold text-[var(--theme-color-dark)] mb-3">Qu'est-ce qu'une diphtongue ?</h3>
        <p className="text-slate-700 space-y-2">
          Une diphtongue (en allemand: <em>Diphtong, Doppellaut</em> ou <em>Zwielaut</em>) est une combinaison de deux voyelles qui se prononcent ensemble, en un seul son fluide. En allemand, la première voyelle est toujours plus forte et on glisse rapidement vers la seconde.
          <br/>
          C'est une étape clé pour sonner comme un natif. Ne prononcez pas les deux voyelles séparément, mais liez-les !
        </p>
      </div>

      {/* Categories */}
      {diphthongData.map((category) => (
        <div key={category.diphthong}>
          <div className="text-left mb-6 p-3 bg-slate-100 rounded-lg border-l-4 border-[var(--theme-color)]">
            <h3 className="text-2xl font-bold text-[var(--theme-color-dark)] flex items-center gap-4">
              {category.diphthong} <span className="text-lg font-mono text-slate-500 bg-white px-2 py-1 rounded border">{category.pronunciation}</span>
            </h3>
            <p className="mt-2 text-slate-600" dangerouslySetInnerHTML={{ __html: category.rule }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {category.words.map((wordData) => (
              <DiphthongWordCard key={wordData.word} data={wordData} />
            ))}
          </div>
        </div>
      ))}
      
      {/* Exercise */}
      <div className="p-4 md:p-6 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-slate-800">Exercice : Classez les mots</h3>
            <button onClick={resetExercise} className="text-sm font-semibold text-[var(--theme-color-dark)] bg-[var(--theme-color-light)] px-3 py-1 rounded-full flex items-center gap-2 hover:bg-[var(--theme-color)] hover:text-white transition-colors">
                <ArrowPathIcon className="w-4 h-4" />
                Réinitialiser
            </button>
        </div>
        <p className="text-slate-600 mb-6 text-center">Cliquez sur un mot à classer, puis sur la colonne de destination.</p>

        <div className="p-4 bg-slate-200/50 rounded-lg min-h-[6rem] flex flex-wrap justify-center items-center gap-3">
            {wordPool.length > 0 && <h4 className="font-semibold text-slate-700 w-full text-center text-sm mb-2">Mots à classer :</h4>}
            {wordPool.map(word => {
                const isSelected = selectedWord?.word === word.word;
                const isIncorrect = feedback[word.word] === 'incorrect';
                return (
                    <button
                        key={word.word}
                        onClick={() => {
                            setSelectedWord(word);
                            if (feedback[word.word]) {
                                const newFeedback = {...feedback};
                                delete newFeedback[word.word];
                                setFeedback(newFeedback);
                            }
                        }}
                        className={`px-4 py-2 rounded-lg font-semibold border transition-all duration-200 shadow-sm ${
                            isSelected ? 'bg-white ring-2 ring-[var(--theme-color)]' :
                            isIncorrect ? 'bg-[var(--color-error-light)] border-[var(--color-error)] text-[var(--color-error-dark)] animate-shake' : 
                            'bg-white border-slate-300 hover:border-[var(--theme-color)] hover:text-[var(--theme-color-dark)]'
                        }`}
                    >
                        {word.word}
                    </button>
                )
            })}
            {wordPool.length === 0 && (
                <div className="text-center w-full py-4">
                    <CheckCircleIcon className="w-12 h-12 text-[var(--color-success)] mx-auto mb-2" />
                    <p className="text-[var(--color-success-dark)] font-semibold text-lg">Excellent travail, tout est classé !</p>
                </div>
            )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {(['ei', 'au', 'eu'] as const).map(cat => (
                <div 
                    key={cat} 
                    onClick={() => handleClassify(cat)}
                    className={`bg-white p-3 rounded-lg border-2 min-h-[12rem] transition-all duration-200 ${
                        selectedWord ? 'cursor-pointer border-dashed border-[var(--theme-color)] hover:bg-[var(--theme-color-light)] hover:border-solid' : 'border-solid border-slate-200'
                    }`}
                >
                    <h4 className="font-bold text-lg text-center text-[var(--theme-color-dark)] pb-2 border-b-2 border-[var(--theme-color-light)] mb-2">
                        {cat === 'ei' ? 'EI / AI' : cat === 'eu' ? 'EU / ÄU' : 'AU'}
                    </h4>
                    <div className="space-y-2 pt-2">
                        {columns[cat].map(word => (
                            <div key={word.word} className="bg-[var(--color-success-light)] border border-[var(--color-success)]/30 text-[var(--color-success-dark)] p-2 rounded text-center font-semibold animate-fade-in">{word.word}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
      
      {/* Quiz */}
      <div className="p-4 md:p-6 bg-slate-50 rounded-lg border">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Mini Quiz</h3>
        <div className="max-w-md mx-auto space-y-8">
            {quizQuestions.map((q, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm border">
                    <p className="font-semibold text-slate-700 mb-3">{i + 1}. {q.question}</p>
                    <div className="space-y-2">
                        {q.options.map(option => {
                            const selected = quizAnswers[i] === option;
                            const isCorrect = selected && option === q.answer;
                            const isIncorrect = selected && option !== q.answer;
                            const revealedCorrect = quizAnswers[i] && option === q.answer;
                            
                            let buttonClass = 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300 disabled:opacity-60 disabled:cursor-not-allowed';
                            if(quizAnswers[i]) {
                                if (isCorrect || revealedCorrect) {
                                    buttonClass = 'bg-[var(--color-success-light)] border-[var(--color-success)] text-[var(--color-success-dark)]';
                                } else if (isIncorrect) {
                                    buttonClass = 'bg-[var(--color-error-light)] border-[var(--color-error)] text-[var(--color-error-dark)]';
                                }
                            }
                            
                            return (
                                <button
                                  key={option}
                                  onClick={() => handleQuizAnswer(i, option)}
                                  disabled={!!quizAnswers[i]}
                                  className={`w-full text-left p-2 rounded-md font-semibold text-sm transition-colors flex items-center justify-between border-2 ${buttonClass}`}
                                >
                                  {option}
                                  {isCorrect && <CheckCircleIcon className="w-5 h-5 text-[var(--color-success)]" />}
                                  {isIncorrect && <XCircleIcon className="w-5 h-5 text-[var(--color-error)]" />}
                                </button>
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default DiphthongLesson;