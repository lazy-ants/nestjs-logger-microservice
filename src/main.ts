import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

const { AMQP_URL, AMQP_QUEUE } = process.env;

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [AMQP_URL],
        queue: AMQP_QUEUE,
        prefetchCount: +process.env.AMQP_PREFETCH_COUNT,
        noAck: false,
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  app.listen(() => console.log('Logger microservice started'));
}
bootstrap();
