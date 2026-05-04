import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ResultsModule } from './results/results.module';
import { EventsModule } from './events/events.module';
import { Lab8Module } from './lab8/lab8.module';
import { Lab9Module } from './lab9/lab9.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EventsModule,
    Lab8Module,
    Lab9Module,
    ResultsModule,
  ],
})
export class AppModule {}
