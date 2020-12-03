# stage 1 building the code
FROM node as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# stage 2
FROM node
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --production

COPY --from=builder /usr/app/build ./build

COPY ormconfig.docker.json ./ormconfig.json
RUN bash -c 'echo -e ls build'

EXPOSE 4000
CMD node build/index.js
