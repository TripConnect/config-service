FROM node:20.18.1

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD ["node", "dist/main"]

EXPOSE 31070
