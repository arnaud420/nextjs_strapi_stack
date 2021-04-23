FROM node:14-slim

WORKDIR /usr/src/app/back

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 1337

CMD [ "npm", "run", "develop" ]