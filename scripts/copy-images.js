import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const targetDir = path.join(rootDir, 'public', 'images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(rootDir);
const pngFiles = files.filter(f => f.endsWith('.png'));

console.log(`Found ${pngFiles.length} PNG images in root.`);

pngFiles.forEach(file => {
  const src = path.join(rootDir, file);
  // Normalize filenames if needed, e.g. "21 (1).png" -> "21-1.png" as well as keeping original copy
  let destName = file;
  if (file === '21 (1).png') {
    destName = '21-1.png';
  }
  const dest = path.join(targetDir, destName);
  fs.copyFileSync(src, dest);
  console.log(`Copied ${file} -> ${destName}`);
});

console.log('Image setup complete!');
