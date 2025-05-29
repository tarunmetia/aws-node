FROM node:alpine3.18
WORKDIR /app
COPY package.json ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 4000
CMD [ "npm", "run", "start" ]

