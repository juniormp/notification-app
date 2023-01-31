import sentMessageData from "../../db/messages";

class INotificationStrategy {
  send(user, message);
  log(user, message);
}

export default INotification;
