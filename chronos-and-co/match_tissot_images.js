const fs = require('fs');

// Load scraped images
const images = JSON.parse(fs.readFileSync('tissot_images_regex.json', 'utf8'));
const scrapedNames = Object.keys(images);

// DB Targets
const targets = [
    { id: "tissot-prx", model: "PRX Powermatic 80", keywords: ["PRX"] },
    { id: "tissot-le-locle", model: "Le Locle Automatique", keywords: ["Le Locle"] },
    { id: "tissot-gentleman", model: "Gentleman Powermatic", keywords: ["Gentleman"] },
    { id: "tissot-seastar-1000", model: "Seastar 1000 Powermatic 80", keywords: ["Seastar 1000"] },
    { id: "tissot-supersport-chrono", model: "Supersport Chrono", keywords: ["Supersport"] },
    { id: "tissot-heritage-1938", model: "Heritage 1938 Automatic", keywords: ["Heritage 1938"] },
    { id: "tissot-telemeter-1938", model: "Telemeter 1938", keywords: ["Telemeter 1938"] },
    { id: "tissot-chrono-xl", model: "Chrono XL Vintage", keywords: ["Chrono XL"] },
    { id: "tissot-chemin-des-tourelles", model: "Chemin des Tourelles", keywords: ["Chemin des Tourelles"] },
    { id: "tissot-pr-100", model: "PR 100 Quartz", keywords: ["PR 100"] },
    { id: "tissot-classic-dream", model: "Classic Dream", keywords: ["Classic Dream"] },
    { id: "tissot-ballade", model: "Ballade Powermatic 80 COSC", keywords: ["Ballade"] },
    { id: "tissot-pr516-chrono", model: "PR516 Chronograph", keywords: ["PR516"] },
    { id: "tissot-carson-premium", model: "Carson Premium", keywords: ["Carson"] },
    { id: "tissot-tradition", model: "Tradition Quartz", keywords: ["Tradition"] },
    { id: "tissot-everytime", model: "Everytime Quartz", keywords: ["Everytime"] },
    { id: "tissot-t-touch-solar", model: "T-Touch Connect Solar", keywords: ["T-Touch"] },
    { id: "tissot-visodate", model: "Heritage Visodate", keywords: ["Visodate"] },
    { id: "tissot-prc-200", model: "PRC 200 Chronograph", keywords: ["PRC 200"] },
    { id: "tissot-couturier", model: "Couturier Chronograph", keywords: ["Couturier"] }
];

console.log("#!/bin/bash");
console.log("mkdir -p public/watches");

targets.forEach(target => {
    // Find best match
    // 1. Must contain keyword
    let candidates = scrapedNames.filter(name =>
        target.keywords.every(k => name.toLowerCase().includes(k.toLowerCase()))
    );

    // 2. Tie-breaking
    // Prefer "Powermatic" if in model name
    // Prefer standard sizes if multiple

    let bestMatch = null;
    if (candidates.length > 0) {
        // Sort by length (shorter is usually base model?) or similarity
        // Let's just pick the first one matching "40mm" or "42mm" if possible, else first

        // precise match logic
        const preferred = candidates.find(c => c.includes("40mm") || c.includes("42mm") || c.includes("39mm"));
        bestMatch = preferred || candidates[0];
    }

    if (bestMatch) {
        const url = images[bestMatch];
        const dir = `public/watches/${target.id}`;
        console.log(`echo "Downloading ${target.model} (${bestMatch})..."`);
        console.log(`mkdir -p "${dir}"`);
        console.log(`curl -s -L -A "Mozilla/5.0" "${url}" -o "${dir}/main.jpg"`);
    } else {
        console.log(`echo "WARNING: No image found for ${target.model}"`);
    }
});
