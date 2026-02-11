
const fs = require('fs');
const path = require('path');
const https = require('https');

const RAW_DATA_PATH = path.join(__dirname, 'bulova_jomashop_raw.json');
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

    // Generate ID: bulova-{sku lowercased}
    // Remove 'BUL' prefix if present for cleaner IDs, or keep it.
    // Jomashop adds 'BUL'. Real model is usually what follows.
    // Let's keep it simple: id = bulova-bul...
    const id = `bulova-${item.sku.toLowerCase().replace(/[^a-z0-9]/g, '')}`;

    if (existingIds.has(id)) continue;
    if (seenSkus.has(id)) continue;

    seenSkus.add(id);
    newItems.push({ ...item, id });

    if (newItems.length >= 20) break; // Limit to 20
}

console.log(`Found ${newItems.length} new unique Bulova models.`);

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
        if (!imageUrl) continue;

        // Remove resizing params for better quality if possible
        const cleanImageUrl = imageUrl.split('?')[0];

        const ext = path.extname(cleanImageUrl) || '.jpg';
        const localFilename = 'default' + ext;
        const localPath = path.join(dirPath, localFilename);

        // Download
        console.log(`Downloading ${item.id}...`);
        try {
            await downloadImage(cleanImageUrl, localPath);
        } catch (e) {
            console.error(`Failed to download ${item.id}, trying with params...`);
            try {
                await downloadImage(imageUrl, localPath);
            } catch (e2) {
                console.error(`Failed to download ${item.id}: ${e2.message}`);
                continue;
            }
        }

        // Clean Price
        const price = parseInt(item.price.replace(/[^0-9]/g, ''), 10) || 300;

        // Generate Entry
        const entry = `  {
    id: "${item.id}",
    brand: "Bulova",
    model: "${item.name.replace(/"/g, '\\"')}", 
    price: ${price},
    description: "Official Bulova ${item.name.replace(/"/g, '\\"')} (${item.sku}). American innovation and craftsmanship.",
    image: "/watches/${item.id}/${localFilename}",
    details: {
      caseSize: "42mm",
      waterResistance: "100m",
      movement: "Quartz/Automatic",
      crystal: "Mineral"
    }
  },`;
        generatedEntries.push(entry);
    }

    const code = generatedEntries.join('\n');
    fs.writeFileSync('bulova_snippet.ts', code);
    console.log("Snippet saved to bulova_snippet.ts");
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
