import React from 'react';
import type { VowelLengthPair } from '../types';
import VowelLengthWordDisplay from './VowelLengthWordDisplay';

interface VowelLengthPairCardProps {
  pair: VowelLengthPair;
}

const VowelLengthPairCard: React.FC<VowelLengthPairCardProps> = ({ pair }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 p-2 rounded-lg bg-slate-50 border">
      <VowelLengthWordDisplay data={pair.long} />
      <div className="text-3xl font-bold text-slate-400 mx-4 transform md:rotate-0 rotate-90 my-2 md:my-0">vs.</div>
      <VowelLengthWordDisplay data={pair.short} />
    </div>
  );
};

export default VowelLengthPairCard;
