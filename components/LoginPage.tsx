
import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';

interface LoginPageProps {
  onLogin: (name: string, email: string) => void;
  onSwitchToSignup: () => void;
  onBack: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onSwitchToSignup, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = email.split('@')[0];
    onLogin(name.charAt(0).toUpperCase() + name.slice(1), email);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 flex justify-center items-center">
      <div className="bg-white w-full max-w-md rounded-[3rem] shadow-2xl shadow-blue-100/50 p-8 md:p-12 border border-slate-50">
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <h1 className="text-3xl font-black flex items-center justify-center tracking-tight">
              <span className="text-blue-700">Maruti</span>
              <span className="text-blue-400 italic">fresh</span>
            </h1>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Welcome Back</h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">Login to access your bespoke orders</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
              <input 
                type="email" 
                required
                className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-sm font-medium"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
              <button type="button" className="text-xs font-bold text-blue-600 hover:text-blue-700">Forgot?</button>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
              <input 
                type="password" 
                required
                className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-sm font-medium"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2"
          >
            Login to Account <ArrowRight size={20} />
          </button>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-slate-400 font-bold tracking-widest">Secure Connect</span></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors text-sm font-bold text-slate-600">
            <Chrome size={18} className="text-blue-500" /> Google
          </button>
          <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors text-sm font-bold text-slate-600">
            <Github size={18} className="text-slate-800" /> Github
          </button>
        </div>

        <p className="text-center mt-10 text-sm text-slate-500 font-medium">
          New to Marutifresh? 
          <button onClick={onSwitchToSignup} className="ml-1 text-blue-600 font-bold hover:underline">Create profile</button>
        </p>
        
        <button onClick={onBack} className="w-full mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">
          Return to Selection
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
