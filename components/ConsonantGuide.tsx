import React from 'react';
import { consonantRules } from '../constants/consonantData';
import ConsonantWordCard from './ConsonantWordCard';

const ConsonantGuide: React.FC = () => {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
        Leçon 2 : Les Consonnes Pièges
      </h2>
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 space-y-8">
        {consonantRules.map((rule) => (
          <div key={rule.letter} className="p-4 border-b border-slate-200 last:border-b-0">
            <div className="flex items-baseline gap-4 mb-3">
                <span className="text-4xl font-bold text-indigo-600">{rule.letter}</span>
                <p className="text-slate-700 italic" dangerouslySetInnerHTML={{ __html: rule.rule }}></p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                {rule.words.map((wordData) => (
                    <ConsonantWordCard key={wordData.word} data={wordData} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsonantGuide;