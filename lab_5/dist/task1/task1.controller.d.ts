import { Task1Service } from './task1.service';
import { TrapezoidAreaDto, TrapezoidAreaResponseDto } from './task1.dto';
export declare class Task1Controller {
    private readonly task1Service;
    constructor(task1Service: Task1Service);
    calculateArea(dto: TrapezoidAreaDto): TrapezoidAreaResponseDto;
}
