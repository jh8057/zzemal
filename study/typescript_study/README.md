# typescript_study

- command line에서는 typescript를 tsc로 사용함.
- ts-node를 이용하면 typescirpt를 node에서 바로 결과를 확인 할 수 있다. `ts-node main.js`
- `tsc main.ts` 하면 `main.js`가 생성된다.
- `tsc main.ts -w` 하면 실시간으로 변경된 내용이 저장된다.

# OOP

- class 내부에서 static 선언해주면 class level이 되면서, 인스턴스를 만들때마다 변수가 생성되지 않고, 클래스에 포함되어진다. 이를 통해 메모리 낭비를 줄일 수 있다.

# 추상화

- 정보은닉,interface등을 토대로 사용하는 함수만 노출 되도록 만들어 주는 과정

# implement vs extends

- 둘다 상속이다
- implements의 가장 큰 특징은 이렇게 부모의 메소드를 반드시 오버라이딩(재정의)해야 한다. interface
- extends는 super를 통해 부모 노드요소에 접근 가능하다
