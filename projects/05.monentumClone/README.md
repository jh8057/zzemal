# Vanilla JS -초보자를 위한 바닐라 자바스크립트

처음으로 1차 코딩테스트를 통과하고, 2차 코딩테스트를 보았다.  
2차는 Vanilla JS 테스트였는데, 문제를 읽고 손을 댈수조차 없었다.

- [노마드 코더](https://www.youtube.com/watch?v=wUHncG3VwPw&list=PLLUCyU7SBaR7tOMe-ySJ5Uu1UlEBznxTr)
  의 유뷰트 강의가 있어서 들어보기로 했다.

# 결과

[브라우저에서 보기!](https://jh8057.github.io/zzemal/projects/05.monentumClone/)

<img src="./result/r1.jpg" width="200px" height="100%" title="1" alt="1"></img> <img src="./result/r2.jpg" width="200px" height="100%" title="2" alt="2"></img><br/>

- Monentum이라는 프로그램을 따라 만들어보았다. [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=ko)
- 모바일 환경에서도 잘 보이도록 구성하였다.<br>
- 왼쪽 하단에 온도와 위치 정보를 표시했다 (위치 정보를 토대로 API를 이용해서 날씨를 얻어왔다)

<img src="./result/r3.jpg" width="600px" height="100%" title="3" alt="3"></img>

- 이름을 입력하면 localStorage에 저장하도록 하였다.

<img src="./result/r4.jpg" width="600px" height="100%" title="4" alt="4"></img>

- ToDo 를 입력하면 localStorage에 저장되어 화면에 출력하는 것을 확인할 수 있다.

<img src="./result/r5.jpg" width="600px" height="100%" title="5" alt="5"></img>

- 큰 화면으로도 잘 나온다.

<img src="./result/r6.jpg" width="600px" height="100%" title="6" alt="6"></img>

- title을 누르면 색이 변한다.
- 요소들에 마우스를 올리면 그림자가 옅게 생긴다.
- 타이머와 스탑워치 기능이 있다.
- ToDo 에 입력하면 아래에 출력되고, 버튼을 누르면 지워진다.
- refresh해도 저장된 데이터를 불러와 동일하게 출력된다.(같은 브라우저에서)

# 공부한 개념

### camle case

- 변수명을 사용할때 소문자로 시작했다가 스페이스가 필요하면 대문자로 사용하는 것

### build-in-function(내장함수)

- console,alert 등 그냥 사용하는 것들을 부르는 것.

### argument(인자) & Parameter(매개변수)

Parameter는 함수 혹은 메서드 정의에서 나열되는 변수 명입니다.  
반면 Argument는 함수 혹은 메서드를 호출할 때, 전달 혹은 입력되는 실제 값입니다.

### event

- 자바스크립트는 이벤트에 반응하기 위해 만들어졌다.

## className & classList

- 기존에 document.querySelector("#title").className 을 하면 class가 주어졌다.

```js
if ( ~.className === "STH"){
    ~.className = "OTHER"
}else{
    ~.className = "STH"
}
```

- 그런데 함수에서 조건문으로 위와 같이 사용하면 기존에 class들이 다 지워지고 OTHER만 남게되므로 위험하다.(이전 class들을 다 죽이는거다.)
- 또한, else문으로 되돌려도 기존에 있던 class들은 다 죽는 현상이 발생한다.
- 그렇기에 classList를 사용한다.

#### classList

- mdn을 보면 classList는 다양한 메소드를 가지고 있다.
- add,remove,contain 등
- 따라서 위 코드를 아래와 같이 수정하면 기존의 class와 별개로 class를 추가하고 제거하고, 확인할 수 있다.

```js
const title = document.querySelector("#title");
const hastitle = title.classList.contain("STH");
if (hastitle) {
  title.classList.remove("STH");
} else {
  title.classList.add("STH");
}
```

- 맙소사, 여기서 한 번 더 나아가서 위와 같이 체크하고, 더하고 지워주는 것이 함수로 따로 존재했다. => toggle!

```js
title.classList.toggle(CLICKED_CLASS);
```

- 위 코드와 동일한 기능을 하는것이다.

## setInterval()

- `setInterval(fn,millisecond)`
- 함수를 일정 시간마다 실행시켜주는 함수이다.
- cleanInterval 으로 종료가 가능하다 한다.

## localstorage

- 브라우저 상에 데이터를 저장하는 것이다.
- [블로그](https://www.daleseo.com/js-web-storage/)
- localStorage.setItem(name,content) => 저장
- localStorage.getItem(name) => 꺼내오기

## event.preventDefault();

- 기본적으로 발생하는 default값을 막는함수다.
- 예를들어 form에서 입력을 넣고 엔터를 넣었을때, event가 발생해서 이것이 form에서 출발해 document까지 변화를 주고 페이지가 reload되는게 default인데, 이를 막아 동작하지 않게 해준다.
- 이를 통해 입력된 값만 빼오고, event는 따로 함수를 짜서 다른 방식 발생하게끔 코딩을 했다.(Nomard가)

## document.createElement()

- 그동안 querySelector를 통해 html에서 요소를 가져왔다.
- JS 내에서 요소를 생성하는 함수다.
- `const li = document.createElement("li");`

## Element.appendChild();

- Element가 부모가 되고 아래에 자식 요소들을 추가하는 함수이다.

## JSON.stringify(obj)

- 자바스크립트 object를 string으로 바꿔주는 함수
- JSON은 JavaScript Object Notation, 자바스크립트 객체 표기법의 약자이다.

## Image();

- The Image() constructor creates a new HTMLImageElement instance. It is functionally equivalent to document.createElement('img').

## navigator.geolocation.getCurrentPosition(SuccesFuntion,ErrorFunction)

- 위치 정보를 알수 있는 함수이다.

## Object tip

- `latitude:latitude` 이런식으로 이름이 같은 key value 값을 저장할 때는 그냥 `latitude`만 써도 똑같이 작동한다.

## fetch()

- 새로고침 없이 데이터를 계속 받아들여온다.
- fetch안에 URL을 넣어주면 데이터를 받아온다.
- then()을 사용해서 fetch가 끝난 데이터를 이용할 수 있다.
- fetch를 통해 얻은 데이터(response)는 네트워크 정보 및 json 데이터를 가지고 있다.
- 여기서 우리가 원하는 것은 json파일에 담겨있는 데이터이므로 response.json()을 해주어 json 데이터를 얻어와야한다.
