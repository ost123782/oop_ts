import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NumbersModule } from './numbers/numbers.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), NumbersModule],
})
export class AppModule {}
