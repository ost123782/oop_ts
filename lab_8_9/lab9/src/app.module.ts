import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FormulaModule } from './formula/formula.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), FormulaModule],
})
export class AppModule {}
