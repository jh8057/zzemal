//window
console.log(this);

function simpleFunc() {
  console.log(this);
}
// window
simpleFunc();
console.clear();
class Counter {
  count = 0;
  //   increase = function () {
  //     console.log(this);
  //   };
  increase = () => {
    console.log(this);
  };
}
const counter = new Counter();

// Counter
counter.increase();

// 여기서 this 정보를 잃음
// 함수가 아니라 const,let 은 window에 들어가지 않는다. 다만 var 예외
const caller = counter.increase;
console.log("caller");
caller();

// this를 잃어버리지 않기 위해서 bind를 이용해줘야된다
// 선언할때 애초에 에로우 함수를 만들어주면 된다.
const caller2 = counter.increase.bind(counter);
console.log("caller2");
caller2();

function helloWorld() {
  console.log("hello");
}
window.helloWorld();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
