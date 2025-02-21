const express = require("express");
const router = express.Router();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/abc", (req, res) => {
  res.render("sample.ejs");
});
