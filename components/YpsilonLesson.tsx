import React, { useState } from 'react';
import { ypsilonAsUmlautUWords, ypsilonAsIWords, ypsilonAsJWords, ypsilonQuiz } from '../constants/ypsilonData';
import { SpeakerIcon, CheckCircleIcon, XCircleIcon } from './IconComponents';
import { useSpeech } from '../contexts/SpeechContext';


interface WordDisplayProps {
  word: { word: string; ipa: string; pronunciationHint: string; };
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word }) => {
    const { play, isSpeaking, currentlySpeakingText } = useSpeech();
    const isThisWordSpeaking = isSpeaking && currentlySpeakingText === word.word;

    return (
        <div className={`bg-white border border-slate-200 rounded-lg p-3 shadow-sm flex items-center justify-between gap-3 transition-all hover:shadow-md ${isThisWordSpeaking ? 'ring-2 ring-[var(--theme-color)]' : ''}`}>
            <div onClick={() => play(word.word)} className="cursor-pointer">
                <span className="font-semibold text-slate-800 text-lg">{word.word}</span>
                <p className="text-sm text-slate-500 font-mono">{word.ipa}</p>
                <p className="text-xs text-[var(--theme-color-dark)] font-semibold">{word.pronunciationHint}</p>
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


const YpsilonLesson: React.FC = () => {
    const [quizAnswers, setQuizAnswers] = useState<(string | null)[]>(Array(ypsilonQuiz.length).fill(null));

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
                 <h3 className="text-xl font-bold text-[var(--theme-color-dark)] mb-2">Le Ypsilon (Y), la lettre caméléon</h3>
                <p>
                La lettre <strong>Y (Ypsilon)</strong> est assez rare en allemand et se trouve principalement dans des mots d'origine étrangère. Sa prononciation varie selon l'origine du mot, ce qui peut être un peu déroutant au début. Mais ne vous inquiétez pas, il y a des règles simples à suivre !
                </p>
            </div>

            {/* Section 1: Y as Ü */}
            <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">1. Le Y prononcé comme "ü" ([y] ou [ʏ])</h3>
                <p className="text-slate-700 mb-4">
                    Dans la plupart des mots d'origine grecque, le <strong>Y</strong> se prononce comme un <strong>"ü"</strong> allemand.
                </p>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg mb-6">
                    <p className="font-semibold text-blue-800">👉 Astuce pour francophones :</p>
                    <p className="text-blue-700">Ce son est très proche du <strong>"u"</strong> français dans des mots comme "t<strong>u</strong>" ou "sal<strong>u</strong>t". Pratiquez en disant "i" mais avec les lèvres arrondies comme pour un "ou".</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {ypsilonAsUmlautUWords.map(word => (
                        <WordDisplay key={word.word} word={word} />
                    ))}
                </div>
            </section>

            {/* Section 2: Y as I */}
            <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">2. Le Y prononcé comme "i" [i]</h3>
                <p className="text-slate-700 mb-4">
                    Dans beaucoup de mots empruntés à l'anglais, le <strong>Y</strong> à la fin d'un mot se prononce comme un <strong>"i"</strong> court.
                </p>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg mb-6">
                    <p className="font-semibold text-blue-800">👉 Astuce pour francophones :</p>
                    <p className="text-blue-700">C'est le cas le plus facile ! Prononcez-le simplement comme le "i" français de "v<strong>i</strong>te".</p>
                </div>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {ypsilonAsIWords.map(word => (
                        <WordDisplay key={word.word} word={word} />
                    ))}
                </div>
            </section>
            
            {/* Section 3: Y as J */}
            <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">3. Le Y prononcé comme "j" [j]</h3>
                <p className="text-slate-700 mb-4">
                    Plus rarement, le <strong>Y</strong> peut se prononcer comme un "j" allemand [j] au début d'un mot.
                </p>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg mb-6">
                    <p className="font-semibold text-blue-800">👉 Astuce pour francophones :</p>
                    <p className="text-blue-700">Ce son [j] correspond au "y" français dans "<strong>y</strong>aourt" ou "<strong>y</strong>eux". Ne le confondez jamais avec le "j" de "<strong>j</strong>ardin" !</p>
                </div>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {ypsilonAsJWords.map(word => (
                        <WordDisplay key={word.word} word={word} />
                    ))}
                </div>
            </section>


             {/* Rule Summary */}
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <h3 className="text-xl font-bold text-yellow-800">⚡ Règle importante à retenir</h3>
                <p className="mt-2 text-yellow-900 text-lg">La prononciation du Y dépend de l'origine du mot :</p>
                <ul className="mt-2 space-y-2 font-semibold text-yellow-900 list-inside">
                    <li><span className="font-mono text-xl bg-white px-2 py-1 rounded border">Y (grec)</span> <span className="mx-2">→</span> <span className="font-mono text-xl bg-white px-2 py-1 rounded border">ü</span> (comme le "u" français)</li>
                    <li><span className="font-mono text-xl bg-white px-2 py-1 rounded border">Y (anglais)</span> <span className="mx-2">→</span> <span className="font-mono text-xl bg-white px-2 py-1 rounded border">i</span></li>
                    <li><span className="font-mono text-xl bg-white px-2 py-1 rounded border">Y (début de mot)</span> <span className="mx-2">→</span> <span className="font-mono text-xl bg-white px-2 py-1 rounded border">j</span> (comme "yaourt")</li>
                </ul>
            </div>
            
            {/* Quiz Section */}
            <div className="p-4 md:p-6 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">📝 Mini-Exercice</h3>
                <div className="max-w-xl mx-auto space-y-6">
                    {ypsilonQuiz.map((q, i) => {
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
                                    <p className="mt-3 text-sm font-semibold text-[var(--theme-color-dark)] p-2 bg-[var(--theme-color-light)] rounded-lg animate-fade-in">
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

export default YpsilonLesson;
