import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { LAB9_CLIENT } from '../rmq/rmq.constants';
import { EventsGateway, ResultRow } from '../events/events.gateway';
import { CalculateFormulaDto } from './dto';

@Injectable()
export class Lab9Service {
  constructor(
    @Inject(LAB9_CLIENT) private readonly client: ClientProxy,
    private readonly events: EventsGateway,
  ) {}

  async calculate(dto: CalculateFormulaDto) {
    const row = await firstValueFrom(
      this.client.send<ResultRow>('lab9.formula.calculate', dto),
    );
    this.events.broadcastResultCreated(row);
    return row;
  }
}
