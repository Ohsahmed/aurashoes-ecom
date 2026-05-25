// Cart State Management
let cart = [];

const cartBtn = document.getElementById('cart-btn');
const cartDropdown = document.getElementById('cart-dropdown');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const clearCartBtn = document.getElementById('clear-cart');

// Toggle Dropdown Display
cartBtn.addEventListener('click', () => {
    cartDropdown.classList.toggle('hidden');
});

// Add Item Logic
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
}

// Clear Cart Logic
clearCartBtn.addEventListener('click', () => {
    cart = [];
    updateCartUI();
});

// Synchronize UI data structures
function updateCartUI() {
    cartCount.innerText = cart.length;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-gray-400 text-center py-4">Your cart is empty.</p>';
        cartTotal.innerText = "$0.00";
        return;
    }
    
    cartItemsContainer.innerHTML = "";
    let total = 0;
    
    cart.forEach(item => {
        total += item.price;
        const itemRow = document.createElement('div');
        itemRow.className = "flex justify-between items-center py-1 border-b border-gray-100";
        itemRow.innerHTML = `<span>${item.name}</span><span class="font-semibold">$${item.price}</span>`;
        cartItemsContainer.appendChild(itemRow);
    });
    
    cartTotal.innerText = `$${total.toFixed(2)}`;
}
