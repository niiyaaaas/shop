const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'product-detail.html');

// Define replacements for the flagship products
const replacements = [
    {
        title: 'Biozyme Performance Whey Protein',
        oldImg: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop',
        newImg: 'https://m.media-amazon.com/images/I/61Q6U+t11NL._SL1500_.jpg'
    },
    {
        title: 'Pro Performance 100% Whey',
        oldImg: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=1000&auto=format&fit=crop',
        newImg: 'https://m.media-amazon.com/images/I/51wN3t4q8yL._SL1500_.jpg'
    },
    {
        title: 'Pure Micronized Creatine Monohydrate',
        oldImg: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1000&auto=format&fit=crop',
        newImg: 'https://m.media-amazon.com/images/I/51KntIqC1wL._SL1080_.jpg'
    },
    {
        title: 'Premium Whey Protein Blend',
        oldImg: 'https://images.unsplash.com/photo-1622618991746-fe6004db3a47?q=80&w=1000&auto=format&fit=crop',
        newImg: 'https://m.media-amazon.com/images/I/61k1K-j2cTL._SL1500_.jpg'
    }
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add onclick to product card
    content = content.replace(/<div class="product-card">/g, '<div class="product-card" onclick="window.location.href=\'product-detail.html\'" style="cursor: pointer;">');
    
    // Stop propagation on add to cart button
    content = content.replace(/<button class="add-to-cart-btn">/g, '<button class="add-to-cart-btn" onclick="event.stopPropagation();">');

    // Replace images for specific products
    replacements.forEach(rep => {
        // Find block for this product
        if (content.includes(rep.title)) {
            // Replaces all instances of the old image if it's within the file
            // Since multiple products might share the same unsplash image, we only replace it 
            // by searching for the block. It's easier to just blindly replace the image URLs for the first 4.
            // Since we know the first 4 cards map directly to the 4 unsplash URLs, we can just replace the URLs globally.
        }
    });
    
    // Global replace for the 4 images (since each maps to a specific product generally in our initial setup)
    content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1593095948071-474c5cc2989d\?q=80&w=1000&auto=format&fit=crop/g, 'https://m.media-amazon.com/images/I/61Q6U+t11NL._SL1500_.jpg');
    content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1579722820308-d74e571900a9\?q=80&w=1000&auto=format&fit=crop/g, 'https://m.media-amazon.com/images/I/51wN3t4q8yL._SL1500_.jpg');
    content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1554284126-aa88f22d8b74\?q=80&w=1000&auto=format&fit=crop/g, 'https://m.media-amazon.com/images/I/51KntIqC1wL._SL1080_.jpg');
    content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1622618991746-fe6004db3a47\?q=80&w=1000&auto=format&fit=crop/g, 'https://m.media-amazon.com/images/I/61k1K-j2cTL._SL1500_.jpg');
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
});
