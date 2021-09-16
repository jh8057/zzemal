{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  function checkNotNullBad2(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // 선언할때 타입이 결정된고, 보장받는다
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const number = checkNotNull(123); //숫자를 넣어줬으므로 number는 숫자 타입이 된다
  const bool: boolean = checkNotNull(true); // true를 넣어줘서 true타입이 됐지만, boolean으로 선언해줄 수 있다.
}
