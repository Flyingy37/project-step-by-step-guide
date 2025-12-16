import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import StepView from './components/StepView';
import CompletionView from './components/CompletionView';
import { STEPS } from './data/content';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

const App: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  
  // Logic: completion is when index equals length (one past the last element)
  const isCompleted = currentStepIndex === STEPS.length;
  
  // Safe access to current step only if not completed
  const currentStep = !isCompleted ? STEPS[currentStepIndex] : null;

  // Scroll to top when changing steps
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStepIndex]);

  const nextStep = () => {
    // Allow going one step past the last index to show completion screen
    if (currentStepIndex < STEPS.length) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };
  
  const handleRestart = () => {
    setCurrentStepIndex(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex" dir="rtl">
      
      {/* Navigation (Sidebar/Bottom) */}
      <Navigation 
        steps={STEPS} 
        currentStepIndex={currentStepIndex} 
        onStepClick={(idx) => {
          setCurrentStepIndex(idx);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 lg:mr-72 min-h-screen transition-all duration-300 flex flex-col">
        
        {/* Mobile Header */}
        <header className="lg:hidden sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 p-4 z-40 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-black text-indigo-900 font-heading leading-tight">המדריך לפרויקט</h1>
            <p className="text-xs text-gray-500">
              {isCompleted ? 'סיום!' : currentStep?.title}
            </p>
          </div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${isCompleted ? 'bg-green-100 text-green-600' : 'bg-indigo-100 text-indigo-600'}`}>
             {isCompleted ? <Check size={16} /> : `${currentStepIndex + 1}/${STEPS.length}`}
          </div>
        </header>

        {/* Content Container */}
        <div className="p-4 md:p-8 lg:p-12 max-w-5xl mx-auto w-full flex-1">
          
          {isCompleted ? (
            <CompletionView onRestart={handleRestart} />
          ) : (
            <>
              {/* Desktop Header */}
              <header className="hidden lg:block mb-10">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold">
                    שלב {currentStepIndex + 1} מתוך {STEPS.length}
                  </span>
                  <span>{currentStep?.description}</span>
                </div>
                <h2 className="text-4xl font-black text-gray-900 font-heading">{currentStep?.title}</h2>
              </header>

              {currentStep && <StepView content={currentStep.content} />}
            </>
          )}

          {/* Navigation Buttons - Only show if not completed */}
          {!isCompleted && (
            <div className="fixed bottom-20 lg:bottom-10 left-0 right-0 lg:right-auto lg:left-12 lg:w-[calc(100%-24rem)] px-4 pointer-events-none flex justify-between items-end max-w-5xl mx-auto z-30">
               <button
                  onClick={prevStep}
                  disabled={currentStepIndex === 0}
                  className={`pointer-events-auto flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95 ${
                    currentStepIndex === 0 
                      ? 'opacity-0 cursor-default' 
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <ArrowRight size={20} />
                  הקודם
                </button>

                <button
                  onClick={nextStep}
                  className={`pointer-events-auto flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-lg shadow-indigo-200 transition-all transform hover:scale-105 active:scale-95 ${
                     // If we are on the last step, change style to indicate finish
                     currentStepIndex === STEPS.length - 1
                     ? 'bg-green-600 text-white hover:bg-green-700'
                     : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {currentStepIndex === STEPS.length - 1 ? 'סיימתי!' : 'הבא'}
                  {currentStepIndex === STEPS.length - 1 ? <Check size={20} /> : <ArrowLeft size={20} />}
                </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;