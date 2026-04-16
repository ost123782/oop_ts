import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CarService } from './car.service';

@Controller()
export class CarController {
  constructor(private readonly service: CarService) {}

  @MessagePattern('car.demo')
  demo() {
    return this.service.demo();
  }
}
