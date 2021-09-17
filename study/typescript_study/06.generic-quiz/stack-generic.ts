interface stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};
class stackMachine<T> implements stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;
  get size() {
    return this._size;
  }
  constructor(private capacity: number) {}
  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error("STACK IS FULL");
    }
    this._size++;
    const node = { value, next: this.head };
    this.head = node;
  }
  pop(): T {
    if (this.head == null) {
      throw new Error("STACK IS EMPTY");
    }
    const node = this.head;
    this.head = this.head.next;
    this._size--;
    return node.value;
  }
}

let stackTest = new stackMachine<string>(10);
// console.log(stackTest.size);
stackTest.push("b");
stackTest.push("c");
stackTest.push("d");
stackTest.push("d");

while (stackTest.size !== 0) {
  console.log(stackTest.pop());
}

// stackTest.pop();

let stackTest2 = new stackMachine<number>(10);
// console.log(stackTest.size);
stackTest2.push(123);
stackTest2.push(456);
stackTest2.push(678);
stackTest2.push(789);

while (stackTest2.size !== 0) {
  console.log(stackTest2.pop());
}
