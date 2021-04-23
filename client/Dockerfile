FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUn npm install
RUN rm -rf /app/node_modules/jest
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html