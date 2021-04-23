FROM node:14-slim

WORKDIR /usr/src/app/blog

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD [ "npm", "run", "dev" ]