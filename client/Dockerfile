FROM node:18-alpine
WORKDIR /frontend/

COPY *.json .
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "npm", "run" ,"start" ]