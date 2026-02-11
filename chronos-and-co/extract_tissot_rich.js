const fs = require('fs');

const filename = process.argv[2] || 'tissot_men_combined.html';
const html = fs.readFileSync(filename, 'utf8');

// Data structures
const products = {}; // Key by unique ID or Name

// 1. Extract JSON data (Price, Name, ID)
// <div data-cbt-product-redirect-id="..." data-cbt-select-product="{...}">
const productRegex = /data-cbt-select-product="([^"]*)"/g;
let match;
while ((match = productRegex.exec(html)) !== null) {
    try {
        let jsonStr = match[1].replace(/&quot;/g, '"');
        const data = JSON.parse(jsonStr);
        if (data.products && data.products.length > 0) {
            const p = data.products[0];
            products[p.id] = {
                id: p.id,
                name: p.name,
                price: parseFloat(p.price),
                // variant: p.variant
            };
        }
    } catch (e) { }
}

// 2. Extract Images (Map ID to Image URL)
// <a class="product-tile" data-product-tile-link="ID" ...> ... <img ... srcset="...">
const parts = html.split('data-product-tile-link="');
for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    const id = part.split('"')[0];

    // Find best image in this block
    const urlMatches = part.match(/https:\/\/[^"'\s,]*product-pictures[^"'\s,]*/g);

    if (urlMatches && urlMatches.length > 0) {
        let bestUrl = urlMatches[0];
        // Clean and upgrade resolution
        let cleanUrl = bestUrl.split('?')[0];
        let finalUrl = `${cleanUrl}?sm=fit&sw=800&sh=800,gravity=center`;

        if (products[id]) {
            products[id].image = finalUrl;
        } else {
            // Case where we found image but missed JSON (unlikely but possible)
            // console.warn(`Found image for unknown ID: ${id}`);
        }
    }
}

// 3. Output as list
const output = Object.values(products).filter(p => p.image && p.name); // Only complete entries
console.log(JSON.stringify(output, null, 2));
console.warn(`Extracted ${output.length} complete products.`);
