import { getProductById, checkStock } from './product.js';
let cartItems = [];
export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return "Product not found";
  if (!checkStock(productId, quantity)) return "Not enough stock";
  const existing = cartItems.find(item => item.productId === productId);
  if (existing) {
    existing.qty += quantity;
  } else {
    cartItems.push({ productId, qty: quantity });
  }
  return "Item added to cart";
}
export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId);
  return "Item removed from cart";
}
export function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) return "Insufficient stock";
  const item = cartItems.find(i => i.productId === productId);
  if (!item) return "Item not in cart";
  item.qty = newQuantity;
  return "Quantity updated";
}
export function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      name: product.name,
      price: product.price,
      qty: item.qty,
      total: product.price * item.qty,
      category: product.category
    };
  });
}
export function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.total, 0);
}
export function clearCart() {
  cartItems = [];
}
