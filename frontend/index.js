const path = require("path");
const axios = require("axios");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config();
const BACK_URL = process.env["BACK_URL"];
const PORT = process.env["PORT"] || 8080;
const webserver = express();

webserver.set("view engine", "pug");
webserver.set("views", path.join(__dirname, "views"));

webserver.get("/", (_req, res) => {
  axios.get(BACK_URL).then((response) => {
    console.log(`status ${response.status}`);
    console.log(response);
    res.render("index", { products: response.data });
  });
});

webserver.listen(PORT);
console.log("Server running on port: " + PORT);
