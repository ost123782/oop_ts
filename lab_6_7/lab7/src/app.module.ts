import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TaxiModule } from './taxi/taxi.module';
import { PhonebookModule } from './phonebook/phonebook.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TaxiModule,
    PhonebookModule,
  ],
})
export class AppModule {}
