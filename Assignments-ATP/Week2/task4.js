// Given 
const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};
// 1. Create a shallow copy
const userCopy = Object.assign({}, user);
// 2.i Change name in copied object
userCopy.name = "Amit";
// 2.ii Change preferences.theme in copied object
userCopy.preferences.theme = "light";
// 3. Log both objects
console.log(user);
console.log(userCopy);
