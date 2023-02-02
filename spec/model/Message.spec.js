import Message from "../../src/model/Message.js";

describe("Message class", () => {
  it("should create a new instance of the Message class", () => {
    const category = "FINANCE";
    const content = "Investiments";
    const dateTime = new Date();
    const message = new Message(category, content, dateTime);

    expect(message).toBeDefined();
    expect(message.category).toEqual(category);
    expect(message.content).toEqual(content);
    expect(message.dateTime).toEqual(dateTime);
  });
});
