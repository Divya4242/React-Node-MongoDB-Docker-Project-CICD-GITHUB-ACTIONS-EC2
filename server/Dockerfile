FROM node:18-alpine
WORKDIR /backend/

COPY *.json .

RUN npx npm-force-resolutions
RUN npm install
RUN  npm audit fix || true

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "start" ]
