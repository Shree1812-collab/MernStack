const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
// 1. Read and print name and email
console.log(user.name);
console.log(user.email);
// 2. Add lastLogin property
user.lastLogin = "2026-01-01";
// 3. Update role to admin
user.role = "admin";
// 4. Delete isActive property
delete user.isActive;
// 5. List all remaining fields
console.log(Object.keys(user));
