import React, { useState } from 'react';
import { pfWords, pfQuiz } from '../constants/pfData';
import { SpeakerIcon, CheckCircleIcon, XCircleIcon } from './IconComponents';
import { useSpeech } from '../contexts/SpeechContext';

interface WordDisplayProps {
  word: { word: string; ipa: string; translation: string; };
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word }) => {
    const { play, isSpeaking, currentlySpeakingText } = useSpeech();
    const isThisWordSpeaking = isSpeaking && currentlySpeakingText === word.word;

    return (
        <div className={`bg-white border border-slate-200 rounded-lg p-3 shadow-sm flex items-center justify-between gap-3 transition-all hover:shadow-md ${isThisWordSpeaking ? 'ring-2 ring-[var(--theme-color)]' : ''}`}>
            <div onClick={() => play(word.word)} className="cursor-pointer">
                <span className="font-semibold text-slate-800 text-lg">{word.word}</span>
                <p className="text-sm text-slate-500 font-mono">{word.ipa}</p>
                <p className="text-xs text-[var(--theme-color-dark)] font-semibold italic">{word.translation}</p>
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
    );
};


const PfLesson: React.FC = () => {
    const [quizAnswers, setQuizAnswers] = useState<(string | null)[]>(Array(pfQuiz.length).fill(null));

    const handleQuizAnswer = (questionIndex: number, option: string) => {
        const newAnswers = [...quizAnswers];
        if (newAnswers[questionIndex] === null) {
            newAnswers[questionIndex] = option;
            setQuizAnswers(newAnswers);
        }
    };

    return (
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-slate-200 space-y-10">
            {/* Intro */}
            <div className="text-slate-700 bg-[var(--theme-color-light)] p-4 rounded-lg border border-[var(--theme-color)]/20">
                 <h3 className="text-xl font-bold text-[var(--theme-color-dark)] mb-2">Le son [pf] : une signature allemande</h3>
                <p>
                Le son <strong>"Pf"</strong> est l'un des sons les plus caractéristiques de l'allemand. Il peut sembler difficile au début car il est rare en français, mais avec un peu de pratique, il devient très naturel. Il s'agit d'un son "affriqué", ce qui signifie qu'on combine deux sons en un seul mouvement rapide.
                </p>
            </div>

            {/* Section 1: Explanation */}
            <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Comment prononcer le "Pf" ?</h3>
                <p className="text-slate-700 mb-4">
                    Le groupe de lettres <strong>Pf</strong> se prononce en combinant un <strong>[p]</strong> et un <strong>[f]</strong> en un seul son très court et explosif.
                </p>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg mb-6">
                    <p className="font-semibold text-blue-800">👉 Astuce pour francophones :</p>
                     <p className="text-blue-700">Fermez les lèvres comme pour dire "<strong>p</strong>apa", puis, sans ouvrir la bouche, forcez l'air à travers vos lèvres pour produire le son "<strong>f</strong>" de "<strong>f</strong>amille". Les deux sons doivent fusionner. C'est le son que l'on entend au début de <strong>Pferd</strong> (cheval).</p>
                </div>
                <h4 className="font-bold text-slate-800 mb-3">Exemples</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {pfWords.map(word => (
                        <WordDisplay key={word.word} word={word} />
                    ))}
                </div>
            </section>
            
             {/* Rule Summary */}
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <h3 className="text-xl font-bold text-yellow-800">⚡ Règle importante à retenir</h3>
                <p className="mt-2 text-yellow-900 text-lg">
                    Le son <span className="font-mono text-xl bg-white px-2 py-1 rounded">Pf</span> est un son unique qui combine <span className="font-mono text-xl bg-white px-2 py-1 rounded">[p]</span> + <span className="font-mono text-xl bg-white px-2 py-1 rounded">[f]</span>. Entraînez-vous à le dire rapidement jusqu'à ce qu'il devienne un seul son fluide.
                </p>
            </div>
            
            {/* Quiz Section */}
            <div className="p-4 md:p-6 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">📝 Mini-Exercice</h3>
                <div className="max-w-xl mx-auto space-y-6">
                    {pfQuiz.map((q, i) => {
                        const userAnswer = quizAnswers[i];
                        const isAnswered = userAnswer !== null;

                        return (
                             <div key={i} className="bg-white p-4 rounded-lg shadow-sm border">
                                <p className="font-semibold text-slate-700 mb-3">{i + 1}. {q.question}</p>
                                <div className="space-y-2">
                                    {q.options.map(option => {
                                        const isSelected = userAnswer === option;
                                        const isCorrect = option === q.answer;

                                        let buttonClass = 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200 disabled:opacity-60 disabled:cursor-not-allowed';
                                        if (isAnswered) {
                                            if (isSelected && isCorrect) {
                                                buttonClass = 'bg-[var(--color-success-light)] border-[var(--color-success)] text-[var(--color-success-dark)]';
                                            } else if (isSelected && !isCorrect) {
                                                buttonClass = 'bg-[var(--color-error-light)] border-[var(--color-error)] text-[var(--color-error-dark)]';
                                            } else if (isCorrect) {
                                                buttonClass = 'bg-[var(--color-success-light)] border-[var(--color-success)] text-[var(--color-success-dark)] opacity-70';
                                            }
                                        }

                                        return (
                                            <button
                                                key={option}
                                                onClick={() => handleQuizAnswer(i, option)}
                                                disabled={isAnswered}
                                                className={`w-full text-left p-2 rounded-md font-semibold text-sm transition-colors flex items-center justify-between border-2 ${buttonClass}`}
                                            >
                                                {option}
                                                {isAnswered && isSelected && isCorrect && <CheckCircleIcon className="w-5 h-5 text-[var(--color-success)]" />}
                                                {isAnswered && isSelected && !isCorrect && <XCircleIcon className="w-5 h-5 text-[var(--color-error)]" />}
                                            </button>
                                        );
                                    })}
                                </div>
                                {isAnswered && (
                                    <p className={`mt-3 text-sm font-semibold p-2 rounded-lg animate-fade-in ${userAnswer === q.answer ? 'text-[var(--color-success-dark)] bg-[var(--color-success-light)]' : 'text-[var(--color-error-dark)] bg-[var(--color-error-light)]'}`}>
                                       {q.explanation}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PfLesson;
