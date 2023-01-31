import express from "express";
import users from "./seed/users.js";
import SendNotificationService from "./src/services/SendNotificationService.js";

const app = express();

app.use(express.json());

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/message", (req, res) => {
  const {category, message} = req.body;
  const sendNotification = new SendNotificationService();

  try {
    sendNotification.sendNotification(category, message);
  } catch (e) {
    res.status(500).send(e.message);
  }

  res.status(201).send();
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
