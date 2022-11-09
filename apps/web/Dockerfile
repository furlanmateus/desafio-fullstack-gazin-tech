FROM node:19

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .

RUN yarn install
COPY . .
RUN yarn start

EXPOSE 8080
