import React, { useState, useCallback, useEffect } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import type { WordData } from '../types';
import WordCard from './WordCard';
import SkeletonCard from './SkeletonCard';
import { SparklesIcon } from './IconComponents';
import { toast } from 'sonner';

const wordDataSchema = {
  type: Type.OBJECT,
  properties: {
    word: { type: Type.STRING, description: "Le mot en allemand." },
    translation: { type: Type.STRING, description: "La traduction française du mot." },
    syllables: { type: Type.STRING, description: "Le mot séparé en syllabes, avec des tirets." },
    ipa: { type: Type.STRING, description: "La transcription selon l'Alphabet Phonétique International (API)." },
    vowelInfo: { type: Type.STRING, description: "Une courte phrase en français décrivant la voyelle principale et sa longueur (longue ou courte), avec des conseils pour les francophones. Ex: 'Voyelle 'u' longue [uː]. Attention : se prononce comme le 'ou' de 'chou', pas comme le 'u' de 'salut'." },
    sentence: { type: Type.STRING, description: "Une phrase d'exemple simple en allemand utilisant le mot." },
    sentenceTranslation: { type: Type.STRING, description: "La traduction française de la phrase d'exemple." },
  },
  required: ['word', 'translation', 'syllables', 'ipa', 'vowelInfo', 'sentence', 'sentenceTranslation']
};

const schema = {
  type: Type.ARRAY,
  items: wordDataSchema
};

const FilterButton: React.FC<{ label: string; isActive: boolean; onClick: () => void; }> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 capitalize ${isActive ? 'bg-[var(--theme-color)] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100'}`}
  >
    {label}
  </button>
);

const TrainingZone: React.FC = () => {
  const [words, setWords] = useState<WordData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [activeVowel, setActiveVowel] = useState<string>('Toutes');
  const [activeLength, setActiveLength] = useState<string>('Toutes');

  const VOWELS = ['Toutes', 'a', 'e', 'i', 'o', 'u'];
  const LENGTHS: Record<string, string> = {'Toutes': 'Toutes', 'Longue': 'longue', 'Courte': 'courte'};
  
  const generateWords = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Clé API manquante. Veuillez configurer votre clé API Gemini dans les paramètres.");
      }
      const ai = new GoogleGenAI({ apiKey });

      let prompt = `Génère une liste de 9 mots allemands utiles pour un francophone qui apprend la prononciation. Pour chaque mot, fournis les informations requises, y compris sa traduction en français, une phrase d'exemple en allemand avec sa traduction en français, et un conseil de prononciation spécifique pour un francophone.`;
      
      const vowelFilter = activeVowel !== 'Toutes' ? `la voyelle '${activeVowel}'` : "l'une des voyelles simples (a, e, i, o, u)";
      const lengthFilter = activeLength !== 'Toutes' ? ` avec une prononciation ${activeLength}` : "";

      if(activeVowel !== 'Toutes' || activeLength !== 'Toutes') {
        prompt += ` Les mots doivent se concentrer sur ${vowelFilter}${lengthFilter}.`;
      } else {
        prompt += ` Les mots doivent illustrer la prononciation des voyelles simples (a, e, i, o, u) avec un mélange de voyelles longues et courtes.`
      }

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: schema,
        },
      });

      const parsedResponse = JSON.parse(response.text) as WordData[];
      setWords(parsedResponse);

    } catch (e: any) {
      console.error(e);
      let errorMessage = "Désolé, une erreur est survenue lors de la génération des mots. Veuillez réessayer.";
      
      const rawError = String(e);
      if (rawError.includes("429") || rawError.includes("RESOURCE_EXHAUSTED")) {
        errorMessage = "Quota atteint pour la génération de mots. Veuillez patienter une minute avant de réessayer.";
      } else if (rawError.includes("500")) {
        errorMessage = "Le service de génération est temporairement indisponible. Veuillez réessayer dans quelques instants.";
      } else if (rawError.includes("NO_API_KEY") || rawError.includes("Clé API manquante")) {
        errorMessage = "Veuillez configurer votre clé API Gemini dans les paramètres pour utiliser cette fonctionnalité.";
      }

      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [activeVowel, activeLength]);

  useEffect(() => {
    generateWords();
  }, [generateWords]);
  
  return (
    <section>
      <div className="bg-white/80 backdrop-blur-sm sticky top-4 z-10 p-4 rounded-xl shadow-md border border-slate-200 mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-grow w-full">
            <div className="mb-2">
              <span className="font-semibold text-slate-600 text-sm mr-3">Voyelle:</span>
              <div className="inline-flex gap-2 flex-wrap">
                {VOWELS.map(vowel => <FilterButton key={vowel} label={vowel} isActive={activeVowel === vowel} onClick={() => setActiveVowel(vowel)} />)}
              </div>
            </div>
            <div>
               <span className="font-semibold text-slate-600 text-sm mr-3">Longueur:</span>
               <div className="inline-flex gap-2 flex-wrap">
                {Object.entries(LENGTHS).map(([label, value]) => <FilterButton key={label} label={label} isActive={activeLength === label} onClick={() => setActiveLength(label)} />)}
              </div>
            </div>
          </div>
          <button
            onClick={generateWords}
            disabled={isLoading}
            className="w-full md:w-auto flex-shrink-0 bg-[var(--theme-color)] hover:bg-[var(--theme-color-dark)] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <SparklesIcon className="w-5 h-5" />
            {isLoading ? 'Génération...' : 'Générer de nouveaux mots'}
          </button>
      </div>

      {error && (
        <div className="text-center bg-red-100 border border-red-300 text-red-800 rounded-lg p-4 mb-8">
          <p>{error}</p>
          <button onClick={generateWords} className="mt-2 text-sm font-semibold underline">Réessayer</button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {isLoading 
          ? Array.from({ length: 9 }).map((_, index) => <SkeletonCard key={index} />)
          : words.map((wordData, index) => (
              <WordCard key={`${wordData.word}-${index}`} data={wordData} />
          ))
        }
      </div>
       { !isLoading && words.length === 0 && !error && (
        <div className="text-center col-span-full py-12">
            <p className="text-slate-500">Cliquez sur "Générer de nouveaux mots" pour commencer votre entraînement !</p>
        </div>
      )}
    </section>
  );
};

export default TrainingZone;