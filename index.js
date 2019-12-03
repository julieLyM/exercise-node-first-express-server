const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hello...");
});

const server = app.listen(5000, function() {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
