
import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem, Location } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import CheckoutPage from './components/CheckoutPage';
import LegalModal from './components/LegalModal';
import { ChevronRight, MapPin, Mail, Phone } from 'lucide-react';

type View = 'shop' | 'checkout';
export type LegalType = 'privacy' | 'terms' | 'shipping' | 'return' | 'safety';

const App: React.FC = () => {
  const [view, setView] = useState<View>('shop');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showOnlyOffers, setShowOnlyOffers] = useState(false);
  const [location, setLocation] = useState<Location>({ name: 'Shivnagar, Warangal' });
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: LegalType }>({
    isOpen: false,
    type: 'privacy'
  });

  useEffect(() => {
    const savedCart = localStorage.getItem('kirana_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('kirana_cart', JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesOffers = !showOnlyOffers || (product.originalPrice !== undefined);
      return matchesSearch && matchesCategory && matchesOffers;
    });
  }, [searchQuery, selectedCategory, showOnlyOffers]);

  const festiveProducts = useMemo(() => 
    PRODUCTS.filter(p => p.isFestive), []);

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation({ name: 'Warangal, Telangana', lat: pos.coords.latitude, lng: pos.coords.longitude });
      }, (err) => {
        alert("Unable to fetch location. Please choose manually.");
      });
    }
  };

  const handleOrderComplete = () => {
    setCart([]);
    setView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLegal = (type: LegalType) => {
    setLegalModal({ isOpen: true, type });
  };

  const handleNavClick = (type: string) => {
    setView('shop');
    setSearchQuery('');
    setShowOnlyOffers(false);
    
    if (type === 'home' || type === 'all') {
      setSelectedCategory('all');
    } else if (type === 'offers') {
      setSelectedCategory('all');
      setShowOnlyOffers(true);
    } else {
      setSelectedCategory(type);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-red-200 selection:text-red-900 bg-gray-50">
      <Header 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        onSearch={(query) => {
          setSearchQuery(query);
          if (view !== 'shop') setView('shop');
          setShowOnlyOffers(false);
        }}
        location={location}
        onLocationClick={handleLocationClick}
        onNavClick={handleNavClick}
      />

      <main className="flex-1">
        {view === 'shop' && (
          <>
            {selectedCategory === 'all' && !searchQuery && !showOnlyOffers && <Hero onAction={handleNavClick} />}

            <div className="container mx-auto px-4 py-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-black text-gray-800 flex items-center gap-2">
                  Browse Categories
                </h2>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setShowOnlyOffers(false);
                    }}
                    className={`flex flex-col items-center gap-2 min-w-[100px] p-4 rounded-2xl transition-all ${selectedCategory === cat.id && !showOnlyOffers ? 'bg-blue-600 text-white shadow-lg shadow-blue-100 scale-105' : 'bg-white hover:bg-blue-50 text-gray-700'}`}
                  >
                    <span className="text-3xl">{cat.icon}</span>
                    <span className="text-xs font-bold whitespace-nowrap uppercase tracking-tighter">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {selectedCategory === 'all' && !searchQuery && !showOnlyOffers && festiveProducts.length > 0 && (
              <div className="bg-white py-12">
                <div className="container mx-auto px-4">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-3xl font-black text-gray-800 mb-1">
                        <span className="text-red-500">Festive</span> <span className="text-blue-600">Specials</span>
                      </h2>
                      <p className="text-gray-500 text-sm">Handpicked for your celebrations</p>
                    </div>
                    <button 
                      onClick={() => handleNavClick('offers')}
                      className="flex items-center gap-1 text-red-500 font-bold hover:gap-2 transition-all"
                    >
                      View All <ChevronRight size={20} />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {festiveProducts.map(product => (
                      <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="container mx-auto px-4 py-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-gray-800">
                  {showOnlyOffers ? 'Special Offers' : searchQuery ? `Results for "${searchQuery}"` : selectedCategory === 'all' ? 'Popular Picks' : CATEGORIES.find(c => c.id === selectedCategory)?.name}
                </h2>
                <span className="bg-blue-50 text-blue-600 text-xs font-black px-3 py-1 rounded-full border border-blue-100">
                  {filteredProducts.length} Items
                </span>
              </div>
              
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-[2.5rem] border-4 border-dashed border-gray-100">
                  <div className="text-6xl mb-4 animate-bounce">🔍</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No items found</h3>
                  <p className="text-gray-500">Try a different search or browse another category</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {view === 'checkout' && (
          <CheckoutPage 
            items={cart} 
            onBack={() => setView('shop')} 
            onComplete={handleOrderComplete}
          />
        )}
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-black flex items-center">
                  <span className="text-blue-400">e</span>
                  <span className="text-red-500">cart</span>
                </h1>
                <span className="text-[10px] tracking-widest text-gray-500 font-bold uppercase mt-1 block">MTST SEVA Technologies Pvt. Ltd.</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Redefining shopping with speed and quality. Local essentials delivered instantly from our Shivnagar hub in Warangal.
              </p>
            </div>

            <div>
              <h4 className="font-black text-red-500 mb-6 uppercase tracking-wider text-xs">Quick Shop</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li><button onClick={() => handleNavClick('fruits')} className="hover:text-blue-400 transition-colors">Veggies & Fruits</button></li>
                <li><button onClick={() => handleNavClick('staples')} className="hover:text-blue-400 transition-colors">Atta & Rice</button></li>
                <li><button onClick={() => handleNavClick('sweets')} className="hover:text-blue-400 transition-colors">Biscuits & Cookies</button></li>
                <li><button onClick={() => handleNavClick('dairy')} className="hover:text-blue-400 transition-colors">Daily Essentials</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-red-500 mb-6 uppercase tracking-wider text-xs">Legal & Support</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li><button onClick={() => openLegal('privacy')} className="hover:text-blue-400 transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => openLegal('terms')} className="hover:text-blue-400 transition-colors">Terms & Conditions</button></li>
                <li><button onClick={() => openLegal('return')} className="hover:text-blue-400 transition-colors">Refund Policy</button></li>
                <li><button onClick={() => openLegal('safety')} className="hover:text-blue-400 transition-colors">Safety Policy</button></li>
                <li><button onClick={() => openLegal('shipping')} className="hover:text-blue-400 transition-colors">Shipping Policy</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-red-500 mb-6 uppercase tracking-wider text-xs">Reach Us</h4>
              <div className="space-y-5">
                <div className="flex gap-3 items-start">
                  <MapPin className="text-blue-400 shrink-0" size={18} />
                  <p className="text-sm text-gray-400 font-medium leading-tight">
                    11-9-15, A J MILLS, OCITY, Shivnagar, Warangal – 506002, Telangana
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="text-blue-400 shrink-0" size={18} />
                  <p className="text-sm text-gray-400 font-medium">support@mtstsevakendra.in</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="text-blue-400 shrink-0" size={18} />
                  <p className="text-sm text-gray-400 font-medium">+91 9490053646</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
              &copy; {new Date().getFullYear()} MTST SEVA Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-5 bg-blue-600 rounded-sm opacity-50"></div>
              <div className="w-8 h-5 bg-red-500 rounded-sm opacity-50"></div>
              <div className="w-8 h-5 bg-white rounded-sm opacity-20"></div>
            </div>
          </div>
        </div>
      </footer>

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckoutClick}
      />

      <LegalModal 
        isOpen={legalModal.isOpen} 
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })} 
        type={legalModal.type} 
      />
    </div>
  );
};

export default App;
