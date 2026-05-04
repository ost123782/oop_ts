import { Module } from '@nestjs/common';
import { FormulaController } from './formula.controller';
import { FormulaService } from './formula.service';
import { FormulaRepository } from './formula.repository';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [FormulaController],
  providers: [FormulaService, FormulaRepository, PrismaService],
})
export class FormulaModule {}
