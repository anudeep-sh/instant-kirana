
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
      <div className="bg-white w-full max-w-md rounded-[3rem] shadow-2xl shadow-blue-100/50 p-8 md:p-12 border border-slate-50">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black flex items-center justify-center mb-4 tracking-tight">
            <span className="text-blue-700">Maruti</span>
            <span className="text-blue-400 italic">fresh</span>
          </h1>
          <h2 className="text-2xl font-bold text-slate-800">Elite Membership</h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">Experience the finest logistics in Hyderabad</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
              <input 
                type="text" 
                required
                className="w-full bg-slate-50 border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-sm font-medium"
                placeholder="Ex. Adrian Sterling"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
              <input 
                type="email" 
                required
                className="w-full bg-slate-50 border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-sm font-medium"
                placeholder="adrian@estate.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Mobile Connection</label>
            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
              <input 
                type="tel" 
                required
                className="w-full bg-slate-50 border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-sm font-medium"
                placeholder="+91 81439 00450"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Secure Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
              <input 
                type="password" 
                required
                className="w-full bg-slate-50 border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-sm font-medium"
                placeholder="Choose a strong shield"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <div className="pt-6">
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2"
            >
              Create Account <ArrowRight size={20} />
            </button>
          </div>
        </form>

        <p className="text-center mt-8 text-sm text-slate-500 font-medium">
          Already curated a profile? 
          <button onClick={onSwitchToLogin} className="ml-1 text-blue-600 font-bold hover:underline">Login here</button>
        </p>

        <button onClick={onBack} className="w-full mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">
          Return to Shop
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
