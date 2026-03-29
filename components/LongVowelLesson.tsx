import React from 'react';
import { longVowelData } from '../constants/longVowelData';
import LongVowelWordCard from './LongVowelWordCard';

const LongVowelLesson: React.FC = () => {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
        Leçon 1 : Pratique des Voyelles Longues
      </h2>
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 space-y-10">
        <div className="bg-slate-50 p-4 rounded-lg border">
          <p className="text-slate-700">
            En allemand, une voyelle peut être <strong>longue</strong> ou <strong>courte</strong>. Une voyelle longue est maintenue plus longtemps, comme si vous preniez votre temps pour la dire. Une voyelle courte est rapide et brève. Cette distinction est cruciale car elle peut changer le sens d'un mot ! Entraînons-nous à reconnaître les signes qui indiquent une voyelle longue.
          </p>
        </div>

        {longVowelData.map((category) => (
          <div key={category.title}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-indigo-700">{category.title}</h3>
              <p className="mt-2 text-slate-600 max-w-2xl mx-auto">{category.rule}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {category.words.map((wordData) => (
                <LongVowelWordCard key={wordData.word} data={wordData} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LongVowelLesson;
