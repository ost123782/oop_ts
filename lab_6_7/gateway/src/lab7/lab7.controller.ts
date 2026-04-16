import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { LAB7_CLIENT } from './lab7.constants';
import { TaxiRunDto } from './lab7.dto';

@Controller('lab7')
export class Lab7Controller {
  constructor(@Inject(LAB7_CLIENT) private readonly client: ClientProxy) {}

  @Post('taxi/run')
  @ApiTags('lab7/taxi')
  @ApiOperation({
    summary: 'Повний сценарій сервісу таксі (Завдання 1)',
    description:
      'Генерує автопарк, ремонтує половину, підвищує потужність/ціну кожній другій, ' +
      'відправляє водіїв на курси (якщо treba), випадково вибирає авто та відправляє водія на замовлення.',
  })
  taxiRun(@Body() dto: TaxiRunDto) {
    return firstValueFrom(this.client.send('taxi.run', dto));
  }

  @Post('phonebook/demo')
  @ApiTags('lab7/phonebook')
  @ApiOperation({
    summary: 'Демонстрація телефонної книги (Завдання 2)',
    description:
      'Заповнює книгу 10+ записами, демонструє put/get/remove/containsKey/containsValue/size, ' +
      'шукає абонента за прізвищем, видаляє довільний запис.',
  })
  phonebookDemo() {
    return firstValueFrom(this.client.send('phonebook.demo', {}));
  }
}
