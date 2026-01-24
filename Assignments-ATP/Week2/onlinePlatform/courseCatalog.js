const publishedCourses = courses.filter(function (course) {
  return course.published === true;
});
console.log(publishedCourses);

const sortedCourses = [...publishedCourses].sort(function (a, b) {
  return b.price - a.price;
});
console.log(sortedCourses);

const courseSummary = publishedCourses.map(function (course) {
  return {
    title: course.title,
    price: course.price
  };
});
console.log(courseSummary);

const totalCourseValue = publishedCourses.reduce(function (sum, course) {
  return sum + course.price;
}, 0);
console.log(totalCourseValue);

const newCourse = { id: 104, title: "Python", price: 1199, published: true };

const updatedCourses = [...courses, newCourse];
console.log(updatedCourses);




