
import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS, CATEGORIES, BRANDS } from './constants';
import { Product, CartItem, Location } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import CheckoutPage from './components/CheckoutPage';
import LegalModal from './components/LegalModal';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

type View = 'shop' | 'checkout';
type LegalType = 'privacy' | 'terms' | 'shipping' | 'corporate';

const App: React.FC = () => {
  const [view, setView] = useState<View>('shop');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [location, setLocation] = useState<Location>({ name: 'KPHB Colony, HYD' });
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: LegalType }>({
    isOpen: false,
    type: 'privacy'
  });

  // Cart Persistence for Guest Users
  useEffect(() => {
    const savedCart = localStorage.getItem('maruti_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart data", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('maruti_cart', JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { ...product, quantity: 1 }];
    });
    // Requirement: Directly proceed to checkout after adding items to the cart
    handleCheckoutClick();
  };

  return (
    <div className="min-h-screen flex flex-col bg-mesh">
      <Header 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        onSearch={setSearchQuery}
        location={location}
        onLocationClick={() => alert("Updating your delivery zone...")}
      />

      <div className="flex flex-1 container mx-auto px-6 gap-10 py-10">
        {/* Desktop Sidebar Navigation */}
        {view === 'shop' && (
          <aside className="hidden lg:flex flex-col w-72 shrink-0">
            <div className="sticky top-28 space-y-6">
              <div>
                <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Discover</p>
                <div className="space-y-1">
                  {CATEGORIES.map(cat => (
                    <button 
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm group ${selectedCategory === cat.id ? 'bg-white shadow-xl shadow-blue-900/5 text-blue-700' : 'text-slate-600 hover:bg-white/50'}`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-transform group-hover:scale-110 ${cat.color}`}>
                        {cat.icon}
                      </div>
                      <span className="flex-1 text-left">{cat.name}</span>
                      {selectedCategory === cat.id && <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="pt-4">
                <div className="p-6 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl group-hover:bg-blue-600/40 transition-colors"></div>
                  <Globe className="text-blue-400 mb-4" size={24} />
                  <p className="text-xs font-bold text-blue-300 mb-1 uppercase tracking-widest">Global Sourcing</p>
                  <h4 className="text-lg font-black mb-4 leading-tight">Artisan Partners Program</h4>
                  <button className="w-full py-3 bg-white text-slate-900 text-[10px] font-black rounded-xl hover:bg-blue-50 transition-all uppercase tracking-widest">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* Main Content Area */}
        <main className="flex-1">
          {view === 'shop' && (
            <>
              {selectedCategory === 'all' && !searchQuery && (
                <Hero onSelectCategory={setSelectedCategory} />
              )}
              
              {selectedCategory === 'all' && !searchQuery && (
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Premium Artisan Partners</h3>
                    <div className="h-px flex-1 bg-slate-100 mx-6"></div>
                  </div>
                  <div className="flex items-center justify-between gap-12 overflow-x-auto no-scrollbar py-4 px-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    {BRANDS.map((brand, i) => (
                      <div key={i} className="shrink-0 group cursor-pointer">
                        <img src={brand.logo} alt={brand.name} className="h-10 w-auto object-contain group-hover:scale-110 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div id="product-grid" className="flex items-center justify-between mb-8 scroll-mt-32">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                    {searchQuery ? `Results for "${searchQuery}"` : selectedCategory === 'all' ? 'Featured Selection' : CATEGORIES.find(c => c.id === selectedCategory)?.name}
                  </h2>
                  <p className="text-slate-400 text-sm font-medium mt-1">Curated with uncompromising quality standards.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-100 text-xs font-bold text-slate-500 shadow-sm">
                    <span>{filteredProducts.length} Items</span>
                  </div>
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-32 bg-white rounded-[3rem] border border-slate-100 shadow-sm">
                  <div className="text-7xl mb-6 grayscale opacity-30">🔍</div>
                  <h3 className="text-2xl font-black text-slate-800 mb-2">Selection Not Found</h3>
                  <p className="text-slate-400 max-w-sm mx-auto">Try refining your search or browse our curated categories.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                  ))}
                </div>
              )}
            </>
          )}

          {view === 'checkout' && (
            <CheckoutPage 
              items={cart} 
              onBack={() => setView('shop')} 
              onComplete={() => {
                setCart([]);
                setView('shop');
              }}
            />
          )}
        </main>
      </div>

      <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="inline-block p-1 bg-blue-50 rounded-lg mb-6">
                <h1 className="text-2xl font-black flex items-center gap-1 px-2">
                  <span className="text-blue-700">Maruti</span>
                  <span className="text-blue-400 italic">fresh</span>
                </h1>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Elevating everyday living through artisan sourcing and rapid logistics. We bring the world's finest pantry directly to your kitchen.
              </p>
              <div className="flex gap-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-all cursor-pointer">
                    #
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-[10px]">Curation</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-bold">
                <li><a href="#" className="hover:text-blue-600">Organic Harvest</a></li>
                <li><a href="#" className="hover:text-blue-600">Global Artisans</a></li>
                <li><a href="#" className="hover:text-blue-600">Healthy Living</a></li>
                <li><a href="#" className="hover:text-blue-600">New Arrivals</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-[10px]">Support</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-bold">
                <li><button onClick={() => setLegalModal({ isOpen: true, type: 'privacy' })} className="hover:text-blue-600 text-left">Privacy & Data</button></li>
                <li><button onClick={() => setLegalModal({ isOpen: true, type: 'terms' })} className="hover:text-blue-600 text-left">Terms of Service</button></li>
                <li><button onClick={() => setLegalModal({ isOpen: true, type: 'shipping' })} className="hover:text-blue-600 text-left">Shipping Policy</button></li>
                <li><button onClick={() => setLegalModal({ isOpen: true, type: 'corporate' })} className="hover:text-blue-600 text-left">Corporate</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-[10px]">Contact Us</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-blue-600 shrink-0" size={20} />
                  <p className="text-sm text-slate-500 font-bold leading-tight">
                    D No 15-29-934/RNR Road No 3 KPHB Colony, Hyderabad, Medchal, Malkajgiri, 500072, Telangana, India
                  </p>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-blue-600 shrink-0" size={20} />
                  <p className="text-sm text-slate-500 font-bold">8143900450</p>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-blue-600 shrink-0" size={20} />
                  <p className="text-sm text-slate-500 font-bold">support@amcashpay.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} AAryan Maruti Communications Private Limited.
            </p>
            <div className="flex gap-8 items-center grayscale opacity-50">
              <div className="h-6 w-10 bg-slate-200 rounded"></div>
              <div className="h-6 w-10 bg-slate-200 rounded"></div>
              <div className="h-6 w-10 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </footer>

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={(id, delta) => setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item))}
        onRemove={id => setCart(prev => prev.filter(item => item.id !== id))}
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
