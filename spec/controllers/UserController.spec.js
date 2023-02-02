import UserController from "../../src/controllers/UserController";

describe("UserController", () => {
  it("should return an array of users", () => {
    const userController = new UserController();
    const result = userController.getUsers();
    expect(result).toEqual(expect.any(Array));
  });
});
