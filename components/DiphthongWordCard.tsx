import React, { useState, useRef } from 'react';
import type { DiphthongWord } from '../types';
import { SpeakerIcon, MicrophoneIcon, StopIcon } from './IconComponents';
import { useSpeech } from '../contexts/SpeechContext';

interface DiphthongWordCardProps {
  data: DiphthongWord;
}

const DiphthongWordCard: React.FC<DiphthongWordCardProps> = ({ data }) => {
  const { play, isSpeaking, isLoading, currentlySpeakingText } = useSpeech();
  const isThisCardSpeaking = isSpeaking && currentlySpeakingText === data.word;
  const isThisCardLoading = isLoading && currentlySpeakingText === data.word;
  
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<Blob | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  
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

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300 border border-slate-200 flex flex-col border-t-4 border-[var(--theme-color)] ${isThisCardSpeaking ? 'ring-2 ring-offset-2 ring-[var(--theme-color)]' : ''}`}>
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start">
          <div onClick={() => play(data.word)} className="cursor-pointer">
            <h3 className="block text-2xl leading-tight font-bold text-slate-900">{data.word}</h3>
            <p className="text-slate-500 italic text-sm">{data.translation}</p>
          </div>
          <div className="flex flex-col gap-2">
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
              className={`p-2 rounded-full transition-all duration-200 ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-red-100 text-red-600 hover:bg-red-200'}`}
              aria-label={isRecording ? 'Arrêter l\'enregistrement' : 'Répéter le mot'}
            >
              {isRecording ? <StopIcon className="w-5 h-5" /> : <MicrophoneIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <p className="mt-2 text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded inline-block text-sm">{data.ipa}</p>

        {recordedAudio && (
            <button onClick={playRecording} className="mt-3 text-sm font-semibold text-[var(--color-success-dark)] bg-[var(--color-success-light)] px-3 py-1 rounded-full flex items-center gap-2 hover:bg-[var(--color-success)]/20">
                <SpeakerIcon className="w-4 h-4" />
                Écouter ma répétition
            </button>
        )}
      </div>
    </div>
  );
};

export default DiphthongWordCard;
