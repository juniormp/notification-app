import Message from "../../src/model/Message.js";
import EmailNotificationStrategy from "../../src/services/EmailNotificationStrategy.js";
import jest from "jest-mock";
import sentMessageData from "../../db/sentMessageData.js";

describe("EmailNotificationStrategy", () => {
  let strategy;

  beforeEach(() => {
    strategy = new EmailNotificationStrategy();
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
      `Email log: Message "${message}" sent to ${
        user.name
      } at ${new Date().toLocaleString()}`
    );
  });
});
