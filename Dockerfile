FROM node:alpine3.18
WORKDIR /app
COPY package.json ./
RUN npm install --legacy-peer-deps  
#legacy peer deps used to control  version of depndency
COPY . .
EXPOSE 4000
CMD [ "npm", "run", "start" ]
