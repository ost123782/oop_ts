import { Injectable } from '@nestjs/common';
import { Phone } from './phone';

@Injectable()
export class PhoneService {
  demo() {
    const p1 = new Phone('+380501112233', 'iPhone 15', 171);
    const p2 = new Phone('+380671234567', 'Samsung Galaxy S24');
    const p3 = new Phone();
    p3.number = '+380931010101';
    p3.model = 'Xiaomi Redmi';
    p3.weight = 190;

    const phones = [p1, p2, p3].map((p) => ({
      number: p.number,
      model: p.model,
      weight: p.weight,
    }));

    const actions: string[] = [];
    actions.push(p1.receiveCall('Іван'));
    actions.push(p2.receiveCall('Олена', '+380971234567'));
    actions.push(`getNumber() → ${p3.getNumber()}`);
    actions.push(
      ...p1.sendMessage(p2.getNumber(), p3.getNumber(), '+380931112244'),
    );

    return { phones, actions };
  }
}
