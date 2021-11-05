# NestJS logger microservice

## Pre-requisites

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)


## Initialize steps

- Clone this repo on a machine where you'd like to deploy api
- Execute `bash initial-setup.sh`
- Edit `docker-compose.override.yml` and change `RABBITMQ_DEFAULT_USER`, `RABBITMQ_DEFAULT_PASS` to something secure
- Edit `docker-compose.override.yml` and change `MONGO_INITDB_ROOT_PASSWORD` to something secure
- Edit `docker-compose.override.yml` and 'changeme.com' substring in `MONGODB_URI` with `MONGO_INITDB_ROOT_PASSWORD` value
- Edit `docker-compose.override.yml` and change 'admin' substring in `AMQP_URL` with `RABBITMQ_DEFAULT_USER` value
- Edit `docker-compose.override.yml` and change 'gateway-bunny' substring in `AMQP_URL` with `RABBITMQ_DEFAULT_PASS` value

## Deploy steps

- Execute `bash run-prod.sh` to run in prod mode or `bash run-dev.sh` to run in dev mode

## How to use

Communicate with logger microservice via rabbitmq based on your docker configuration. Simply publish message to a direct exchange. Here is a example:

```
{ "pattern": "log-item", "data": { "key": "value" } }
```

You only need to change `"data"` value.
