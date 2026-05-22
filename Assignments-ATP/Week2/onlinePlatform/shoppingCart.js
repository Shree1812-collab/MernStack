const fullCart = cart.map(function (item) {
  const course = courses.find(function (c) {
    return c.id === item.courseId;
  });
  return {
    title: course.title,
    price: course.price,
    qty: item.qty
  };
});
console.log(fullCart);

const cartTotal = fullCart.reduce(function (sum, item) {
  return sum + item.price * item.qty;
}, 0);
console.log(cartTotal);

const updatedCart = cart.map(function (item) {
  if (item.courseId === 101) {
    return { ...item, qty: item.qty + 1 };
  }
  return item;
});
console.log(updatedCart);

const cartAfterRemoval = cart.filter(function (item) {
  return item.courseId !== 103;
});
console.log(cartAfterRemoval);

const allPaid = fullCart.every(function (item) {
  return item.price > 0;
});
console.log(allPaid);





