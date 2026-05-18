const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const scriptInjection = `
    <!-- JS -->
    <script src="js/data.js"></script>
    <script src="js/cart.js"></script>
    <script src="js/main.js"></script>
`;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // First remove any existing script tags for data.js, cart.js, main.js to avoid duplicates
    content = content.replace(/<script src="js\/data\.js"><\/script>\s*<script src="js\/cart\.js"><\/script>\s*<script src="js\/main\.js"><\/script>/g, '');
    content = content.replace(/<script src="js\/data\.js"><\/script>\s*<script src="js\/main\.js"><\/script>\s*<script src="js\/pdp\.js"><\/script>/g, '');
    content = content.replace(/<script src="js\/main\.js"><\/script>/g, '');
    content = content.replace(/<script src="js\/data\.js"><\/script>/g, '');
    content = content.replace(/<script src="js\/cart\.js"><\/script>/g, '');
    content = content.replace(/<script src="js\/pdp\.js"><\/script>/g, '');
    
    // If it's the PDP page, load pdp.js as well
    if (file === 'product-detail.html') {
        const pdpScriptInjection = `
    <!-- JS -->
    <script src="js/data.js"></script>
    <script src="js/cart.js"></script>
    <script src="js/main.js"></script>
    <script src="js/pdp.js"></script>
`;
        content = content.replace('</body>', pdpScriptInjection + '\n</body>');
    } else {
        content = content.replace('</body>', scriptInjection + '\n</body>');
    }
    
    // Ensure all nav cart buttons have class nav-cart
    content = content.replace(/class="icon-btn cart-btn"/g, 'class="icon-btn cart-btn nav-cart"');
    
    fs.writeFileSync(file, content);
    console.log(`Safely cleaned and injected scripts in ${file}`);
});
