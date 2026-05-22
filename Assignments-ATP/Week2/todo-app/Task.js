import {
  validateTitle,
  validatePriority,
  validateDueDate
} from "./validator.js";
// Task storage
const tasks = [];
let taskIdCounter = 1;
// 1. Add new task
function addTask(title, priority, dueDate) {
  if (!validateTitle(title)) {
    return "Error: Invalid title";
  }
  if (!validatePriority(priority)) {
    return "Error: Invalid priority";
  }
  if (!validateDueDate(dueDate)) {
    return "Error: Invalid due date";
  }
  const task = {
    id: taskIdCounter++,
    title: title,
    priority: priority,
    dueDate: dueDate,
    completed: false
  };
  tasks.push(task);
  return "Task added successfully";
}
// 2. Get all tasks
function getAllTasks() {
  return tasks;
}
// 3. Mark task as complete
function completeTask(taskId) {
  const task = tasks.find(function (t) {
    return t.id === taskId;
  });
  if (!task) {
    return "Task not found";
  }
  task.completed = true;
  return "Task marked as completed";
}
// Export task functions
export {
  addTask,
  getAllTasks,
  completeTask
};
