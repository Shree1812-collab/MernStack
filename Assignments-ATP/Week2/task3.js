// Given 
let dob = "2000-05-15";
// Convert DOB string to Date object
let birthDate = new Date(dob);
// Get today's date
let today = new Date();
// Calculate initial age
let age = today.getFullYear() - birthDate.getFullYear();
// Get month difference
let monthDifference = today.getMonth() - birthDate.getMonth();
// If birthday has not occurred this year, reduce age by 1
if (
  monthDifference < 0 ||
  (monthDifference === 0 && today.getDate() < birthDate.getDate())
) {
  age = age - 1;
}
// Print exact age
console.log("Exact age:", age, "years");
