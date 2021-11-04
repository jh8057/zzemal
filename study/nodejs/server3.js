var express = require("express");
var app = express();
app.get("/", function (req, res) {
  res.send("you just send a GET request");
});
app.get("/about", function (req, res) {
  res.send("ABOUT GET request");
});
app.post("/about", function (req, res) {
  res.send("Hello POST");
});
app.put("/about", function (req, res) {
  res.send("PUT request");
});
app.delete("/", function (req, res) {
  res.send("oh, delete");
});
app.listen(3000, function () {
  console.log("APP started on port 3000");
});
