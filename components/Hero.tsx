
import React from 'react';
// Fix: Import ShoppingCart from lucide-react
import { ShoppingCart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-green-600 via-green-700 to-orange-500 h-[50vh] md:h-[65vh] min-h-[400px]">
          {/* Animated Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-400/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="relative h-full flex flex-col md:flex-row items-center justify-between p-8 md:p-20 gap-10">
            {/* Text Content */}
            <div className="text-white max-w-2xl text-center md:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
                Fresh Deliveries Every 15 Mins
              </div>
              
              <h2 className="text-4xl md:text-7xl font-black leading-[1.1] mb-6">
                Freshness in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Every Blink.</span>
              </h2>
              
              <p className="text-green-50 text-base md:text-xl mb-10 opacity-90 max-w-lg leading-relaxed font-medium">
                Sourced daily from local farms to your kitchen. Save up to 30% on your first order this week!
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl text-center min-w-[140px] shadow-lg">
                  <p className="text-[10px] uppercase font-black text-green-200 tracking-widest mb-1">Coupon Code</p>
                  <p className="text-3xl font-black text-white">WELCOME</p>
                  <p className="text-[11px] text-green-100 mt-1 font-bold">Flat 20% OFF</p>
                </div>
                <div className="hidden sm:flex flex-col justify-center">
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Popular Right Now</p>
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-green-600 bg-gray-200 overflow-hidden shadow-md">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-green-600 bg-white flex items-center justify-center text-[10px] font-black text-green-600 shadow-md">
                      +2k
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Immersive Image Section */}
            <div className="hidden lg:block relative flex-1 h-full max-w-lg">
              <div className="absolute inset-0 bg-white/5 rounded-[3rem] rotate-3 scale-105 border border-white/10 backdrop-blur-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80" 
                alt="Fresh Groceries" 
                className="relative h-full w-full object-cover rounded-[3rem] shadow-2xl border-8 border-white/20 transform hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                    <ShoppingCart size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Trending Item</p>
                    <p className="font-bold text-gray-800">Fresh Alphonso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
