import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task4Service } from './task4.service';
import { FindMaxDto, FindMaxResponseDto } from './task4.dto';

@ApiTags('task4')
@Controller('task4')
export class Task4Controller {
  constructor(private readonly task4Service: Task4Service) {}

  @Post('find-max')
  @ApiOperation({
    summary: 'Знайти найбільше число з масиву',
    description: 'Приймає масив чисел і повертає найбільший елемент.',
  })
  @ApiResponse({
    status: 201,
    description: 'Найбільше число знайдено',
    type: FindMaxResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Некоректні вхідні дані' })
  findMax(@Body() dto: FindMaxDto): FindMaxResponseDto {
    const max = this.task4Service.findMax(dto.array);
    return { array: dto.array, max };
  }
}
