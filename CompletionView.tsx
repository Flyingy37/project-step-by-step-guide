import React from 'react';
import { Trophy, RotateCcw, CheckCircle, PartyPopper } from 'lucide-react';

interface CompletionViewProps {
  onRestart: () => void;
}

const CompletionView: React.FC<CompletionViewProps> = ({ onRestart }) => {
  return (
    <div className="max-w-2xl mx-auto text-center py-12 animate-fadeIn">
      <div className="mb-8 flex justify-center">
        <div className="bg-yellow-50 p-8 rounded-full shadow-inner relative">
          <Trophy className="text-yellow-500" size={80} strokeWidth={1.5} />
          <div className="absolute top-0 right-0 bg-indigo-500 text-white p-2.5 rounded-full shadow-lg animate-bounce">
            <CheckCircle size={24} />
          </div>
          <div className="absolute bottom-0 left-0 text-yellow-600 animate-pulse">
            <PartyPopper size={32} />
          </div>
        </div>
      </div>
      
      <h2 className="text-4xl font-black text-indigo-900 font-heading mb-6">
        כל הכבוד! סיימתם! 🎉
      </h2>
      
      <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg mx-auto">
        עברתם את כל השלבים בהצלחה. יש לכם נושא מצוין, נתונים בדוקים והצעה מוכנה להגשה.
        <br />
        <strong>אתם מוכנים להתחיל את הפרויקט!</strong>
      </p>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12 text-right transform transition hover:shadow-md">
        <h3 className="font-bold text-lg text-gray-800 mb-6 border-b border-gray-100 pb-4">
          סיכום ההישגים שלכם:
        </h3>
        <ul className="space-y-4">
          {[
            'בחרתם נושא אישי ושאלת חקר מעניינת',
            'מצאתם והורדתם קובץ נתונים (Dataset)',
            'ביצעתם בדיקות תקינות לנתונים',
            'הכנתם והגשתם את טופס ההצעה'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <div className="mt-0.5 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                ✓
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onRestart}
        className="group inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 hover:scale-105 transition-all shadow-lg shadow-indigo-200"
      >
        <RotateCcw size={20} className="group-hover:-rotate-180 transition-transform duration-500" />
        התחל את המדריך מחדש
      </button>
    </div>
  );
};

export default CompletionView;