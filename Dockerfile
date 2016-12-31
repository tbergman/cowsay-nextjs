FROM node:alpine

WORKDIR /src
ADD package.json ./
RUN npm install --production
ADD . .
RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]