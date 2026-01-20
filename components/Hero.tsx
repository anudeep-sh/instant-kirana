
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-green-500 to-green-700 h-[250px] md:h-[400px]">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>
        </div>

        <div className="relative h-full flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
          {/* Text Content */}
          <div className="text-white max-w-xl text-center md:text-left">
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Festive Season Offers
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Refresh Your Kitchen <br />
              <span className="text-yellow-300">Save Big This Pongal!</span>
            </h2>
            <p className="text-green-50 text-sm md:text-lg mb-8 opacity-90">
              Get up to 30% off on fresh produce, sweets, and pantry essentials. Freshness delivered to your doorstep.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center min-w-[120px]">
                <p className="text-xs uppercase font-bold text-green-100">Offer 1</p>
                <p className="text-2xl font-black text-white">₹100 OFF</p>
                <p className="text-[10px] text-green-50">Above ₹1499</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center min-w-[120px]">
                <p className="text-xs uppercase font-bold text-green-100">Offer 2</p>
                <p className="text-2xl font-black text-yellow-300">₹300 OFF</p>
                <p className="text-[10px] text-green-50">Above ₹3999</p>
              </div>
            </div>
          </div>

          {/* Promotional Image placeholder */}
          <div className="hidden md:flex flex-1 justify-end h-full">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" 
              alt="Fresh Produce" 
              className="h-full w-[450px] object-cover rounded-xl shadow-2xl border-4 border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
