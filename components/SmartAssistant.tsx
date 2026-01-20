
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
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 w-80 md:w-96 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-green-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl relative">
                <Bot size={24} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border-2 border-green-600 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-bold text-sm">Instant AI Helper</h3>
                <p className="text-[10px] text-green-100">Finding the freshest picks</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="h-96 overflow-y-auto p-4 flex flex-col gap-4 scroll-smooth bg-gray-50/30">
            {chatHistory.length === 0 && (
              <div className="text-center py-12">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-green-100 rounded-full blur-xl scale-150"></div>
                  <Sparkles className="relative text-green-600 animate-bounce" size={40} />
                </div>
                <h4 className="text-sm font-bold text-gray-700 mb-2">How can I help you today?</h4>
                <div className="space-y-2 px-6">
                  <button onClick={() => setQuery("Recommend some fresh fruits")} className="w-full p-2 bg-white border border-gray-200 rounded-lg text-[10px] text-gray-500 hover:border-green-300 hover:text-green-600 transition-all">
                    "Recommend some fresh fruits"
                  </button>
                  <button onClick={() => setQuery("What sweets are available for Pongal?")} className="w-full p-2 bg-white border border-gray-200 rounded-lg text-[10px] text-gray-500 hover:border-green-300 hover:text-green-600 transition-all">
                    "What sweets are available for Pongal?"
                  </button>
                  <button onClick={() => setQuery("Suggest items for a healthy breakfast")} className="w-full p-2 bg-white border border-gray-200 rounded-lg text-[10px] text-gray-500 hover:border-green-300 hover:text-green-600 transition-all">
                    "Suggest items for a healthy breakfast"
                  </button>
                </div>
              </div>
            )}
            {chatHistory.map((msg, idx) => (
              <div key={idx} className={`max-w-[85%] ${msg.role === 'user' ? 'self-end bg-green-600 text-white' : 'self-start bg-white border border-gray-100 text-gray-800 shadow-sm'} p-3 rounded-2xl text-[12px] font-medium leading-relaxed`}>
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="self-start bg-white border border-gray-100 p-3 rounded-2xl shadow-sm">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleAsk} className="p-4 bg-white border-t flex gap-2 items-center">
            <input 
              type="text" 
              placeholder="Ask for suggestions..." 
              className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" disabled={loading} className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-100">
              <Send size={18} />
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-white p-4 rounded-2xl shadow-xl shadow-green-200 hover:scale-105 hover:-translate-y-1 transition-all flex items-center gap-3 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="relative flex items-center gap-2">
            <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-sm tracking-wide">Instant AI Help</span>
          </div>
        </button>
      )}
    </div>
  );
};

export default SmartAssistant;
