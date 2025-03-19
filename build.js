import fs from 'fs';
import path from 'path';

// Files to copy
const filesToCopy = [
  'manifest.json',
  'background.js',
  'content.js',
  'icon.png'
];


// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy files
filesToCopy.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join('dist', file));
    console.log(`Copied ${file} to dist folder`);
  } else {
    console.log(`Warning: ${file} not found`);
  }
});

console.log('Build completed!'); 