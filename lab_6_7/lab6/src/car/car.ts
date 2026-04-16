export abstract class Car {
  constructor(
    public model: string,
    public color: string,
    public maxSpeed: number,
  ) {}

  gas(): string {
    return `${this.model}: Газуємо!`;
  }

  abstract brake(): string;
}

export class Sedan extends Car {
  brake(): string {
    return `Седан ${this.model} плавно гальмує зі швидкості ${this.maxSpeed} км/год`;
  }
}

export class Truck extends Car {
  constructor(
    model: string,
    color: string,
    maxSpeed: number,
    public loadCapacityTons: number,
  ) {
    super(model, color, maxSpeed);
  }

  brake(): string {
    return `Вантажівка ${this.model} (${this.loadCapacityTons} т) довго гальмує`;
  }
}
