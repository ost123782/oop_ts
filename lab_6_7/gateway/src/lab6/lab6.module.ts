import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Lab6Controller } from './lab6.controller';
import { LAB6_CLIENT } from './lab6.constants';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: LAB6_CLIENT,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [config.get<string>('RABBITMQ_URL', 'amqp://rabbitmq:5672')],
            queue: config.get<string>('LAB6_QUEUE', 'lab6_queue'),
            queueOptions: { durable: true },
          },
        }),
      },
    ]),
  ],
  controllers: [Lab6Controller],
})
export class Lab6Module {}
