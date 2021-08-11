# Gallery

사진들을 나열한 페이지를 만들어 보았습니다.
반응형 웹 페이지와 Flex에 대해 공부하면서 만들어 보았습니다.

<hr>

## 결과

[브라우저에서 보기!](https://jh8057.github.io/zzemal/projects/01.gallery/)

## 구현 방법

#### JS

- setInterval을 통해 주기적으로 메인 사진과, 키워드가 변경되도록 구현하였다.

#### API

- [Disqus](https://disqus.com/) API를 이용해서 댓글창을 구현하였다.
- 적용하는건 쉬우나, 소셜 로그인이 필요하고, 무언가 호환이 아쉬운 느낌이다. ( github page라 그런것 같기도 하다)

#### CSS

- toggleBtn 은 독립적으로 배치하여 flex박스와 상관없도록 하였다.
- width에 고정된 px값을 넣은 후 flex에 auto기능을 넣으면, 고정된 값을 기준으로 이미지가 변경된다.
- max나 min-width로 할 수 있지만, 고정값을 넣어주면 처음 초기값을 넣어주는 느낌이다.

#### html

- meta 정보에서 og(Open Graph)를 통해 썸네일, 설명 등을 변경 가능하다.
- 하지만, 바로바로 적용되지는 않는 경우가 있다.(길면 하루)
- a href="#sth" 와 a name = "sth" 을 사용하면 해당 지역으로 이동한다.

#### git

- 갑작스럽게 에러가 났다. 방법을 찾다가 도저히 모르겠어서 git 로컬 파일을 강제로 서버의 파일로 덮어 쓰기 하였다.

```
git fetch --all
git reset --hard origin/master
```

[detached HEAD](https://aroma-dev.tistory.com/4)
