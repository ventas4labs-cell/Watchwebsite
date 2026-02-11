const fs = require('fs');

const models = JSON.parse(fs.readFileSync('tissot_new_models.json', 'utf8'));

console.log("#!/bin/bash");
console.log("set -x");
console.log("mkdir -p public/watches");

models.forEach(model => {
    const dir = `public/watches/${model.id}`;
    // Original image URL from sourceImage property
    const url = model.sourceImage;

    if (url) {
        console.log(`echo "Downloading ${model.model}..."`);
        console.log(`mkdir -p "${dir}"`);
        console.log(`curl -s -L -A "Mozilla/5.0" "${url}" -o "${dir}/main.jpg"`);
    } else {
        console.log(`echo "WARNING: No image source for ${model.model}"`);
    }
});
