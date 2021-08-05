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
