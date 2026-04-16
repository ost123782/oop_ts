import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class FindMinDto {
  @ApiProperty({ description: 'Перше число', example: 15 })
  @IsNumber()
  a: number;

  @ApiProperty({ description: 'Друге число', example: 7 })
  @IsNumber()
  b: number;

  @ApiProperty({ description: 'Третє число', example: 23 })
  @IsNumber()
  c: number;
}

export class FindMinResponseDto {
  @ApiProperty({ description: 'Перше число', example: 15 })
  a: number;

  @ApiProperty({ description: 'Друге число', example: 7 })
  b: number;

  @ApiProperty({ description: 'Третє число', example: 23 })
  c: number;

  @ApiProperty({ description: 'Найменше число', example: 7 })
  min: number;

  @ApiProperty({
    description: 'Проміжні значення мінімуму (генератор)',
    example: [15, 7, 7],
    type: [Number],
  })
  steps: number[];
}
