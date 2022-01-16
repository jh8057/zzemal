############
## 예제1
# # 사이즈가 작고 심플한 OS(환경)
# FROM alpine

# # 다운 받을 필요 없다
# #RUN command

# CMD ["echo", "hello"]

############

## 예제2

FROM node:10

# 파일 위치
# 외부에서 접속했을 때도 이쪽으로 랜딩된다.
WORKDIR /usr/src/app

# 캐시를 남기기 위해서 따로 copy를 빼준다.
COPY pakage.json ./

RUN npm install

# 전체 파일 복사
COPY ./ ./



# 큰 따옴표여야만 한다
CMD ["node","index.js"]

