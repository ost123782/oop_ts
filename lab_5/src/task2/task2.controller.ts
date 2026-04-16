import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task2Service } from './task2.service';
import { FindMinDto, FindMinResponseDto } from './task2.dto';

@ApiTags('task2')
@Controller('task2')
export class Task2Controller {
  constructor(private readonly task2Service: Task2Service) {}

  @Post('find-min')
  @ApiOperation({
    summary: 'Знайти найменше з трьох чисел',
    description:
      'Приймає три числа, повертає найменше. Використовує генератор для покрокового обчислення мінімуму.',
  })
  @ApiResponse({
    status: 201,
    description: 'Найменше число знайдено',
    type: FindMinResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Некоректні вхідні дані' })
  findMin(@Body() dto: FindMinDto): FindMinResponseDto {
    const { min, steps } = this.task2Service.findMin(dto.a, dto.b, dto.c);
    return { a: dto.a, b: dto.b, c: dto.c, min, steps };
  }
}
