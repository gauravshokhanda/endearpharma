import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Pill } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/ENDEAR.png" alt="Endearpharma Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" isActive={isActive('/')}>Home</NavLink>
          <NavLink to="/products" isActive={isActive('/products')}>Products</NavLink>
          <NavLink to="/about" isActive={isActive('/about')}>About</NavLink>

          <NavLink to="/contact" isActive={isActive('/contact')}>Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="text-secondary-red" />
          ) : (
            <Menu size={24} className="text-secondary-red" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 px-4">
            <MobileNavLink to="/" isActive={isActive('/')}>Home</MobileNavLink>
            <MobileNavLink to="/products" isActive={isActive('/products')}>Products</MobileNavLink>
            <MobileNavLink to="/about" isActive={isActive('/about')}>About</MobileNavLink>

            <MobileNavLink to="/contact" isActive={isActive('/contact')}>Contact</MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, isActive, children }) => (
  <Link
    to={to}
    className={`font-medium transition-colors duration-200 ${
      isActive 
        ? 'text-secondary-red relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-secondary-red' 
        : 'text-text-dark hover:text-secondary-red'
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ to, isActive, children }) => (
  <Link
    to={to}
    className={`text-lg py-2 font-medium transition-colors duration-200 ${
      isActive ? 'text-secondary-red' : 'text-text-dark'
    }`}
  >
    {children}
  </Link>
);

export default Header;