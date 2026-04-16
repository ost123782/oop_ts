import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsNumber } from 'class-validator';

export class FindMaxDto {
  @ApiProperty({
    description: 'Масив чисел для пошуку максимуму',
    example: [3, 17, 5, 42, 8, 1],
    type: [Number],
  })
  @IsArray()
  @ArrayMinSize(1)
  @IsNumber({}, { each: true })
  array: number[];
}

export class FindMaxResponseDto {
  @ApiProperty({
    description: 'Вхідний масив',
    example: [3, 17, 5, 42, 8, 1],
    type: [Number],
  })
  array: number[];

  @ApiProperty({ description: 'Найбільше число', example: 42 })
  max: number;
}
