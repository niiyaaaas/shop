const fs = require('fs');

const css = `
/* --- CART DRAWER --- */
.cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9998;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
}

.cart-overlay.active {
    opacity: 1;
    visibility: visible;
}

.cart-drawer {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    max-width: 400px;
    height: 100vh;
    background: var(--clr-bg-main);
    z-index: 9999;
    transition: right 0.4s cubic-bezier(0.77, 0, 0.175, 1);
    display: flex;
    flex-direction: column;
    border-left: 1px solid var(--clr-border);
}

.cart-drawer.active {
    right: 0;
}

.cart-header {
    padding: 1.5rem;
    border-bottom: 1px solid var(--clr-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.close-cart-btn {
    background: none;
    border: none;
    color: var(--clr-text-main);
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s ease;
}

.close-cart-btn:hover {
    color: var(--clr-text-muted);
}

.cart-items {
    flex-grow: 1;
    overflow-y: auto;
    padding: 1.5rem;
}

.cart-empty-msg {
    text-align: center;
    color: var(--clr-text-muted);
    margin-top: 2rem;
}

.cart-item {
    display: flex;
    gap: 1rem;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--clr-border);
}

.cart-item-img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    background: var(--clr-bg-card);
    padding: 0.5rem;
}

.cart-item-details {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

.cart-item-title {
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.3;
}

.cart-item-variant {
    font-size: 0.8rem;
    color: var(--clr-text-muted);
}

.cart-item-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
}

.cart-item-price {
    font-family: var(--font-alt);
    font-weight: 600;
}

.cart-item-remove {
    background: none;
    border: none;
    color: var(--clr-text-muted);
    cursor: pointer;
    font-size: 0.85rem;
    text-decoration: underline;
    transition: color 0.3s ease;
}

.cart-item-remove:hover {
    color: white;
}

.cart-footer {
    padding: 1.5rem;
    border-top: 1px solid var(--clr-border);
    background: var(--clr-bg-card);
}

.cart-total-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-family: var(--font-alt);
    font-weight: 600;
}

.checkout-btn {
    width: 100%;
    padding: 1rem;
    background: var(--clr-text-main);
    color: var(--clr-bg-main);
    border: none;
    font-family: var(--font-alt);
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    transition: background 0.3s ease;
}

.checkout-btn:hover {
    background: #ccc;
}
`;

fs.appendFileSync('css/styles.css', css);
console.log('Appended cart CSS to styles.css');
