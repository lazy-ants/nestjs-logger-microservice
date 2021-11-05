#!/bin/bash
docker-compose up -d --build
docker exec -i nestjs-logger-microservice_nodejs bash -c 'npm install'
docker exec -i nestjs-logger-microservice_nodejs bash -c 'npm run build'
docker exec -i nestjs-logger-microservice_nodejs bash -c 'npm run start:prod'
