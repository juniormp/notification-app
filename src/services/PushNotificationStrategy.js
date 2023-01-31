import sentMessageData from "../../db/messages.js";

export default class PushNotificationStrategy {
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
