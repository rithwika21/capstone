FROM ubuntu:18.04

WORKDIR /app
RUN apt update -y
RUN apt upgrade -y 
RUN apt install software-properties-common -y
RUN apt install curl -y
RUN apt-get install \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg \
  lsb-release -y

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash 
RUN apt update
RUN apt install docker.io -y
RUN apt install nodejs -y
RUN npm --version
COPY package.json .
RUN npm cache clean --force
RUN npm install 
COPY . .

CMD ["npm", "start"]