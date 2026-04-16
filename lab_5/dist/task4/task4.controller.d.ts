import { Task4Service } from './task4.service';
import { FindMaxDto, FindMaxResponseDto } from './task4.dto';
export declare class Task4Controller {
    private readonly task4Service;
    constructor(task4Service: Task4Service);
    findMax(dto: FindMaxDto): FindMaxResponseDto;
}
