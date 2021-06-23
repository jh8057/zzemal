# zzemal_web
Start make public website!😀
## reference site
[My Site](https://jh8057.github.io/zzemal/)   
[MDN web](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started)  
[Google Font](https://fonts.google.com/specimen/Hachi+Maru+Pop?selection.family=Hachi+Maru+Pop&sidebar.open=true#standard-styles)  
[html 데이터저장](https://www.zerocho.com/category/HTML&DOM/post/5a76d1eaabd090001b981ba6)  
[웨이브만들기 Youtube](https://www.youtube.com/watch?v=LLfhY4eVwDY)  
[애니메이션 넣어주는 라이브러리 animate.css](https://animate.style/)  
[Thanks Dev Ed!](https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q)  
[사진받는곳](https://www.freepik.com/vectors)  
[icon받는곳](https://fontawesome.com/icons/bars?style=solid) : html에 링크하나를 첨부해줘야된다.   


## script tag
- script tag로 감싸서 자바스크립트를 작성할 수 있다.
- 자바스크립트는 기본적으로 html 위에서 동작하는 코드다.
- 자바스크립트는 '동적'이다.
- 이후 semantic tag라는 것도 있다. 의미적인 뜻을 나타내는 태그이다.
## semantic tag
조금 더 명확한 설명을 위한 태그이다.  
상세 내용 : [요기](https://kutar37.tistory.com/entry/%EC%8B%9C%EB%A9%98%ED%8B%B1-%ED%83%9C%EA%B7%B8-Semantic-Tag)
- form tag : 사용자의 정보를 알기 위해 입력 틀을 만들때 사용 / 입력된 데이터를 한번에 서버에 전송 / 전송 후 페이지 리로드
- HTML <--template--> 요소는 페이지를 불러온 순간 즉시 그려지지는 않지만, 이후 JavaScript를 사용해 인스턴스를 생성할 수 있는 HTML 코드를 담을 방법을 제공합니다.
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
- 코드 속에 `debbug`라는 것을 넣으면 디버깅도 가능하다.
## CSS
- 속성(attribute)이라는게 있고, 그것에 맞는 문법을 써넣어주면 된다.
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
- 이제 좀 css에 익숙해진 것 같다.(21.1.28)
- class를 이용해서 꾸미는것이 은근 꿀이란걸 깨달았다.
- span이나 div로 원하는 구역 정해주고 class 부여하면 끝!
- css가 그냥 대충 크기만 맞춰주는 건줄 알았는데 animation 기능도 css에서 부여가능하다는걸 알게되었다.
- 오랜만에 창작욕이 불타올라.. 디테일을 살리겠다고 시간은 많이 걸렸지만, 디자이너가 아니기에 엄청 이쁘진 않는 창작물을 만들어버렸다.😉
- @keyframe : from to 로 animation을 조절할수있다.
- animate : infinite alternate => 왔다 갔다 반복
- position : absolute를 해줘야 animation이 생각한대로 된다.(위치값을 전체를 보고 애니메이션을 줄 경우)
- 사진도 url으로 불러올수있고, 이미지 크기도 cover,contain등을 통해 조절할 수있다.
- [자주 사용되는 요소](https://velog.io/@bungouk6829/CSS-%EC%9E%90%EC%A3%BC-%EC%82%AC%EC%9A%A9%EB%90%98%EB%8A%94-%EC%86%8D%EC%84%B1)
- css 커버 모양도 이미지로 바꿀수 있다.(권장 32x32pixel) 재밋네😁
- [이것](https://myriad.video/)의 첫부분을 따라하고 싶어서 고민하던 중 div로 겹쳐서 놓을 수 있는걸 보고 기존 페이지 위에 검은색 배경으로 덮고 나중에 자연스럽게 내용이 나오도록 해보려했다.
> 가능은 했으나, 만족스럽진 못해서 따로 빼놨더니, 오히려 독립적이니까 더 이쁜것 같기도 하다. 컬러바는 다음에..ㅎ
- div로 전체 화면을 가리고 싶으면 html,body의 margin이나 padding이 없어야 되고, width,height도 100% 해야 상속된다.
- padding 과 margin을 배웠지만.. 직접 써봐야 뇌리에 박히는게 진짜 맞는것 같다. 이제야 padding을 제대로 이용했다.padding을 이용해서 일정 간격을 내부에서 띄어주고 왼쪽 정렬해주었다.
- list-style:none 하면 리스트 앞에 붙은 것들이 안나온다!
- float:left 바로 이어서 붙어서 나오게해주는 것
- 대대적인 디자인 변화를 줄까해서 일단 body에 걸려있던 margin이며 padding이며 border며 다 없애주고 100%로 해놨다.
- em : 지금 객체 기준 한간격
- rem : html의 한간격
- ::after 가 라이브러리 사용한줄 알았는데, 그냥 css에서 추가로 사용하는 요소였다.
- :hover도 css 기능이였다.😅 마우스 커서를 가져다 대면 동작하는거였다.
-CSS는 같은 속성을 여러 번 정의했을 때, 나중에 설정한 값이 적용됩니다. 만약 나중에 설정한 값이 적용되지 않게 하려면 속성값 뒤에 !important를 붙입니다.
-div를 이용한 cursor를 만들어봤는데, 뭔가 이상해서 다음기회에 하는걸로 했다. js에서 커서 위치를 제대로 못잡는 현상이 일어났다.
- transform만으로는 요소의 변형을 일으킬 뿐 움직이는 동적인 효과를 줄 수 없습니다.
- transition을 사용하여 동적인 효과를 줍니다.[여기](https://codingbroker.tistory.com/54)
- 매번 놀라는데, 사실 간단하지만 생각지 못한것들을 많이 알게 되었다.
- Y축으로 100% 올려주고,overflow:hidden을 줘서 안보이게 끔해주고, 나중에 다시 0%로 돌려와서 안보이다 보이게끔 한다는게, 참 간단하면서도 생각지 못했던 거였다.
- span은 inline 요소이기에 block처럼 활용하려면 inline-block화를 해줘야 된다.
- 다음과 같이 flex 속성을 부여하고 align center를 해서 원하는 위치에 놓는걸 말이 쓰더라
> display: flex; align-items: center;
- fillter : drop-shadow 사진의 실제 이미지에 맞게끔 그림자를 넣을 수 있다.
- background: linear-gradient(to right,"start color","end color") = 배경을 그라데이션으로 만들 수 있다.
- -webkit-background-clip: text; 백그라운드를 text에 맞게 고정할 수 있다.
- -webkit-text-fill-color: transparent; text에만 배경을 채울 수 있다.
-justify-content: space-around; 공간에 맞게 정렬
- flex : 1, 2 display:flex일 때, 공간에 맞게 크기 조절
- @meida : 크기가 바뀌었을때 설정값으로 바뀌도록 함
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
- let, var, const
- textarea 때문에 개삽질을 했다.🔥🔥🔥
- 결과물을 냈는데도 아직도 왜 안됐는지 모르겠다. 답을 찾고 나니 괜히 오타로 돌고 돌지 않았나 싶은데...
- 결론은 getElementById 로 얻은 값을 한번 저장하고, 그 값을 불러서 value값을 참조해야 제대로 참조가 된다. (자동완성때문에 value가 안쳐저서.. esc 누르면 바로 해결되는걸.. 못쓰는줄..알았네..)
- get id할때는 #을 안 붙인다.
- innerHTML로 내용을 변경하는게 줄바꿈이 적용이 된다.
- 역시나 , if else if 문은 동일하게 존재했다.
- Math.random 으로 랜덤 숫자 뽑기 기능 구현 !🐬
- 열심히 댓글기능 만들어서 올려놨는데 저장이 되지 않고 있었다. ㅎ..🎈
- parserInt : String -> int
- self 라는 용어가 나와서 this와 헷갈리기 시작했는데, 내가 이해한대로 적어본다면 self는 그냥 this를 넘기기 위해 사용된 매개변수 이름일 뿐이라 생각된다.
- 따라서 중복문이나, js으로 this값을 넘길때 사용될 듯 하다.(뇌피셜🤔)
- 여튼 this 값을 넘길 수 있다는 걸 알게 되어서 편해졌다.😁
- 객체라는 것을 배우게 될것이다.
- 폴더라 생각하면 편한데, 그동안 이름중복을 피해 써왔던 것들을 객체를 통해 구분짓고, 편리하게 가져다 쓸수 있게 된다.
- 객체에 있는 함수를 '메소드'라 부른다. 객체 > 메소드
- 객체 : 이름이 있는 정리정돈 상자
- 아 .. 객체가 특별한건줄 알았는데, 그냥 딕셔너리 개념이랑 같다고 보면 될것같다.
- 객체에 함수를 담을수 있다.😲
- 객체 내 함수 있는가? > 없으면 prototype 이 있는가 확인
- prototype을 통해 메모리 사용을 줄일 수 있다.
- 그 동안 왜 js 링크를 body 끝쪽에 놓으면 좋은지에 대한 걸 그냥 그렇구나 하고 넘어갔었는데, 알게 되었다.
- 웹 페이지를 불러오는데 parsing HTML, fetching js, execute js가 있는데, 이때 순서나 방법에 따라, 장단점이 존재하기 때문이다.
- 자세한건 [요기](https://www.youtube.com/watch?v=tJieVCgGzhs&t=445s)
- 제일 좋은 순서 head + defer > header + asyn > body end > head
- 'use strict'; 을 선언해주면 좋다(쉘 스크립트 #!/bin/bash 같은거)
- 왜? 유연성이 좋은 js에 안전장치역할, 선언되지 않은 것 있으면 막아줌.
- 객체를 양산하는 공장 : `constructor`
- class 함수에서 제일 먼저 실행되는 함수 이름 = constructor
- class 에서 상속 : extends
- call,bind를 통해 상속을 이용할 수 있다.
- 그래도 그냥 class로 짜는게 더 깔끔하고 편해보인다(현재로는🤔)
- setattribute,getattribute 라는 함수도 있어서, 이를 통해 속성값을 바꿔줄수 있다.
- 오늘은 footer를 제대로 만들어 봐야지에서 시작했던게, table도 만들어보고, div로도 쪼개서 꾸며봤다.(난 div가 좋은 것 같다.)
- float 기능을 할게되었다. 
- 날짜 계산하는 함수도 만들어봤다. 웃긴게 Date()에 입력한 날짜보다 한달이 추가되서 나오는게 웃겼다.
- gsap 이라는걸 이용해서 transition 효과를 주어보았다. 이게 라이브러리를 쓰는거다라는걸 알게되었다.
>script에 gsap관련된거 한줄 넣어주면 끝이다. 다만, 형식을 알아야 쓸 수 있다.
- c처럼 debug하지말자.. debugging은 웹페이지에서 검사누르면 바로나오는것을..
- javascript도 순서가 존재한다는걸 알게되었다.. js끼리 서로 필요한 파일이 있으면, 라이브러리 script를 다 불르고 마지막에 내 script를 배치해야된다.
## graphic
-언제나 에러는 짜증난다.. 그래픽작업을 한번 해볼라했는데.🔥🔥🔥🔥🔥🔥
- [CORS error](https://velog.io/@takeknowledge/%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-CORS-policy-%EA%B4%80%EB%A0%A8-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3gk4gyhreu)
- 보안상의 이유로 웹에서 로컬의 파일을 제대로 가져오지 못해서 로컬에서 http-server를 이용해서 봐야만 제대로 `모듈`이 가져와지는 에러가 있었다. 
> ex) import{~} from './~'
- npx http-server -p 포트번호 를 이용해서 확인했다.
- [도형그리기](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Drawing_shapes)
- [웨이브그리기](https://velog.io/@jakeseo_me/%EC%9B%B9-%EC%95%84%ED%8A%B8%EC%9B%8C%ED%81%AC-1-%EB%82%98%EB%A7%8C%EC%9D%98-%ED%8C%8C%EB%8F%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0)
- canvas를 불러 오고, 그 위에 ctx(context)를 이용한 여러 함수 (moveTo,lineTo,fill 등등)을 이용해서 도형을 그렸다.
- wave를 만드는 것은 기본적으로 점을 찍고, 점이 sin값에 따라 랜덤하게 움직이게 만든 후 , 이 점들을 커브로 이어주는식으로 만들었다.
- 이때까지 코딩을 하면서 수학적 계산식을 써본적이 거의 처음인 것 같은데, 수학을 접목한다는 것이 어떤것인지 알게되었다.(비록중등수학이였지만🎈)

## error
-github에 커밋햇는데 page는 업데이트 되지 않는 에러가 발생했다.
- 한번 더 커밋하니까 됐다.. 뭐지..
## React
제일 처음 내가 하고 싶었던, React에 대해 배우려고 한다.
- 개발 환경부터 세팅하고 해야지..😐
- npm 이 필요 > node.js 를 설치 > cmd 창에서 
```
npm install -g create-react-app
(원하는 폴더로 이동 후) create-react-app . (프로젝트에 필요한 프로그램 설치)
```
> -g 는 어디서든(어느 위치에서+) 실행 할 수 있게 해주는 옵션
- npm : js 패키지 관리자, node.js의 기본 패키지 관리자.
- npm : node.js로 만든 프로그램을 쉽게 실행 할 수 있게 해주는 앱 스토어.(비유)
- npm run start : 리액트 앱 실행
- npm run build : 배포용 빌드
> npm install -g serve : 서버 설치 (npx 1회용)
- 우리는 js가 아닌 JSX을 이용한 코딩을 하는거다.
- 이를 reate가 자바스크립트로 변환해주는거다.
- component : react 구동하면 구동되는 하나의 블럭
- props : attribute 값 , component를 외부 제어할때 필요
- state : component 에 들어가있는 가려져있는 블럭들 , 실제 구동에 필요한 부분들
- key : state 지정해서 여러 값을 불러올때 앞에 key값을 넣어줘야된다.(react가 필요로 함)
## p5.js
- 회사에서 three.js를 보게되어서 갑분 p5를 해보았다.
- 홈페이지에서 자바 파일은 받은 후, script에 추가해주고, p5에서 정해진대로 코딩을 하면 화면에 구현이 된다.

## Mobile enviroment
```html
<meta name= viewport content= "width=device-width, initial-scale=1.0">
```
- 위 코드를 사용하면 웹 페이지를 여는 공간에 맞추어 사이즈가 적용된다. (반응형 웹)
- 이때, 어떤것들을 주의해야되는지 적어보겠다.
- 개발 기준은 iphon6s로, 414x736 기준으로 개발할거다.
- css에서 미디어 쿼리를 사용해서 만든다.
```css
@media screen and (max-width:700px){}
```
- 이러면 700px 이하의 디스플레이에서는 해당 단락에 정의된대로 화면에 나타난다.

## Vue.js
- 버전 : Vue 3
- 확장프로그램
    - vetur : 하이라이트(색)
    - vue VSCode Snippets : 초기 구성을 자동 완성
    - html css support : css 내 클라스 자동완성
- 설치 명령어: npm install -g @vue/cli
- PSSecurityException 에러 : [해결 참조 사이트](https://samsons.tistory.com/16)
- 폴더 내에 내가 설정한 프로젝트명으로 폴더가 생성됐으면 끝.
- app.vue 가 메인
- app.vue를 인식하는게 아니라, app.vue에 코드를 짜면 public 폴더 내에 index.html로 그 내용을 옮겨서 올리는 것 이다.
- template : html / script : js / style: css
- npm run serve 하면 시작 (폴더 내에서)
- npm : 각종 웹개발 라이브러리 설치 도우미
- 폴더 설명
    - node_modules : 프로젝트 라이브러리 모음
    - src : 소스
    - public : 공용 프로그램 보관,html 등
    - package.json : 버전, 설정 기록
### vue - 데이터 바인딩
- 데이터 바인딩이란 : 속성값과 데이터를 연결해주는 것.
- {{ 데이터바인딩 }} : JS 데이터를 HTML에 꽂아넣는 문법
- :속성="데이터이름" 으로도 가능 (v-bind를 앞에 붙여도 됨)
- 데이터바인딩 쓰는 이유 : 1. 하드코딩하면 변경이 어려움, 2.실시간 자동 렌더링 쓰기위해 -> 변경사항에 따라 자동으로 재렌더링하기위해 -> 웹앱들
- 함수 사용시 {{ }} 에서는 ()를 붙이고, 속성에서는 인자가 없으면 ()를 안붙여야된다.

### vue - 반복문(v-for)
- v-for을 이용해서 동일한 태그 여러개 생성가능.
- 문법은 for문과 동일, :key를 통해 변수값 사용
- key에는 고유한 값을 넣어준다. 보통 아이디 값 사용
- 객체에도 사용할 수 있음.(잘 안한다)
```
 <a v-for="jh in menus" :key="jh" href="#">{{jh}}</a>
 <a v-for="(jh,i) in menus" :key="i" href="#">{{jh}} , {{i}}</a>
```
### vue - 양방향 바인딩(v-model)
- input 값을 바로 다른곳에 적용하기 위해 사용

### vue - computed & watch
- 연산이 필요한 부분을 따로 빼놓은 것.
- ()를 생략하고 넣어줌
- 메소드 대신 사용하는 이유는 , computed 값은 미리 저장되어서 불러와지는 반면, 메소드는 매번 계산을 하는 차이가 있다. (캐싱 차이) [공식문서](https://kr.vuejs.org/v2/guide/computed.html#computed-%EC%86%8D%EC%84%B1%EC%9D%98-%EC%BA%90%EC%8B%B1-vs-%EB%A9%94%EC%86%8C%EB%93%9C)
- 최대한 computed 속성을 쓰고, watch가 필요할때만 watch 사용
- watch는 변화를 보다가 변화가 발생하면 그에 따른 액션을 할 수 있게 해주는 것

### vue - style & style 바인딩
- style은 기존처럼 헤드에 선언하면 된다.
- 일반적인 class와 공존이 가능하다.
- style에도 데이터바인딩을 하고 싶으면 {} 를 하고, 

### vue - v-if & v-show
- v-if : false면 아예 랜더링을 안함
- v-show : 처음에 랜더링을 하는데, 스타일 통해서 가려놓은거

## vue - 인스턴스 
- 인스턴스 여러개 만드는것 : new Vue 앞에 객체처럼 이름 붙여준다.
- this 대신 이름을 써주면 해당 인스턴스의 변수를 수정 가능하다.

## vue - 컴포넌트 (component)
- 여러 인스턴트에서 사용될 만한 반복되는 부분을 따로 묶어서 만들어 놓는 곳.
- 지역 등록과 전역등록이 있다.
- 전역등록을 하면 최종빌드에 들어있어서 파일 양이 많아지기에 비효율적.
- 이때 data는 data(){return} 을 써줘야된다.
- 컴포넌트에서 만드는 것은 본문에서 태크 쓰듯이 쓰면 된다.
- 여려줄로 나눠 쓸때는 `으로 써야된다.
- 컴포넌트 안에서 다른 컴포넌트를 사용할 수 있다.
- 전역 등록 할때는 Vue.component('이름',{ 내용 })
- 지역 등록 할떄는 const 선언이름 = {내용} 으로 선언 후 app 인스턴트 내에서 components : { '태그이름 ' = 선언이름} 추가 해주면됨.
- 지역 등록을 컴포넌트 내에서도 동일하게 수행하면 등록 가능

### vue - Vue CLI
- CLI : Command line interface
- vue create 이름 : 프로젝트 생성
- 프로젝트 폴더에 들어가서 npm run serve : 구동
### vue - Router
- 설치할때 따로 해줘야된다.
- 처음 프로젝트 생성될때 router 폴더가 생성된다.
- path 경로 참조
- SPA에서 페이지 이동
- router-link , router-view 태그 사용
- router-view부분이 component로 바뀌는 매커니즘
- view 폴더에 페이지 작성 부분이 있고, component는 또 폴더가 따로 있다.

### vue - Single File component
- vue를 CLI가 아니라 그냥 link로 가져왔을때는 component를 app 위에 전역으로 설정하던, const로 지역으로 등록하던 하였는데, CLI로 하면 이제 ~~.vue라는 파일로 만들수가 있다.
- style 에 scoped를 선언해 줘야 해당 템플릿에만 적용된다.
- 템플릿에는 먼저 전체를 감싸는 하나의 태그가 존재해야된다.

## vue- props
- 컴포넌트에서 사용되는 값을 각 페이지에서 전달 할 수 있게 해주는 기능
- type도 정할수 있고, required 하면 무조건 값을 보내줘야만 한다.
- default값을 정해줄 수 도 있다.
- props는 받는쪽(자식)에서 바꿔주면 warning이 뜨니까, 직접적으로 바꾸지말고 event를 통해 바꿔주는게 좋다.

### vue - slot
- components slot 태그를 쓰면 상위 폴더에서 html문법으로 작업을 한 것을 보여지게끔 할 수 있다.
- 이름을 설정해줄 수 있다.
- 이름을 #이름 을 통해 해당 이름 슬롯에 내용을 넣어줄 수 있다.
- 데이터를 주고 받고 할 수 있다. :변수="변수이름" 이런식으로

## vue - life cycle
- beforeCreate()
- create()
- beforeMount()
- mounted()
- beforeUpdate()
- Updated()
- beforeDestroy()
- destroyed()
- 위와 같이 vue가 동작하는 과정에서 작업을 수행할 수 있는 구역이 있다 생각하면 편할 듯하다.

## vue - $emit
- 이벤트 발생은 컴포넌트의 통신 방법 중 하위 컴포넌트에서 상위 컴포넌트로 통신하는 방식입니다.
- e : event , 직접 데이터를 올려준 경우, 그 이름으로 변경해야된다.(ex. value)
## vuex 
- 여러 props 사용으로, 자식의 자식의 자식.. 등 여러 차례 이동이 되는 경우를 방지위해 등장.
- 다이렉트로 데이터를 받을 수 있다.
- src 하위 >  store folder > index.js
## vuex - state
- computed 에서 접근할 수 있다.
- 예시) return this.$store.state.todos;
#이벤트
## Free note
- em : Effective Micro-organisms 기울기 효과
- ctrl + t : 새 탭 열기 / ctrl + n : 새 창 열기
- ctrl + L : console창 지우기
- console 에서 shift + enter 하면 여러줄 타입 가능
- Ctrl + Shift + L : 동일 단어 동시 수정
- CRUD : Creat, Read, Update, Delete

## VScode 설정
- font
- 오른쪽 스크롤 미리보기 창 : eiditor.minimap~
- vue 빨간줄 안보이게
```
F1>Preferences:Open Settings (JSON)
paste
"vetur.validation.template": false,
"vetur.validation.script": false,
"vetur.validation.style": false,
```


## 지금까지 생활 코딩에서 수강한 탭
- WEB 1 HTML
- WEB 2 CSS
- WEB 2 Javascript
- WEB 2 Home server
- WEB 2 HTTP
- javascript 객체 지향 프로그래밍

## 구독한 Youtuber
- Dev Ed
- Easy Tutorial
- online Tutorial
- Coding Nepal
- 코지코더