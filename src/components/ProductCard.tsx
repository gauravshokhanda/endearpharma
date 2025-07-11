import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Product } from '../data/products';
import OptimizedImage from './OptimizedImage';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <OptimizedImage 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full transition-transform duration-300 hover:scale-105"
          objectFit="contain"
        />
      </div>
      <div className="p-5">
        <div className="inline-block px-3 py-1 bg-secondary-yellow/20 text-secondary-orange rounded-full text-xs font-medium mb-3">
          {product.category}
        </div>
        <h3 className="text-lg font-semibold text-text-dark mb-2">{product.name}</h3>
        <p className="text-text-light text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <Link 
          to={`/products/${product.id}`}
          className="inline-flex items-center text-secondary-red hover:text-secondary-red/80 font-medium"
        >
          View Details
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;