
import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove, onCheckout }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 500 ? 0 : 40;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-blue-900/30 backdrop-blur-md z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[70] shadow-[-20px_0_50px_rgba(0,0,0,0.1)] transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col rounded-l-[3rem] overflow-hidden`}
      >
        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-blue-50/50">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200 rotate-3">
              <ShoppingBag size={24} />
            </div>
            <div>
                <h2 className="text-2xl font-black text-gray-900 tracking-tighter italic">Your Bag</h2>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Freshness Pending</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-red-50 hover:text-red-500 rounded-full transition-all text-gray-400 border border-transparent hover:border-red-100">
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-10">
              <div className="w-32 h-32 bg-blue-50 rounded-[2.5rem] flex items-center justify-center mb-6 relative group">
                <div className="absolute inset-0 bg-blue-100 rounded-[2.5rem] group-hover:scale-125 transition-transform opacity-50"></div>
                <ShoppingBag size={64} className="text-blue-300 relative group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2 italic">Nothing here yet!</h3>
              <p className="text-sm text-gray-500 mb-10 leading-relaxed font-medium">Your eCart is waiting for some delicious goodies to join the party.</p>
              <button 
                onClick={onClose}
                className="bg-blue-600 text-white font-black px-12 py-4 rounded-2xl hover:bg-red-500 transition-all shadow-2xl shadow-blue-200 uppercase tracking-widest text-xs"
              >
                Let's Go Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-6 group">
                <div className="relative">
                    <img src={item.image} alt={item.name} className="w-24 h-24 rounded-3xl object-cover shadow-lg group-hover:rotate-2 transition-transform" />
                    <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-md border border-gray-100 group-hover:scale-110 transition-transform">
                        <ShoppingBag size={12} className="text-red-500" />
                    </div>
                </div>
                <div className="flex-1 py-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-black text-gray-900 text-base italic leading-tight">{item.name}</h4>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <p className="text-xs font-bold text-gray-400 mb-4">{item.unit}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-2 border border-gray-100 shadow-inner">
                      <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-gray-400 hover:text-red-500 transition-colors">
                        <Minus size={16} className="stroke-[3px]" />
                      </button>
                      <span className="text-base font-black w-6 text-center text-gray-800">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Plus size={16} className="stroke-[3px]" />
                      </button>
                    </div>
                    <span className="text-xl font-black text-gray-900 tracking-tighter">₹{item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-gray-100 bg-white">
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-500 font-bold uppercase text-[10px] tracking-widest">
                <span>Subtotal Items</span>
                <span className="text-gray-900 font-black">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-500 font-bold uppercase text-[10px] tracking-widest">
                <span>Express Delivery</span>
                <span>{deliveryFee === 0 ? <span className="text-blue-600 font-black italic">FREE</span> : <span className="text-gray-900 font-black">₹${deliveryFee}</span>}</span>
              </div>
              <div className="pt-6 border-t border-dashed flex justify-between items-end">
                <div>
                    <span className="text-[10px] font-black text-red-500 uppercase tracking-widest block mb-1">Total Due</span>
                    <span className="text-4xl font-black text-gray-900 tracking-tighter italic">₹{subtotal + deliveryFee}</span>
                </div>
                <div className="text-[9px] font-bold text-gray-400 text-right max-w-[100px] leading-tight mb-1">
                    Inclusive of all GST and Funky Taxes
                </div>
              </div>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-black py-5 rounded-[1.5rem] shadow-2xl shadow-red-200 hover:scale-[1.02] hover:rotate-1 transition-all active:scale-95 uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3"
            >
              Checkout Now <Plus size={20} className="stroke-[3px]" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
