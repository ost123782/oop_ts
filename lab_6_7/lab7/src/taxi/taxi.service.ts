import { Injectable } from '@nestjs/common';
import { Car, Driver, TaxiHelper } from './taxi';

const BRANDS = [
  'Toyota',
  'BMW',
  'Mercedes',
  'Audi',
  'Volkswagen',
  'Skoda',
  'Tesla',
  'Ford',
  'Hyundai',
  'Kia',
  'Renault',
  'Mazda',
  'Nissan',
  'Honda',
  'Peugeot',
];

const DRIVER_NAMES = [
  'Іван',
  'Петро',
  'Олег',
  'Андрій',
  'Микола',
  'Сергій',
  'Богдан',
  'Олексій',
  'Василь',
  'Тарас',
  'Дмитро',
  'Юрій',
  'Роман',
  'Віталій',
  'Максим',
];

const NEW_DRIVER_NAMES = [
  'Степан',
  'Назар',
  'Ігор',
  'Остап',
  'Артем',
  'Вадим',
  'Руслан',
  'Анатолій',
];

@Injectable()
export class TaxiService {
  run(input?: { fleetSize?: number }) {
    const size = Math.min(20, Math.max(10, input?.fleetSize ?? 12));
    const cars: Car[] = [];

    for (let i = 0; i < size; i++) {
      const driver = new Driver(
        DRIVER_NAMES[i % DRIVER_NAMES.length]!,
        20 + ((i * 3) % 30),
        (i * 2) % 10,
      );
      const car = new Car(
        BRANDS[i % BRANDS.length]!,
        80 + i * 5,
        driver,
        10000 + i * 500,
        2010 + (i % 15),
      );
      cars.push(car);
    }

    const initial = cars.map((c) => this.snapshot(c));

    const half = Math.floor(cars.length / 2);
    for (let i = 0; i < half; i++) {
      cars[i]!.enginePower = +(cars[i]!.enginePower * 1.1).toFixed(2);
      cars[i]!.driver = new Driver(
        NEW_DRIVER_NAMES[i % NEW_DRIVER_NAMES.length]!,
        25 + i,
        1 + i,
      );
    }

    for (let i = 0; i < cars.length; i += 2) {
      cars[i]!.enginePower = +(cars[i]!.enginePower * 1.1).toFixed(2);
      cars[i]!.price = +(cars[i]!.price * 1.05).toFixed(2);
    }

    const upskilled: string[] = [];
    for (const car of cars) {
      if (car.driver.experienceYears < 5 && car.driver.age > 25) {
        car.driver.experienceYears += 1;
        upskilled.push(
          `Водій ${car.driver.name} (вік ${car.driver.age}) пройшов курси — досвід тепер ${car.driver.experienceYears} р.`,
        );
      }
    }

    const picked = TaxiHelper.pickRandom(cars);
    const dispatch = TaxiHelper.dispatch(picked);
    const arrive = TaxiHelper.arrive(picked);

    return {
      fleetSize: size,
      initial,
      final: cars.map((c) => this.snapshot(c)),
      upskilled,
      pickedCar: this.snapshot(picked),
      actions: [dispatch, arrive],
    };
  }

  private snapshot(car: Car) {
    return {
      brand: car.brand,
      enginePower: car.enginePower,
      price: car.price,
      year: car.year,
      driver: {
        name: car.driver.name,
        age: car.driver.age,
        experienceYears: car.driver.experienceYears,
      },
    };
  }
}
