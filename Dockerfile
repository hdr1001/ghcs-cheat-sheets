# syntax=docker/dockerfile:1

FROM node:16-alpine

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY ./index.mjs ./

CMD ["npm", "run", "start"]
