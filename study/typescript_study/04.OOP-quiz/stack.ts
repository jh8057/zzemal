interface stack {
  readonly size: number;
  pop(): string;
  push(value: string): void;
}

class stackMachine implements stack {
  size = this.str.length;
  constructor(private str: string) {}

  pop(): string {
    const target = this.str.substring(this.size - 1);
    this.str = this.str.substring(0, this.size - 1);
    this.size -= 1;
    return target;
  }

  push(value: string) {
    this.str += value;
    this.size += 1;
  }
}

let stackTest = new stackMachine("ABCD");
console.log(stackTest);
console.log(stackTest.pop());
console.log(stackTest);
console.log(stackTest.push("c"));
console.log(stackTest);
