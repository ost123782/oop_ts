import { ClientProxy } from '@nestjs/microservices';
import { EventsGateway, ResultRow } from '../events/events.gateway';
import { CalculateFormulaDto } from './dto';
export declare class Lab9Service {
    private readonly client;
    private readonly events;
    constructor(client: ClientProxy, events: EventsGateway);
    calculate(dto: CalculateFormulaDto): Promise<ResultRow>;
}
