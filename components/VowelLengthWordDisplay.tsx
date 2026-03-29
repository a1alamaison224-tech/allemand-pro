import React, { useState, useCallback, useRef } from 'react';
import type { VowelLengthWord } from '../types';
import { SpeakerIcon, MicrophoneIcon, StopIcon } from './IconComponents';
import { useSpeech } from '../contexts/SpeechContext';

interface VowelLengthWordDisplayProps {
  data: VowelLengthWord;
}

const VowelLengthWordDisplay: React.FC<VowelLengthWordDisplayProps> = ({ data }) => {
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
    <div className={`bg-white rounded-lg border border-slate-200 p-4 w-full md:w-56 text-center shadow-sm transition-all ${isThisCardSpeaking ? 'ring-2 ring-[var(--theme-color)]' : ''}`}>
      <div className="uppercase tracking-wide text-sm text-[var(--theme-color-dark)] font-semibold">{data.syllables}</div>
      <h4 onClick={() => play(data.word)} className="text-2xl font-bold text-slate-800 mt-1 mb-4 cursor-pointer">{data.word}</h4>
      
      <div className="flex justify-center items-center gap-2">
        <button
            onClick={() => play(data.word)}
            className={`p-2 rounded-full transition-all duration-200 ${isThisCardSpeaking ? 'bg-[var(--theme-color)] text-white scale-110' : isThisCardLoading ? 'bg-[var(--theme-color-light)] text-[var(--theme-color-dark)] animate-pulse' : 'bg-[var(--theme-color-light)] text-[var(--theme-color-dark)] hover:bg-[var(--theme-color)] hover:text-white'}`}
            aria-label={`Écouter le mot ${data.word}`}
            disabled={isThisCardLoading}
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
        {recordedAudio && (
            <button 
              onClick={playRecording} 
              className="p-2 rounded-full transition-colors duration-200 bg-green-100 text-green-700 hover:bg-green-200"
              aria-label="Écouter ma version"
            >
                <SpeakerIcon className="w-5 h-5" />
            </button>
        )}
      </div>
    </div>
  );
};

export default VowelLengthWordDisplay;
