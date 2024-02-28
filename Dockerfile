FROM node:16-alpine
WORKDIR app
COPY ./package.json .
RUN npm install
COPY . .
COPY .env .
EXPOSE 80
CMD ["node","index.js"]

