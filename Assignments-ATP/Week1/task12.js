const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
// 1. filter() 
const itEmployees = employees.filter(function (emp) {
  return emp.department === "IT";
});
console.log(itEmployees);
// 2. map() 
const employeesWithNetSalary = employees.map(function (emp) {
  let bonus = emp.salary * 0.10;
  let netSalary = emp.salary + bonus;
  return {
    id: emp.id,
    name: emp.name,
    salary: emp.salary,
    department: emp.department,
    netSalary: netSalary
  };
});
console.log(employeesWithNetSalary);
// 3. reduce() 
const totalSalary = employees.reduce(function (sum, emp) {
  return sum + emp.salary;
}, 0);
console.log(totalSalary);
// 4. find() 
const employee30000 = employees.find(function (emp) {
  return emp.salary === 30000;
});
console.log(employee30000);
// 5. findIndex()
const nehaIndex = employees.findIndex(function (emp) {
  return emp.name === "Neha";
});
console.log(nehaIndex);
