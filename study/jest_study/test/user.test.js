const UserService = require("./user.js");
const UserClient = require("./userClient.js");

jest.mock("./userClient");
describe("User", () => {
  const login = jest.fn(async () => "success");
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });
  let Service;
  beforeEach(() => {
    Service = new UserService(new UserClient());
    login.mockClear();
    UserClient.mockClear();
  });
  console.log(Service);
  it("Logined", async () => {
    await Service.login("asd", "asd");
    await Service.login("asd", "asd");
    expect(login.mock.calls.length).toBe(1);
  });
});
