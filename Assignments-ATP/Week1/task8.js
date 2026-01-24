// Initial data
let price = 1299;
// Store course label
let courseTag = "";
// Check price range
if (price < 500) {
  courseTag = "Budget Course";
} 
else if (price >= 500 && price <= 1000) {
  courseTag = "Standard Course";
} 
else if (price > 1000) {
  courseTag = "Premium Course";
}
// Print the label
console.log(courseTag);
