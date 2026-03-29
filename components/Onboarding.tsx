import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Layers, Coffee, ChevronRight, ChevronLeft, Play } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

const onboardingSteps = [
  {
    icon: <BookOpen className="w-12 h-12" />,
    title: 'Découvre l’allemand facilement',
    text: 'Pas besoin de manuel compliqué – apprends pas à pas.',
    imageLabel: 'DÉCOUVERTE',
  },
  {
    icon: <Layers className="w-12 h-12" />,
    title: '14 leçons interactives',
    text: 'Chaque leçon t’aide à prononcer, comprendre et retenir.',
    imageLabel: 'LEÇONS',
  },
  {
    icon: <Coffee className="w-12 h-12" />,
    title: 'Apprends à ton rythme',
    text: 'Crée ton PDF de mots et révise quand tu veux.',
    imageLabel: 'RYTHME',
  },
];

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };
  
  const step = onboardingSteps[currentStep];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col font-sans overflow-hidden">
      {/* Header - Yellow Bar */}
      <div className="bg-[#FFD700] h-20 flex items-center justify-between px-6 shadow-md z-20">
        <div className="flex items-center gap-2">
            <div className="bg-[#1A1A1A] text-[#FFD700] p-1.5 rounded-lg font-black italic text-xl">DE</div>
            <h1 className="font-black text-[#1A1A1A] text-xl tracking-tighter italic">PRONONCIATION</h1>
        </div>
        <button 
          onClick={onComplete} 
          className="text-[#1A1A1A] font-bold text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          Passer
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow relative flex flex-col items-center justify-center p-6 pb-32">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full max-w-sm flex flex-col items-center"
          >
            {/* Card Visual */}
            <div className="w-full aspect-[4/5] bg-slate-50 rounded-3xl shadow-xl border border-slate-100 mb-10 overflow-hidden flex flex-col">
                <div className="h-12 bg-slate-100 flex items-center px-4 justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{step.imageLabel}</span>
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    </div>
                </div>
                <div className="flex-grow flex items-center justify-center p-12">
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#FFD700] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-slate-50 text-[#1A1A1A]">
                            {step.icon}
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-white">
                    <div className="h-2 w-1/3 bg-[#FFD700] rounded-full mb-2"></div>
                    <div className="h-2 w-full bg-slate-100 rounded-full mb-1"></div>
                    <div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
                </div>
            </div>
            
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4 text-center tracking-tight">
              {step.title}
            </h2>
            
            <p className="text-slate-500 text-center leading-relaxed font-medium">
              {step.text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer - Dark Bar with Play Button */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-[#1A1A1A] flex items-center justify-between px-10 z-30">
        <button
          onClick={handleBack}
          className={`text-white/50 hover:text-white transition-colors p-2 ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Central Play Button */}
        <div className="absolute left-1/2 -top-10 -translate-x-1/2">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="w-20 h-20 bg-[#FFD700] rounded-full shadow-2xl flex items-center justify-center border-8 border-[#1A1A1A] group"
            >
                {currentStep === onboardingSteps.length - 1 ? (
                    <Play className="w-8 h-8 text-[#1A1A1A] fill-[#1A1A1A]" />
                ) : (
                    <ChevronRight className="w-10 h-10 text-[#1A1A1A] stroke-[3]" />
                )}
            </motion.button>
        </div>

        <div className="flex gap-1.5">
            {onboardingSteps.map((_, index) => (
                <div 
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                        currentStep === index ? 'bg-[#FFD700] w-6' : 'bg-white/20 w-1.5'
                    }`}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
