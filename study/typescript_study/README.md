# typescript_study

- command line에서는 typescript를 tsc로 사용함.
- ts-node를 이용하면 typescirpt를 node에서 바로 결과를 확인 할 수 있다. `ts-node main.js`
- `tsc main.ts` 하면 `main.js`가 생성된다.
- `tsc main.ts -w` 하면 실시간으로 변경된 내용이 저장된다.

# OOP

- class 내부에서 static 선언해주면 class level이 되면서, 인스턴스를 만들때마다 변수가 생성되지 않고, 클래스에 포함되어진다. 이를 통해 메모리 낭비를 줄일 수 있다.
