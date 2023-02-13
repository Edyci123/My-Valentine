FROM node:16

WORKDIR /usr/src/app


RUN npm install http-server -g

COPY ./dist .

EXPOSE 3000
CMD [ "http-server", "./frontend" ]
