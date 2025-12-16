import React, { useState } from 'react';
import { FileText, Copy, Check } from 'lucide-react';

const ProposalFormTemplate: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const plainTextForm = `טופס הצעת מחקר - מדעי הנתונים
מדעי טכנולוגי אמית כפר בתיה ע”ש גוון שטראוס, רעננה

1. פרטים אישיים
שם התלמיד: _________________
תאריך: _________________

2. נושא הפרויקט
[למשל: כדורגל, מחירי דירות, מוזיקה...]

3. שאלת החקר
[השאלה שבחרתם בעזרת ה-AI]

4. מקור הנתונים
שם המאגר/אתר: _________________
קישור (URL): _________________

5. משתנים מרכזיים (3 עמודות עיקריות)
א. שם המשתנה: _________ | סוג (כמותי/קטגורי): _________
ב. שם המשתנה: _________ | סוג (כמותי/קטגורי): _________
ג. שם המשתנה: _________ | סוג (כמותי/קטגורי): _________

6. נפח הנתונים
מספר שורות: _______
מספר עמודות: _______

7. הצהרת תקינות
[ ] הקובץ נפתח ותקין באקסל
[ ] יש לפחות 300 שורות
[ ] יש משתנים מסוגים שונים (כמותי וקטגורי)
[ ] הנתונים ברורים וקריאים
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(plainTextForm);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8">
      <div className="flex justify-between items-end mb-2">
         <h3 className="font-heading font-bold text-xl text-gray-800 flex items-center gap-2">
            <FileText className="text-indigo-600"/>
            תבנית להגשה
         </h3>
         <button 
           onClick={handleCopy}
           className="text-sm bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-2"
         >
           {copied ? <Check size={16}/> : <Copy size={16}/>}
           {copied ? 'הועתק!' : 'העתק טקסט'}
         </button>
      </div>
      
      <div className="bg-white border border-gray-200 shadow-md p-8 rounded-xl relative overflow-hidden">
        {/* Visual paper styling */}
        <div className="absolute top-0 left-0 w-full h-2 bg-indigo-500"></div>
        
        <div className="font-serif text-gray-800 space-y-6">
            <div className="text-center border-b border-gray-100 pb-4 mb-6">
                <p className="text-gray-600 text-xs font-bold mb-1">מדעי טכנולוגי אמית כפר בתיה ע”ש גוון שטראוס, רעננה</p>
                <h2 className="text-2xl font-bold text-indigo-900">טופס הצעת מחקר</h2>
                <p className="text-gray-500 text-sm">מגמת מידע ונתונים</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <span className="font-bold text-sm text-gray-500 block">שם התלמיד</span>
                    <div className="border-b border-gray-300 h-8"></div>
                </div>
                 <div>
                    <span className="font-bold text-sm text-gray-500 block">תאריך</span>
                    <div className="border-b border-gray-300 h-8"></div>
                </div>
            </div>

            <div>
                 <span className="font-bold text-indigo-900 block mb-1">נושא הפרויקט</span>
                 <div className="bg-gray-50 p-3 rounded border border-gray-200 text-gray-400 text-sm italic">
                    למשל: השפעת מזג האוויר על מחירי טיסות
                 </div>
            </div>

             <div>
                 <span className="font-bold text-indigo-900 block mb-1">שאלת החקר</span>
                 <div className="bg-gray-50 p-3 rounded border border-gray-200 text-gray-400 text-sm italic">
                    העתק כאן את השאלה שה-AI ניסח עבורך
                 </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <span className="font-bold text-indigo-900 block mb-1">מקור הנתונים (שם)</span>
                    <div className="border-b border-gray-300 h-8 bg-gray-50/50"></div>
                </div>
                <div>
                    <span className="font-bold text-indigo-900 block mb-1">קישור (URL)</span>
                    <div className="border-b border-gray-300 h-8 bg-gray-50/50"></div>
                </div>
            </div>

            <div>
                <span className="font-bold text-indigo-900 block mb-2">משתנים מרכזיים</span>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-gray-700">
                            <tr>
                                <th className="p-2 text-right border-l font-semibold">שם המשתנה</th>
                                <th className="p-2 text-right font-semibold">סוג (כמותי/קטגורי)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[1,2,3].map(i => (
                                <tr key={i}>
                                    <td className="p-3 border-l bg-white h-10"></td>
                                    <td className="p-3 bg-white h-10"></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="flex gap-8">
                 <div className="flex-1">
                    <span className="font-bold text-indigo-900 block mb-1">מספר שורות</span>
                    <div className="border-b border-gray-300 h-8 bg-gray-50/50"></div>
                </div>
                <div className="flex-1">
                    <span className="font-bold text-indigo-900 block mb-1">מספר עמודות</span>
                    <div className="border-b border-gray-300 h-8 bg-gray-50/50"></div>
                </div>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
                 <span className="font-bold text-indigo-900 block mb-2">הצהרת תקינות</span>
                 <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border border-gray-300 rounded"></div>
                        <span>הקובץ נפתח ותקין באקסל</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border border-gray-300 rounded"></div>
                        <span>יש לפחות 300 שורות</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border border-gray-300 rounded"></div>
                        <span>יש משתנים מסוגים שונים (כמותי וקטגורי)</span>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalFormTemplate;