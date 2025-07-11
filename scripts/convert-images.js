// Script to convert images to WebP format for better performance while keeping originals
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get the directory name correctly in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the source directory where your images are stored
const sourceDir = path.join(__dirname, '..', 'public', 'images');
// Define the output directory where WebP images will be saved (same as source to keep originals)
const outputDir = path.join(__dirname, '..', 'public', 'images');

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Source directory:', sourceDir);
console.log('Output directory:', outputDir);

// Function to convert an image to WebP format
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 }) // Adjust quality as needed (0-100)
      .toFile(outputPath);
    console.log(`Converted: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
}

// Function to process all images in a directory
async function processDirectory(directory) {
  try {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      const inputPath = path.join(directory, file);
      const stats = fs.statSync(inputPath);
      
      if (stats.isDirectory()) {
        // Recursively process subdirectories
        await processDirectory(inputPath);
      } else {
        // Check if the file is an image that should be converted
        const ext = path.extname(file).toLowerCase();
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
          const filename = path.basename(file, ext);
          const outputPath = path.join(outputDir, `${filename}.webp`);
          
          // Skip if WebP version already exists
          if (!fs.existsSync(outputPath)) {
            await convertToWebP(inputPath, outputPath);
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
  }
}

// Start the conversion process
console.log('Starting image conversion to WebP...');
processDirectory(sourceDir)
  .then(() => console.log('Image conversion completed!'))
  .catch(err => console.error('Error during conversion:', err));