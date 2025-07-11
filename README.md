# Endear Pharma Website

## Image Optimization Strategy

This project implements a comprehensive image optimization strategy to improve loading performance while maintaining compatibility across all browsers.

### Key Features

1. **WebP Conversion**
   - All PNG/JPG images are automatically converted to WebP format using the `convert-images.js` script
   - Original images are preserved for fallback support
   - WebP typically reduces file size by 25-35% compared to PNG

2. **Responsive Image Loading**
   - The `OptimizedImage` component uses the HTML `<picture>` element
   - Automatically serves WebP to supporting browsers and falls back to original formats for others
   - Implements lazy loading for images outside the viewport

3. **Performance Optimizations**
   - Lazy loading of non-critical images
   - Image preloading for critical content
   - Placeholder support during image loading
   - Proper image sizing and responsive handling

### Usage

#### Converting Images to WebP

Run the following command to convert all images in the `public/images` directory to WebP format:

```bash
npm run optimize-images
```

This will create WebP versions of all PNG/JPG images while preserving the originals.

#### Using the OptimizedImage Component

```jsx
import OptimizedImage from './components/OptimizedImage';

// Basic usage
<OptimizedImage 
  src="/images/product.png" 
  alt="Product" 
/>

// With additional options
<OptimizedImage 
  src="/images/hero.png" 
  alt="Hero Image" 
  className="w-full h-64"
  objectFit="cover"
  priority={true} // Loads immediately without lazy loading
  placeholder="blur" // Shows a placeholder while loading
/>
```

### Browser Support

The optimization strategy provides the best experience in modern browsers that support WebP (Chrome, Firefox, Edge), while ensuring compatibility with older browsers through automatic format fallback.