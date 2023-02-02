import Message from "../../src/model/Message.js";
import sentMessageData from "../../db/sentMessageData.js";
import PushNotificationStrategy from "../../src/services/PushNotificationStrategy.js";

describe("PushNotificationStrategy", () => {
  let strategy;

  beforeEach(() => {
    strategy = new PushNotificationStrategy();
  });

  test("send method adds message to sentMessageData", () => {
    // Arrange
    Date.now = jest.fn(() => new Date(Date.UTC(2023, 2, 1)).valueOf());
    const user = {name: "Mauricio Junior"};
    const category = "FINANCE";
    const message = "Investments";
    const se = jest.spyOn(sentMessageData, "push");

    // Perform
    strategy.send(user, category, message);

    // Assert
    expect(se).toHaveBeenCalledWith(new Message(category, message, Date.now()));
  });

  test("log method logs message to console", () => {
    // Arrange
    const user = {name: "Mauricio Junior"};
    const message = "Investments";
    const consoleSpy = jest.spyOn(console, "log");

    // Perform
    strategy.log(user, message);

    // Assert
    expect(consoleSpy).toHaveBeenCalledWith(
      `Push log: Message "${message}" sent to ${
        user.name
      } at ${new Date().toLocaleString()}`
    );
  });
});
