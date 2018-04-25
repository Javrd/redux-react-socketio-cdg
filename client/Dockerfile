FROM node:carbon

ENV PORT=80

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --only=production
RUN npm install -g serve

# Bundle app source
COPY . .
RUN npm run build

EXPOSE 80
CMD  [ "serve", "-s", "build" ]
# CMD [ "npm", "start" ]