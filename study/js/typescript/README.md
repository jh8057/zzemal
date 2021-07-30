# 설치

1. nodejs 설치
2. npm install -g typescript

# 세팅

- ~.ts 생성
- tsconfig.json 생성 > 컴파일 옵션을 설정 > 아래 내용 입력

```
{
    "compilerOptions" : {
      "target": "es5",
      "module": "commonjs",
    }
}
```

# 자동 변환

- ts파일은 브라우저가 인식을 못한다.
- terminal에 tsc -w를 입력해두면 자동변환됨
