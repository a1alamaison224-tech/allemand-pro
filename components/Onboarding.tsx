import React, { useState } from 'react';

interface OnboardingProps {
  onComplete: () => void;
}

const onboardingSteps = [
  {
    icon: 'fa-solid fa-book-open-reader',
    title: 'Découvre l’allemand facilement',
    text: 'Pas besoin de manuel compliqué – apprends pas à pas.',
    color: 'bg-sky-100',
    iconColor: 'text-sky-500',
  },
  {
    icon: 'fa-solid fa-clone',
    title: '14 leçons interactives',
    text: 'Chaque leçon t’aide à prononcer, comprendre et retenir.',
    color: 'bg-teal-100',
    iconColor: 'text-teal-500',
  },
  {
    icon: 'fa-solid fa-mug-hot',
    title: 'Apprends à ton rythme',
    text: 'Crée ton PDF de mots et révise quand tu veux.',
    color: 'bg-amber-100',
    iconColor: 'text-amber-500',
  },
];

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleDotClick = (index: number) => {
    setCurrentStep(index);
  }

  const step = onboardingSteps[currentStep];
  const isLastStep = currentStep === onboardingSteps.length - 1;

  return (
    <div className="fixed inset-0 bg-slate-50 flex flex-col justify-between items-center p-8 font-sans animate-fade-in">
      <div className="w-full text-right">
        <button onClick={onComplete} className="text-slate-500 font-semibold text-sm hover:text-slate-800 transition-colors">
          Passer
        </button>
      </div>

      <div className="text-center flex-grow flex flex-col justify-center items-center">
        <div key={currentStep} className="animate-fade-in">
            <div className={`w-40 h-40 rounded-full flex items-center justify-center mx-auto mb-10 ${step.color}`}>
                <i className={`${step.icon} ${step.iconColor} text-6xl`}></i>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-800 mb-4">{step.title}</h2>
            <p className="text-lg text-slate-600 max-w-sm">{step.text}</p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-6">
        <div className="flex justify-center gap-3">
          {onboardingSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentStep === index ? 'bg-indigo-500 w-6' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Aller à l'étape ${index + 1}`}
            />
          ))}
        </div>
        
        {isLastStep ? (
          <button 
            onClick={onComplete}
            className="w-full max-w-sm bg-indigo-500 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl hover:bg-indigo-600 transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Commencer maintenant
          </button>
        ) : (
          <div className="w-full max-w-sm flex justify-between items-center">
             <button
              onClick={handleBack}
              className={`font-semibold text-slate-500 hover:text-slate-800 transition-colors py-4 px-6 rounded-full ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              Retour
            </button>
            <button
              onClick={handleNext}
              className="bg-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-indigo-600 transition-all duration-200"
            >
              Suivant
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
