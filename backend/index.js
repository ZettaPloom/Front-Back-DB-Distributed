const express = require("express");
const dotenv = require("dotenv");
const database = require("./database");

dotenv.config();
const PORT = process.env["PORT"] || 8080;
const app = express();

app.use(express.json())

app.get("/products", async (_req, res) => {
  const products = await database.query("SELECT product_id, product_name, product_description FROM products;");
  res.send(products);
});

app.listen(PORT);
console.log("Server running on port: " + PORT);
