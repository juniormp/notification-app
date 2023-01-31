import sentMessageData from "../../db/messages";
import INotificationStrategy from "./INotificationStrategy";

class PushNotificationStrategy extends INotificationStrategy {
  send(user, message) {
    console.log(`Sending push notification to ${user.name}: ${message}`);
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
