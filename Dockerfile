FROM node:alpine
COPY . /app
WORKDIR /src
CMD node App.js