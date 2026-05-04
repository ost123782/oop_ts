import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResultsService } from './results.service';
import type { LabKind } from './results.service';

@ApiTags('results')
@Controller('results')
export class ResultsController {
  constructor(private readonly service: ResultsService) {}

  @Get()
  list(@Query('lab') lab?: LabKind) {
    return this.service.list(lab);
  }

  @Delete(':lab/:id')
  remove(@Param('lab') lab: LabKind, @Param('id') id: string) {
    return this.service.remove(lab, id);
  }
}
