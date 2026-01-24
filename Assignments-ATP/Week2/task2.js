// Given enrollment deadline
let enrollmentDeadline = new Date("2026-01-20");
// Get today's date
let today = new Date();
// 1. Check enrollment status
if (today < enrollmentDeadline) {
  console.log("Enrollment Open");
} else {
  console.log("Enrollment Closed");
}
// 2. Validate user input date
let inputDate = "2026-02-30";
let userDate = new Date(inputDate);
// Check if date is valid
if (isNaN(userDate.getTime())) {
  console.log("Invalid date");
} else {
  console.log("Valid date");
}
