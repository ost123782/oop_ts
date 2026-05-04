import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class GenerateNumbersDto {
  @ApiProperty({ example: 'numbers.txt' })
  @IsString()
  @IsNotEmpty()
  fileName!: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  min!: number;

  @ApiProperty({ example: 100 })
  @IsInt()
  max!: number;

  @ApiProperty({ example: 10 })
  @IsInt()
  @Min(1)
  @Max(10000)
  count!: number;
}

export class ReadNumbersDto {
  @ApiProperty({ example: 'numbers.txt' })
  @IsString()
  @IsNotEmpty()
  fileName!: string;
}
