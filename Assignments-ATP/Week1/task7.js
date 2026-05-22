let isLoggedIn = true;
let isProfileComplete = false;
// Store message
let message = "";
// Check login status
if (isLoggedIn === false) {
  message = "Please login";
} 
else if (isLoggedIn === true && isProfileComplete === false) {
  message = "Complete your profile";
} 
else if (isLoggedIn === true && isProfileComplete === true) {
  message = "Welcome back!";
}
// Print message
console.log(message);
