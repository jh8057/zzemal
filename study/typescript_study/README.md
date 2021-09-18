# typescript_study

- command line에서는 typescript를 tsc로 사용함.
- ts-node를 이용하면 typescirpt를 node에서 바로 결과를 확인 할 수 있다. `ts-node main.js`
- `tsc main.ts` 하면 `main.js`가 생성된다.
- `tsc main.ts -w` 하면 실시간으로 변경된 내용이 저장된다.

# OOP

- class 내부에서 static 선언해주면 class level이 되면서, 인스턴스를 만들때마다 변수가 생성되지 않고, 클래스에 포함되어진다. 이를 통해 메모리 낭비를 줄일 수 있다.

# 추상화(abstract)

- 정보은닉,interface등을 토대로 사용하는 함수만 노출 되도록 만들어 주는 과정
- class 앞에 abstract를 붙이면 추상화 클래스로 만들 수 있다.
- 이는 상속받은 클래스에서 반드시 다시 구현해주어야되므로 원하는 방식으로 재구성이 가능하다
- super를 안써도 자동으로 해준다

# implement vs extends

- 둘다 상속이다
- implements의 가장 큰 특징은 이렇게 부모의 메소드를 반드시 오버라이딩(재정의)해야 한다. interface
- extends는 super를 통해 부모 노드요소에 접근 가능하다

# 상속(inheritance)

- 상속은 수직적인 관계를 형성한다.
- 따라서 관계가 꼬일 수 있고,
- 부모 클래스에 변경을 했을때 아래 상속받은 부분에서 문제가 될 수 있다.
- 타입스크립트에서는 하나 이상의 클라스를 상속 받을 수 없다.

# Error vs Exception

- Error는 어느정도 예측된 오류
- Exception은 예상치 못한 오류 느낌이다.

# try & catch & finally

- 정말 에러가 나올것 같은 부분만 try로 감싼다
- catch 나 try에 return 을 쓰더라도 finally는 실행 되므로 관련된건 finally에 넣어주는 것이 좋다
- error를 catch했을때 의미있는 처리가 가능한 부분에서 잡아주는 것이 좋다
- error를 너무 난발하는것은 안좋으니 state로 관리하는 것을 추천
