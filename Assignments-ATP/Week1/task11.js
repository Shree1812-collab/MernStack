const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
// 1. filter() 
const passedStudents = students.filter(function (student) {
  return student.marks >= 40;
});
console.log( passedStudents);
// 2. map() 
const studentsWithGrade = students.map(function (student) {
  let grade = "";
  if (student.marks >= 90) {
    grade = "A";
  } else if (student.marks >= 75) {
    grade = "B";
  } else if (student.marks >= 60) {
    grade = "C";
  } else {
    grade = "D";
  }
  return {
    id: student.id,
    name: student.name,
    marks: student.marks,
    grade: grade
  };
});
console.log(studentsWithGrade);
// 3. reduce()
const totalMarks = students.reduce(function (sum, student) {
  return sum + student.marks;
}, 0);
const averageMarks = totalMarks / students.length;
console.log(averageMarks);
// 4. find() 
const student92 = students.find(function (student) {
  return student.marks === 92;
});
console.log(student92);
// 5. findIndex() 
const kiranIndex = students.findIndex(function (student) {
  return student.name === "Kiran";
});
console.log(kiranIndex);
