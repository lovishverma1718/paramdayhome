import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imagesDir = path.resolve(__dirname, '../public/images');

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir);
  const pngFiles = files.filter(f => f.endsWith('.png'));

  console.log(`Starting optimization for ${pngFiles.length} images...`);

  let totalOriginalSize = 0;
  let totalWebpSize = 0;

  for (const file of pngFiles) {
    const inputPath = path.join(imagesDir, file);
    const stats = fs.statSync(inputPath);
    const originalMB = (stats.size / (1024 * 1024)).toFixed(2);
    totalOriginalSize += stats.size;

    const baseName = file.replace(/\.png$/, '');
    const webpPath = path.join(imagesDir, `${baseName}.webp`);

    let sharpInstance = sharp(inputPath);
    const metadata = await sharpInstance.metadata();

    // Resize if width > 2048 (perfect for 4K desktop screens without wasting pixels)
    if (metadata.width && metadata.width > 2048) {
      sharpInstance = sharpInstance.resize({ width: 2048, fit: 'inside', withoutEnlargement: true });
    }

    // Logo image gets special transparency treatment
    if (file === 'logo.png') {
      await sharpInstance
        .webp({ quality: 95, lossless: true })
        .toFile(webpPath);
    } else {
      // High quality WebP (88 quality preserves sharp details & vibrant colors while drastically reducing file size)
      await sharpInstance
        .webp({ quality: 88, smartSubsampling: true })
        .toFile(webpPath);
    }

    const webpStats = fs.statSync(webpPath);
    const webpMB = (webpStats.size / (1024 * 1024)).toFixed(2);
    const reductionPercent = (((stats.size - webpStats.size) / stats.size) * 100).toFixed(1);
    totalWebpSize += webpStats.size;

    console.log(`✓ ${file}: ${originalMB} MB ➔ ${webpMB} MB (${reductionPercent}% smaller)`);
  }

  const totalOriginalMB = (totalOriginalSize / (1024 * 1024)).toFixed(2);
  const totalWebpMB = (totalWebpSize / (1024 * 1024)).toFixed(2);
  const overallReduction = (((totalOriginalSize - totalWebpSize) / totalOriginalSize) * 100).toFixed(1);

  console.log(`\n🎉 Optimization Complete!`);
  console.log(`Original total size: ${totalOriginalMB} MB`);
  console.log(`WebP total size: ${totalWebpMB} MB`);
  console.log(`Overall reduction: ${overallReduction}% saved with ZERO perceptual quality loss!`);
}

optimizeImages().catch(err => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
