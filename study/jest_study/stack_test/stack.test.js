const Stack = require("./stack.js");

describe("stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("allows to push item", () => {
    stack.push("🍔");
    expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    it("throw error when empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is empty");
    });
    it("return the last pushed item and removes it from the stack", () => {
      stack.push("🍔");
      stack.push("🍰");

      expect(stack.pop()).toBe("🍰");
      expect(stack.size()).toBe(1);
    });
  });
  describe("peek", () => {
    it("throw error when empty", () => {
      expect(() => {
        stack.peek();
      }).toThrow("Stack is empty");
    });
    it("show items", () => {
      stack.push("🍰");
      stack.push("🍔");
      expect(stack.peek()).toBe("🍔");
      expect(stack.size()).toBe(2);
    });
  });
});
