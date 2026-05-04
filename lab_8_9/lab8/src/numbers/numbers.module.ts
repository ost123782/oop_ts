import { Module } from '@nestjs/common';
import { NumbersController } from './numbers.controller';
import { NumbersService } from './numbers.service';
import { NumbersRepository } from './numbers.repository';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [NumbersController],
  providers: [NumbersService, NumbersRepository, PrismaService],
})
export class NumbersModule {}
