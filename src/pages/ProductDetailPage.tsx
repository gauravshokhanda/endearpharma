import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, Product } from '../data/products';
import { ArrowLeft, AlertCircle as CircleAlert, Pill, List, ChevronRight } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'uses' | 'dosage' | 'sideEffects'>('overview');
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API call with a slight delay
    const timer = setTimeout(() => {
      if (id) {
        const foundProduct = products.find(p => p.id === parseInt(id));
        setProduct(foundProduct || null);
      }
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-16 w-16 bg-secondary-red/30 rounded-full"></div>
          <div className="mt-4 text-text-light">Loading product details...</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-red-50 p-8 rounded-lg max-w-2xl mx-auto">
            <CircleAlert size={48} className="text-secondary-red mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-text-dark mb-4">Product Not Found</h2>
            <p className="text-text-light mb-6">
              The product you are looking for does not exist or has been removed.
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center px-6 py-3 bg-secondary-red text-white rounded-md hover:bg-secondary-red/90 transition-colors"
            >
              Browse All Products
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center mb-6 text-sm">
          <Link to="/products" className="flex items-center text-secondary-red">
            <ArrowLeft size={16} className="mr-1" />
            Back to Products
          </Link>
          <span className="mx-2 text-text-lighter">/</span>
          <span className="text-text-light">{product.category}</span>
          <span className="mx-2 text-text-lighter">/</span>
          <span className="text-text-dark font-medium">{product.name}</span>
        </div>

        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <span className="inline-block px-3 py-1 bg-secondary-yellow/20 text-secondary-orange rounded-full text-xs font-medium mb-4">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">{product.name}</h1>
            <p className="text-text-light mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-text-dark mb-2">Composition</h3>
              <p className="text-text-light">{product.composition}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-secondary-red text-white rounded-md hover:bg-secondary-red/90 transition-colors"
              >
                Inquire About This Product
              </Link>
              
              <button 
                onClick={() => navigate(-1)}
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-text-dark rounded-md hover:bg-gray-200 transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Tabs */}
          <div className="flex flex-wrap border-b">
            <TabButton
              active={activeTab === 'overview'}
              onClick={() => setActiveTab('overview')}
              icon={<Pill size={18} />}
            >
              Overview
            </TabButton>
            <TabButton
              active={activeTab === 'uses'}
              onClick={() => setActiveTab('uses')}
              icon={<List size={18} />}
            >
              Uses
            </TabButton>
            <TabButton
              active={activeTab === 'dosage'}
              onClick={() => setActiveTab('dosage')}
              icon={<Pill size={18} />}
            >
              Dosage
            </TabButton>
            <TabButton
              active={activeTab === 'sideEffects'}
              onClick={() => setActiveTab('sideEffects')}
              icon={<CircleAlert size={18} />}
            >
              Side Effects
            </TabButton>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-xl font-semibold text-text-dark mb-4">Product Overview</h3>
                <p className="text-text-light mb-4">{product.description}</p>
                <p className="text-text-light">
                  {product.name} is manufactured following the highest quality standards and has undergone rigorous testing to ensure safety and efficacy.
                </p>
              </div>
            )}

            {activeTab === 'uses' && (
              <div>
                <h3 className="text-xl font-semibold text-text-dark mb-4">Uses & Indications</h3>
                <p className="text-text-light mb-3">
                  {product.name} is indicated for the following conditions:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-text-light">
                  {product.uses.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'dosage' && (
              <div>
                <h3 className="text-xl font-semibold text-text-dark mb-4">Recommended Dosage</h3>
                <p className="text-text-light mb-3">
                  Always follow the guidance of your healthcare provider when taking {product.name}.
                </p>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                  <p className="text-text-dark">{product.dosage}</p>
                </div>
                <p className="text-text-light mt-3 text-sm">
                  <strong>Note:</strong> Dosage may be adjusted by your healthcare provider based on your specific condition and response to treatment.
                </p>
              </div>
            )}

            {activeTab === 'sideEffects' && (
              <div>
                <h3 className="text-xl font-semibold text-text-dark mb-4">Possible Side Effects</h3>
                <p className="text-text-light mb-3">
                  Like all medications, {product.name} may cause side effects, although not everybody gets them. Contact your healthcare provider if you experience any of the following:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-text-light">
                  {product.sideEffects.map((effect, index) => (
                    <li key={index}>{effect}</li>
                  ))}
                </ul>
                <div className="mt-4 bg-yellow-50 p-4 rounded-md border border-yellow-100">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> This list may not include all possible side effects. If you notice any side effects not listed here, please contact your healthcare provider.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, children, icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center py-3 px-5 text-sm font-medium transition-colors ${
      active
        ? 'text-secondary-red border-b-2 border-secondary-red bg-secondary-red/5'
        : 'text-text-light hover:text-secondary-red hover:bg-secondary-red/5'
    }`}
  >
    <span className="mr-2">{icon}</span>
    {children}
  </button>
);

export default ProductDetailPage;