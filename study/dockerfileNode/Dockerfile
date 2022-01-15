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

# COPY pakage.json ./

# 전체 파일 복사
COPY ./ ./

RUN npm install

# 큰 따옴표여야만 한다
CMD ["node","index.js"]

