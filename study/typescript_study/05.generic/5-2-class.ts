interface Either<L, R> {
  left(): L;
  right: () => R;
}

class simpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightvalue: R) {}

  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightvalue;
  }
}

const either = new simpleEither(4, 5);
console.log(either.left());
console.log(either.right());

// 이처럼 정해진 타입이 아닌 내가 원하는데로 any처럼 사용할 수 있다.
// 그러나 넣는 순간 타입이 정해저서 타입을 보장받을 수 있다.
const best = new simpleEither({ name: "zzemal" }, "Hello");
