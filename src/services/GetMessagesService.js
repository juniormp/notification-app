import sentMessageData from "../../db/sentMessageData.js";

export default class GetMessagesService {
  execute() {
    return sentMessageData.sort((dateA, dateB) => {
      return dateB.dateTime - dateA.dateTime;
    });
  }
}
