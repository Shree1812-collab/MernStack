const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
// 1. filter() 
const creditTransactions = transactions.filter(function (tx) {
  return tx.type === "credit";
});
console.log(creditTransactions);
// 2. map() 
const amounts = transactions.map(function (tx) {
  return tx.amount;
});
console.log(amounts);
// 3. reduce()
const finalBalance = transactions.reduce(function (balance, tx) {
  if (tx.type === "credit") {
    return balance + tx.amount;
  } else {
    return balance - tx.amount;
  }
}, 0);
console.log(finalBalance);
// 4. find() → first debit transaction
const firstDebit = transactions.find(function (tx) {
  return tx.type === "debit";
});
console.log(firstDebit);
// 5. findIndex()
const index10000 = transactions.findIndex(function (tx) {
  return tx.amount === 10000;
});
console.log(index10000);
