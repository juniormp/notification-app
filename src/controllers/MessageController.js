import users from "../../seed/users.js";
import SendNotificationService from "../services/SendNotificationService.js";

export default class MessageController {
  constructor() {
    this.sendNotificationService = new SendNotificationService();
  }

  sendMessage(category, message) {
    this.sendNotificationService.sendNotification(category, message);
  }
}
