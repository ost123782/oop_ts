export class Person {
  fullName: string;
  age: number;

  constructor();
  constructor(fullName: string, age: number);
  constructor(fullName?: string, age?: number) {
    this.fullName = fullName ?? 'Unknown';
    this.age = age ?? 0;
  }

  move(): string {
    return `${this.fullName} рухається`;
  }

  talk(): string {
    return `Такий-то Person ${this.fullName} говорить`;
  }
}
