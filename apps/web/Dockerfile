FROM node:19

WORKDIR /usr/src/app
COPY package.json .

RUN yarn install
COPY . .
RUN yarn start

EXPOSE 8080
