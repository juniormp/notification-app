import sentMessageData from "../../db/messages";
import INotification from "./INotification";

class EmailNotification extends INotification {
  send(user, message) {
    console.log(
      `Sending Email to ${user.name} (${user.email}): ${message.content}`
    );

    sentMessageData.push({
      userId: user.id,
      channel: "Email",
      message: message,
    });
  }
}
