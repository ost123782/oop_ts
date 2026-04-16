import { Module } from '@nestjs/common';
import { Task4Controller } from './task4.controller';
import { Task4Service } from './task4.service';

@Module({
  controllers: [Task4Controller],
  providers: [Task4Service],
})
export class Task4Module {}
