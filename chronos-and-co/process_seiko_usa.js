
const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const RAW_DATA_PATH = path.join(__dirname, 'seiko_usa_raw.json');
const SEED_DATA_PATH = path.join(__dirname, 'src/lib/seed-data.ts');
const PUBLIC_DIR = path.join(__dirname, 'public/watches');

// 1. Read Data
const rawData = JSON.parse(fs.readFileSync(RAW_DATA_PATH, 'utf8'));
const seedData = fs.readFileSync(SEED_DATA_PATH, 'utf8');

// 2. Extract Existing IDs
const existingIds = new Set();
const idRegex = /id:\s*"([^"]+)"/g;
let match;
while ((match = idRegex.exec(seedData)) !== null) {
    existingIds.add(match[1]);
}

// 3. Filter New Items
const newItems = [];
const seenSkus = new Set();

for (const item of rawData) {
    if (!item.sku || !item.name) continue;

    // Generate ID: seiko-{sku lowercased}
    const id = `seiko-${item.sku.toLowerCase().replace(/[^a-z0-9]/g, '')}`;

    if (existingIds.has(id)) continue;
    if (seenSkus.has(id)) continue;

    seenSkus.add(id);
    newItems.push({ ...item, id });

    if (newItems.length >= 20) break; // Limit to 20
}

console.log(`Found ${newItems.length} new unique Seiko models.`);

// 4. Download and Generate Code
const generatedEntries = [];

async function processItems() {
    for (const item of newItems) {
        // Create Dir
        const dirPath = path.join(PUBLIC_DIR, item.id);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        // Image URL formatting
        let imageUrl = item.image;
        if (imageUrl.startsWith('//')) imageUrl = 'https:' + imageUrl;

        // Limit query params
        // const cleanUrl = imageUrl.split('?')[0]; 
        // actually jomashop/shopify urls usually need the params or are fine with them.

        const ext = path.extname(imageUrl.split('?')[0]) || '.png';
        const localFilename = 'default' + ext;
        const localPath = path.join(dirPath, localFilename);

        // Download
        console.log(`Downloading ${item.id}...`);
        try {
            await downloadImage(imageUrl, localPath);
        } catch (e) {
            console.error(`Failed to download ${item.id}: ${e.message}`);
            continue; // Skip code generation for this one
        }

        // Clean Price
        const price = parseInt(item.price.replace(/[^0-9]/g, ''), 10) || 500;

        // Generate Entry
        const entry = `  {
    id: "${item.id}",
    brand: "Seiko",
    model: "${item.name} ${item.sku}",
    price: ${price},
    description: "Official Seiko ${item.name} (${item.sku}). Precision Japanese craftsmanship met with timeless design.",
    image: "/watches/${item.id}/${localFilename}",
    features: ["Automatic Movement", "Stainless Steel", "Water Resistant", "Date Display"],
    details: {
      caseSize: "40mm",
      waterResistance: "100m",
      movement: "Automatic",
      crystal: "Hardlex"
    }
  },`;
        generatedEntries.push(entry);
    }

    const code = generatedEntries.join('\n');
    fs.writeFileSync('seiko_snippet.ts', code);
    console.log("Snippet saved to seiko_snippet.ts");
}

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Status ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
}

processItems();
