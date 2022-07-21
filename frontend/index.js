const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const BACK_URL = process.env["BACK_URL"];
const PORT = process.env["PORT"] || 8080;
const webserver = express();

webserver.set("view engine", "pug");
webserver.set("views", path.join(__dirname, "views"));

webserver.get("/", (_req, res) => {
  //TODO: Make request to the API to get the product and send them to the view
  res.render("index", { message: "Testing front" });
});

webserver.listen(PORT);
console.log("Server running on port: " + PORT);
