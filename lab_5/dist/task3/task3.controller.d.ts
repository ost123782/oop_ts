import { Task3Service } from './task3.service';
import { PrintArrayDto, PrintArrayResponseDto } from './task3.dto';
export declare class Task3Controller {
    private readonly task3Service;
    constructor(task3Service: Task3Service);
    printArray(dto: PrintArrayDto): PrintArrayResponseDto;
}
