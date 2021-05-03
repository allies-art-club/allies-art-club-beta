FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
RUN rm -rf /app/node_modules/jest
COPY . .
RUN npm run build

FROM nginx
CMD gunicorn --bind 0.0.0.0:3000 wsgi
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html