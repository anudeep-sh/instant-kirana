
import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, User, Phone } from 'lucide-react';

interface SignupPageProps {
  onSignup: (name: string, email: string) => void;
  onSwitchToLogin: () => void;
  onBack: () => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onSignup, onSwitchToLogin, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup(formData.name, formData.email);
  };

  return (
    <div className="container mx-auto px-4 py-12 flex justify-center items-center">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl shadow-green-100/50 p-8 md:p-12 border border-gray-50">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black flex items-center justify-center mb-4">
            <span className="text-green-600">Instant</span>
            <span className="text-orange-500">Kirana</span>
          </h1>
          <h2 className="text-2xl font-bold text-gray-800">Join the Family</h2>
          <p className="text-gray-500 text-sm mt-2">Get fresh groceries delivered in minutes</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors" size={18} />
              <input 
                type="text" 
                required
                className="w-full bg-gray-50 border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-green-500 transition-all outline-none text-sm"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors" size={18} />
              <input 
                type="email" 
                required
                className="w-full bg-gray-50 border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-green-500 transition-all outline-none text-sm"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors" size={18} />
              <input 
                type="tel" 
                required
                className="w-full bg-gray-50 border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-green-500 transition-all outline-none text-sm"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors" size={18} />
              <input 
                type="password" 
                required
                className="w-full bg-gray-50 border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-green-500 transition-all outline-none text-sm"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              className="w-full bg-green-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-green-200 hover:bg-green-700 hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2"
            >
              Sign Up <ArrowRight size={20} />
            </button>
          </div>
        </form>

        <p className="text-center mt-8 text-sm text-gray-500">
          Already have an account? 
          <button onClick={onSwitchToLogin} className="ml-1 text-green-600 font-bold hover:underline">Login here</button>
        </p>

        <button onClick={onBack} className="w-full mt-6 text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-gray-600">
          Back to Shop
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
