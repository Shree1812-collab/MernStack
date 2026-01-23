// ****************** TASK 1 - User Object Stuff ******************
console.log("=== TASK 1 ===");
const user = {  // basic user info
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
// showing user details
console.log("User Name: " + user.name);
console.log("User Email: " + user.email);

// updating some properties
user.lastLogin = "2026-01-01";  // adding new field
user.role = "admin";  // changing role
delete user.isActive;  // removing field

// whats left in object?
const keysLeft = Object.keys(user);
console.log("Fields after changes: ", keysLeft);
console.log("Final user object: ", user);

// ****************** TASK 2 - Temperature Array ******************
console.log("\n=== TASK 2 ===");
const tempData = [32, 35, 28, 40, 38, 30, 42];
// find hot days (>35)
const hotDays = tempData.filter(function(t) {
  return t > 35;
});
console.log("Hot temperatures (>35): ", hotDays);

// convert to fahrenheit
const fahrenheit = tempData.map(t => (t * 9/5) + 32);
console.log("In Fahrenheit: ", fahrenheit);

// find first temp above 40
const veryHot = tempData.find(t => t > 40);
console.log("First temp above 40: ", veryHot);

// where is 28?
const indexOf28 = tempData.findIndex(t => t === 28);
console.log("28 is at index: ", indexOf28);

// ****************** TASK 3 - Course List ******************
console.log("\n=== TASK 3 ===");
const myCourses = ["javascript", "react", "node", "mongodb", "express"];
// long course names
const longNames = myCourses.filter(c => c.length > 5);
console.log("Courses with long names: ", longNames);

// uppercase them
const upperCourses = myCourses.map(c => c.toUpperCase());
console.log("All in uppercase: ", upperCourses);

// find react
const reactCourse = myCourses.find(c => c === "react");
console.log("Found react: ", reactCourse);

// find where node is
const nodeIndex = myCourses.findIndex(c => c === "node");
console.log("Node is at index: ", nodeIndex);

// ****************** TASK 4 - Marks Processing ******************
console.log("\n=== TASK 4 ===");
const studentMarks = [78, 92, 35, 88, 40, 67];
// passing marks (45+)
const passed = studentMarks.filter(m => m >= 45);
console.log("Passing marks: ", passed);

// give 5 grace marks
const afterGrace = studentMarks.map(m => m + 5);
console.log("After grace (+5): ", afterGrace);

// highest mark
let highest = studentMarks[0];
for(let i = 1; i < studentMarks.length; i++) {
  if(studentMarks[i] > highest) {
    highest = studentMarks[i];
  }
}
console.log("Highest mark: ", highest);

// first fail
const firstFail = studentMarks.find(m => m < 40);
console.log("First failure: ", firstFail);

// index of 92
const idx92 = studentMarks.findIndex(m => m === 92);
console.log("92 at index: ", idx92);

// ****************** TASK 5 - Shopping Cart ******************
console.log("\n=== TASK 5 ===");
const cartItems = [
  { id: 101, name: "Laptop", price: 60000, qty: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, qty: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, qty: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, qty: 1, inStock: true }
];
// only available items
const available = cartItems.filter(item => item.inStock);
console.log("Available items: ", available);

// calculate total per item
const itemTotals = cartItems.map(item => {
  return {
    product: item.name,
    total: item.price * item.qty
  };
});
console.log("Item totals: ", itemTotals);

// grand total
let cartTotal = 0;
cartItems.forEach(item => {
  cartTotal += item.price * item.qty;
});
console.log("Cart total: ₹" + cartTotal);

// find mouse
const mouse = cartItems.find(item => item.name === "Mouse");
console.log("Mouse details: ", mouse);

// keyboard position
const kbIndex = cartItems.findIndex(item => item.name === "Keyboard");
console.log("Keyboard at index: ", kbIndex);

// ****************** TASK 6 - Student Records ******************
console.log("\n=== TASK 6 ===");
const classStudents = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
// passed students (40+)
const passedStudents = classStudents.filter(s => s.marks >= 40);
console.log("Passed students: ", passedStudents);

// average marks
let sumMarks = 0;
classStudents.forEach(s => {
  sumMarks += s.marks;
});
const avgMarks = sumMarks / classStudents.length;
console.log("Class average: ", avgMarks.toFixed(1));
// student with 92
const topScorer = classStudents.find(s => s.marks === 92);
console.log("Student with 92: ", topScorer);

// find kiran's position
const kiranPos = classStudents.findIndex(s => s.name === "Kiran");
console.log("Kiran at index: ", kiranPos);

// ****************** TASK 7 - Bill Calculation ******************
console.log("\n=== TASK 7 ===");
let billAmount = 0;
billAmount = billAmount + 500;   // item 1
billAmount = billAmount + 1200;  // item 2
billAmount = billAmount - 200;   // discount
// add GST
const gstAmount = billAmount * 0.18;
billAmount = billAmount + gstAmount;
console.log("Final bill with GST: ₹" + billAmount.toFixed(2));

// ****************** TASK 8 - Login Check ******************
console.log("\n=== TASK 8 ===");
let loggedIn = true;
let profileDone = true;
let msg = "";
// check conditions
if(!loggedIn) {
  msg = "Please login first!";
} else if(loggedIn && !profileDone) {
  msg = "Please complete your profile";
} else {
  msg = "Welcome back!";
}
console.log("Message: " + msg);

// ****************** TASK 9 - Another User Object ******************
console.log("\n=== TASK 9 ===");
const user2 = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  active: true
};
console.log("Name:", user2.name);
console.log("Email:", user2.email);
// modifications
user2.lastLogin = "2026-01-01";
user2.role = "admin";
delete user2.active;
const remaining = Object.keys(user2);
console.log("Keys left: ", remaining);

// ****************** TASK 10 - Subject Marks ******************
console.log("\n=== TASK 10 ===");
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
// total marks
let total = 0;
for(let sub in marks) {
  total += marks[sub];
}
console.log("Total marks: " + total);
// average
const subjects = Object.keys(marks);
const average = total / subjects.length;
console.log("Average: " + average.toFixed(2));
// highest marks
let highestMark = 0;
let bestSubject = "";
for(let sub in marks) {
  if(marks[sub] > highestMark) {
    highestMark = marks[sub];
    bestSubject = sub;
  }
}
console.log("Best subject: " + bestSubject + " (" + highestMark + ")");
// add computer marks
marks.computer = 90;
console.log("With computer: ", marks);

// ****************** TASK 11 - App Settings ******************
console.log("\n=== TASK 11 ===");
const appSettings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
// theme
if(appSettings.theme === "light") {
  appSettings.theme = "dark";
} else {
  appSettings.theme = "light";
}
// turn on auto-save
appSettings.autoSave = true;
// remove notifications
delete appSettings.notifications;
// lock settings
Object.freeze(appSettings);
console.log("Final settings: ", appSettings);

// ****************** TASK 12 - Employee Data ******************
console.log("\n=== TASK 12 ===");
const employees = [
  { id: 201, name: "Amit", salary: 45000, dept: "IT" },
  { id: 202, name: "Neha", salary: 60000, dept: "HR" },
  { id: 203, name: "Rahul", salary: 75000, dept: "IT" },
  { id: 204, name: "Pooja", salary: 30000, dept: "Sales" }
];
// IT employees only
const itDept = employees.filter(emp => emp.dept === "IT");
console.log("IT Department: ", itDept);
// add bonus
const withBonus = employees.map(emp => {
  return {
    ...emp,
    netSalary: emp.salary + (emp.salary * 0.10)
  };
});
console.log("With bonus: ", withBonus);
// total salary cost
let salaryTotal = 0;
employees.forEach(emp => {
  salaryTotal += emp.salary;
});
console.log("Total salary: " + salaryTotal);
// find 30000 salary
const lowSalary = employees.find(emp => emp.salary === 30000);
console.log("Employee with 30k: ", lowSalary);
//
const nehaIndex = employees.findIndex(emp => emp.name === "Neha");
console.log("Neha at index: ", nehaIndex);

// ****************** TASK 13 - Movies ******************
console.log("\n=== TASK 13 ===");
const movies = [
  { id: 1, title: "Inception", type: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", type: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", type: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", type: "Sci-Fi", rating: 8.6 }
];
// sci-fi movies
const sciFi = movies.filter(m => m.type === "Sci-Fi");
console.log("Sci-Fi movies: ", sciFi);
// title with rating
const movieList = movies.map(m => `${m.title} - ${m.rating}`);
console.log("Movie list: ", movieList);
// average rating
let ratingSum = 0;
movies.forEach(m => {
  ratingSum += m.rating;
});
const avgRating = ratingSum / movies.length;
console.log("Average rating: " + avgRating.toFixed(1));

// find joker
const joker = movies.find(m => m.title === "Joker");
console.log("Joker movie: ", joker);
// avengers index
const avengersIdx = movies.findIndex(m => m.title === "Avengers");
console.log("Avengers at index: ", avengersIdx);

// ****************** TASK 14 - Bank Stuff ******************
console.log("\n=== TASK 14 ===");
const bankTxns = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
// only credits
const credits = bankTxns.filter(t => t.type === "credit");
console.log("Credits: ", credits);

// just amounts
const amounts = bankTxns.map(t => t.amount);
console.log("Amounts: ", amounts);
// calculate balance
let balance = 0;
bankTxns.forEach(t => {
  if(t.type === "credit") {
    balance += t.amount;
  } else {
    balance -= t.amount;
  }
});
console.log("Final balance: " + balance);
// first debit
const firstDebit = bankTxns.find(t => t.type === "debit");
console.log("First debit: ", firstDebit);

// find 10000 transaction
const bigTxnIndex = bankTxns.findIndex(t => t.amount === 10000);
console.log("10000 at index: ", bigTxnIndex);

