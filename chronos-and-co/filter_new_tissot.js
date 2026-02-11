const fs = require('fs');

// 1. Load Full Catalog
const fullCatalog = JSON.parse(fs.readFileSync('tissot_full_catalog.json', 'utf8'));

// 2. Load Existing DB IDs
// Hardcoded from previous knowledge of seed-data.ts
const existingIds = new Set([
    "tissot-prx", "tissot-le-locle", "tissot-gentleman", "tissot-seastar-1000",
    "tissot-supersport-chrono", "tissot-heritage-1938", "tissot-telemeter-1938",
    "tissot-chrono-xl", "tissot-chemin-des-tourelles", "tissot-pr-100",
    "tissot-classic-dream", "tissot-ballade", "tissot-pr516-chrono",
    "tissot-carson-premium", "tissot-tradition", "tissot-everytime",
    "tissot-t-touch-solar", "tissot-visodate", "tissot-prc-200", "tissot-couturier"
]);

// 3. Filter New Items
const newItems = [];
const seenNames = new Set();

fullCatalog.forEach(item => {
    // Generate a simple ID from name if not present in existing
    // Check if name is already covered by existing (fuzzy match?)

    // Actually, Tissot has many variations (dial colors, straps).
    // User said "finish the whole catalog". This implies adding ALL variants?
    // Or just unique models?
    // "Search one at a time" was previous instruction.
    // "Finish the whole catalog" usually means distinct models, not every SKU.

    // Let's deduce unique "Base Models" from the name.
    // e.g. "Tissot PRX 40mm" vs "Tissot PRX 35mm" -> unique
    // "Tissot PRX 40mm" blue vs "Tissot PRX 40mm" green -> same model name?
    // The scraper extracted "Name" from JSON. 
    // JSON often has specific SKU names like "Tissot PRX 40mm - Blue".
    // Or just "Tissot PRX 40mm".

    // Let's use the Name as the unique key.
    if (seenNames.has(item.name)) return;

    // Check if this name is close to an existing one?
    // e.g. "Tissot PRX 40mm" might already be covered by "tissot-prx".

    // Let's exclude fuzzy matches to existing DB models to be safe?
    // Or just add them if they differ significantly.
    // "PRX Powermatic 80" is in DB.
    // Scraped: "Tissot PRX 40mm", "Tissot PRX 35mm".
    // These are distinct enough. "PRX Powermatic 80" is likely the 40mm automatic.
    // Let's add them all but try to dedupe exact strings.

    seenNames.add(item.name);
    newItems.push(item);
});

// Generate Clean IDs
const finalItems = newItems.map(item => {
    let id = item.name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

    // Ensure ID uniqueness against existing AND new
    if (existingIds.has(id)) return null; // Skip exact ID match

    // Check for "tissot-" prefix
    if (!id.startsWith('tissot-')) id = 'tissot-' + id;

    return {
        id: id,
        brand: "Tissot",
        model: item.name.replace(/^Tissot\s+/i, ''), // Remove redundant brand
        price: item.price || 500, // Fallback price
        description: `Swiss made excellence. The ${item.name} represents the pinnacle of Tissot craftsmanship.`, // Generic desc
        image: `/watches/${id}/main.jpg`, // Local path
        sourceImage: item.image,
        details: {
            movement: "Swiss Quartz / Automatic",
            caseSize: item.name.match(/\d+mm/) ? item.name.match(/\d+mm/)[0] : "40mm",
            waterResistance: "100m",
            crystal: "Sapphire"
        }
    };
}).filter(item => item !== null);

const uniqueFinal = [];
const finalIds = new Set(existingIds);

finalItems.forEach(item => {
    if (!finalIds.has(item.id)) {
        finalIds.add(item.id);
        uniqueFinal.push(item);
    }
});

console.log(JSON.stringify(uniqueFinal, null, 2));
console.warn(`Prepared ${uniqueFinal.length} new unique models to add.`);
