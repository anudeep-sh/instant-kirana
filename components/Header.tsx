
import React, { useState, useEffect } from 'react';
import { Search, MapPin, ShoppingCart, Menu, Maximize2, Minimize2 } from 'lucide-react';
import { Location } from '../types';

interface HeaderProps {
  cartCount: number;
  onCartToggle: () => void;
  onSearch: (query: string) => void;
  location: Location;
  onLocationClick: () => void;
  onNavClick: (type: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cartCount, 
  onCartToggle, 
  onSearch, 
  location, 
  onLocationClick,
  onNavClick
}) => {
  const [searchInput, setSearchInput] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(e => {
        alert(`Error attempting to enable fullscreen mode: ${e.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center gap-4">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <div className="flex flex-col items-start cursor-pointer group" onClick={() => onNavClick('home')}>
            <h1 className="text-3xl font-black flex items-center tracking-tighter italic">
              <span className="text-blue-600 group-hover:-translate-y-1 transition-transform">e</span>
              <span className="text-red-500 group-hover:translate-y-1 transition-transform">cart</span>
            </h1>
            <span className="text-[9px] tracking-[0.4em] text-gray-400 font-black uppercase mt-[-4px]">Warangal Hub</span>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={toggleFullscreen}
              className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
            <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Location Picker */}
        <button 
          onClick={onLocationClick}
          className="hidden md:flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600 transition-all px-4 py-2 rounded-2xl bg-gray-50 border-2 border-transparent hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50"
        >
          <div className="p-1.5 bg-blue-100 rounded-lg text-blue-600">
            <MapPin size={18} />
          </div>
          <div className="text-left">
            <p className="text-[10px] text-gray-500 font-black uppercase leading-none mb-0.5">Ship To</p>
            <p className="font-bold leading-tight truncate max-w-[120px]">{location.name}</p>
          </div>
        </button>

        {/* Search Bar */}
        <form 
          onSubmit={handleSearchSubmit}
          className="flex-1 w-full max-w-2xl relative"
        >
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Hungry? Search for items..." 
              className="w-full pl-6 pr-28 py-3.5 rounded-2xl border-2 border-gray-100 focus:border-red-500 focus:outline-none transition-all text-sm group-hover:bg-gray-50 shadow-inner"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                onSearch(e.target.value);
              }}
            />
            <button 
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 rounded-xl hover:scale-105 transition-all font-black flex items-center gap-2 shadow-lg shadow-red-200"
            >
              <Search size={18} />
              <span className="hidden sm:inline text-xs uppercase tracking-widest">GO</span>
            </button>
          </div>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleFullscreen}
            className="hidden md:flex p-2.5 bg-gray-50 text-gray-500 hover:text-blue-600 rounded-xl transition-all hover:bg-blue-50"
            title="Immersive Mode"
          >
            {isFullscreen ? <Minimize2 size={22} /> : <Maximize2 size={22} />}
          </button>
          
          <button 
            onClick={onCartToggle}
            className="relative p-2 text-gray-700 hover:text-blue-600 transition-all flex items-center gap-2 group"
          >
            <div className="relative p-2 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
              <ShoppingCart size={24} className="group-hover:rotate-12 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-md">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="hidden lg:flex flex-col items-start leading-none">
                <span className="text-[10px] text-gray-400 font-black uppercase">My Bag</span>
                <span className="text-sm font-black group-hover:text-blue-600">Checkout</span>
            </div>
          </button>
        </div>
      </div>

      {/* Navigation Subbar */}
      <nav className="border-t border-gray-50 hidden md:block">
        <div className="container mx-auto px-4 flex justify-center gap-10 py-3 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
          <button onClick={() => onNavClick('home')} className="hover:text-red-500 transition-colors">Shop Home</button>
          <button onClick={() => onNavClick('fruits')} className="hover:text-blue-600 transition-colors">Grocery</button>
          <button onClick={() => onNavClick('staples')} className="hover:text-blue-600 transition-colors">Essentials</button>
          <button onClick={() => onNavClick('dairy')} className="hover:text-blue-600 transition-colors">Daily Fresh</button>
          <button onClick={() => onNavClick('offers')} className="text-red-400 hover:text-red-600 animate-pulse transition-colors">Flash Deals 🔥</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
