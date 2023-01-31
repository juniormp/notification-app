import ChannelType from "../model/ChannelType.js";
import EmailNotificationStrategy from "./EmailNotificationStrategy.js";
import PushNotificationStrategy from "./PushNotificationStrategy.js";
import SMSNotificationStrategy from "./SMSNotificationStrategy.js";

export default class NotificationStrategy {
  getStrategy(channel) {
    switch (channel) {
      case ChannelType.Email:
        return new EmailNotificationStrategy();
      case ChannelType.SMS:
        return new SMSNotificationStrategy();
      case ChannelType.Push:
        return new PushNotificationStrategy();
      default:
        console.log("invalid channel");
    }
  }
}
