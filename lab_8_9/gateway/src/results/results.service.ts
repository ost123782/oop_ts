import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { LAB8_CLIENT, LAB9_CLIENT } from '../rmq/rmq.constants';
import { EventsGateway, ResultRow } from '../events/events.gateway';

export type LabKind = 'lab8' | 'lab9';

@Injectable()
export class ResultsService {
  constructor(
    @Inject(LAB8_CLIENT) private readonly lab8: ClientProxy,
    @Inject(LAB9_CLIENT) private readonly lab9: ClientProxy,
    private readonly events: EventsGateway,
  ) {}

  async list(lab?: LabKind): Promise<ResultRow[]> {
    const calls: Promise<ResultRow[]>[] = [];
    if (!lab || lab === 'lab8') {
      calls.push(firstValueFrom(this.lab8.send<ResultRow[]>('lab8.results.list', {})));
    }
    if (!lab || lab === 'lab9') {
      calls.push(firstValueFrom(this.lab9.send<ResultRow[]>('lab9.results.list', {})));
    }
    const buckets = await Promise.all(calls);
    return buckets
      .flat()
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
  }

  async remove(lab: LabKind, id: string): Promise<void> {
    const client = lab === 'lab8' ? this.lab8 : this.lab9;
    const result = await firstValueFrom(
      client.send<{ deleted: boolean; id: string; lab: LabKind }>(
        `${lab}.results.delete`,
        { id },
      ),
    );
    if (!result.deleted) {
      throw new NotFoundException(`result ${id} not found in ${lab}`);
    }
    this.events.broadcastResultDeleted({ id, lab });
  }
}
