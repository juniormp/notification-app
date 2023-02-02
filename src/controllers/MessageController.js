import {getTypes} from "../model/MessageType.js";
import GetMessagesService from "../services/GetMessagesService.js";
import SendNotificationService from "../services/SendNotificationService.js";

export default class MessageController {
  constructor() {
    this.sendNotificationService = new SendNotificationService();
    this.getMessageService = new GetMessagesService();
  }

  sendMessage(category, message) {
    this.sendNotificationService.sendNotification(category, message);
  }

  getMessages() {
    return this.getMessageService.execute();
  }

  getCategories() {
    return getTypes();
  }
}
