import add, { print as printMessage, testnum } from "./10-3-module1.js";

// 이렇게 전체를 불러올수도 있다.
// calculator.print() 이런식으로 사용
// 변수까지 가져올 수 있다.
// import * as calculator from "./10-3-module1.js";

console.log(add(1, 2));

printMessage();
console.log(testnum);
