// Given 
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};
// 1. Create deep copy 
const orderCopy = structuredClone(order);
// 2. Modify copied object
orderCopy.customer.address.city = "Bangalore";
orderCopy.items[0].price = 75000;
// 3. Verify original is unchanged
console.log("Original order:", order);
console.log("Copied order:", orderCopy);
