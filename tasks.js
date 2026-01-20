//task 1
/*const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
console.log("Name:", user.name);
console.log("Email:", user.email);
user.lastLogin = "2026-01-01";
user.role = "admin";
delete user.isActive;
const remainingFields = Object.keys(user);
console.log("Remaining Fields:", remainingFields);
console.log("Updated User Object:", user);
//task 2
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
let sum=0
let maxmarks=marks[0]
for(let i=0,i<maxmarks.length,i++)
//task 1
const temperatures = [32, 35, 28, 40, 38, 30, 42];
let result=temperatures.filter(function(element){
    return element>35
})
console.log(result)
const faren=temperatures.map( temp => (temp * 9/5) + 32)
console.log(faren)
const tempabove40=temperatures.find(temp => temp>40)
console.log(tempabove40)
const temp28=temperatures.findIndex(temp => temp === 28)
console.log(temp28)
//task 3
const courses = ["javascript", "react", "node", "mongodb", "express"];
let names = courses.filter(name => name.length > 5);
console.log(names)
let upperCourses = courses.map(name => name.toUpperCase());
console.log(upperCourses)
const findCourse = courses.find(name => name === "react");
console.log(findCourse)
const findCourse1 = courses.findIndex(name => name === "node");
console.log(findCourse1)

//task 4
const marks = [78, 92, 35, 88, 40, 67];
const passingMarks = marks.filter(marks => marks >= 45);
console.log(passingMarks)
const graceMarks = marks.map(mark => mark + 5);
console.log(graceMarks)
const highestMark = marks.reduce((max, current) => (current > max ? current : max), marks[0]);
console.log(highestMark)
const firstFailure = marks.find(mark => mark < 40);
console.log(firstFailure)
const indexOf92 = marks.findIndex(mark => mark === 92);
console.log(indexOf92)
//task 5
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//filtering instock products
let res=cart.filter(cartObj => cartObj.inStock === true)
console.log(res)
// map to create new array
const productTotals = cart.map(product => {
    return {
        name:product.name,
        totalPrice:product.price*product.quantity
    };
});
console.log(productTotals)
//reduce to calculate total
const grandTotal = cart.reduce((acc,ele) => {
    return acc + (ele.price * ele.quantity);
}, 0); 
console.log(grandTotal);
//finding mouse
const mouseDetails = cart.find(product => product.name === "Mouse");
console.log(mouseDetails);
//findIndex of keyboard
const indexOfkeyboard = cart.findIndex(cart => cart.name === "Keyboard");
console.log(indexOfkeyboard)
//task 6
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
let passStudents= students.filter(stuObj => stuObj.marks >= 40)
console.log(passStudents)
const averageMarks = students.reduce((acc,ele) =>acc+ele.marks, 0) / students.length;
console.log(averageMarks);
let find92= students.find(stuObj => stuObj.marks === 92)
console.log(find92)
let findInd= students.findIndex(stuObj => stuObj.name === "Kiran" )
console.log(findInd)
//task 7
let totalAmount=0;
totalAmount += 500;
totalAmount += 1200;
totalAmount -= 200;
let gst = totalAmount*0.18;
totalAmount += gst;
console.log(totalAmount);
//task 8
let isLoggedin=true;
let isProfileComplete=true;
let message;
if (isLoggedin===false)
    {
        message='please login'
    }
if (isLoggedin===true && isProfileComplete===false) 
    {
        message='complete your profile'
    } 
    else 
    {
        message='welcome back'
    }
console.log(message)
//task 9
const user = {
  id:101,
  name:"Ravi",
  email:"ravi@gmail.com",
  role:"student",
  isActive:true
};

console.log("Name:",user.name);
console.log("Email:",user.email);
user.lastLogin = "2026-01-01";
user.role="admin"
delete user.isActive;
const keys=Object.keys(user);
console.log("Remaining fields:",keys);
//task 10
const marks = {
  maths:78,
  physics:65,
  chemistry:82,
  english:55
};
let total = 0;
for (let subject in marks) {
  total += marks[subject];
}
console.log(total);
let average  = total/Object.keys(marks).length;
console.log(average)
let highestSubject="";
let highestMarks = 0;
for(let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}
console.log(highestSubject)
marks.computer=90;
console.log(marks)
//task 11
const settings = {
  theme:"light",
  notifications:true,
  autoSave:false,
  language:"en"
};
settings.theme = (settings.theme === "light") ? "dark":"light";
settings.autoSave=true;
delete settings.notifications;
Object.freeze(settings)
console.log(settings)
//task 12
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
const itEmployees = employees.filter(emp => emp.department === "IT");
console.log(itEmployees);
const employeesWithNetSalary = employees.map(emp => ({
  ...emp,
  netSalary: emp.salary + emp.salary * 0.10
}));
console.log(employeesWithNetSalary);
const totalSalaryPayout = employees.reduce(
  (total, emp) => total + emp.salary,
  0
);
console.log(totalSalaryPayout);
const employeeWith30000 = employees.find(emp => emp.salary === 30000);
console.log(employeeWith30000);
const indexOfNeha = employees.findIndex(emp => emp.name === "Neha");
console.log(indexOfNeha);
//task 13
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log(sciFiMovies);
const movieTitles = movies.map(
  movie => `${movie.title} (${movie.rating})`
);
console.log(movieTitles);
const totalRating = movies.reduce(
  (sum, movie) => sum + movie.rating,
  0
);
const averageRating = totalRating / movies.length;
console.log(averageRating);
const jokerMovie = movies.find(movie => movie.title === "Joker");
console.log(jokerMovie);
const avengersIndex = movies.findIndex(
  movie => movie.title === "Avengers"
);
console.log(avengersIndex);
//task 14
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
const creditTransactions = transactions.filter(
  txn => txn.type === "credit"
);
console.log(creditTransactions);
const transactionAmounts = transactions.map(txn => txn.amount);
console.log(transactionAmounts);
const finalBalance = transactions.reduce((balance, txn) => {
  return txn.type === "credit"
    ? balance + txn.amount
    : balance - txn.amount;
}, 0);
console.log(finalBalance);
const firstDebit = transactions.find(
  txn => txn.type === "debit"
);
console.log(firstDebit);
const indexOf10000 = transactions.findIndex(
  txn => txn.amount === 10000
);
console.log(indexOf10000);*/
