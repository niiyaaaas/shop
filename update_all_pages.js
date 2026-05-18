const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // 1. Ensure nav cart button has nav-cart class
    content = content.replace(/class="icon-btn cart-btn"/g, 'class="icon-btn cart-btn nav-cart"');
    
    // 2. Add scripts if not already added
    if (!content.includes('js/data.js')) {
        content = content.replace(/<script src="js\/main\.js"><\/script>/g, '<script src="js/data.js"></script>\n    <script src="js/cart.js"></script>\n    <script src="js/main.js"></script>');
    } else if (!content.includes('js/cart.js')) {
        content = content.replace(/<script src="js\/data\.js"><\/script>/g, '<script src="js/data.js"></script>\n    <script src="js/cart.js"></script>');
    }
    
    fs.writeFileSync(file, content);
    console.log(`Injected script links and nav-cart classes into ${file}`);
});
