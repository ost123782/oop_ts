import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PersonService } from './person.service';

@Controller()
export class PersonController {
  constructor(private readonly service: PersonService) {}

  @MessagePattern('person.demo')
  demo(@Payload() payload: { fullName?: string; age?: number }) {
    return this.service.demo(payload);
  }
}
