import { Lab9Service } from './lab9.service';
import { CalculateFormulaDto } from './dto';
export declare class Lab9Controller {
    private readonly service;
    constructor(service: Lab9Service);
    calculate(dto: CalculateFormulaDto): Promise<import("../events/events.gateway").ResultRow>;
}
