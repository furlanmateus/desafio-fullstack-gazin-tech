FROM mysql:8
RUN echo "USE mysql;" > /docker-entrypoint-initdb.d/timezones.sql && mysql_tzinfo_to_sql /usr/share/zoneinfo >> /docker-entrypoint-initdb.d/timezones.sql

FROM node:19

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

COPY . .

EXPOSE 3030
EXPOSE 3306

CMD ["yarn", "start"]