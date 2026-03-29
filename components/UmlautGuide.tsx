import React from 'react';
import { umlautPairs } from '../constants/umlautData';
import UmlautPairCard from './UmlautPairCard';

const UmlautGuide: React.FC = () => {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
        Leçon 3 : Les Umlauts (Ä, Ö, Ü)
      </h2>
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
        
        <div className="bg-slate-50 p-4 rounded-lg border mb-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">Comment prononcer les Umlauts ?</h3>
          <p className="text-slate-700 mb-4">
            L'Umlaut (les deux points sur la voyelle) change complètement sa prononciation. C'est un son plus "fermé" ou "avancé" dans la bouche.
          </p>
          <ul className="space-y-3 text-slate-700">
              <li className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                <strong className="font-semibold text-blue-800">Ä / ä</strong> &rarr; Se prononce comme le <strong className="font-mono">"è"</strong> français dans "p<strong className="font-semibold">è</strong>re" ou "m<strong className="font-semibold">è</strong>re". C'est un son ouvert.
              </li>
               <li className="p-3 bg-green-50 border-l-4 border-green-400 rounded">
                <strong className="font-semibold text-green-800">Ö / ö</strong> &rarr; Se prononce comme le <strong className="font-mono">"eu"</strong> français dans "f<strong className="font-semibold">eu</strong>" ou "p<strong className="font-semibold">eu</strong>". Les lèvres sont arrondies et projetées vers l'avant.
              </li>
              <li className="p-3 bg-yellow-100 border-l-4 border-yellow-400 rounded">
                <strong className="font-semibold text-yellow-800">Ü / ü</strong> &rarr; <strong className="text-red-700">Le plus difficile !</strong> Pour le faire : dites un <strong className="font-mono">"i"</strong> français (comme dans "v<strong className="font-semibold">i</strong>te"), mais <strong className="underline">sans bouger la langue</strong>, arrondissez vos lèvres comme pour faire un "ou". Le son qui sort est le "ü" allemand.
              </li>
          </ul>
        </div>
        
        <div className="space-y-6">
            {umlautPairs.map((pair, index) => (
                <UmlautPairCard key={index} pair={pair} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default UmlautGuide;
