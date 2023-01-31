import sentMessageData from "../../db/sentMessageData.js";
import Message from "../model/message.js";

export default class PushNotificationStrategy {
  send(user, category, message) {
    sentMessageData.push(new Message(category, message, Date.now()));
    this.log(user, message);
  }

  log(user, message) {
    console.log(
      `Push log: Message "${message}" sent to ${
        user.name
      } at ${new Date().toLocaleString()}`
    );
  }
}
