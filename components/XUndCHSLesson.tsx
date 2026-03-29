import React, { useState } from 'react';
import { xWords, chsWords, xQuiz } from '../constants/xData';
import { SpeakerIcon, CheckCircleIcon, XCircleIcon } from './IconComponents';
import { useSpeech } from '../contexts/SpeechContext';

interface WordDisplayProps {
  word: { word: string; ipa: string };
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word }) => {
    const { play, isSpeaking, currentlySpeakingText } = useSpeech();
    const isThisWordSpeaking = isSpeaking && currentlySpeakingText === word.word;
    
    return (
        <div className={`bg-white border border-slate-200 rounded-lg p-3 shadow-sm flex items-center justify-between gap-3 transition-all hover:shadow-md ${isThisWordSpeaking ? 'ring-2 ring-[var(--theme-color)]' : ''}`}>
            <div onClick={() => play(word.word)} className="cursor-pointer">
              <span className="font-semibold text-slate-800 text-lg">{word.word}</span>
              <p className="text-sm text-slate-500 font-mono">{word.ipa}</p>
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


const XUndCHSLesson: React.FC = () => {
    const [quizAnswers, setQuizAnswers] = useState<(string | null)[]>(Array(xQuiz.length).fill(null));

    const handleQuizAnswer = (questionIndex: number, option: string) => {
        const newAnswers = [...quizAnswers];
        if (newAnswers[questionIndex] === null) {
            newAnswers[questionIndex] = option;
            setQuizAnswers(newAnswers);
        }
    };

    return (
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-slate-200 space-y-10">
            {/* Section Xx */}
            <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">1. La lettre Xx</h3>
                <p className="text-slate-700 mb-4">
                    La lettre <strong>X</strong> se prononce toujours comme <strong>[ks]</strong>. C'est un son court et percutant.
                </p>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg mb-6">
                    <p className="font-semibold text-blue-800">👉 Astuce pour francophones :</p>
                    <p className="text-blue-700">Pensez au son « ks » que vous faites déjà dans le mot français <strong>taxi</strong>. C'est exactement le même son !</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {xWords.map(word => (
                        <WordDisplay key={word.word} word={word} />
                    ))}
                </div>
            </section>

            {/* Section chs */}
            <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">2. Le groupe de lettres "chs"</h3>
                <p className="text-slate-700 mb-4">
                    Quand vous voyez le groupe de lettres <strong>chs</strong>, il se prononce également <strong>[ks]</strong>, tout comme la lettre X.
                </p>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg mb-6">
                    <p className="font-semibold text-blue-800">👉 Astuce pour francophones :</p>
                    <p className="text-blue-700">Dès que vous voyez <strong>chs</strong>, ignorez le 'h' et pensez simplement à un <strong>X</strong>. Le mot <em>sechs</em> (six) se prononce donc comme "seks".</p>
                </div>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {chsWords.map(word => (
                        <WordDisplay key={word.word} word={word} />
                    ))}
                </div>
            </section>

             {/* Rule Summary */}
            <div className="p-4 bg-[var(--theme-color-light)] border-l-4 border-[var(--theme-color)] rounded-r-lg">
                <h3 className="text-xl font-bold text-[var(--theme-color-dark)]">⚡ Règle importante à retenir</h3>
                <p className="mt-2 text-slate-800 text-lg">En allemand, c'est très simple :</p>
                <ul className="mt-2 space-y-2 font-semibold text-slate-800 list-inside">
                    <li><span className="font-mono text-xl bg-white px-2 py-1 rounded border">X</span> <span className="mx-2">=</span> <span className="font-mono text-xl bg-white px-2 py-1 rounded border">[ks]</span></li>
                    <li><span className="font-mono text-xl bg-white px-2 py-1 rounded border">chs</span> <span className="mx-2">=</span> <span className="font-mono text-xl bg-white px-2 py-1 rounded border">[ks]</span></li>
                </ul>
            </div>
            
            {/* Quiz Section */}
            <div className="p-4 md:p-6 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">📝 Mini-Exercice</h3>
                <div className="max-w-xl mx-auto space-y-6">
                    {xQuiz.map((q, i) => {
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

export default XUndCHSLesson;
