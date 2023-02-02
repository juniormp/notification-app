import MessageType from "../../src/model/MessageType";

describe("MessageType", () => {
  it("should have the correct properties", () => {
    expect(MessageType.Finance).toBe("FINANCE");
    expect(MessageType.Movies).toBe("MOVIES");
    expect(MessageType.Sports).toBe("SPORTS");
  });
});
