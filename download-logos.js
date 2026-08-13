const fs = require('fs');
const path = require('path');
const https = require('https');

const logos = [
  "vercel.svg", "nextjs.svg", "react.svg", "nodejs.svg", "vite.svg",
  "typescript-icon.svg", "tailwindcss.svg", "stripe.svg", "github-icon.svg",
  "webflow.svg", "figma.svg", "notion-icon.svg", "linear.svg", "wordpress-icon.svg"
];

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

logos.forEach(logo => {
  const url = `https://raw.githubusercontent.com/gilbarbara/logos/master/logos/${logo}`;
  const dest = path.join(dir, logo);
  const file = fs.createWriteStream(dest);
  https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close();  // close() is async, call cb after close completes.
    });
  }).on('error', function(err) {
    fs.unlink(dest);
    console.error(`Error downloading ${logo}: ${err.message}`);
  });
});
console.log('Downloading logos...');
