import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task1Service } from './task1.service';
import { TrapezoidAreaDto, TrapezoidAreaResponseDto } from './task1.dto';

@ApiTags('task1')
@Controller('task1')
export class Task1Controller {
  constructor(private readonly task1Service: Task1Service) {}

  @Post('trapezoid-area')
  @ApiOperation({
    summary: 'Обчислити площу трапеції',
    description:
      'Обчислює площу трапеції за формулою S = ((a + b) / 2) * h, де a і b — основи, h — висота.',
  })
  @ApiResponse({
    status: 201,
    description: 'Площу трапеції обчислено успішно',
    type: TrapezoidAreaResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Некоректні вхідні дані' })
  calculateArea(@Body() dto: TrapezoidAreaDto): TrapezoidAreaResponseDto {
    const area = this.task1Service.trapezoidArea(dto.a, dto.b, dto.h);
    return { a: dto.a, b: dto.b, h: dto.h, area };
  }
}
