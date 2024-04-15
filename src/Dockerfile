FROM node:20.5.0-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app
COPY package.json ./

RUN npm install

USER node

COPY . .

EXPOSE 3000

CMD npm run dev
