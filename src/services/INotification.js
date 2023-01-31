import sentMessageData from "../../db/messages";

class INotification {
  send(user, message);
  log(user, message);
}

export default INotification;
