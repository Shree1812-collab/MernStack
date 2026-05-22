const marks = [78, 92, 35, 88, 40, 67];
// 1. filter()
const passMarks = marks.filter(function (mark) {
  return mark >= 40;
});
console.log(passMarks);
// 2. map()
const graceMarks = marks.map(function (mark) {
  return mark + 5;
});
console.log(graceMarks);
// 3. reduce() 
const highestMark = marks.reduce(function (max, mark) {
  if (mark > max) {
    return mark;
  } else {
    return max;
  }
}, marks[0]);
console.log(highestMark);
// 4. find() 
const firstFail = marks.find(function (mark) {
  return mark < 40;
});
console.log(firstFail);
// 5. findIndex() 
const index92 = marks.findIndex(function (mark) {
  return mark === 92;
});
console.log(index92);
