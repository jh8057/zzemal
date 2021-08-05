## CSS

css를 공부하면서 배운 내용들을 모두 정리해 놓은 곳입니다.

<hr>

#### html에 적용하기

- style.css 파일을 따로 만들고, 각 html 에서 link를 통해 참조를 하니까 일괄 적용이 된다.
- style을 본문에 사용하고, head에 link를 사용해서 외부 css를 불러오면, 본문 내 style만 적용된다. / 충돌난다.

#### 선택자

- [참고 사이트](https://pridiot.tistory.com/11)
- 태그 선택자, 클래스 선택자, 속성 선택자(a[href ^=http://]) 등 다양하게 존재한다.
- 가상 클래스 선택자 ( :hover , :focus ::after 등)

#### 속성(attribute)

속성(attribute)이라는게 있고, 그것에 맞는 문법을 써넣어주면 된다. [자주 사용하는 속성](https://velog.io/@bungouk6829/CSS-%EC%9E%90%EC%A3%BC-%EC%82%AC%EC%9A%A9%EB%90%98%EB%8A%94-%EC%86%8D%EC%84%B1)

- padding : the space around the content.
- border : the solid line that is just outside the padding
- margin : the space around the outside of the border
- CSS는 같은 속성을 여러 번 정의했을 때, 나중에 설정한 값이 적용됩니다.
- 만약 나중에 설정한 값이 적용되지 않게 하려면 속성값 뒤에 `!important`를 붙입니다. => 비추!!

#### span & 우선순위

- span 과 div를 이용해서 적용하면 편하다.
- span (div) > class > id 순으로 넓은 영역이다.
- 따라서 좁은 영역일수록 우선순위가 높다!
- 하나의 문서에 고유한 id 하나만 사용 가능하다.

#### 반응형

- 지금은 width를 %로 설정해서 창 크기에 따라 변화하는데, 이게 잘하는건진 모르겠다.

```css
@media screen and (max-width: 700px) {
  .body {
    background-color: red;
  }
}
```

- 이러면 700px 이하의 디스플레이에서는 해당 단락에 정의된대로 화면에 나타난다.

#### inline vs block

- img 에 margin 같은 속성으로 조절하고 싶으면, display : block 를 해줘야된다.
- 왜냐. img는 inline요소인데, margin 같은 것은 body 같은 block요소에만 추가할 수 있는 속성이기 때문이다.
- span은 inline 요소이기에 block처럼 활용하려면 inline-block화를 해줘야 된다.

#### image

- 사진도 url으로 불러올수있고, 이미지 크기도 cover,contain등을 통해 조절할 수있다.

#### shadow

- fillter : drop-shadow  
  사진의 실제 이미지에 맞게끔 그림자를 넣을 수 있다.

#### class

- class를 이용해서 꾸미는것이 은근 꿀이란걸 깨달았다.
- span이나 div로 원하는 구역 정해주고 class 부여하면 끝!
- JS 에서 classList를 통해 더 쉽게 이용 가능하다.

#### animation

- css가 그냥 대충 크기만 맞춰주는 건줄 알았는데 animation 기능도 css에서 부여가능하다는걸 알게되었다.
- 오랜만에 창작욕이 불타올라.. 디테일을 살리겠다고 시간은 많이 걸렸지만, 디자이너가 아니기에 엄청 이쁘진 않는 창작물을 만들어버렸다.😉
- `@keyframe : from to` 로 animation을 조절할수있다.
- animate : infinite alternate => 왔다 갔다 반복
- 위치값을 전체를 보고 애니메이션을 줄 경우 `position : absolute`를 해줘야 animation이 생각한대로 된다.

#### transform & transition

- transform만으로는 요소의 변형을 일으킬 뿐 움직이는 동적인 효과를 줄 수 없습니다.
- transition을 사용하여 동적인 효과를 줍니다.[여기](https://codingbroker.tistory.com/54)

### cursor

- css 커서 모양도 이미지로 바꿀수 있다.(권장 32x32pixel) 재밋네😁
- cursor : pointer

#### 초기 세팅

- div로 전체 화면을 가리고 싶으면 html,body의 margin이나 padding이 없어야 되고, width,height도 100% 해야 상속된다.

#### list-style

- list-style:none 하면 리스트 앞에 붙은 것들이 안나온다!

#### flexbox

- <s>float:left 바로 이어서 붙어서 나오게해주는 것 </s>=> display: flex를 사용하자!
- flex : 1, 2 display:flex일 때, 공간에 맞게 크기 조절

```
/* One value, unitless number: flex-grow */
flex: 2;

/* One value, length or percentage: flex-basis */
flex: 10em;
flex: 30%;

/* Two values: flex-grow | flex-basis */
flex: 1 30px;

/* Two values: flex-grow | flex-shrink */
flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;
```

- justify-content: space-around; 공간에 맞게 정렬
- align-items : center ; 아이템들을 센터에 맞게 정렬

#### em & rem

- em : 지금 객체 기준 한간격
- rem : html의 한간격(기본 16px)

#### 가상 클래스 선택자

- ::after 가 라이브러리 사용한줄 알았는데, 그냥 css에서 추가로 사용하는 요소였다.
- :hover도 css 기능이였다.😅 마우스 커서를 가져다 대면 동작하는거였다.

#### overflow

- Y축으로 100% 올려주고,overflow:hidden을 줘서 안보이게 끔해주고, 나중에 다시 0%로 돌려와서 안보이다 보이게끔 한다는게, 참 간단하면서도 생각지 못했던 거였다.
- 이 방법 외에서 `max-height : 0` 같이 해놓고 나중에 늘려주는 형식으로 해도 비슷한 효과를 볼 수 있다.
- -webkit-line-clamp: 3;을 통해 보여지는 텍스트의 줄을 정할 수도 있다.

```
p {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

- `overflow : scroll-y` 하면 overflow 된 부분을 스크롤해서 볼 수 있다.

#### gradient

- background: linear-gradient(to right,"start color","end color")  
  배경을 그라데이션으로 만들 수 있다.

#### -webkit

- -webkit-background-clip: text;  
  백그라운드를 text에 맞게 고정할 수 있다.
- -webkit-text-fill-color: transparent;  
  text에만 배경을 채울 수 있다.
- -webkit-line-clamp: 3;  
  보여지는 텍스트 줄 제한

#### Update log

- <s>이제 좀 css에 익숙해진 것 같다.(21.1.28)</s>
- 공부 하면 할수록 모르겠다..css..(21.08.05)
