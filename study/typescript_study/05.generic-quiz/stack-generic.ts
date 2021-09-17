interface stack {
  readonly size: number;
  pop(): string;
  push(value: string): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};
class stackMachine implements stack {
  private _size: number = 0;
  private head?: StackNode;
  get size() {
    return this._size;
  }
  constructor(private capacity: number) {}
  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error("STACK IS FULL");
    }
    this._size++;
    const node: StackNode = { value, next: this.head };
    this.head = node;
    return `PUSH ${value}`;
  }
  pop(): string {
    if (this.head == null) {
      throw new Error("STACK IS EMPTY");
    }
    const node = this.head;
    this.head = this.head.next;
    this._size--;
    return `POP ${node.value}`;
  }
}

let stackTest = new stackMachine(10);
// console.log(stackTest.size);
stackTest.push("b");
stackTest.push("c");
stackTest.push("d");
stackTest.push("d");

while (stackTest.size !== 0) {
  console.log(stackTest.pop());
}

// stackTest.pop();
