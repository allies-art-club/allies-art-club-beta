FROM nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf
CMD gunicorn --bind 0.0.0.0:$PORT wsgi