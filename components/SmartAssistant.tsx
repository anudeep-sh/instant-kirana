
import React, { useState, useRef, useEffect } from 'react';
// Added ChevronRight to imports
import { Bot, Send, X, Sparkles, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { getSmartRecommendations } from '../services/geminiService';

interface SmartAssistantProps {
  products: Product[];
}

const SmartAssistant: React.FC<SmartAssistantProps> = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'assistant', content: string}[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory, loading]);

  const handleAsk = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim() || loading) return;

    const userMsg = query;
    setQuery('');
    setChatHistory(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    const response = await getSmartRecommendations(userMsg, products);
    
    setChatHistory(prev => [...prev, { role: 'assistant', content: response }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 w-80 md:w-[400px] flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
          <div className="bg-blue-600 p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-2xl relative">
                <Bot size={28} />
                <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-blue-400 border-2 border-blue-600 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-black text-base tracking-tight">Maruti AI Concierge</h3>
                <p className="text-[10px] text-blue-100 font-bold uppercase tracking-widest opacity-80">Online & Ready</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-2 transition-colors">
              <X size={24} />
            </button>
          </div>

          <div ref={scrollRef} className="h-[450px] overflow-y-auto p-6 flex flex-col gap-6 bg-slate-50/30 scroll-smooth">
            {chatHistory.length === 0 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-blue-100 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="text-blue-600 animate-pulse" size={32} />
                </div>
                <h4 className="text-lg font-black text-slate-800 mb-2">How may I assist you?</h4>
                <p className="text-xs text-slate-400 font-medium mb-8 px-10">I can help you find products, suggest recipes, or explain our artisan origins.</p>
                <div className="space-y-3 px-6">
                  {["Show me premium fruits", "Suggest artisan cheeses", "Gift ideas for a foodie"].map(q => (
                    <button key={q} onClick={() => setQuery(q)} className="w-full p-4 bg-white border border-slate-100 rounded-2xl text-[11px] font-bold text-slate-500 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm transition-all text-left flex items-center justify-between">
                      {q} <ChevronRight size={14} />
                    </button>
                  ))}
                </div>
              </div>
            )}
            {chatHistory.map((msg, idx) => (
              <div key={idx} className={`max-w-[90%] p-4 rounded-2xl text-[13px] font-medium leading-relaxed ${msg.role === 'user' ? 'self-end bg-blue-600 text-white shadow-lg shadow-blue-100' : 'self-start bg-white border border-slate-100 text-slate-800 shadow-sm'}`}>
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="self-start bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleAsk} className="p-6 bg-white border-t flex gap-3 items-center">
            <input 
              type="text" 
              placeholder="Inquire about our selection..." 
              className="flex-1 bg-slate-50 border-transparent rounded-2xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" disabled={loading} className="bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-700 transition-all disabled:opacity-50 shadow-xl shadow-blue-100">
              <Send size={20} />
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-5 rounded-[2rem] shadow-2xl shadow-blue-200 hover:scale-110 hover:-translate-y-2 transition-all flex items-center gap-4 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <Sparkles size={24} className="group-hover:rotate-45 transition-transform" />
          <span className="font-black text-sm tracking-wider uppercase">Maruti AI</span>
        </button>
      )}
    </div>
  );
};

export default SmartAssistant;
