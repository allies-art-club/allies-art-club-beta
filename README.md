# Allies-Art-Club
Functions as a virtual group (club) where people can follow/like our social media pages, donate funds or keep up to date with what we're doing through our website or post donations to our storage space. 

CSS THEME COLOURS

#FFF859 - yellow
#38B6FF - blue
#FF66C4 - pink

mongodb set up see .env

docker containers - node-app (src), react-app, nginx 
services - mongodb

using nginx rather than port mapping as it is easier to let nginx differentiate between the url via prefix
- if route begins with / e.g  /main or /index it will be sent to react front end
- if route begins with /api  e.g /api/main or /api/index it will be sent to back end

when using docker-compose up, if it fails first time, ctrl+c and restart

multi-container setup flow
- push to github
- travis autopulls repo
- travis builds a test image, tests code
- travis builds prod images
- travis pushes built prod images to docker hub
- travis pushes project to heroku
- heroku pulls images from Docker Hub, deploys (may swap out for AWS later)

travis flow
- specify docker as a dependency
- build test version of react project
- run tests
- build prod version of all projects
- push all to docker hub
- tell heroku to update
