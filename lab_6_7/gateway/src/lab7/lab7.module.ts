import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Lab7Controller } from './lab7.controller';
import { LAB7_CLIENT } from './lab7.constants';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: LAB7_CLIENT,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [config.get<string>('RABBITMQ_URL', 'amqp://rabbitmq:5672')],
            queue: config.get<string>('LAB7_QUEUE', 'lab7_queue'),
            queueOptions: { durable: true },
          },
        }),
      },
    ]),
  ],
  controllers: [Lab7Controller],
})
export class Lab7Module {}
