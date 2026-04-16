import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PersonModule } from './person/person.module';
import { PhoneModule } from './phone/phone.module';
import { CarModule } from './car/car.module';
import { LibraryCardModule } from './library-card/library-card.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PersonModule,
    PhoneModule,
    CarModule,
    LibraryCardModule,
  ],
})
export class AppModule {}
