import React, { useState, useRef } from 'react';
import type { ConsonantWord } from '../types';
import { SpeakerIcon, MicrophoneIcon, StopIcon } from './IconComponents';
import { useSpeech } from '../contexts/SpeechContext';

interface ConsonantWordCardProps {
  data: ConsonantWord;
}

const ConsonantWordCard: React.FC<ConsonantWordCardProps> = ({ data }) => {
  const { play, isSpeaking, isLoading, currentlySpeakingText } = useSpeech();
  const isThisCardSpeaking = isSpeaking && currentlySpeakingText === data.word;
  const isThisCardLoading = isLoading && currentlySpeakingText === data.word;

  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<Blob | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  const handleRecord = async () => {
    if (isRecording) {
      mediaRecorder.current?.stop();
      setIsRecording(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder.current = new MediaRecorder(stream);
        audioChunks.current = [];
        mediaRecorder.current.ondataavailable = event => {
          audioChunks.current.push(event.data);
        };
        mediaRecorder.current.onstop = () => {
          const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
          setRecordedAudio(audioBlob);
          stream.getTracks().forEach(track => track.stop());
        };
        mediaRecorder.current.start();
        setIsRecording(true);
        setRecordedAudio(null);
      } catch (err) {
        console.error("Erreur d'accès au microphone:", err);
        alert("Impossible d'accéder au microphone. Veuillez vérifier les permissions dans votre navigateur.");
      }
    }
  };

  const playRecording = () => {
    if (recordedAudio) {
      const audioUrl = URL.createObjectURL(recordedAudio);
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  const handleQuizAnswer = (index: number) => {
    setSelectedAnswer(index);
  };

  return (
    <div className={`bg-slate-50 rounded-lg border border-slate-200 p-4 flex flex-col transition-shadow ${isThisCardSpeaking ? 'shadow-lg ring-2 ring-[var(--theme-color)]' : ''}`}>
      <div className="flex justify-between items-start mb-3">
        <div onClick={() => play(data.word)} className="cursor-pointer">
          {data.syllables && <div className="uppercase tracking-wide text-sm text-[var(--theme-color-dark)] font-semibold">{data.syllables}</div>}
          <h4 className="text-xl font-bold text-slate-800 mt-1">{data.word}</h4>
          <p className="text-sm text-slate-500 font-mono">{data.ipa}</p>
        </div>
        <div className="flex gap-2">
            <button
                onClick={() => play(data.word)}
                className={`p-2 rounded-full transition-all duration-200 ${isThisCardSpeaking ? 'bg-[var(--theme-color)] text-white scale-110' : isThisCardLoading ? 'bg-[var(--theme-color-light)] text-[var(--theme-color-dark)] animate-pulse' : 'bg-[var(--theme-color-light)] text-[var(--theme-color-dark)] hover:bg-[var(--theme-color)] hover:text-white'}`}
                aria-label={`Écouter le mot ${data.word}`}
                disabled={isSpeaking || isLoading}
            >
                {isThisCardLoading ? <i className="fa-solid fa-circle-notch animate-spin w-5 h-5 flex items-center justify-center"></i> : <SpeakerIcon className="w-5 h-5" />}
            </button>
             <button
                onClick={handleRecord}
                className={`p-2 rounded-full transition-colors duration-200 ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-red-100 text-red-600 hover:bg-red-200'}`}
                aria-label={isRecording ? 'Arrêter l\'enregistrement' : 'Répéter le mot'}
            >
                {isRecording ? <StopIcon className="w-5 h-5" /> : <MicrophoneIcon className="w-5 h-5" />}
            </button>
        </div>
      </div>
      
      {recordedAudio && (
        <div className="mb-4">
          <button onClick={playRecording} className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full flex items-center gap-2 hover:bg-green-200">
            <SpeakerIcon className="w-4 h-4" />
            Écouter ma version
          </button>
        </div>
      )}

      <div className="mt-auto pt-3 border-t border-slate-200">
        <p className="text-sm text-slate-600 mb-2">{data.quiz.question}</p>
        <div className="space-y-2">
            {data.quiz.options.map((option, index) => {
                 const isSelected = selectedAnswer === index;
                 const isCorrect = option.isCorrect;
                 const isRevealed = selectedAnswer !== null;

                 let buttonClass = 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 disabled:bg-slate-50 disabled:cursor-not-allowed';
                 if(isRevealed) {
                     if (isCorrect) {
                         buttonClass = 'bg-green-500 border-green-600 text-white';
                     } else if (isSelected && !isCorrect) {
                         buttonClass = 'bg-red-500 border-red-600 text-white';
                     } else {
                         buttonClass = 'bg-slate-100 border-slate-200 text-slate-500 opacity-70';
                     }
                 }

                return (
                    <button
                        key={index}
                        onClick={() => handleQuizAnswer(index)}
                        disabled={isRevealed}
                        className={`w-full text-left p-2 rounded-md text-sm font-semibold transition-all duration-200 border-2 ${buttonClass}`}
                    >
                       {option.text}
                    </button>
                )
            })}
        </div>
         {selectedAnswer !== null && (
            <p className="mt-2 text-xs font-semibold text-slate-600 animate-fade-in">
                {data.quiz.explanation}
            </p>
        )}
      </div>
    </div>
  );
};

export default ConsonantWordCard;
