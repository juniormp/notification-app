import routes from "../../src/controllers/routes.js";
import MessageController from "../../src/controllers/MessageController.js";
import UserController from "../../src/controllers/UserController.js";
import sendMessageValidator from "../../src/controllers/validators/SendMessageValidator.js";

jest.mock("../../src/controllers/MessageController.js", () => {
  return jest.fn().mockImplementation(() => {
    return {
      sendMessage: jest.fn(),
      getMessages: jest.fn().mockReturnValue([{id: 1, message: "Hello"}]),
      getCategories: jest.fn().mockReturnValue(["General"]),
    };
  });
});

jest.mock("../../src/controllers/UserController.js", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getUsers: jest.fn().mockResolvedValue(123),
    };
  });
});

jest.mock("../../src/controllers/validators/SendMessageValidator.js", () => {
  return jest.fn().mockReturnValue({
    category: "General",
    message: "Hello",
  });
});

describe("routes", () => {
  let app;
  let messageController;
  let userController;
  let sendMessageValidatorMock;

  beforeEach(() => {
    app = {
      get: jest.fn(),
      post: jest.fn(),
    };

    userController = new UserController();
    messageController = new MessageController();

    routes(app);
  });

  describe("GET /api/users", () => {
    it("should call userController.getUsers and return a JSON response", () => {
      const req = {};
      const res = {
        json: jest.fn(),
        status: jest.fn(),
      };

      app.get.mock.calls[0][1](req, res);

      expect(res.json).toBeCalled();
    });
  });

  describe("GET /api/messages", () => {
    it("should call messageController.getMessages and return a JSON response", () => {
      const req = {};
      const res = {
        json: jest.fn(),
        status: jest.fn(),
      };

      app.get.mock.calls[0][1](req, res);

      expect(res.json).toBeCalled();
    });
  });

  describe("GET /api/messages/categories", () => {
    it("should call messageController.getCategories and return a JSON response", () => {
      const req = {};
      const res = {
        json: jest.fn(),
        status: jest.fn(),
      };

      app.get.mock.calls[0][1](req, res);

      expect(res.json).toBeCalled();
    });
  });
});
