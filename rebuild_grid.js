const fs = require('fs');

const products = [
    { id: 'mb-biozyme', brand: 'MuscleBlaze', title: 'Biozyme Performance Whey Protein', img: 'assets/images/mb_biozyme.png', price: '₹2,499', oldPrice: '₹3,299', desc: 'Clinically proven to ensure 50% higher protein absorption and 60% superior BCAA absorption with Enhanced Absorption Formula (EAF®).' },
    { id: 'mb-preworkout', brand: 'MuscleBlaze', title: 'Pre Workout 300', img: 'assets/images/mb_preworkout.png', price: '₹1,299', oldPrice: '₹1,699', desc: 'Explosive energy formula with 300mg caffeine and BioPerine for enhanced focus, endurance, and insane muscle pumps.' },
    { id: 'mb-gainer', brand: 'MuscleBlaze', title: 'Super Gainer XXL', img: 'assets/images/mb_gainer.png', price: '₹3,499', oldPrice: '₹4,999', desc: 'High-calorie dense formula for massive muscle gains. Contains complex carbs and high-quality protein blend.' },
    { id: 'mb-fishoil', brand: 'MuscleBlaze', title: 'Omega 3 Fish Oil 1000mg', img: 'assets/images/mb_fishoil.png', price: '₹499', oldPrice: '₹799', desc: 'Triple strength fish oil providing EPA and DHA to support joint health, cardiovascular function, and immunity.' },
    
    { id: 'gnc-whey', brand: 'GNC', title: 'Pro Performance 100% Whey', img: 'assets/images/gnc_whey.png', price: '₹3,199', oldPrice: '₹3,799', desc: 'High-quality, macronutrient protein formula with high amounts of naturally occurring amino acids needed for muscle recovery.' },
    { id: 'gnc-isolate', brand: 'GNC', title: 'AMP Pure Isolate', img: 'assets/images/gnc_isolate.png', price: '₹4,299', oldPrice: '₹5,499', desc: 'Ultra-pure, fast-absorbing whey isolate that fuels muscles fast to maximize performance and growth.' },
    { id: 'gnc-creatine', brand: 'GNC', title: 'Pro Performance Creatine Monohydrate', img: 'assets/images/gnc_creatine.png', price: '₹1,099', oldPrice: '₹1,499', desc: 'Manufactured with unsurpassed quality control to ensure purity, potency and freshness. Helps improve sports performance.' },
    { id: 'gnc-multivitamin', brand: 'GNC', title: 'Mega Men Sport Multivitamin', img: 'assets/images/gnc_multivitamin.png', price: '₹1,299', oldPrice: '₹1,899', desc: 'Clinically studied multivitamin blend designed to support colon, prostate health, and boost athletic performance.' },
    
    { id: 'wellcore-creatine', brand: 'Wellcore', title: 'Pure Micronized Creatine Monohydrate', img: 'assets/images/wellcore_creatine.png', price: '₹899', oldPrice: '₹1,299', desc: '100% pure micronized creatine monohydrate for rapid absorption, increased strength, and explosive energy during intense workouts.' },
    { id: 'wellcore-gainer', brand: 'Wellcore', title: 'Extreme Mass Gainer Formula', img: 'assets/images/wellcore_gainer.png', price: '₹1,899', oldPrice: '₹2,499', desc: 'High-calorie complex carb and protein blend designed for rapid mass gaining and increased strength in hardgainers.' },
    { id: 'wellcore-preworkout', brand: 'Wellcore', title: 'Pre-Workout Explosive Energy', img: 'assets/images/wellcore_preworkout.png', price: '₹999', oldPrice: '₹1,499', desc: 'Advanced pre-workout matrix formulated to deliver intense energy, laser focus, and skin-tearing pumps.' },
    { id: 'wellcore-isolate', brand: 'Wellcore', title: '100% Whey Protein Isolate', img: 'assets/images/wellcore_isolate.png', price: '₹3,499', oldPrice: '₹4,499', desc: 'Premium whey isolate with zero fillers. Fast digesting protein to kickstart muscle repair immediately post-workout.' },
    
    { id: 'avvatar-whey', brand: 'Avatar', title: 'Premium Whey Protein Blend', img: 'assets/images/avvatar_whey.png', price: '₹2,299', oldPrice: '₹2,899', desc: 'First truly Made in India whey protein, sourced from 100% grass-fed cows milk for the freshest protein directly from the farm.' },
    { id: 'avvatar-isolate', brand: 'Avatar', title: 'Iso Zero 100% Whey Isolate', img: 'assets/images/avvatar_isolate.png', price: '₹3,499', oldPrice: '₹4,299', desc: 'Premium 100% Whey Isolate with zero carbs and zero fats for lean muscle building and rapid recovery post-workout.' },
    { id: 'avvatar-gainer', brand: 'Avatar', title: 'Muscle Gainer', img: 'assets/images/avvatar_gainer.png', price: '₹2,199', oldPrice: '₹2,999', desc: 'Scientifically formulated muscle gainer packed with complex carbohydrates and whey protein for serious size.' },
    { id: 'avvatar-preworkout', brand: 'Avatar', title: 'Alpha Pre-Workout', img: 'assets/images/avvatar_preworkout.png', price: '₹1,199', oldPrice: '₹1,699', desc: 'Ultimate pre-workout supplement designed to enhance stamina, mental focus, and muscle endurance.' }
];

let html = fs.readFileSync('products.html', 'utf8');

let gridHtml = '';
products.forEach(p => {
    gridHtml += `
                <div class="product-card" onclick="window.location.href='product-detail.html?id=${p.id}'" style="cursor: pointer;">
                    <div class="product-image-container">
                        <img src="${p.img}" alt="${p.title}" class="product-img">
                    </div>
                    <div class="product-brand">${p.brand}</div>
                    <h3 class="product-title">${p.title}</h3>
                    <p class="product-desc">${p.desc}</p>
                    <div class="product-price-container">
                        <span class="price-current">${p.price}</span>
                        ${p.oldPrice ? `<span class="price-old">${p.oldPrice}</span>` : ''}
                    </div>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); const prod = window.productDatabase['${p.id}']; const defWeight = prod.weights.find(w => w.isDefault) || prod.weights[0]; window.addToCart({ id: '${p.id}', title: prod.title, brand: prod.brand, img: prod.img, flavor: prod.flavors[0], weight: defWeight.label, price: defWeight.price, qty: 1 });">Add to Cart</button>
                </div>\n`;
});

const gridStart = html.indexOf('<div class="products-grid">');
const gridEnd = html.indexOf('</div>\n            \n            <div class="text-center"');

if (gridStart !== -1 && gridEnd !== -1) {
    const newHtml = html.substring(0, gridStart + '<div class="products-grid">\n'.length) + gridHtml + html.substring(gridEnd);
    fs.writeFileSync('products.html', newHtml);
    console.log('Successfully updated products.html');
} else {
    console.log('Failed to find grid bounds in products.html');
}
