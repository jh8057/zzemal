## javascript

JS를 공부하면서 배운 내용들을 모두 정리해 놓은 곳입니다.

<hr>

#### script type

- 예전에는 브라우저가 자바스크립트인지 잘 인식 못하는 경우가 있어서 script type="text/javascript" 를 써줬는데, html5부터는 default가 되어서 안써줘도 된다.

#### script 위치

- 적용하고 싶은 body 맨 아래에 스크립트를 넣어주면 적용이 된다.
- 맨 아래 놓는거는 컴파일 순서 때문이다.
- 웹 페이지를 불러오는데 parsing HTML, fetching js, execute js가 있는데, 이때 순서나 방법에 따라, 장단점이 존재하기 때문이다.
- 자세한건 [유튜브](https://www.youtube.com/watch?v=tJieVCgGzhs&t=445s)
- 제일 좋은 순서 head + defer > header + asyn > body end > head

#### 반복문

- for ,do while, while, label, break,continue,for in, for of

#### event

- onclick으로 alert()-경고창을 띄웠다.
- onclick 뒤에 내용은 웹 브라우저가 기억하다, 사용자가 클릭했을때, 자바스크립트의 문법에 따라 실행한다.
- on ~~ 하는걸 이벤트(event)라 한다.
- addeventlistener를 이용하면 onclick을 사용하지 않고, JS내에서 해결 가능하다.

#### 변수

[var,let,const 차이](https://curryyou.tistory.com/192)

- hositing : 변수나 함수 선언된 것을 최상위로 올려주는 것(선언만 올린다)
- 초기화, 선언
- var은 모든 것이 다 된다. -> error가 쉽게 발생
- 이를 방지하기 위해 let,const 사용
- let,const은 중복 선언 불가
- var : 함수레벨 스코프 / let,const: 블록 레벨 스코프
- 전역객체 프로퍼티 여부

#### innerHTML & innerText

- innerHTML로 내용을 변경하면 줄바꿈이 적용이 된다.
- innerHTML은 요소까지 전부 변경 가능하다.
- innerText는 텍스트만 바꾸는 것이다.
- [innerText vs innerHTML](https://hianna.tistory.com/480)

#### Math

- Math.random 으로 랜덤 숫자 뽑기 기능 구현 !🐬

#### parseInt & toString

- parseInt : String -> int + 지수 선택가능
- toString : int -> string + 지수 선택가능

#### Object

- 폴더라 생각하면 편한데, 그동안 이름중복을 피해 써왔던 것들을 객체를 통해 구분짓고, 편리하게 가져다 쓸수 있게 된다.
- 객체에 있는 함수를 '메소드(method)'라 부른다. 객체 > 메소드
- 객체 : 이름이 있는 정리정돈 상자
- python의 딕셔너리 개념이랑 같다고 보면 될것같다.
- 객체 내 함수 있는가? > 없으면 prototype 이 있는가 확인
- prototype을 통해 메모리 사용을 줄일 수 있다.

#### strict

- 기본값을 "느슨한 모드(sloppy mode)이다.
- 이와 반대로 strict mode를 사용하고 싶으면 'use strict'을 선언해준다.
- 왜 사용하는가? 유연성이 좋은 js에 안전장치역할, 선언되지 않은 것 있으면 막아줌.

#### class

- 객체를 양산하는 공장 : `constructor`
- class 함수에서 제일 먼저 실행되는 함수 이름 = constructor
- class 에서 상속 : extends
- call,bind를 통해 상속을 이용할 수 있다.

#### this

- this를 하면 내가 실행되고 있는 이 부분을 이야기 하는것이다.
- ex) 버튼에서 this 를 사용하면 지금 이 버튼을 이야기하는 것이다.
- [self 참조 블로그](https://geundung.dev/101)

```js
// 1
function myFunc() {
  var self = this;

  $("#button").click(function () {
    self.doSomething; // this of myFunc
  });
}

// 2
function myFunc() {
  $("#button").click(
    function () {
      this.doSomething; // this of myFunc
    }.bind(this)
  );
}
```

1번은 this를 임시로 저장하기 위한 이름이 self인 단순 변수일 뿐 앞서 설명했던 self와는 아무런 관계가 없습니다. 단지 함수의 this 바인딩 문제를 피하기 위한 일종의 트릭 중 하나입니다.

이벤트 핸들러 함수에서 외부의 this를 참조하고 싶다면 2번 코드와 같이 this를 직접 바인딩하여 사용할 수도 있습니다.

#### tag 속성값 변경

- setattribute,getattribute 라는 함수도 있어서, 이를 통해 속성값을 바꿔줄수 있다.

#### Date()

- 날짜 계산하는 함수도 만들어봤다. Date()에 입력한 날짜보다 한달이 추가되서 나오는게 웃겼다.

#### gsap - library

- gsap 이라는걸 이용해서 transition 효과를 주어보았다. 이게 라이브러리를 쓰는거다라는걸 알게되었다.
  > script에 gsap관련된거 한줄 넣어주면 끝이다. 다만, 형식을 알아야 쓸 수 있다.

#### function

- function expression : const STH = function~
- function declaration : function Name(){}
- function declaration은 함수가 정의되기 전에 호출해도 정상 동작한다.
- anonymous function : 이름없는 함수
- named function : 이름 있는 함수
- Arrow function : => 화살표를 통해 만든 함수
- IIFE(Immediately Invoked Function Expression) : (function())(), 함수를 가로로 묶고 함수실행하듯 해주면 바로 함수가 따로 선언 없이 바로 실행이 된다.
