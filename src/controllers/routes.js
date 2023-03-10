import MessageController from "./MessageController.js";
import UserController from "./UserController.js";
import sendMessageValidator from "./validators/SendMessageValidator.js";

const routes = (app) => {
  const userController = new UserController();
  const messageController = new MessageController();

  app.get("/api/users", (req, res) => {
    const response = userController.getUsers();
    res.json(response);
  });

  app.post("/api/messages", (req, res, next) => {
    const {category, message} = sendMessageValidator(req, res, next);

    try {
      messageController.sendMessage(category, message);
    } catch (e) {
      res.status(500).send(e.message);
    }

    res.status(201).send();
  });

  app.get("/api/messages", (req, res) => {
    const response = messageController.getMessages();
    res.json(response);
  });

  app.get("/api/messages/categories", (req, res) => {
    const response = messageController.getCategories();
    res.json(response);
  });
};

export default routes;
