
import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem, Location } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import SmartAssistant from './components/SmartAssistant';
import CheckoutPage from './components/CheckoutPage';
import LegalModal from './components/LegalModal';
import { ChevronRight, MapPin, Mail, Phone } from 'lucide-react';

type View = 'shop' | 'checkout';

const App: React.FC = () => {
  const [view, setView] = useState<View>('shop');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [location, setLocation] = useState<Location>({ name: 'Yousufguda, Hyderabad' });
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy'
  });

  // Load cart on init
  useEffect(() => {
    const savedCart = localStorage.getItem('kirana_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save Cart on changes
  useEffect(() => {
    localStorage.setItem('kirana_cart', JSON.stringify(cart));
  }, [cart]);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

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
    
    // Trigger checkout flow immediately after adding
    handleCheckoutClick();
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

  const openLegal = (type: 'privacy' | 'terms') => {
    setLegalModal({ isOpen: true, type });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        onSearch={(query) => {
          setSearchQuery(query);
          if (view !== 'shop') setView('shop');
        }}
        location={location}
        onLocationClick={handleLocationClick}
      />

      <main className="flex-1">
        {view === 'shop' && (
          <>
            {selectedCategory === 'all' && !searchQuery && <Hero />}

            {/* Category Selection Bar */}
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
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex flex-col items-center gap-2 min-w-[100px] p-4 rounded-2xl transition-all ${selectedCategory === cat.id ? 'bg-green-600 text-white shadow-lg shadow-green-100 scale-105' : 'bg-white hover:bg-green-50 text-gray-700'}`}
                  >
                    <span className="text-3xl">{cat.icon}</span>
                    <span className="text-xs font-bold whitespace-nowrap">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Festive Section */}
            {selectedCategory === 'all' && !searchQuery && (
              <div className="bg-white py-12">
                <div className="container mx-auto px-4">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-3xl font-black text-gray-800 mb-1 text-green-600">Festive Specials</h2>
                      <p className="text-gray-500 text-sm">Handpicked for your celebrations</p>
                    </div>
                    <button className="flex items-center gap-1 text-green-600 font-bold hover:gap-2 transition-all">
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

            {/* All Products Section */}
            <div className="container mx-auto px-4 py-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-gray-800">
                  {searchQuery ? `Results for "${searchQuery}"` : selectedCategory === 'all' ? 'Popular Picks' : CATEGORIES.find(c => c.id === selectedCategory)?.name}
                </h2>
                <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full">
                  {filteredProducts.length} Items
                </span>
              </div>
              
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100">
                  <div className="text-6xl mb-4">🔍</div>
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

      <footer className="bg-white border-t py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="mb-6">
                <h1 className="text-2xl font-black flex items-center">
                  <span className="text-green-600">Instant</span>
                  <span className="text-orange-500">Kiran</span>
                </h1>
                <span className="text-[10px] tracking-widest text-gray-400 font-bold uppercase mt-1">NEOFIN NEX India Pvt Ltd</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Redefining shopping with speed and quality. Local essentials delivered instantly from our Yousufguda hub to your doorstep.
              </p>
            </div>

            <div>
              <h4 className="font-black text-gray-800 mb-6 uppercase tracking-wider text-xs">Quick Shop</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><button onClick={() => setSelectedCategory('fruits')} className="hover:text-green-600 transition-colors">Veggies & Fruits</button></li>
                <li><button onClick={() => setSelectedCategory('staples')} className="hover:text-green-600 transition-colors">Atta & Rice</button></li>
                <li><button onClick={() => setSelectedCategory('sweets')} className="hover:text-green-600 transition-colors">Biscuits & Cookies</button></li>
                <li><button onClick={() => setSelectedCategory('dairy')} className="hover:text-green-600 transition-colors">Daily Essentials</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-gray-800 mb-6 uppercase tracking-wider text-xs">Legal & Support</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><button onClick={() => openLegal('privacy')} className="hover:text-green-600 transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => openLegal('terms')} className="hover:text-green-600 transition-colors">Terms & Conditions</button></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Return Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-gray-800 mb-6 uppercase tracking-wider text-xs">Reach Us</h4>
              <div className="space-y-5">
                <div className="flex gap-3">
                  <MapPin className="text-green-600 shrink-0" size={18} />
                  <p className="text-sm text-gray-500 font-medium leading-tight text-balance">
                    Plot no 102, First floor, Sukiran Apartments, Venkatagiri, Yousufguda, Hyderabad, Telangana 500045
                  </p>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-green-600 shrink-0" size={18} />
                  <p className="text-sm text-gray-500 font-medium">support@thequickpayme.com</p>
                </div>
                <div className="flex gap-3">
                  <Phone className="text-green-600 shrink-0" size={18} />
                  <p className="text-sm text-gray-500 font-medium">8143900450</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
              &copy; {new Date().getFullYear()} NEOFIN NEX India Private Limited. All rights reserved.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-5 bg-gray-100 rounded-sm"></div>
              <div className="w-8 h-5 bg-gray-100 rounded-sm"></div>
              <div className="w-8 h-5 bg-gray-100 rounded-sm"></div>
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

      <SmartAssistant products={PRODUCTS} />

      <LegalModal 
        isOpen={legalModal.isOpen} 
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })} 
        type={legalModal.type} 
      />
    </div>
  );
};

export default App;