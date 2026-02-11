const fs = require('fs');

try {
    const seedFile = 'src/lib/seed-data.ts';
    const dataFile = 'seiko_data.ts.txt';

    let seedContent = fs.readFileSync(seedFile, 'utf8');
    const newContent = fs.readFileSync(dataFile, 'utf8');

    // Find the last occurrence of ];
    const lastIndex = seedContent.lastIndexOf('];');

    if (lastIndex === -1) {
        console.error('Could not find closing bracket ]; in seed-data.ts');
        process.exit(1);
    }

    // Check if we need a comma before appending
    // The tail check showed "},];", so there IS a comma.
    // But let's be safe: if the char before ]; is not comma, add one?
    // Actually, standard JSON/TS allows trailing comma.
    // We will just insert new data.

    const updatedContent = seedContent.substring(0, lastIndex) +
        '\n    ' + newContent +
        '\n];';

    fs.writeFileSync(seedFile, updatedContent);
    console.log('Successfully appended Seiko data to seed-data.ts');

} catch (err) {
    console.error('Error:', err);
}
