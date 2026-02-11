const fs = require('fs');

const filename = process.argv[2] || 'tissot_men_combined.html';
const html = fs.readFileSync(filename, 'utf8');

// Strategy: 
// 1. Find all `data-cbt-select-product` JSONs to map ID -> Name
// 2. Find all `data-product-tile-link` blocks to map ID -> Image URL

const idToName = {};
const idToImage = {};

// 1. Map ID -> Name
const productRegex = /data-cbt-select-product="([^"]*)"/g;
let match;
while ((match = productRegex.exec(html)) !== null) {
    try {
        let jsonStr = match[1].replace(/&quot;/g, '"');
        const data = JSON.parse(jsonStr);
        if (data.products && data.products.length > 0) {
            idToName[data.products[0].id] = data.products[0].name;
        }
    } catch (e) { }
}

// 2. Map ID -> Image
// Split by product-tile link to find associated images
// <a class="product-tile" data-product-tile-link="T1378074406100" href="...">
// ... <img ... srcset="URL, URL 2x" ...>
const parts = html.split('data-product-tile-link="');
// The first part is garbage before the first product
for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    const id = part.split('"')[0];

    // Look for image URL in this part (before the next product tile)
    // We want the high res one from srcset usually
    // valid image url usually contains "product-pictures" and ends in .png or .jpg
    // extract all http urls
    const urlMatches = part.match(/https:\/\/[^"'\s,]*product-pictures[^"'\s,]*/g);

    if (urlMatches && urlMatches.length > 0) {
        // Filter for the best one (largest?)
        // Heuristic: take the one that contains 'shadow' or 'png' and has 'sw=952' or similar high res
        // The previous grep showed 'sw=952' as 2x. Let's look for that.

        // Sort by length/quality?
        // Let's just take the last one found in the block, often the highest res or most relevant?
        // Actually, let's take the first one that has "sw=" and replace the sw value with 800

        let bestUrl = urlMatches[0];
        // Try to find one with higher res params if possible, but the base URL is what matters.
        // We can manipulate the URL params to get 800x800.

        // Clean URL: remove existing params
        let cleanUrl = bestUrl.split('?')[0];
        // Append our desired params
        let finalUrl = `${cleanUrl}?sm=fit&sw=800&sh=800,gravity=center`;

        idToImage[id] = finalUrl;
    }
}

// 3. Combine
const result = {};
Object.keys(idToName).forEach(id => {
    if (idToImage[id]) {
        result[idToName[id]] = idToImage[id];
    }
});

console.log(JSON.stringify(result, null, 2));
console.warn(`Mapped ${Object.keys(result).length} unique models to images.`);
