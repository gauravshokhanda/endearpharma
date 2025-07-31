import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/ENDEAR.png" alt="Endearpharma Logo" className="h-10 w-auto" />
            </div>
            <p className="text-text-light mb-4 text-sm">
              {companyInfo.tagline}
            </p>
            <div className="flex space-x-4">
              <a href={companyInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-secondary-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href={companyInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-secondary-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href={companyInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-secondary-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href={companyInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-secondary-red transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-text-dark mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-text-light hover:text-secondary-red transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-text-light hover:text-secondary-red transition-colors text-sm">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-text-light hover:text-secondary-red transition-colors text-sm">About Us</Link>
              </li>

              <li>
                <Link to="/contact" className="text-text-light hover:text-secondary-red transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>



          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-text-dark mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-secondary-red shrink-0 mt-1" />
                <span className="text-text-light text-sm">{companyInfo.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-secondary-red shrink-0" />
                <span className="text-text-light text-sm">{companyInfo.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-secondary-red shrink-0" />
                <span className="text-text-light text-sm">{companyInfo.contact.email}</span>
              </li>
              <li className="text-text-light text-sm pt-2">
                <strong>Hours:</strong> {companyInfo.contact.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center text-text-lighter text-sm">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;