const fs = require('fs');

const filename = process.argv[2] || 'tissot_men.html';
const html = fs.readFileSync(filename, 'utf8');
const regex = /data-cbt-select-product="([^"]*)"/g;
let match;
const products = new Set();

while ((match = regex.exec(html)) !== null) {
    try {
        // Unescape HTML entities
        let jsonStr = match[1].replace(/&quot;/g, '"');
        const data = JSON.parse(jsonStr);
        if (data.products && data.products.length > 0) {
            products.add(data.products[0].name);
        }
    } catch (e) {
        // console.error('Error parsing JSON:', e);
    }
}

const sortedProducts = Array.from(products).sort();
console.log(sortedProducts.join('\n'));
console.log(`\nTotal unique models found: ${sortedProducts.length}`);
