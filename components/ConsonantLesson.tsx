import React from 'react';
import { ConsonantRule } from '../types';
import ConsonantWordCard from './ConsonantWordCard';

interface ConsonantLessonProps {
  rules: ConsonantRule[];
}

const ConsonantLesson: React.FC<ConsonantLessonProps> = ({ rules }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 space-y-8">
      {rules.map((rule) => (
        <div key={rule.letter} className="p-4 border-b border-slate-200 last:border-b-0">
          <div className="flex items-start md:items-baseline gap-4 mb-3">
              <span className="text-4xl font-bold text-[var(--theme-color-dark)] mt-1">{rule.letter}</span>
              <p className="text-slate-700 italic" dangerouslySetInnerHTML={{ __html: rule.rule }}></p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
              {rule.words.map((wordData, index) => (
                  <ConsonantWordCard key={`${wordData.word}-${index}`} data={wordData} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConsonantLesson;