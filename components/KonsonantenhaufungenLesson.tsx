import React, { useState, useMemo } from 'react';
import { konsonantenhaufungen, internalKonsonantenhaufungen, konsonantenhaufungenQuiz } from '../constants/konsonantenhaufungenData';
import { SpeakerIcon, CheckCircleIcon, XCircleIcon } from './IconComponents';
import { useSpeech } from '../contexts/SpeechContext';

interface WordDisplayProps {
  word: { word: string; syllables: string; translation: string; };
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word }) => {
    const { play, isSpeaking, isLoading, currentlySpeakingText } = useSpeech();
    const isThisWordSpeaking = isSpeaking && currentlySpeakingText === word.word;
    const isThisWordLoading = isLoading && currentlySpeakingText === word.word;

    return (
        <div className={`bg-white border border-slate-200 rounded-lg p-3 shadow-sm flex items-center justify-between gap-3 transition-all hover:shadow-md ${isThisWordSpeaking ? 'ring-2 ring-[var(--theme-color)]' : ''}`}>
            <div onClick={() => play(word.word)} className="flex-grow cursor-pointer">
                <span className="font-semibold text-slate-800 text-lg">{word.word}</span>
                <p className="text-xs text-slate-500 italic">{word.translation}</p>
                <p className="text-sm text-slate-500 mt-1 font-mono">{word.syllables}</p>
            </div>
            <button
                onClick={() => play(word.word)}
                disabled={isSpeaking || isLoading}
                className={`p-2 rounded-full transition-all duration-200 flex-shrink-0 ${isThisWordSpeaking ? 'bg-[var(--theme-color)] text-white scale-110' : isThisWordLoading ? 'bg-[var(--theme-color-light)] text-[var(--theme-color-dark)] animate-pulse' : 'bg-[var(--theme-color-light)] text-[var(--theme-color-dark)] hover:bg-[var(--theme-color)] hover:text-white'}`}
                aria-label={`Écouter ${word.word}`}
            >
                {isThisWordLoading ? <i className="fa-solid fa-circle-notch animate-spin w-5 h-5 flex items-center justify-center"></i> : <SpeakerIcon className="w-5 h-5" />}
            </button>
        </div>
    );
};


const KonsonantenhaufungenLesson: React.FC = () => {
    const [quizAnswers, setQuizAnswers] = useState<(string | null)[]>(Array(konsonantenhaufungenQuiz.length).fill(null));

    const handleQuizAnswer = (questionIndex: number, option: string) => {
        const newAnswers = [...quizAnswers];
        if (newAnswers[questionIndex] === null) {
            newAnswers[questionIndex] = option;
            setQuizAnswers(newAnswers);
        }
    };

    const groupedInitialWords = useMemo(() => {
        return konsonantenhaufungen.reduce((acc, word) => {
            if (!acc[word.group]) {
                acc[word.group] = [];
            }
            acc[word.group].push(word);
            return acc;
        }, {} as Record<string, typeof konsonantenhaufungen>);
    }, []);

    const groupedInternalWords = useMemo(() => {
        return internalKonsonantenhaufungen.reduce((acc, word) => {
            if (!acc[word.group]) {
                acc[word.group] = [];
            }
            acc[word.group].push(word);
            return acc;
        }, {} as Record<string, typeof internalKonsonantenhaufungen>);
    }, []);

    return (
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-slate-200 space-y-10">
            {/* Intro */}
            <div className="text-slate-700 bg-[var(--theme-color-light)] p-4 rounded-lg border border-[var(--theme-color)]/20">
                 <h3 className="text-xl font-bold text-[var(--theme-color-dark)] mb-2">Qu'est-ce qu'un "Konsonantenhäufung" ?</h3>
                <p>
                   L'allemand aime regrouper plusieurs consonnes en début de mot ou de syllabe (par exemple : <strong>str</strong>, <strong>pfl</strong>, <strong>schw</strong>). Ces "tas de consonnes" (<em>Konsonantenhäufungen</em>) peuvent sembler intimidants pour un francophone. La clé est de prononcer chaque consonne distinctement mais de manière fluide.
                </p>
            </div>


            {/* Section 1: Initial groups */}
            <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">Groupes en début de mot</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {(Object.entries(groupedInitialWords) as [string, typeof konsonantenhaufungen][]).map(([group, words]) => (
                        <div key={group} className="bg-slate-50 p-3 rounded-lg border">
                            <h4 className="font-bold text-2xl text-center text-[var(--theme-color-dark)] mb-3 font-mono bg-white rounded-md py-1 border">{group}</h4>
                            <div className="space-y-2">
                                {words.map(word => (
                                     <WordDisplay key={word.word} word={word} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 2: Internal/Final groups */}
            <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">Groupes en fin de mot ou internes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {(Object.entries(groupedInternalWords) as [string, typeof internalKonsonantenhaufungen][]).map(([group, words]) => (
                        <div key={group} className="bg-slate-50 p-3 rounded-lg border">
                            <h4 className="font-bold text-2xl text-center text-[var(--theme-color-dark)] mb-3 font-mono bg-white rounded-md py-1 border">{group}</h4>
                            <div className="space-y-2">
                                {words.map(word => (
                                     <WordDisplay key={word.word} word={word} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
             {/* Rule Summary */}
            <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                <h3 className="text-xl font-bold text-blue-800">⚡ Astuces pour francophones</h3>
                <ul className="mt-2 text-blue-700 list-disc list-inside space-y-1">
                   <li><strong>Découpez les mots :</strong> Séparez mentalement le mot en syllabes (ex : <span className="font-semibold">Pflan-ze</span>).</li>
                   <li><strong>Pratiquez lentement :</strong> Prononcez chaque consonne du groupe l'une après l'autre, puis accélérez progressivement. Par exemple, pour "Straße" : s... t... r... aße → s.tr.aße → Straße.</li>
                   <li><strong>Écoutez activement :</strong> Répétez les exemples audio plusieurs fois pour habituer votre oreille et votre bouche à l'enchaînement des sons.</li>
                </ul>
            </div>
            
            {/* Quiz Section */}
            <div className="p-4 md:p-6 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">📝 Mini-Exercice</h3>
                <div className="max-w-xl mx-auto space-y-6">
                    {konsonantenhaufungenQuiz.map((q, i) => {
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

export default KonsonantenhaufungenLesson;
