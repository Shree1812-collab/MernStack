import express from "express";

export const prodApp = express.Router();

let products = [];

// READ all products
prodApp.get("/products", (req, res) => {
  res.status(200).json({
    message: "All products",
    payload: products
  });
});

// CREATE product
prodApp.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);

  res.status(201).json({
    message: "Product added",
    payload: products
  });
});

// READ product by id
prodApp.get("/products/id/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

// READ product by name
prodApp.get("/products/name/:name", (req, res) => {
  const name = req.params.name;
  const product = products.find(p => p.name === name);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

// UPDATE product
prodApp.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[index] = { ...products[index], ...req.body };

  res.json({
    message: "Product updated",
    payload: products[index]
  });
});

// DELETE product
prodApp.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(index, 1);
  res.json({ message: "Product deleted" });
});
