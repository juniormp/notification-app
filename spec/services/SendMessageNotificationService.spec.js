import SendNotificationService from "../../src/services/SendNotificationService.js";
import NotificationStrategy from "../../src/services/NotificationStrategy.js";
import users from "../../seed/users";

jest.mock("../../src/services/NotificationStrategy.js", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getStrategy: jest.fn().mockReturnValue({
        send: jest.fn(),
      }),
    };
  });
});

describe("SendNotificationService", () => {
  it("sends notifications to the correct users for a given category and message", () => {
    const service = new SendNotificationService();
    const message = "Hello World";
    const category = "news";

    const expectedSubscribedUsers = users.filter((user) => {
      return user.subscribed.includes(category);
    });

    service.sendNotification(category, message);

    expectedSubscribedUsers.forEach((user) => {
      user.channels.forEach((channel) => {
        const strategy = new NotificationStrategy().getStrategy(channel);
        expect(strategy.send).toHaveBeenCalledWith(user, category, message);
      });
    });
  });
});
