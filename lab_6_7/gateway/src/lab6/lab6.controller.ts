import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { LAB6_CLIENT } from './lab6.constants';
import {
  ChangeBooksDto,
  CreateLibraryCardDto,
  PersonDto,
  SpecialLibraryCardDto,
} from './lab6.dto';

@Controller('lab6')
export class Lab6Controller {
  constructor(@Inject(LAB6_CLIENT) private readonly client: ClientProxy) {}

  @Post('person/demo')
  @ApiTags('lab6/person')
  @ApiOperation({
    summary: 'Демонстрація класу Person',
    description:
      'Створює два об’єкти: один через Person(), інший через Person(fullName, age). Викликає методи move() і talk().',
  })
  personDemo(@Body() dto: PersonDto) {
    return firstValueFrom(this.client.send('person.demo', dto));
  }

  @Post('phone/demo')
  @ApiTags('lab6/phone')
  @ApiOperation({
    summary: 'Демонстрація класу Phone',
    description:
      'Створює 3 екземпляри (через різні конструктори), демонструє receiveCall, getNumber, sendMessage та перевантажений receiveCall.',
  })
  phoneDemo() {
    return firstValueFrom(this.client.send('phone.demo', {}));
  }

  @Post('car/demo')
  @ApiTags('lab6/car')
  @ApiOperation({
    summary: 'Демонстрація ієрархії Car → Sedan / Truck',
    description:
      'Створює об’єкти Sedan та Truck, викликає gas() та brake() (абстрактний метод реалізовано в нащадках).',
  })
  carDemo() {
    return firstValueFrom(this.client.send('car.demo', {}));
  }

  @Post('library-card')
  @ApiTags('lab6/library-card')
  @ApiOperation({
    summary: 'Створити бібліотечну картку (варіант 6)',
  })
  createLibraryCard(@Body() dto: CreateLibraryCardDto) {
    return firstValueFrom(this.client.send('library-card.create', dto));
  }

  @Post('library-card/change-books')
  @ApiTags('lab6/library-card')
  @ApiOperation({
    summary: 'Збільшити / зменшити кількість взятих книг',
  })
  changeBooks(@Body() dto: ChangeBooksDto) {
    return firstValueFrom(this.client.send('library-card.change-books', dto));
  }

  @Post('library-card/special')
  @ApiTags('lab6/library-card')
  @ApiOperation({
    summary: 'Спадкоємець LibraryCard з номером квитка та штрафом',
    description:
      'Клас SpecialLibraryCard розширює LibraryCard двома полями (cardId, fine) та перевизначає метод виведення даних.',
  })
  specialLibraryCard(@Body() dto: SpecialLibraryCardDto) {
    return firstValueFrom(this.client.send('library-card.special', dto));
  }
}
