import User from "../../src/model/User.js";

describe("User class", () => {
  it("should create a new instance of the User class", () => {
    const id = "1";
    const name = "Mauricio Junior";
    const email = "mauricio@gmail.com";
    const phoneNumber = "+5511984645716";
    const subscribed = ["SPORTS"];
    const channels = ["PUSH_NOTIFICATION"];

    const user = new User(id, name, email, phoneNumber, subscribed, channels);

    expect(user).toBeDefined();
    expect(user.id).toEqual(id);
    expect(user.name).toEqual(name);
    expect(user.email).toEqual(email);
    expect(user.phoneNumber).toEqual(phoneNumber);
    expect(user.subscribed).toEqual(subscribed);
    expect(user.channels).toEqual(channels);
  });
});
