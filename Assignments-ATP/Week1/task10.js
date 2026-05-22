const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
// 1. filter()
const inStockProducts = cart.filter(function (item) {
  return item.inStock === true;
});
console.log(inStockProducts);
// 2. map() 
const productSummary = inStockProducts.map(function (item) {
  return {
    name: item.name,
    totalPrice: item.price * item.quantity
  };
});
console.log(productSummary);
// 3. reduce()
const grandTotal = inStockProducts.reduce(function (sum, item) {
  return sum + (item.price * item.quantity);
}, 0);
console.log(grandTotal);
// 4. find() 
const mouseDetails = cart.find(function (item) {
  return item.name === "Mouse";
});
console.log(mouseDetails);
// 5. findIndex() 
const keyboardIndex = cart.findIndex(function (item) {
  return item.name === "Keyboard";
});
console.log(keyboardIndex);
