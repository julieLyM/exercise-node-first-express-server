const express = require("express");
const fs = require("fs");
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

app.get("/movies", function(req, res) {
  fs.readFile("./movies.json", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.get("*", function(req, res) {
  res.send("all");
});

const server = app.listen(5000, function() {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
