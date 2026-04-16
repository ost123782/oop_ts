import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateLibraryCardDto {
  @ApiProperty({ example: 'Іван' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Петренко' })
  @IsString()
  surname: string;

  @ApiProperty({ example: 3, minimum: 0 })
  @IsInt()
  @Min(0)
  booksTaken: number;
}

export class ChangeBooksDto {
  @ApiProperty({ example: 'Іван' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Петренко' })
  @IsString()
  surname: string;

  @ApiProperty({ example: 3, minimum: 0 })
  @IsInt()
  @Min(0)
  booksTaken: number;

  @ApiProperty({
    example: 1,
    description: 'Додатне — взяти книги, від’ємне — повернути',
  })
  @IsInt()
  delta: number;
}

export class SpecialLibraryCardDto {
  @ApiProperty({ example: 'Іван' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Петренко' })
  @IsString()
  surname: string;

  @ApiProperty({ example: 3, minimum: 0 })
  @IsInt()
  @Min(0)
  booksTaken: number;

  @ApiProperty({ example: 'K-12-345', description: 'Номер читацького квитка' })
  @IsString()
  cardId: string;

  @ApiProperty({ example: 250, description: 'Штраф за прострочення, грн' })
  @IsNumber()
  @Min(0)
  fine: number;
}

export class PersonDto {
  @ApiProperty({ example: 'Іван Петренко', required: false })
  @IsOptional()
  @IsString()
  fullName?: string;

  @ApiProperty({ example: 25, required: false })
  @IsOptional()
  @IsInt()
  @IsPositive()
  age?: number;
}
