const fs = require('fs');
const patterns = require('./patterns.js');
let svgUrl = patterns.topography;
let startIndex = svgUrl.indexOf(',') + 1;
let svgContent = svgUrl.substring(startIndex, svgUrl.length - 2);
svgContent = decodeURIComponent(svgContent);
// Make it extremely subtle: black with 0.02 opacity
svgContent = svgContent.replace('{{color}}', '#000000').replace('{{opacity}}', '0.03');
fs.writeFileSync('public/topography.svg', svgContent);
