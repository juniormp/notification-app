import GetMessagesService from "../../src/services/GetMessagesService.js";

jest.mock("../../db/sentMessageData", () => [
  {dateTime: 3},
  {dateTime: 2},
  {dateTime: 1},
]);

describe("GetMessagesService", () => {
  it("sorts messages by dateTime in descending order", () => {
    const service = new GetMessagesService();
    const result = service.execute();

    expect(result).toEqual([{dateTime: 3}, {dateTime: 2}, {dateTime: 1}]);
  });
});
