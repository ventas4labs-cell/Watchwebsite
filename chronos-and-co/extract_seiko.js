const fs = require('fs');

const files = fs.readdirSync('.').filter(fn => fn.startsWith('seiko_page_') && fn.endsWith('.html'));

const products = [];
const seenSkus = new Set();

files.forEach(file => {
    const html = fs.readFileSync(file, 'utf8');

    // Regex for Product Item Block
    // <div class="productItemBlock" data-sku="SE-SSB425P1">
    // We can just regex for the data-sku and capture the surrounding block concept or just regex for properties

    // Strategy: Split by "productItemBlock" to get chunks?
    const chunks = html.split('class="productItemBlock"');

    // Skip first chunk (header/nav)
    for (let i = 1; i < chunks.length; i++) {
        const chunk = chunks[i];

        // 1. Extract SKU
        // data-sku="SE-SSB425P1" (It's right at the start of the chunk usually because we split on class="...")
        // The split removed the class string, so prompt should allow ` data-sku="..."`
        const skuMatch = chunk.match(/data-sku="([^"]+)"/);
        const sku = skuMatch ? skuMatch[1] : null;

        if (!sku || seenSkus.has(sku)) continue;

        // 2. Extract Name
        // <span class="name-out-brand"> ... </span>
        const nameMatch = chunk.match(/class="name-out-brand">([^<]+)<\/span>/);
        let name = nameMatch ? nameMatch[1].trim() : null;

        // Fallback: title attribute in <a>
        if (!name) {
            const titleMatch = chunk.match(/class="productName-link"\s+title="([^"]+)"/);
            name = titleMatch ? titleMatch[1] : null;
        }

        // 3. Extract Image
        // src="..." inside .productImg
        // Jomashop lazy loads? The browser agent showed src="..."
        const imgMatch = chunk.match(/class="[^"]*productImg[^"]*"\s+src="([^"]+)"/) || chunk.match(/src="([^"]+)"\s+class="[^"]*productImg[^"]*"/);
        let image = imgMatch ? imgMatch[1] : null;

        // Clean image URL (remove query params for high res base, or keep/adjust?)
        // Example: .../seiko-...jpg?width=350&height=350
        // We want high res.
        if (image) {
            image = image.split('?')[0];
        }

        // 4. Extract Price
        // <div class="now-price">...<span>$144.00</span>
        // Let's look for "now-price" then the next $ number
        // Simple regex scan within the chunk
        // class="now-price"(.*?)<span>\$([0-9.,]+)</span>
        // Regex is tricky across newlines.

        // Let's try to match the specific structure seen in agent output:
        // <div class="now-price">\n<span class="now-label">Now:</span>\n<span>$144.00</span>
        const priceMatch = chunk.match(/class="now-price"[^]*?\$([0-9.,]+)/);
        let price = priceMatch ? parseFloat(priceMatch[1].replace(/,/g, '')) : 0;

        // If price is 0, maybe "Pre-owned" or different structure, skip or keep?
        // Let's keep if > 0

        if (name && image && price > 0) {
            seenSkus.add(sku);
            products.push({
                sku,
                name,
                price,
                image,
                brand: "Seiko"
            });
        }
    }
});

console.log(JSON.stringify(products, null, 2));
console.warn(`Extracted ${products.length} Seiko models.`);
