import React from 'react';
import { Step } from '../types';
import { ChevronLeft } from 'lucide-react';

interface NavigationProps {
  steps: Step[];
  currentStepIndex: number;
  onStepClick: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ steps, currentStepIndex, onStepClick }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 h-screen fixed right-0 top-0 bg-white border-l border-gray-200 overflow-y-auto z-10">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-2xl font-black text-indigo-900 font-heading">
            המדריך לפרויקט
            <span className="block text-secondary text-lg font-medium mt-1">חנוכה תשפ״ו</span>
          </h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {steps.map((step, index) => {
            const isActive = index === currentStepIndex;
            const isCompleted = index < currentStepIndex;
            const Icon = step.icon;

            return (
              <button
                key={step.id}
                onClick={() => onStepClick(index)}
                className={`w-full text-right flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-200' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                  isActive ? 'bg-indigo-100' : isCompleted ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                }`}>
                  <Icon size={20} />
                </div>
                <div>
                  <div className={`text-sm font-bold ${isActive ? 'text-indigo-900' : 'text-gray-700'}`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-400 truncate max-w-[140px]">
                    {step.description}
                  </div>
                </div>
                {isActive && <ChevronLeft size={16} className="mr-auto text-indigo-400" />}
              </button>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-gray-100 text-center text-xs text-gray-400">
           מגמת מידע ונתונים | אמי"ת כפר בתיה
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-50">
        <div className="flex justify-around items-center p-2 overflow-x-auto no-scrollbar">
          {steps.map((step, index) => {
            const isActive = index === currentStepIndex;
            const Icon = step.icon;
            
            return (
              <button
                key={step.id}
                onClick={() => onStepClick(index)}
                className={`flex flex-col items-center justify-center min-w-[60px] p-2 rounded-lg transition ${
                  isActive ? 'text-indigo-600' : 'text-gray-400'
                }`}
              >
                <div className={`mb-1 p-1.5 rounded-full ${isActive ? 'bg-indigo-100' : 'bg-transparent'}`}>
                   <Icon size={20} />
                </div>
                <span className="text-[10px] font-medium whitespace-nowrap">{step.title.split(':')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navigation;