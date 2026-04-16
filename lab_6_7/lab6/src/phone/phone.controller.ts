import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PhoneService } from './phone.service';

@Controller()
export class PhoneController {
  constructor(private readonly service: PhoneService) {}

  @MessagePattern('phone.demo')
  demo() {
    return this.service.demo();
  }
}
