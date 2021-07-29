"use strict";

class Counter {
  constructor(callback) {
    this.counter = 0;
    this.callback = callback;
  }

  increase() {
    this.counter++;
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    } else {
      console.log(this.counter);
    }
  }
}

function printWow(num) {
  console.log(`WOW! ${num}`);
}

function alertWow(num) {
  alert(`WOW! ${num}`);
}

const coolCounter = new Counter(printWow);
const alertCounter = new Counter(alertWow);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
console.log("------");
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
