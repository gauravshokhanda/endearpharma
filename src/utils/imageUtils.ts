/**
 * Utility functions for image optimization
 */

/**
 * Checks if a WebP version of the image exists and returns the appropriate path
 * @param src Original image source path
 * @returns The optimized image path (WebP if available)
 */
export const getOptimizedImagePath = (src: string): string => {
  // If it's an external URL, return as is
  if (src.startsWith('http')) {
    return src;
  }

  // Special case handling for known problematic images
  if (src.includes('neurosachet.png')) {
    console.log('imageUtils: Optimizing neurosachet.png path');
    return '/images/neurosachet.png';
  }
  
  // Special case for montedear.png
  if (src.includes('montedear.png')) {
    console.log('imageUtils: Optimizing montedear.png path');
    return '/images/montedear.png';
  }

  // If it's already a WebP image, return as is
  if (src.toLowerCase().endsWith('.webp')) {
    return src;
  }

  // Handle case where path has no extension
  if (!src.includes('.')) {
    // Try WebP first if browser supports it
    if (typeof window !== 'undefined' && 'HTMLPictureElement' in window) {
      return `${src}.webp`;
    }
    // Otherwise default to PNG
    return `${src}.png`;
  }

  // For local images, try to use WebP version if browser supports it
  if (typeof window !== 'undefined' && 'HTMLPictureElement' in window) {
    const basePath = src.substring(0, src.lastIndexOf('.'));
    const webpPath = `${basePath}.webp`;
    return webpPath;
  }
  
  // Fallback to original format for browsers without WebP support
  return src;
};

/**
 * Preloads an image to improve perceived performance
 * @param src Image source to preload
 */
export const preloadImage = (src: string): void => {
  const img = new Image();
  img.src = getOptimizedImagePath(src);
};

/**
 * Preloads multiple images in the background
 * @param srcs Array of image sources to preload
 */
export const preloadImages = (srcs: string[]): void => {
  srcs.forEach(src => preloadImage(src));
};

/**
 * Gets image dimensions asynchronously
 * @param src Image source
 * @returns Promise with width and height
 */
export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height
      });
    };
    img.onerror = reject;
    img.src = src;
  });
};