import { Injectable } from '@nestjs/common';
import { Person } from './person';

@Injectable()
export class PersonService {
  demo(input?: { fullName?: string; age?: number }) {
    const p1 = new Person();
    const p2 = new Person(input?.fullName ?? 'Іван Петренко', input?.age ?? 25);

    return {
      persons: [
        { constructor: 'Person()', fullName: p1.fullName, age: p1.age },
        {
          constructor: 'Person(fullName, age)',
          fullName: p2.fullName,
          age: p2.age,
        },
      ],
      actions: [p1.talk(), p1.move(), p2.talk(), p2.move()],
    };
  }
}
