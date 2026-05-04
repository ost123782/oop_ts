import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { LAB8_CLIENT } from '../rmq/rmq.constants';
import { EventsGateway, ResultRow } from '../events/events.gateway';
import { GenerateNumbersDto, ReadNumbersDto } from './dto';

@Injectable()
export class Lab8Service {
  constructor(
    @Inject(LAB8_CLIENT) private readonly client: ClientProxy,
    private readonly events: EventsGateway,
  ) {}

  async generate(dto: GenerateNumbersDto) {
    const row = await firstValueFrom(
      this.client.send<ResultRow>('lab8.numbers.generate', dto),
    );
    this.events.broadcastResultCreated(row);
    return row;
  }

  async read(dto: ReadNumbersDto) {
    const row = await firstValueFrom(
      this.client.send<ResultRow>('lab8.numbers.read', dto),
    );
    this.events.broadcastResultCreated(row);
    return row;
  }
}
