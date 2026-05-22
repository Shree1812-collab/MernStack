// Initial data
let hasPaid = true;
let hasCompletedBasics = false;
// Check eligibility using ternary operator
let enrollMessage = (hasPaid === true && hasCompletedBasics === true)
  ? "Enroll Now"
  : "Complete Requirements";
// Print message
console.log(enrollMessage);
