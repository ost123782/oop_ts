import { Module } from '@nestjs/common';
import { ResultsController } from './results.controller';
import { ResultsService } from './results.service';
import { EventsModule } from '../events/events.module';
import { Lab8Module } from '../lab8/lab8.module';
import { Lab9Module } from '../lab9/lab9.module';

@Module({
  imports: [EventsModule, Lab8Module, Lab9Module],
  controllers: [ResultsController],
  providers: [ResultsService],
})
export class ResultsModule {}
