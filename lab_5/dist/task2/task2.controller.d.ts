import { Task2Service } from './task2.service';
import { FindMinDto, FindMinResponseDto } from './task2.dto';
export declare class Task2Controller {
    private readonly task2Service;
    constructor(task2Service: Task2Service);
    findMin(dto: FindMinDto): FindMinResponseDto;
}
