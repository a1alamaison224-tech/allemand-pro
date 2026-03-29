import React, { useState, useMemo } from 'react';
import { scharfesSSections, scharfesSQuiz } from '../constants/scharfesSData';
import { SpeakerIcon, CheckCircleIcon, XCircleIcon } from './IconComponents';
import { useSpeech } from '../contexts/SpeechContext';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
    </svg>
);

const ScharfesSLesson: React.FC = () => {
  const { play, isSpeaking, currentlySpeakingText } = useSpeech();
  const [openSection, setOpenSection] = useState<string | null>(scharfesSSections[0].title);
  
  const shuffledQuiz = useMemo(() => [...scharfesSQuiz].sort(() => Math.random() - 0.5), []);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'ß' | 'ss' | null>>({});
  const [feedback, setFeedback] = useState<Record<number, 'correct' | 'incorrect'>>({});

  const toggleSection = (title: string) => {
    setOpenSection(prev => (prev === title ? null : title));
  };
  
  const handleQuizAnswer = (index: number, choice: 'ß' | 'ss') => {
    if (feedback[index] === 'correct') return;

    setUserAnswers(prev => ({ ...prev, [index]: choice }));
    if (shuffledQuiz[index].correct === choice) {
      setFeedback(prev => ({ ...prev, [index]: 'correct' }));
    } else {
      setFeedback(prev => ({ ...prev, [index]: 'incorrect' }));
    }
  };
  
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-slate-200 space-y-4">
        
      {scharfesSSections.map((section) => {
        const isOpen = openSection === section.title;
        return (
          <div key={section.title} className="border-b border-slate-200 last:border-b-0 pb-4">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full text-left flex justify-between items-center p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
              aria-expanded={isOpen}
            >
              <h3 className="text-xl font-bold text-[var(--theme-color-dark)]">{section.title}</h3>
              <ChevronDownIcon className={`w-6 h-6 text-[var(--theme-color)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
              <div className="mt-4 px-3 animate-fade-in space-y-4">
                <p className="text-slate-700 p-3 bg-slate-100 rounded-md border" dangerouslySetInnerHTML={{ __html: section.rule }} />
                <div className="flex flex-wrap gap-3">
                  {section.words.map(word => {
                    const isThisWordSpeaking = isSpeaking && currentlySpeakingText === word.word;
                    return (
                        <div key={word.word} className={`bg-white border border-slate-200 rounded-lg p-3 shadow-sm flex items-center gap-3 transition-all ${isThisWordSpeaking ? 'ring-2 ring-[var(--theme-color)]' : ''}`}>
                          <div onClick={() => play(word.word)} className="cursor-pointer">
                            <span className="font-semibold text-slate-800">{word.word}</span>
                            <p className="text-sm text-slate-500 italic">{word.translation}</p>
                          </div>
                          <button
                            onClick={() => play(word.word)}
                            disabled={isSpeaking}
                            className={`p-2 rounded-full transition-all duration-200 ${isThisWordSpeaking ? 'bg-[var(--theme-color)] text-white scale-110' : 'bg-[var(--theme-color-light)] text-[var(--theme-color-dark)] hover:bg-[var(--theme-color)] hover:text-white'}`}
                            aria-label={`Écouter ${word.word}`}
                          >
                            <SpeakerIcon className="w-5 h-5" />
                          </button>
                        </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )
      })}

      <div className="p-4 md:p-6 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">Exercice Interactif</h3>
        <p className="text-slate-600 mb-6 text-center">Complétez les mots suivants avec la bonne orthographe.</p>
        <div className="space-y-6 max-w-2xl mx-auto">
          {shuffledQuiz.map((item, index) => {
            const isCorrect = feedback[index] === 'correct';
            const isIncorrect = feedback[index] === 'incorrect';
            return (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-2xl font-bold text-slate-700 text-center font-mono tracking-wider">
                      {item.gapped.replace('_', ' _ ')}
                    </p>
                    <div className="flex justify-center gap-3">
                        {(['ß', 'ss'] as const).map(choice => {
                          const answer = userAnswers[index];
                          let buttonClass = 'bg-slate-200 hover:bg-slate-300 text-slate-700';
                          if (answer === choice) {
                              if (isCorrect) buttonClass = 'bg-[var(--color-success)] text-white';
                              if (isIncorrect) buttonClass = 'bg-[var(--color-error)] text-white animate-shake';
                          }
                          if (isCorrect && answer !== choice) {
                            buttonClass = 'bg-slate-200 opacity-50 cursor-not-allowed';
                          }

                          return (
                            <button
                              key={choice}
                              onClick={() => handleQuizAnswer(index, choice)}
                              disabled={isCorrect}
                              className={`w-16 h-12 text-2xl font-bold rounded-lg transition-all duration-200 ${buttonClass}`}
                            >
                              {choice}
                            </button>
                          )
                        })}
                    </div>
                </div>
                {isCorrect && (
                   <p className="mt-3 text-center text-[var(--color-success-dark)] font-semibold flex items-center justify-center gap-2 animate-fade-in">
                     <CheckCircleIcon className="w-5 h-5" />
                     Richtig! {item.hint}
                   </p>
                )}
                {isIncorrect && (
                    <p className="mt-3 text-center text-[var(--color-error-dark)] font-semibold flex items-center justify-center gap-2 animate-fade-in">
                      <XCircleIcon className="w-5 h-5" />
                      Falsch, versuche noch einmal.
                    </p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
        <h3 className="text-xl font-bold text-yellow-800">Résumé à retenir</h3>
        <ul className="mt-2 space-y-2 font-semibold text-yellow-900 list-inside">
            <li><span className="text-lg">Voyelle longue</span> <span className="mx-2">→</span> <span className="font-mono text-xl bg-white px-2 py-1 rounded border">ß</span></li>
            <li><span className="text-lg">Voyelle courte</span> <span className="mx-2">→</span> <span className="font-mono text-xl bg-white px-2 py-1 rounded border">ss</span></li>
            <li><span className="text-lg">Fin de mot</span> <span className="mx-2">→</span> <span className="font-mono text-xl bg-white px-2 py-1 rounded border">s</span> (cas généraux)</li>
        </ul>
      </div>

    </div>
  );
};

export default ScharfesSLesson;
