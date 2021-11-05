#!/bin/bash
docker-compose down
cp docker-compose.override.yml.dist docker-compose.override.yml
docker-compose up -d --build
