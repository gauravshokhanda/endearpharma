import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search, Filter } from 'lucide-react';
import Hero from '../components/Hero';

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || '');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Extract unique categories
  const categories = Array.from(new Set(products.map(p => p.category)));

  // Filter products whenever search term or category changes
  useEffect(() => {
    let filtered = products;
    
    // Filter by category if selected
    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory]);

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory) {
      setSearchParams({ category: selectedCategory });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory, setSearchParams]);

  // Set selected category from URL parameter on load
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Our Products"
        subtitle="Explore our range of high-quality pharmaceutical products designed to improve health outcomes and enhance well-being."
        imageSrc="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg"
        alignment="center"
      />

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

        {/* Search and Filter */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="col-span-1 md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-red/50 focus:border-secondary-red outline-none"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-red/50 focus:border-secondary-red outline-none appearance-none"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-dark font-medium mb-2">No products found matching your criteria.</p>
            <p className="text-text-light">Try changing your search term or filter.</p>
          </div>
        )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;