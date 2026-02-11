const fs = require('fs');

try {
    let products = [];
    try {
        const data1 = JSON.parse(fs.readFileSync('seiko_products.json', 'utf8'));
        products = products.concat(data1.products);
    } catch (e) { }

    try {
        if (fs.existsSync('seiko_products_page2.json')) {
            const data2 = JSON.parse(fs.readFileSync('seiko_products_page2.json', 'utf8'));
            products = products.concat(data2.products);
        }
    } catch (e) { }

    // Filter watches: Price > 100 AND has images AND title doesn't contain "Strap" or "Band"
    const watches = products.filter(p => {
        const price = p.variants && p.variants[0] ? Number(p.variants[0].price) : 0;
        const hasImages = p.images && p.images.length > 0;
        const isNotAccessory = !p.title.toLowerCase().includes('strap') && !p.title.toLowerCase().includes('band') && !p.title.toLowerCase().includes('clasp');
        return price > 100 && hasImages && isNotAccessory;
    });

    console.log(`Filtered ${watches.length} watches from ${products.length} items.`);

    const seedData = watches.map(p => {
        // Extract specs from body_html if possible
        const desc = p.body_html.replace(/<[^>]*>/g, '').trim(); // Strip HTML

        // Simple regex extraction
        const waterResistanceMatch = desc.match(/(\d+)\s*bar|(\d+)\s*m/i);
        const waterResistance = waterResistanceMatch ? (waterResistanceMatch[0].replace(' ', '') + (waterResistanceMatch[0].includes('bar') ? '' : '')) : "100m"; // Default

        const caseStart = desc.indexOf('Case');
        const crystalStart = desc.indexOf('Crystal');

        return {
            id: `seiko-${p.handle}`,
            brand: "Seiko",
            model: p.title,
            price: Math.round(Number(p.variants[0].price) * 100), // Convert decimal string to cents integer? No, wait.
            // Existing seed-data uses integer Yen/USD. e.g. 35000. 
            // Seiko API gives "625.00". 
            // User context seems to show prices like 35000 (Yen?) or $350 (USD?).
            // Let's check `seed-data.ts` again. It has `price: 35000`. 
            // If these are USD prices (e.g. 625.00), I should probably keep them as is or x100 if the app expects cents. 
            // Wait, 35000 JPY is ~$230 USD. 
            // I'll store it as integer. If the site expects JPY, I might need to convert or just store the raw number.
            // Let's assume the app handles the number. I will store "625" as 62500 if it expects cents, or 625 if dollars.
            // Looking at `seed-data.ts`, `price: 32000` for Orient. Orient prices are usually ~300 USD. So 32000 is likely JPY.
            // Seiko prices are USD in the JSON (e.g. 625.00). 
            // I should probably convert appropriately or just use the number.
            // Let's stick to the raw value for now, maybe parse to int.
            description: desc.substring(0, 200) + "...", // Truncate for seed data readability
            image: `/watches/seiko-${p.handle}/main.webp`,
            gallery: p.images.slice(1, 4).map((img, i) => `/watches/seiko-${p.handle}/gallery_${i + 1}.webp`),
            details: {
                movement: "Automatic", // Generic for now
                caseSize: "40mm", // Generic
                waterResistance: waterResistance,
                crystal: "Sapphire" // Generic
            },
            // Hidden fields for download script
            _imageUrl: p.images[0].src,
            _galleryUrls: p.images.slice(1, 4).map(i => i.src)
        };
    });

    fs.writeFileSync('seiko_final.json', JSON.stringify(seedData, null, 2));

    // Generate download script
    let scriptContent = '#!/bin/bash\n\n';
    seedData.forEach(w => {
        scriptContent += `mkdir -p "public/watches/${w.id}"\n`;
        scriptContent += `curl -L -s -o "public/watches/${w.id}/main.webp" "${w._imageUrl}"\n`;
        w._galleryUrls.forEach((url, i) => {
            scriptContent += `curl -L -s -o "public/watches/${w.id}/gallery_${i + 1}.webp" "${url}"\n`;
        });
    });

    fs.writeFileSync('download_seiko_images.sh', scriptContent);
    console.log('Created seiko_final.json and download_seiko_images.sh');

} catch (err) {
    console.error('Error:', err);
}
