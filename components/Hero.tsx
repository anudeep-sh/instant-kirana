
import React from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck } from 'lucide-react';
import { CATEGORIES } from '../constants';

interface HeroProps {
  onSelectCategory: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSelectCategory }) => {
  const scrollToGrid = () => {
    document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mb-12">
      <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 h-[500px] md:h-[650px] shadow-2xl shadow-blue-900/10">
        {/* Background Image with Enhanced Overlays */}
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=90" 
          alt="Artisan Pantry" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>

        <div className="relative h-full flex flex-col justify-center px-12 md:px-20 lg:px-24 max-w-4xl">
          {/* Collection Logo Seal */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30 transform -rotate-6 group-hover:rotate-0 transition-transform">
                <Sparkles className="text-white" size={24} />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <ShieldCheck size={12} className="text-blue-600" />
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-0.5">Established 2024</p>
              <h4 className="text-white font-black text-sm tracking-widest uppercase">The Artisan Collection</h4>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tight">
            The World's <br />
            <span className="text-blue-500">Finest Pantry</span> <br />
            Redefined.
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-medium">
            Sourced from elite estates. Delivered in 20 minutes. <br className="hidden md:block" />
            Experience the gold standard of gourmet logistics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center">
            <button 
              onClick={scrollToGrid}
              className="group bg-white text-slate-950 px-10 py-5 rounded-[2rem] font-black flex items-center gap-4 transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 active:translate-y-0"
            >
              Shop the Collection
              <div className="bg-slate-950 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} className="text-white" />
              </div>
            </button>

            {/* Shop the Collections - Logo Grid */}
            <div className="flex flex-col gap-3">
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">
                Shop the Collections
              </p>
              <div className="flex gap-3">
                {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectCategory(cat.id);
                      scrollToGrid();
                    }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all hover:scale-110 hover:-translate-y-1 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 group overflow-hidden relative`}
                    title={cat.name}
                  >
                    {/* Hover Glow effect based on category color */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity ${cat.color.split(' ')[0]}`}></div>
                    <span className="group-hover:scale-125 transition-transform z-10">{cat.icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Brand Seal */}
        <div className="absolute bottom-12 right-12 hidden lg:flex items-center gap-4 opacity-40">
           <div className="text-right">
             <p className="text-[10px] font-black text-white uppercase tracking-widest">Certified Origin</p>
             <p className="text-[8px] font-bold text-slate-400">Authentic Artisan Produce</p>
           </div>
           <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center">
             <Award className="text-white" size={32} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
