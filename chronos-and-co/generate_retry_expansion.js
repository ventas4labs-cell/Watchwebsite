const fs = require('fs');

const models = JSON.parse(fs.readFileSync('tissot_new_models.json', 'utf8'));

console.log("#!/bin/bash");
console.log("set -x");

models.forEach(model => {
    const dir = `public/watches/${model.id}`;
    const mainJpg = `${dir}/main.jpg`;

    // Check if file exists and is > 1KB (logic in shell)
    // We'll just generate the command, the shell script will check

    console.log(`if [ ! -f "${mainJpg}" ] || [ $(wc -c < "${mainJpg}") -lt 1000 ]; then`);
    console.log(`    echo "Retrying ${model.model}..."`);
    console.log(`    mkdir -p "${dir}"`);
    console.log(`    curl -s -L -A "Mozilla/5.0" "${model.sourceImage}" -o "${mainJpg}"`);
    console.log(`fi`);
});
