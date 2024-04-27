# pull node image (base image for the app)
FROM node:latest
VOLUME ["my-data-volume"]
WORKDIR /app
# copy the source and destination of the app
COPY . .
RUN npm install -g nodemon && npm install
EXPOSE 5000
# syntax for command
CMD [ "npm", "run", "dev" ]
