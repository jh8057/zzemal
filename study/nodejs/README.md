# NODE JS

[참조 블로그](https://www.zerocho.com/category/NodeJS/post/57774a8eacbd2e9803de0195)

- NODE JS는 다양한 패키지를 가지고 있고, 이를 불러오면서 손쉽게 서버를 구축하여 활용할 수 있다.

- 싱글스레드, 논 블로킹 프로그래밍
- 여러 모듈을 활용해서 작동
- 서버 생성하고, path,url 등으로 경로 지정해주고, express로 페이지 제대로

- express - node를 쉽게 사용하기 위해 사용 [참조](https://jeong-pro.tistory.com/57)
- 주요 기능

1. 미들웨어 - 하나의 함수를 통해서만 요청이 흘러가는 node.js와 대조적으로, 함수를 효과적으로 배열하는 미들웨어 스택이 있음.
2. 라우팅 - HTTP메서드(get,post,put,delete...)로 `특정 URL을 방문`할 때만 함수가 호출됨.
3. 요청/응답 개체에 대한 확장 - response.redirect(...) 나 response.sendFile(...) 처럼 확장 가능.
4. 뷰 - 뷰를 사용해서 HTML을 동적으로 렌더링할 수 있음. (뷰템플릿 pug, ejs 등)
   [참조](https://jeong-pro.tistory.com/59?category=790237)
