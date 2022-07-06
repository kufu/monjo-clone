FROM node:14.18.1

WORKDIR /app

COPY package.json yarn.lock .
RUN yarn install

COPY . .

EXPOSE 3110
