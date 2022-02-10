class Stack {
  constructor(input) {
    this.arr = [];
  }

  size() {
    return this.arr.length;
  }

  push(item) {
    this.arr.push(item);
  }

  pop() {
    if (this.size() === 0) {
      throw new Error("Stack is empty");
    }
    return this.arr.pop();
  }
  peek() {
    if (this.size() === 0) {
      throw new Error("Stack is empty");
    }
    return this.arr[this.arr.length - 1];
  }
}
module.exports = Stack;
