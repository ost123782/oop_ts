import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class TaxiRunDto {
  @ApiProperty({
    example: 12,
    minimum: 10,
    maximum: 20,
    required: false,
    description: 'Кількість автомобілів (від 10 до 20). За замовчуванням 12.',
  })
  @IsOptional()
  @IsInt()
  @Min(10)
  @Max(20)
  fleetSize?: number;
}
