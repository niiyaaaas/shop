const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
let productsHtml = fs.readFileSync('products.html', 'utf8');

const gridStart = productsHtml.indexOf('<div class="products-grid">');
const gridEnd = productsHtml.indexOf('</div>\n            \n            <div class="text-center"');

if (gridStart !== -1 && gridEnd !== -1) {
    const gridContent = productsHtml.substring(gridStart + '<div class="products-grid">\n'.length, gridEnd);
    const cards = gridContent.split('<div class="product-card"').filter(c => c.trim().length > 0).map(c => '<div class="product-card"' + c);
    
    // Select first 8 products for best sellers
    const bestSellers = cards.slice(0, 8);
    
    const indexGridStart = html.indexOf('<div class="products-grid">');
    const indexGridEnd = html.indexOf('</div>\n            \n            <div class="text-center"');
    
    if (indexGridStart !== -1 && indexGridEnd !== -1) {
        const newHtml = html.substring(0, indexGridStart + '<div class="products-grid">\n'.length) + 
                        '                ' + bestSellers.join('') + 
                        '            ' + html.substring(indexGridEnd);
        fs.writeFileSync('index.html', newHtml);
        console.log('Successfully updated index.html best sellers grid');
    }
}
