import React from 'react';
import { ContentType, StepContentSection } from '../types';
import { ExternalLink, Clock, AlertTriangle, Info, CheckSquare, Bot, User, Search, Download, Menu, User as UserIcon, Grid3X3 } from 'lucide-react';
import PromptGenerator from './PromptGenerator';
import ProposalFormTemplate from './ProposalFormTemplate';

interface StepViewProps {
  content: StepContentSection[];
}

const StepView: React.FC<StepViewProps> = ({ content }) => {
  return (
    <div className="max-w-3xl mx-auto pb-24">
      {content.map((section, index) => (
        <div key={index} className="mb-8 animate-fadeIn">
          {/* Text Section */}
          {section.type === 'text' && (
            <div>
              {section.title && <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">{section.title}</h2>}
              <p className="text-lg text-gray-700 leading-relaxed">{section.text}</p>
            </div>
          )}

          {/* List Section */}
          {section.type === 'list' && (
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              {section.title && <h3 className="text-xl font-heading font-bold mb-4">{section.title}</h3>}
              <ul className="space-y-3">
                {(section.items as string[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Info Box */}
          {section.type === 'info-box' && (
            <div className="bg-blue-50 border-r-4 border-blue-500 p-5 rounded-lg flex gap-4">
              <Info className="flex-shrink-0 text-blue-500" size={24} />
              <div>
                <h4 className="font-bold text-blue-900 mb-1">{section.title}</h4>
                <p className="text-blue-800">{section.text}</p>
              </div>
            </div>
          )}

          {/* Warning Box */}
          {section.type === 'warning-box' && (
            <div className="bg-amber-50 border-r-4 border-amber-500 p-5 rounded-lg flex gap-4">
              <AlertTriangle className="flex-shrink-0 text-amber-500" size={24} />
              <div>
                <h4 className="font-bold text-amber-900 mb-1">{section.title}</h4>
                <p className="text-amber-800">{section.text}</p>
              </div>
            </div>
          )}

          {/* Time Estimate */}
          {section.type === 'time-estimate' && (
            <div className="bg-indigo-900 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4 border-b border-indigo-700 pb-4">
                <Clock className="text-secondary" />
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {(section.items as string[]).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-indigo-100">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Image */}
          {section.type === 'image' && (
            <figure className="my-6">
              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-md border border-gray-300">
                <img src={section.imageSrc} alt={section.imageCaption} className="w-full h-auto object-cover max-h-[400px]" />
              </div>
              <figcaption className="text-center text-sm text-gray-500 mt-2 italic flex items-center justify-center gap-2">
                <span className="w-4 h-px bg-gray-400"></span>
                {section.imageCaption}
                <span className="w-4 h-px bg-gray-400"></span>
              </figcaption>
            </figure>
          )}

          {/* Chat Simulation */}
          {section.type === 'chat-simulation' && (
            <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 my-6 font-sans">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <div className="bg-gray-800 text-white p-3 text-sm flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  <span className="ml-2 opacity-75 font-medium">ChatGPT</span>
                </div>
                <div className="p-4 space-y-4">
                  {section.chatMessages?.map((msg, i) => (
                    <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border ${msg.role === 'ai' ? 'bg-green-50 border-green-200 text-green-600' : 'bg-indigo-50 border-indigo-200 text-indigo-600'}`}>
                        {msg.role === 'ai' ? <Bot size={16} /> : <User size={16} />}
                      </div>
                      <div className={`p-3 rounded-2xl max-w-[85%] text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'ai' ? 'bg-gray-50 text-gray-800 rounded-tl-none border border-gray-100' : 'bg-indigo-600 text-white rounded-tr-none'}`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {section.imageCaption && (
                <div className="text-center text-xs text-gray-500 mt-2 italic">
                  {section.imageCaption}
                </div>
              )}
            </div>
          )}

          {/* Kaggle Simulation */}
          {section.type === 'kaggle-simulation' && (
            <div className="my-8">
              <div className="bg-white border border-gray-300 rounded-lg shadow-sm font-sans text-left overflow-hidden">
                {/* Navbar */}
                <div className="flex items-center gap-4 p-3 border-b border-gray-200">
                  <Menu size={20} className="text-gray-500" />
                  <span className="text-2xl font-bold text-[#20BEFF] tracking-tight">kaggle</span>
                  <div className="flex-1 max-w-lg relative mx-4 hidden sm:block">
                    <div className="absolute top-2.5 left-3 text-gray-400">
                      <Search size={16} />
                    </div>
                    <div className="w-full bg-gray-100 text-gray-500 py-2 pl-10 pr-4 rounded-full text-sm border border-transparent">
                      Search
                    </div>
                  </div>
                  <div className="ml-auto">
                    <UserIcon size={24} className="text-gray-600 bg-gray-200 rounded-full p-1" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Datasets</h3>
                  
                  <div className="space-y-4">
                    {[
                      { title: 'heart.csv', meta: '234 KB · 10 years ago' },
                      { title: 'Pokemon.csv', meta: '332 KB · 8 years ago' },
                      { title: 'car data.csv', meta: '12 KB · 2 years ago' },
                      { title: 'Hotel Reservations.csv', meta: '115 KB · 3 years ago' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition -mx-2 px-2 rounded-lg group cursor-pointer">
                        <div className="flex gap-4">
                          <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-400">
                             <div className="w-4 h-5 border-2 border-current rounded-sm border-t-4"></div>
                          </div>
                          <div>
                            <div className="font-bold text-gray-800 group-hover:text-[#20BEFF] transition">{item.title}</div>
                            <div className="text-xs text-gray-500 mt-1">{item.meta}</div>
                          </div>
                        </div>
                        <button className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-gray-800 transition">
                          <Download size={14} />
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-center text-xs text-gray-500 mt-2 italic flex items-center justify-center gap-2">
                <span className="w-4 h-px bg-gray-400"></span>
                {section.imageCaption}
                <span className="w-4 h-px bg-gray-400"></span>
              </div>
            </div>
          )}

          {/* Excel Simulation */}
          {section.type === 'excel-simulation' && (
            <div className="my-8">
              <div className="font-sans text-sm border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white select-none text-left" dir="ltr">
                {/* Excel Toolbar/Header Mockup */}
                <div className="bg-[#107C41] text-white px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Grid3X3 size={20} />
                    <div className="font-bold text-lg tracking-tight">Excel</div>
                    <div className="text-xs opacity-80 bg-white/20 px-2 py-0.5 rounded">football_data.xlsx</div>
                  </div>
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                {/* Formula Bar Mockup */}
                <div className="bg-gray-100 border-b border-gray-300 p-1 flex items-center gap-2 text-xs text-gray-600 px-2">
                    <div className="bg-white border border-gray-300 px-2 py-0.5 w-10 text-center rounded-sm text-gray-400 font-mono">fx</div>
                    <div className="flex-1 bg-white border border-gray-300 px-2 py-1 rounded-sm truncate h-6"></div>
                </div>
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left">
                    <thead>
                      <tr>
                        <th className="w-8 bg-gray-100 border-r border-b border-gray-300"></th>
                        {['A', 'B', 'C', 'D', 'E'].map(col => (
                           <th key={col} className="bg-gray-100 border-r border-b border-gray-300 px-2 py-1 font-normal text-gray-600 text-center w-32">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                       {/* Data Rows */}
                       {[
                         ['Player_Name', 'Team', 'Height_cm', 'Goals', 'Assists'],
                         ['Lionel Messi', 'Inter Miami', '170', '25', '12'],
                         ['Erling Haaland', 'Man City', '195', '36', '8'],
                         ['Jude Bellingham', 'Real Madrid', '186', '20', '10'],
                         ['Kylian Mbappé', 'PSG', '178', '44', '7'],
                         ['Mohamed Salah', 'Liverpool', '175', '18', '10'],
                       ].map((row, rowIndex) => (
                         <tr key={rowIndex}>
                           <td className="bg-gray-100 border-r border-b border-gray-300 text-center text-gray-500 text-xs font-semibold">{rowIndex + 1}</td>
                           {row.map((cell, cellIndex) => (
                             <td key={cellIndex} className={`border-r border-b border-gray-200 px-2 py-1 text-sm ${rowIndex === 0 ? 'font-bold bg-gray-50' : 'text-gray-800'}`}>
                               {cell}
                             </td>
                           ))}
                         </tr>
                       ))}
                       {/* Empty rows to look like real excel */}
                       {[7, 8].map((idx) => (
                         <tr key={idx}>
                             <td className="bg-gray-100 border-r border-b border-gray-300 text-center text-gray-500 text-xs font-semibold">{idx}</td>
                             {[1,2,3,4,5].map(c => <td key={c} className="border-r border-b border-gray-200 px-2 py-1"></td>)}
                         </tr>
                       ))}
                    </tbody>
                  </table>
                </div>
                {/* Footer Sheets */}
                <div className="bg-gray-100 border-t border-gray-300 px-2 py-1 flex items-center gap-1">
                    <div className="bg-white px-3 py-0.5 text-xs text-[#107C41] font-bold border-b-2 border-[#107C41] shadow-sm">Sheet1</div>
                    <div className="px-3 py-0.5 text-xs text-gray-500 font-bold hover:bg-gray-200 rounded-full cursor-pointer">+</div>
                </div>
              </div>
              <div className="text-center text-xs text-gray-500 mt-2 italic flex items-center justify-center gap-2">
                <span className="w-4 h-px bg-gray-400"></span>
                {section.imageCaption}
                <span className="w-4 h-px bg-gray-400"></span>
              </div>
            </div>
          )}

          {/* AI Prompt Widget */}
          {section.type === 'ai-prompt' && (
            <div>
               {section.title && <h3 className="text-xl font-heading font-bold mb-2">{section.title}</h3>}
               {section.text && <p className="text-gray-600 mb-4">{section.text}</p>}
               <PromptGenerator />
            </div>
          )}

          {/* Checklist */}
          {section.type === 'checklist' && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <CheckSquare />
                {section.title}
              </h3>
              <div className="space-y-3">
                {(section.items as string[]).map((item, i) => (
                  <label key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-100 cursor-pointer hover:shadow-sm transition">
                    <input type="checkbox" className="w-5 h-5 mt-0.5 text-green-600 rounded focus:ring-green-500 border-gray-300" />
                    <span className="text-gray-700 select-none">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Link Cards */}
          {section.type === 'link-card' && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.links?.map((link, i) => (
                <a 
                  key={i} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-indigo-300 transition group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900 group-hover:text-indigo-600 transition">{link.title}</h4>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-indigo-500" />
                  </div>
                  <p className="text-sm text-gray-500">{link.description}</p>
                </a>
              ))}
            </div>
          )}

          {/* Proposal Form Template */}
          {section.type === 'proposal-template' && (
             <ProposalFormTemplate />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepView;