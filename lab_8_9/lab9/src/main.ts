import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const url = process.env.RABBITMQ_URL ?? 'amqp://rabbitmq:5672';
  const queue = process.env.LAB9_QUEUE ?? 'lab9_queue';

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [url],
        queue,
        queueOptions: { durable: true },
        noAck: false,
      },
    },
  );

  await app.listen();
  console.log(`lab9 microservice listening on queue "${queue}" at ${url}`);
}

void bootstrap();
