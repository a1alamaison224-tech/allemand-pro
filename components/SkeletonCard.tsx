import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 flex flex-col animate-pulse">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <div className="h-4 bg-slate-200 rounded w-24"></div>
            <div className="h-8 bg-slate-300 rounded w-40 mt-2"></div>
          </div>
          <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
        </div>
        <div className="h-6 bg-slate-200 rounded w-32 mt-3"></div>
        <div className="h-5 bg-slate-200 rounded w-48 mt-2"></div>
      </div>
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
         <div className="flex items-center justify-between">
            <div className="h-5 bg-slate-200 rounded w-full mr-4"></div>
            <div className="w-9 h-9 bg-slate-200 rounded-full flex-shrink-0"></div>
         </div>
      </div>
       <div className="px-6 py-4 border-t border-slate-200">
        <div className="h-4 bg-slate-200 rounded w-32 mb-3"></div>
        <div className="h-4 bg-slate-200 rounded w-44 mb-4"></div>
        <div className="grid grid-cols-4 gap-2">
            <div className="h-10 bg-slate-200 rounded-md"></div>
            <div className="h-10 bg-slate-200 rounded-md"></div>
            <div className="h-10 bg-slate-200 rounded-md"></div>
            <div className="h-10 bg-slate-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;