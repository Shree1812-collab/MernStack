import express from "express";
import { userApp } from "./APIs/userapi.js";
import { prodApp } from "./APIs/productapi.js";
const app = express();
// middleware
app.use(express.json());
// forward requests
app.use("/user-api", userApp);
app.use("/prod-api", prodApp);
// server
app.listen(3001, () => {
  console.log("HTTP server listening on port 3001");
});
