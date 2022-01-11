const check = require("../check.js");

describe("check mock", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });
  it("predicate is ture", () => {
    check(() => true, onSuccess, onFail);
    expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);

    expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onSuccess).toHaveBeenCalledWith("yes");

    expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });
});
