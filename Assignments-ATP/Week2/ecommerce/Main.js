import { getAllProducts, searchProducts } from './product.js';
import { addToCart, getCartItems, getCartTotal, updateQuantity, removeFromCart } from './cart.js';
import { processPayment } from './payment.js';
// Browse products
console.log("All Products:", getAllProducts());
// Search
console.log("Search 'phone':", searchProducts("phone"));
// Add to cart
console.log(addToCart(1, 2));
console.log(addToCart(3, 3));
console.log(addToCart(1, 1));
// View cart
console.log(getCartItems());
console.log(getCartTotal());
// Update & remove
console.log(updateQuantity(1, 2));
console.log(removeFromCart(3));
// Checkout
const order = processPayment("upi", "WELCOME10");
console.log(order);
