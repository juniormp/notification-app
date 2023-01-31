import sentMessageData from "../../db/messages.js";

export default class EmailNotificationStrategy {
  send(user, message) {
    console.log(`Sending email to ${user.name}: ${message}`);
    this.log(user, message);
  }

  log(user, message) {
    console.log(
      `Email log: Message "${message}" sent to ${
        user.name
      } at ${new Date().toLocaleString()}`
    );
  }
}
