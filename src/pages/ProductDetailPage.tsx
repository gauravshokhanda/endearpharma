import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, Product } from '../data/products';
import { ArrowLeft, AlertCircle as CircleAlert, Pill, List, ChevronRight } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'uses' | 'indications'>('overview');
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
            <OptimizedImage
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-[400px] bg-white mx-auto"
              objectFit="contain"
              priority={true}
              height={400}
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
              active={activeTab === 'indications'}
              onClick={() => setActiveTab('indications')}
              icon={<List size={18} />}
            >
              Indications
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

            {activeTab === 'indications' && (
              <div>
                <h3 className="text-xl font-semibold text-text-dark mb-4">Indications</h3>
                {product.indications && product.indications.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-2 text-text-light">
                    {product.indications.map((indication, index) => (
                      <li key={index}>{indication}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-text-light">No specific indications listed for this product.</p>
                )}
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
    className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium transition-colors
      ${active ? 'text-secondary-red border-b-2 border-secondary-red' : 'text-text-light hover:text-text-dark'}`}
    onClick={onClick}
  >
    {icon}
    <span>{children}</span>
  </button>
);

export default ProductDetailPage;