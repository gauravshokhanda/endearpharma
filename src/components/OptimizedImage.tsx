import React, { useState, useEffect } from 'react';
import { getOptimizedImagePath } from '../utils/imageUtils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  objectFit = 'contain',
  priority = false,
  placeholder = 'empty',
}) => {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [isInView, setIsInView] = useState(priority);
  
  useEffect(() => {
    // If priority is true, we don't need to observe
    if (priority) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' } // Start loading when image is 200px from viewport
    );

    const currentRef = document.getElementById(`image-${src.replace(/\W/g, '')}`);
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [src, priority]);

  // Get optimized image source (WebP if available)
  const getOptimizedSrc = () => {
    return getOptimizedImagePath(src);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const imageStyles: React.CSSProperties = {
    objectFit,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : '100%',
  };

  const placeholderStyles: React.CSSProperties = {
    backgroundColor: placeholder === 'blur' ? '#f0f0f0' : 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: isLoaded ? 0 : 1,
    transition: 'opacity 0.3s ease-in-out',
  };

  // Get original image path (without .webp extension)
  const getOriginalSrc = () => {
    if (src.toLowerCase().endsWith('.webp')) {
      // If the source is already WebP, try to get the original format
      return src.substring(0, src.lastIndexOf('.')) + '.png';
    }
    return src;
  };

  return (
    <div 
      className={`relative ${className}`}
      id={`image-${src.replace(/\W/g, '')}`}
      style={{ overflow: 'hidden' }}
    >
      {placeholder === 'blur' && <div style={placeholderStyles} />}
      
      {(isInView || priority) && (
        <picture>
          {/* WebP source */}
          <source srcSet={getOptimizedSrc()} type="image/webp" />
          {/* Original format fallback */}
          <source srcSet={getOriginalSrc()} type="image/png" />
          
          {/* Fallback image */}
          <img
            src={getOriginalSrc()}
            alt={alt}
            onLoad={handleLoad}
            style={imageStyles}
            loading={priority ? 'eager' : 'lazy'}
            width={width}
            height={height}
            decoding="async"
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;