
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
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl shadow-green-100/50 p-8 md:p-12 border border-gray-50">
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <h1 className="text-3xl font-black flex items-center justify-center">
              <span className="text-green-600">e</span>
              <span className="text-orange-500">cart</span>
            </h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 text-sm mt-2">Login to access your orders and fresh deals</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors" size={20} />
              <input 
                type="email" 
                required
                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-green-500 transition-all outline-none text-sm"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Password</label>
              <button type="button" className="text-xs font-bold text-green-600 hover:text-green-700">Forgot?</button>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors" size={20} />
              <input 
                type="password" 
                required
                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-green-500 transition-all outline-none text-sm"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-green-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-green-200 hover:bg-green-700 hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2"
          >
            Login <ArrowRight size={20} />
          </button>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100"></span></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-gray-400 font-bold tracking-widest">Or continue with</span></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors text-sm font-semibold">
            <Chrome size={18} /> Google
          </button>
          <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors text-sm font-semibold">
            <Github size={18} /> Github
          </button>
        </div>

        <p className="text-center mt-10 text-sm text-gray-500">
          New to ecart? 
          <button onClick={onSwitchToSignup} className="ml-1 text-green-600 font-bold hover:underline">Create an account</button>
        </p>
        
        <button onClick={onBack} className="w-full mt-6 text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-gray-600">
          Back to Shop
        </button>
      </div>
    </div>
  );
};

export default LoginPage;