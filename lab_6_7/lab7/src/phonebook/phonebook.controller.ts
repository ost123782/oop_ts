import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PhonebookService } from './phonebook.service';

@Controller()
export class PhonebookController {
  constructor(private readonly service: PhonebookService) {}

  @MessagePattern('phonebook.demo')
  demo() {
    return this.service.demo();
  }
}
