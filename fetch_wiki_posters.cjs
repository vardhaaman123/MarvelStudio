const fs = require('fs');
const https = require('https');
const path = require('path');

const mainJsPath = path.join(__dirname, 'main.js');
let mainJs = fs.readFileSync(mainJsPath, 'utf8');

if (!fs.existsSync('posters')) {
  fs.mkdirSync('posters');
}

// Extract all movies from main.js
const moviesRegex = /{ id: (\d+), title: "([^"]+)",[^}]*poster: "([^"]+)"/g;
let match;
let movies = [];

while ((match = moviesRegex.exec(mainJs)) !== null) {
  movies.push({
    id: match[1],
    title: match[2],
    posterUrl: match[3],
    originalString: match[0]
  });
}

const headers = { 'User-Agent': 'MarvelFanApp/1.0 (test@example.com)' };

async function fetchWikiImage(title) {
  let searchTitle = encodeURIComponent(title.replace(/ /g, '_'));
  
  if (title === 'The Avengers') searchTitle = 'The_Avengers_(2012_film)';
  if (title === 'Thor') searchTitle = 'Thor_(film)';
  if (title === 'Ant-Man') searchTitle = 'Ant-Man_(film)';
  if (title === 'Captain Marvel') searchTitle = 'Captain_Marvel_(film)';
  if (title === 'Black Widow') searchTitle = 'Black_Widow_(2021_film)';
  if (title === 'Eternals') searchTitle = 'Eternals_(film)';
  if (title === 'The Marvels') searchTitle = 'The_Marvels';

  const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&pilicense=any&redirects=1&titles=${searchTitle}`;
  
  return new Promise((resolve) => {
    https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pageId !== '-1' && pages[pageId].original) {
            resolve(pages[pageId].original.source);
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve) => {
    https.get(url, { headers }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, dest).then(resolve);
      }
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(true);
        });
      } else {
        resolve(false);
      }
    }).on('error', () => resolve(false));
  });
}

async function run() {
  let modifiedJs = mainJs;
  let count = 0;
  
  for (const movie of movies) {
    if (movie.id === '1' || movie.id === '2') continue;
    if (!movie.posterUrl.includes('tmdb.org')) continue;

    console.log(`Fetching wiki image for ${movie.title}...`);
    const imgUrl = await fetchWikiImage(movie.title);
    
    if (imgUrl) {
      console.log(`Found: ${imgUrl}`);
      const ext = path.extname(imgUrl.split('?')[0]) || '.jpg';
      const localFilename = `poster-${movie.id}${ext}`;
      const dest = path.join(__dirname, 'posters', localFilename);
      
      console.log(`Downloading to ${localFilename}...`);
      const success = await downloadImage(imgUrl, dest);
      
      if (success) {
        const newString = movie.originalString.replace(movie.posterUrl, `./posters/${localFilename}`);
        modifiedJs = modifiedJs.replace(movie.originalString, newString);
        count++;
      }
    } else {
      console.log(`No image found for ${movie.title}`);
    }
  }
  
  fs.writeFileSync(mainJsPath, modifiedJs);
  console.log(`Finished updating main.js! Downloaded ${count} posters.`);
}

run();
