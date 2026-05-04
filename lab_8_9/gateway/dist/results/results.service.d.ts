import { ClientProxy } from '@nestjs/microservices';
import { EventsGateway, ResultRow } from '../events/events.gateway';
export type LabKind = 'lab8' | 'lab9';
export declare class ResultsService {
    private readonly lab8;
    private readonly lab9;
    private readonly events;
    constructor(lab8: ClientProxy, lab9: ClientProxy, events: EventsGateway);
    list(lab?: LabKind): Promise<ResultRow[]>;
    remove(lab: LabKind, id: string): Promise<void>;
}
