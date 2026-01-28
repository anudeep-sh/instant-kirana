
import React from 'react';
import { Plus, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-3xl p-5 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 flex flex-col border-2 border-gray-50 hover:border-blue-100">
      <div className="relative aspect-square mb-5 overflow-hidden rounded-2xl bg-gray-50 shadow-inner">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg shadow-red-200 uppercase tracking-widest">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Save
          </div>
        )}
        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors pointer-events-none"></div>
      </div>

      <div className="flex-1">
        <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1.5 opacity-70">
          {product.category}
        </p>
        <h3 className="text-base font-black text-gray-900 line-clamp-1 mb-1 tracking-tight group-hover:text-blue-600 transition-colors italic">
          {product.name}
        </h3>
        <p className="text-xs font-bold text-gray-400 mb-4">{product.unit}</p>
        
        <div className="flex items-center gap-3 mb-5">
          <span className="text-2xl font-black text-gray-900 tracking-tighter">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through font-medium italic opacity-60">₹{product.originalPrice}</span>
          )}
        </div>
      </div>

      <button 
        onClick={() => onAddToCart(product)}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black py-3.5 rounded-2xl hover:from-red-500 hover:to-red-600 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-2 text-sm shadow-xl shadow-blue-100 uppercase tracking-widest"
      >
        <Plus size={18} className="stroke-[3px]" />
        Add to Bag
      </button>
    </div>
  );
};

export default ProductCard;
