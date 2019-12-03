const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("this is the beginning...");
});

app.get("/hello", function(req, res) {
  res.send("route hello...");
});

app.get("/bye", function(req, res) {
  res.send("byebye...");
});

const server = app.listen(5000, function() {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
