# prototype chain
- 자바스크립트에는 prototype이 있다.
- 모든 객체에는 prototype이 있는데, 이를 연결시켜줄수도 있다.
- 또한, prototype에 prototype -- 으로 쭉 이어 나갈수도 있다.
- 자신이 어떠한 호출을 받은 변수가 없을 경우, prototype 살펴본다.
- `__proto__`를 통해 prototype을 연결시켜줄수 있다.