
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, MessageSquare, Sparkles } from 'lucide-react';
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
        <div className="bg-white rounded-[2.5rem] shadow-2xl border-4 border-blue-50 w-80 md:w-[400px] flex flex-col overflow-hidden animate-in zoom-in slide-in-from-bottom-10 duration-500 ease-out">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-2xl relative shadow-inner">
                <Bot size={28} className="animate-pulse" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 border-4 border-blue-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-black text-lg italic tracking-tight">ecart Assistant</h3>
                <p className="text-[10px] text-blue-100 font-bold uppercase tracking-widest opacity-80">Funky AI Support</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-red-500 rounded-full p-2 transition-all">
              <X size={24} />
            </button>
          </div>

          <div ref={scrollRef} className="h-[400px] overflow-y-auto p-6 flex flex-col gap-6 scroll-smooth bg-gray-50/50">
            {chatHistory.length === 0 && (
              <div className="text-center py-10">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-red-500 rounded-full blur-[40px] opacity-20 scale-150 animate-pulse"></div>
                  <div className="p-6 bg-white rounded-full shadow-2xl relative">
                    <Sparkles className="text-red-500" size={48} />
                  </div>
                </div>
                <h4 className="text-base font-black text-gray-900 mb-2 italic tracking-tight">Need a suggestion?</h4>
                <p className="text-xs text-gray-400 mb-6 font-medium">I know all about our freshest picks!</p>
                <div className="space-y-3 px-4">
                  <button onClick={() => setQuery("Recommend some fresh fruits")} className="w-full p-3 bg-white border-2 border-gray-100 rounded-2xl text-[11px] font-black text-blue-600 hover:border-blue-400 hover:scale-105 transition-all uppercase tracking-widest shadow-sm">
                    🍎 Fresh Fruits
                  </button>
                  <button onClick={() => setQuery("Quick snack ideas")} className="w-full p-3 bg-white border-2 border-gray-100 rounded-2xl text-[11px] font-black text-red-500 hover:border-red-400 hover:scale-105 transition-all uppercase tracking-widest shadow-sm">
                    🍟 Snack Time
                  </button>
                </div>
              </div>
            )}
            {chatHistory.map((msg, idx) => (
              <div key={idx} className={`max-w-[85%] ${msg.role === 'user' ? 'self-end bg-red-500 text-white rounded-tr-none' : 'self-start bg-white border-2 border-blue-50 text-gray-800 shadow-xl shadow-blue-50 rounded-tl-none'} p-4 rounded-[1.5rem] text-[13px] font-bold leading-relaxed`}>
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="self-start bg-white border-2 border-blue-50 p-4 rounded-[1.5rem] rounded-tl-none shadow-xl shadow-blue-50">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleAsk} className="p-6 bg-white border-t border-gray-100 flex gap-3 items-center">
            <input 
              type="text" 
              placeholder="Ask ecart anything..." 
              className="flex-1 bg-gray-50 border-2 border-transparent focus:border-blue-600 rounded-2xl px-5 py-4 text-sm font-bold focus:outline-none transition-all shadow-inner"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" disabled={loading} className="bg-red-500 text-white p-4 rounded-2xl hover:bg-blue-600 hover:scale-110 transition-all disabled:opacity-50 shadow-xl shadow-red-100">
              <Send size={20} className="stroke-[3px]" />
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:scale-110 hover:-translate-y-2 transition-all flex items-center gap-4 group relative overflow-hidden active:scale-95 border-4 border-white/20"
        >
          <div className="absolute inset-0 bg-red-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 opacity-20"></div>
          <div className="relative flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-xl">
                <Sparkles size={24} className="group-hover:rotate-45 transition-transform" />
            </div>
            <span className="font-black text-sm tracking-[0.1em] uppercase italic">ecart AI</span>
          </div>
        </button>
      )}
    </div>
  );
};

export default SmartAssistant;
