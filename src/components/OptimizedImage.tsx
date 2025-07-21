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
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  
  // Initialize image source on component mount
  useEffect(() => {
    // Handle special cases for known problematic images
    if (src.includes('neurosachet.png')) {
      console.log('Component mount: Using neurosachet.png');
      setImgSrc('/images/neurosachet.png');
    } else {
      setImgSrc(src);
    }
  }, [src]);
  
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

    const currentRef = document.getElementById(`image-${imgSrc?.replace(/\W/g, '') || ''}`);
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [imgSrc, priority]);

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

  // Get original image path with better fallback handling
  const getOriginalSrc = (imageSrc: string = src): string => {
    // Handle null or undefined src
    if (!imageSrc) {
      console.error('getOriginalSrc received null or undefined src');
      return '/images/placeholder.png';
    }
    
    if (imageSrc.toLowerCase().endsWith('.webp')) {
      // If the source is already WebP, try to get the original format
      return imageSrc.substring(0, imageSrc.lastIndexOf('.')) + '.png';
    }
    // If the source is PNG but only WebP exists, try to use WebP
    if (imageSrc.toLowerCase().endsWith('.png')) {
      const webpPath = imageSrc.substring(0, imageSrc.lastIndexOf('.')) + '.webp';
      return webpPath;
    }
    // If no extension, try to append common image extensions
    if (!imageSrc.includes('.')) {
      return `${imageSrc}.png`;
    }
    // Special case for specific images that need redirection
    if (imageSrc.includes('nurodearlcc.png')) {
      console.log('getOriginalSrc: Using sachet.png for nurodearlcc.png');
      return '/images/sachet.png';
    }
    
    // Special case for neurosachet.png
    if (imageSrc.includes('neurosachet.png')) {
      console.log('getOriginalSrc: Using direct path for neurosachet.png');
      return '/images/neurosachet.png';
    }
    
    // Special case for montedear.png
    if (imageSrc.includes('montedear.png')) {
      console.log('getOriginalSrc: Using direct path for montedear.png');
      return '/images/montedear.png';
    }
    
    // If it's an external URL, return as is
    if (imageSrc.startsWith('http')) {
      return imageSrc;
    }
    
    return imageSrc;
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
            onError={(e) => {
              // If image fails to load, try the other format as fallback
              const imgElement = e.currentTarget;
              const currentSrc = imgElement.src;
              console.log('Image failed to load:', currentSrc);
              
              // Try different format first
              if (currentSrc.endsWith('.png')) {
                console.log('Trying WebP format instead');
                imgElement.src = currentSrc.replace('.png', '.webp');
              } else if (currentSrc.endsWith('.webp')) {
                console.log('Trying PNG format instead');
                imgElement.src = currentSrc.replace('.webp', '.png');
              }
              
              // If the image contains neurosachet, try a specific fallback
              if (currentSrc.includes('neurosachet')) {
                console.log('Trying sachet fallback for neurosachet');
                // Use a known working image as fallback
                imgElement.src = '/images/sachet.png';
              }
            }}
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