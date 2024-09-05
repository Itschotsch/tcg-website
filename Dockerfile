FROM node:alpine
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
EXPOSE 8080
VOLUME /app
COPY ./package*.json ./
RUN npm install
# COPY --chown=node:node . .
# CMD ["node", "main.js"]
COPY --chown=node:node . .
RUN npm install -g nodemon
RUN npm install -g ts-node
USER node
# ENTRYPOINT ["nodemon", "app/main.js"]
CMD ["npm", "run", "dev"]