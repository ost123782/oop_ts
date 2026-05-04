import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Lab8Controller } from './lab8.controller';
import { Lab8Service } from './lab8.service';
import { LAB8_CLIENT } from '../rmq/rmq.constants';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [EventsModule],
  controllers: [Lab8Controller],
  providers: [
    Lab8Service,
    {
      provide: LAB8_CLIENT,
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [
              config.get<string>(
                'RABBITMQ_URL',
                'amqp://guest:guest@rabbitmq:5672',
              ),
            ],
            queue: config.get<string>('LAB8_QUEUE', 'lab8_queue'),
            queueOptions: { durable: true },
          },
        }),
    },
  ],
  exports: [LAB8_CLIENT],
})
export class Lab8Module {}
