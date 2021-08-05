# wave

- [도형그리기](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Drawing_shapes)
- [웨이브그리기](https://velog.io/@jakeseo_me/%EC%9B%B9-%EC%95%84%ED%8A%B8%EC%9B%8C%ED%81%AC-1-%EB%82%98%EB%A7%8C%EC%9D%98-%ED%8C%8C%EB%8F%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0)
- canvas를 불러 오고, 그 위에 ctx(context)를 이용한 여러 함수 (moveTo,lineTo,fill 등등)을 이용해서 도형을 그렸다.
- wave를 만드는 것은 기본적으로 점을 찍고, 점이 sin값에 따라 랜덤하게 움직이게 만든 후 , 이 점들을 커브로 이어주는식으로 만들었다.
- 이때까지 코딩을 하면서 수학적 계산식을 써본적이 거의 처음인 것 같은데, 수학을 접목한다는 것이 어떤것인지 알게되었다.(비록중등수학이였지만🎈)

## graphic

- [CORS error](https://velog.io/@takeknowledge/%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-CORS-policy-%EA%B4%80%EB%A0%A8-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3gk4gyhreu)
- 보안상의 이유로 웹에서 로컬의 파일을 제대로 가져오지 못해서 로컬에서 http-server를 이용해서 봐야만 제대로 `모듈`이 가져와지는 에러가 있었다.
  > ex) import{~} from './~'
- npx http-server -p 포트번호 를 이용해서 확인했다.
