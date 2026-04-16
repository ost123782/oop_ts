import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Task1Module } from './task1/task1.module';
import { Task2Module } from './task2/task2.module';
import { Task3Module } from './task3/task3.module';
import { Task4Module } from './task4/task4.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    Task1Module,
    Task2Module,
    Task3Module,
    Task4Module,
  ],
})
export class AppModule {}
