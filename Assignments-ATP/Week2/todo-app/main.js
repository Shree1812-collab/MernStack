// Import task functions
import {
  addTask,
  getAllTasks,
  completeTask
} from "./Task.js";
// 1. Add tasks
console.log(addTask("Learn JavaScript", "high", "2026-02-10"));
console.log(addTask("Practice ES Modules", "medium", "2026-02-15"));
console.log(addTask("Go jogging", "low", "2020-01-01")); // invalid date
// 2. Display all tasks
console.log("All Tasks:");
console.log(getAllTasks());
// 3. Complete a task
console.log(completeTask(1));
// 4. Display all tasks again
console.log(getAllTasks());
