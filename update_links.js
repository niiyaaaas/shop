const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace Categories column with Top Brands column in footer
    const oldFooterCol = `<h4 class="footer-heading">Categories</h4>
                    <ul class="footer-links">
                        <li><a href="products.html">Proteins</a></li>
                        <li><a href="products.html">Pre Workouts</a></li>
                        <li><a href="products.html">Creatine</a></li>
                        <li><a href="products.html">Vitamins</a></li>
                        <li><a href="products.html">Gym Accessories</a></li>
                    </ul>`;
                    
    const newFooterCol = `<h4 class="footer-heading">Top Brands</h4>
                    <ul class="footer-links">
                        <li><a href="muscleblaze.html">MuscleBlaze</a></li>
                        <li><a href="gnc.html">GNC</a></li>
                        <li><a href="wellcore.html">Wellcore</a></li>
                        <li><a href="avatar.html">Avatar</a></li>
                        <li><a href="products.html">View All Brands</a></li>
                    </ul>`;
                    
    content = content.replace(oldFooterCol, newFooterCol);
    
    fs.writeFileSync(file, content);
    console.log(`Updated footer in ${file}`);
});
