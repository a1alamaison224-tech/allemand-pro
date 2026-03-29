import React, { useState } from 'react';
import { stWords, spWords, stspExceptions, stspQuiz } from '../constants/stspData';
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


const StSpLesson: React.FC = () => {
    const [quizAnswers, setQuizAnswers] = useState<(string | null)[]>(Array(stspQuiz.length).fill(null));

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
                 <h3 className="text-xl font-bold text-[var(--theme-color-dark)] mb-2">La règle du St et Sp</h3>
                <p>
                Les combinaisons <strong>St</strong> et <strong>Sp</strong> sont très courantes en allemand et ont une prononciation spéciale qu'il est essentiel de maîtriser pour bien sonner. La règle est simple et dépend de leur position dans le mot.
                </p>
            </div>


            {/* Section 1: St / Sp at the beginning */}
            <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">1. En début de mot ou syllabe : [ʃt] et [ʃp]</h3>
                <p className="text-slate-700 mb-4">
                    Quand <strong>St</strong> ou <strong>Sp</strong> se trouvent au <strong>début d'un mot ou d'une syllabe</strong>, le 's' se transforme en son "ch" français [ʃ].
                </p>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg mb-6">
                    <p className="font-semibold text-blue-800">👉 Astuce pour francophones :</p>
                    <ul className="text-blue-700 list-disc list-inside mt-1">
                        <li>Pour <strong>St</strong>, pensez à dire "<strong>cht</strong>" comme dans "<strong>cht</strong>i". Ex : <em>Straße</em> → "Chtra-sse".</li>
                        <li>Pour <strong>Sp</strong>, pensez à dire "<strong>chp</strong>". Ex : <em>Spiel</em> → "Chpiel".</li>
                    </ul>
                </div>
                <h4 className="font-bold text-slate-800 mb-3">Exemples avec "St" [ʃt]</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {stWords.map(word => (
                        <WordDisplay key={word.word} word={word} />
                    ))}
                </div>
                 <h4 className="font-bold text-slate-800 mt-6 mb-3">Exemples avec "Sp" [ʃp]</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {spWords.map(word => (
                        <WordDisplay key={word.word} word={word} />
                    ))}
                </div>
            </section>

            {/* Section 2: Exceptions */}
            <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">2. Ailleurs dans le mot : [st] et [sp]</h3>
                <p className="text-slate-700 mb-4">
                    Si <strong>St</strong> ou <strong>Sp</strong> ne sont <strong>pas en début de mot ou de syllabe</strong>, alors ils se prononcent normalement, comme en français.
                </p>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {stspExceptions.map(word => (
                        <WordDisplay key={word.word} word={word} />
                    ))}
                </div>
            </section>
            
             {/* Rule Summary */}
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <h3 className="text-xl font-bold text-yellow-800">⚡ Règle importante à retenir</h3>
                <ul className="mt-2 space-y-2 font-semibold text-yellow-900 list-inside">
                    <li><span className="font-mono text-xl bg-white px-2 py-1 rounded border">St / Sp</span> en <strong>début</strong> de mot/syllabe <span className="mx-2">→</span> son "ch" <span className="font-mono text-xl bg-white px-2 py-1 rounded border">[ʃt] / [ʃp]</span></li>
                    <li><span className="font-mono text-xl bg-white px-2 py-1 rounded border">St / Sp</span> <strong>ailleurs</strong> dans le mot <span className="mx-2">→</span> son "s" normal <span className="font-mono text-xl bg-white px-2 py-1 rounded border">[st] / [sp]</span></li>
                </ul>
            </div>
            
            {/* Quiz Section */}
            <div className="p-4 md:p-6 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">📝 Mini-Exercice</h3>
                <div className="max-w-xl mx-auto space-y-6">
                    {stspQuiz.map((q, i) => {
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
                                        {userAnswer === q.answer ? `✅ ${q.explanation}` : `❌ Falsch, la bonne réponse était "${q.answer}".`}
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

export default StSpLesson;
