import users from "../../seed/users.js";
import NotificationStrategy from "./NotificationStrategy.js";

export default class SendNotificationService {
  sendNotification(category, message) {
    const subscribedUsers = users.filter((user) => {
      return user.subscribed.includes(category);
    });

    subscribedUsers.forEach((user) => {
      user.channels.map((channel) => {
        const notificationStrategy = new NotificationStrategy();
        notificationStrategy.getStrategy(channel).send(user, message);
      });
    });
  }
}
