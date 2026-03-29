import React from 'react';
import { useSpeech } from '../contexts/SpeechContext';
import { SpeakerIcon } from './IconComponents';

const InlineSpeaker: React.FC<{ children: string }> = ({ children }) => {
  const { play, isSpeaking, currentlySpeakingText } = useSpeech();
  const wordToPlay = children.replace(/<u>|<\/u>/g, '');
  const isThisWordSpeaking = isSpeaking && currentlySpeakingText === wordToPlay;

  return (
    <span className="inline-flex items-center gap-1.5 bg-[var(--theme-color-light)] rounded-md px-2 py-0.5 align-middle">
      <span className="font-semibold text-[var(--theme-color-dark)]" dangerouslySetInnerHTML={{ __html: children }} />
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

const VowelGuide: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
        Guide de Prononciation pour Francophones
      </h2>
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
        <p className="text-slate-700 mb-4">
          En allemand, la prononciation des voyelles (a, e, i, o, u) dépend de leur <strong>longueur</strong>. Une voyelle peut être longue ou courte, ce qui change complètement le son. C'est l'une des clés pour avoir un bon accent !
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-4 rounded-lg border">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Voyelles Longues [ː]</h3>
            <p className="text-slate-600 mb-3">
              Une voyelle est généralement longue si :
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Elle est suivie d'un 'h' muet (ex: <InlineSpeaker>gehen</InlineSpeaker>).</li>
              <li>Elle est doublée (ex: <InlineSpeaker>See</InlineSpeaker>, <InlineSpeaker>Boot</InlineSpeaker>).</li>
              <li>Elle est suivie d'une seule consonne (ex: <InlineSpeaker>sagen</InlineSpeaker>, <InlineSpeaker>lesen</InlineSpeaker>).</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border">
            <h3 className="text-xl font-semibold text-red-700 mb-2">Voyelles Courtes</h3>
            <p className="text-slate-600 mb-3">
              Une voyelle est généralement courte si :
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Elle est suivie d'au moins deux consonnes (ex: <InlineSpeaker>wandern</InlineSpeaker>, <InlineSpeaker>Finger</InlineSpeaker>).</li>
              <li>La consonne qui suit est doublée (ex: <InlineSpeaker>wollen</InlineSpeaker>).</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Comparaison avec le Français :</h3>
            <ul className="space-y-3 text-slate-700">
                {/* FIX: Changed JSX children to a string prop to match the component's type definition. */}
                <li><strong>A</strong> / <strong>a</strong>: Assez simple. Le <strong>'a' long [aː]</strong> est comme dans "pâte" (ex: <InlineSpeaker children="S<u>a</u>gen" />). Le <strong>'a' court [a]</strong> est comme dans "patte" (ex: <InlineSpeaker children="w<u>a</u>ndern" />).</li>
                {/* FIX: Changed JSX children to a string prop to match the component's type definition. */}
                <li><strong>E</strong> / <strong>e</strong>: Le <strong>'e' long [eː]</strong> est un "é" fermé, comme dans "blé" (ex: <InlineSpeaker children="l<u>e</u>sen" />). Le <strong>'e' court [ɛ]</strong> est un "è" ouvert, comme dans "mère" (ex: <InlineSpeaker children="w<u>e</u>rden" />).</li>
                {/* FIX: Changed JSX children to a string prop to match the component's type definition. */}
                <li><strong>I</strong> / <strong>i</strong>: Le <strong>'i' long [iː]</strong> est tendu, comme dans "gîte" (ex: <InlineSpeaker children="<u>I</u>gel" />). Le <strong>'i' court [ɪ]</strong> est plus relâché, un son entre "i" et "é" qui n'existe pas en français (ex: <InlineSpeaker children="m<u>i</u>t" />).</li>
                {/* FIX: Changed JSX children to a string prop to match the component's type definition. */}
                <li><strong>O</strong> / <strong>o</strong>: Le <strong>'o' long [oː]</strong> est fermé, comme dans "gros" (ex: <InlineSpeaker children="B<u>oo</u>t" />). Le <strong>'o' court [ɔ]</strong> est ouvert, comme dans "botte" (ex: <InlineSpeaker children="w<u>o</u>llen" />).</li>
                {/* FIX: Changed JSX children to a string prop to match the component's type definition. */}
                <li className="p-3 bg-yellow-100 border-l-4 border-yellow-400 rounded"><strong>U</strong> / <strong>u</strong>: <strong className="text-red-700">Piège principal !</strong> Le <strong>'u' allemand (long [uː] ou court [ʊ])</strong> se prononce toujours comme le "ou" français. Le <strong>'u' long</strong> est comme dans "chou" (ex: <InlineSpeaker children="F<u>u</u>ge" />). Le <strong>'u' court</strong> est un "ou" bref et relâché (ex: <InlineSpeaker children="M<u>u</u>tter" />). Ne le prononcez jamais comme le "u" de "salut" !</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default VowelGuide;