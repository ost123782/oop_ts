import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';

export class PrintArrayDto {
  @ApiProperty({
    description: 'Масив чисел для виведення',
    example: [1, 2, 3, 4, 5],
    type: [Number],
  })
  @IsArray()
  @IsNumber({}, { each: true })
  array: number[];
}

export class PrintArrayResponseDto {
  @ApiProperty({
    description: 'Вхідний масив',
    example: [1, 2, 3, 4, 5],
    type: [Number],
  })
  array: number[];

  @ApiProperty({
    description: 'Форматований рядок масиву',
    example: '[1, 2, 3, 4, 5]',
  })
  formatted: string;

  @ApiProperty({ description: 'Кількість елементів', example: 5 })
  length: number;
}
