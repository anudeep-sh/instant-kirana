
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
  { code: 'KIRAN10', discount: 10, type: 'percent' },
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
    address: 'Plot no 102, First floor, Sukiran Apartments, Venkatagiri, Yousufguda, Hyderabad, Telangana 500045'
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
        <div className="bg-white p-12 rounded-3xl shadow-xl max-w-md mx-auto">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-600" size={48} />
          </div>
          <h2 className="text-3xl font-black text-gray-800 mb-2">Order Confirmed!</h2>
          <p className="text-gray-500 mb-8">Thank you, {formData.name.split(' ')[0]}! Your order is being packed for lightning-fast delivery from our Yousufguda hub.</p>
          <div className="animate-pulse text-green-600 font-bold">Redirecting you home...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-green-600 font-bold mb-8 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Shopping
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
              <ShieldCheck className="text-green-600" />
              Secure Checkout
            </h3>
            
            <form onSubmit={handlePayment} className="space-y-8">
              {/* Delivery Details */}
              <div className="space-y-4">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Contact Details</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors" size={18} />
                    <input 
                      type="text" 
                      required
                      placeholder="Full Name"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-green-500 rounded-2xl py-3.5 pl-12 pr-4 transition-all outline-none text-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors" size={18} />
                    <input 
                      type="tel" 
                      required
                      placeholder="Phone Number"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-green-500 rounded-2xl py-3.5 pl-12 pr-4 transition-all outline-none text-sm"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors" size={18} />
                  <input 
                    type="email" 
                    required
                    placeholder="Email Address"
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-green-500 rounded-2xl py-3.5 pl-12 pr-4 transition-all outline-none text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Delivery Address</label>
                <div className="p-4 bg-green-50 rounded-2xl border-2 border-green-100 flex gap-4">
                  <MapPin className="text-green-600 shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Official Hub Delivery</p>
                    <p className="text-sm text-gray-500">{formData.address}</p>
                  </div>
                </div>
              </div>

              {/* Promo Code Section */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Apply Coupon</label>
                {!appliedCoupon ? (
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          type="text" 
                          placeholder="Enter Promo Code (e.g. KIRAN10)"
                          className="w-full bg-gray-50 border-2 border-transparent focus:border-green-500 rounded-2xl py-3 pl-12 pr-4 transition-all outline-none text-sm uppercase font-bold"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                        />
                      </div>
                      <button 
                        type="button"
                        onClick={handleApplyCoupon}
                        className="bg-gray-800 text-white px-6 rounded-2xl font-bold hover:bg-gray-900 transition-all text-sm"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && <p className="text-xs text-red-500 font-bold ml-1">{couponError}</p>}
                  </div>
                ) : (
                  <div className="p-4 bg-green-600 text-white rounded-2xl flex items-center justify-between animate-in slide-in-from-top-2">
                    <div className="flex items-center gap-3">
                      <Ticket size={20} />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest opacity-80">Coupon Applied</p>
                        <p className="font-black">{appliedCoupon.code}</p>
                      </div>
                    </div>
                    <button 
                      type="button"
                      onClick={handleRemoveCoupon}
                      className="text-xs font-bold underline hover:no-underline"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Select Payment Method</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${paymentMethod === 'card' ? 'border-green-600 bg-green-50' : 'border-gray-100 hover:border-green-200'}`}
                  >
                    <CreditCard className={paymentMethod === 'card' ? 'text-green-600' : 'text-gray-400'} />
                    <span className="text-sm font-bold">Card</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${paymentMethod === 'upi' ? 'border-green-600 bg-green-50' : 'border-gray-100 hover:border-green-200'}`}
                  >
                    <Smartphone className={paymentMethod === 'upi' ? 'text-green-600' : 'text-gray-400'} />
                    <span className="text-sm font-bold">UPI</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('wallet')}
                    className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${paymentMethod === 'wallet' ? 'border-green-600 bg-green-50' : 'border-gray-100 hover:border-green-200'}`}
                  >
                    <Wallet className={paymentMethod === 'wallet' ? 'text-green-600' : 'text-gray-400'} />
                    <span className="text-sm font-bold">Wallet</span>
                  </button>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <input type="text" placeholder="Card Number" className="w-full p-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-green-500 outline-none text-sm" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" className="p-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-green-500 outline-none text-sm" />
                    <input type="text" placeholder="CVV" className="p-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-green-500 outline-none text-sm" />
                  </div>
                </div>
              )}
            </form>
          </section>

          <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Review Items ({items.length})</h3>
            <div className="divide-y divide-gray-100">
              {items.map(item => (
                <div key={item.id} className="py-4 flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <img src={item.image} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <p className="font-bold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.quantity} x {item.unit}</p>
                    </div>
                  </div>
                  <p className="font-bold">₹{item.price * item.quantity}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-24">
            <h3 className="text-xl font-black text-gray-800 mb-6">Order Summary</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-green-600 font-bold">
                  <span>Discount ({appliedCoupon?.code})</span>
                  <span>-₹{Math.round(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-500">
                <span>Delivery</span>
                <span>{deliveryFee === 0 ? <span className="text-green-600 font-bold">FREE</span> : `₹${deliveryFee}`}</span>
              </div>
              <div className="pt-4 border-t flex justify-between text-2xl font-black text-gray-900">
                <span>Total</span>
                <span>₹{Math.round(total)}</span>
              </div>
            </div>
            <button 
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-green-600 text-white font-black py-5 rounded-2xl shadow-lg shadow-green-200 hover:bg-green-700 hover:-translate-y-1 transition-all disabled:opacity-70 disabled:translate-y-0"
            >
              {isProcessing ? 'Processing...' : `Pay ₹${Math.round(total)}`}
            </button>
            <p className="text-center text-[10px] text-gray-400 mt-6 uppercase font-bold tracking-widest">
              Secured by 256-bit SSL Encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;