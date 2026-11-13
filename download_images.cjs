const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const urls = [
  { url: 'https://biologi.ugm.ac.id/2026/05/18/from-walls-to-air-purifiers-tim-ugm-sabet-gold-medal-dan-the-icgi-special-award-di-ispc-2026-lewat-inovasi-cat-hidup-enviora/', id: '20261' },
  { url: 'https://ukrida.ac.id/news/3642/gold-medal-pada-international-science-project-competition-ispc-2026', id: '20262' },
  { url: 'https://sekolahsabilillah.sch.id/Berita/show/792', id: '20263' },
  { url: 'https://eng.kmutt.ac.th/en/ice-activities/ispc-2026/', id: '20264' }
];

const destDir = path.join(__dirname, 'public', 'assets', 'news');

function download(urlStr, dest) {
  return new Promise((resolve, reject) => {
    const lib = urlStr.startsWith('https') ? https : http;
    const req = lib.get(urlStr, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
    req.end();
  });
}

async function getImageUrl(url) {
    return new Promise((resolve, reject) => {
        const lib = url.startsWith('https') ? https : http;
        const req = lib.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                let match = data.match(/<meta\s+property=["']og:image["']\s+content=["'](.*?)["']/i);
                if (!match) {
                    match = data.match(/<meta\s+name=["']twitter:image["']\s+content=["'](.*?)["']/i);
                }
                if (match && match[1]) {
                    let imgUrl = match[1];
                    if (imgUrl.startsWith('/')) {
                        const urlObj = new URL(url);
                        imgUrl = urlObj.origin + imgUrl;
                    }
                    resolve(imgUrl);
                } else {
                    resolve(null);
                }
            });
        }).on('error', reject);
        req.end();
    });
}

async function main() {
    for (const item of urls) {
        try {
            let imgUrl = await getImageUrl(item.url);
            console.log(`URL: ${item.url} -> Image: ${imgUrl}`);
            if (imgUrl) {
                // Determine extension, default to jpg
                let ext = 'jpg';
                if (imgUrl.includes('.png')) ext = 'png';
                if (imgUrl.includes('.jpeg')) ext = 'jpeg';
                
                const filename = `${item.id}.${ext}`;
                const dest = path.join(destDir, filename);
                await download(imgUrl, dest);
                console.log(`Saved ${filename}`);
                console.log(`EXTENSION_INFO: ${item.id} -> ${ext}`);
            } else {
                console.log(`No image found for ${item.url}`);
            }
        } catch (e) {
            console.error(`Failed ${item.url}:`, e.message);
        }
    }
}

main();
