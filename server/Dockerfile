FROM node:18-alpine
WORKDIR /backend/

COPY *.json .
RUN npm install
RUN  npm audit fix 

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "start" ]
