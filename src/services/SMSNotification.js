import sentMessageData from "../../db/messages";
import INotification from "./INotification";

class SMSNotification extends INotification {
  send(user, message) {
    console.log(
      `Sending SMS to ${user.name} (${user.phoneNumber}): ${message.content}`
    );

    sentMessageData.push({
      userId: user.id,
      channel: "SMS",
      message: message,
    });
  }
}
