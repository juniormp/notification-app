import express from "express";
import users from "./seed/users.js";

const app = express();

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
