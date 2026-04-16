import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TaxiService } from './taxi.service';

@Controller()
export class TaxiController {
  constructor(private readonly service: TaxiService) {}

  @MessagePattern('taxi.run')
  run(@Payload() payload: { fleetSize?: number }) {
    return this.service.run(payload);
  }
}
