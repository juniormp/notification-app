import ChannelType from "../../src/model/ChannelType";

describe("ChannelType", () => {
  it("should have the correct properties", () => {
    expect(ChannelType.Email).toBe("EMAIL");
    expect(ChannelType.SMS).toBe("SMS");
    expect(ChannelType.Push).toBe("PUSH_NOTIFICATION");
  });
});
