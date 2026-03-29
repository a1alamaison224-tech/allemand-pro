import React, { createContext, useContext } from 'react';

interface SpeechContextType {
    play: (text: string) => void;
    cancel: () => void;
    isSpeaking: boolean;
    isLoading: boolean;
    error: string | null;
    currentlySpeakingText: string | null;
}

export const SpeechContext = createContext<SpeechContextType | undefined>(undefined);

export const useSpeech = () => {
    const context = useContext(SpeechContext);
    if (!context) {
        throw new Error('useSpeech must be used within a SpeechProvider');
    }
    return context;
};
