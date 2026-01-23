
import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Wallet, Smartphone, ShieldCheck, CheckCircle2, MapPin, User, Mail, Phone, Tag, Ticket } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutPageProps {
  items: CartItem[];
  onBack: () => void;
  onComplete: () => void;
}

interface Coupon {
  code: string;
  discount: number;
  type: 'percent' | 'flat' | 'free_shipping';
  minOrder?: number;
}

const COUPONS: Coupon[] = [
  { code: 'MARUTI10', discount: 10, type: 'percent' },
  { code: 'FRESH50', discount: 50, type: 'flat', minOrder: 500 },
  { code: 'WELCOME', discount: 20, type: 'percent' },
  { code: 'FREE750', discount: 0, type: 'free_shipping', minOrder: 750 }
];

const CheckoutPage: React.FC<CheckoutPageProps> = ({ items, onBack, onComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'wallet'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [couponError, setCouponError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: 'D No 15-29-934/RNR Road No 3 KPHB Colony, Hyderabad, Medchal, Malkajgiri, 500072, Telangana, India'
  });

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  // Calculate Discount
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'percent') {
      discountAmount = (subtotal * appliedCoupon.discount) / 100;
    } else if (appliedCoupon.type === 'flat') {
      discountAmount = appliedCoupon.discount;
    }
  }

  // Calculate Delivery Fee
  let deliveryFee = subtotal > 500 ? 0 : 40;
  if (appliedCoupon?.type === 'free_shipping' && subtotal >= (appliedCoupon.minOrder || 0)) {
    deliveryFee = 0;
  }

  const total = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyCoupon = () => {
    setCouponError('');
    const coupon = COUPONS.find(c => c.code === couponInput.toUpperCase());
    
    if (!coupon) {
      setCouponError('Invalid coupon code');
      setAppliedCoupon(null);
      return;
    }

    if (coupon.minOrder && subtotal < coupon.minOrder) {
      setCouponError(`Minimum order of ₹${coupon.minOrder} required`);
      setAppliedCoupon(null);
      return;
    }

    setAppliedCoupon(coupon);
    setCouponInput('');
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in your contact details first.");
      return;
    }
    
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-20 text-center animate-in fade-in zoom-in duration-500">
        <div className="bg-white p-12 rounded-[3rem] shadow-xl max-w-md mx-auto border border-slate-100">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-blue-600" size={48} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 mb-2">Order Confirmed!</h2>
          <p className="text-slate-500 mb-8">Thank you, {formData.name.split(' ')[0]}! Your order is being packed for lightning-fast delivery from our Marutifresh hub.</p>
          <div className="animate-pulse text-blue-600 font-bold">Redirecting you home...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold mb-8 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Shopping
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
              <ShieldCheck className="text-blue-600" />
              Secure Checkout
            </h3>
            
            <form onSubmit={handlePayment} className="space-y-8">
              {/* Delivery Details */}
              <div className="space-y-4">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Contact Details</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                    <input 
                      type="text" 
                      required
                      placeholder="Full Name"
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl py-3.5 pl-12 pr-4 transition-all outline-none text-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                    <input 
                      type="tel" 
                      required
                      placeholder="Phone Number"
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl py-3.5 pl-12 pr-4 transition-all outline-none text-sm"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                  <input 
                    type="email" 
                    required
                    placeholder="Email Address"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl py-3.5 pl-12 pr-4 transition-all outline-none text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Delivery Address</label>
                <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 flex gap-4">
                  <MapPin className="text-blue-600 shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-slate-800 text-sm">Official Hub Delivery</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{formData.address}</p>
                  </div>
                </div>
              </div>

              {/* Promo Code Section */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Apply Coupon</label>
                {!appliedCoupon ? (
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                          type="text" 
                          placeholder="Promo Code (e.g. MARUTI10)"
                          className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl py-3 pl-12 pr-4 transition-all outline-none text-sm uppercase font-bold"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                        />
                      </div>
                      <button 
                        type="button"
                        onClick={handleApplyCoupon}
                        className="bg-slate-800 text-white px-6 rounded-2xl font-bold hover:bg-slate-900 transition-all text-sm"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && <p className="text-xs text-red-500 font-bold ml-1">{couponError}</p>}
                  </div>
                ) : (
                  <div className="p-4 bg-blue-600 text-white rounded-2xl flex items-center justify-between animate-in slide-in-from-top-2">
                    <div className="flex items-center gap-3">
                      <Ticket size={20} />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest opacity-80">Coupon Applied</p>
                        <p className="font-black tracking-wider">{appliedCoupon.code}</p>
                      </div>
                    </div>
                    <button 
                      type="button"
                      onClick={handleRemoveCoupon}
                      className="text-xs font-bold underline hover:no-underline px-2 py-1 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Select Payment Method</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${paymentMethod === 'card' ? 'border-blue-600 bg-blue-50 shadow-lg shadow-blue-100/50' : 'border-slate-100 hover:border-blue-200 bg-white'}`}
                  >
                    <CreditCard className={paymentMethod === 'card' ? 'text-blue-600' : 'text-slate-400'} />
                    <span className="text-sm font-bold">Card</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${paymentMethod === 'upi' ? 'border-blue-600 bg-blue-50 shadow-lg shadow-blue-100/50' : 'border-slate-100 hover:border-blue-200 bg-white'}`}
                  >
                    <Smartphone className={paymentMethod === 'upi' ? 'text-blue-600' : 'text-slate-400'} />
                    <span className="text-sm font-bold">UPI</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('wallet')}
                    className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${paymentMethod === 'wallet' ? 'border-blue-600 bg-blue-50 shadow-lg shadow-blue-100/50' : 'border-slate-100 hover:border-blue-200 bg-white'}`}
                  >
                    <Wallet className={paymentMethod === 'wallet' ? 'text-blue-600' : 'text-slate-400'} />
                    <span className="text-sm font-bold">Wallet</span>
                  </button>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <input type="text" placeholder="Card Number" className="w-full p-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-500 outline-none text-sm transition-all" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" className="p-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-500 outline-none text-sm transition-all" />
                    <input type="text" placeholder="CVV" className="p-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-500 outline-none text-sm transition-all" />
                  </div>
                </div>
              )}
            </form>
          </section>

          <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Review Items ({items.length})</h3>
            <div className="divide-y divide-slate-100">
              {items.map(item => (
                <div key={item.id} className="py-4 flex justify-between items-center group">
                  <div className="flex gap-4 items-center">
                    <div className="relative overflow-hidden rounded-xl">
                      <img src={item.image} className="w-14 h-14 object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-800">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.quantity} x {item.unit}</p>
                    </div>
                  </div>
                  <p className="font-black text-slate-900">₹{item.price * item.quantity}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-24">
            <h3 className="text-xl font-black text-slate-800 mb-6">Order Summary</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-blue-600 font-bold">
                  <span>Discount</span>
                  <span>-₹{Math.round(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Delivery</span>
                <span>{deliveryFee === 0 ? <span className="text-blue-600 font-bold">FREE</span> : `₹${deliveryFee}`}</span>
              </div>
              <div className="pt-6 border-t border-slate-100 flex justify-between text-3xl font-black text-slate-900 tracking-tight">
                <span>Total</span>
                <span>₹{Math.round(total)}</span>
              </div>
            </div>
            <button 
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 hover:-translate-y-1 transition-all disabled:opacity-70 disabled:translate-y-0"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Processing...
                </div>
              ) : `Complete Order • ₹${Math.round(total)}`}
            </button>
            <p className="text-center text-[10px] text-slate-400 mt-6 uppercase font-bold tracking-[0.2em]">
              Secured by 256-bit SSL Encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;