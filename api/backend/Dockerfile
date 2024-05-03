# Sets the base image of the application to the node’s official image.
FROM node:21-alpine

WORKDIR /app
# Copies the package.json file into "/server" and runs npm i
COPY package.json .
RUN npm install
# Copies the entire source code into "/server"
COPY . .


# Specifies the port the node app will be running on
EXPOSE 8085

# Runs "node server.js" after the above step is completed
CMD ["npm", "run", "start:dev"]

