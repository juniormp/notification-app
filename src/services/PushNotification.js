import sentMessageData from "../../db/messages";
import INotification from "./INotification";

class EmailNotification extends INotification {
  send(user, message) {
    console.log(`Sending Push Notification to ${user.name}`);

    sentMessageData.push({
      userId: user.id,
      channel: "Email",
      message: message,
    });
  }
}
