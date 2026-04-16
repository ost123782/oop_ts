export class Driver {
  constructor(
    public name: string,
    public age: number,
    public experienceYears: number,
  ) {}
}

export class Car {
  constructor(
    public brand: string,
    public enginePower: number,
    public driver: Driver,
    public price: number,
    public year: number,
  ) {}
}

export class TaxiHelper {
  static pickRandom(cars: Car[]): Car {
    const idx = Math.floor(Math.random() * cars.length);
    return cars[idx]!;
  }

  static dispatch(car: Car): string {
    return `Автомобіль марки ${car.brand} з водієм ${car.driver.name} виїхав за вами`;
  }

  static arrive(car: Car): string {
    return `Водій ${car.driver.name} прибув на місце`;
  }
}
