const activeUsers = users.filter(function (user) {
  return user.active === true;
});
console.log(activeUsers);

const activeUserNames = activeUsers.map(function (user) {
  return user.name;
});
console.log(activeUserNames);

const adminExists = users.some(function (user) {
  return user.role === "admin";
});
console.log(adminExists);

const userById = users.find(function (user) {
  return user.id === 1;
});
console.log(userById);

const updatedUsers = users.map(function (user) {
  if (user.id === 1) {
    return { ...user, active: false };
  }
  return user;
});
console.log(updatedUsers);




