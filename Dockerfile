FROM node:18.3.0
WORKDIR /app
COPY package*.json ./
RUN yarn 
COPY . . 
CMD ["yarn", "start"]