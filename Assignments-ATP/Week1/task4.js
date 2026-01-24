const temperatures =[32, 35, 28, 40, 38, 30, 42];
// 1.filter() 
const above35 = temperatures.filter(function (temp) {
  return temp > 35;
});
console.log(above35);
// 2.map() 
const fahrenheitTemps = temperatures.map(function (temp) {
  return (temp*9/5)+32;
});
console.log(fahrenheitTemps);
// 3.reduce() 
const total = temperatures.reduce(function (sum, temp) {
  return sum + temp;
}, 0);
const average = total/temperatures.length;
console.log(average);
// 4.find()
const firstAbove40 = temperatures.find(function(temp) {
  return temp > 40;
});
console.log("First temperature above 40:", firstAbove40);
// 5.findIndex() 
const indexOf28 = temperatures.findIndex(function(temp) {
  return temp === 28;
});
console.log(indexOf28);
