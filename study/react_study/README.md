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

# props

- component tag에 class="sth" 처럼 propsname = {sth} 해주면 된다.
- 예시) `<Word word={word} />`

# state

- useState();
- 각 component별로 관리된다.

# rest API

- Create : POST
- Read : GET
- Update : PUT
- Delete : DELETE

# useEffect

- useEffect(함수, []/의존성배열)
- 최초에 한번만 하려면 빈 배열 넣으면 됨

# router-dom

- `import { BrowserRouter, Route, Switch } from "react-router-dom";`

# import react

- useState : 변수 관리
- useEffect : 렌더링,업데이트 후 동작
- useRef : Dom 에 접근해주게 해줌

# json-server

- `json-server ./src/db/data.json --port 3001`
- 간단하게 테스트용 서버 API를 만드는데 유용하다

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
