const fs = require('fs');
const watches = JSON.parse(fs.readFileSync('seiko_final.json', 'utf8'));
const cleanWatches = watches.map(w => {
    const { _imageUrl, _galleryUrls, ...rest } = w;
    return rest;
});

// Create TS string
const tsContent = cleanWatches.map(w => JSON.stringify(w, null, 4)).join(',\n    ');
console.log(tsContent);
