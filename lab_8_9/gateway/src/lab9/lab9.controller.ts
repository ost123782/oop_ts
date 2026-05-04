import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Lab9Service } from './lab9.service';
import { CalculateFormulaDto } from './dto';

@ApiTags('lab9')
@Controller('lab9/formula')
export class Lab9Controller {
  constructor(private readonly service: Lab9Service) {}

  @Post('calculate')
  calculate(@Body() dto: CalculateFormulaDto) {
    return this.service.calculate(dto);
  }
}
