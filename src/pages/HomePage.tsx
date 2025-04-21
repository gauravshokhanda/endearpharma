import React from 'react';
import { ArrowRight, Award, Shield, HeartPulse, Pill } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { companyInfo } from '../data/companyInfo';

const HomePage: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Quality Medicines for a Healthier Tomorrow"
        subtitle="Committed to developing innovative, effective, and affordable pharmaceutical solutions for better health outcomes."
        buttonText="Explore Our Products"
        buttonLink="/products"
        imageSrc="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg"
      />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Why Choose MediCure</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              We are committed to excellence in pharmaceutical research, development, and manufacturing to provide you with the highest quality healthcare products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Shield className="text-secondary-red" size={36} />}
              title="Quality Assured"
              description="All our products undergo rigorous testing to ensure safety, efficacy, and quality."
            />
            <FeatureCard
              icon={<HeartPulse className="text-secondary-orange" size={36} />}
              title="Health Focused"
              description="Developed with patient well-being as the primary consideration."
            />
            <FeatureCard
              icon={<Award className="text-secondary-yellow" size={36} />}
              title="Industry Certified"
              description="Meeting and exceeding international pharmaceutical standards."
            />
            <FeatureCard
              icon={<Pill className="text-secondary-red" size={36} />}
              title="Research Backed"
              description="Products developed through extensive scientific research and clinical trials."
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-2">Featured Products</h2>
              <p className="text-text-light">Discover our most popular healthcare solutions</p>
            </div>
            <Link to="/products" className="text-secondary-red font-medium hidden md:flex items-center hover:text-secondary-red/80 transition-colors">
              View All Products
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link 
              to="/products" 
              className="inline-flex items-center px-5 py-2 bg-secondary-red text-white rounded-md hover:bg-secondary-red/90 transition-colors"
            >
              View All Products
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-text-dark mb-4">About {companyInfo.name}</h2>
              <p className="text-text-light mb-6">
                {companyInfo.about.story.split('.')[0]}. {companyInfo.about.story.split('.')[1]}.
              </p>
              
              <div className="mb-8">
                <h3 className="font-semibold text-text-dark mb-2">Our Mission</h3>
                <p className="text-text-light">{companyInfo.about.mission}</p>
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center px-6 py-3 bg-secondary-red text-white rounded-md hover:bg-secondary-red/90 transition-colors"
              >
                Learn More About Us
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg" 
                  alt="About MediCure Pharmaceuticals" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-secondary-red to-secondary-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Our Products?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our team of healthcare professionals is ready to assist you with any questions about our medicines and their usage.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-3 bg-white text-secondary-red rounded-md hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold text-text-dark mb-2">{title}</h3>
    <p className="text-text-light text-sm">{description}</p>
  </div>
);

export default HomePage;