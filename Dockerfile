From node:latest

RUN npm install socket.io

EXPOSE 3000


ENV NODE_PATH /usr/local/lib/node_modules
