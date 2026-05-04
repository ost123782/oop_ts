import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Lab9Controller } from './lab9.controller';
import { Lab9Service } from './lab9.service';
import { LAB9_CLIENT } from '../rmq/rmq.constants';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [EventsModule],
  controllers: [Lab9Controller],
  providers: [
    Lab9Service,
    {
      provide: LAB9_CLIENT,
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
            queue: config.get<string>('LAB9_QUEUE', 'lab9_queue'),
            queueOptions: { durable: true },
          },
        }),
    },
  ],
  exports: [LAB9_CLIENT],
})
export class Lab9Module {}
