FROM node:22-alpine as development

WORKDIR /protoTyper
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine as production
COPY --from=development /protoTyper/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]