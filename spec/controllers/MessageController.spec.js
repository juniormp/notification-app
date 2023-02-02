import MessageController from "../../src/controllers/MessageController.js";
import {getTypes} from "../../src/model/MessageType.js";

jest.mock("../../src/services/GetMessagesService.js", () => {
  return jest.fn().mockImplementation(() => {
    return {
      execute: jest.fn().mockReturnValue([]),
    };
  });
});

jest.mock("../../src/services/SendNotificationService.js", () => {
  return jest.fn().mockImplementation(() => {
    return {
      sendNotification: jest.fn(),
    };
  });
});

jest.mock("../../src/model/MessageType.js", () => {
  return {
    getTypes: jest.fn().mockReturnValue([]),
  };
});

describe("MessageController", () => {
  let messageController;
  let sendNotificationService;
  let getMessagesService;

  beforeEach(() => {
    messageController = new MessageController();
    sendNotificationService = messageController.sendNotificationService;
    getMessagesService = messageController.getMessageService;
  });

  test("sendMessage calls sendNotification with correct parameters", () => {
    const category = "SPORTS";
    const message = "Lorem";

    messageController.sendMessage(category, message);

    expect(sendNotificationService.sendNotification).toHaveBeenCalledWith(
      category,
      message
    );
  });

  test("getMessages returns result from execute method of GetMessagesService", () => {
    const messages = [
      {
        category: "SPORTS",
        message: "Lorem",
      },
      {
        category: "FINANCE",
        message: "Lorem",
      },
    ];

    getMessagesService.execute.mockReturnValue(messages);

    expect(messageController.getMessages()).toEqual(messages);
  });

  test("getCategories returns result from getTypes method of MessageType", () => {
    const categories = ["SPORTS", "FINANCE", "CATEGORY"];

    getTypes.mockReturnValue(categories);

    expect(messageController.getCategories()).toEqual(categories);
  });
});
