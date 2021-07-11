# Vanilla JS
처음으로 1차 코딩테스트를 통과하고, 2차 코딩테스트를 보았다.
2차는 Vanilla JS 테스트였는데, 문제를 읽고 손을 댈수조차 없었다.
그렇기에 이 프로젝트를 시작한다.

# 초보자를 위한 바닐라 자바스크립트
- `노마드 코더` 의 유뷰트 강의가 있어서 들어보기로 했다.
- 아주 기초부터 시작하기에, 한번 점검하는 차원에서 들어보았다.
- [link](https://www.youtube.com/watch?v=wUHncG3VwPw&list=PLLUCyU7SBaR7tOMe-ySJ5Uu1UlEBznxTr)

## 공부할 부분
- 우선 하드코딩을 하면 안된다.
- 모든 것들이 js를 통해 객체를 만들고 이를 추가하는 방식으로 접근해야된다.

## 개념
### camle case
- 변수명을 사용할때 소문자로 시작했다가 스페이스가 필요하면 대문자로 사용하는 것
### build-in-function(내장함수)
- console,alert 등 그냥 사용하는 것들을 부르는 것.
### argument(인자) & Parameter(매개변수)
Parameter는 함수 혹은 메서드 정의에서 나열되는 변수 명입니다.  
반면 Argument는 함수 혹은 메서드를 호출할 때, 전달 혹은 입력되는 실제 값입니다. 
### event
- 자바스크립트는 이벤트에 반응하기 위해 만들어졌다.

## Construct


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
const title = document.querySelector("#title")
const hastitle = title.classList.contain("STH")
if (hastitle){
    title.classList.remove("STH");
}else{
    title.classList.add("STH");
}
```
- 맙소사, 여기서 한 번 더 나아가서 위와 같이 체크하고, 더하고 지워주는 것이 함수로 따로 존재했다. => toggle!
```js
    title.classList.toggle(CLICKED_CLASS)
```
- 위 코드와 동일한 기능을 하는것이다.
