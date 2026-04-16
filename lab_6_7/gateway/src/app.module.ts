import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Lab6Module } from './lab6/lab6.module';
import { Lab7Module } from './lab7/lab7.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    Lab6Module,
    Lab7Module,
  ],
})
export class AppModule {}
