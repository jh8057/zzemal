# Youtube - UI

YouTube 페이지 형태의 UI를 구현해 보았습니다.  
[드림코딩](https://www.youtube.com/watch?v=67stn7Pu7s4&t=637s) 영상을 보면서 따라 만들어 보았습니다.

<hr>

## 내용

### HTML

- 크게 4개의 영역으로 나누어서 구성하였다.
- 클릭하는 부분은 전부 button으로 만든다는것을 알게되었다.
- list형태는 전부 ul태그를 사용하였다.
- youtube영상을 가져오려면 iframe tag를 사용해야됐다.

### CSS

- Mobile 환경을 먼저 구현하고 min-witdh를 통해 PC버전을 나중에 맞춰주는 형식을 알게되었다.
- position : sticky를 알게되었다.

```
position : sticky
top : 0
```

- `margin-bottom: calc(var(--padding) / 2);` 와 같이 padding간격을 일정하게 고정한 변수를 선언해 놓고, calc를 통해 변경해가면서 사용하면서 사용하는 것을 알게되었다.

- 모든 box 배치는 flex를 통해 이루어졌다.

```
.item .imgContainer {
  flex: 1 1 35%;
  margin-right: var(--padding);
}
.item .nextinfo {
  flex: 1 1 60%;
}
.item button {
  flex: 1 1 5%;
}
```

- 위 처럼 flex도 내가 원하는 비율로 설정할 수 있었다.
- 약간의 디테일만 padding이나 margin으로 수정하였다.
- `margin: 0 auto;` auto는 안쓸줄 알았는데, 오히려 꿀팁이라길래 놀랐다.
- 이처럼 auto를 사용하면 버튼의 크기가 아이콘에 맞춰서 자동으로 적당히 바뀌면서 글자가 가운데 정렬이 잘 되는 것을 알게되었다.

- :root에 Color , Size , Font-size 등을 선언하고 사용한것이 유용해보였다.
- line-clamp라는 화면에 라인이 보이는 제한을 두는 것을 알게 되었다.

```

.more {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
```

- 혼자할때는 max-height와 line-height을 통해 구현했는데, 차이점은 끝 부분에 ...이 찍힌다는 것이다. (디테일이 좋다)

### JS

- 상세 설명 버튼, 아래 5개 버튼, subscribe버튼 총 3가지를 구현하였다.
- button을 클릭할때 target이 글자냐, 아이콘이냐, 버튼이냐, 빈 공간이냐 에 따라 다 다른 target이 인식되서 이를 while문과 `parentNode`를 이용해서 해결하였다.
- `pointer-events : none;` 속성을 부여하면서 해결도 가능하다. ( 아래 참고 사이트 확인)

## 참고

[이벤트 위임-1분코딩](https://www.youtube.com/watch?v=-fFNuNsR8q4)
