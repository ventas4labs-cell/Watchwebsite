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

    const watch = products.find(p => p.handle === 'ssk049');

    if (watch) {
        console.log('--- HTML START ---');
        console.log(watch.body_html);
        console.log('--- HTML END ---');
    }

} catch (err) { }
