import { ClientProxy } from '@nestjs/microservices';
import { TaxiRunDto } from './lab7.dto';
export declare class Lab7Controller {
    private readonly client;
    constructor(client: ClientProxy);
    taxiRun(dto: TaxiRunDto): Promise<any>;
    phonebookDemo(): Promise<any>;
}
