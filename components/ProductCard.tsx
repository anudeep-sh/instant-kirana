
import React from 'react';
import { Plus, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-3xl p-5 hover:shadow-[0_20px_60px_rgba(30,64,175,0.12)] transition-all duration-500 flex flex-col border border-slate-100">
      <div className="relative aspect-[4/5] mb-5 overflow-hidden rounded-2xl bg-slate-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1)"
        />
        
        <button className="absolute top-3 right-3 p-2.5 bg-white/90 backdrop-blur-md rounded-xl text-slate-400 hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-500 shadow-sm z-10">
          <Heart size={18} />
        </button>

        {product.originalPrice && (
          <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-500 delay-75 z-10">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        )}
        
        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors duration-500 pointer-events-none"></div>
      </div>

      <div className="flex-1 px-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform duration-300"></div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              {product.category}
            </p>
          </div>
          <span className="text-[9px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">
            {product.brand}
          </span>
        </div>
        
        <h3 className="text-base font-bold text-slate-800 mb-1 group-hover:text-blue-700 transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-xs text-slate-400 font-medium mb-4">{product.unit}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-[10px] text-slate-300 line-through font-bold">₹{product.originalPrice}</span>
            )}
          </div>
          
          <button 
            onClick={() => onAddToCart(product)}
            className="p-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all transform hover:scale-110 active:scale-95 shadow-lg shadow-blue-100"
          >
            <Plus size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;