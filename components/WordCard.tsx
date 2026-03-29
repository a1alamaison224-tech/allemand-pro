import React, { useState, useCallback, useMemo, useEffect } from 'react';
import type { WordData } from '../types';
import { SpeakerIcon, CheckCircleIcon, XCircleIcon } from './IconComponents';
import { useSpeech } from '../contexts/SpeechContext';

interface WordCardProps {
  data: WordData;
}

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const WordCard: React.FC<WordCardProps> = ({ data }) => {
  const { play, isSpeaking, isLoading, currentlySpeakingText } = useSpeech();
  const isThisCardSpeaking = isSpeaking && currentlySpeakingText === data.word;
  const isThisCardLoading = isLoading && currentlySpeakingText === data.word;
  const isSentenceSpeaking = isSpeaking && currentlySpeakingText === data.sentence;
  const isSentenceLoading = isLoading && currentlySpeakingText === data.sentence;

  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const correctVowel = useMemo(() => data.vowelInfo.match(/'(\w)'/)?.[1] || '', [data.vowelInfo]);

  useEffect(() => {
    if (correctVowel) {
        const otherVowels = VOWELS.filter(v => v !== correctVowel);
        const shuffledOptions = [correctVowel, ...otherVowels.sort(() => 0.5 - Math.random()).slice(0, 3)].sort(() => 0.5 - Math.random());
        setQuizOptions(shuffledOptions);
    }
  }, [correctVowel]);

  const handleQuizAnswer = (vowel: string) => {
      setSelectedAnswer(vowel);
  };

  const isCorrect = selectedAnswer === correctVowel;

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 border border-slate-200 flex flex-col border-t-4 border-[var(--theme-color)] ${isThisCardSpeaking ? 'ring-2 ring-offset-2 ring-[var(--theme-color)]' : ''}`}>
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start">
          <div onClick={() => play(data.word)} className="cursor-pointer">
            <div className="uppercase tracking-wide text-sm text-[var(--theme-color-dark)] font-semibold">{data.syllables}</div>
            <h3 className="block mt-1 text-2xl leading-tight font-bold text-slate-900">{data.word}</h3>
            {data.translation && <p className="text-slate-500 italic text-base -mt-1">{data.translation}</p>}
          </div>
          <button
            onClick={() => play(data.word)}
            className={`p-2 rounded-full transition-all duration-200 ${isThisCardSpeaking ? 'bg-[var(--theme-color)] text-white scale-110' : isThisCardLoading ? 'bg-[var(--theme-color-light)] text-[var(--theme-color-dark)] animate-pulse' : 'bg-[var(--theme-color-light)] text-[var(--theme-color-dark)] hover:bg-[var(--theme-color)] hover:text-white'}`}
            aria-label={`Écouter le mot ${data.word}`}
            disabled={isThisCardLoading}
          >
            {isThisCardLoading ? <i className="fa-solid fa-circle-notch animate-spin w-6 h-6 flex items-center justify-center"></i> : <SpeakerIcon className="w-6 h-6" />}
          </button>
        </div>
        <p className="mt-2 text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded inline-block">{data.ipa}</p>
        <p className="mt-4 text-slate-600 bg-slate-50 p-3 rounded-md border border-slate-200">{data.vowelInfo}</p>
      </div>
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
         <div className="flex items-center justify-between">
            <div className="flex-grow cursor-pointer" onClick={() => play(data.sentence)}>
                <p className={`text-slate-700 italic transition-colors ${isSentenceSpeaking ? 'text-[var(--theme-color-dark)]' : ''}`}>"{data.sentence}"</p>
                {data.sentenceTranslation && <p className="text-slate-500 text-sm italic mt-1">"{data.sentenceTranslation}"</p>}
            </div>
            <button
              onClick={() => play(data.sentence)}
              className={`p-2 rounded-full transition-all duration-200 ml-4 flex-shrink-0 ${isSentenceSpeaking ? 'bg-green-500 text-white scale-110' : isSentenceLoading ? 'bg-green-100 text-green-700 animate-pulse' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
              aria-label={`Écouter la phrase d'exemple`}
              disabled={isSentenceLoading}
            >
              {isSentenceLoading ? <i className="fa-solid fa-circle-notch animate-spin w-5 h-5 flex items-center justify-center"></i> : <SpeakerIcon className="w-5 h-5" />}
            </button>
         </div>
      </div>
    <div className="px-6 py-4 bg-slate-100/70 border-t border-slate-200">
        <h4 className="font-semibold text-slate-700 mb-3 text-sm">Question interactive</h4>
        <p className="text-slate-600 text-sm mb-3">Quelle est la voyelle principale du mot ?</p>
        <div className="grid grid-cols-4 gap-2">
            {quizOptions.map(vowel => {
                const isSelected = selectedAnswer === vowel;
                const isOptionCorrect = vowel === correctVowel;
                const isRevealed = selectedAnswer !== null;

                let buttonClass = 'bg-white border-slate-300 text-slate-700 hover:border-[var(--theme-color)] disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70';
                
                if (isRevealed) {
                    if (isOptionCorrect) {
                        buttonClass = 'bg-[var(--color-success-light)] border-[var(--color-success)] text-[var(--color-success-dark)]';
                    } else if (isSelected && !isOptionCorrect) {
                        buttonClass = 'bg-[var(--color-error-light)] border-[var(--color-error)] text-[var(--color-error-dark)] animate-shake';
                    } else {
                        buttonClass = 'bg-slate-100 border-slate-200 text-slate-500 opacity-60';
                    }
                }

                return (
                    <button
                        key={vowel}
                        onClick={() => handleQuizAnswer(vowel)}
                        disabled={isRevealed}
                        className={`p-2 rounded-md text-center font-bold transition-all duration-200 border-2 ${buttonClass}`}
                    >
                        {vowel}
                    </button>
                )
            })}
        </div>
         {selectedAnswer && (
            <div className={`mt-3 text-sm font-semibold animate-fade-in flex items-center gap-2 ${isCorrect ? 'text-[var(--color-success-dark)]' : 'text-[var(--color-error-dark)]'}`}>
                {isCorrect ? <CheckCircleIcon className="w-5 h-5" /> : <XCircleIcon className="w-5 h-5" />}
                <span>
                    {isCorrect ? 'Parfait !' : `La bonne réponse était '${correctVowel}'.`}
                </span>
            </div>
        )}
    </div>
    </div>
  );
};

export default WordCard;
