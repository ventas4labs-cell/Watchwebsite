const fs = require('fs');

const filename = process.argv[2] || 'tissot_men_combined.html';
const html = fs.readFileSync(filename, 'utf8');

// Regex to find the JSON data block
const regex = /data-cbt-select-product="([^"]*)"/g;
let match;
const products = [];

while ((match = regex.exec(html)) !== null) {
    try {
        let jsonStr = match[1].replace(/&quot;/g, '"');
        const data = JSON.parse(jsonStr);

        if (data.products && data.products.length > 0) {
            const product = data.products[0];
            const name = product.name;
            const id = product.id;

            // Find the image URL nearby in the HTML
            // We look for the data-product-tile-link that matches the ID, then find the image inside it
            // However, regex lookahead in a massive file is slow/tricky. 
            // Better approach: regex for the specific pattern we saw: 
            // <a class="product-tile" data-product-tile-link="ID" ...> ... <img ... srcset="URL ...">

            // Let's do a simple regex for the image lines and map them by ID if possible.
            // Actually, the previous grep showed image URLs are separate. 
            // Let's try to find the `data-product-tile-link="ID"` and then the next `srcset` or `src`.
        }
    } catch (e) { }
}

// Alternative strategy: Split by "product-tile" and parse each block
const parts = html.split('class="product-tile"');
const results = [];

parts.forEach(part => {
    // 1. Extract Name (from data-cbt-select-product usually appearing BEFORE the tile, or inside? 
    //    Wait, the JSON `data-cbt-select-product` is often inside the Previous div.
    //    Let's look for the JSON inside the block if it exists, or Name in the <a> tag text?

    // Let's try to find the JSON object `data-cbt-select-product` which contains the NAME and ID.
    // Then find the Image URL.

    const nameMatch = part.match(/&quot;name&quot;:&quot;([^&]*)&quot;/);
    const imageMatch = part.match(/srcset="([^"]*)"/); // Look for srcset first as it has high res

    if (nameMatch && imageMatch) {
        let name = nameMatch[1];
        let imageUrls = imageMatch[1].split(',');
        // Get the last URL in srcset (usually highest res)
        let highRes = imageUrls[imageUrls.length - 1].trim().split(' ')[0];

        // Clean up URL
        if (highRes.startsWith('//')) highRes = 'https:' + highRes;

        results.push({ name, image: highRes });
    }
});

// Remove duplicates
const unique = {};
results.forEach(r => unique[r.name] = r.image);

console.log(JSON.stringify(unique, null, 2));
console.warn(`Found ${Object.keys(unique).length} models with images.`);
