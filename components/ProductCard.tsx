
import React from 'react';
import { Plus, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100">
      <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.originalPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        )}
      </div>

      <div className="flex-1">
        <p className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-bold text-gray-800 line-clamp-1 mb-1 group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-3">{product.unit}</p>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-black text-gray-900">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
          )}
        </div>
      </div>

      <button 
        onClick={() => onAddToCart(product)}
        className="w-full bg-white border-2 border-green-600 text-green-600 font-bold py-2 rounded-xl hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-2 text-sm shadow-sm"
      >
        <Plus size={18} />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
