document.addEventListener('DOMContentLoaded', function() {
    // Load cart items from local storage or use an empty array if none exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to update the cart count display
    function updateCartCount() {
        const cartCountSpan = document.getElementById('cartCount');
        if (cartCountSpan) { // Ensure element exists before updating
            cartCountSpan.textContent = cart.length;
        }
    }

    // Update cart count when the page loads
    updateCartCount();

    // Detects when a user clicks any "Add to Cart" button
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() { // Fixed typo "funciton" -> "function"
            // Getting product information from parent element
            const productCard = button.closest('.product-card');
            const productId = productCard.getAttribute('data-product-id');
            const productName = productCard.getAttribute('data-product-name');
            const productPrice = productCard.getAttribute('data-product-price');

            // Create a cart item object
            const cartItem = {
                id: productId,
                name: productName,
                price: parseFloat(productPrice),
                quantity: 1
            };

            // Check if item is already in the cart
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                // If item already in cart, increment the quantity
                existingItem.quantity += 1;
            } else {
                // Else, add the new item
                cart.push(cartItem);
            }

            // Update cart in localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Update the cart count in the header
            updateCartCount();
            alert(`${productName} added to cart!`); // Fixed alert message typo
        });
    });
});
