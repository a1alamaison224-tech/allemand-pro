import React from 'react';
import type { UmlautPair } from '../types';
import UmlautWordDisplay from './UmlautWordDisplay';

interface UmlautPairCardProps {
  pair: UmlautPair;
}

const UmlautPairCard: React.FC<UmlautPairCardProps> = ({ pair }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 p-2 rounded-lg">
      <UmlautWordDisplay data={pair.without} />
      <div className="text-3xl font-bold text-slate-400 mx-4 transform md:rotate-0 rotate-90 my-2 md:my-0">→</div>
      <UmlautWordDisplay data={pair.with} />
    </div>
  );
};

export default UmlautPairCard;
