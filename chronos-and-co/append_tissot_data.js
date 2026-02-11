const fs = require('fs');

const encodedNewModels = fs.readFileSync('tissot_new_models.json', 'utf8');
const newModels = JSON.parse(encodedNewModels);

// Read seed-data.ts
const seedPath = 'src/lib/seed-data.ts';
let seedContent = fs.readFileSync(seedPath, 'utf8');

// Find the end of the array
const arrayEndIndex = seedContent.lastIndexOf('];');

if (arrayEndIndex === -1) {
    console.error("Could not find end of WATCHES array");
    process.exit(1);
}

// Prepare new entries string
// We need to format it to match the existing style if possible, or just JSON
const newEntriesString = newModels.map(model => {
    return `    {
        id: "${model.id}",
        brand: "${model.brand}",
        model: "${model.model}",
        price: ${model.price},
        description: "${model.description}",
        image: "${model.image}",
        details: {
            movement: "${model.details.movement}",
            caseSize: "${model.details.caseSize}",
            waterResistance: "${model.details.waterResistance}",
            crystal: "${model.details.crystal}"
        }
    },`;
}).join('\n');

// Insert before the closing bracket
const newContent = seedContent.slice(0, arrayEndIndex) + newEntriesString + '\n' + seedContent.slice(arrayEndIndex);

fs.writeFileSync(seedPath, newContent);
console.log(`Appended ${newModels.length} models to seed-data.ts`);
