# console

- 브라우저를 키고 오른쪽 클릭 > 검사를 누르면 console 창을 볼 수 있다.(F12) Elements > esc눌르면 밑에 나오기도 함.
- 콘솔창에서 자바스크립트를 실행할 수 있다.
- 띄어 있는 웹 페이지를 기반으로 실행이 된다.
- 코드 속에 debbug라는 것을 넣으면 디버깅도 가능하다.

# npm

- npm init
- package.json 생성됨
- npm run `scripts 내 요소` script가 실행됨

#### git

- 갑작스럽게 에러가 났다. 방법을 찾다가 도저히 모르겠어서 git 로컬 파일을 강제로 서버의 파일로 덮어 쓰기 하였다.

```
git fetch --all
git reset --hard origin/master
```

[detached HEAD](https://aroma-dev.tistory.com/4)

# node-fetch 사용법(nodejs fetch)

JSON은 node에 포함되어 설치되어있는 반면, fetch는 포함되어 있지 않아서, 따로 설치해주어 사용해야된다

1. npm init -> package.json 파일 생성
2. package.json 파일에 "type" : "module" 추가
3. npm install node-fetch
4. `import fetch from "node-fetch";` 을 js파일에 삽입
