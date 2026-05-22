const courses = ["javascript", "react", "node", "mongodb", "express"];
// 1. filter() 
const longCourses = courses.filter(function (course) {
  return course.length > 5;
});
console.log(longCourses);
// 2. map() 
const upperCaseCourses = courses.map(function (course) {
  return course.toUpperCase();
});
console.log(upperCaseCourses);
// 3. reduce() 
const courseString = upperCaseCourses.reduce(function (result, course) {
  if (result === "") {
    return course;
  } else {
    return result + " | " + course;
  }
}, "");
console.log(courseString);
// 4. find() 
const foundCourse = courses.find(function (course) {
  return course === "react";
});
console.log(foundCourse);
// 5. findIndex() 
const nodeIndex = courses.findIndex(function (course) {
  return course === "node";
});
console.log(nodeIndex);
