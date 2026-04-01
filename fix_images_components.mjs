import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirs = [
  path.join(__dirname, 'src/components'),
  path.join(__dirname, 'src/components/catalog')
];

let files = [];
dirs.forEach(d => {
  if (fs.existsSync(d)) {
    fs.readdirSync(d).forEach(f => {
      if (f.endsWith('.vue')) {
        files.push(path.join(d, f));
      }
    });
  }
});

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  content = content.replace(/https:\/\/lh3\.googleusercontent\.com\/aida-public\/[a-zA-Z0-9_-]+/g, '/pillars/tcg_card.png');
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed ' + filePath);
  }
});
