FROM node:18-alpine
WORKDIR /backend/

COPY *.json .
RUN npm install ansi-regex@6.0.1
RUN npm install got@12.1.0
RUN npm install http-cache-semantics@4.1.1
RUN npm install jsonwebtoken@9.0.0
RUN npm install semver@7.5.2
RUN npm install
RUN  npm audit fix || true

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "start" ]
