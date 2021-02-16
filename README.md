# zzemal_web
Start make public website!😀
## reference site
[My Site](https://jh8057.github.io/zzemal/)   
[MDN web](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started)  
[Google Font](https://fonts.google.com/specimen/Hachi+Maru+Pop?selection.family=Hachi+Maru+Pop&sidebar.open=true#standard-styles)  
[html 데이터저장](https://www.zerocho.com/category/HTML&DOM/post/5a76d1eaabd090001b981ba6)  
[웨이브만들기 Youtube](https://www.youtube.com/watch?v=LLfhY4eVwDY)  
[애니메이션 넣어주는 라이브러리 animate.css](https://animate.style/)  
## script tag
- script tag로 감싸서 자바스크립트를 작성할 수 있다.
- 자바스크립트는 기본적으로 html 위에서 동작하는 코드다.
- 자바스크립트는 '동적'이다.
- 이후 semantic tag라는 것도 있다. 의미적인 뜻을 나타내는 태그이다.
## semantic tag
조금 더 명확한 설명을 위한 태그이다.  
상세 내용 : [요기](https://kutar37.tistory.com/entry/%EC%8B%9C%EB%A9%98%ED%8B%B1-%ED%83%9C%EA%B7%B8-Semantic-Tag)
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

## Free note
- em : Effective Micro-organisms 기울기 효과
- ctrl + t : 새 탭 열기 / ctrl + n : 새 창 열기
- ctrl + L : console창 지우기
- console 에서 shift + enter 하면 여러줄 타입 가능
- Ctrl + Shift + L : 동일 단어 동시 수정
- CRUD : Creat, Read, Update, Delete

## 지금까지 생활 코딩에서 수강한 탭
- WEB 1 HTML
- WEB 2 CSS
- WEB 2 Javascript
- WEB 2 Home server
- WEB 2 HTTP
- javascript 객체 지향 프로그래밍