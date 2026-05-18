// Cart System

const PHONE_NUMBER = "918848598156"; // WhatsApp number

const cartHtml = `
<div class="cart-overlay" id="cart-overlay"></div>
<div class="cart-drawer" id="cart-drawer">
    <div class="cart-header">
        <h2 class="cart-title">Your Bag</h2>
        <button class="close-cart-btn" id="close-cart">
            <i class="fas fa-times"></i>
        </button>
    </div>
    <div class="cart-items" id="cart-items-container">
        <!-- Cart items injected here -->
    </div>
    <div class="cart-footer">
        <div class="cart-total-row">
            <span>Total</span>
            <span id="cart-total-price">₹0</span>
        </div>
        <button class="checkout-btn" id="checkout-btn">
            Checkout via WhatsApp <i class="fab fa-whatsapp" style="font-size: 1.2rem; margin-left: 5px;"></i>
        </button>
    </div>
</div>
`;

// Inject Cart HTML into body
document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', cartHtml);

    // Initialize State
    let cart = JSON.parse(localStorage.getItem('vishnu_cart')) || [];
    
    const cartOverlay = document.getElementById('cart-overlay');
    const cartDrawer = document.getElementById('cart-drawer');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    // Bind open cart buttons (usually the nav icon)
    const openCartBtns = document.querySelectorAll('.nav-cart');
    openCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openCart();
        });
    });

    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    function openCart() {
        cartOverlay.classList.add('active');
        cartDrawer.classList.add('active');
        renderCart();
    }

    function closeCart() {
        cartOverlay.classList.remove('active');
        cartDrawer.classList.remove('active');
    }

    function saveCart() {
        localStorage.setItem('vishnu_cart', JSON.stringify(cart));
        updateBadge();
    }

    function updateBadge() {
        const badges = document.querySelectorAll('.cart-badge');
        const count = cart.reduce((acc, item) => acc + item.qty, 0);
        badges.forEach(badge => {
            badge.innerText = count;
        });
    }

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="cart-empty-msg">Your bag is empty.</p>';
            cartTotalPrice.innerText = '₹0';
            checkoutBtn.disabled = true;
            checkoutBtn.style.opacity = '0.5';
            return;
        }

        checkoutBtn.disabled = false;
        checkoutBtn.style.opacity = '1';

        let total = 0;

        cart.forEach((item, index) => {
            total += (item.price * item.qty);
            
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            
            let variantText = item.weight;
            if (item.flavor && item.flavor !== "Unflavored") {
                variantText = `${item.flavor}, ${item.weight}`;
            }

            itemEl.innerHTML = `
                <img src="${item.img}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-variant">${variantText} (Qty: ${item.qty})</div>
                    <div class="cart-item-bottom">
                        <span class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
                        <button class="cart-item-remove" data-index="${index}">Remove</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemEl);
        });

        cartTotalPrice.innerText = '₹' + total.toLocaleString('en-IN');

        // Bind remove buttons
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.target.getAttribute('data-index');
                cart.splice(idx, 1);
                saveCart();
                renderCart();
            });
        });
    }

    // Global Add To Cart Function
    window.addToCart = function(product) {
        // Check if exact same product variant is already in cart
        const existingItem = cart.find(item => 
            item.id === product.id && 
            item.flavor === product.flavor && 
            item.weight === product.weight
        );

        if (existingItem) {
            existingItem.qty += product.qty;
        } else {
            cart.push(product);
        }
        
        saveCart();
        showToast('Added to Cart');
        openCart();
    };

    // WhatsApp Checkout Logic
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;

        let message = "*New Order from Vishnu Fitness*%0A%0A";
        let total = 0;

        cart.forEach((item, i) => {
            total += (item.price * item.qty);
            let variantText = item.weight;
            if (item.flavor && item.flavor !== "Unflavored") {
                variantText = `${item.flavor}, ${item.weight}`;
            }
            message += `${i+1}. ${item.qty}x ${item.title} (${variantText}) - ₹${(item.price * item.qty).toLocaleString('en-IN')}%0A`;
        });

        message += `%0A*Total: ₹${total.toLocaleString('en-IN')}*%0A%0A`;
        message += "Please let me know how to proceed with payment and shipping.";

        const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });

    // Initial Badge Update
    updateBadge();
});
