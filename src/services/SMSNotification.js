import sentMessageData from "../../db/messages";
import INotification from "./INotification";

class SMSNotification extends INotification {
  send(user, message) {
    console.log(`Sending SMS to ${user.name}: ${message}`);
    this.log(user, message);
  }

  log(user, message) {
    console.log(
      `SMS log: Message "${message}" sent to ${
        user.name
      } at ${new Date().toLocaleString()}`
    );
  }
}
