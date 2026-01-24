const roleNames = Object.keys(roles);
console.log(roleNames);

const studentCanDelete = roles.student.includes("delete");
console.log(studentCanDelete);

const allPermissions = Object.values(roles).flat();
const uniquePermissions = [...new Set(allPermissions)];
console.log(uniquePermissions);

const updatedRoles = {
  ...roles,
  moderator: ["update", "view"]
};
console.log(updatedRoles);



