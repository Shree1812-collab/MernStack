import express from "express";
//create mini express app(calling Router)
export const userApp = express.Router();
// In-memory data
let users = [];

// GET – all users
userApp.get("/users", (req, res) => {
  res.status(200).json({
    message: "All users",
    payload: users
  });
});

// POST – create user
userApp.post("/users", (req, res) => {
  const newUser = req.body;

  if (!newUser.id) {
    return res.status(400).json({
      message: "User id is required"
    });
  }
  users.push(newUser);
  res.status(201).json({
    message: "User added successfully",
    payload: newUser
  });
});

// PUT – update user by id
userApp.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index === -1) {
    return res.status(404).json({
      message: "User not found"
    });
  }
  users[index] = { ...users[index], ...req.body };
  res.status(200).json({
    message: "User updated successfully",
    payload: users[index]
  });
});

// DELETE – delete user by id
userApp.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "User not found"
    });
  }
  users.splice(index, 1);
  res.status(200).json({
    message: "User deleted successfully"
  });
});
