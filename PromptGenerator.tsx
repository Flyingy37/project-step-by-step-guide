import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const PromptGenerator = () => {
  const [topic, setTopic] = useState('');
  const [copied, setCopied] = useState(false);

  const promptText = `אני תלמיד כיתה י' במגמת מידע ונתונים.
אני צריך לבחור נושא לפרויקט בגרות.
התחום שמעניין אותי הוא: ${topic || '[כתבו כאן את הנושא]'}
תציע לי 5 שאלות חקר שאפשר לענות עליהן עם נתונים.
לכל שאלה, ציין:
1. מה השאלה
2. אילו נתונים אצטרך
3. איפה אוכל למצוא את הנתונים
4. האם קל או קשה למצוא את הנתונים`;

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border-2 border-indigo-100 rounded-xl p-6 shadow-sm my-6">
      <h3 className="font-heading font-bold text-lg mb-4 text-indigo-900">מחולל פרומפטים ל-AI ✨</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">1. כתבו את הנושא שמעניין אתכם:</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="למשל: כדורגל, אופנה, מוזיקה..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
        />
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">2. העתיקו את הפרומפט והדביקו ב-ChatGPT/Gemini:</label>
        <div className="relative">
          <textarea
            readOnly
            value={promptText}
            className="w-full h-48 p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono text-gray-800 resize-none focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="absolute top-2 left-2 bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-200 px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition shadow-sm"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'הועתק!' : 'העתק'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptGenerator;
