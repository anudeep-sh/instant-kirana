
import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem, Location, View } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import CheckoutPage from './components/CheckoutPage';
import LegalModal from './components/LegalModal';
import { ChevronRight, MapPin, Mail, Phone } from 'lucide-react';

export type LegalType = 'privacy' | 'terms' | 'shipping' | 'return' | 'safety';

const App: React.FC = () => {
  const [view, setView] = useState<View>('shop');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isOffersOnly, setIsOffersOnly] = useState(false);
  const [location, setLocation] = useState<Location>({ name: 'Yousufguda, Hyderabad' });
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: LegalType }>({
    isOpen: false,
    type: 'privacy'
  });

  // Load cart on init
  useEffect(() => {
    const savedCart = localStorage.getItem('kirana_cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Save changes to local storage
  useEffect(() => {
    localStorage.setItem('kirana_cart', JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesOffers = !isOffersOnly || (product.originalPrice && product.originalPrice > product.price);
      return matchesSearch && matchesCategory && matchesOffers;
    });
  }, [searchQuery, selectedCategory, isOffersOnly]);

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
        setLocation({ name: 'Venkatagiri, Hyderabad', lat: pos.coords.latitude, lng: pos.coords.longitude });
      }, () => {
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

  const handleNavAction = (action: string) => {
    setView('shop');
    setSearchQuery('');
    setIsOffersOnly(false);
    if (action === 'home') setSelectedCategory('all');
    else if (action === 'grocery') setSelectedCategory('staples');
    else if (action === 'essentials') setSelectedCategory('household');
    else if (action === 'fresh') setSelectedCategory('fruits');
    else if (action === 'offers') {
      setIsOffersOnly(true);
      setSelectedCategory('all');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <Header 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        onSearch={(query) => {
          setSearchQuery(query);
          if (view !== 'shop') setView('shop');
        }}
        location={location}
        onLocationClick={handleLocationClick}
        onNavAction={handleNavAction}
        currentNav={isOffersOnly ? 'offers' : selectedCategory}
      />

      <main className="flex-1">
        {view === 'shop' && (
          <>
            {selectedCategory === 'all' && !searchQuery && !isOffersOnly && <Hero />}

            <div className="container mx-auto px-4 py-12">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Explore Categories</h2>
                  <p className="text-gray-500 text-sm mt-1">Wide range of fresh essentials just for you</p>
                </div>
              </div>
              <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar">
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setIsOffersOnly(false);
                      setSearchQuery('');
                    }}
                    className={`flex flex-col items-center gap-4 min-w-[120px] p-6 rounded-[2rem] transition-all duration-300 ${selectedCategory === cat.id && !isOffersOnly ? 'bg-green-600 text-white shadow-2xl shadow-green-200 -translate-y-2' : 'bg-white hover:bg-green-50 text-gray-700 shadow-sm border border-gray-100'}`}
                  >
                    <div className={`text-4xl transition-transform duration-300 ${selectedCategory === cat.id && !isOffersOnly ? 'scale-110' : ''}`}>{cat.icon}</div>
                    <span className="text-[11px] font-black uppercase tracking-widest whitespace-nowrap">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {selectedCategory === 'all' && !searchQuery && !isOffersOnly && (
              <div className="bg-white py-20 border-y border-gray-100">
                <div className="container mx-auto px-4">
                  <div className="flex items-center justify-between mb-12">
                    <div>
                      <h2 className="text-4xl font-black text-gray-900 tracking-tight">Festive Specials</h2>
                      <p className="text-gray-500 text-base mt-2">Traditional favorites for your celebrations</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {festiveProducts.map(product => (
                      <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="container mx-auto px-4 py-20">
              <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-12">
                {isOffersOnly ? 'Hot Offers' : searchQuery ? `Search: "${searchQuery}"` : selectedCategory === 'all' ? 'Popular Picks' : CATEGORIES.find(c => c.id === selectedCategory)?.name}
              </h2>
              {filteredProducts.length === 0 ? (
                <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
                  <p className="text-gray-500">No items found. Try another search!</p>
                  <button onClick={() => handleNavAction('home')} className="mt-8 bg-green-600 text-white font-black px-10 py-4 rounded-2xl">Reset</button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {view === 'checkout' && (
          <CheckoutPage items={cart} onBack={() => setView('shop')} onComplete={handleOrderComplete} />
        )}
      </main>

      <footer className="bg-white border-t border-gray-100 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div>
              <h1 className="text-3xl font-black flex items-center mb-1">
                <span className="text-green-600">Instant</span>
                <span className="text-orange-500">Kirana</span>
              </h1>
              <p className="text-[11px] tracking-[0.3em] text-gray-400 font-black uppercase mb-4">NEOFIN NEX India Private Limited</p>
              <p className="text-gray-500 text-sm leading-relaxed">Delivering quality groceries directly to your doorstep in minutes.</p>
            </div>
            <div>
              <h4 className="font-black text-gray-900 mb-8 uppercase text-xs tracking-[0.2em]">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-bold">
                <li><button onClick={() => openLegal('privacy')} className="hover:text-green-600">Privacy Policy</button></li>
                <li><button onClick={() => openLegal('terms')} className="hover:text-green-600">Terms of Service</button></li>
                <li><button onClick={() => openLegal('return')} className="hover:text-green-600">Refund Policy</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-gray-900 mb-8 uppercase text-xs tracking-[0.2em]">Contact</h4>
              <div className="space-y-6 text-sm text-gray-500 font-bold">
                <div className="flex gap-4"><MapPin size={20} className="text-green-600"/> Plot no 102, Venkatagiri, Hyderabad</div>
                <div className="flex gap-4"><Phone size={20} className="text-green-600"/> 8143900450</div>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] border-t pt-10">
            &copy; {new Date().getFullYear()} NEOFIN NEX INDIA PRIVATE LIMITED. ALL RIGHTS RESERVED.
          </p>
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

      <LegalModal isOpen={legalModal.isOpen} onClose={() => setLegalModal({ ...legalModal, isOpen: false })} type={legalModal.type} />
    </div>
  );
};

export default App;
