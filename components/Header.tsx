
import React, { useState } from 'react';
import { Search, MapPin, ShoppingCart, User } from 'lucide-react';
import { Location } from '../types';

interface HeaderProps {
  cartCount: number;
  onCartToggle: () => void;
  onSearch: (query: string) => void;
  location: Location;
  onLocationClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cartCount, 
  onCartToggle, 
  onSearch, 
  location, 
  onLocationClick
}) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <header className="sticky top-0 z-[50] bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Logo Section */}
        <div className="flex flex-col cursor-pointer shrink-0" onClick={() => onSearch('')}>
          <h1 className="text-2xl font-extrabold tracking-tight flex items-center gap-1">
            <span className="text-blue-700">Maruti</span>
            <span className="text-blue-400 italic">fresh</span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative">
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Discover the finest produce..." 
              className="w-full pl-12 pr-6 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-blue-500 rounded-2xl transition-all outline-none text-sm"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                onSearch(e.target.value);
              }}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <button 
            onClick={onLocationClick}
            className="hidden lg:flex flex-col items-end group"
          >
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Deliver to</span>
            <div className="flex items-center gap-1 text-slate-700 group-hover:text-blue-600 transition-colors">
              <span className="text-sm font-bold">{location.name}</span>
              <MapPin size={14} />
            </div>
          </button>

          <div className="h-8 w-px bg-slate-100 hidden sm:block"></div>

          <div className="flex items-center gap-4">
            <button className="p-2.5 text-slate-600 hover:text-blue-600 transition-colors rounded-xl hover:bg-blue-50">
              <User size={22} />
            </button>
            <button 
              onClick={onCartToggle}
              className="relative p-2.5 text-slate-700 hover:text-blue-600 transition-colors bg-blue-50 rounded-xl"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;