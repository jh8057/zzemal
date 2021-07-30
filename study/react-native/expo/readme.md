# 시작하는법
- 프로젝트 생성 : expo init 파일명
- cd 폴더 -> npm start

# 앱 실행 방법
일단 세팅을 해야된다.
expo ID를 만들고 핸드폰에서 expo go 어플설치, vscode에서도
expo login으로 로그인해야된다

# 변수선언
그냥 자바스크립처럼 funtion App() 내에서 하면 된다.

# 공식 Docs
[DOCS](https://reactnative.dev/docs/button)

# 기능을 사용할때
항상 import에서 사용할 기능을 추가해줘야된다.

# Alert
alert로 바로 사용 가능하나, import 에 Alert를 추가하고 해주면 더 깔끔하게 나온다.

# props
속성, 부모-> 자식으로 넘겨주는 데이터
자식은 변경 불가!  

예시) app.js -> components Mybutton 사용시 title ="button" 이라 설정 -> Mybutton에서 props로 이를 받음

# state
상태, 컴포넌트 내부에서 생성되고 값을 변경 가능(자체처리 가능한 변수)

# function
