import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
export function validatePaymentMethod(method) {
  return ["card", "upi", "cod"].includes(method);
}
export function processPayment(paymentMethod, couponCode = null) {
  if (!validatePaymentMethod(paymentMethod)) {
    return { status: "failed", message: "Invalid payment method" };
  }
  const items = getCartItems();
  const subtotal = getCartTotal();
  let discountData = {
    discount: 0,
    finalTotal: subtotal
  };
  if (couponCode) {
    discountData = applyDiscount(subtotal, couponCode, items);
  }
  // Reduce stock
  items.forEach(item => {
    reduceStock(
      item.name === "Laptop" ? 1 :
      item.name === "Phone" ? 2 :
      item.name === "Headphones" ? 3 :
      item.name === "Mouse" ? 4 : 5,
      item.qty
    );
  });
  clearCart();
  return {
    orderId: "ORD" + Date.now(),
    items,
    subtotal,
    discount: discountData.discount,
    total: discountData.finalTotal,
    paymentMethod,
    status: "success",
    message: "Order placed successfully"
  };
}
