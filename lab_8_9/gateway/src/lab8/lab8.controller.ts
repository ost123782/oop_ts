import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Lab8Service } from './lab8.service';
import { GenerateNumbersDto, ReadNumbersDto } from './dto';

@ApiTags('lab8')
@Controller('lab8/numbers')
export class Lab8Controller {
  constructor(private readonly service: Lab8Service) {}

  @Post('generate')
  generate(@Body() dto: GenerateNumbersDto) {
    return this.service.generate(dto);
  }

  @Post('read')
  read(@Body() dto: ReadNumbersDto) {
    return this.service.read(dto);
  }
}
