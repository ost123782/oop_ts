import { ClientProxy } from '@nestjs/microservices';
import { EventsGateway, ResultRow } from '../events/events.gateway';
import { GenerateNumbersDto, ReadNumbersDto } from './dto';
export declare class Lab8Service {
    private readonly client;
    private readonly events;
    constructor(client: ClientProxy, events: EventsGateway);
    generate(dto: GenerateNumbersDto): Promise<ResultRow>;
    read(dto: ReadNumbersDto): Promise<ResultRow>;
}
