import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getOptimizedImagePath, preloadImage } from '../utils/imageUtils';

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  alignment?: 'left' | 'center' | 'right';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageSrc = 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg',
  alignment = 'left'
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  const textContainerClasses = `relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col ${alignmentClasses[alignment]}`;

  // Preload the image when component mounts
  useEffect(() => {
    if (imageSrc) {
      preloadImage(imageSrc);
    }
  }, [imageSrc]);

  // Get optimized image path
  const optimizedImageSrc = getOptimizedImagePath(imageSrc);

  return (
    <div className="relative w-full bg-gradient-to-r from-secondary-red/10 to-secondary-yellow/10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center">
        {/* Preload the image */}
        <link rel="preload" as="image" href={optimizedImageSrc} />
        
        {/* Use a div with background image for better performance */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{ 
            backgroundImage: `url(${optimizedImageSrc})`,
            backgroundSize: 'cover',
            opacity: 1,
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/30"></div>
      </div>

      {/* Content */}
      <div className={textContainerClasses}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md max-w-xl mb-4 animate-slide-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white drop-shadow-md max-w-lg mb-8 animate-slide-up animation-delay-100">
            {subtitle}
          </p>
        )}
        {buttonText && buttonLink && (
          <Link 
            to={buttonLink}
            className="inline-flex items-center px-6 py-3 bg-secondary-red hover:bg-secondary-red/90 text-white rounded-md transition-colors animate-slide-up animation-delay-200"
          >
            {buttonText}
            <ArrowRight size={18} className="ml-2" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;