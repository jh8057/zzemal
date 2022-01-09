const Calculator = require("../calculator.js");

const machine = new Calculator();

describe("Calculator", () => {
  let machine;
  beforeEach(() => {
    machine = new Calculator();
  });
  it("init with 0", () => {
    expect(machine.value).toBe(0);
  });

  it("Set Calculator", () => {
    machine.set(10);
    expect(machine.value).toBe(10);
  });

  it("Clear Calculator", () => {
    machine.set(10);
    machine.clear();
    expect(machine.value).toBe(0);
  });

  it("ADD Calculator", () => {
    machine.add(10);
    expect(machine.value).toBe(10);
  });

  it("ADD should throw an error if value is greater than 100", () => {
    expect(() => {
      machine.add(101);
    }).toThrow("Value can not be greater than 100");
    // 메세지 내용까지 정확하게 일치해야된다.
  });

  it("SUB Calculator", () => {
    machine.subtract(10);
    expect(machine.value).toBe(-10);
  });

  it("multi Calculator", () => {
    machine.set(10);
    machine.multiply(10);
    expect(machine.value).toBe(100);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      machine.divide(0);
      expect(machine.value).toBe(NaN);
    });
    it("1 / 0 === Infinity", () => {
      machine.set(1);
      machine.divide(0);
      expect(machine.value).toBe(Infinity);
    });
    it("4 / 4 === 1 ", () => {
      machine.set(4);
      machine.divide(4);
      expect(machine.value).toBe(1);
    });
  });
});
