import { useState, useEffect, useCallback, useRef } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { toast } from 'sonner';

// Helper to convert base64 to ArrayBuffer
const base64ToArrayBuffer = (base64: string) => {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
};

// Helper to convert Int16 PCM to Float32
const pcm16ToFloat32 = (buffer: ArrayBuffer) => {
    const int16Array = new Int16Array(buffer);
    const float32Array = new Float32Array(int16Array.length);
    for (let i = 0; i < int16Array.length; i++) {
        float32Array[i] = int16Array[i] / 32768;
    }
    return float32Array;
};

export const useSpeechSynthesis = () => {
    const [isSupported] = useState(true);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentlySpeakingText, setCurrentlySpeakingText] = useState<string | null>(null);
    
    const utteranceQueue = useRef<string[]>([]);
    const audioContextRef = useRef<AudioContext | null>(null);
    const currentSourceRef = useRef<AudioBufferSourceNode | null>(null);
    const audioCache = useRef<Map<string, AudioBuffer>>(new Map());
    const isQuotaExhausted = useRef<boolean>(false);

    // Initialize AudioContext lazily
    const getAudioContext = () => {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        }
        if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume();
        }
        return audioContextRef.current;
    };

    // Fallback to native TTS
    const playNative = useCallback((text: string) => {
        if (!window.speechSynthesis) {
            setIsSpeaking(false);
            setIsLoading(false);
            setCurrentlySpeakingText(null);
            return;
        }
        
        window.speechSynthesis.cancel();
        
        const speak = () => {
            const utterance = new SpeechSynthesisUtterance(text);
            const voices = window.speechSynthesis.getVoices();
            const germanVoice = voices.find(v => v.lang.startsWith('de') && v.name.includes('Google')) || 
                               voices.find(v => v.lang.startsWith('de') && v.name.includes('Natural')) ||
                               voices.find(v => v.lang.startsWith('de')) ||
                               voices[0];
            
            if (germanVoice) utterance.voice = germanVoice;
            utterance.lang = 'de-DE';
            utterance.rate = 0.85;
            utterance.pitch = 1.0;
            
            utterance.onstart = () => {
                setIsSpeaking(true);
                setCurrentlySpeakingText(text);
            };
            utterance.onend = () => {
                if (utteranceQueue.current.length > 0) {
                    const nextText = utteranceQueue.current.shift();
                    if (nextText) play(nextText, true);
                } else {
                    setIsSpeaking(false);
                    setCurrentlySpeakingText(null);
                }
            };
            utterance.onerror = () => {
                setIsSpeaking(false);
                setCurrentlySpeakingText(null);
            };
            window.speechSynthesis.speak(utterance);
        };

        if (window.speechSynthesis.getVoices().length === 0) {
            window.speechSynthesis.onvoiceschanged = speak;
        } else {
            speak();
        }
    }, []);

    const cancel = useCallback(() => {
        if (currentSourceRef.current) {
            currentSourceRef.current.stop();
            currentSourceRef.current = null;
        }
        window.speechSynthesis.cancel();
        utteranceQueue.current = [];
        setIsSpeaking(false);
        setIsLoading(false);
        setError(null);
        setCurrentlySpeakingText(null);
    }, []);

    const play = useCallback(async (text: string, fromQueue = false) => {
        if (!fromQueue) cancel();

        setIsLoading(true);
        setIsSpeaking(true);
        setError(null);
        setCurrentlySpeakingText(text);

        // 1. Check Cache First
        if (audioCache.current.has(text)) {
            const cachedBuffer = audioCache.current.get(text)!;
            const ctx = getAudioContext();
            const source = ctx.createBufferSource();
            source.buffer = cachedBuffer;
            source.connect(ctx.destination);
            currentSourceRef.current = source;
            source.onended = () => {
                currentSourceRef.current = null;
                setIsSpeaking(false);
                setIsLoading(false);
                setCurrentlySpeakingText(null);
            };
            setIsLoading(false);
            source.start();
            return;
        }

        // 2. If quota was already exhausted this session, skip Gemini and go straight to native
        if (isQuotaExhausted.current) {
            setIsLoading(false);
            playNative(text);
            return;
        }

        // 3. Try Gemini TTS with Retry Logic
        const maxRetries = 1;
        let attempt = 0;

        while (attempt <= maxRetries) {
            try {
                const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
                if (!apiKey) throw new Error("NO_API_KEY");

                const ai = new GoogleGenAI({ apiKey });
                const response = await ai.models.generateContent({
                    model: "gemini-2.5-flash-preview-tts",
                    contents: [{ parts: [{ text: `Prononce ce mot ou cette phrase en allemand natif : ${text}` }] }],
                    config: {
                        systemInstruction: "Tu es un professeur d'allemand natif. Ta prononciation est parfaite, claire et respecte scrupuleusement l'accent allemand standard (Hochdeutsch).",
                        responseModalities: [Modality.AUDIO],
                        speechConfig: {
                            voiceConfig: {
                                prebuiltVoiceConfig: { voiceName: 'Charon' },
                            },
                        },
                    },
                });

                if (!response.candidates?.[0]?.content?.parts) throw new Error("EMPTY_RESPONSE");

                const base64Audio = response.candidates[0].content.parts.find(p => p.inlineData?.data)?.inlineData?.data;
                if (!base64Audio) throw new Error("NO_AUDIO_DATA");

                const ctx = getAudioContext();
                const arrayBuffer = base64ToArrayBuffer(base64Audio);
                const float32Data = pcm16ToFloat32(arrayBuffer);
                
                const audioBuffer = ctx.createBuffer(1, float32Data.length, 24000);
                audioBuffer.getChannelData(0).set(float32Data);

                audioCache.current.set(text, audioBuffer);

                const source = ctx.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(ctx.destination);
                currentSourceRef.current = source;

                source.onended = () => {
                    currentSourceRef.current = null;
                    setIsSpeaking(false);
                    setIsLoading(false);
                    setCurrentlySpeakingText(null);
                };

                setIsLoading(false);
                source.start();
                return;

            } catch (err: any) {
                attempt++;
                const rawError = String(err);
                
                if (rawError.includes("500") && attempt <= maxRetries) {
                    await new Promise(r => setTimeout(r, 800));
                    continue;
                }

                // Silent fallback
                if (rawError.includes("429") || rawError.includes("RESOURCE_EXHAUSTED")) {
                    isQuotaExhausted.current = true; // Mark as exhausted for this session
                }
                
                if (rawError.includes("NO_API_KEY")) {
                    toast.info("Veuillez configurer votre clé API pour la voix haute qualité.", { duration: 3000 });
                }

                setIsLoading(false);
                playNative(text);
                return;
            }
        }
    }, [cancel, playNative]);

    const playQueue = useCallback((texts: string[]) => {
        cancel();
        utteranceQueue.current = [...texts];
        const firstText = utteranceQueue.current.shift();
        if (firstText) {
            play(firstText, true);
        }
    }, [play, cancel]);

    useEffect(() => {
        return () => {
            cancel();
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, [cancel]);

    return { play, cancel, playQueue, isSpeaking, isLoading, error, currentlySpeakingText, isSupported };
};
