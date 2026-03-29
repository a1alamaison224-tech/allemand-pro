import React from 'react';
import { generateLessonPdf } from './pdfGenerator';
import { DownloadIcon, SpeakerIcon } from './IconComponents';
import type { PdfData } from '../types';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { SpeechContext } from '../contexts/SpeechContext';

interface LessonWrapperProps {
  title: string;
  color: string;
  onBack: () => void;
  children: React.ReactNode;
  lessonNumber: number;
  pdfData?: PdfData;
  pdfHeaders?: string[];
  audioWords?: string[];
  hideInstructions?: boolean;
}

const BackArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const PlayAllIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z" /></svg>
);
const StopAllIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" /></svg>
);


const LessonWrapper: React.FC<LessonWrapperProps> = ({ title, color, onBack, children, lessonNumber, pdfData, pdfHeaders, audioWords, hideInstructions }) => {

  const speech = useSpeechSynthesis();
  
  const hasPdfData = lessonNumber > 0 && pdfData && pdfData.length > 0;
  const hasAudioData = audioWords && audioWords.length > 0;

  const handlePlayAll = () => {
    if(speech.isSpeaking) {
      speech.cancel();
    } else if(hasAudioData) {
      speech.playQueue(audioWords);
    }
  };

  return (
    <SpeechContext.Provider value={speech}>
        <div className={`theme-${color} animate-fade-in`}>
          <button 
            onClick={onBack} 
            className="mb-8 text-[var(--theme-color-dark)] hover:text-[var(--theme-color)] font-semibold flex items-center gap-2 transition-colors duration-200"
            aria-label="Retour à l'accueil"
          >
            <BackArrowIcon />
            Retour à l'accueil
          </button>
          <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 text-center md:text-left">{title}</h2>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                {hasAudioData && (
                <button 
                    onClick={handlePlayAll}
                    disabled={speech.isLoading}
                    className={`w-full md:w-auto flex-shrink-0 bg-[var(--theme-color-light)] text-[var(--theme-color-dark)] font-bold py-2 px-4 rounded-lg shadow-sm hover:shadow-md hover:bg-[var(--theme-color)] hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${speech.isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {speech.isLoading ? (
                        <i className="fa-solid fa-circle-notch animate-spin w-5 h-5 flex items-center justify-center"></i>
                    ) : speech.isSpeaking ? (
                        <StopAllIcon className="w-5 h-5" />
                    ) : (
                        <PlayAllIcon className="w-5 h-5" />
                    )}
                    <span>{speech.isLoading ? 'Chargement...' : speech.isSpeaking ? 'Arrêter la lecture' : 'Tout écouter'}</span>
                </button>
                )}
                {hasPdfData && (
                <button 
                    onClick={() => generateLessonPdf(lessonNumber, title, pdfData, pdfHeaders)}
                    className="w-full md:w-auto flex-shrink-0 bg-slate-200 text-slate-700 font-bold py-2 px-4 rounded-lg shadow-sm hover:shadow-md hover:bg-slate-300 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                    <DownloadIcon className="w-5 h-5" />
                    <span>Liste de mots (PDF)</span>
                </button>
                )}
            </div>
          </header>
          {!hideInstructions && (
            <div className="p-4 bg-slate-100/80 rounded-lg border-l-4 border-[var(--theme-color)] mb-8">
                  <h3 className="text-lg font-bold text-[var(--theme-color-dark)]">Écoute et répète</h3>
                  <p className="text-slate-600 mt-1">Cliquez sur un mot ou sur l'icône <SpeakerIcon className="w-4 h-4 inline-block -mt-1"/> pour entendre la prononciation. Utilisez le bouton "Tout écouter" pour enchaîner toute la leçon.</p>
              </div>
          )}
          {children}
        </div>
    </SpeechContext.Provider>
  );
};
export default LessonWrapper;