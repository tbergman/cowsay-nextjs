FROM node:alpine

WORKDIR /src
ADD package.json ./
RUN npm install --production
ADD . .
RUN npm run build

CMD npm start -- -p $PORT