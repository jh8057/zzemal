# NuxtNode

# NuxtProject

## express

1. api 폴더를 만들고, 안에 routes폴더와 index.js파일을 생성한다.
2. nuxt.config.js에 아래 내용을 넣어준다.

```
 serverMiddleware: [
    // <project root>/api/index.js 모듈을 미들웨어로 추가
    '~/api/index.js',
  ],
```

3. 뒤의 주소에 따라 동작하는것을 확인

<hr>

## 참조

mutation - commit
action - dispatch

mutation(state,payload)
action(context,payload) = action({commit, ...}},payload)

<hr>

- vuex에서 작업
- actions => 비동기 함수 작성(데이터 받아오는 axios 같은 작업 실행) => commit('mutation 함수' , payload)
- mutation에 알맞는 함수 작성(받아온 데이터를 가공하거나, state를 수정)
- state에 mutation에서 변화시키고 싶은 변수 데이터 작성
- vue에서 작업
- create()나 mount()를 통해 method함수 등록
- method함수에서 dispatch로 action 함수 실행
- computed를 통해 위에 선언한 변수 가져옴 - users(){ return this.$store.state.변수명}

<hr>
getter는 state값을 통해 계산하는 것을 미리 store에서 처리하고 저장해놓는것

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
