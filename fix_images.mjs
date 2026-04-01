import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p = path.join(__dirname, 'src/views');
const viewFiles = fs.readdirSync(p).filter(f => f.endsWith('.vue'));

const getReplacement = (file) => {
  if (file === 'TCGView.vue') return '/pillars/tcg_card.png';
  if (file === 'RPGsView.vue') return '/pillars/rpg_book.png';
  if (file === 'ModelsView.vue') return '/pillars/model_figure.png';
  if (file === 'BoardGamesView.vue') return '/pillars/boardgame_box.png';
  return '/pillars/tcg_card.png';
};

viewFiles.forEach(file => {
  const filePath = path.join(p, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const replacement = getReplacement(file);
  content = content.replace(/https:\/\/lh3\.googleusercontent\.com\/aida-public\/[a-zA-Z0-9_-]+/g, replacement);
  fs.writeFileSync(filePath, content);
  console.log('Fixed ' + file);
});
