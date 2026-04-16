import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class TrapezoidAreaDto {
  @ApiProperty({ description: 'Основа a трапеції', example: 5 })
  @IsNumber()
  @IsPositive()
  a: number;

  @ApiProperty({ description: 'Основа b трапеції', example: 10 })
  @IsNumber()
  @IsPositive()
  b: number;

  @ApiProperty({ description: 'Висота h трапеції', example: 4 })
  @IsNumber()
  @IsPositive()
  h: number;
}

export class TrapezoidAreaResponseDto {
  @ApiProperty({ description: 'Основа a', example: 5 })
  a: number;

  @ApiProperty({ description: 'Основа b', example: 10 })
  b: number;

  @ApiProperty({ description: 'Висота h', example: 4 })
  h: number;

  @ApiProperty({ description: 'Площа трапеції', example: 30 })
  area: number;
}
