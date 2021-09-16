interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!`);
  }
  workFull() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!`);
  }
  workPart() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 별루다(잘못됐다)
function BADpay(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// 제네릭을 사용하지만, 조건을 달아준다
function Goodpay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const zzemal = new FullTimeEmployee();
const Bob = new PartTimeEmployee();

zzemal.workFull();
Bob.workPart();

// BAD를 쓰면 타입이 정해져있기때문에
// 기존 class에서 가지고 있던 다른 함수들이 사라지는 것을 확인할 수 있다.
const zzemalPayed = BADpay(zzemal);
const BobPayed = Goodpay(Bob);

console.log("/////////////////////////");

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const obj1 = {
  name: "zzemal",
  age: 20,
};
const obj2 = {
  icecream: "🍦",
};

console.log(getValue(obj1, "name"));
console.log(getValue(obj2, "icecream"));
