import React from 'react';
import { vowelLengthPairs, longVowelWords, shortVowelWords, exceptionWords } from '../constants/vowelLengthData';
import VowelLengthPairCard from './VowelLengthPairCard';
import VowelLengthWordDisplay from './VowelLengthWordDisplay';
import { useSpeech } from '../contexts/SpeechContext';
import { SpeakerIcon } from './IconComponents';

const InlineSpeaker: React.FC<{ children: string }> = ({ children }) => {
  const { play, isSpeaking, currentlySpeakingText } = useSpeech();
  const wordToPlay = children.replace(/-/g, '');
  const isThisWordSpeaking = isSpeaking && currentlySpeakingText === wordToPlay;

  return (
    <span className="inline-flex items-center gap-1.5 bg-[var(--theme-color-light)] rounded-md px-2 py-0.5 align-middle">
      <span className="font-semibold text-[var(--theme-color-dark)]">{children}</span>
      <button
        onClick={() => play(wordToPlay)}
        disabled={isSpeaking}
        className={`p-1 rounded-full transition-all duration-200 ${
          isThisWordSpeaking 
            ? 'bg-[var(--theme-color)] text-white' 
            : 'bg-white text-[var(--theme-color-dark)] hover:bg-[var(--theme-color)] hover:text-white'
        }`}
        aria-label={`Écouter le mot ${wordToPlay}`}
      >
        <SpeakerIcon className="w-3.5 h-3.5" />
      </button>
    </span>
  );
};

const VowelLengthGuide: React.FC = () => {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
        Leçon 1 : Voyelles Longues vs. Courtes
      </h2>
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
        
        <div className="bg-slate-50 p-4 rounded-lg border mb-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">La Règle d'Or (simplifiée)</h3>
          <p className="text-slate-700 mb-4">
            La longueur de la voyelle est l'un des secrets pour bien sonner en allemand. Voici la règle de base :
          </p>
          <ul className="space-y-3 text-slate-700">
              <li className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                <strong className="font-semibold text-blue-800">Voyelle Longue</strong> &rarr; La voyelle est suivie d'<strong>une seule consonne</strong>.
                <br/>
                <span className="text-sm italic">(Ex: <InlineSpeaker>Ra-te</InlineSpeaker>, <InlineSpeaker>lo-ben</InlineSpeaker>)</span>
              </li>
               <li className="p-3 bg-red-50 border-l-4 border-red-400 rounded">
                <strong className="font-semibold text-red-800">Voyelle Courte</strong> &rarr; La voyelle est suivie de <strong>deux consonnes ou plus</strong>.
                 <br/>
                <span className="text-sm italic">(Ex: <InlineSpeaker>Rat-te</InlineSpeaker>, <InlineSpeaker>Rob-be</InlineSpeaker>)</span>
              </li>
              <li className="p-3 bg-yellow-100 border-l-4 border-yellow-400 rounded">
                 <strong className="font-semibold text-yellow-800">Exceptions à noter :</strong> Les combinaisons <strong className="font-mono">"ck"</strong> et <strong className="font-mono">"tz"</strong> comptent comme deux consonnes (<span className="font-mono">kk</span> et <span className="font-mono">zz</span>). Une voyelle devant est donc toujours courte.
              </li>
          </ul>
        </div>
        
        <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">Comparaisons Directes</h3>
            <p className="text-center text-slate-600 mb-6">Écoutez bien la différence entre la version longue et la version courte.</p>
            <div className="space-y-6">
                {vowelLengthPairs.map((pair, index) => (
                    <VowelLengthPairCard key={index} pair={pair} />
                ))}
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
            <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Exemples de Voyelles Longues</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {longVowelWords.map((wordData, index) => (
                        <VowelLengthWordDisplay key={`${wordData.word}-${index}`} data={wordData} />
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">Exemples de Voyelles Courtes</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {shortVowelWords.map((wordData, index) => (
                        <VowelLengthWordDisplay key={`${wordData.word}-${index}`} data={wordData} />
                    ))}
                </div>
            </div>
        </div>

        <div className="mt-10">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4 text-center">Pratique des Exceptions</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {exceptionWords.map((wordData, index) => (
                    <VowelLengthWordDisplay key={`${wordData.word}-${index}`} data={wordData} />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default VowelLengthGuide;