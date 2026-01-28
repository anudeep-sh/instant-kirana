
import React from 'react';

interface HeroProps {
  onAction: (type: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onAction }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-blue-600 h-[300px] md:h-[450px] group">
        {/* Funky Background Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-red-500 rounded-full blur-[100px] opacity-60 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] bg-blue-400 rounded-full blur-[80px] opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] bg-indigo-800 rounded-full blur-[100px] opacity-70"></div>
        </div>

        <div className="relative h-full flex flex-col md:flex-row items-center justify-between p-10 md:p-20 gap-8 z-10">
          {/* Text Content */}
          <div className="text-white max-w-xl text-center md:text-left">
            <div className="inline-block px-5 py-2 bg-red-500 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-xl shadow-red-900/40 transform -rotate-2">
              Super Fast Delivery
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-none mb-6 tracking-tighter italic">
              Warangal's <br />
              <span className="text-yellow-300 drop-shadow-lg">Freshest eCart</span>
            </h2>
            <p className="text-blue-50 text-sm md:text-xl mb-10 font-medium opacity-90 max-w-md">
              Fresh veggies, daily dairy, and pantry essentials delivered in <span className="underline decoration-red-400 decoration-4">under 30 mins</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => onAction('all')}
                  className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-2xl"
                >
                    Order Now
                </button>
                <button 
                  onClick={() => onAction('offers')}
                  className="bg-transparent border-2 border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all"
                >
                    View Deals
                </button>
            </div>
          </div>

          {/* Promotional Image placeholder */}
          <div className="hidden lg:flex flex-1 justify-end h-full relative items-center">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent rounded-3xl z-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" 
              alt="Fresh Produce" 
              className="h-[80%] w-[500px] object-cover rounded-[2.5rem] shadow-2xl border-8 border-white/5 transform rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
