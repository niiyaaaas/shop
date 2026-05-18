document.addEventListener('DOMContentLoaded', () => {
    // Extract ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || 'mb-biozyme';
    
    // Fetch product data
    const product = window.productDatabase[productId];
    
    if (!product) {
        console.error("Product not found");
        return;
    }

    // 1. Populate basic text and images
    document.title = `${product.title} | Vishnu Fitness`;
    document.querySelector('.breadcrumb .text-brand').innerText = product.title;
    document.querySelector('.breadcrumb a:nth-child(2)').innerText = product.brand;
    document.querySelector('.breadcrumb a:nth-child(2)').href = `${product.brand.toLowerCase()}.html`;
    
    document.querySelector('.pdp-title').innerText = product.title;
    document.querySelector('.pdp-details .product-brand').innerText = product.brand;
    document.querySelector('.pdp-desc').innerText = product.desc;
    
    const mainImg = document.getElementById('main-product-img');
    mainImg.src = product.img;
    mainImg.alt = product.title;

    // Remove old thumbnails and just put the main image as a thumbnail for simplicity, 
    // since we only generated 1 angle per product
    const thumbContainer = document.querySelector('.pdp-thumbnails');
    thumbContainer.innerHTML = `<img src="${product.img}" class="thumbnail active" alt="Front View">`;

    // 2. Render Flavors
    const flavorContainer = document.getElementById('flavor-selector');
    flavorContainer.innerHTML = ''; // Clear hardcoded
    const selectedFlavorText = document.getElementById('selected-flavor');
    
    if (product.flavors.length === 1 && product.flavors[0] === "Unflavored") {
        selectedFlavorText.innerText = "Unflavored";
        flavorContainer.parentElement.style.display = 'none'; // Hide selector if only unflavored
    } else {
        flavorContainer.parentElement.style.display = 'block';
        selectedFlavorText.innerText = product.flavors[0];
        
        product.flavors.forEach((flavor, index) => {
            const btn = document.createElement('button');
            btn.className = `pill ${index === 0 ? 'active' : ''}`;
            btn.setAttribute('data-flavor', flavor);
            btn.innerText = flavor;
            flavorContainer.appendChild(btn);
        });
    }

    // 3. Render Weights & Prices
    const weightContainer = document.getElementById('weight-selector');
    weightContainer.innerHTML = ''; // Clear hardcoded
    const selectedWeightText = document.getElementById('selected-weight');
    const currentPriceEl = document.getElementById('pdp-price');
    const oldPriceEl = document.getElementById('pdp-old-price');
    const discountEl = document.getElementById('pdp-discount');

    let defaultWeight = product.weights.find(w => w.isDefault) || product.weights[0];
    
    function updatePriceDisplay(weightObj) {
        selectedWeightText.innerText = weightObj.label;
        currentPriceEl.innerText = '₹' + weightObj.price.toLocaleString('en-IN');
        if (weightObj.oldPrice) {
            oldPriceEl.style.display = 'inline';
            discountEl.style.display = 'inline';
            oldPriceEl.innerText = '₹' + weightObj.oldPrice.toLocaleString('en-IN');
            const discountPct = Math.round(((weightObj.oldPrice - weightObj.price) / weightObj.oldPrice) * 100);
            discountEl.innerText = discountPct + '% OFF';
        } else {
            oldPriceEl.style.display = 'none';
            discountEl.style.display = 'none';
        }
    }

    updatePriceDisplay(defaultWeight);

    product.weights.forEach((weight) => {
        const btn = document.createElement('button');
        btn.className = `pill ${weight === defaultWeight ? 'active' : ''}`;
        btn.setAttribute('data-weight', weight.label);
        btn.innerText = weight.label;
        
        // Add click listener right here
        btn.addEventListener('click', () => {
            document.querySelectorAll('#weight-selector .pill').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            updatePriceDisplay(weight);
        });
        
        weightContainer.appendChild(btn);
    });

    // Re-bind Flavor Clicks
    document.querySelectorAll('#flavor-selector .pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('#flavor-selector .pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            selectedFlavorText.innerText = pill.getAttribute('data-flavor');
        });
    });

    // Quantity Selector
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');
    const qtyInput = document.getElementById('qty-input');

    if (qtyMinus && qtyPlus && qtyInput) {
        qtyMinus.addEventListener('click', () => {
            let val = parseInt(qtyInput.value);
            if (val > 1) qtyInput.value = val - 1;
        });
        
        qtyPlus.addEventListener('click', () => {
            let val = parseInt(qtyInput.value);
            if (val < 10) qtyInput.value = val + 1;
        });
    }

    // Add to Cart Click Handler
    const pdpCartBtn = document.querySelector('.pdp-cart-btn');
    if (pdpCartBtn) {
        pdpCartBtn.addEventListener('click', () => {
            const selectedFlavor = product.flavors.length === 1 && product.flavors[0] === "Unflavored" 
                ? "Unflavored" 
                : document.querySelector('#flavor-selector .pill.active')?.getAttribute('data-flavor') || product.flavors[0];
            
            const activeWeightLabel = document.querySelector('#weight-selector .pill.active')?.getAttribute('data-weight') || defaultWeight.label;
            const weightObj = product.weights.find(w => w.label === activeWeightLabel) || defaultWeight;
            
            const qty = parseInt(document.getElementById('qty-input')?.value || 1);
            
            window.addToCart({
                id: productId,
                title: product.title,
                brand: product.brand,
                img: product.img,
                flavor: selectedFlavor,
                weight: weightObj.label,
                price: weightObj.price,
                qty: qty
            });
        });
    }

    // Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.pdp-tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
        });
    });
});
