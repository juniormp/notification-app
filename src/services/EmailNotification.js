import sentMessageData from "../../db/messages";
import INotification from "./INotification";

class EmailNotification extends INotification {
  send(user, message) {
    console.log(`Sending email to ${user.name}: ${message}`);
    this.log(user, message);
  }

  log(message, user) {
    console.log(
      `Email log: Message "${message}" sent to ${
        user.name
      } at ${new Date().toLocaleString()}`
    );
  }
}
