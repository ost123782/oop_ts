import { Lab8Service } from './lab8.service';
import { GenerateNumbersDto, ReadNumbersDto } from './dto';
export declare class Lab8Controller {
    private readonly service;
    constructor(service: Lab8Service);
    generate(dto: GenerateNumbersDto): Promise<import("../events/events.gateway").ResultRow>;
    read(dto: ReadNumbersDto): Promise<import("../events/events.gateway").ResultRow>;
}
