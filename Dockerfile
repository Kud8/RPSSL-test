FROM node:16.13.0
LABEL version="1.0"
LABEL description="Docker image for the RPSSL"
LABEL maintainer = ["mitya-kudr@mail.ru"]

RUN mkdir /srv/example
WORKDIR /srv/example

COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . .