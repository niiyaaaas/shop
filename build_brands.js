const fs = require('fs');

const html = fs.readFileSync('products.html', 'utf8');

const brands = ['MuscleBlaze', 'GNC', 'Wellcore', 'Avatar'];

// Extract the products grid
const gridStart = html.indexOf('<div class="products-grid">');
const gridEnd = html.indexOf('</div>\n            \n            <div class="text-center"');

if (gridStart === -1 || gridEnd === -1) {
    console.error("Could not find products-grid");
    process.exit(1);
}

const gridContent = html.substring(gridStart + '<div class="products-grid">'.length, gridEnd);
const cards = gridContent.split('<div class="product-card"').filter(c => c.trim().length > 0).map(c => '<div class="product-card"' + c);

brands.forEach(brand => {
    const brandCards = cards.filter(card => card.includes(`<div class="product-brand">${brand}</div>`));
    
    const newGrid = `<div class="products-grid">\n                ${brandCards.join('')}            </div>`;
    
    let newHtml = html.substring(0, gridStart) + newGrid + html.substring(gridEnd + 6);
    
    newHtml = newHtml.replace('<title>All Products | Vishnu Fitness</title>', `<title>${brand} Products | Vishnu Fitness</title>`);
    newHtml = newHtml.replace('<h1 class="section-title">All Products</h1>', `<h1 class="section-title">${brand} Products</h1>`);
    
    // Also update the active nav link if needed, but not strictly required.
    
    fs.writeFileSync(`${brand.toLowerCase()}.html`, newHtml);
    console.log(`Created ${brand.toLowerCase()}.html with ${brandCards.length} products.`);
});
