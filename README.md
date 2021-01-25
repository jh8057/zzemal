# zzemal_web
Start make public website!😀
## reference site
[MDN web](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started)  
[Google Font](https://fonts.google.com/specimen/Hachi+Maru+Pop?selection.family=Hachi+Maru+Pop&sidebar.open=true#standard-styles)

## script tag
- script tag로 감싸서 자바스크립트를 작성할 수 있다.
- 자바스크립트는 기본적으로 html 위에서 동작하는 코드다.
- 자바스크립트는 '동적'이다.
## event
- input 으로 버튼을 만들었다.
- value 에 이름, onclick으로 alert()-경고창을 띄웠다.
- onclick 뒤에는 반드시 js이 와야된다.
- onclick 뒤에 내용은 웹 브라우저가 기억하다, 사용자가 클릭했을때, 자바스크립트의 문법에 따라 실행한다.
- on ~~ 하는걸 이벤트(event)라 한다.

## console
- 브라우저를 키고 오른쪽 클릭 > 검사를 누르면 console 창을 볼 수 있다. Elements 에서 esc눌르면 밑에 나오기도 함.
- 콘솔창에서 자바스크립트를 실행할 수 있다.
- 띄어 있는 웹 페이지를 기반으로 실행이 된다.
## CSS
- 속성이라는게 있고, 그것에 맞는 문법을 써넣어주면 된다.
- span 과 div를 이용해서 적용하면 편하다.
- span (div) > class > id 순으로 넓은 영역이다.
- 따라서 좁은 영역일수록 우선순위가 높다!
- 하나의 문서에 고유한 id 하나만 사용 가능하다.
- padding : the space around the content.
- border : the solid line that is just outside the padding
- margin : the space around the outside of the border
- style.css 파일을 따로 만들고, 각 html 에서 link를 통해 참조를 하니까 일괄 적용이 된다.
- style을 본문에 사용하고, head에 link를 사용해서 외부 css를 불러오면, 본문 내 style만 적용된다. / 충돌난다.
- 지금은 width를 %로 설정해서 창 크기에 따라 변화하는데, 이게 잘하는건진 모르겠다.
- img 에 margin 같은 속성으로 조절하고 싶으면, display : block 를 해줘야된다.
- 왜냐. img는 inline요소인데, margin 같은 것은 body 같은 block요소에만 추가할 수 있는 속성이기 때문이다.

## javascript
- 예전에는 브라우저가 자바스크립트인지 잘 인식 못하는 경우가 있어서 script type="text/javascript" 를 써줬는데, html5부터는 default가 되어서 안써줘도 된다.
- 적용하고 싶은 body 맨 아래에 스크립트를 넣어주면 적용이 된다.
- 맨 아래 놓는거는 컴파일 순서 때문이다.
- function으로 묶어서 전부 myscript.js에 넣어주고 불러오는식으로 구성해놓았다. 이게 맞는지는 모르겠다.
- 몇일 안됐지만.. 본인 자신을 가르키는 기능이 있을텐데라는 생각 자체를 안한 내가 한심해졋다.. 뭔가..뭔가 이상했어.. 굳이 id를 부여해서 나를 찾아야했던게..
- this를 하면 내가 실행되고 있는 이 부분을 이야기 하는것이다.
- ex) 버튼에서 this 를 사용하면 지금 이 버튼을 이야기하는 것이다.
- 띠용쓰..? 자바스크립 function으로 감싼데에서는 this가 잘 안되는 것 같다..?🤑
- 객체 지향적으로 사용해야된다. new를 곁들어 사용해야되는듯하다.
- 결론 : 직접적으로 쓰일때에만 호출한 것 자체를 this라 한다.
- 내가 하려는건 function으로 감싸서 모든걸 구현하려했으니 this는 호출된 function일 것이다.
- for ,do while, while, label, break,continue,for in, for of
- 반복문 많기도 하다.
## Free note
- em : Effective Micro-organisms 기울기 효과
- ctrl + t : 새 탭 열기 / ctrl + n : 새 창 열기
- ctrl + L : console창 지우기
- console 에서 shift + enter 하면 여러줄 타입 가능
- Ctrl + Shift + L : 동일 단어 동시 수정