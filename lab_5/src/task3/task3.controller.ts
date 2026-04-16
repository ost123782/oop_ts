import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task3Service } from './task3.service';
import { PrintArrayDto, PrintArrayResponseDto } from './task3.dto';

@ApiTags('task3')
@Controller('task3')
export class Task3Controller {
  constructor(private readonly task3Service: Task3Service) {}

  @Post('print-array')
  @ApiOperation({
    summary: 'Вивести масив',
    description:
      'Приймає масив чисел і повертає його у форматованому рядковому вигляді.',
  })
  @ApiResponse({
    status: 201,
    description: 'Масив відформатовано успішно',
    type: PrintArrayResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Некоректні вхідні дані' })
  printArray(@Body() dto: PrintArrayDto): PrintArrayResponseDto {
    const formatted = this.task3Service.printArray(dto.array);
    return { array: dto.array, formatted, length: dto.array.length };
  }
}
