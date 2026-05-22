// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
  if (!title || title.trim().length < 3) {
    return false;
  }
  return true;
}
// 2. Validate priority (low, medium, high)
function validatePriority(priority) {
  const allowed = ["low", "medium", "high"];
  return allowed.includes(priority);
}
// 3. Validate due date (must be future date)
function validateDueDate(date) {
  const today = new Date();
  const due = new Date(date);
  if (isNaN(due.getTime())) {
    return false;
  }
  return due > today;
}
// Export validation functions
export {
  validateTitle,
  validatePriority,
  validateDueDate
};
