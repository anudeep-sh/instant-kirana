
import React, { useState, useEffect } from 'react';
import { Search, MapPin, ShoppingCart, Menu, User, Maximize, Minimize } from 'lucide-react';
import { Location } from '../types';

interface HeaderProps {
  cartCount: number;
  onCartToggle: () => void;
  onSearch: (query: string) => void;
  location: Location;
  onLocationClick: () => void;
  onNavAction: (action: string) => void;
  onProfileClick: () => void;
  currentNav: string;
}

const Header: React.FC<HeaderProps> = ({ 
  cartCount, 
  onCartToggle, 
  onSearch, 
  location, 
  onLocationClick,
  onNavAction,
  onProfileClick,
  currentNav
}) => {
  const [searchInput, setSearchInput] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFs);
    return () => document.removeEventListener('fullscreenchange', handleFs);
  }, []);

  const toggleFullscreen = () => {
    try {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {
          // Silent catch for environments where fullscreen is restricted
        });
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    } catch (e) {
      // General error fallback
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center gap-4">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex flex-col items-start cursor-pointer" onClick={() => onNavAction('home')}>
            <h1 className="text-2xl font-black flex items-center leading-none">
              <span className="text-green-600">Instant</span>
              <span className="text-orange-500">Kirana</span>
            </h1>
            <span className="text-[10px] tracking-[0.25em] text-gray-400 font-bold uppercase mt-1">Fast & Fresh</span>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggleFullscreen} className="p-2 text-gray-400 hover:text-green-600">
               {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
            <button onClick={onCartToggle} className="relative p-2 text-gray-700">
               <ShoppingCart size={22} />
               {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
               )}
            </button>
            <button className="p-2 text-gray-600">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Location Picker */}
        <button 
          onClick={onLocationClick}
          className="hidden md:flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 transition-colors px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-200"
        >
          <MapPin size={18} className="text-green-600" />
          <div className="text-left">
            <p className="text-[10px] text-gray-500 leading-none font-bold uppercase">Delivering to</p>
            <p className="font-semibold leading-tight truncate max-w-[150px]">{location.name}</p>
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
              placeholder="Search for atta, dal, chips..." 
              className="w-full pl-5 pr-24 py-3.5 rounded-2xl border-2 border-gray-100 focus:border-green-500 focus:outline-none transition-all text-sm group-hover:bg-gray-50 group-hover:border-gray-200"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                onSearch(e.target.value);
              }}
            />
            <button 
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 bg-green-600 text-white px-6 rounded-xl hover:bg-green-700 transition-all font-bold flex items-center gap-2"
            >
              <Search size={18} />
              <span className="hidden sm:inline text-xs uppercase tracking-wider">Search</span>
            </button>
          </div>
        </form>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <button 
             onClick={toggleFullscreen}
             className="flex flex-col items-center text-gray-400 hover:text-green-600 transition-all p-2"
             title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            <span className="text-[10px] font-bold uppercase mt-1">Full</span>
          </button>

          <button 
             onClick={onProfileClick}
             className="flex flex-col items-center text-gray-400 hover:text-green-600 transition-all p-2"
          >
            <User size={20} />
            <span className="text-[10px] font-bold uppercase mt-1">Profile</span>
          </button>
          
          <button 
            onClick={onCartToggle}
            className="relative p-2 text-gray-700 hover:text-green-600 transition-colors flex items-center gap-2 group bg-green-50 rounded-2xl px-4"
          >
            <div className="relative">
              <ShoppingCart size={22} className="text-green-600" />
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden lg:inline text-sm font-black text-green-700">My Cart</span>
          </button>
        </div>
      </div>

      {/* Navigation Subbar */}
      <nav className="border-t border-gray-50 hidden md:block">
        <div className="container mx-auto px-4 flex justify-center gap-10 py-3 text-[11px] font-black text-gray-500 uppercase tracking-[0.15em]">
          <button 
            onClick={() => onNavAction('home')} 
            className={`pb-1 transition-all relative ${currentNav === 'all' ? 'text-green-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600' : 'hover:text-green-600'}`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavAction('grocery')} 
            className={`pb-1 transition-all relative ${currentNav === 'staples' ? 'text-green-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600' : 'hover:text-green-600'}`}
          >
            Grocery
          </button>
          <button 
            onClick={() => onNavAction('essentials')} 
            className={`pb-1 transition-all relative ${currentNav === 'household' ? 'text-green-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600' : 'hover:text-green-600'}`}
          >
            Essentials
          </button>
          <button 
            onClick={() => onNavAction('fresh')} 
            className={`pb-1 transition-all relative ${currentNav === 'fruits' ? 'text-green-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600' : 'hover:text-green-600'}`}
          >
            Daily Fresh
          </button>
          <button 
            onClick={() => onNavAction('offers')} 
            className={`pb-1 transition-all relative ${currentNav === 'offers' ? 'text-green-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600' : 'hover:text-green-600'}`}
          >
            Offers
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
