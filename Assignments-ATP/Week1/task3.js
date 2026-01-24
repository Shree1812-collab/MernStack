const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
// 1. Calculate total marks
let total = 0;
total = marks.maths + marks.physics + marks.chemistry + marks.english;
console.log(total);
// 2. Calculate average marks
let average = total/4;
console.log(average);
// 3. Find highest scoring subject
let highestSubject = "maths";
let highestMarks = marks.maths;
if (marks.physics > highestMarks) {
  highestMarks = marks.physics;
  highestSubject = "physics";
}
if (marks.chemistry > highestMarks) {
  highestMarks = marks.chemistry;
  highestSubject = "chemistry";
}
if (marks.english > highestMarks) {
  highestMarks = marks.english;
  highestSubject = "english";
}
console.log(highestSubject);
console.log(highestMarks);
// 4. Add a new subject
marks.computer = 90;
console.log(marks);
