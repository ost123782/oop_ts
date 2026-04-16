import { Injectable } from '@nestjs/common';
import { Sedan, Truck } from './car';

@Injectable()
export class CarService {
  demo() {
    const sedan = new Sedan('Toyota Camry', 'білий', 220);
    const truck = new Truck('MAN TGX', 'червоний', 130, 20);

    return {
      cars: [
        {
          type: 'Sedan',
          model: sedan.model,
          color: sedan.color,
          maxSpeed: sedan.maxSpeed,
        },
        {
          type: 'Truck',
          model: truck.model,
          color: truck.color,
          maxSpeed: truck.maxSpeed,
          loadCapacityTons: truck.loadCapacityTons,
        },
      ],
      actions: [sedan.gas(), sedan.brake(), truck.gas(), truck.brake()],
    };
  }
}
