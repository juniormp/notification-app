const express = require("express");
const users = require("./seed/users");

const app = express();

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
