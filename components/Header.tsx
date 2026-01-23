
import React, { useState } from 'react';
import { Search, MapPin, ShoppingCart, Menu } from 'lucide-react';
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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center gap-4">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex flex-col items-start cursor-pointer" onClick={() => onSearch('')}>
            <h1 className="text-2xl font-black flex items-center">
              <span className="text-green-600">Instant</span>
              <span className="text-orange-500">Kirana</span>
            </h1>
            <span className="text-[10px] tracking-[0.2em] text-gray-400 font-bold uppercase mt-[-2px]">Fast & Fresh</span>
          </div>

          <button className="md:hidden p-2 text-gray-600">
            <Menu size={24} />
          </button>
        </div>

        {/* Location Picker */}
        <button 
          onClick={onLocationClick}
          className="hidden md:flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-lg bg-gray-50 border border-transparent hover:border-green-100"
        >
          <MapPin size={18} className="text-green-600" />
          <div className="text-left">
            <p className="text-[10px] text-gray-500 leading-none">Delivering to</p>
            <p className="font-semibold leading-tight">{location.name}</p>
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
              placeholder="Search for fresh items..." 
              className="w-full pl-5 pr-24 py-3 rounded-xl border-2 border-gray-100 focus:border-green-500 focus:outline-none transition-all text-sm group-hover:bg-gray-50"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                onSearch(e.target.value);
              }}
            />
            <button 
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 bg-green-600 text-white px-6 rounded-lg hover:bg-green-700 transition-all font-medium flex items-center gap-2"
            >
              <Search size={18} />
              <span className="hidden sm:inline text-xs uppercase font-bold tracking-wider">Search</span>
            </button>
          </div>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onCartToggle}
            className="relative p-2 text-gray-700 hover:text-green-600 transition-colors flex items-center gap-2 group"
          >
            <div className="relative">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden lg:inline text-sm font-bold group-hover:text-green-600">Cart</span>
          </button>
        </div>
      </div>

      {/* Navigation Subbar */}
      <nav className="border-t border-gray-50 hidden md:block">
        <div className="container mx-auto px-4 flex justify-center gap-8 py-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
          <button onClick={() => onSearch('')} className="text-green-600 border-b-2 border-green-600 pb-1">Home</button>
          <a href="#" className="hover:text-green-600 transition-colors">Grocery</a>
          <a href="#" className="hover:text-green-600 transition-colors">Essentials</a>
          <a href="#" className="hover:text-green-600 transition-colors">Daily Fresh</a>
          <a href="#" className="hover:text-green-600 transition-colors">Offers</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;