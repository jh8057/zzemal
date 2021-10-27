# vuetodo

[코지코더](https://www.youtube.com/watch?v=gZBKGn0wQXU&list=PLB7CpjPWqHOtYP7P_0Ls9XNed0NLvmkAh)영상을 보면서 공부하였습니다.

<hr>

### Vue 시작

```
npm run serve
```

# Vue.js

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

## vue - 데이터 바인딩

- 데이터 바인딩이란 : 속성값과 데이터를 연결해주는 것.
- {{ 데이터바인딩 }} : JS 데이터를 HTML에 꽂아넣는 문법
- :속성="데이터이름" 으로도 가능 (v-bind를 앞에 붙여도 됨)
- 데이터바인딩 쓰는 이유 : 1. 하드코딩하면 변경이 어려움, 2.실시간 자동 렌더링 쓰기위해 -> 변경사항에 따라 자동으로 재렌더링하기위해 -> 웹앱들
- 함수 사용시 {{ }} 에서는 ()를 붙이고, 속성에서는 인자가 없으면 ()를 안붙여야된다.(computed 값은 ()를 붙이면 안된다)

## vue - 반복문(v-for)

- v-for을 이용해서 동일한 태그 여러개 생성가능.
- 문법은 for문과 동일, :key를 통해 변수값 사용
- key에는 고유한 값을 넣어준다. 보통 아이디 값 사용
- 객체에도 사용할 수 있음.(잘 안한다)

```
 <a v-for="jh in menus" :key="jh" href="#">{{jh}}</a>
 <a v-for="(jh,i) in menus" :key="i" href="#">{{jh}} , {{i}}</a>
```

## vue - 양방향 바인딩(v-model)

- 양방향 바인딩이란, data값이 실시간으로 변화했을때 바로 다른 곳에 적용되도록 하는 것이다.
- input 값을 바로 다른곳에 적용하기 위해 사용

## vue - computed & watch

- 연산이 필요한 부분을 따로 빼놓은 것.
- ()를 생략하고 넣어줌
- 메소드 대신 사용하는 이유는 , computed 값은 미리 저장되어서 불러와지는 반면, 메소드는 매번 계산을 하는 차이가 있다. (캐싱 차이) [공식문서](https://kr.vuejs.org/v2/guide/computed.html#computed-%EC%86%8D%EC%84%B1%EC%9D%98-%EC%BA%90%EC%8B%B1-vs-%EB%A9%94%EC%86%8C%EB%93%9C)
- 최대한 computed 속성을 쓰고, watch가 필요할때만 watch 사용
- watch는 지정한 데이터의 변화를 보다가 변화가 발생하면 그에 따른 액션을 할 수 있게 해주는 것

## vue - class 바인딩 & style 바인딩

- 일반적인 class와 공존이 가능하다. 클래스 바인딩이 가능하다.
- {} 에서 if 처럼 조건을 써 줄 수 있다. {red : isRed} 라고 선안하면 isRed가 true일때만 red class가 적용된다.
- style에도 데이터바인딩을 하고 싶으면 {} 를 이용하면 된다.
- style은 기존처럼 헤드에 선언하면 된다.

## vue - v-if & v-show

- v-if : false면 아예 랜더링을 안함
- v-show : 처음에 랜더링을 하는데, 스타일 통해서 가려놓은거(display:none)

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

## vue - Vue CLI

- CLI : Command line interface
- vue create 이름 : 프로젝트 생성
- 프로젝트 폴더에 들어가서 npm run serve : 구동

## vue - Router

- 설치할때 따로 해줘야된다.
- 처음 프로젝트 생성될때 router 폴더가 생성된다.
- path 경로 참조
- SPA에서 페이지 이동
- router-link , router-view 태그 사용
- router-view부분이 component로 바뀌는 매커니즘
- view 폴더에 페이지 작성 부분이 있고, component는 또 폴더가 따로 있다.

## vue - Single File component

- vue를 CLI가 아니라 그냥 link로 가져왔을때는 component를 app 위에 전역으로 설정하던, const로 지역으로 등록하던 하였는데, CLI로 하면 이제 ~~.vue라는 파일로 만들수가 있다.
- style 에 scoped를 선언해 줘야 해당 템플릿에만 적용된다.
- 템플릿에는 먼저 전체를 감싸는 하나의 태그가 존재해야된다.

## vue- props

- 컴포넌트에서 사용되는 값을 각 페이지에서 전달 할 수 있게 해주는 기능
- type도 정할수 있고, required 하면 무조건 값을 보내줘야만 한다.
- default값을 정해줄 수 도 있다.
- props는 받는쪽(자식)에서 바꿔주면 warning이 뜨니까, 직접적으로 바꾸지말고 event를 통해 바꿔주는게 좋다.

## vue - slot

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

## vue - \$emit

- 이벤트 발생은 컴포넌트의 통신 방법 중 하위 컴포넌트에서 상위 컴포넌트로 통신하는 방식입니다.
- e : event , 직접 데이터를 올려준 경우, 그 이름으로 변경해야된다.(ex. value)

## vuex

- 여러 props 사용으로, 자식의 자식의 자식.. 등 여러 차례 이동이 되는 경우를 방지위해 등장.
- 다이렉트로 데이터를 받을 수 있다.
- src 하위 > store folder > index.js

## vuex - state

- computed 에서 접근할 수 있다.
- 예시) return this.\$store.state.todos;

## vuex - mutation

- vuex state의 데이터를 변경하고 싶을때 사용
- 예시) this.\$store.commit('ADD_TODO',e.target.value);
- 이를 통해 이제 Addtodo,todolist 등 하위 vue 페이지에서 데이터를 받아올 필요가 없어서 v-bind되어 있던걸 다 지워도 된다.
- 최상위 App.vue에서 받아온 데이터를 처리하는 methods들도 지워도 된다.
- debbugging을 쉽게 할 수 있다.

## vuex - action

- 데이터 베이스에 비동기적으로 요청을 보내는 작업을 한다.
- addTodo(context, payload) 형태로 들어간다.

```
this.$store.dispatch('addTodo', e.target.value) 형태로 받는다.
         addTodo({commit}, value){
            setTimeout(function(){
                commit('ADD_TODO',value);
            },2000)
        }
```

- 이를 통해 비동기적으로 동작하는 것을 확인 가능하다

## vuex -getters

- 계산값을 다른 곳에서 사용할 수 있도록 함
- computed와 비슷한 역할

## mapState

- vuex 기능
- 사용할 vue에서 `import { mapState } from 'vuex'`
- 아래처럼 사용

```
...mapState([
            'todos',
            'users'
        ]),
```

원래 사용할라면

```
    users(){
        return this.$store.state.users;
    },
```

## axios

- [블로그](https://tuhbm.github.io/2019/03/21/axios/)
- javascript 라이브러리다.
- 이를 통해 get, post 가 가능하다 ( HTTP 요청이 가능하다)

## JSONplaceholder - API

- [JSONplaceholder](https://jsonplaceholder.typicode.com/)
- 가짜 API를 주고 받을 수 있다.

## vuex - modules

- store를 그냥 사용해도 되는데, 계속하다보면 몸집이 불어난다.
- 종류별로, 사용하는 것 별로 정리하는 방법이 module화 하는 것이다.
- store폴더 내에 modules라는 하위 폴더를 만들고, 각각 js파일을 만들어 정리한다.
- 이 js파일을 다시 index.js파일에서 import해서 불러와 등록한다.
- 이렇게 했을때 기존에 store에서 데이터를 가져오는 곳에서 module이름을 포함해 줘야된다. ( 이름을 다 변경해 줘야된다.)
- `return this.$store.state.**todo**.todos;`
- `...mapState(**'user'**,['users'])`,
- `return this.$store.getters['**todo**/numberOfCompletedTodo'];`
- `namespaced : ture` 를 꼭 module폴더 내 js파일에 넣어줘야된다.

## vutodo 처음 진행 내용

1. 싹다 지워준다.
2. Bootstrap 에서 css only link를 가져와서 public>index.html에 넣어준다.
3. Bootstrap의 class를 이용해서 내용을 채워 넣어준다
4. 갑분 Bootstrap 강의 같긴하지만, class 내에서 p-2는 패딩2을 준다. 이런 의미이다. 이런식으로 모르는거 보이는데로 적어본다.  
   ml=마진,w-너비
