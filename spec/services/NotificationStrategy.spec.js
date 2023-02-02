import ChannelType from "../../src/model/ChannelType.js";
import EmailNotificationStrategy from "../../src/services/EmailNotificationStrategy.js";
import PushNotificationStrategy from "../../src/services/PushNotificationStrategy.js";
import SMSNotificationStrategy from "../../src/services/SMSNotificationStrategy.js";
import NotificationStrategy from "../../src/services/NotificationStrategy.js";

describe("NotificationStrategy", () => {
  it("should return EmailNotificationStrategy for Email channel", () => {
    const notificationStrategy = new NotificationStrategy();
    const strategy = notificationStrategy.getStrategy(ChannelType.Email);
    expect(strategy).toBeInstanceOf(EmailNotificationStrategy);
  });

  it("should return SMSNotificationStrategy for SMS channel", () => {
    const notificationStrategy = new NotificationStrategy();
    const strategy = notificationStrategy.getStrategy(ChannelType.SMS);
    expect(strategy).toBeInstanceOf(SMSNotificationStrategy);
  });

  it("should return PushNotificationStrategy for Push channel", () => {
    const notificationStrategy = new NotificationStrategy();
    const strategy = notificationStrategy.getStrategy(ChannelType.Push);
    expect(strategy).toBeInstanceOf(PushNotificationStrategy);
  });

  it("should throw error for invalid channel", () => {
    const notificationStrategy = new NotificationStrategy();
    expect(() => {
      notificationStrategy.getStrategy("invalid channel");
    }).toThrow("Invalid Channel");
  });
});
