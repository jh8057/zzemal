const productService = require("./productService.js");
const StubProductClient = require("./stub.js");

describe("productService - STub", () => {
  let Service;

  beforeEach(() => {
    Service = new productService(new StubProductClient());
  });

  it("should filter milk", async () => {
    console.log(Service);
    const items = await Service.fetchMilk();
    console.log(items);
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "milk" }]);
  });
});
